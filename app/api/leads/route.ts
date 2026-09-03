import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendLeadEmail } from '@/lib/email'
import type { Lead } from '@/types'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 8
const MIN_FORM_COMPLETION_MS = 2_500
const DUPLICATE_WINDOW_MS = 24 * 60 * 60 * 1000
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || ''
}

function isRateLimited(ip: string) {
  if (!ip) return false

  const now = Date.now()
  const existing = rateLimitStore.get(ip)

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  existing.count += 1
  rateLimitStore.set(ip, existing)
  return existing.count > RATE_LIMIT_MAX
}

function isLikelyDirectBot(req: NextRequest) {
  const origin = req.headers.get('origin')
  const host = req.headers.get('host')
  const fetchSite = req.headers.get('sec-fetch-site')
  const userAgent = req.headers.get('user-agent')

  // Normal submissions come from fetch() running on our own website.
  // Generic scripts commonly omit all of these browser headers.
  if (!origin && !fetchSite && !userAgent) return true

  if (origin && host) {
    try {
      const originHost = new URL(origin).host
      if (originHost !== host) return true
    } catch {
      return true
    }
  }

  if (fetchSite && fetchSite !== 'same-origin' && fetchSite !== 'same-site') {
    return true
  }

  return false
}

function looksAutomated(body: Record<string, unknown>) {
  const honeypot = String(body.company_website || '').trim()
  if (honeypot) return true

  const startedAt = Number(body.form_started_at || 0)
  if (!startedAt || Date.now() - startedAt < MIN_FORM_COMPLETION_MS) return true

  return false
}

function normalizeText(value: unknown, maxLength: number) {
  return String(value ?? '').trim().slice(0, maxLength)
}

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10 && digits.length <= 15
}

function isValidEmail(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function isRecentDuplicate(phone: string) {
  const supabase = createServerClient()
  const since = new Date(Date.now() - DUPLICATE_WINDOW_MS).toISOString()
  const { data, error } = await supabase
    .from('leads')
    .select('id')
    .eq('phone', phone)
    .gte('created_at', since)
    .limit(1)

  if (error) throw error
  return Boolean(data?.length)
}

export async function POST(req: NextRequest) {
  try {
    if (!req.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported request' }, { status: 415 })
    }

    const rawBody = await req.json()
    if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const body = rawBody as Record<string, unknown>
    const ip = getClientIp(req)

    // Quietly absorb obvious automated submissions so bots do not learn how
    // to bypass the protection. Real visitors still see the normal form flow.
    if (isLikelyDirectBot(req) || looksAutomated(body)) {
      return NextResponse.json({ success: true, accepted: false, conversionEligible: false }, { status: 201 })
    }

    // Deliberately generous: a real customer can retry several times without
    // being blocked, while repeated automated posts from one IP are throttled.
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a few minutes or call us.' },
        { status: 429 }
      )
    }

    const name = normalizeText(body.name, 100)
    const phone = normalizeText(body.phone, 30)
    const email = normalizeText(body.email, 160).toLowerCase()
    const city = normalizeText(body.city, 120)
    const service = normalizeText(body.service, 120)
    const message = normalizeText(body.message, 2_000)
    const budget = normalizeText(body.budget, 80)
    const timeline = normalizeText(body.timeline, 80)
    const landing_page = normalizeText(body.landing_page, 300)
    const referrer = normalizeText(body.referrer, 500)
    const utm_source = normalizeText(body.utm_source, 160)
    const utm_medium = normalizeText(body.utm_medium, 160)
    const utm_campaign = normalizeText(body.utm_campaign, 160)
    const gclid = normalizeText(body.gclid, 300)

    if (!name || !phone || !city || !service || !isValidPhone(phone) || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const paidMediums = new Set(['cpc', 'ppc', 'paid', 'paid_search'])
    const source: Lead['source'] = gclid || paidMediums.has(String(utm_medium || '').toLowerCase())
      ? 'google_ads'
      : 'website'

    const lead: Lead = {
      name,
      phone,
      email: email || undefined,
      city,
      service,
      message: message || undefined,
      budget: budget || null,
      timeline: timeline || null,
      landing_page: landing_page || null,
      referrer: referrer || null,
      utm_source: utm_source || null,
      utm_medium: utm_medium || null,
      utm_campaign: utm_campaign || null,
      gclid: gclid || null,
      source,
    }

    if (await isRecentDuplicate(phone)) {
      return NextResponse.json({ success: true, accepted: false, duplicate: true, conversionEligible: false }, { status: 201 })
    }

    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('leads')
      .insert([lead])
      .select()
      .single()

    if (error) throw error

    let emailSent = true

    try {
      await sendLeadEmail(lead)
    } catch (emailError) {
      emailSent = false
      console.error('Lead email notification failed:', emailError)
    }

    return NextResponse.json(
      {
        success: true,
        accepted: true,
        conversionEligible: Boolean(email && message.length >= 12 && budget && timeline),
        id: data.id,
        emailSent,
        message: emailSent
          ? 'Lead created successfully'
          : 'Lead created successfully; email notification failed',
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
