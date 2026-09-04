import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/landscaping-reno-nv'

export const metadata: Metadata = {
  title: 'Landscaping Reno NV | TerraNova Landscaping',
  description: 'Custom landscaping in Reno, NV for backyards, pavers, concrete, hardscaping, walls and design. Plan your outdoor project with a free estimate.',
  alternates: { canonical },
}

const services = [
  { title: 'Backyard Design', text: 'Plan the layout, materials, features, and priorities before construction starts.', image: '/images/imgs/IMG_0249.PNG', href: '/backyard-design' },
  { title: 'Pavers', text: 'Patios, walkways, gathering areas, and hardscape zones planned around the property.', image: '/images/imgs/IMG_0252.PNG', href: '/pavers-reno-nv' },
  { title: 'Concrete', text: 'Outdoor concrete surfaces integrated into a complete landscape plan.', image: '/images/imgs/IMG_0251.PNG', href: '/hardscape-reno' },
  { title: 'Hardscaping', text: 'Structural outdoor features that define circulation, use, and the finished layout.', image: '/images/imgs/IMG_0271.PNG', href: '/hardscape-reno' },
  { title: 'Retaining Walls', text: 'Functional and visual wall systems for grade changes and defined landscape areas.', image: '/images/imgs/IMG_0274.PNG', href: '/hardscape-reno' },
  { title: 'Fencing', text: 'Coordinate fencing with the overall backyard transformation when it fits the scope.', image: '/images/imgs/IMG_0275.PNG', href: '/backyard-design' },
]

const portfolio = [
  { src: '/images/imgs/IMG_0272.PNG', alt: 'TerraNova completed landscaping project in Northern Nevada' },
  { src: '/images/imgs/IMG_0273.PNG', alt: 'Completed TerraNova backyard landscape project' },
  { src: '/images/imgs/IMG_0274.PNG', alt: 'TerraNova hardscape and landscaping project' },
  { src: '/images/imgs/IMG_0275.PNG', alt: 'Finished outdoor landscape project by TerraNova' },
  { src: '/images/imgs/IMG_0276.PNG', alt: 'TerraNova residential landscaping project' },
]

const faqs = [
  ['How much does landscaping cost in Reno?', 'Pricing depends on yard size, access, site preparation, materials, design, and the amount of construction involved. TerraNova can review your project and provide a free estimate based on the actual scope.'],
  ['Can TerraNova design my backyard?', 'Yes. TerraNova can help plan a backyard from the beginning and can use 2D or 3D landscape design when appropriate for the project.'],
  ['Do you install pavers?', 'Yes. Pavers are part of TerraNova’s landscaping and hardscape services for patios, walkways, gathering areas, and other outdoor features.'],
  ['Can you build an entire backyard from scratch?', 'Yes, when the project scope is a fit. TerraNova can help with planning, design, material decisions, and construction for unfinished or dirt backyards.'],
  ['Do you provide free landscaping estimates?', 'Yes. TerraNova offers a free consultation and project estimate so you can discuss the property, goals, and next steps.'],
  ['What areas do you serve?', 'TerraNova primarily serves Reno and also works in Sparks, Verdi, Washoe County, the Lake Tahoe area, and nearby communities depending on the project.'],
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Landscaping Services in Reno, NV',
  description: 'Custom landscaping, landscape design, hardscaping, pavers, concrete, retaining walls, fencing, masonry, and backyard transformations in Reno, Nevada.',
  url: canonical,
  provider: { '@id': 'https://terranovalandscapingnv.com/#business' },
  areaServed: ['Reno, Nevada', 'Sparks, Nevada', 'Washoe County, Nevada', 'Verdi, Nevada', 'Lake Tahoe'].map((name) => ({ '@type': 'Place', name })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
    { '@type': 'ListItem', position: 2, name: 'Landscaping Reno NV', item: canonical },
  ],
}

