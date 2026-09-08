import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/landscape-design-reno'

export const metadata: Metadata = {
  title: 'Landscape Design Reno, NV | Backyard Design & Build',
  description: 'Professional landscape design for Reno and Sparks homes. Plan your backyard, outdoor living areas and materials, then move into construction with TerraNova.',
  alternates: { canonical },
  openGraph: {
    title: 'Landscape Design Reno, NV | Backyard Design & Build',
    description: 'Plan your Reno backyard from initial design through landscape construction. Request a free estimate.',
    url: canonical,
  },
}

export default function LandscapeDesignRenoPage() {
  return <CommercialServicePage
    showSiteChrome
    canonical={canonical}
    serviceName="Landscape Design"
    eyebrow="LANDSCAPE DESIGN · RENO & SPARKS, NV"
    title="A clearer plan for the backyard you want to build."
    intro="TerraNova Landscaping provides residential landscape design for homeowners in Reno, Sparks, Verdi, and Northern Nevada—from initial backyard planning through landscape construction."
    photoAlt="Completed TerraNova landscape design and construction project"
    tags={['Backyard Design', 'Outdoor Living', 'Residential Design', 'Design + Build']}
    features={[
      { title: 'Backyard design', text: 'Organize the layout around the property, how you want to use it, and the problems you want to solve.' },
      { title: 'Outdoor living design', text: 'Plan gathering areas, patios, circulation, access, and practical transitions between outdoor zones.' },
      { title: 'Material direction', text: 'Compare pavers, concrete, turf, rock, planting, walls, and finishes before construction decisions are finalized.' },
      { title: 'From plan to construction', text: 'Move from landscape design into a connected construction scope instead of having to start over with another team.' },
    ]}
    faqs={[
      { question: 'Do you provide landscape design services in Reno?', answer: 'Yes. TerraNova helps Reno-area homeowners plan backyard layouts, materials, outdoor living areas, and connected landscape construction.' },
      { question: 'Can TerraNova design and build my backyard?', answer: 'Yes. TerraNova can help take a project from initial planning and design direction through landscape construction when the scope is a fit.' },
      { question: 'Do I need to know every material before requesting a design estimate?', answer: 'No. You can start with your goals and the way you want to use the yard. Materials and features can be narrowed down during planning.' },
      { question: 'What areas do you serve for landscape design?', answer: 'TerraNova serves Reno, Sparks, Verdi, and surrounding Northern Nevada areas depending on the project and schedule.' },
    ]}
    related={[
      { href: '/backyard-design', label: 'Backyard Design' },
      { href: '/backyard-remodel-reno', label: 'Backyard Remodel' },
      { href: '/pavers-hardscape-reno', label: 'Pavers & Hardscape' },
      { href: '/xeriscaping-reno', label: 'Xeriscaping Reno' },
    ]}
  />
}
