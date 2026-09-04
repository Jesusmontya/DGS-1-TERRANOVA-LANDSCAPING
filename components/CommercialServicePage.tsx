import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import styles from './CommercialServicePage.module.css'

type Faq = { question: string; answer: string }
type Feature = { title: string; text: string }
type PageProps = {
  canonical: string; serviceName: string; eyebrow: string; title: string; intro: string
  photoAlt: string; tags: string[]; features: Feature[]; faqs: Faq[]; related: { href: string; label: string }[]
}

const realPhotos = [
  '/images/imgs/imgs_reales/IMG_2031.PNG',
  '/images/imgs/imgs_reales/PHOTO-2026-08-26-17-37-52.jpg',
]

export default function CommercialServicePage({ canonical, serviceName, eyebrow, title, intro, photoAlt, tags, features, faqs, related }: PageProps) {
  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service', name: `${serviceName} in Reno, Nevada`, description: intro,
    url: canonical, provider: { '@id': 'https://terranovalandscapingnv.com/#business' },
    areaServed: [{ '@type': 'Place', name: 'Reno, Nevada' }, { '@type': 'Place', name: 'Sparks, Nevada' }, { '@type': 'Place', name: 'Northern Nevada' }],
  }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' }, { '@type': 'ListItem', position: 2, name: serviceName, item: canonical }] }

  return <main className={styles.page} style={{ '--hero': `url('${realPhotos[0]}')`, '--photo': `url('${realPhotos[1]}')` } as CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <section className={styles.hero}><div className={styles.heroInner}><p className={styles.eyebrow}>{eyebrow}</p><h1>{title}</h1><p>{intro}</p><div className={styles.actions}><Link className={styles.primary} href="/#contact">Get a Free Estimate</Link><a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a></div></div></section>
    <div className={styles.trust}><span>Reno & Sparks</span><span>Free Project Estimates</span><span>Landscape Construction</span></div>
    <section className={`${styles.section} ${styles.split}`}><div className={styles.photo} role="img" aria-label={photoAlt} /><div className={styles.copy}><p className={styles.eyebrow}>{serviceName.toUpperCase()} FOR NORTHERN NEVADA</p><h2>Plan the details around how you want to use the space.</h2><p>TerraNova can help connect the materials, layout, access, and construction steps into one outdoor project. Start with a free estimate and the goals for your property.</p><div className={styles.tags}>{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link className={styles.primary} href="/#contact">Request Your Free Estimate</Link></div></section>
    <section className={styles.section}><div className={styles.heading}><p className={styles.eyebrow}>REAL TERRANOVA PROJECT PHOTOS</p><h2>See completed work from the TerraNova portfolio.</h2><p>These photographs are from the business&apos;s real project media. Your layout and materials are planned around your property.</p></div><div className={styles.grid}>{realPhotos.map((src, index) => <article className={styles.card} key={src}><Image src={src} width={1200} height={900} sizes="(max-width: 850px) 100vw, 50vw" alt={index === 0 ? photoAlt : 'Completed TerraNova landscaping project in Northern Nevada'} /><div><h3>{index === 0 ? 'Outdoor project planning' : 'Built landscape details'}</h3><p>Explore materials and construction options during your estimate.</p></div></article>)}</div></section>
    <section className={styles.section}><div className={styles.heading}><p className={styles.eyebrow}>WHAT CAN BE INCLUDED</p><h2>A connected approach to outdoor construction.</h2></div><div className={styles.featureGrid}>{features.map((feature) => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
    <section className={styles.dark}><div className={styles.darkInner}><p className={styles.eyebrow}>A CLEAR PROJECT PATH</p><h2>Start with the property, then build the right scope.</h2><div className={styles.steps}><article><span>01</span><h3>Share your goals</h3><p>Tell us what you want to improve and how you use the space.</p></article><article><span>02</span><h3>Review the layout</h3><p>Discuss surfaces, access, materials, and practical priorities.</p></article><article><span>03</span><h3>Confirm the scope</h3><p>Use the estimate to clarify the work and next steps.</p></article><article><span>04</span><h3>Build the project</h3><p>Move into landscape construction when the project is ready.</p></article></div></div></section>
    <section className={`${styles.section} ${styles.faq}`}><div className={styles.heading}><p className={styles.eyebrow}>COMMON QUESTIONS</p><h2>Questions before you request an estimate.</h2></div>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}<div className={styles.related}>{related.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div></section>
    <section className={styles.final}><div className={styles.finalInner}><p className={styles.eyebrow}>READY WHEN YOU ARE</p><h2>Tell us what you want to build.</h2><p>Send the basics about your property and the project. TerraNova can review the request and help determine the next step.</p><div className={styles.actions}><Link className={styles.primary} href="/#contact">Get Your Free Estimate</Link><a className={styles.secondary} href="tel:+17758707224">Call 775-870-7224</a></div></div></section>
  </main>
}
