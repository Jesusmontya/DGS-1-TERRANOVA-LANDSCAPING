import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

const allowedStatuses = new Set(['new', 'contacted', 'estimate_scheduled', 'estimate_sent', 'won', 'lost'])

async function getAuthorizedClient(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''

  if (!token) return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }

  const supabase = createServerClient()
  const { data: { user }, error } = await supabase.auth.getUser(token)

  if (error || !user) {
    return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }
  }

  return { supabase, user }
}

export async function GET(req: NextRequest) {
  try {
    const auth = await getAuthorizedClient(req)
    if ('error' in auth) return auth.error

    const { data, error } = await auth.supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ leads: data || [] })
  } catch (err) {
    console.error('Admin leads GET error:', err)
    return NextResponse.json({ error: 'Could not load leads' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const auth = await getAuthorizedClient(req)
    if ('error' in auth) return auth.error

    const body = await req.json()
    const { id, status, notes, estimated_value } = body

    if (!id) return NextResponse.json({ error: 'Lead id is required' }, { status: 400 })
    if (status && !allowedStatuses.has(status)) {
      return NextResponse.json({ error: 'Invalid lead status' }, { status: 400 })
    }

    const updates: Record<string, unknown> = { updated_at: new Date().toISOString() }

    if (typeof notes === 'string') updates.notes = notes
    if (estimated_value === null || typeof estimated_value === 'number') updates.estimated_value = estimated_value

    if (status) {
      updates.status = status
      if (status === 'contacted') {
        const { data: existing } = await auth.supabase
          .from('leads')
          .select('first_contacted_at')
          .eq('id', id)
          .single()
        if (!existing?.first_contacted_at) updates.first_contacted_at = new Date().toISOString()
      }
    }

    const { data, error } = await auth.supabase
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select('*')
      .single()

    if (error) throw error

    return NextResponse.json({ lead: data })
  } catch (err) {
    console.error('Admin leads PATCH error:', err)
    return NextResponse.json({ error: 'Could not update lead' }, { status: 500 })
  }
}
