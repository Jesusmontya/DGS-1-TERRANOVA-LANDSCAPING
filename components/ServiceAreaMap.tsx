"use client"

import { FormEvent, useState } from 'react'
import styles from './ServiceAreaMap.module.css'
import { trackEvent } from '@/lib/analytics'

type ResultType = 'inside' | 'maybe' | 'outside' | null

const insidePlaces = [
  'reno',
  'sparks',
  'sun valley',
  'verdi',
  'washoe',
  'incline village',
  'lake tahoe',
  'spanish springs',
]

const insideZipPrefixes = ['895', '89431', '89432', '89433', '89434', '89436', '89439', '89441', '89448', '89449', '89451']
const clearlyOutsideZipPrefixes = ['890', '891']

function checkArea(value: string): ResultType {
  const normalized = value.trim().toLowerCase()
  const digits = normalized.replace(/\D/g, '')

  if (!normalized) return null
  if (insidePlaces.some((place) => normalized.includes(place))) return 'inside'
  if (insideZipPrefixes.some((prefix) => digits.startsWith(prefix))) return 'inside'
  if (clearlyOutsideZipPrefixes.some((prefix) => digits.startsWith(prefix))) return 'outside'
  return 'maybe'
}

export default function ServiceAreaMap() {
  const [location, setLocation] = useState('')
  const [result, setResult] = useState<ResultType>(null)

  const handleCheck = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextResult = checkArea(location)
    setResult(nextResult)
    trackEvent('check_service_area', {
      page_path: window.location.pathname,
      service_area_result: nextResult || 'empty',
      service_area_query: location.trim(),
    })
  }

  const handleQuote = () => {
    const value = location.trim()
    if (value) {
      const address = document.querySelector<HTMLInputElement>('input[name="address"]')
      if (address) {
        address.value = value
        address.dispatchEvent(new Event('input', { bubbles: true }))
      }
      window.sessionStorage.setItem('terranova_service_area_query', value)
    }
    trackEvent('click_free_quote', { placement: 'service_area_checker', page_path: window.location.pathname })
  }

  return (
    <section className={styles.section} id="service-area" aria-labelledby="service-area-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>SERVICE AREA</p>
          <h2 id="service-area-title">Proudly serving Northern Nevada.</h2>
          <p className={styles.lead}>TerraNova serves Reno, Sparks, Sun Valley, Verdi, and nearby Northern Nevada communities. Enter your city or ZIP code below to check whether your property is within the typical service area.</p>
          <p className={styles.note}>Availability may vary depending on project scope, property access, scheduling, and seasonal conditions.</p>

          <div className={styles.chips} aria-label="Primary service areas">
            <a href="/landscaping-reno-nv">Reno</a>
            <a href="/locations/sparks">Sparks</a>
            <span>Sun Valley</span>
            <a href="/locations/verdi">Verdi</a>
            <span>Washoe County</span>
            <a href="/locations/lake-tahoe">Lake Tahoe / Incline Village</a>
          </div>

          <div className={styles.checker}>
            <h3>Not sure if we serve your property?</h3>
            <p>Enter your city or ZIP code for a quick service-area check.</p>
            <form onSubmit={handleCheck} className={styles.form}>
              <label className={styles.srOnly} htmlFor="service-area-input">City or ZIP code</label>
              <input id="service-area-input" value={location} onChange={(event) => { setLocation(event.target.value); setResult(null) }} placeholder="Reno, NV or 89506" inputMode="text" />
              <button type="submit">Check My Area</button>
            </form>

            {result === 'inside' && <div className={`${styles.result} ${styles.inside}`}><strong>Yes — your area appears to be within our typical service range.</strong><span>Final availability depends on the property and project scope.</span><a href="#contact" onClick={handleQuote}>Get a Free Estimate →</a></div>}
            {result === 'maybe' && <div className={`${styles.result} ${styles.maybe}`}><strong>Your property may be within our service area.</strong><span>Send us the location and project details so TerraNova can confirm availability.</span><a href="#contact" onClick={handleQuote}>Ask About My Project →</a></div>}
            {result === 'outside' && <div className={`${styles.result} ${styles.outside}`}><strong>This appears to be outside our typical service area.</strong><span>Larger projects may still be reviewed depending on scope and scheduling.</span><a href="#contact" onClick={handleQuote}>Ask About My Project →</a></div>}
          </div>
        </div>

        <div className={styles.mapWrap} aria-label="TerraNova service area map">
          <div className={styles.mapHeader}><span>Typical Service Area</span><strong>Reno, Sparks & nearby Northern Nevada</strong></div>
          <div className={styles.map}>
            <iframe
              title="Map of Reno, Sparks, and Northern Nevada"
              src="https://www.google.com/maps?output=embed&q=Reno%2C%20Nevada&z=9"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.mapCaption}><strong>Typical coverage:</strong> Reno, Sparks, Sun Valley, Verdi, Spanish Springs, and nearby Northern Nevada. <span>Availability is confirmed per property and service.</span></div>
        </div>
      </div>
    </section>
  )
}
