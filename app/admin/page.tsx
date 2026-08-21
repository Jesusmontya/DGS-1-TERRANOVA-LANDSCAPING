'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import {
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  DollarSign,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Search,
  Sprout,
  UserRound,
  UsersRound,
  X,
} from 'lucide-react'
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
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'estimate_scheduled', label: 'Estimate Scheduled' },
  { value: 'estimate_sent', label: 'Estimate Sent' },
  { value: 'won', label: 'Won' },
  { value: 'lost', label: 'Lost' },
]

const statusLabel = (status?: LeadStatus | null) =>
  statusOptions.find((item) => item.value === (status || 'new'))?.label || 'New'

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
const dateFmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })

export default function AdminPage() {
  const [sessionToken, setSessionToken] = useState<string | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [email, setEmail] = useState('')
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
      setSessionToken(data.session?.access_token || null)
      setAuthLoading(false)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSessionToken(session?.access_token || null)
      setAuthLoading(false)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (!sessionToken) return
    void loadLeads(sessionToken)
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
      if (!response.ok) throw new Error(payload.error || 'Could not load leads')
      setLeads(payload.leads || [])
      if (selected) {
        const fresh = (payload.leads || []).find((lead: Lead) => lead.id === selected.id)
        if (fresh) setSelected(fresh)
      }
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : 'Could not load leads')
    } finally {
      setLoading(false)
    }
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    setAuthError('')
    setAuthLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setAuthError(error.message)
      setAuthLoading(false)
    }
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
      if (!response.ok) throw new Error(payload.error || 'Could not update lead')
      setLeads((current) => current.map((lead) => (lead.id === id ? payload.lead : lead)))
      setSelected(payload.lead)
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Could not update lead')
    } finally {
      setSaving(false)
    }
  }

  const filteredLeads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return leads.filter((lead) => {
      const matchesStatus = filter === 'all' || (lead.status || 'new') === filter
      const searchable = `${lead.name} ${lead.phone} ${lead.email || ''} ${lead.city} ${lead.service}`.toLowerCase()
      return matchesStatus && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [leads, filter, query])

  const metrics = useMemo(() => {
    const count = (status: LeadStatus) => leads.filter((lead) => (lead.status || 'new') === status).length
    const openPipeline = leads
      .filter((lead) => !['won', 'lost'].includes(lead.status || 'new'))
      .reduce((sum, lead) => sum + Number(lead.estimated_value || 0), 0)
    const won = count('won')
    return {
      new: count('new'),
      contacted: count('contacted'),
      estimates: count('estimate_scheduled') + count('estimate_sent'),
      won,
      lost: count('lost'),
      openPipeline,
      closeRate: leads.length ? Math.round((won / leads.length) * 100) : 0,
    }
  }, [leads])

  const serviceCounts = useMemo(() => {
    const counts = new Map<string, number>()
    leads.forEach((lead) => counts.set(lead.service || 'Other', (counts.get(lead.service || 'Other') || 0) + 1))
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5)
  }, [leads])

  if (authLoading) {
    return <div className={styles.centerScreen}><div className={styles.loader} /></div>
  }

  if (!sessionToken) {
    return (
      <main className={styles.loginPage}>
        <section className={styles.loginCard}>
          <div className={styles.loginBrand}><span>TN</span><div><strong>TerraNova</strong><small>CRM</small></div></div>
          <div className={styles.loginCopy}>
            <p className={styles.eyebrow}>PRIVATE PORTAL</p>
            <h1>Lead command center.</h1>
            <p>Sign in to review new requests, follow up fast, and move estimates toward booked work.</p>
          </div>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <label>Email<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" /></label>
            <label>Password<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>
            {authError && <p className={styles.errorText}>{authError}</p>}
            <button type="submit">Sign in</button>
          </form>
          <p className={styles.loginHint}>Access is limited to TerraNova team accounts created in Supabase Auth.</p>
        </section>
      </main>
    )
  }

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><span>TN</span><div><strong>TerraNova</strong><small>CRM</small></div></div>
        <nav>
          <a className={styles.activeNav} href="#dashboard"><LayoutDashboard size={18} /> Dashboard</a>
          <a href="#leads"><UsersRound size={18} /> Leads <span>{leads.length}</span></a>
          <a href="#analytics"><BarChart3 size={18} /> Analytics</a>
        </nav>
        <div className={styles.sidebarBottom}>
          <div className={styles.userChip}><UserRound size={17} /><div><strong>TerraNova Team</strong><small>Admin access</small></div></div>
          <button onClick={() => supabase.auth.signOut()}><LogOut size={17} /> Sign out</button>
        </div>
      </aside>

      <section className={styles.main}>
        <header className={styles.topbar}>
          <div><p className={styles.eyebrow}>TERRANOVA LANDSCAPING</p><h1>Lead Dashboard</h1></div>
          <button className={styles.refreshButton} onClick={() => loadLeads()} disabled={loading}>{loading ? 'Refreshing…' : 'Refresh leads'}</button>
        </header>

        {loadError && <div className={styles.errorBanner}>{loadError}</div>}

        <section className={styles.metrics} id="dashboard">
          <Metric icon={<Sprout size={19} />} label="New leads" value={metrics.new} detail="Needs attention" />
          <Metric icon={<Phone size={19} />} label="Contacted" value={metrics.contacted} detail="Follow-up started" />
          <Metric icon={<Clock3 size={19} />} label="Estimates" value={metrics.estimates} detail="Scheduled or sent" />
          <Metric icon={<CheckCircle2 size={19} />} label="Jobs won" value={metrics.won} detail={`${metrics.closeRate}% overall close rate`} />
          <Metric icon={<DollarSign size={19} />} label="Open pipeline" value={money.format(metrics.openPipeline)} detail="Estimated value" />
        </section>

        <section className={styles.panel} id="leads">
          <div className={styles.panelHeader}>
            <div><p className={styles.eyebrow}>PIPELINE</p><h2>Leads</h2></div>
            <div className={styles.search}><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, phone, city…" /></div>
          </div>

          <div className={styles.filters}>
            <button className={filter === 'all' ? styles.filterActive : ''} onClick={() => setFilter('all')}>All <span>{leads.length}</span></button>
            {statusOptions.map((status) => <button key={status.value} className={filter === status.value ? styles.filterActive : ''} onClick={() => setFilter(status.value)}>{status.label}</button>)}
          </div>

          <div className={styles.tableWrap}>
            <table>
              <thead><tr><th>Lead</th><th>Service</th><th>Location</th><th>Status</th><th>Value</th><th>Received</th></tr></thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} onClick={() => setSelected(lead)}>
                    <td><strong>{lead.name}</strong><small>{lead.phone}</small></td>
                    <td>{lead.service}</td>
                    <td>{lead.city}</td>
                    <td><span className={`${styles.status} ${styles[`status_${lead.status || 'new'}`]}`}>{statusLabel(lead.status)}</span></td>
                    <td>{lead.estimated_value ? money.format(lead.estimated_value) : '—'}</td>
                    <td>{dateFmt.format(new Date(lead.created_at))}</td>
                  </tr>
                ))}
                {!filteredLeads.length && <tr><td colSpan={6} className={styles.empty}>No leads match this view.</td></tr>}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.analyticsGrid} id="analytics">
          <article className={styles.panel}>
            <div className={styles.panelTitle}><div><p className={styles.eyebrow}>PERFORMANCE</p><h2>Conversion funnel</h2></div><BriefcaseBusiness size={20} /></div>
            <div className={styles.funnel}>
              <FunnelRow label="Total leads" value={leads.length} max={leads.length || 1} />
              <FunnelRow label="Contacted" value={metrics.contacted + metrics.estimates + metrics.won} max={leads.length || 1} />
              <FunnelRow label="Estimates" value={metrics.estimates + metrics.won} max={leads.length || 1} />
              <FunnelRow label="Won" value={metrics.won} max={leads.length || 1} />
            </div>
          </article>
          <article className={styles.panel}>
            <div className={styles.panelTitle}><div><p className={styles.eyebrow}>DEMAND</p><h2>Top services</h2></div><BarChart3 size={20} /></div>
            <div className={styles.serviceStats}>
              {serviceCounts.map(([service, count]) => <div key={service}><span>{service}</span><strong>{count}</strong></div>)}
              {!serviceCounts.length && <p className={styles.emptySmall}>Service data will appear as leads come in.</p>}
            </div>
          </article>
        </section>
      </section>

      {selected && (
        <div className={styles.drawerBackdrop} onMouseDown={(e) => { if (e.target === e.currentTarget) setSelected(null) }}>
          <aside className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <div><p className={styles.eyebrow}>LEAD DETAILS</p><h2>{selected.name}</h2></div>
              <button className={styles.iconButton} onClick={() => setSelected(null)} aria-label="Close"><X size={20} /></button>
            </div>

            <div className={styles.quickActions}>
              <a href={`tel:${selected.phone}`}><Phone size={17} /> Call</a>
              <a href={`sms:${selected.phone}`}><MessageSquareText size={17} /> Text</a>
              {selected.email && <a href={`mailto:${selected.email}`}><Mail size={17} /> Email</a>}
            </div>

            <div className={styles.drawerSection}>
              <label className={styles.fieldLabel}>Status</label>
              <select value={selected.status || 'new'} disabled={saving} onChange={(e) => updateLead(selected.id, { status: e.target.value as LeadStatus })}>
                {statusOptions.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}
              </select>
            </div>

            <div className={styles.infoGrid}>
              <Info icon={<Phone size={16} />} label="Phone" value={selected.phone} />
              <Info icon={<Mail size={16} />} label="Email" value={selected.email || 'Not provided'} />
              <Info icon={<MapPin size={16} />} label="Location" value={selected.city} />
              <Info icon={<Sprout size={16} />} label="Service" value={selected.service} />
            </div>

            <div className={styles.drawerSection}>
              <p className={styles.fieldLabel}>Project request</p>
              <div className={styles.messageBox}>{selected.message || 'No project details were provided.'}</div>
            </div>

            <div className={styles.drawerSection}>
              <label className={styles.fieldLabel}>Estimated project value</label>
              <div className={styles.moneyInput}><span>$</span><input type="number" min="0" step="100" value={draftValue} onChange={(e) => setDraftValue(e.target.value)} placeholder="18000" /></div>
            </div>

            <div className={styles.drawerSection}>
              <label className={styles.fieldLabel}>Internal notes</label>
              <textarea rows={6} value={draftNotes} onChange={(e) => setDraftNotes(e.target.value)} placeholder="Budget, preferences, appointment details, follow-up notes…" />
            </div>

            <button className={styles.saveButton} disabled={saving} onClick={() => updateLead(selected.id, { notes: draftNotes, estimated_value: draftValue ? Number(draftValue) : null })}>{saving ? 'Saving…' : 'Save lead details'}</button>

            <div className={styles.timeline}>
              <p className={styles.fieldLabel}>Timeline</p>
              <div><span /><p><strong>Lead received</strong><small>{dateFmt.format(new Date(selected.created_at))}</small></p></div>
              {selected.first_contacted_at && <div><span /><p><strong>First contacted</strong><small>{dateFmt.format(new Date(selected.first_contacted_at))}</small></p></div>}
              {selected.updated_at && selected.updated_at !== selected.created_at && <div><span /><p><strong>Last updated</strong><small>{dateFmt.format(new Date(selected.updated_at))}</small></p></div>}
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

function FunnelRow({ label, value, max }: { label: string; value: number; max: number }) {
  const width = Math.max(value ? 8 : 0, Math.round((value / max) * 100))
  return <div className={styles.funnelRow}><div><span>{label}</span><strong>{value}</strong></div><div className={styles.track}><span style={{ width: `${width}%` }} /></div></div>
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className={styles.infoItem}><span>{icon}</span><div><small>{label}</small><strong>{value}</strong></div></div>
}
