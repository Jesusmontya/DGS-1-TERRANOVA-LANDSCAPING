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
          <p className={styles.lead}>TerraNova generally serves properties within approximately a 1.5-hour drive from Sun Valley, including Reno, Sparks, Verdi, Washoe County, and the Lake Tahoe / Incline Village area.</p>
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

        <div className={styles.mapWrap} aria-label="Approximate TerraNova service area map">
          <div className={styles.mapHeader}><span>Typical Service Area</span><strong>≈ 1.5 hr from Sun Valley</strong></div>
          <div className={styles.map}>
            <svg viewBox="0 0 760 620" role="img" aria-labelledby="service-map-title service-map-desc">
              <title id="service-map-title">Approximate TerraNova Landscaping service area</title>
              <desc id="service-map-desc">Stylized Northern Nevada service area centered on Sun Valley with Reno, Sparks, Verdi, Washoe County, Lake Tahoe, and Incline Village marked.</desc>
              <path className={styles.terrain} d="M60 98C172 48 318 62 415 102c100 42 221 29 280 97 52 59 11 126 13 199 3 104-52 166-156 186-105 20-189-17-288 1-94 17-171-11-201-89-32-82 13-151 4-227-7-61-46-122-7-171Z" />
              <path className={styles.lake} d="M145 425c20-63 64-91 102-78 37 13 42 61 18 112-25 54-69 87-103 68-33-19-35-49-17-102Z" />
              <ellipse className={styles.radius} cx="415" cy="284" rx="260" ry="224" />
              <path className={styles.road} d="M174 398c76-45 119-72 181-91 73-22 139-25 228-87" />
              <path className={styles.road} d="M261 160c54 55 105 87 154 124 57 43 103 94 142 159" />
              <g className={styles.pin}><circle cx="415" cy="284" r="11"/><circle cx="415" cy="284" r="24"/><text x="433" y="278">Sun Valley</text><text className={styles.smallLabel} x="433" y="297">service-area center</text></g>
              <g className={styles.city}><circle cx="384" cy="323" r="7"/><text x="398" y="329">Reno</text></g>
              <g className={styles.city}><circle cx="474" cy="306" r="7"/><text x="488" y="312">Sparks</text></g>
              <g className={styles.city}><circle cx="276" cy="320" r="7"/><text x="224" y="310">Verdi</text></g>
              <g className={styles.city}><circle cx="254" cy="430" r="7"/><text x="269" y="436">Incline Village</text></g>
              <text className={styles.lakeLabel} x="156" y="451">LAKE TAHOE</text>
              <text className={styles.countyLabel} x="479" y="170">WASHOE COUNTY</text>
              <text className={styles.radiusLabel} x="465" y="510">APPROX. SERVICE RANGE</text>
            </svg>
            <div className={styles.legend}><span><i className={styles.centerDot}/>Sun Valley</span><span><i className={styles.areaDot}/>Typical coverage</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
