import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/xeriscaping-reno'

export const metadata: Metadata = {
  title: 'Xeriscaping Reno, NV | Low-Water Landscape Design & Estimates',
  description: 'Xeriscaping for Reno and Sparks homes: low-water landscaping, decorative rock, drought-tolerant planting and drip irrigation planning. Request a free estimate.',
  alternates: { canonical },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Xeriscaping and Artificial Turf in Reno, NV',
  description: 'Low-water landscaping in Reno with artificial turf, decorative rock, planting, irrigation planning, pavers, and outdoor living areas.',
  url: canonical,
  provider: { '@id': 'https://terranovalandscapingnv.com/#business' },
  areaServed: [
    { '@type': 'Place', name: 'Reno, Nevada' },
    { '@type': 'Place', name: 'Washoe County, Nevada' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
    { '@type': 'ListItem', position: 2, name: 'Xeriscaping Reno', item: canonical },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does xeriscaping mean removing every plant or green area?', acceptedAnswer: { '@type': 'Answer', text: 'No. A xeriscape can combine artificial turf, planting, rock, hardscape, and other features based on the property and how you want to use it.' } },
    { '@type': 'Question', name: 'Can TerraNova update irrigation as part of a xeriscape project?', acceptedAnswer: { '@type': 'Answer', text: 'Irrigation can be included in landscape projects. The exact work required is confirmed after reviewing the existing property and design.' } },
    { '@type': 'Question', name: 'Can pavers or concrete be part of xeriscaping?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Hardscape can create patios, paths, and usable zones while helping organize the lower-water parts of the landscape.' } },
    { '@type': 'Question', name: 'How do I know whether turf or rock is better for my yard?', acceptedAnswer: { '@type': 'Answer', text: 'Start with how you want to use each area. Turf can make sense for a green usable zone, while rock and planting may fit areas where lower water use and lower routine maintenance are bigger priorities.' } },
  ],
}

const gallery = [
  { src: '/images/imgs/IMG_0250.PNG', title: 'Artificial turf zones', text: 'Keep green space where it adds function and visual contrast.' },
  { src: '/images/imgs/IMG_0274.PNG', title: 'Rock & planting', text: 'Use texture and planting to avoid a flat, one-material landscape.' },
  { src: '/images/imgs/IMG_0273.PNG', title: 'Hardscape integration', text: 'Connect low-water areas with patios, paths, and gathering zones.' },
  { src: '/images/imgs/IMG_0276.PNG', title: 'Complete yard planning', text: 'Plan surfaces, irrigation, planting, and access as one project.' },
  { src: '/images/imgs/IMG_0294.PNG', title: 'Designed outdoor spaces', text: 'Balance maintenance, water use, and how the yard will actually be used.' },
]

