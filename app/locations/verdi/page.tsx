import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

const canonical = 'https://terranovalandscapingnv.com/locations/verdi'

export const metadata: Metadata = {
  title: 'Landscaping Verdi NV | Backyard Design & Hardscape',
  description: 'Landscaping in Verdi, NV for backyard design, pavers, retaining walls, xeriscaping, irrigation, concrete, fencing, and custom outdoor projects.',
  alternates: { canonical },
}

export default function VerdiPage() {
  return (
    <SeoLandingPage
      eyebrow="LANDSCAPING · VERDI, NV"
      title="Custom landscaping in Verdi with a plan that fits your property."
      intro="TerraNova helps Verdi homeowners turn unfinished or outdated outdoor areas into more usable spaces by planning the layout, materials, hardscape, irrigation, and supporting landscape work together."
      whatToExpectTitle="Start with the property conditions and the way you want to use the space."
      whatToExpectCopy="Different yards can require different approaches to grade, drainage, access, hardscape, irrigation, and maintenance. TerraNova helps organize those decisions before the build begins."
      city="Verdi, NV"
      localBody="Verdi is within TerraNova’s stated service area. The exact property, project size, access, scope, and scheduling determine availability, so submit a free quote to confirm the next step."
      bullets={[
        'Backyard design and layout planning',
        'Pavers, patios, retaining walls, masonry, and concrete',
        'Xeriscaping, decorative rock, turf, and planting',
        'Irrigation, fencing, and complete landscape improvements',
      ]}
      detailSections={[
        {
          eyebrow: 'PROPERTY-FIRST DESIGN',
          title: 'The layout should respond to the property instead of forcing a template onto it.',
          items: [
            { title: 'Grade & transitions', text: 'Plan walls, steps, paths, and landscape zones around changes in elevation where the property requires them.' },
            { title: 'Drainage & preparation', text: 'Consider how water moves through the site before installing final hardscape and landscape surfaces.' },
            { title: 'Access & construction order', text: 'Think through equipment access and the sequence of irrigation, hardscape, walls, fencing, and finish work.' },
            { title: 'Maintenance over time', text: 'Choose turf, rock, planting, concrete, pavers, and other finishes around the level of upkeep you want.' },
          ],
        },
        {
          eyebrow: 'OUTDOOR PROJECT OPTIONS',
          title: 'Combine the features that make the property more useful.',
          items: [
            { title: 'Patios & paths', text: 'Create defined areas for movement, seating, and outdoor use with pavers or concrete.' },
            { title: 'Retaining walls & masonry', text: 'Add structure where the design needs grade transitions or stronger landscape definition.' },
            { title: 'Turf & xeriscaping', text: 'Use green space selectively and lower-water materials where they better fit the property.' },
            { title: 'Irrigation & fencing', text: 'Coordinate the functional systems with the rest of the design rather than treating them as separate projects.' },
          ],
        },
      ]}
      materialsIntro="We have left material-photo links open until TerraNova confirms the pavers, wall systems, turf, rock, and other supplier products it actually wants Verdi customers to see."
      materials={[
        { name: 'Pavers', description: 'For patios, walkways, transitions, and defined hardscape areas.' },
        { name: 'Natural Stone / Flagstone', description: 'For selected paths, steps, accents, and outdoor surfaces with a natural look.' },
        { name: 'Retaining Wall Block', description: 'For grade transitions and structured landscape zones.' },
        { name: 'Decorative Rock', description: 'For lower-water ground cover and landscape transitions.' },
        { name: 'Artificial Turf', description: 'For selected green and usable yard areas with lower routine water use.' },
        { name: 'Concrete', description: 'For pads, paths, patios, and other continuous hardscape surfaces.' },
      ]}
      process={{
        title: 'Plan around the site before choosing every finish.',
        steps: [
          { title: 'Review the goals', text: 'Identify what the yard needs to do and what conditions need to be addressed.' },
          { title: 'Organize the layout', text: 'Place major zones, walls, hardscape, access, and landscape areas.' },
          { title: 'Choose materials', text: 'Narrow the pavers, concrete, rock, turf, wall, and planting direction.' },
          { title: 'Confirm the scope', text: 'Define the construction work and supporting systems included in the project.' },
          { title: 'Build in sequence', text: 'Complete preparation, infrastructure, hardscape, and finish work in the proper order.' },
        ],
      }}
      faqs={[
        { question: 'Does TerraNova serve Verdi, Nevada?', answer: 'Yes, Verdi is part of TerraNova’s stated service area. Availability for a specific property depends on scope and scheduling.' },
        { question: 'Can TerraNova help with a yard that needs more than one type of work?', answer: 'Yes. Backyard design, hardscape, walls, irrigation, fencing, turf, xeriscaping, concrete, and related landscape work can be planned together when they fit the project.' },
        { question: 'Do I need to know the exact materials before calling?', answer: 'No. You can begin with the look and function you want. Material categories can be narrowed during planning, then exact products are confirmed for the job.' },
        { question: 'How do I start a Verdi landscaping quote?', answer: 'Use the free quote form and include the property location, main service, budget range, timing, and a short description of what you want to change.' },
      ]}
      related={[
        { href: '/backyard-design', label: 'Backyard Design' },
        { href: '/paver-patio-reno', label: 'Paver Patios' },
        { href: '/locations/sparks', label: 'Sparks' },
      ]}
      schema={{
        canonical,
        serviceName: 'Landscaping Services in Verdi, NV',
        description: 'Landscape design and construction in Verdi, Nevada, including pavers, retaining walls, xeriscaping, irrigation, concrete, fencing, and backyard planning.',
        areaServed: ['Verdi, Nevada', 'Washoe County, Nevada'],
        breadcrumbLabel: 'Landscaping Verdi NV',
      }}
    />
  )
}
