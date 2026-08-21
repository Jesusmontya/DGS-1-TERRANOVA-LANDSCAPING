import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

const canonical = 'https://terranovalandscapingnv.com/backyard-design'

export const metadata: Metadata = {
  title: 'Backyard Design Reno NV | Custom Landscape Design',
  description: 'Custom backyard design in Reno, NV with layout planning, material guidance, project-cost factors, and a clear path from idea to landscape construction.',
  alternates: { canonical },
}

export default function BackyardDesignPage() {
  return (
    <SeoLandingPage
      eyebrow="BACKYARD DESIGN · RENO, NV"
      title="Backyard design in Reno, built around your space from the start."
      intro="You do not need to know the perfect layout or which materials to use before calling. TerraNova helps you organize the space, compare options, and turn an unfinished idea into a clear landscape plan."
      whatToExpectTitle="Start with what you want the yard to do—not a finished design."
      whatToExpectCopy="We can work from a blank yard, an outdated yard, or a collection of ideas. The goal is to make the layout, materials, priorities, and next steps understandable before construction starts."
      bullets={[
        'Free project conversation to understand your goals',
        'Custom layout planning around the way you use the yard',
        'Material guidance for water use, maintenance, heat, and seasonal conditions',
        'Clear scope and next steps before construction begins',
      ]}
      detailSections={[
        {
          eyebrow: 'DESIGN FROM ZERO',
          title: 'Not sure what belongs in your backyard? That is where the process starts.',
          intro: 'Instead of asking you to arrive with a finished plan, we break the project into decisions you can actually compare.',
          items: [
            { title: 'How you want to use the space', text: 'Start with everyday use: entertaining, open space, low maintenance, privacy, planting, or a combination.' },
            { title: 'Where each feature should go', text: 'The layout should connect patios, paths, planting, turf, hardscape, and access without making the yard feel pieced together.' },
            { title: 'Which materials fit the plan', text: 'Compare pavers, concrete, rock, turf, retaining-wall materials, and other finishes based on the look and maintenance you want.' },
            { title: 'What should be built first', text: 'Irrigation, grading, hardscape, walls, fencing, planting, and finish materials need a practical construction order.' },
          ],
        },
        {
          eyebrow: 'BACKYARD IDEAS',
          title: 'Build the yard as one system instead of separate projects.',
          items: [
            { title: 'Patios & gathering areas', text: 'Create usable outdoor space with pavers, concrete, masonry, and a layout sized around the property.' },
            { title: 'Artificial turf & xeriscaping', text: 'Use green space where it adds value and lower-water materials where they make more sense.' },
            { title: 'Retaining walls & grade changes', text: 'Define levels, manage changes in elevation, and create more intentional landscape zones.' },
            { title: 'Fencing, irrigation & planting', text: 'Plan the supporting pieces at the same time so the finished yard works as a complete project.' },
          ],
        },
        {
          eyebrow: 'PROJECT COST',
          title: 'What affects the cost of a complete backyard project?',
          intro: 'TerraNova can discuss pricing once the scope is understood. The biggest cost drivers usually come from the work required and the materials selected—not just the size of the yard.',
          items: [
            { title: 'Site preparation', text: 'Demolition, access, grading, excavation, and existing conditions can change the amount of work required.' },
            { title: 'Square footage', text: 'Larger patios, turf areas, walls, concrete, and planting zones increase labor and material quantities.' },
            { title: 'Material selection', text: 'Paver style, stone, wall block, turf, rock, concrete finish, and other choices affect the final scope.' },
            { title: 'Project complexity', text: 'Drainage, irrigation, elevation changes, fencing, masonry, and multiple connected features add construction steps.' },
          ],
        },
      ]}
      materialsIntro="These are the material categories we can discuss during design. We are leaving the photo references open until TerraNova confirms the exact products or supplier examples it wants customers to see."
      materials={[
        { name: 'Pavers', description: 'For patios, walkways, gathering areas, and defined hardscape zones.' },
        { name: 'Natural Stone / Flagstone', description: 'A natural finish for paths, accents, steps, and selected outdoor areas.' },
        { name: 'Decorative Gravel / Rock', description: 'A lower-water ground-cover option available in different sizes and tones.' },
        { name: 'Artificial Turf', description: 'A green, low-water surface for usable lawn-style areas.' },
        { name: 'Concrete', description: 'A versatile option for walkways, pads, patios, and clean modern layouts.' },
        { name: 'Retaining Wall Block', description: 'Used to define grade changes, raised areas, and structured landscape zones.' },
      ]}
      process={{
        title: 'From blank yard to a buildable plan.',
        intro: 'The exact project can vary, but the decision flow stays simple.',
        steps: [
          { title: 'Tell us your goals', text: 'Share what you like, what is not working, and how you want to use the yard.' },
          { title: 'Plan the layout', text: 'Organize the major zones and decide how they connect.' },
          { title: 'Choose materials', text: 'Compare practical options based on style, maintenance, and project needs.' },
          { title: 'Define the scope', text: 'Confirm what is included before moving into construction.' },
          { title: 'Build the yard', text: 'Complete the project in the right order from preparation through finish work.' },
        ],
      }}
      faqs={[
        { question: 'Do I need to have a backyard design before I contact TerraNova?', answer: 'No. You can start with a general goal, photos you like, or simply the problems you want to solve. TerraNova can help organize those ideas into a clearer plan.' },
        { question: 'Can one project include pavers, turf, irrigation, walls, fencing, and planting?', answer: 'Those elements can be planned together when they fit the property and project scope. The quote process is where the exact combination is confirmed.' },
        { question: 'Can you help me choose materials?', answer: 'Yes. Material guidance is part of the planning conversation. Exact products, colors, availability, and installation details are confirmed for the specific project.' },
        { question: 'How do I get an exact price?', answer: 'Start with the free quote form. Once TerraNova understands the property, desired features, materials, and site conditions, the team can discuss the appropriate next step for pricing.' },
      ]}
      related={[
        { href: '/paver-patio-reno', label: 'Paver Patios' },
        { href: '/xeriscaping-reno', label: 'Xeriscaping' },
        { href: '/locations/sparks', label: 'Landscaping in Sparks' },
      ]}
      schema={{
        canonical,
        serviceName: 'Backyard Design and Landscape Planning in Reno, NV',
        description: 'Custom backyard design and landscape planning in Reno with layout and material guidance before construction.',
        areaServed: ['Reno, Nevada', 'Washoe County, Nevada'],
        breadcrumbLabel: 'Backyard Design Reno',
      }}
    />
  )
}
