import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/artificial-turf-reno'

export const metadata: Metadata = {
  title: 'Artificial Turf Installation Reno, NV | TerraNova Landscaping',
  description: 'Artificial turf installation for Reno and Sparks homes. Plan low-maintenance synthetic grass, rock, planting and backyard landscaping with a free estimate.',
  alternates: { canonical },
  openGraph: {
    title: 'Artificial Turf Installation Reno, NV',
    description: 'Low-maintenance artificial turf and connected backyard landscaping in Reno and Sparks. Request a free estimate.',
    url: canonical,
  },
}

export default function ArtificialTurfRenoPage() {
  return <CommercialServicePage
    canonical={canonical}
    serviceName="Artificial Turf Installation"
    eyebrow="ARTIFICIAL TURF · RENO & SPARKS, NV"
    title="Artificial turf that fits the way you use your backyard."
    intro="TerraNova Landscaping plans artificial turf installation for Reno, Sparks, Verdi, and Northern Nevada homes, with the surrounding landscape considered from the start."
    photoAlt="Completed TerraNova artificial turf and landscape project"
    tags={['Artificial Turf', 'Synthetic Grass', 'Backyard Turf', 'Low-Maintenance Landscaping']}
    features={[
      { title: 'Backyard artificial turf', text: 'Create a green, usable area for the parts of the yard where a lawn-style surface makes sense.' },
      { title: 'Synthetic grass planning', text: 'Review the layout, base preparation, drainage considerations, and edges before installation begins.' },
      { title: 'Low-maintenance landscaping', text: 'Combine artificial grass with decorative rock, planting, pavers, and paths for a more complete yard.' },
      { title: 'Connected landscape construction', text: 'Coordinate turf with the outdoor features and access areas around it instead of treating it as an isolated surface.' },
    ]}
    faqs={[
      { question: 'Do you install artificial turf in Reno and Sparks?', answer: 'Yes. TerraNova serves Reno, Sparks, Verdi, and surrounding Northern Nevada communities based on project scope and scheduling.' },
      { question: 'Can artificial turf be part of a backyard remodel?', answer: 'Yes. Artificial turf can be planned with pavers, rock, planting, irrigation adjustments, and other landscape construction.' },
      { question: 'Is artificial grass a good option for every part of a yard?', answer: 'Not always. The best placement depends on how you use the area, drainage, sun exposure, access, and the rest of the landscape plan.' },
      { question: 'How do I request an artificial turf estimate?', answer: 'Use the free estimate form to share your property, project goals, budget range, timing, and the area you want to improve.' },
    ]}
    related={[
      { href: '/xeriscaping-reno', label: 'Xeriscaping Reno' },
      { href: '/landscape-design-reno', label: 'Landscape Design Reno' },
      { href: '/backyard-remodel-reno', label: 'Backyard Remodel' },
      { href: '/landscaping-reno-nv', label: 'Landscaping Reno' },
    ]}
  />
}
