'use client'

import { useEffect, useState } from 'react'
import { rememberQuoteOrigin, trackEvent } from '@/lib/analytics'
import styles from './FloatingQuoteButton.module.css'

export default function FloatingQuoteButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('contact')

    const update = () => {
      const scrolledEnough = window.scrollY > window.innerHeight * 0.18
      if (!contact) {
        setVisible(scrolledEnough)
        return
      }

      const rect = contact.getBoundingClientRect()
      const nearForm = rect.top < window.innerHeight * 0.82
      setVisible(scrolledEnough && !nearForm)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!visible) return null

  return (
    <a
      className={styles.button}
      href="/#contact"
      aria-label="Jump to free quote form"
      onClick={() => {
        rememberQuoteOrigin()
        trackEvent('click_free_quote', { placement: 'floating_quote', page_path: window.location.pathname })
      }}
    >
      <span>FREE QUOTE</span>
      <strong>↓</strong>
    </a>
  )
}
