import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ThankYou.module.css'

export const metadata: Metadata = {
  title: 'Thank You | TerraNova Landscaping',
  description: 'Your TerraNova Landscaping project request was received.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <script
        dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-18409055812/vp6NCNOi3-kcEMTMj8pE'});`,
        }}
      />

      <section className={styles.shell}>
        <div className={styles.copyPanel}>
          <div className={styles.topbar}>
            <Link className={styles.brand} href="/">
              <span className={styles.brandMain}>TERRANOVA</span>
              <span className={styles.brandSub}>LANDSCAPING</span>
            </Link>
            <span className={styles.status}>Request received</span>
          </div>

          <div className={styles.copy}>
            <div className={styles.check} aria-hidden="true">✓</div>
            <p className={styles.eyebrow}>THANK YOU</p>
            <h1>We&apos;ve got your project.</h1>
            <p className={styles.intro}>
              Your request is in. We&apos;ll review the details and reach out to talk through your project, design ideas, and next steps.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href="tel:+17758707224">Call 775-870-7224</a>
              <Link className={styles.secondaryAction} href="/">Back to website</Link>
            </div>

            <div className={styles.nextSteps}>
              <div>
                <span>01</span>
                <p><strong>We review your request</strong><small>Service, location, budget, timeline, and project details.</small></p>
              </div>
              <div>
                <span>02</span>
                <p><strong>We contact you</strong><small>We clarify the scope and answer any initial questions.</small></p>
              </div>
              <div>
                <span>03</span>
                <p><strong>We plan the next step</strong><small>If it&apos;s a fit, we move toward design and estimate scheduling.</small></p>
              </div>
            </div>
          </div>

          <div className={styles.footerNote}>
            <span>Reno • Sparks • Washoe County</span>
            <span>Free estimate &amp; design consultation</span>
          </div>
        </div>

        <div className={styles.visualPanel}>
          <Image
            src="/images/imgs/imgs_reales/PHOTO-2026-08-26-17-37-52.jpg"
            alt="Completed TerraNova Landscaping project"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
            className={styles.image}
          />
          <div className={styles.overlay} />
          <div className={styles.visualCopy}>
            <span>REAL TERRANOVA PROJECT</span>
            <strong>From an idea to an outdoor space built around you.</strong>
          </div>
        </div>
      </section>
    </main>
  )
}
