import Script from 'next/script'

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim()
  const loaderId = gaId || adsId

  if (!loaderId) return null

  const configLines = [
    gaId ? `gtag('config', '${gaId}', { send_page_view: true });` : '',
    adsId ? `gtag('config', '${adsId}');` : '',
  ].filter(Boolean).join('\n')

  const initScript = `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
${configLines}`

  return (
    <>
      <Script
        id="terranova-google-tag-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`}
        strategy="afterInteractive"
      />
      <Script
        id="terranova-google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: initScript }}
      />
    </>
  )
}
