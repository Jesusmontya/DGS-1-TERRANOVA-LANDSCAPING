import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/locations/sparks'

export const metadata: Metadata = {
  title: 'Landscaping Sparks NV | Backyard Design & Hardscape',
  description: 'Landscaping in Sparks, NV for backyard design, pavers, xeriscaping, artificial turf, irrigation, retaining walls, and complete outdoor projects.',
  alternates: { canonical },
}

const businessId = 'https://terranovalandscapingnv.com/#business'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landscaping Services in Sparks, NV',
  description: 'Backyard design and landscape construction in Sparks, Nevada, including pavers, xeriscaping, turf, irrigation, retaining walls, concrete, and fencing.',
  url: canonical,
  provider: { '@id': businessId },
  areaServed: [
    { '@type': 'City', name: 'Sparks, Nevada' },
    { '@type': 'AdministrativeArea', name: 'Washoe County, Nevada' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
    { '@type': 'ListItem', position: 2, name: 'Landscaping Sparks NV', item: canonical },
  ],
}

const projects = [
  { src: '/images/imgs/IMG_0272.PNG', title: 'Complete Backyard Project', text: 'Hardscape, layout, and finish work planned as one outdoor space.' },
  { src: '/images/imgs/IMG_0273.PNG', title: 'Pavers & Hardscape', text: 'Defined gathering areas, walkways, and durable landscape structure.' },
  { src: '/images/imgs/IMG_0274.PNG', title: 'Landscape Transformation', text: 'A finished outdoor project from the TerraNova portfolio.' },
  { src: '/images/imgs/IMG_0275.PNG', title: 'Outdoor Living', text: 'Usable spaces designed around the property and how the yard is used.' },
  { src: '/images/imgs/IMG_0276.PNG', title: 'Custom Landscape Work', text: 'Real TerraNova project photography from the existing portfolio.' },
]

const services = [
  ['Backyard Design', 'Start with the layout and project goals before choosing every material or finish.'],
  ['Pavers & Concrete', 'Create patios, paths, gathering areas, and connected hardscape zones.'],
  ['Xeriscaping & Turf', 'Balance green usable space with decorative rock and lower-water landscape areas.'],
  ['Walls & Fencing', 'Coordinate retaining walls, masonry, and fencing with the rest of the project.'],
]

const steps = [
  ['01', 'Share the property', 'Tell TerraNova what you want to change and what is not working now.'],
  ['02', 'Plan the layout', 'Organize the main outdoor zones and how they connect.'],
  ['03', 'Choose materials', 'Compare hardscape, turf, rock, planting, and supporting materials.'],
  ['04', 'Confirm the scope', 'Define what is included before construction starts.'],
  ['05', 'Build the project', 'Complete the work in the right order through final landscape details.'],
]

export default function SparksPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>LANDSCAPING · SPARKS, NV</p>
          <h1>Landscaping in Sparks designed around the way you want to use your yard.</h1>
          <p>TerraNova helps Sparks homeowners plan backyard design, hardscape, turf, xeriscaping, concrete, walls, fencing, and complete outdoor transformations as one connected project.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get a Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>

      <div className={styles.trust}>
        <span>15+ Years Experience</span>
        <span>Free Estimates</span>
        <span>Design + Construction</span>
      </div>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.photo} role="img" aria-label="TerraNova completed landscaping project" />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>START WITH A PLAN</p>
          <h2>You do not need to figure out the whole backyard before you call.</h2>
          <p>A Sparks landscape can combine hardscape, turf, rock, planting, irrigation, walls, concrete, and fencing. TerraNova helps define which pieces belong in the project and how they should connect before construction begins.</p>
          <div className={styles.pillList}>
            <span>Layout</span><span>Pavers</span><span>Turf</span><span>Rock</span><span>Concrete</span><span>Walls</span><span>Fencing</span>
          </div>
          <Link className={styles.primary} href="/#contact">Start Your Project</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL TERRANOVA WORK</p>
          <h2>Outdoor projects built to feel complete, not pieced together.</h2>
          <p>These are real photos already in TerraNova&apos;s project portfolio. As verified Sparks-specific project details become available, they can be labeled by location and scope.</p>
        </div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <article className={styles.project} key={project.src}>
              <Image src={project.src} alt={project.title} width={1200} height={900} sizes="(max-width: 620px) 100vw, 33vw" />
              <div><h3>{project.title}</h3><p>{project.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>COMPLETE LANDSCAPE PROJECTS</p>
          <h2>Plan more than one service at the same time.</h2>
          <p>The goal is to make each part of the yard solve a specific need while still feeling like one finished landscape.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>A clear path from idea to finished yard.</h2>
          <div className={styles.process}>
            {steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.localBanner}>
          <div>
            <p className={styles.eyebrow}>BUILT FOR SPARKS</p>
            <h2>Plan the yard around use, water, maintenance, and the property itself.</h2>
            <p>TerraNova serves Sparks as part of its Northern Nevada service area. Project availability depends on the property, scope, and scheduling, so the quote form is the best place to confirm the next step.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>WHAT SHAPES THE PROJECT</p>
          <h2>Good landscape decisions start with the property, not a generic template.</h2>
        </div>
        <div className={styles.costGrid}>
          <article><h3>Usable outdoor space</h3><p>Plan patios, paths, and gathering areas around how people actually move through and use the property.</p></article>
          <article><h3>Water-conscious zones</h3><p>Use turf, planting, decorative rock, and irrigation intentionally instead of treating the entire yard the same way.</p></article>
          <article><h3>Hardscape & grade</h3><p>Pavers, concrete, walls, and masonry can define areas and respond to changes in the property layout.</p></article>
          <article><h3>Maintenance goals</h3><p>Choose materials and planting based on how much routine upkeep you want after the project is complete.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>COMMON QUESTIONS</p>
          <h2>Questions Sparks homeowners often ask before starting.</h2>
        </div>
        <details><summary>Does TerraNova work in Sparks, Nevada?</summary><p>Yes. Sparks is part of TerraNova&apos;s stated service area. Project availability still depends on the property, scope, and schedule.</p></details>
        <details><summary>Can I start if I do not know how to design my backyard?</summary><p>Yes. TerraNova can help homeowners work through the layout and material choices instead of requiring a finished design first.</p></details>
        <details><summary>Can a Sparks project include pavers, turf, irrigation, concrete, and fencing?</summary><p>Those services can be planned together when they fit the scope. The exact combination is confirmed during the quote and planning process.</p></details>
        <details><summary>Do you provide material guidance?</summary><p>Yes. TerraNova can help narrow material categories and discuss practical considerations. Exact products and availability are confirmed for the individual project.</p></details>

        <div className={styles.related}>
          <Link href="/landscaping-reno-nv">Landscaping Reno</Link>
          <Link href="/backyard-design">Backyard Design</Link>
          <Link href="/pavers-reno-nv">Paver Patios</Link><Link href="/hardscape-reno">Hardscape Reno</Link>
          <Link href="/xeriscaping-reno">Xeriscaping</Link>
          <Link href="/locations/verdi">Landscaping Verdi</Link>
          <Link href="/locations/lake-tahoe">Lake Tahoe</Link>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>READY WHEN YOU ARE</p>
          <h2>Ready to plan your Sparks backyard?</h2>
          <p>Tell TerraNova what you want to change, what you want the yard to become, and the team can help define the next step.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>
    </main>
  )
}
