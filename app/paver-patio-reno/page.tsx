import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/paver-patio-reno'

export const metadata: Metadata = {
  title: 'Paver Patio Reno NV | Patios, Walkways & Retaining Walls',
  description: 'Paver patio and hardscape planning in Reno, NV for patios, walkways, retaining walls, masonry, and outdoor gathering areas.',
  alternates: { canonical },
}

const businessId = 'https://terranovalandscapingnv.com/#business'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Paver Patio and Hardscape Services in Reno, NV',
  description: 'Paver patio and hardscape planning for Reno homes, including patios, walkways, retaining walls, masonry, and material guidance.',
  url: canonical,
  provider: { '@id': businessId },
  areaServed: ['Reno, Nevada', 'Washoe County, Nevada'].map((name) => ({ '@type': 'Place', name })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
    { '@type': 'ListItem', position: 2, name: 'Paver Patio Reno', item: canonical },
  ],
}

const projects = [
  { src: '/images/imgs/IMG_0272.PNG', title: 'Patios', text: 'Define a usable outdoor gathering space around the way you want to live outside.' },
  { src: '/images/imgs/IMG_0273.PNG', title: 'Walkways', text: 'Connect doors, gates, patios, and landscape zones with an intentional path.' },
  { src: '/images/imgs/IMG_0274.PNG', title: 'Retaining Walls', text: 'Add structure, grade transitions, and stronger visual definition where the property needs it.' },
  { src: '/images/imgs/IMG_0275.PNG', title: 'Hardscape Areas', text: 'Combine pavers, walls, masonry, and surrounding landscape as one complete outdoor plan.' },
]

const process = [
  ['01', 'Measure the use', 'Define the patio, walkway, wall, and circulation needs for the property.'],
  ['02', 'Choose the layout', 'Set the shape, transitions, borders, and relationship to the rest of the yard.'],
  ['03', 'Choose materials', 'Compare paver, stone, wall, and concrete options that fit the project.'],
  ['04', 'Prepare the site', 'Address demolition, excavation, grading, and base preparation required for the scope.'],
  ['05', 'Install & finish', 'Complete the hardscape and connect it cleanly with the surrounding landscape.'],
]

