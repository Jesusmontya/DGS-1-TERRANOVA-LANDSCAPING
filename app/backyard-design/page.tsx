import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import FloatingQuoteButton from '@/components/FloatingQuoteButton'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/backyard-design'

export const metadata: Metadata = {
  title: 'Backyard Design Reno NV | Custom Landscape Design',
  description: 'Custom backyard design in Reno, NV with layout planning, material guidance, 2D/3D design options, and a clear path from idea to construction.',
  alternates: { canonical },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Backyard Design and Landscape Planning in Reno, NV',
  description: 'Custom backyard design and landscape planning in Reno with layout, material guidance, and 2D or 3D design options before construction.',
  url: canonical,
  provider: { '@id': 'https://terranovalandscapingnv.com/#business' },
  areaServed: [{ '@type': 'Place', name: 'Reno, Nevada' }, { '@type': 'Place', name: 'Washoe County, Nevada' }],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
    { '@type': 'ListItem', position: 2, name: 'Backyard Design Reno', item: canonical },
  ],
}

const ideas = [
  { src: '/images/imgs/IMG_0272.PNG', title: 'Outdoor Gathering Space', text: 'Plan seating, circulation, patios, and usable zones around the way you want to live outside.' },
  { src: '/images/imgs/IMG_0252.PNG', title: 'Paver Patio', text: 'Build a defined hardscape area that connects naturally with the rest of the yard.' },
  { src: '/images/imgs/IMG_0250.PNG', title: 'Low-Water Landscape', text: 'Combine turf, rock, planting, and hardscape into a lower-water landscape plan.' },
  { src: '/images/imgs/IMG_0273.PNG', title: 'Custom Hardscape', text: 'Use walls, masonry, concrete, and transitions to give the yard structure.' },
  { src: '/images/imgs/IMG_0276.PNG', title: 'Complete Backyard', text: 'Bring multiple landscape elements together as one coordinated project.' },
]

const costs = [
  ['Site preparation', 'Demolition, access, grading, excavation, and existing property conditions can change the amount of work required.'],
  ['Square footage', 'Larger patios, turf areas, walls, concrete, and planting zones increase labor and material quantities.'],
  ['Material selection', 'Pavers, stone, wall block, turf, rock, concrete finish, and other choices affect the final scope.'],
  ['Project complexity', 'Irrigation, elevation changes, fencing, masonry, and multiple connected features add construction steps.'],
]

