import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

const canonical = 'https://terranovalandscapingnv.com/locations/lake-tahoe'

export const metadata: Metadata = {
  title: 'Landscaping Lake Tahoe & Incline Village | Landscape Design',
  description: 'Landscape design for Lake Tahoe and Incline Village properties with pavers, retaining walls, masonry, outdoor living, drainage-aware planning, and mountain-condition material guidance.',
  alternates: { canonical },
}

export default function LakeTahoePage() {
  return (
    <SeoLandingPage
      eyebrow="LANDSCAPING · LAKE TAHOE"
      title="Landscape design for Lake Tahoe and Incline Village properties."
      intro="Mountain properties need more than a city-name swap on a landscape plan. TerraNova helps homeowners think through grade, drainage, seasonal conditions, hardscape, walls, material choices, and outdoor use before construction starts."
      whatToExpectTitle="Plan for the property, the seasons, and the finished outdoor experience."
      whatToExpectCopy="Snow, freeze-thaw cycles, drainage, elevation changes, access, and maintenance can influence how a mountain landscape should be planned. The exact solution depends on the property, so TerraNova starts by understanding the site and project goals."
      city="Lake Tahoe & Incline Village"
      localBody="TerraNova includes Lake Tahoe and Incline Village in its stated service coverage. Because mountain projects can vary significantly by location, access, scope, and scheduling, submit the free quote form to confirm service for the exact property."
      bullets={[
        'Custom landscape and backyard planning',
        'Patios, pavers, retaining walls, and masonry',
        'Outdoor living and gathering areas',
        'Material planning around seasonal conditions, drainage, and maintenance',
      ]}
      detailSections={[
        {
          eyebrow: 'MOUNTAIN CONDITIONS',
          title: 'The site conditions should influence the design before materials are selected.',
          items: [
            { title: 'Snow & freeze-thaw', text: 'Seasonal temperature changes can influence material selection, joints, drainage planning, and maintenance expectations.' },
            { title: 'Grade & retaining needs', text: 'Changes in elevation may affect where patios, paths, walls, steps, and planting areas make sense.' },
            { title: 'Drainage', text: 'The layout should consider how water and snowmelt move through the property before final surfaces are installed.' },
            { title: 'Access & construction sequence', text: 'Property access and the order of excavation, walls, hardscape, irrigation, and finish work can affect the project plan.' },
          ],
        },
        {
          eyebrow: 'TAHOE OUTDOOR LIVING',
          title: 'Create usable spaces without losing the mountain character of the property.',
          items: [
            { title: 'Stone & paver patios', text: 'Build gathering areas that connect naturally with paths, grade transitions, and the rest of the landscape.' },
            { title: 'Retaining walls', text: 'Use walls where the design needs structure, usable levels, or stronger definition between landscape zones.' },
            { title: 'Natural accents', text: 'Stone, boulders, planting, and lower-maintenance ground covers can help the landscape feel connected to its setting.' },
            { title: 'Complete planning', text: 'Coordinate hardscape, irrigation, masonry, planting, and other supporting work as one project where appropriate.' },
          ],
        },
        {
          eyebrow: 'PROJECT SCOPE',
          title: 'What can change the cost of a Lake Tahoe landscape project?',
          intro: 'We are not publishing made-up price ranges. The actual quote depends on the specific property and design. These are the kinds of conditions that can change the scope.',
          items: [
            { title: 'Access', text: 'Equipment and material access can affect preparation, handling, and construction logistics.' },
            { title: 'Slope & excavation', text: 'Grade changes, excavation, walls, steps, and site preparation can add complexity.' },
            { title: 'Material selection', text: 'Pavers, natural stone, masonry, wall systems, and other finishes can vary significantly in material and installation requirements.' },
            { title: 'Seasonal conditions', text: 'Scheduling and construction planning may need to account for the conditions at the specific property.' },
          ],
        },
      ]}
      materialsIntro="These are material categories that may fit mountain landscape projects. The photo links are intentionally left open until TerraNova confirms the exact suppliers, products, or real sample photos it wants customers to use as references."
      materials={[
        { name: 'Pavers', description: 'For patios, walkways, transitions, and outdoor gathering spaces.' },
        { name: 'Natural Stone / Flagstone', description: 'For a natural mountain look in patios, paths, steps, and landscape accents.' },
        { name: 'Retaining Wall Block', description: 'For grade transitions, usable levels, and defined landscape areas.' },
        { name: 'Decorative Gravel / Rock', description: 'For selected lower-maintenance ground-cover zones and landscape transitions.' },
        { name: 'Boulders / Accent Stone', description: 'For natural visual structure and selected landscape accents.' },
        { name: 'Planting', description: 'Plant choices should be confirmed around the exact site, exposure, seasonal conditions, and maintenance goals.' },
      ]}
      process={{
        title: 'Start with the mountain property before finalizing the finish materials.',
        steps: [
          { title: 'Review the site', text: 'Understand the project goals, property access, grade, existing conditions, and intended outdoor use.' },
          { title: 'Plan the layout', text: 'Organize patios, paths, walls, landscape zones, and circulation around the site.' },
          { title: 'Choose materials', text: 'Compare pavers, stone, wall systems, rock, planting, and other finishes for the project.' },
          { title: 'Confirm the scope', text: 'Define preparation, drainage-related work, hardscape, masonry, irrigation, and finish work included.' },
          { title: 'Build in sequence', text: 'Complete the project in an order that protects the site work and finished materials.' },
        ],
      }}
      faqs={[
        { question: 'Does TerraNova take projects in Lake Tahoe and Incline Village?', answer: 'Those areas are included in TerraNova’s stated service coverage. Because travel, access, scope, and scheduling vary by property, submit the quote form to confirm availability for the exact location.' },
        { question: 'Why does freeze-thaw matter for landscape materials?', answer: 'Repeated freezing and thawing can influence how surfaces, joints, drainage, and materials perform. The specific construction approach should be based on the selected material and site conditions.' },
        { question: 'Can a Tahoe project include retaining walls and patios together?', answer: 'Yes, those features can be planned together when they fit the property and scope. Coordinating them early can help the layout respond better to grade and circulation.' },
        { question: 'Do I need to choose stone or pavers before contacting TerraNova?', answer: 'No. You can begin with the look and use you want. TerraNova can help narrow material categories, while exact products and availability are confirmed later.' },
      ]}
      related={[
        { href: '/backyard-design', label: 'Backyard Design' },
        { href: '/paver-patio-reno', label: 'Paver Patios' },
        { href: '/xeriscaping-reno', label: 'Xeriscaping' },
      ]}
      schema={{
        canonical,
        serviceName: 'Landscape Design and Construction in Lake Tahoe and Incline Village',
        description: 'Landscape planning for Lake Tahoe and Incline Village with pavers, retaining walls, masonry, outdoor living, drainage-aware design, and mountain-condition material guidance.',
        areaServed: ['Lake Tahoe', 'Incline Village, Nevada'],
        breadcrumbLabel: 'Landscaping Lake Tahoe',
      }}
    />
  )
}
