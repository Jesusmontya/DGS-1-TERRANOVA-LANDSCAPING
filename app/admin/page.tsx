'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { CheckCircle2, CircleDollarSign, Clock3, Flame, LogOut, Mail, MapPin, MessageSquareText, Phone, Search, ShieldAlert, Sprout, Trash2, UserRound, UsersRound, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import styles from './Admin.module.css'

type LeadStatus = 'new' | 'contacted' | 'estimate_scheduled' | 'estimate_sent' | 'won' | 'lost' | 'spam'
type Priority = 'hot' | 'warm' | 'cold'

type Lead = {
  id: string
  created_at: string
  name: string
  phone: string
  email?: string | null
  city: string
  service: string
  message?: string | null
  budget?: string | null
  timeline?: string | null
  landing_page?: string | null
  referrer?: string | null
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  gclid?: string | null
  source?: string | null
  status?: LeadStatus | null
  estimated_value?: number | null
  notes?: string | null
  first_contacted_at?: string | null
  updated_at?: string | null
}

const statusOptions: { value: LeadStatus; label: string }[] = [
  { value: 'new', label: 'Nuevo' },
  { value: 'contacted', label: 'Contactado' },
  { value: 'estimate_scheduled', label: 'Cita agendada' },
  { value: 'estimate_sent', label: 'Cotización enviada' },
  { value: 'won', label: 'Ganado' },
  { value: 'lost', label: 'Perdido' },
  { value: 'spam', label: 'Spam' },
]

const statusLabel = (status?: LeadStatus | null) => statusOptions.find((item) => item.value === (status || 'new'))?.label || 'Nuevo'
const dateFmt = new Intl.DateTimeFormat('es-MX', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })

function budgetScore(budget?: string | null) {
  if (!budget) return 0
  if (budget.includes('$50,000+')) return 5
  if (budget.includes('$35,000')) return 4
  if (budget.includes('$20,000')) return 3
  if (budget.includes('$10,000')) return 2
  if (budget.includes('Under')) return 1
  return 0
}

function timelineScore(timeline?: string | null) {
  if (!timeline) return 0
  if (timeline === 'As soon as possible') return 4
  if (timeline === 'Within 1 month') return 3
  if (timeline === '1–3 months') return 2
  if (timeline === '3–6 months') return 1
  return 0
}

function getPriority(lead: Lead): Priority {
  const score = budgetScore(lead.budget) + timelineScore(lead.timeline)
  if (score >= 6) return 'hot'
  if (score >= 3) return 'warm'
  return 'cold'
}

function priorityLabel(priority: Priority) {
  if (priority === 'hot') return 'Hot'
  if (priority === 'warm') return 'Warm'
  return 'Cold'
}

