import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import LeadForm from './LeadForm'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/backyard-remodel-reno'

export const metadata: Metadata = {
  title: 'Backyard Remodel Reno NV | Landscape Design & Build',
  description: 'Complete backyard remodeling and landscape design-build in Reno, NV. Pavers, concrete, retaining walls, turf, fencing, irrigation, and full outdoor transformations.',
  alternates: { canonical },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Complete Backyard Remodel and Landscape Design-Build in Reno, NV',
  description: 'Complete backyard transformations in Reno with landscape planning, pavers, concrete, retaining walls, turf, fencing, irrigation, masonry, and coordinated construction.',
  url: canonical,
  provider: { '@id': 'https://terranovalandscapingnv.com/#business' },
  areaServed: [
    { '@type': 'City', name: 'Reno, Nevada' },
    { '@type': 'City', name: 'Sparks, Nevada' },
    { '@type': 'AdministrativeArea', name: 'Washoe County, Nevada' },
  ],
}

const scope = [
  ['Complete backyard builds', 'Coordinate the major parts of the yard as one project instead of hiring separate crews for every feature.'],
  ['Pavers & hardscape', 'Patios, walkways, gathering areas, masonry, and transitions designed around the full outdoor layout.'],
  ['Retaining walls', 'Add structure, solve grade changes, and create stronger usable landscape zones.'],
  ['Concrete', 'Patios, pads, walkways, and clean hardscape areas planned alongside the rest of the yard.'],
  ['Turf & xeriscape', 'Balance usable green space with lower-water rock, planting, and irrigation planning.'],
  ['Fencing & finish work', 'Complete the edges, access, privacy, and final details so the project feels finished.'],
]

export default function BackyardRemodelRenoPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>COMPLETE BACKYARD REMODEL · RENO, NV</p>
          <h1>Turn an unfinished yard into a complete outdoor space.</h1>
          <p className={styles.heroText}>TerraNova plans and builds larger landscape projects from the ground up—design, hardscape, walls, concrete, turf, irrigation, fencing, and the details that make the yard work as one space.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#estimate">Get a Free Estimate</a>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
          <div className={styles.heroTrust}><span>15+ Years Experience</span><span>Free Design Guidance</span><span>Reno & Sparks</span></div>
        </div>
      </section>

      <section className={styles.realWork}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL TERRANOVA WORK</p>
          <h2>See actual work before you see design concepts.</h2>
          <p>These are real project photos and video from TerraNova. Design visualizations can help plan the direction, but construction quality is what matters when the project is finished.</p>
        </div>
        <div className={styles.mediaGrid}>
          <div className={styles.videoWrap}>
            <video autoPlay muted loop playsInline preload="metadata" aria-label="Real TerraNova landscaping project">
              <source src="/images/imgs/videos_reales/IMG_3041.mp4" type="video/mp4" />
            </video>
            <span>REAL PROJECT VIDEO</span>
          </div>
          <div className={styles.photoStack}>
            <Image src="/images/imgs/imgs_reales/IMG_2031.PNG" alt="Completed TerraNova landscaping project" width={1400} height={1000} sizes="(max-width: 900px) 100vw, 40vw" />
            <Image src="/images/imgs/imgs_reales/PHOTO-2026-08-26-17-37-52.jpg" alt="Real TerraNova landscaping work" width={1200} height={900} sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
        </div>
      </section>

      <section className={styles.qualifier}>
        <div>
          <p className={styles.eyebrow}>BUILT FOR LARGER PROJECTS</p>
          <h2>Best fit for homeowners planning a serious backyard transformation.</h2>
        </div>
        <p>If you are looking to rebuild a large part of the yard, combine multiple services, or start from a blank outdoor space, TerraNova can help define the scope before construction begins.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>DESIGN + BUILD</p>
          <h2>One plan for the entire backyard.</h2>
          <p>High-value landscape projects work better when the layout, grading, walls, hardscape, utilities, and finish materials are planned together.</p>
        </div>
        <div className={styles.scopeGrid}>
          {scope.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW A COMPLETE PROJECT MOVES</p>
          <h2>From blank yard to buildable scope.</h2>
          <div className={styles.process}>
            <article><span>01</span><h3>Property review</h3><p>Understand the yard, access, grade, existing conditions, and what needs to change.</p></article>
            <article><span>02</span><h3>Priorities</h3><p>Define the must-have features, how the space will be used, and the approximate budget range.</p></article>
            <article><span>03</span><h3>Design direction</h3><p>Organize the layout and material direction before locking the construction scope.</p></article>
            <article><span>04</span><h3>Estimate</h3><p>Price the actual project based on site conditions, quantities, materials, and construction requirements.</p></article>
            <article><span>05</span><h3>Build</h3><p>Complete the work in the right sequence so the finished yard feels coordinated.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PROJECT BUDGET</p>
          <h2>What drives the cost of a complete backyard remodel?</h2>
          <p>Large landscape projects vary significantly. The biggest cost drivers are usually site preparation, square footage, material choices, access, walls and elevation changes, and the number of systems being built together.</p>
        </div>
        <div className={styles.costGrid}>
          <article><strong>Site prep</strong><p>Demolition, excavation, haul-off, grading, drainage, and difficult access can change labor significantly.</p></article>
          <article><strong>Hardscape quantity</strong><p>Paver square footage, concrete, walls, steps, borders, and masonry increase material and installation scope.</p></article>
          <article><strong>Connected features</strong><p>Turf, irrigation, fencing, planting, lighting preparation, and other coordinated work add project phases.</p></article>
          <article><strong>Finish level</strong><p>Material selections, patterns, stone, decorative details, and custom design choices affect the final investment.</p></article>
        </div>
      </section>

      <section className={styles.designBand}>
        <div className={styles.designCopy}>
          <p className={styles.eyebrow}>DESIGN VISUALIZATION</p>
          <h2>See the direction before construction starts.</h2>
          <p>For larger projects, design tools can help make the layout and material direction easier to understand before the build is finalized.</p>
          <Link href="/backyard-design">Explore Backyard Design →</Link>
        </div>
        <div className={styles.designImages}>
          <Image src="/images/imgs/IMG_0272.PNG" alt="TerraNova backyard design visualization" width={1200} height={900} />
          <Image src="/images/imgs/IMG_0273.PNG" alt="TerraNova landscape design visualization" width={1200} height={900} />
        </div>
      </section>

      <section className={styles.estimate} id="estimate">
        <div className={styles.estimateIntro}>
          <p className={styles.eyebrow}>START WITH THE PROJECT</p>
          <h2>Tell us what you want to transform.</h2>
          <p>Share the scope, budget range, timing, and property location. TerraNova can review the request and determine the right next step for design and estimating.</p>
          <div className={styles.callout}><strong>Prefer to talk?</strong><a href="tel:+17758707224">775-870-7224</a></div>
        </div>
        <LeadForm />
      </section>

      <section className={styles.related}>
        <Link href="/paver-patio-reno">Pavers & Hardscape</Link>
        <Link href="/landscaping-reno-nv">Landscaping Reno</Link>
        <Link href="/backyard-design">Backyard Design</Link>
        <Link href="/locations/sparks">Landscaping Sparks</Link>
      </section>
    </main>
  )
}
