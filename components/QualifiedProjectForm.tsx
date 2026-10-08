'use client'

import { FormEvent } from 'react'
import { getLeadAttribution, trackEvent } from '@/lib/analytics'
import { useLeadFormSecurity } from '@/lib/leadFormSecurity'
import styles from './QualifiedProjectForm.module.css'

export default function QualifiedProjectForm() {
  const { startedAt } = useLeadFormSecurity()

  async function submitProjectRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const attribution = getLeadAttribution()
    const service = String(formData.get('service') || '')
    const budget = String(formData.get('budget') || '')
    const timeline = String(formData.get('timeline') || '')

    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        city: formData.get('city'),
        service,
        budget,
        timeline,
        message: formData.get('message'),
        company_website: formData.get('company_website'),
        form_started_at: formData.get('form_started_at'),
        ...attribution,
      }),
    })

    const result = await response.json().catch(() => null)
    if (!response.ok) {
      alert('We could not submit your request. Please call 775-870-7224.')
      return
    }

    trackEvent('generate_lead', {
      service,
      budget,
      timeline,
      page_path: attribution.landing_page,
      conversion_eligible: result?.conversionEligible === true,
    })
    form.reset()
    window.setTimeout(() => window.location.assign('/thank-you'), 150)
  }

  return (
    <section className={styles.section} id="quote-form">
      <div className={styles.shell}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>PROJECT REQUEST</p>
          <h2>Tell us what you want to build.</h2>
          <p>Share the property, project scope, budget range and timing. TerraNova will review the request and determine the right next step for estimating and design consultation.</p>
          <div className={styles.fit}>
            <strong>Best fit for:</strong>
            <span>Complete backyard transformations</span>
            <span>Major hardscape and retaining walls</span>
            <span>Multi-element outdoor projects</span>
          </div>
          <p className={styles.note}>This request form is not for mowing, recurring maintenance, one-time cleanup, leaf removal or snow removal.</p>
        </div>

        <form className={styles.form} onSubmit={submitProjectRequest}>
          <input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className={styles.honeypot} />
          <input type="hidden" name="form_started_at" value={startedAt} />
          <label>Name<input name="name" placeholder="Your name" required /></label>
          <label>Phone<input name="phone" type="tel" placeholder="(775) 000-0000" required /></label>
          <label className={styles.wide}>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label className={styles.wide}>Project type<select name="service" defaultValue="" required>
            <option value="" disabled>Select your project type</option>
            <option>Complete Backyard / New Home Yard</option>
            <option>Backyard Remodel</option>
            <option>Paver Patio / Outdoor Living Area</option>
            <option>Retaining Wall / Grade Change</option>
            <option>Turf + Xeriscape Project</option>
            <option>Commercial Landscape Construction</option>
          </select></label>
          <label>Project budget<select name="budget" defaultValue="" required>
            <option value="" disabled>Select a range</option>
            <option>Under $20,000</option>
            <option>$20,000 – $35,000</option>
            <option>$35,000 – $50,000</option>
            <option>$50,000+</option>
            <option>Not sure yet</option>
          </select></label>
          <label>When do you want to start?<select name="timeline" defaultValue="" required>
            <option value="" disabled>Select timing</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Just planning</option>
          </select></label>
          <label className={styles.wide}>Project address<input name="city" placeholder="Street address, Reno, NV" required /></label>
          <label className={styles.wide}>What do you want to build?<textarea name="message" rows={5} placeholder="Tell us about the space, the features you want, and what you would like to change." required /></label>
          <button type="submit">Request My Free Estimate <span>↗</span></button>
          <small>By submitting, you agree that TerraNova may contact you about your project.</small>
        </form>
      </div>
    </section>
  )
}
