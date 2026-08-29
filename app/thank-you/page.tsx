import type { Metadata } from 'next'
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
        <div className={styles.topbar}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandMain}>TERRANOVA</span>
            <span className={styles.brandSub}>LANDSCAPING</span>
          </Link>
          <span className={styles.status}>Request received</span>
        </div>

        <div className={styles.content}>
          <div className={styles.heroCopy}>
            <div className={styles.check} aria-hidden="true">✓</div>
            <p className={styles.eyebrow}>THANK YOU</p>
            <h1>Your project request is in.</h1>
            <p className={styles.intro}>
              We received your information and a TerraNova representative will review the project details and reach out about the next step.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href="tel:+17758707224">Call 775-870-7224</a>
              <Link className={styles.secondaryAction} href="/">Back to homepage</Link>
            </div>
          </div>

          <aside className={styles.nextCard}>
            <p className={styles.nextLabel}>WHAT HAPPENS NEXT</p>
            <ol className={styles.steps}>
              <li>
                <span>01</span>
                <div>
                  <strong>We review your project</strong>
                  <p>We look at your service, location, budget, timeline, and project details.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>We contact you</strong>
                  <p>We can answer questions, clarify the scope, and confirm the best next step.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>We plan the estimate</strong>
                  <p>If the project is a fit, we can move forward with design and estimate scheduling.</p>
                </div>
              </li>
            </ol>
          </aside>
        </div>

        <div className={styles.footerNote}>
          <span>Reno • Sparks • Washoe County</span>
          <span>Free estimate & design consultation</span>
        </div>
      </section>
    </main>
  )
}
