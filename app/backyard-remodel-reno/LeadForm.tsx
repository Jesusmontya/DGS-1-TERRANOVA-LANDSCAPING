'use client'

import { FormEvent } from 'react'
import { getLeadAttribution, rememberQuoteOrigin, trackEvent } from '@/lib/analytics'
import styles from './page.module.css'

export default function LeadForm() {
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const attribution = getLeadAttribution()
    const service = String(fd.get('service') || 'Complete Backyard / Landscape Construction')
    const budget = String(fd.get('budget') || '')
    const timeline = String(fd.get('timeline') || '')

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        phone: fd.get('phone'),
        email: fd.get('email'),
        city: fd.get('address') || 'Reno, NV',
        service,
        budget,
        timeline,
        message: fd.get('message'),
        ...attribution,
      }),
    })

    if (res.ok) {
      trackEvent('generate_lead', { service, budget, timeline, page_path: attribution.landing_page })
      form.reset()
      window.setTimeout(() => window.location.assign('/thank-you'), 150)
    } else {
      alert('We could not submit the form. Please call 775-870-7224.')
    }
  }

  return (
    <form className={styles.form} onSubmit={submit} onFocus={() => rememberQuoteOrigin()}>
      <div className={styles.formHead}>
        <p>FREE PROJECT ESTIMATE</p>
        <h2>Tell us about your backyard.</h2>
        <span>Best fit for complete landscape projects, major hardscape, retaining walls, and larger outdoor transformations.</span>
      </div>
      <div className={styles.fields}>
        <label>Name<input name="name" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" type="tel" placeholder="(775) 000-0000" required /></label>
        <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
        <label>Project type<select name="service" defaultValue="Complete Backyard / Landscape Construction" required><option>Complete Backyard / Landscape Construction</option><option>Pavers & Hardscape</option><option>Retaining Wall</option><option>Concrete</option><option>Landscape Design + Build</option><option>Other Large Landscape Project</option></select></label>
        <label>Project budget<select name="budget" defaultValue="" required><option value="" disabled>Select a range</option><option>$10,000 – $20,000</option><option>$20,000 – $35,000</option><option>$35,000 – $50,000</option><option>$50,000+</option><option>Not sure yet</option></select></label>
        <label>When do you want to start?<select name="timeline" defaultValue="" required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>Just planning</option></select></label>
        <label className={styles.wide}>Project address<input name="address" placeholder="Reno, Sparks, Verdi..." /></label>
        <label className={styles.wide}>What do you want to build?<textarea name="message" rows={5} placeholder="Tell us about the yard, features you want, and anything that needs to be removed or rebuilt." /></label>
      </div>
      <button type="submit">Get My Free Estimate <span>↗</span></button>
      <small>By submitting, you agree that TerraNova may contact you about your project.</small>
    </form>
  )
}
