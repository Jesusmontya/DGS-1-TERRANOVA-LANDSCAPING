import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const siteUrl = 'https://terranovalandscapingnv.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Landscaping Reno NV | TerraNova Landscaping',
    template: '%s | TerraNova Landscaping',
  },
  description: 'Backyard design and landscape construction in Reno, Sparks, Verdi, and Northern Nevada. Plan your yard from zero with material guidance and a free project quote.',
  keywords: ['landscaping Reno NV', 'landscaper Reno', 'backyard design Reno', 'paver patio Reno', 'xeriscaping Reno', 'landscaping Sparks NV'],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TerraNova Landscaping',
    title: 'Landscaping Reno NV | TerraNova Landscaping',
    description: 'Backyard design and landscape construction for Reno, Sparks, Verdi, and Northern Nevada.',
  },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  '@id': `${siteUrl}/#business`,
  name: 'TerraNova Landscaping',
  url: siteUrl,
  telephone: '+1-775-870-7224',
  description: 'Backyard design and landscape construction in Reno, Sparks, Verdi, Lake Tahoe, and surrounding Northern Nevada communities.',
  areaServed: [
    { '@type': 'City', name: 'Reno, Nevada' },
    { '@type': 'City', name: 'Sparks, Nevada' },
    { '@type': 'City', name: 'Verdi, Nevada' },
    { '@type': 'AdministrativeArea', name: 'Washoe County, Nevada' },
    { '@type': 'Place', name: 'Lake Tahoe' },
    { '@type': 'Place', name: 'Incline Village' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Landscaping Services',
    itemListElement: [
      'Backyard and landscape design',
      'Paver patios and hardscape',
      'Concrete',
      'Artificial turf',
      'Xeriscaping',
      'Retaining walls',
      'Fencing',
      'Irrigation',
      'Masonry',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
