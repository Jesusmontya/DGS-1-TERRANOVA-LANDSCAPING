import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QualifiedProjectForm from '@/components/QualifiedProjectForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Complete Backyard Design & Construction in Reno, NV',
  description: 'TerraNova Landscaping plans and builds complete backyard projects in Reno, Sparks and nearby Northern Nevada communities. Request a free project estimate.',
  alternates: { canonical: '/reno-backyard-design-build' },
}

const projects = [
  { src: '/images/imgs/imgs_reales/IMG_2031.PNG', alt: 'Completed TerraNova paver and landscape construction project' },
  { src: '/images/before-after/IMG_3020.JPG', alt: 'TerraNova backyard before and after transformation' },
  { src: '/images/imgs/IMG_0274.PNG', alt: 'Completed TerraNova outdoor space' },
]

export default function RenoBackyardDesignBuildPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>TERRANOVA <span>LANDSCAPING</span></Link>
        <a href="tel:+17758707224" className={styles.call}>Call 775-870-7224</a>
      </header>

      <section className={styles.hero}>
        <Image src="/images/imgs/imgs_reales/IMG_2031.PNG" alt="Completed TerraNova backyard project" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.shade} />
        <div className={styles.heroCopy}>
          <p>RENO • SPARKS • NORTHERN NEVADA</p>
          <h1>Complete backyard design and construction.</h1>
          <div className={styles.lead}>Turn an empty, unfinished or outdated yard into one connected outdoor space—with a clear plan before construction starts.</div>
          <a href="#quote-form" className={styles.primary}>Request a Free Estimate <span>↓</span></a>
          <div className={styles.proof}><span>15+ Years Experience</span><span>Licensed in Nevada</span><span>Real Completed Projects</span></div>
        </div>
      </section>

      <section className={styles.intro}>
        <div><p className={styles.eyebrow}>BUILT AS ONE PROJECT</p><h2>More than a patio. A finished outdoor space.</h2></div>
        <p>TerraNova coordinates the major pieces of your backyard—layout, pavers, retaining walls, concrete, turf, xeriscape, irrigation, fencing, planting and finish work—so the property works together as one project.</p>
      </section>

      <section className={styles.work}>
        <div className={styles.workHeading}><p className={styles.eyebrow}>REAL TERRANOVA WORK</p><h2>See completed projects before you plan yours.</h2><p>These are actual TerraNova projects, not stock images or promised results.</p></div>
        <div className={styles.gallery}>{projects.map((project, index) => <figure key={project.src} className={index === 0 ? styles.featured : ''}><Image src={project.src} alt={project.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><figcaption>{index === 1 ? 'BEFORE / AFTER' : 'COMPLETED PROJECT'}</figcaption></figure>)}</div>
      </section>

      <section className={styles.services}>
        <div><p className={styles.eyebrow}>WHAT CAN BE INCLUDED</p><h2>Plan the whole yard around how you want to use it.</h2></div>
        <div className={styles.grid}>
          <article><h3>Backyard design</h3><p>Organize the layout, priorities and materials before construction starts.</p></article>
          <article><h3>Pavers & hardscape</h3><p>Build patios, walkways, gathering areas and defined outdoor zones.</p></article>
          <article><h3>Retaining walls</h3><p>Address grade changes and create usable, structured landscape areas.</p></article>
          <article><h3>Turf & xeriscape</h3><p>Balance lower-water materials, planting and usable green space.</p></article>
          <article><h3>Concrete & fencing</h3><p>Coordinate clean transitions, access, privacy and final boundaries.</p></article>
          <article><h3>Irrigation & planting</h3><p>Connect finish work to the rest of the property plan.</p></article>
        </div>
      </section>

      <section className={styles.process}>
        <p className={styles.eyebrow}>A CLEAR PROJECT PATH</p><h2>From property review to completed build.</h2>
        <ol><li><span>01</span><h3>Share your goals</h3><p>Tell us what you want to change and how you want to use the space.</p></li><li><span>02</span><h3>Review the property</h3><p>Consider access, grade, existing conditions and project priorities.</p></li><li><span>03</span><h3>Define the scope</h3><p>Clarify materials, quantities and the approximate investment range.</p></li><li><span>04</span><h3>Estimate the project</h3><p>Price the work around your property and construction requirements.</p></li></ol>
      </section>

      <section className={styles.area}><p className={styles.eyebrow}>LOCAL PROJECTS</p><h2>Serving Reno, Sparks and nearby Northern Nevada.</h2><p>Typical coverage includes Reno, Sparks, Spanish Springs, Sun Valley, Verdi and nearby Washoe County communities. Project availability is confirmed by location, scope and scheduling.</p></section>

      <QualifiedProjectForm />
    </main>
  )
}
