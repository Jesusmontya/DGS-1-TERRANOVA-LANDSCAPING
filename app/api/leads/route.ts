import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendLeadEmail } from '@/lib/email'
import type { Lead } from '@/types'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 8
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
  // Honeypot support is intentionally passive. If a future form sends this
  // hidden field, humans leave it blank while basic form bots tend to fill it.
  const honeypot = String(body.company_website || '').trim()
  if (honeypot) return true

  // Optional timing signal. It only applies when a form sends the timestamp,
  // so it cannot interfere with existing forms.
  const startedAt = Number(body.form_started_at || 0)
  if (startedAt > 0 && Date.now() - startedAt < 900) return true

  return false
}

function fakeAcceptedResponse() {
  return NextResponse.json(
    { success: true, id: null, emailSent: false, message: 'Lead created successfully' },
    { status: 201 }
  )
}

export async function POST(req: NextRequest) {
  try {
    if (!req.headers.get('content-type')?.includes('application/json')) {
      return NextResponse.json({ error: 'Unsupported request' }, { status: 415 })
    }

    const body = await req.json()
    const ip = getClientIp(req)

    // Quietly absorb obvious automated submissions so bots do not learn how
    // to bypass the protection. Real visitors still see the normal form flow.
    if (isLikelyDirectBot(req) || looksAutomated(body)) {
      return fakeAcceptedResponse()
    }

    // Deliberately generous: a real customer can retry several times without
    // being blocked, while repeated automated posts from one IP are throttled.
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a few minutes or call us.' },
        { status: 429 }
      )
    }

    const {
      name,
      phone,
      email,
      city,
      service,
      message,
      budget,
      timeline,
      landing_page,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      gclid,
    } = body

    if (!name || !phone || !city || !service) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const paidMediums = new Set(['cpc', 'ppc', 'paid', 'paid_search'])
    const source: Lead['source'] = gclid || paidMediums.has(String(utm_medium || '').toLowerCase())
      ? 'google_ads'
      : 'website'

    const lead: Lead = {
      name,
      phone,
      email: email || null,
      city,
      service,
      message: message || null,
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
