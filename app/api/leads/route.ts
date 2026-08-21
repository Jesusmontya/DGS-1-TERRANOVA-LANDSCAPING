import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendLeadWhatsApp } from '@/lib/whatsapp'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, city, service, message } = body

    if (!name || !phone || !city || !service) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    const supabase = createServerClient()
    const { data, error } = await supabase
      .from('leads')
      .insert([{ name, phone, email, city, service, message, source: 'website' }])
      .select()
      .single()

    if (error) throw error

    await sendLeadWhatsApp({ name, phone, email, city, service, message })

    return NextResponse.json({ success: true, id: data.id }, { status: 201 })
  } catch (err) {
    console.error('Lead error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
