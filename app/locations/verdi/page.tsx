import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/locations/verdi'
const businessId = 'https://terranovalandscapingnv.com/#business'

export const metadata: Metadata = {
  title: 'Landscaping Verdi NV | Backyard Design & Hardscape',
  description: 'Landscaping in Verdi, NV for backyard design, pavers, retaining walls, xeriscaping, irrigation, concrete, fencing, and custom outdoor projects.',
  alternates: { canonical },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landscaping Services in Verdi, NV',
  description: 'Landscape design and construction in Verdi, Nevada, including pavers, retaining walls, xeriscaping, irrigation, concrete, fencing, and backyard planning.',
  url: canonical,
  provider: { '@id': businessId },
  areaServed: [
    { '@type': 'Place', name: 'Verdi, Nevada' },
    { '@type': 'AdministrativeArea', name: 'Washoe County, Nevada' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
    { '@type': 'ListItem', position: 2, name: 'Landscaping Verdi NV', item: canonical },
  ],
}

const projects = [
  { src: '/images/imgs/IMG_0272.PNG', title: 'Hardscape & Layout', text: 'Outdoor spaces planned as one connected project.' },
  { src: '/images/imgs/IMG_0274.PNG', title: 'Backyard Transformation', text: 'Real TerraNova project photography.' },
  { src: '/images/imgs/IMG_0275.PNG', title: 'Landscape Construction', text: 'Materials, access, and construction sequence matter.' },
  { src: '/images/imgs/IMG_0294.PNG', title: 'Custom Outdoor Spaces', text: 'Design decisions built around the property.' },
  { src: '/images/imgs/IMG_0271.PNG', title: 'Pavers & Landscape', text: 'Hardscape integrated with the finished yard.' },
]

const faqs = [
  { q: 'Does TerraNova serve Verdi, Nevada?', a: 'Yes. Verdi is part of TerraNova’s stated service area. Availability for a specific property depends on the project scope and schedule.' },
  { q: 'Can TerraNova help with a yard that needs several types of work?', a: 'Yes. Backyard design, hardscape, retaining walls, irrigation, fencing, turf, xeriscaping, concrete, and related landscape work can be planned together when they fit the project.' },
  { q: 'Do I need to know the exact materials before calling?', a: 'No. You can begin with the look, function, and maintenance level you want. Material categories can be narrowed during planning and exact products confirmed for the project.' },
  { q: 'How do I start a Verdi landscaping quote?', a: 'Use the free quote form and include the property location, main service, budget range, timing, and a short description of what you want to change.' },
]

export default function VerdiPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingQuoteButton />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>LANDSCAPING · VERDI, NV</p>
          <h1>Custom landscaping in Verdi, built around the property.</h1>
          <p>TerraNova helps homeowners plan backyard design, hardscape, retaining walls, irrigation, fencing, concrete, and lower-water landscaping as one connected outdoor project.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get a Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>

      <div className={styles.trust}>
        <span>15+ Years Landscaping Experience</span>
        <span>Free Project Estimates</span>
        <span>Design + Landscape Construction</span>
      </div>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.photo} role="img" aria-label="TerraNova landscaping project from the company portfolio" />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>PROPERTY-FIRST DESIGN</p>
          <h2>Start with the site before choosing every finish.</h2>
          <p>Verdi properties can have different grades, access points, existing conditions, and landscape goals. TerraNova helps organize the layout and construction decisions before the project starts so the finished yard feels intentional.</p>
          <div className={styles.pillList}>
            <span>Grade & transitions</span><span>Drainage</span><span>Access</span><span>Hardscape</span><span>Irrigation</span><span>Maintenance</span>
          </div>
          <Link className={styles.primary} href="/#contact">Start Your Project</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL TERRANOVA WORK</p>
          <h2>Outdoor projects should feel built for the property—not copied from a template.</h2>
          <p>These are real photos already in TerraNova’s portfolio. As more Verdi-specific projects are documented, verified project locations can be added without pretending unrelated work was completed in Verdi.</p>
        </div>
        <div className={styles.projects}>
          {projects.map((project) => (
            <article className={styles.project} key={project.src}>
              <Image src={project.src} alt={project.title} width={1200} height={900} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" />
              <div><h3>{project.title}</h3><p>{project.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>WHAT WE CAN PLAN</p>
          <h2>Combine the features that make the yard more useful.</h2>
        </div>
        <div className={styles.serviceGrid}>
          <article><h3>Patios & Paths</h3><p>Use pavers or concrete to create defined areas for movement, seating, and outdoor living.</p></article>
          <article><h3>Retaining Walls</h3><p>Add structure where the property needs grade transitions, raised areas, or stronger landscape definition.</p></article>
          <article><h3>Turf & Xeriscaping</h3><p>Balance usable green space with decorative rock, planting, and lower-water landscape zones.</p></article>
          <article><h3>Irrigation & Fencing</h3><p>Coordinate supporting systems with the design instead of treating them as disconnected add-ons.</p></article>
        </div>
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>A clear process from property review to finished landscape.</h2>
          <div className={styles.process}>
            <article><span>01</span><h3>Review the goals</h3><p>Identify what the yard needs to do and what conditions need to be addressed.</p></article>
            <article><span>02</span><h3>Organize the layout</h3><p>Place major zones, walls, hardscape, access, and landscape areas.</p></article>
            <article><span>03</span><h3>Choose materials</h3><p>Narrow the pavers, concrete, rock, turf, wall, and planting direction.</p></article>
            <article><span>04</span><h3>Confirm the scope</h3><p>Define the construction work and supporting systems included in the project.</p></article>
            <article><span>05</span><h3>Build in sequence</h3><p>Complete preparation, infrastructure, hardscape, and finish work in the proper order.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.localBanner}>
          <div>
            <p className={styles.eyebrow}>LANDSCAPING IN VERDI</p>
            <h2>Property conditions should shape the landscape plan.</h2>
            <p>Grade, drainage, access, exposure, hardscape layout, irrigation, and maintenance goals can all affect what makes sense for a Verdi property. Exact service availability depends on the location, scope, and schedule.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PROJECT FACTORS</p>
          <h2>What can change the scope of a Verdi landscaping project?</h2>
        </div>
        <div className={styles.costGrid}>
          <article><h3>Site access</h3><p>Equipment access, staging, and material movement can influence how the project is built.</p></article>
          <article><h3>Grade & preparation</h3><p>Elevation changes, excavation, drainage, and base preparation can add important construction steps.</p></article>
          <article><h3>Materials</h3><p>Pavers, concrete, wall block, turf, rock, stone, and planting choices change the final scope.</p></article>
          <article><h3>Project complexity</h3><p>Combining walls, fencing, irrigation, hardscape, and multiple landscape zones requires more coordination.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>COMMON QUESTIONS</p>
          <h2>Before you request a Verdi landscaping quote.</h2>
        </div>
        {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
        <div className={styles.related}>
          <Link href="/landscaping-reno-nv">Landscaping Reno</Link>
          <Link href="/backyard-design">Backyard Design</Link>
          <Link href="/paver-patio-reno">Paver Patios</Link>
          <Link href="/xeriscaping-reno">Xeriscaping</Link>
          <Link href="/locations/sparks">Sparks</Link>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>READY WHEN YOU ARE</p>
          <h2>Plan your Verdi landscaping project with TerraNova.</h2>
          <p>Tell us about the property, what you want to change, your timing, and the type of outdoor space you want to create.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>
    </main>
  )
}
