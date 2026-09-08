import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/pavers-hardscape-reno'

export const metadata: Metadata = {
  title: 'Pavers & Hardscape Contractor Reno, NV | Patios & Walls',
  description: 'Paver installation and hardscaping in Reno and Sparks, NV. Plan patio pavers, walkways, retaining walls and backyard hardscape with a free estimate.',
  alternates: { canonical },
  openGraph: {
    title: 'Pavers & Hardscape Contractor Reno, NV',
    description: 'Paver patios, walkways, retaining walls and connected backyard hardscape for Reno-area homes. Get a free estimate.',
    url: canonical,
  },
}

export default function PaversHardscapeRenoPage() {
  return <CommercialServicePage
    canonical={canonical}
    serviceName="Pavers and Hardscape"
    eyebrow="PAVERS & HARDSCAPE · RENO & SPARKS, NV"
    title="Pavers and hardscape planned as part of the whole backyard."
    intro="TerraNova Landscaping plans paver installation, patios, walkways, retaining walls, and backyard hardscape for Reno, Sparks, Verdi, and Northern Nevada homes."
    photoAlt="Completed TerraNova paver patio and hardscape project"
    tags={['Patio Pavers', 'Walkways', 'Retaining Walls', 'Backyard Hardscape']}
    features={[
      { title: 'Patio pavers', text: 'Create a defined gathering, dining, or outdoor living area around the size and use of your property.' },
      { title: 'Walkways & hardscape areas', text: 'Connect doors, gates, patios, and landscape zones with deliberate circulation and finished surfaces.' },
      { title: 'Retaining walls', text: 'Include wall systems where grade changes, access, or stronger landscape definition call for them.' },
      { title: 'Complete landscape integration', text: 'Coordinate pavers and hardscaping with landscape design, turf, planting, irrigation, and the rest of the backyard.' },
    ]}
    faqs={[
      { question: 'Do you install pavers in Reno and Sparks?', answer: 'Yes. TerraNova provides paver and hardscape planning for Reno, Sparks, Verdi, and surrounding Northern Nevada communities.' },
      { question: 'Can paver installation include retaining walls?', answer: 'Yes. Pavers, patios, walls, walkways, and related landscape construction can be planned together when they fit the property and scope.' },
      { question: 'Can a hardscape project be part of a complete backyard remodel?', answer: 'Yes. Hardscape can be integrated with landscape design, turf, planting, irrigation, fencing, and other outdoor construction.' },
      { question: 'How do I get a paver or hardscape estimate?', answer: 'Use the free estimate form to share your city, project goals, budget range, timing, and a short description of the area you want to build.' },
    ]}
    related={[
      { href: '/pavers-reno-nv', label: 'Paver Contractors Reno' },
      { href: '/hardscape-reno', label: 'Hardscape Reno' },
      { href: '/landscape-design-reno', label: 'Landscape Design Reno' },
      { href: '/backyard-remodel-reno', label: 'Backyard Remodel' },
    ]}
  />
}
