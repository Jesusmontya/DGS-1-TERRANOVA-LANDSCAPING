'use client'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

type EventParams = Record<string, string | number | boolean | null | undefined>

const QUOTE_ORIGIN_KEY = 'terranova_quote_origin'
const ATTRIBUTION_KEY = 'terranova_attribution'

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: name, ...params })
  window.gtag?.('event', name, params)

  if (name === 'generate_lead') {
    const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_SEND_TO
    if (sendTo) {
      window.gtag?.('event', 'conversion', {
        send_to: sendTo,
        value: typeof params.value === 'number' ? params.value : undefined,
        currency: 'USD',
      })
    }
  }
}

export function rememberQuoteOrigin() {
  if (typeof window === 'undefined') return

  try {
    sessionStorage.setItem(QUOTE_ORIGIN_KEY, window.location.pathname)
    const params = new URLSearchParams(window.location.search)
    const attribution = {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      gclid: params.get('gclid'),
      referrer: document.referrer || null,
    }
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution))
  } catch {
    // Storage can be unavailable in private/restricted browser modes.
  }
}

export function getLeadAttribution() {
  if (typeof window === 'undefined') {
    return {
      landing_page: '/',
      referrer: null,
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      gclid: null,
    }
  }

  let stored: Record<string, string | null> = {}
  let landingPage = window.location.pathname

  try {
    landingPage = sessionStorage.getItem(QUOTE_ORIGIN_KEY) || landingPage
    const raw = sessionStorage.getItem(ATTRIBUTION_KEY)
    if (raw) stored = JSON.parse(raw)
  } catch {
    // Fall back to the current page/query string.
  }

  const params = new URLSearchParams(window.location.search)
  return {
    landing_page: landingPage,
    referrer: stored.referrer || document.referrer || null,
    utm_source: stored.utm_source || params.get('utm_source'),
    utm_medium: stored.utm_medium || params.get('utm_medium'),
    utm_campaign: stored.utm_campaign || params.get('utm_campaign'),
    gclid: stored.gclid || params.get('gclid'),
  }
}
