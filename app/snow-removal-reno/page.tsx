import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/snow-removal-reno'

export const metadata: Metadata = {
  title: 'Snow Removal Reno, NV | Seasonal Property Cleanup',
  description: 'Seasonal snow removal and property cleanup for Reno, Sparks and Northern Nevada. Request a free estimate from TerraNova Landscaping.',
  alternates: { canonical },
  openGraph: {
    title: 'Snow Removal Reno, NV | Seasonal Property Cleanup',
    description: 'Request a free estimate for seasonal snow removal and property cleanup in Reno and Sparks.',
    url: canonical,
  },
}

export default function SnowRemovalRenoPage() {
  return <CommercialServicePage
    showSiteChrome
    canonical={canonical}
    serviceName="Snow Removal"
    eyebrow="SNOW REMOVAL · RENO & SPARKS, NV"
    title="Seasonal snow removal for Reno and Sparks properties."
    intro="TerraNova Landscaping offers seasonal snow removal and property cleanup for homes in Reno, Sparks, Verdi, and surrounding Northern Nevada communities."
    photoAlt="TerraNova snow removal project in Northern Nevada"
    photos={[
      '/images/cleansnow/IMG_3005.JPG',
      '/images/cleansnow/IMG_3006.JPG',
      '/images/cleansnow/IMG_3007.JPG',
    ]}
    tags={['Snow Removal', 'Seasonal Property Cleanup', 'Reno & Sparks', 'Free Estimates']}
    features={[
      { title: 'Seasonal snow removal', text: 'Request snow cleanup for the outdoor areas of your property that need attention during winter weather.' },
      { title: 'Property-specific planning', text: 'Share the property details and areas you want reviewed so TerraNova can confirm a practical cleanup scope.' },
      { title: 'Reno and Sparks service', text: 'TerraNova serves Reno, Sparks, Verdi, and nearby Northern Nevada communities based on scheduling and project scope.' },
      { title: 'Seasonal property care', text: 'Use TerraNova for yard cleanup in fall and seasonal property cleanup through winter.' },
    ]}
    faqs={[
      { question: 'Do you offer snow removal in Reno and Sparks?', answer: 'TerraNova offers seasonal snow removal and property cleanup for Reno, Sparks, Verdi, and nearby Northern Nevada communities based on scope and scheduling.' },
      { question: 'How do I request a snow removal estimate?', answer: 'Use the estimate form to share your property location and the outdoor areas you want reviewed.' },
      { question: 'Can I request other seasonal cleanup services?', answer: 'Yes. TerraNova also offers fall leaf cleanup, yard cleanup, and yard debris removal for properties in the Reno area.' },
      { question: 'Does TerraNova provide landscaping construction too?', answer: 'Yes. TerraNova provides landscape design, construction, pavers, hardscaping, xeriscaping, artificial turf, and backyard remodels.' },
    ]}
    related={[
      { href: '/fall-leaf-cleanup-reno', label: 'Fall Leaf Cleanup' },
      { href: '/leaf-removal-reno', label: 'Leaf Removal Reno' },
      { href: '/yard-debris-removal-reno', label: 'Yard Debris Removal' },
      { href: '/landscaping-reno-nv', label: 'Landscaping Reno' },
    ]}
  />
}