export default function LandscapingRenoPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingQuoteButton />

      <header className={styles.header}>
        <Link className={styles.brand} href="/">TERRANOVA <span>LANDSCAPING</span></Link>
        <nav><a href="#services">Services</a><a href="#work">Our Work</a><a href="#process">Process</a></nav>
        <a className={styles.call} href="tel:+17758707224">Call 775-870-7224</a>
      </header>

      <section className={styles.hero}>
        <Image src="/images/imgs/IMG_0273.PNG" alt="TerraNova Landscaping completed outdoor project" fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.kicker}>LANDSCAPING · RENO, NEVADA</p>
          <h1>Landscaping in Reno, NV</h1>
          <p className={styles.heroCopy}>Custom backyard design, hardscaping, and landscape construction—planned around your property from the start.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/#contact">Get a Free Estimate <span>↗</span></Link>
            <a className={styles.ghostButton} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
        <div className={styles.trustBar}><span>15+ Years Experience</span><span>Free Estimates</span><span>2D / 3D Design</span></div>
      </section>

      <section className={`${styles.section} ${styles.problem}`}>
        <div className={styles.problemImage}><Image src="/images/imgs/IMG_0272.PNG" alt="TerraNova backyard landscaping project" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className={styles.problemCopy}>
          <p className={styles.eyebrow}>FROM DIRT YARD TO FINISHED BACKYARD</p>
          <h2>You don’t need to know exactly what to build before you call.</h2>
          <p>Start with the property, the problems you want to solve, and how you want to use the yard. TerraNova can help organize the layout, compare materials, visualize the project, and move into construction with a clearer plan.</p>
          <ul><li>Plan the layout around your property</li><li>Compare pavers, concrete, walls, fencing, and finishes</li><li>Use 2D or 3D design when it helps the project</li><li>Build the yard as one connected transformation</li></ul>
          <Link className={styles.textLink} href="/#contact">Start Your Project <span>→</span></Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.services}`} id="services">
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>COMPLETE LANDSCAPING SERVICES</p><h2>Everything the yard needs, planned together.</h2></div><p>TerraNova can coordinate design, hardscape, concrete, walls, fencing, and landscape construction so the finished outdoor space feels intentional.</p></div>
        <div className={styles.serviceGrid}>{services.map((service) => <Link className={styles.serviceCard} href={service.href} key={service.title}><div className={styles.servicePhoto}><Image src={service.image} alt={`${service.title} landscaping service`} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><div><h3>{service.title}</h3><p>{service.text}</p><span>Explore service →</span></div></Link>)}</div>
      </section>

      <section className={styles.work} id="work">
        <div className={`${styles.section} ${styles.workInner}`}>
          <div className={styles.sectionHeading}><div><p className={`${styles.eyebrow} ${styles.light}`}>REAL TERRANOVA WORK</p><h2>See what a finished outdoor space can become.</h2></div><p>Real photography from TerraNova’s existing project portfolio—not stock work presented as ours.</p></div>
          <div className={styles.gallery}>{portfolio.map((photo, i) => <figure className={i === 0 ? styles.galleryFeature : ''} key={photo.src}><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>Project {String(i + 1).padStart(2, '0')}</figcaption></figure>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.designBuild}`}>
        <div className={styles.designCopy}><p className={styles.eyebrow}>DESIGN + BUILD</p><h2>One clear path from idea to construction.</h2><p>Many homeowners know they want a better backyard but are unsure about the layout, materials, or what is realistic for the property. TerraNova helps work through those decisions before construction begins.</p><div className={styles.fourGrid}><article><strong>01</strong><h3>Plan the layout</h3></article><article><strong>02</strong><h3>Choose materials</h3></article><article><strong>03</strong><h3>Visualize the project</h3></article><article><strong>04</strong><h3>Build the yard</h3></article></div></div>
        <div className={styles.designImage}><Image src="/images/imgs/IMG_0294.PNG" alt="TerraNova landscape design and completed outdoor space" fill sizes="(max-width: 800px) 100vw, 45vw" /></div>
      </section>

      <section className={styles.process} id="process">
        <div className={styles.section}>
          <p className={`${styles.eyebrow} ${styles.light}`}>HOW IT WORKS</p><h2>From first conversation to completed outdoor space.</h2>
          <ol><li><span>01</span><h3>Consultation</h3><p>Talk through the property, goals, and what you want to change.</p></li><li><span>02</span><h3>Planning</h3><p>Organize the layout, features, materials, and project direction.</p></li><li><span>03</span><h3>Design</h3><p>Use planning and 2D or 3D visualization when appropriate.</p></li><li><span>04</span><h3>Construction</h3><p>Build the agreed landscaping and hardscape scope.</p></li><li><span>05</span><h3>Final Walkthrough</h3><p>Review the completed work and finished outdoor space.</p></li></ol>
        </div>
      </section>

      <section className={styles.renoFeature}>
        <Image src="/images/imgs/IMG_0276.PNG" alt="Landscaping project suited to Northern Nevada outdoor living" fill sizes="100vw" />
        <div className={styles.renoShade} />
        <div className={styles.renoContent}><p className={`${styles.eyebrow} ${styles.light}`}>BUILT FOR NORTHERN NEVADA</p><h2>Landscaping that makes sense for Reno properties.</h2><p>Reno’s dry climate, seasonal temperature changes, and outdoor-living potential make material and layout decisions important from the beginning.</p><div><article><h3>Dry Climate</h3><p>Use the yard intentionally instead of treating every area the same.</p></article><article><h3>Durable Materials</h3><p>Consider appearance, exposure, maintenance, and everyday use.</p></article><article><h3>Water-Conscious Choices</h3><p>Combine usable landscape and hardscape with lower-water decisions where they fit.</p></article></div></div>
      </section>

      <section className={`${styles.section} ${styles.why}`}>
        <div><p className={styles.eyebrow}>WHY TERRANOVA</p><h2>A clearer way to build your yard.</h2></div>
        <div className={styles.whyGrid}><article><strong>15+</strong><h3>Years Experience</h3><p>Backed by approximately 15 years of landscaping experience.</p></article><article><strong>01</strong><h3>Custom Planning</h3><p>The property and your goals shape the plan—not a one-size-fits-all package.</p></article><article><strong>2D/3D</strong><h3>Design Options</h3><p>Visualization can help make major project decisions easier to understand.</p></article><article><strong>A→Z</strong><h3>Design + Build</h3><p>Plan connected landscape and construction elements as one project.</p></article></div>
      </section>

      <section className={`${styles.section} ${styles.areas}`}>
        <p className={styles.eyebrow}>SERVICE AREA</p><h2>Serving Reno and nearby Northern Nevada communities.</h2><p>Exact availability depends on the property, project scope, and scheduling.</p><div><span>Reno</span><Link href="/locations/sparks">Sparks</Link><Link href="/locations/verdi">Verdi</Link><Link href="/locations/lake-tahoe">Lake Tahoe</Link><span>Washoe County</span></div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Questions before you request an estimate.</h2></div>
        <div className={styles.faqList}>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className={styles.finalCta}>
        <div><p className={`${styles.eyebrow} ${styles.light}`}>READY WHEN YOU ARE</p><h2>Ready to transform your yard?</h2><p>Tell TerraNova what you want to build and we’ll help determine the next step for design and pricing.</p><div className={styles.heroActions}><Link className={styles.primaryButton} href="/#contact">Get Your Free Estimate <span>↗</span></Link><a className={styles.ghostButton} href="tel:+17758707224">Call 775-870-7224</a></div></div>
      </section>

      <footer className={styles.footer}><Link className={styles.brand} href="/">TERRANOVA <span>LANDSCAPING</span></Link><p>Professional landscaping in Reno, Sparks & Northern Nevada.</p><a href="mailto:info@terranovalandscapingnv.com">info@terranovalandscapingnv.com</a></footer>
    </main>
  )
}
