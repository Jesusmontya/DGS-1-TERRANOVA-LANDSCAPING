import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default:  'TerraNova Landscaping | Reno, NV',
    template: '%s | TerraNova Landscaping',
  },
  description: 'Custom backyard design and landscaping in Reno, Sparks, and Northern Nevada. 15 years of experience. Free design consultation. Call today.',
  keywords: ['landscaping Reno NV', 'backyard design Reno', 'landscaping company Sparks NV', 'custom backyard Reno Nevada', 'hardscaping Reno NV'],
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://terranovalandscapingnv.com',
    siteName:    'TerraNova Landscaping',
    title:       'TerraNova Landscaping | Reno, NV',
    description: 'Custom backyard design and landscaping in Reno, Sparks, and Northern Nevada.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
