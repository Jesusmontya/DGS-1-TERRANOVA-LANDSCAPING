'use client'

import Link from 'next/link'
import FloatingQuoteButton from './FloatingQuoteButton'
import { rememberQuoteOrigin, trackEvent } from '@/lib/analytics'
import styles from './SeoLandingPage.module.css'

type Material = {
  name: string
  description: string
  photoUrl?: string
}

type DetailCard = {
  title: string
  text: string
}

type DetailSection = {
  eyebrow: string
  title: string
  intro?: string
  items: DetailCard[]
}

type ProcessStep = {
  title: string
  text: string
}

type Comparison = {
  eyebrow?: string
  title: string
  intro?: string
  left: { title: string; items: string[] }
  right: { title: string; items: string[] }
}

type Faq = {
  question: string
  answer: string
}

type SchemaData = {
  canonical: string
  serviceName: string
  description: string
  areaServed: string[]
  breadcrumbLabel: string
}

type SeoLandingPageProps = {
  eyebrow: string
  title: string
  intro: string
  bullets: string[]
  whatToExpectTitle?: string
  whatToExpectCopy?: string
  city?: string
  localBody?: string
  materials?: Material[]
  materialsIntro?: string
  detailSections?: DetailSection[]
  process?: { title: string; intro?: string; steps: ProcessStep[] }
  comparison?: Comparison
  faqs?: Faq[]
  related?: { href: string; label: string }[]
  schema?: SchemaData
}

const businessId = 'https://terranovalandscapingnv.com/#business'

export default function SeoLandingPage({
  eyebrow,
  title,
  intro,
  bullets,
  whatToExpectTitle = 'A simpler way to plan your outdoor project.',
  whatToExpectCopy = 'TerraNova helps homeowners understand the layout, materials, and next steps before construction starts. You do not need to arrive with a finished design.',
  city,
  localBody,
  materials = [],
  materialsIntro = 'Use these material categories to compare options before your design call. Final products, colors, installation method, and availability are confirmed for your specific project.',
  detailSections = [],
  process,
  comparison,
  faqs = [],
  related = [],
  schema,
}: SeoLandingPageProps) {
  const handleQuoteClick = (placement: string) => {
    rememberQuoteOrigin()
    trackEvent('click_free_quote', { placement, page_path: window.location.pathname })
  }

  const handlePhoneClick = (placement: string) => {
    trackEvent('click_phone', { placement, page_path: window.location.pathname })
  }

  const serviceSchema = schema ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: schema.serviceName,
    description: schema.description,
    url: schema.canonical,
    provider: { '@id': businessId },
    areaServed: schema.areaServed.map((name) => ({ '@type': 'Place', name })),
  } : null

  const breadcrumbSchema = schema ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TerraNova Landscaping', item: 'https://terranovalandscapingnv.com/' },
      { '@type': 'ListItem', position: 2, name: schema.breadcrumbLabel, item: schema.canonical },
    ],
  } : null

  return (
    <main className={styles.page}>
      {serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />}
      {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />}

      <header className={styles.header}>
        <Link className={styles.brand} href="/">TERRANOVA <span>LANDSCAPING</span></Link>
        <a className={styles.headerCall} href="tel:+17758707224" onClick={() => handlePhoneClick('seo_header')}>Call 775-870-7224</a>
      </header>

      <FloatingQuoteButton />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.actions}>
          <a className={styles.secondary} href="tel:+17758707224" onClick={() => handlePhoneClick('seo_hero')}>Call 775-870-7224</a>
        </div>
      </section>

      <section className={styles.content}>
        <div>
          <p className={styles.eyebrow}>WHAT TO EXPECT</p>
          <h2>{whatToExpectTitle}</h2>
          <p>{whatToExpectCopy}</p>
        </div>
        <ul>
          {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </section>

      {detailSections.map((section) => (
        <section className={styles.detailSection} key={section.title}>
          <div className={styles.detailHeading}>
            <p className={styles.eyebrow}>{section.eyebrow}</p>
            <h2>{section.title}</h2>
            {section.intro && <p>{section.intro}</p>}
          </div>
          <div className={styles.detailGrid}>
            {section.items.map((item) => (
              <article className={styles.detailCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.midQuote}>
        <div>
          <p className={styles.midQuoteEyebrow}>READY TO PLAN YOUR YARD?</p>
          <h2>Get a Free Quote</h2>
          <p>Tell us what you want to build and we’ll help you plan the next step.</p>
        </div>
        <Link className={styles.midQuoteButton} href="/#contact" onClick={() => handleQuoteClick('seo_mid_page')}>
          GET MY FREE QUOTE <span>↓</span>
        </Link>
      </section>

      {materials.length > 0 && (
        <section className={styles.materials}>
          <p className={styles.eyebrow}>EXPLORE MATERIALS</p>
          <h2>Compare the options that shape the finished look.</h2>
          <p className={styles.materialIntro}>{materialsIntro}</p>
          <div className={styles.materialGrid}>
            {materials.map((material) => (
              <article className={styles.materialCard} key={material.name}>
                <h3>{material.name}</h3>
                <p>{material.description}</p>
                {material.photoUrl ? (
                  <a
                    href={material.photoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('view_material', { material: material.name, page_path: window.location.pathname })}
                  >
                    View material photo <span>↗</span>
                  </a>
                ) : (
                  <span className={styles.materialPending}>Material photo pending</span>
                )}
              </article>
            ))}
          </div>
          <div className={styles.materialCta}>
            <div>
              <p className={styles.eyebrow}>NOT SURE WHAT TO CHOOSE?</p>
              <h3>Tell us the look you want. We’ll help narrow down the materials.</h3>
            </div>
            <Link href="/#contact" onClick={() => handleQuoteClick('materials_cta')}>Get a Free Quote <span>→</span></Link>
          </div>
        </section>
      )}

      {process && (
        <section className={styles.process}>
          <div className={styles.detailHeading}>
            <p className={styles.eyebrow}>HOW IT WORKS</p>
            <h2>{process.title}</h2>
            {process.intro && <p>{process.intro}</p>}
          </div>
          <ol className={styles.processGrid}>
            {process.steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {comparison && (
        <section className={styles.comparison}>
          <div className={styles.detailHeading}>
            <p className={styles.eyebrow}>{comparison.eyebrow || 'COMPARE OPTIONS'}</p>
            <h2>{comparison.title}</h2>
            {comparison.intro && <p>{comparison.intro}</p>}
          </div>
          <div className={styles.comparisonGrid}>
            {[comparison.left, comparison.right].map((column) => (
              <article key={column.title}>
                <h3>{column.title}</h3>
                <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {city && (
        <section className={styles.local}>
          <p className={styles.eyebrow}>LOCAL LANDSCAPING</p>
          <h2>Landscaping services in {city}</h2>
          <p>{localBody || 'Project availability depends on scope and location. Contact TerraNova to confirm service for your property and discuss your goals.'}</p>
        </section>
      )}

      {faqs.length > 0 && (
        <section className={styles.faq}>
          <div className={styles.detailHeading}>
            <p className={styles.eyebrow}>COMMON QUESTIONS</p>
            <h2>Questions before you request a quote.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={styles.related}>
          <p className={styles.eyebrow}>EXPLORE MORE</p>
          <div className={styles.links}>{related.map((item) => <Link key={item.href} href={item.href}>{item.label} <span>→</span></Link>)}</div>
        </section>
      )}
    </main>
  )
}