export default function AdminPage() {
  const [sessionToken, setSessionToken] = useState<string | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [loadError, setLoadError] = useState('')
  const [selected, setSelected] = useState<Lead | null>(null)
  const [filter, setFilter] = useState<'all' | LeadStatus>('all')
  const [serviceFilter, setServiceFilter] = useState('all')
  const [sourceFilter, setSourceFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [saving, setSaving] = useState(false)
  const [draftNotes, setDraftNotes] = useState('')
  const [draftValue, setDraftValue] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const session = data.session
      setSessionToken(session?.access_token || null)
      if (session?.user?.email) setCurrentUser(session.user.email.split('@')[0])
      setAuthLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionToken(session?.access_token || null)
      setCurrentUser(session?.user?.email?.split('@')[0] || '')
      setAuthLoading(false)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (sessionToken) void loadLeads(sessionToken)
  }, [sessionToken])

  useEffect(() => {
    setDraftNotes(selected?.notes || '')
    setDraftValue(selected?.estimated_value ? String(selected.estimated_value) : '')
  }, [selected])

  async function loadLeads(token = sessionToken) {
    if (!token) return
    setLoading(true)
    setLoadError('')
    try {
      const response = await fetch('/api/admin/leads', { headers: { Authorization: `Bearer ${token}` } })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'No se pudieron cargar los leads')
      setLeads(payload.leads || [])
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : 'No se pudieron cargar los leads')
    } finally {
      setLoading(false)
    }
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    setAuthError('')
    setAuthLoading(true)

    const rawLogin = username.trim().toLowerCase()
    const cleanUser = rawLogin.replace(/[^a-z0-9._-]/g, '')
    const email = rawLogin.includes('@') ? rawLogin : `${cleanUser}@terranovalandscapingnv.com`
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setAuthError('Usuario o contraseña incorrectos')
      setAuthLoading(false)
      return
    }

    setCurrentUser(email.split('@')[0])
  }

  async function updateLead(id: string, updates: Partial<Lead>) {
    if (!sessionToken) return
    setSaving(true)
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionToken}` },
        body: JSON.stringify({ id, ...updates }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'No se pudo actualizar el lead')
      setLeads((current) => current.map((lead) => (lead.id === id ? payload.lead : lead)))
      setSelected(payload.lead)
    } catch (error) {
      alert(error instanceof Error ? error.message : 'No se pudo actualizar el lead')
    } finally {
      setSaving(false)
    }
  }

  async function deleteLead(lead: Lead) {
    if (!sessionToken) return
    const confirmed = window.confirm(`¿Borrar definitivamente el lead de ${lead.name}? Esta acción no se puede deshacer.`)
    if (!confirmed) return

    setSaving(true)
    try {
      const response = await fetch('/api/admin/leads', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionToken}` },
        body: JSON.stringify({ id: lead.id }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'No se pudo borrar el lead')
      setLeads((current) => current.filter((item) => item.id !== lead.id))
      setSelected(null)
    } catch (error) {
      alert(error instanceof Error ? error.message : 'No se pudo borrar el lead')
    } finally {
      setSaving(false)
    }
  }

  const services = useMemo(() => Array.from(new Set(leads.map((lead) => lead.service).filter(Boolean))).sort(), [leads])
  const sources = useMemo(() => Array.from(new Set(leads.map((lead) => lead.source || 'website'))).sort(), [leads])

  const filteredLeads = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return leads.filter((lead) => {
      const matchesStatus = filter === 'all' || (lead.status || 'new') === filter
      const matchesService = serviceFilter === 'all' || lead.service === serviceFilter
      const matchesSource = sourceFilter === 'all' || (lead.source || 'website') === sourceFilter
      const searchable = `${lead.name} ${lead.phone} ${lead.email || ''} ${lead.city} ${lead.service} ${lead.budget || ''} ${lead.timeline || ''} ${lead.utm_campaign || ''}`.toLowerCase()
      return matchesStatus && matchesService && matchesSource && (!normalized || searchable.includes(normalized))
    })
  }, [leads, filter, serviceFilter, sourceFilter, query])

  const metrics = useMemo(() => {
    const activeLeads = leads.filter((lead) => lead.status !== 'spam')
    const count = (status: LeadStatus) => activeLeads.filter((lead) => (lead.status || 'new') === status).length
    return {
      new: count('new'),
      contacted: count('contacted'),
      estimates: count('estimate_scheduled') + count('estimate_sent'),
      won: count('won'),
      highValue: activeLeads.filter((lead) => budgetScore(lead.budget) >= 3).length,
    }
  }, [leads])

  if (authLoading) return <div className={styles.centerScreen}><div className={styles.loader} /></div>

  if (!sessionToken) {
    return (
      <main className={styles.loginPage}>
        <section className={styles.loginCard}>
          <div className={styles.loginBrand}><span>TN</span><div><strong>TerraNova</strong><small>CRM</small></div></div>
          <div className={styles.loginCopy}><p className={styles.eyebrow}>PANEL PRIVADO</p><h1>Admin de leads</h1><p>Entra para ver clientes nuevos, dar seguimiento y cerrar trabajos.</p></div>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <label>Usuario o email<input value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" /></label>
            <label>Contraseña<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>
            {authError && <p className={styles.errorText}>{authError}</p>}
            <button type="submit">Entrar</button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><span>TN</span><div><strong>TerraNova</strong><small>CRM</small></div></div>
        <nav><a className={styles.activeNav} href="#leads"><UsersRound size={18} /> Leads <span>{leads.filter((lead) => lead.status !== 'spam').length}</span></a></nav>
        <div className={styles.sidebarBottom}><div className={styles.userChip}><UserRound size={17} /><div><strong>{currentUser || 'admin'}</strong><small>Administrador</small></div></div><button onClick={() => supabase.auth.signOut()}><LogOut size={17} /> Salir</button></div>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}><div><p className={styles.eyebrow}>TERRANOVA LANDSCAPING</p><h1>Hola, {currentUser || 'admin'}</h1></div><button className={styles.refreshButton} onClick={() => loadLeads()} disabled={loading}>{loading ? 'Actualizando…' : 'Actualizar'}</button></header>
        {loadError && <div className={styles.errorBanner}>{loadError}</div>}

        <section className={styles.metrics}>
          <Metric icon={<Sprout size={19} />} label="Nuevos" value={metrics.new} detail="Necesitan atención" />
          <Metric icon={<Phone size={19} />} label="Contactados" value={metrics.contacted} detail="Ya se les habló" />
          <Metric icon={<Clock3 size={19} />} label="Cotizaciones" value={metrics.estimates} detail="Agendadas o enviadas" />
          <Metric icon={<CheckCircle2 size={19} />} label="Ganados" value={metrics.won} detail="Trabajos cerrados" />
          <Metric icon={<CircleDollarSign size={19} />} label="Leads $20k+" value={metrics.highValue} detail="Presupuesto declarado" />
        </section>

        <section className={styles.panel} id="leads">
          <div className={styles.panelHeader}><div><p className={styles.eyebrow}>CLIENTES</p><h2>Leads</h2></div><div className={styles.search}><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar nombre, teléfono, ciudad o campaña" /></div></div>

          <div className={styles.filters}>
            <button className={filter === 'all' ? styles.filterActive : ''} onClick={() => setFilter('all')}>Todos <span>{leads.length}</span></button>
            {statusOptions.map((status) => <button key={status.value} className={filter === status.value ? styles.filterActive : ''} onClick={() => setFilter(status.value)}>{status.label}</button>)}
          </div>

          <div className={styles.filterRow}>
            <label>Servicio<select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}><option value="all">Todos</option>{services.map((service) => <option value={service} key={service}>{service}</option>)}</select></label>
            <label>Fuente<select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)}><option value="all">Todas</option>{sources.map((source) => <option value={source} key={source}>{source}</option>)}</select></label>
          </div>

          <div className={styles.tableWrap}>
            <table>
              <thead><tr><th>Cliente</th><th>Prioridad</th><th>Servicio</th><th>Presupuesto</th><th>Timing</th><th>Estado</th><th>Recibido</th></tr></thead>
              <tbody>
                {filteredLeads.map((lead) => {
                  const priority = getPriority(lead)
                  return <tr key={lead.id} onClick={() => setSelected(lead)}>
                    <td><strong>{lead.name}</strong><small>{lead.phone} · {lead.city}</small></td>
                    <td><span className={`${styles.priority} ${styles[`priority_${priority}`]}`}><Flame size={12} /> {priorityLabel(priority)}</span></td>
                    <td>{lead.service}</td>
                    <td>{lead.budget || '—'}</td>
                    <td>{lead.timeline || '—'}</td>
                    <td><span className={`${styles.status} ${styles[`status_${lead.status || 'new'}`]}`}>{statusLabel(lead.status)}</span></td>
                    <td>{dateFmt.format(new Date(lead.created_at))}</td>
                  </tr>
                })}
                {!filteredLeads.length && <tr><td colSpan={7} className={styles.empty}>No hay leads en esta vista.</td></tr>}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      {selected && (
        <div className={styles.drawerBackdrop} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null) }}>
          <aside className={styles.drawer}>
            <div className={styles.drawerHeader}><div><p className={styles.eyebrow}>DETALLES DEL LEAD</p><h2>{selected.name}</h2><span className={`${styles.priority} ${styles[`priority_${getPriority(selected)}`]}`}><Flame size={12} /> {priorityLabel(getPriority(selected))}</span></div><button className={styles.iconButton} onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button></div>

            <div className={styles.quickActions}><a href={`tel:${selected.phone}`}><Phone size={17} /> Llamar</a><a href={`sms:${selected.phone}`}><MessageSquareText size={17} /> Mensaje</a>{selected.email && <a href={`mailto:${selected.email}`}><Mail size={17} /> Email</a>}</div>

            <div className={styles.drawerSection}><label className={styles.fieldLabel}>Estado</label><select value={selected.status || 'new'} disabled={saving} onChange={(e) => updateLead(selected.id, { status: e.target.value as LeadStatus })}>{statusOptions.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}</select></div>

            <div className={styles.infoGrid}>
              <Info icon={<Phone size={16} />} label="Teléfono" value={selected.phone} />
              <Info icon={<Mail size={16} />} label="Email" value={selected.email || 'No proporcionado'} />
              <Info icon={<MapPin size={16} />} label="Ciudad / proyecto" value={selected.city} />
              <Info icon={<Sprout size={16} />} label="Servicio" value={selected.service} />
              <Info icon={<CircleDollarSign size={16} />} label="Presupuesto del cliente" value={selected.budget || 'No proporcionado'} />
              <Info icon={<Clock3 size={16} />} label="Quiere empezar" value={selected.timeline || 'No proporcionado'} />
            </div>

            <div className={styles.attributionBox}>
              <p className={styles.fieldLabel}>Atribución</p>
              <div><span>Página de entrada</span><strong>{selected.landing_page || 'No disponible'}</strong></div>
              <div><span>Fuente</span><strong>{selected.source || 'website'}</strong></div>
              <div><span>UTM source / medium</span><strong>{selected.utm_source || '—'} / {selected.utm_medium || '—'}</strong></div>
              <div><span>Campaña</span><strong>{selected.utm_campaign || '—'}</strong></div>
              <div><span>Referrer</span><strong>{selected.referrer || '—'}</strong></div>
              <div><span>GCLID</span><strong>{selected.gclid || '—'}</strong></div>
            </div>

            <div className={styles.drawerSection}><p className={styles.fieldLabel}>Qué necesita</p><div className={styles.messageBox}>{selected.message || 'No dejó detalles adicionales.'}</div></div>
            <div className={styles.drawerSection}><label className={styles.fieldLabel}>Valor estimado del trabajo</label><div className={styles.moneyInput}><span>$</span><input type="number" min="0" step="100" value={draftValue} onChange={(e) => setDraftValue(e.target.value)} placeholder="18000" /></div></div>
            <div className={styles.drawerSection}><label className={styles.fieldLabel}>Notas</label><textarea rows={5} value={draftNotes} onChange={(e) => setDraftNotes(e.target.value)} placeholder="Presupuesto, cita, detalles importantes…" /></div>
            <button className={styles.saveButton} disabled={saving} onClick={() => updateLead(selected.id, { notes: draftNotes, estimated_value: draftValue ? Number(draftValue) : null })}>{saving ? 'Guardando…' : 'Guardar cambios'}</button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
              <button
                type="button"
                disabled={saving || selected.status === 'spam'}
                onClick={() => updateLead(selected.id, { status: 'spam' })}
                style={{ border: '1px solid #e5c47a', borderRadius: 11, background: '#fff7df', color: '#76591b', fontWeight: 800, padding: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}
              ><ShieldAlert size={16} /> {selected.status === 'spam' ? 'Marcado como spam' : 'Marcar como spam'}</button>
              <button
                type="button"
                disabled={saving}
                onClick={() => deleteLead(selected)}
                style={{ border: '1px solid #efcaca', borderRadius: 11, background: '#fff1f1', color: '#9b3f3f', fontWeight: 800, padding: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}
              ><Trash2 size={16} /> Borrar lead</button>
            </div>
            <p style={{ margin: '8px 2px 0', color: '#8a948c', fontSize: 10, lineHeight: 1.5 }}>Spam se conserva para referencia y deja de contar en las métricas. Borrar elimina el lead definitivamente.</p>

            <div className={styles.timeline}><p className={styles.fieldLabel}>Actividad</p><div><span /><p><strong>Lead recibido</strong><small>{dateFmt.format(new Date(selected.created_at))}</small></p></div>{selected.first_contacted_at && <div><span /><p><strong>Primer contacto</strong><small>{dateFmt.format(new Date(selected.first_contacted_at))}</small></p></div>}</div>
          </aside>
        </div>
      )}
    </main>
  )
}

function Metric({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string | number; detail: string }) {
  return <article className={styles.metric}><div className={styles.metricTop}><span>{icon}</span><p>{label}</p></div><strong>{value}</strong><small>{detail}</small></article>
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className={styles.infoItem}><span>{icon}</span><div><small>{label}</small><strong>{value}</strong></div></div>
}
