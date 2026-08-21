'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { CheckCircle2, Clock3, LogOut, Mail, MapPin, MessageSquareText, Phone, Search, Sprout, UserRound, UsersRound, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import styles from './Admin.module.css'

type LeadStatus = 'new' | 'contacted' | 'estimate_scheduled' | 'estimate_sent' | 'won' | 'lost'

type Lead = {
  id: string
  created_at: string
  name: string
  phone: string
  email?: string | null
  city: string
  service: string
  message?: string | null
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
]

const statusLabel = (status?: LeadStatus | null) =>
  statusOptions.find((item) => item.value === (status || 'new'))?.label || 'Nuevo'

const dateFmt = new Intl.DateTimeFormat('es-MX', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })

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

    const cleanUser = username.trim().toLowerCase().replace(/[^a-z0-9._-]/g, '')
    const email = `${cleanUser}@terranova.local`
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setAuthError('Usuario o contraseña incorrectos')
      setAuthLoading(false)
      return
    }

    setCurrentUser(cleanUser)
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

  const filteredLeads = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return leads.filter((lead) => {
      const matchesStatus = filter === 'all' || (lead.status || 'new') === filter
      const searchable = `${lead.name} ${lead.phone} ${lead.email || ''} ${lead.city} ${lead.service}`.toLowerCase()
      return matchesStatus && (!normalized || searchable.includes(normalized))
    })
  }, [leads, filter, query])

  const metrics = useMemo(() => {
    const count = (status: LeadStatus) => leads.filter((lead) => (lead.status || 'new') === status).length
    return {
      new: count('new'),
      contacted: count('contacted'),
      estimates: count('estimate_scheduled') + count('estimate_sent'),
      won: count('won'),
    }
  }, [leads])

  if (authLoading) return <div className={styles.centerScreen}><div className={styles.loader} /></div>

  if (!sessionToken) {
    return (
      <main className={styles.loginPage}>
        <section className={styles.loginCard}>
          <div className={styles.loginBrand}><span>TN</span><div><strong>TerraNova</strong><small>CRM</small></div></div>
          <div className={styles.loginCopy}>
            <p className={styles.eyebrow}>PANEL PRIVADO</p>
            <h1>Admin de leads</h1>
            <p>Entra para ver clientes nuevos, dar seguimiento y cerrar trabajos.</p>
          </div>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <label>Usuario<input value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" /></label>
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
        <nav><a className={styles.activeNav} href="#leads"><UsersRound size={18} /> Leads <span>{leads.length}</span></a></nav>
        <div className={styles.sidebarBottom}>
          <div className={styles.userChip}><UserRound size={17} /><div><strong>{currentUser || 'admin'}</strong><small>Administrador</small></div></div>
          <button onClick={() => supabase.auth.signOut()}><LogOut size={17} /> Salir</button>
        </div>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}>
          <div><p className={styles.eyebrow}>TERRANOVA LANDSCAPING</p><h1>Hola, {currentUser || 'admin'}</h1></div>
          <button className={styles.refreshButton} onClick={() => loadLeads()} disabled={loading}>{loading ? 'Actualizando…' : 'Actualizar'}</button>
        </header>

        {loadError && <div className={styles.errorBanner}>{loadError}</div>}

        <section className={styles.metrics}>
          <Metric icon={<Sprout size={19} />} label="Nuevos" value={metrics.new} detail="Necesitan atención" />
          <Metric icon={<Phone size={19} />} label="Contactados" value={metrics.contacted} detail="Ya se les habló" />
          <Metric icon={<Clock3 size={19} />} label="Cotizaciones" value={metrics.estimates} detail="Agendadas o enviadas" />
          <Metric icon={<CheckCircle2 size={19} />} label="Ganados" value={metrics.won} detail="Trabajos cerrados" />
        </section>

        <section className={styles.panel} id="leads">
          <div className={styles.panelHeader}>
            <div><p className={styles.eyebrow}>CLIENTES</p><h2>Leads</h2></div>
            <div className={styles.search}><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar nombre, teléfono o ciudad" /></div>
          </div>

          <div className={styles.filters}>
            <button className={filter === 'all' ? styles.filterActive : ''} onClick={() => setFilter('all')}>Todos <span>{leads.length}</span></button>
            {statusOptions.map((status) => <button key={status.value} className={filter === status.value ? styles.filterActive : ''} onClick={() => setFilter(status.value)}>{status.label}</button>)}
          </div>

          <div className={styles.tableWrap}>
            <table>
              <thead><tr><th>Cliente</th><th>Servicio</th><th>Ciudad</th><th>Estado</th><th>Recibido</th></tr></thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} onClick={() => setSelected(lead)}>
                    <td><strong>{lead.name}</strong><small>{lead.phone}</small></td>
                    <td>{lead.service}</td>
                    <td>{lead.city}</td>
                    <td><span className={`${styles.status} ${styles[`status_${lead.status || 'new'}`]}`}>{statusLabel(lead.status)}</span></td>
                    <td>{dateFmt.format(new Date(lead.created_at))}</td>
                  </tr>
                ))}
                {!filteredLeads.length && <tr><td colSpan={5} className={styles.empty}>No hay leads en esta vista.</td></tr>}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      {selected && (
        <div className={styles.drawerBackdrop} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null) }}>
          <aside className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <div><p className={styles.eyebrow}>DETALLES DEL LEAD</p><h2>{selected.name}</h2></div>
              <button className={styles.iconButton} onClick={() => setSelected(null)} aria-label="Cerrar"><X size={20} /></button>
            </div>

            <div className={styles.quickActions}>
              <a href={`tel:${selected.phone}`}><Phone size={17} /> Llamar</a>
              <a href={`sms:${selected.phone}`}><MessageSquareText size={17} /> Mensaje</a>
              {selected.email && <a href={`mailto:${selected.email}`}><Mail size={17} /> Email</a>}
            </div>

            <div className={styles.drawerSection}>
              <label className={styles.fieldLabel}>Estado</label>
              <select value={selected.status || 'new'} disabled={saving} onChange={(e) => updateLead(selected.id, { status: e.target.value as LeadStatus })}>
                {statusOptions.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}
              </select>
            </div>

            <div className={styles.infoGrid}>
              <Info icon={<Phone size={16} />} label="Teléfono" value={selected.phone} />
              <Info icon={<Mail size={16} />} label="Email" value={selected.email || 'No proporcionado'} />
              <Info icon={<MapPin size={16} />} label="Ciudad" value={selected.city} />
              <Info icon={<Sprout size={16} />} label="Servicio" value={selected.service} />
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.fieldLabel}>Qué necesita</p>
              <div className={styles.messageBox}>{selected.message || 'No dejó detalles adicionales.'}</div>
            </div>

            <div className={styles.drawerSection}>
              <label className={styles.fieldLabel}>Valor estimado del trabajo</label>
              <div className={styles.moneyInput}><span>$</span><input type="number" min="0" step="100" value={draftValue} onChange={(e) => setDraftValue(e.target.value)} placeholder="18000" /></div>
            </div>

            <div className={styles.drawerSection}>
              <label className={styles.fieldLabel}>Notas</label>
              <textarea rows={5} value={draftNotes} onChange={(e) => setDraftNotes(e.target.value)} placeholder="Presupuesto, cita, detalles importantes…" />
            </div>

            <button className={styles.saveButton} disabled={saving} onClick={() => updateLead(selected.id, { notes: draftNotes, estimated_value: draftValue ? Number(draftValue) : null })}>{saving ? 'Guardando…' : 'Guardar cambios'}</button>

            <div className={styles.timeline}>
              <p className={styles.fieldLabel}>Actividad</p>
              <div><span /><p><strong>Lead recibido</strong><small>{dateFmt.format(new Date(selected.created_at))}</small></p></div>
              {selected.first_contacted_at && <div><span /><p><strong>Primer contacto</strong><small>{dateFmt.format(new Date(selected.first_contacted_at))}</small></p></div>}
            </div>
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