export default function XeriscapingRenoPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>XERISCAPING · RENO, NV</p>
          <h1>Low-water landscaping that still feels finished and intentional.</h1>
          <p>TerraNova combines low-water landscaping, decorative rock and gravel, drought-tolerant planting, drip irrigation planning, pavers, and usable outdoor areas into a xeriscape designed for the Reno climate.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get a Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>

      <div className={styles.trust}>
        <span>15+ Years Experience</span>
        <span>Artificial Turf</span>
        <span>Low-Water Design</span>
        <span>Free Estimates</span>
      </div>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.photo} role="img" aria-label="TerraNova low-water landscaping project" />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>LOW-WATER, NOT LOW-DESIGN</p>
          <h2>Xeriscaping does not have to mean covering the entire yard with rock.</h2>
          <p>The best low-water yards still have contrast, usable green space, texture, planting, and places to walk or gather. TerraNova helps decide where each surface belongs so the finished landscape looks intentional instead of stripped down.</p>
          <div className={styles.pillList}>
            <span>Artificial Turf</span><span>Decorative Rock</span><span>Planting</span><span>Pavers</span><span>Irrigation</span>
          </div>
          <Link className={styles.textLink} href="/#contact">Start your project →</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL TERRANOVA WORK</p>
          <h2>Low-water landscapes can still feel complete.</h2>
          <p>These are real TerraNova portfolio images already in the project. The goal is to show how green space, rock, hardscape, and usable outdoor areas can work together.</p>
        </div>
        <div className={styles.gallery}>
          {gallery.map((item) => (
            <article key={item.src}>
              <Image src={item.src} alt={item.title} width={1200} height={900} sizes="(max-width: 700px) 100vw, 33vw" />
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>DESIGN THE YARD AROUND HOW YOU USE IT</p>
          <h2>A good xeriscape gives every area a purpose.</h2>
        </div>
        <div className={styles.benefitGrid}>
          <article><h3>Use turf where it matters</h3><p>Create a green, usable zone without making the entire property one surface.</p></article>
          <article><h3>Use rock with purpose</h3><p>Define planting beds, lower-maintenance zones, and transitions with texture and contrast.</p></article>
          <article><h3>Keep planting intentional</h3><p>Add structure, shade, texture, and seasonal interest where planting makes sense.</p></article>
          <article><h3>Connect it with hardscape</h3><p>Use pavers, concrete, and paths to make the landscape easier to move through and enjoy.</p></article>
        </div>
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>From water-heavy or unfinished yard to a clearer landscape plan.</h2>
          <div className={styles.process}>
            <article><span>01</span><h3>Choose priorities</h3><p>Decide where you want green space, planting, hardscape, and lower-maintenance zones.</p></article>
            <article><span>02</span><h3>Plan surfaces</h3><p>Lay out turf, rock, pavers, concrete, and planting areas so they connect.</p></article>
            <article><span>03</span><h3>Plan irrigation</h3><p>Adjust irrigation needs to the new mix of planted and non-planted areas.</p></article>
            <article><span>04</span><h3>Choose materials</h3><p>Confirm the turf, rock, paver, and planting direction for the project.</p></article>
            <article><span>05</span><h3>Install & finish</h3><p>Prepare the property and complete the landscape in the right construction sequence.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>TURF VS ROCK & PLANTING</p>
          <h2>Most yards do not need to choose only one approach.</h2>
          <p>A mixed layout often works better because each material can be used where it makes the most sense.</p>
        </div>
        <div className={styles.compare}>
          <article><h3>Artificial Turf</h3><ul><li>Creates a consistently green appearance</li><li>Provides a usable lawn-style area</li><li>Avoids routine lawn watering and mowing</li><li>Still needs appropriate base, drainage, and periodic maintenance</li></ul></article>
          <article><h3>Rock & Planting</h3><ul><li>Creates lower-water landscape zones</li><li>Adds texture through stone sizes and plant groupings</li><li>Can reduce the amount of green surface requiring upkeep</li><li>Still benefits from weed control, irrigation planning, and cleanup</li></ul></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>MATERIALS</p>
          <h2>Build the look from a mix of practical materials.</h2>
          <p>Exact products and colors are confirmed based on what TerraNova can source for the project.</p>
        </div>
        <div className={styles.materials}>
          <article><h3>Artificial Turf</h3><p>A lower-water lawn-style surface for selected green and usable areas.</p></article>
          <article><h3>Decorative Gravel</h3><p>Ground cover for planting zones, transitions, and lower-maintenance areas.</p></article>
          <article><h3>River Rock</h3><p>Rounded stone for accent areas and selected drainage-style features.</p></article>
          <article><h3>Drought-Tolerant Planting</h3><p>Desert-friendly plant selections planned around exposure, water use, maintenance, and the property.</p></article>
          <article><h3>Pavers</h3><p>Useful for patios and paths inside a low-water landscape design.</p></article>
          <article><h3>Boulders / Accent Stone</h3><p>Larger natural-stone accents that add structure and contrast.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.heading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Xeriscaping questions before you request a quote.</h2></div>
        <details><summary>Does xeriscaping mean removing every plant or green area?</summary><p>No. A xeriscape can combine artificial turf, planting, rock, hardscape, and other features based on the property and how you want to use it.</p></details>
        <details><summary>Can TerraNova update irrigation as part of a xeriscape project?</summary><p>Irrigation can be included in landscape projects. The exact work required is confirmed after reviewing the existing property and design.</p></details>
        <details><summary>Can pavers or concrete be part of xeriscaping?</summary><p>Yes. Hardscape can create patios, paths, and usable zones while helping organize the lower-water parts of the landscape.</p></details>
        <details><summary>How do I know whether turf or rock is better for my yard?</summary><p>Start with how you want to use each area. Turf can make sense for a green usable zone, while rock and planting may fit areas where lower water use and lower routine maintenance are bigger priorities.</p></details>
        <div className={styles.related}>
          <Link href="/landscaping-reno-nv">Landscaping Reno</Link><Link href="/backyard-design">Landscape Design</Link><Link href="/pavers-reno-nv">Paver Contractors</Link><Link href="/hardscape-reno">Hardscape Reno</Link><Link href="/locations/sparks">Sparks</Link>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>READY TO REDESIGN THE YARD?</p>
          <h2>Build a lower-water landscape that still looks complete.</h2>
          <p>Tell TerraNova what you want to change and how you want to use the property. We can help plan the surfaces, materials, irrigation, and next steps.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link><a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a></div>
        </div>
      </section>
    </main>
  )
}
