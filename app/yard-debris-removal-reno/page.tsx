import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/yard-debris-removal-reno'

export const metadata: Metadata = {
  title: 'Yard Debris Removal Reno, NV | Seasonal Yard Cleanup',
  description: 'Seasonal yard debris removal and cleanup for Reno and Sparks properties. Clear outdoor areas and request a free estimate from TerraNova Landscaping.',
  alternates: { canonical },
  openGraph: {
    title: 'Yard Debris Removal Reno, NV | Seasonal Yard Cleanup',
    description: 'Request a free estimate for seasonal yard debris cleanup in Reno, Sparks, and Northern Nevada.',
    url: canonical,
  },
}

export default function YardDebrisRemovalRenoPage() {
  return <CommercialServicePage
    showSiteChrome
    canonical={canonical}
    serviceName="Yard Debris Removal"
    eyebrow="YARD DEBRIS REMOVAL · RENO & SPARKS, NV"
    title="Clear seasonal yard debris and make your outdoor space feel cared for again."
    intro="TerraNova Landscaping offers seasonal yard debris removal and cleanup for Reno, Sparks, Verdi, and surrounding Northern Nevada homes."
    photoAlt="Completed TerraNova seasonal yard debris cleanup project"
    tags={['Yard Debris Removal', 'Seasonal Cleanup', 'Outdoor Area Cleanup', 'Free Estimates']}
    features={[
      { title: 'Seasonal debris cleanup', text: 'Review the outdoor areas that need cleanup and plan the work around your property and project goals.' },
      { title: 'Paths, patios, and beds', text: 'Include the landscape areas, paths, patios, and beds that need seasonal attention in the estimate request.' },
      { title: 'Property-specific scope', text: 'Every property is different, so the work is confirmed after reviewing the requested cleanup areas.' },
      { title: 'Ready for the next project', text: 'Seasonal cleanup can help prepare outdoor areas for landscaping, planting, hardscape, or backyard improvements.' },
    ]}
    faqs={[
      { question: 'Do you offer yard debris removal in Reno and Sparks?', answer: 'Yes. TerraNova provides seasonal yard debris cleanup for Reno, Sparks, Verdi, and nearby Northern Nevada communities based on the requested scope and schedule.' },
      { question: 'What should I include in my cleanup request?', answer: 'Describe the outdoor areas that need attention, such as beds, paths, patios, leaves, pine needles, or other seasonal debris.' },
      { question: 'Can debris cleanup be part of a larger landscaping project?', answer: 'Yes. Cleanup can be reviewed as part of a larger landscape construction, hardscape, xeriscaping, or backyard remodel project when appropriate.' },
      { question: 'How do I request an estimate?', answer: 'Use the estimate form to share the basics about your property and the cleanup work you want reviewed.' },
    ]}
    related={[
      { href: '/fall-leaf-cleanup-reno', label: 'Fall Leaf Cleanup' },
      { href: '/leaf-removal-reno', label: 'Leaf Removal Reno' },
      { href: '/landscaping-reno-nv', label: 'Landscaping Reno' },
      { href: '/backyard-remodel-reno', label: 'Backyard Remodel' },
    ]}
  />
}
