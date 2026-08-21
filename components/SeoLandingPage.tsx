import Link from 'next/link'
import FloatingQuoteButton from './FloatingQuoteButton'
import styles from './SeoLandingPage.module.css'

type Material = {
  name: string
  description: string
  photoUrl: string
}

type SeoLandingPageProps = {
  eyebrow: string
  title: string
  intro: string
  bullets: string[]
  city?: string
  materials?: Material[]
  related?: { href: string; label: string }[]
}

export default function SeoLandingPage({ eyebrow, title, intro, bullets, city, materials = [], related = [] }: SeoLandingPageProps) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/">TERRANOVA <span>LANDSCAPING</span></Link>
        <a className={styles.headerCall} href="tel:+17758707224">Call 775-870-7224</a>
      </header>

      <FloatingQuoteButton />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.actions}>
          <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
        </div>
      </section>

      <section className={styles.content}>
        <div>
          <p className={styles.eyebrow}>WHAT TO EXPECT</p>
          <h2>A simpler way to plan your outdoor project.</h2>
          <p>TerraNova helps homeowners understand the layout, materials, and next steps before construction starts. You do not need to arrive with a finished design.</p>
        </div>
        <ul>
          {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </section>

      <section className={styles.midQuote}>
        <div>
          <p className={styles.midQuoteEyebrow}>READY TO PLAN YOUR YARD?</p>
          <h2>Get a Free Quote</h2>
          <p>Tell us what you want to build and we’ll help you plan the next step.</p>
        </div>
        <Link className={styles.midQuoteButton} href="/#contact">
          GET MY FREE QUOTE <span>↓</span>
        </Link>
      </section>

      {materials.length > 0 && (
        <section className={styles.materials}>
          <p className={styles.eyebrow}>EXPLORE MATERIALS</p>
          <h2>See the look before choosing the material.</h2>
          <p className={styles.materialIntro}>Use these visual references to compare styles before your design call. Final products, colors, installation method, and availability are confirmed for your specific project.</p>
          <div className={styles.materialGrid}>
            {materials.map((material) => (
              <article className={styles.materialCard} key={material.name}>
                <h3>{material.name}</h3>
                <p>{material.description}</p>
                <a href={material.photoUrl} target="_blank" rel="noopener noreferrer">View photo examples <span>↗</span></a>
              </article>
            ))}
          </div>
          <div className={styles.materialCta}>
            <div>
              <p className={styles.eyebrow}>NOT SURE WHAT TO CHOOSE?</p>
              <h3>Tell us the look you want. We’ll help narrow down the materials.</h3>
            </div>
            <Link href="/#contact">Start my free quote <span>→</span></Link>
          </div>
        </section>
      )}

      {city && (
        <section className={styles.local}>
          <p className={styles.eyebrow}>LOCAL LANDSCAPING</p>
          <h2>Landscaping services in {city}</h2>
          <p>Project availability depends on scope and location. Contact TerraNova to confirm service for your property and discuss your goals.</p>
        </section>
      )}

      {related.length > 0 && (
        <section className={styles.related}>
          <p className={styles.eyebrow}>EXPLORE MORE</p>
          <div className={styles.links}>{related.map((item) => <Link key={item.href} href={item.href}>{item.label} <span>→</span></Link>)}</div>
        </section>
      )}
    </main>
  )
}
