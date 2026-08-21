import Link from 'next/link'
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
        <Link className={styles.ctaSmall} href="/#contact">Free Estimate</Link>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/#contact">Request a Free Estimate</Link>
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

      {materials.length > 0 && (
        <section className={styles.materials}>
          <p className={styles.eyebrow}>EXPLORE MATERIALS</p>
          <h2>See examples before choosing a material.</h2>
          <p className={styles.materialIntro}>These links are visual references to help you understand the look of each material. Final products, colors, and availability are confirmed during the design process.</p>
          <div className={styles.materialGrid}>
            {materials.map((material) => (
              <article className={styles.materialCard} key={material.name}>
                <h3>{material.name}</h3>
                <p>{material.description}</p>
                <a href={material.photoUrl} target="_blank" rel="noopener noreferrer">View photo examples <span>↗</span></a>
              </article>
            ))}
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
