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
      <section className={styles.card}>
        <Link className={styles.brand} href="/">TERRANOVA <span>LANDSCAPING</span></Link>
        <p className={styles.eyebrow}>REQUEST RECEIVED</p>
        <h1>Thanks — we received your project.</h1>
        <p className={styles.intro}>A TerraNova representative can review the details you sent and follow up with you about the next step.</p>

        <div className={styles.steps}>
          <div><span>01</span><p><strong>We review your request.</strong><small>We look at the service, project timing, budget range, and details you shared.</small></p></div>
          <div><span>02</span><p><strong>We contact you.</strong><small>We can clarify the project and answer initial questions.</small></p></div>
          <div><span>03</span><p><strong>We plan the next step.</strong><small>If the project is a fit, we can discuss design and estimate scheduling.</small></p></div>
        </div>

        <div className={styles.actions}>
          <a href="tel:+17758707224">Call 775-870-7224</a>
          <Link href="/">Back to TerraNova</Link>
        </div>
      </section>
    </main>
  )
}