export default function BackyardDesignPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingQuoteButton />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>BACKYARD DESIGN · RENO, NV</p>
          <h1>Custom backyard design in Reno, NV.</h1>
          <p>From an unfinished yard to a complete plan you can actually visualize and build. TerraNova helps you work through the layout, materials, features, and construction direction from the start.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get a Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>

      <div className={styles.trust}>
        <span>15+ Years Landscaping Experience</span>
        <span>Free Project Estimates</span>
        <span>2D / 3D Design Options</span>
      </div>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.photo} role="img" aria-label="TerraNova completed backyard landscaping project" />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>DESIGN FROM ZERO</p>
          <h2>You do not need to have the backyard figured out.</h2>
          <p>Start with what you want the yard to do. TerraNova can help organize the space, compare materials, choose priorities, and turn a dirt yard, outdated yard, or loose collection of ideas into a clearer plan.</p>
          <div className={styles.pillList}><span>Layout</span><span>Pavers</span><span>Turf</span><span>Concrete</span><span>Walls</span><span>Fencing</span><span>Planting</span></div>
          <Link className={styles.textLink} href="/#contact">Start Your Project →</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>BACKYARD IDEAS</p>
          <h2>What could your backyard become?</h2>
          <p>The goal is not to copy a template. It is to understand what fits your property, your priorities, and the way you want to use the space.</p>
        </div>
        <div className={styles.ideasGrid}>
          {ideas.map((idea) => <article className={styles.idea} key={idea.title}><Image src={idea.src} alt={`${idea.title} TerraNova landscaping project`} width={1200} height={900} sizes="(max-width: 900px) 100vw, 40vw" /><div><h3>{idea.title}</h3><p>{idea.text}</p></div></article>)}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.designBuild}>
          <div className={styles.designCopy}>
            <p className={styles.eyebrow}>2D + 3D DESIGN</p>
            <h2>See the direction before construction starts.</h2>
            <p>When appropriate, TerraNova can use 2D and 3D landscape design to make the layout easier to understand before the project moves into construction.</p>
            <div className={styles.stepsMini}>
              <article><strong>Plan the layout</strong><span>Organize the major zones and how they connect.</span></article>
              <article><strong>Choose materials</strong><span>Compare practical finishes based on style and project needs.</span></article>
              <article><strong>Visualize the project</strong><span>Use design tools when they make the direction clearer.</span></article>
              <article><strong>Build the yard</strong><span>Move from planning into a defined construction scope.</span></article>
            </div>
          </div>
          <div className={styles.designImage} role="img" aria-label="TerraNova landscape design and completed backyard inspiration" />
        </div>
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>From blank yard to a buildable plan.</h2>
          <div className={styles.process}>
            {[
              ['01','Consultation','Share what you like, what is not working, and how you want to use the yard.'],
              ['02','Planning','Organize the layout, priorities, and major landscape zones.'],
              ['03','Design','Use planning and, when appropriate, 2D or 3D design to visualize the project.'],
              ['04','Materials','Compare pavers, concrete, turf, rock, walls, and other finishes.'],
              ['05','Construction','Define the scope and build the project in the right order.'],
            ].map(([n,t,p]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}><p className={styles.eyebrow}>PROJECT COST</p><h2>What affects the cost of a complete backyard project?</h2><p>Exact pricing depends on the property and scope. These are the main factors that can change the amount of labor, preparation, and material required.</p></div>
        <div className={styles.costGrid}>{costs.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}><p className={styles.eyebrow}>MATERIAL PLANNING</p><h2>Build the yard as one system instead of separate projects.</h2><p>Material guidance is part of the planning conversation. Exact products, colors, availability, and installation details are confirmed for the specific project.</p></div>
        <div className={styles.materials}>
          {[
            ['Pavers','Patios, walkways, gathering areas, and defined hardscape zones.'],['Natural Stone / Flagstone','Natural finishes for paths, accents, steps, and selected outdoor areas.'],['Decorative Gravel / Rock','A lower-water ground-cover option available in different sizes and tones.'],['Artificial Turf','A green, lower-water surface for usable lawn-style areas.'],['Concrete','Walkways, pads, patios, and clean modern layouts.'],['Retaining Wall Block','Grade changes, raised areas, and structured landscape zones.']
          ].map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.heading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Questions before you start your backyard design.</h2></div>
        <details><summary>Do I need to have a backyard design before I contact TerraNova?</summary><p>No. You can start with a general goal, photos you like, or simply the problems you want to solve. TerraNova can help organize those ideas into a clearer plan.</p></details>
        <details><summary>Can one project include pavers, turf, irrigation, walls, fencing, and planting?</summary><p>Those elements can be planned together when they fit the property and project scope. The quote process is where the exact combination is confirmed.</p></details>
        <details><summary>Can you help me choose materials?</summary><p>Yes. Material guidance is part of the planning conversation. Exact products, colors, availability, and installation details are confirmed for the specific project.</p></details>
        <details><summary>How do I get an exact price?</summary><p>Start with the free quote form. Once TerraNova understands the property, desired features, materials, and site conditions, the team can discuss the appropriate next step for pricing.</p></details>
        <div className={styles.related}><Link href="/landscaping-reno-nv">Landscaping Reno</Link><Link href="/paver-patio-reno">Paver Patios</Link><Link href="/xeriscaping-reno">Xeriscaping</Link><Link href="/locations/sparks">Landscaping in Sparks</Link></div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>READY WHEN YOU ARE</p>
          <h2>Ready to turn your backyard into a real plan?</h2>
          <p>Tell TerraNova what you want to change, what you are considering, and where the property is. You do not need to have every detail decided before reaching out.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link><a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a></div>
        </div>
      </section>
    </main>
  )
}