export default function PaverPatioRenoPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>PAVER PATIOS · RENO, NV</p>
          <h1>Paver patios and hardscape built around the whole yard.</h1>
          <p>A good patio is more than the paver itself. TerraNova helps plan the size, layout, material, surrounding landscape, and supporting work so the finished hardscape feels like part of the property.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/#contact">Get a Free Estimate</Link>
            <a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a>
          </div>
        </div>
      </section>

      <div className={styles.trust}>
        <span>15+ Years Experience</span>
        <span>Free Estimates</span>
        <span>Pavers · Concrete · Retaining Walls</span>
      </div>

      <section className={`${styles.section} ${styles.split}`}>
        <div className={styles.photo} role="img" aria-label="TerraNova hardscape project" />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>PLAN THE WHOLE SPACE</p>
          <h2>Do not design a patio like it exists by itself.</h2>
          <p>The best hardscape projects consider where people move, where furniture belongs, how walls or grade changes affect the space, and how the patio connects to the rest of the landscape.</p>
          <div className={styles.pillList}>
            <span>Patio Layout</span><span>Walkways</span><span>Retaining Walls</span><span>Masonry</span><span>Concrete</span><span>Landscape Connections</span>
          </div>
          <Link className={styles.textLink} href="/#contact">Start Your Project →</Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>REAL TERRANOVA WORK</p>
          <h2>Hardscape should create usable outdoor space—not just cover square footage.</h2>
          <p>These are real images already in TerraNova&apos;s project portfolio. We use them to show the kind of outdoor spaces that can be planned around patios, walkways, walls, and connected landscape areas.</p>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <Image src={project.src} alt={`TerraNova ${project.title.toLowerCase()} project`} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" />
              <div><h3>{project.title}</h3><p>{project.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.designBuild}`}>
        <div className={styles.designCopy}>
          <p className={styles.eyebrow}>PAVER PROJECTS</p>
          <h2>Build the patio around how you want to use the yard.</h2>
          <p>TerraNova can help plan patios, walkways, gathering areas, retaining walls, and connected hardscape so the finished space feels intentional instead of pieced together.</p>
          <div className={styles.stepsMini}>
            <article><strong>Patios</strong><span>Size the space around circulation, furniture, and how the area will be used.</span></article>
            <article><strong>Walkways</strong><span>Connect important areas of the property with a deliberate path.</span></article>
            <article><strong>Gathering Areas</strong><span>Create defined outdoor zones for seating and entertaining.</span></article>
            <article><strong>Retaining Walls</strong><span>Add structure where grade changes or stronger landscape definition are needed.</span></article>
          </div>
        </div>
        <div className={styles.designImage} role="img" aria-label="Completed TerraNova hardscape project" />
      </section>

      <section className={styles.dark}>
        <div className={styles.darkInner}>
          <p className={styles.eyebrow}>HOW IT WORKS</p>
          <h2>A paver project should be planned before the first unit is installed.</h2>
          <div className={styles.process}>
            {process.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PAVERS VS CONCRETE</p>
          <h2>Two different hardscape looks with different tradeoffs.</h2>
          <p>The right choice depends on the property, design, maintenance expectations, and budget. TerraNova can discuss which option makes more sense for the project.</p>
        </div>
        <div className={styles.compare}>
          <article><h3>Pavers</h3><ul><li>Modular pieces with many pattern and border options</li><li>Individual sections can be accessed or replaced more locally when needed</li><li>Joints and edge details become part of the finished look</li><li>Material selection can range from simple to decorative</li></ul></article>
          <article><h3>Concrete</h3><ul><li>Creates a more continuous surface</li><li>Can work well with clean, simple layouts</li><li>Finish and joint planning affect the appearance</li><li>Repairs and movement can look different than a modular paver system</li></ul></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>PAVER PATIO COST</p>
          <h2>What changes the price of a paver patio in Reno?</h2>
          <p>An exact quote depends on the property and material selection. These are the project factors that typically change the amount of labor, preparation, and material required.</p>
        </div>
        <div className={styles.costGrid}>
          <article><h3>Patio size & layout</h3><p>Square footage, curves, borders, steps, and connected walkways all affect material quantities and installation time.</p></article>
          <article><h3>Demolition & access</h3><p>Removing an existing surface or working through limited access can add preparation and handling.</p></article>
          <article><h3>Base & grading</h3><p>The site needs appropriate preparation for the selected hardscape and existing property conditions.</p></article>
          <article><h3>Material choice</h3><p>Product size, finish, pattern, border details, and natural-stone options can change the overall scope.</p></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>MATERIAL OPTIONS</p>
          <h2>Choose the finish after the layout makes sense.</h2>
          <p>Exact products and availability are confirmed for the project, but these are the main material categories TerraNova can discuss during planning.</p>
        </div>
        <div className={styles.materials}>
          <article><h3>Concrete Pavers</h3><p>Modular patio and walkway units available in different formats, finishes, and patterns.</p></article>
          <article><h3>Natural Stone / Flagstone</h3><p>Natural stone for a more organic look in patios, paths, steps, and accents.</p></article>
          <article><h3>Retaining Wall Block</h3><p>Segmental wall materials used for grade transitions and defined landscape areas.</p></article>
          <article><h3>Masonry / Accent Stone</h3><p>Stone or masonry finishes that can tie walls and hardscape features into the overall design.</p></article>
          <article><h3>Concrete</h3><p>A continuous hardscape option for patios, walkways, and pads with different finish possibilities.</p></article>
          <article><h3>Decorative Gravel</h3><p>Can complement pavers and hardscape in lower-water landscape areas.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faq}`}>
        <div className={styles.heading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Questions before starting a paver project.</h2></div>
        <details><summary>Can TerraNova combine a paver patio with retaining walls or other landscape work?</summary><p>Yes, those elements can be planned as one project when they fit the property and scope. The quote process confirms exactly what is included.</p></details>
        <details><summary>Do I need to pick the exact paver before requesting a quote?</summary><p>No. You can begin with the look you want. Material options can be narrowed down during planning and finalized based on availability and project requirements.</p></details>
        <details><summary>Are pavers always better than concrete?</summary><p>No. Each has different design, maintenance, installation, and cost considerations. The better choice depends on what you want the space to do and how you want it to look.</p></details>
        <details><summary>How do I get a paver patio price?</summary><p>Submit the free quote form with the approximate project area and what you want built. TerraNova can then determine the next step needed to price the actual property and scope.</p></details>
        <div className={styles.related}>
          <Link href="/backyard-design">Backyard Design</Link><Link href="/xeriscaping-reno">Xeriscaping</Link><Link href="/landscaping-reno-nv">Landscaping in Reno</Link>
        </div>
      </section>

      <section className={styles.final}>
        <div className={styles.finalInner}>
          <p className={styles.eyebrow}>READY TO BUILD?</p>
          <h2>Plan your patio as part of the whole outdoor space.</h2>
          <p>Tell TerraNova what you want to build, what the property looks like, and the type of hardscape you have in mind. We can help determine the next step for design and pricing.</p>
          <div className={styles.actions}><Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link><a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a></div>
        </div>
      </section>
    </main>
  )
}
