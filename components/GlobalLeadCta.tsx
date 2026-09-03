'use client'

import { usePathname, useRouter } from 'next/navigation'
import { MouseEvent } from 'react'
import { rememberQuoteOrigin, trackEvent } from '@/lib/analytics'
import styles from './GlobalLeadCta.module.css'

const PHONE = '+17758707224'

export default function GlobalLeadCta() {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname.startsWith('/admin') || pathname === '/thank-you') return null

  const handleCall = () => {
    trackEvent('click_phone', { placement: 'global_cta', page_path: pathname })
  }

  const handleQuote = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    rememberQuoteOrigin()
    trackEvent('click_free_quote', { placement: 'global_cta', page_path: pathname })

    const form = document.querySelector<HTMLElement>('#quote-form, #estimate form, #contact form, form')
    const firstField = form?.querySelector<HTMLElement>('input[name="name"]')
    const section = document.querySelector<HTMLElement>('#estimate, #contact')
    const target = firstField || form || section

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: firstField ? 'center' : 'start',
      })
      return
    }

    router.push('/backyard-remodel-reno#quote-form')
  }

  return (
    <aside className={styles.wrap} aria-label="Quick contact actions">
      <a className={styles.call} href={`tel:${PHONE}`} onClick={handleCall}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 2.8 9.1 8c.2.5.1 1-.3 1.4l-1.7 1.7a15.2 15.2 0 0 0 5.8 5.8l1.7-1.7c.4-.4.9-.5 1.4-.3l5.2 2.4c.5.2.8.7.7 1.3l-.5 2.7c-.1.6-.7 1.1-1.3 1.1C10 22.4 1.6 14 1.6 3.9c0-.6.5-1.2 1.1-1.3l2.7-.5c.6-.1 1.1.2 1.3.7Z" fill="currentColor"/></svg>
        <span>Call</span>
      </a>
      <a className={styles.quote} href="#quote-form" onClick={handleQuote}>
        <span>Get a Quote</span>
        <span aria-hidden="true">↗</span>
      </a>
    </aside>
  )
}
