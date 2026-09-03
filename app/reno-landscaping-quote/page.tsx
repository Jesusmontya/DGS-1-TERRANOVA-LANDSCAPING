import type { Metadata } from 'next'
import Link from 'next/link'
import LeadForm from '../backyard-remodel-reno/LeadForm'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/reno-landscaping-quote'

export const metadata: Metadata = {
  title: 'Free Landscaping Quote in Reno, NV',
  description: 'Request a free quote for backyard design, pavers, xeriscaping, turf, retaining walls, and complete landscape construction in Reno and Northern Nevada.',
  alternates: { canonical },
}

export default function RenoLandscapingQuotePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>TERRANOVA <span>LANDSCAPING</span></Link>
        <a href="tel:+17758707224" className={styles.call}>Call 775-870-7224</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>RENO · SPARKS · NORTHERN NEVADA</p>
          <h1>Plan a yard that works for how you live.</h1>
          <p className={styles.intro}>Tell us what you want to build. TerraNova can review your goals, budget, timing, and property location before recommending the next step.</p>
          <ul>
            <li>Backyard design and complete landscape construction</li>
            <li>Pavers, concrete, turf, xeriscaping, walls, and irrigation</li>
            <li>Clear planning before construction begins</li>
          </ul>
          <a href="#quote-form" className={styles.mobileCta}>Get My Free Quote</a>
        </div>

        <div className={styles.formWrap}>
          <LeadForm />
        </div>
      </section>

      <section className={styles.trust}>
        <article><strong>15+ years</strong><span>Landscaping experience</span></article>
        <article><strong>Real projects</strong><span>Built in Northern Nevada</span></article>
        <article><strong>Free quote</strong><span>Start with your goals</span></article>
      </section>
    </main>
  )
}
