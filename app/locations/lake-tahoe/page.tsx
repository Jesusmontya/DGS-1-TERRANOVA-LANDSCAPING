import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/locations/lake-tahoe'

export const metadata: Metadata = {
  title: 'Landscaping Lake Tahoe & Incline Village | Landscape Design',
  description: 'Landscape design for Lake Tahoe and Incline Village properties with pavers, retaining walls, masonry, outdoor living, drainage-aware planning, and mountain-condition material guidance.',
  alternates: { canonical },
}

const businessId = 'https://terranovalandscapingnv.com/#business'

const projects = [
  { src: '/images/imgs/IMG_0276.PNG', title: 'Outdoor living', text: 'Patios, paths, and gathering zones planned around the property.' },
  { src: '/images/imgs/IMG_0274.PNG', title: 'Hardscape', text: 'Pavers, walls, masonry, and grade transitions.' },
  { src: '/images/imgs/IMG_0294.PNG', title: 'Mountain character', text: 'Material choices that feel connected to the setting.' },
  { src: '/images/imgs/IMG_0275.PNG', title: 'Complete planning', text: 'Landscape, irrigation, planting, and supporting work coordinated together.' },
]

export default function LakeTahoePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Landscape Design and Construction in Lake Tahoe and Incline Village',
    description: 'Landscape planning for Lake Tahoe and Incline Village with pavers, retaining walls, masonry, outdoor living, drainage-aware design, and mountain-condition material guidance.',
    url: canonical,
    provider: { '@id': businessId },
    areaServed: [{ '@type': 'Place', name: 'Lake Tahoe' }, { '@type': 'Place', name: 'Incline Village, Nevada' }],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
      { '@type': 'ListItem', position: 2, name: 'Landscaping Lake Tahoe', item: canonical },
    ],
  }

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>LANDSCAPING · LAKE TAHOE</p>
          <h1>Landscape design for Lake Tahoe and Incline Village properties.</h1>
          <p>TerraNova helps homeowners plan mountain landscapes around grade, drainage, seasonal conditions, outdoor use, and the finished look before construction begins.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get a Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>

      <div className={styles.trust}>
        <span>15+ Years Experience</span>
        <span>Lake Tahoe & Incline Village</span>
        <span>Design + Construction</span>
      </div>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.photo} />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>MOUNTAIN PROPERTY PLANNING</p>
          <h2>Start with the site before choosing the finishes.</h2>
          <p>Mountain properties can introduce more variables than a typical flat yard. TerraNova can help organize the design around the actual property so hardscape, walls, drainage, planting, irrigation, and outdoor living areas work together.</p>
          <div className={styles.pillList}>
            <span>Grade</span><span>Drainage</span><span>Access</span><span>Hardscape</span><span>Seasonal Conditions</span><span>Outdoor Living</span>
          </div>
          <Link className={styles.primary} href="/#contact">Start Your Project</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL TERRANOVA WORK</p>
          <h2>Outdoor spaces built with structure, texture, and practical use in mind.</h2>
          <p>These are real TerraNova project photos already in the portfolio. As more Tahoe-specific projects are verified, they can be added with exact locations and scope.</p>
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
          <p className={styles.eyebrow}>MOUNTAIN CONDITIONS</p>
          <h2>The property conditions should influence the design before materials are selected.</h2>
        </div>
        <div className={styles.serviceGrid}>
          <article><h3>Snow & Freeze-Thaw</h3><p>Seasonal temperature changes can influence material selection, joints, drainage planning, and maintenance expectations.</p></article>
          <article><h3>Grade & Retaining Needs</h3><p>Changes in elevation may affect where patios, paths, walls, steps, and planting areas make sense.</p></article>
          <article><h3>Drainage</h3><p>The layout should consider how water and snowmelt move through the property before final surfaces are installed.</p></article>
          <article><h3>Access & Sequence</h3><p>Property access and the order of excavation, walls, hardscape, irrigation, and finish work can affect the project plan.</p></article>
        </div>
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>Plan around the mountain property before finalizing materials.</h2>
          <div className={styles.process}>
            <article><span>01</span><h3>Review the Site</h3><p>Understand goals, access, grade, existing conditions, and outdoor use.</p></article>
            <article><span>02</span><h3>Plan the Layout</h3><p>Organize patios, paths, walls, landscape zones, and circulation.</p></article>
            <article><span>03</span><h3>Choose Materials</h3><p>Compare pavers, stone, wall systems, rock, planting, and finishes.</p></article>
            <article><span>04</span><h3>Confirm Scope</h3><p>Define preparation, hardscape, drainage-related work, irrigation, and masonry.</p></article>
            <article><span>05</span><h3>Build in Sequence</h3><p>Complete the project in an order that protects site work and finished materials.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.mountain}>
          <div>
            <p className={styles.eyebrow}>TAHOE OUTDOOR LIVING</p>
            <h2>Create usable spaces without losing the mountain character of the property.</h2>
            <p>Stone, pavers, retaining walls, planting, and natural accents can be used together to create a finished landscape that still feels connected to its setting.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PROJECT SCOPE</p>
          <h2>What can change the cost of a Lake Tahoe landscape project?</h2>
          <p>We are not publishing made-up price ranges. The actual quote depends on the specific property and design.</p>
        </div>
        <div className={styles.costGrid}>
          <article><h3>Access</h3><p>Equipment and material access can affect preparation, handling, and construction logistics.</p></article>
          <article><h3>Slope & Excavation</h3><p>Grade changes, excavation, walls, steps, and site preparation can add complexity.</p></article>
          <article><h3>Material Selection</h3><p>Pavers, natural stone, masonry, wall systems, and other finishes vary in requirements.</p></article>
          <article><h3>Seasonal Conditions</h3><p>Scheduling and construction planning may need to account for conditions at the specific property.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.heading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Questions before you request a quote.</h2></div>
        <details><summary>Does TerraNova take projects in Lake Tahoe and Incline Village?</summary><p>Those areas are included in TerraNova’s stated service coverage. Because travel, access, scope, and scheduling vary by property, submit the quote form to confirm availability for the exact location.</p></details>
        <details><summary>Why does freeze-thaw matter for landscape materials?</summary><p>Repeated freezing and thawing can influence how surfaces, joints, drainage, and materials perform. The specific construction approach should be based on the selected material and site conditions.</p></details>
        <details><summary>Can a Tahoe project include retaining walls and patios together?</summary><p>Yes, those features can be planned together when they fit the property and scope. Coordinating them early can help the layout respond better to grade and circulation.</p></details>
        <details><summary>Do I need to choose stone or pavers before contacting TerraNova?</summary><p>No. You can begin with the look and use you want. TerraNova can help narrow material categories, while exact products and availability are confirmed later.</p></details>
        <div className={styles.related}>
          <Link href="/landscaping-reno-nv">Landscaping Reno</Link><Link href="/backyard-design">Backyard Design</Link><Link href="/paver-patio-reno">Paver Patios</Link><Link href="/xeriscaping-reno">Xeriscaping</Link>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>START YOUR TAHOE PROJECT</p>
          <h2>Tell us about the property and what you want to build.</h2>
          <p>TerraNova can review the location, project goals, site conditions, and scope to determine the next step.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link><a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a></div>
        </div>
      </section>
    </main>
  )
}
