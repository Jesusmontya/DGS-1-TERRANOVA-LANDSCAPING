import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/fall-leaf-cleanup-reno'

export const metadata: Metadata = {
  title: 'Fall Leaf Cleanup Reno, NV | Yard & Debris Removal',
  description: 'Fall leaf cleanup and yard debris removal for Reno, Sparks and Northern Nevada properties. Request a free TerraNova Landscaping estimate today.',
  alternates: { canonical },
  openGraph: {
    title: 'Fall Leaf Cleanup Reno, NV | Yard & Debris Removal',
    description: 'Clear leaves and seasonal yard debris with TerraNova Landscaping. Free estimates for Reno and Sparks properties.',
    url: canonical,
  },
}

export default function FallLeafCleanupRenoPage() {
  return <CommercialServicePage
    showSiteChrome
    canonical={canonical}
    serviceName="Fall Leaf Cleanup"
    eyebrow="FALL YARD CLEANUP · RENO & SPARKS, NV"
    title="Clear fallen leaves and seasonal yard debris before it takes over your property."
    intro="TerraNova Landscaping provides fall leaf cleanup and seasonal yard cleanup for homes in Reno, Sparks, Verdi, and surrounding Northern Nevada communities."
    photoAlt="Completed TerraNova seasonal yard cleanup project"
    tags={['Leaf Removal', 'Fall Yard Cleanup', 'Yard Debris', 'Seasonal Landscaping']}
    features={[
      { title: 'Leaf and pine needle cleanup', text: 'Clear accumulated leaves and seasonal debris from the areas of your yard that need attention.' },
      { title: 'Seasonal yard cleanup', text: 'Tidy landscape beds, paths, patios, and other outdoor areas as the season changes.' },
      { title: 'Debris removal planning', text: 'Review the property and the amount of cleanup needed before confirming the project scope.' },
      { title: 'Landscape-ready property', text: 'Use seasonal cleanup as a starting point for planting, hardscape, xeriscaping, or a larger backyard project.' },
    ]}
    faqs={[
      { question: 'Do you provide fall leaf cleanup in Reno and Sparks?', answer: 'Yes. TerraNova provides seasonal leaf cleanup and yard cleanup for Reno, Sparks, Verdi, and surrounding Northern Nevada communities based on project scope and scheduling.' },
      { question: 'What can be included in a seasonal yard cleanup?', answer: 'The scope can include leaf and pine needle cleanup, yard debris, and cleanup of landscape areas. The exact work is confirmed after reviewing the property.' },
      { question: 'Can I request a one-time fall cleanup?', answer: 'Yes. Use the estimate form to describe the property and the areas you want cleaned so TerraNova can review the next step.' },
      { question: 'Can fall cleanup be combined with other landscaping work?', answer: 'Yes. Seasonal cleanup can be combined with landscape improvements when the project and schedule are a fit.' },
    ]}
    related={[
      { href: '/leaf-removal-reno', label: 'Leaf Removal Reno' },
      { href: '/yard-debris-removal-reno', label: 'Yard Debris Removal' },
      { href: '/landscaping-reno-nv', label: 'Landscaping Reno' },
      { href: '/xeriscaping-reno', label: 'Xeriscaping Reno' },
      { href: '/backyard-remodel-reno', label: 'Backyard Remodel' },
      { href: '/landscape-design-reno', label: 'Landscape Design Reno' },
    ]}
  />
}
