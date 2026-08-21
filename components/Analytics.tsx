import Script from 'next/script'

export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const loaderId = gaId || adsId

  if (!loaderId) return null

  const configLines = [
    gaId ? `gtag('config', '${gaId}', { send_page_view: true });` : '',
    adsId ? `gtag('config', '${adsId}');` : '',
  ].filter(Boolean).join('\n')

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${loaderId}`} strategy="afterInteractive" />
      <Script id="terranova-google-tags" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${configLines}`}
      </Script>
    </>
  )
}
