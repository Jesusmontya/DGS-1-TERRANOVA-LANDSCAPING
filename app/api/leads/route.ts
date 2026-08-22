import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendLeadWhatsApp } from '@/lib/whatsapp'
import type { Lead } from '@/types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
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

    let whatsappSent = true

    try {
      await sendLeadWhatsApp(lead)
    } catch (whatsappError) {
      whatsappSent = false
      console.error('WhatsApp notification failed:', whatsappError)
    }

    return NextResponse.json(
      {
        success: true,
        id: data.id,
        whatsappSent,
        message: whatsappSent
          ? 'Lead created successfully'
          : 'Lead created successfully; WhatsApp notification failed',
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
