import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

const canonical = 'https://terranovalandscapingnv.com/locations/sparks'

export const metadata: Metadata = {
  title: 'Landscaping Sparks NV | Backyard Design & Hardscape',
  description: 'Landscaping in Sparks, NV for backyard design, pavers, xeriscaping, artificial turf, irrigation, retaining walls, and complete outdoor projects.',
  alternates: { canonical },
}

export default function SparksPage() {
  return (
    <SeoLandingPage
      eyebrow="LANDSCAPING · SPARKS, NV"
      title="Landscaping in Sparks for homeowners who want a clear plan before the work starts."
      intro="TerraNova helps Sparks homeowners organize backyard design, hardscape, low-water landscaping, irrigation, and supporting features into one project instead of making disconnected decisions one at a time."
      whatToExpectTitle="Plan the yard around use, water, maintenance, and the property itself."
      whatToExpectCopy="A Sparks landscape can combine hardscape, turf, rock, planting, irrigation, walls, concrete, and fencing. TerraNova helps define which pieces belong in the project and how they should connect before construction begins."
      city="Sparks, NV"
      localBody="TerraNova serves Sparks as part of its Northern Nevada service area. Final availability depends on the exact property, project scope, and scheduling, so the quote form is the best place to confirm the next step."
      bullets={[
        'Custom backyard and landscape design',
        'Paver patios, hardscape, retaining walls, and masonry',
        'Xeriscaping, decorative rock, and artificial turf',
        'Irrigation, concrete, fencing, and complete landscape upgrades',
      ]}
      detailSections={[
        {
          eyebrow: 'SPARKS LANDSCAPE PLANNING',
          title: 'Make each part of the yard solve a specific need.',
          items: [
            { title: 'Usable outdoor space', text: 'Plan patios, paths, and gathering areas around how people actually move through and use the property.' },
            { title: 'Water-conscious zones', text: 'Use turf, planting, decorative rock, and irrigation intentionally instead of treating the entire yard the same way.' },
            { title: 'Hardscape & grade', text: 'Pavers, concrete, walls, and masonry can define areas and respond to changes in the property layout.' },
            { title: 'Maintenance goals', text: 'Choose materials and planting based on how much routine upkeep you want after the project is complete.' },
          ],
        },
        {
          eyebrow: 'COMPLETE PROJECTS',
          title: 'You can plan more than one service at the same time.',
          items: [
            { title: 'Backyard design', text: 'Start with the layout before deciding every finish.' },
            { title: 'Pavers & concrete', text: 'Create patios, paths, and durable hardscape zones.' },
            { title: 'Turf & xeriscaping', text: 'Balance green usable space with lower-water areas.' },
            { title: 'Walls, irrigation & fencing', text: 'Coordinate supporting work with the rest of the landscape instead of adding it later.' },
          ],
        },
      ]}
      materialsIntro="Material photos are intentionally left open until TerraNova confirms the actual supplier products or sample images it wants Sparks customers to compare."
      materials={[
        { name: 'Pavers', description: 'For patios, walkways, and hardscape gathering areas.' },
        { name: 'Artificial Turf', description: 'For selected green, usable spaces with lower routine water use.' },
        { name: 'Decorative Rock', description: 'For lower-water landscape zones, transitions, and planting areas.' },
        { name: 'Concrete', description: 'For pads, walkways, patios, and other continuous hardscape surfaces.' },
        { name: 'Retaining Wall Block', description: 'For grade transitions and defined landscape areas.' },
        { name: 'Masonry / Accent Stone', description: 'For selected walls, accents, and hardscape details.' },
      ]}
      process={{
        title: 'A clear path from idea to finished yard.',
        steps: [
          { title: 'Share the property', text: 'Tell TerraNova what you want to change and what is not working now.' },
          { title: 'Plan the layout', text: 'Organize the main outdoor zones and how they connect.' },
          { title: 'Choose materials', text: 'Compare hardscape, turf, rock, planting, and supporting materials.' },
          { title: 'Confirm the scope', text: 'Define what is included before construction starts.' },
          { title: 'Build the project', text: 'Complete the work in the right order through final landscape details.' },
        ],
      }}
      faqs={[
        { question: 'Does TerraNova work in Sparks, Nevada?', answer: 'Sparks is part of TerraNova’s stated service area. Project availability still depends on the property, scope, and schedule, so submit the quote form to confirm.' },
        { question: 'Can I start if I do not know how to design my backyard?', answer: 'Yes. TerraNova’s process is built to help homeowners work through the layout and material choices instead of requiring a finished design first.' },
        { question: 'Can a Sparks project include pavers, turf, irrigation, concrete, and fencing?', answer: 'Those services can be planned together when they fit the scope. The exact combination is confirmed during the quote and planning process.' },
        { question: 'Do you provide material guidance?', answer: 'Yes. TerraNova can help narrow material categories and discuss practical considerations. Exact products and availability are confirmed for the individual project.' },
      ]}
      related={[
        { href: '/backyard-design', label: 'Backyard Design' },
        { href: '/paver-patio-reno', label: 'Paver Patios' },
        { href: '/xeriscaping-reno', label: 'Xeriscaping' },
      ]}
      schema={{
        canonical,
        serviceName: 'Landscaping Services in Sparks, NV',
        description: 'Backyard design and landscape construction in Sparks, Nevada, including pavers, xeriscaping, turf, irrigation, retaining walls, concrete, and fencing.',
        areaServed: ['Sparks, Nevada', 'Washoe County, Nevada'],
        breadcrumbLabel: 'Landscaping Sparks NV',
      }}
    />
  )
}
