import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

const canonical = 'https://terranovalandscapingnv.com/paver-patio-reno'

export const metadata: Metadata = {
  title: 'Paver Patio Reno NV | Patios, Walkways & Retaining Walls',
  description: 'Paver patio and hardscape planning in Reno, NV for patios, walkways, retaining walls, masonry, and outdoor gathering areas.',
  alternates: { canonical },
}

export default function PaverPatioRenoPage() {
  return (
    <SeoLandingPage
      eyebrow="PAVER PATIOS · RENO, NV"
      title="Paver patios and hardscape features designed for Reno homes."
      intro="A good patio is more than the paver itself. TerraNova helps plan the size, layout, material, surrounding landscape, and supporting work so the finished hardscape belongs in the yard."
      whatToExpectTitle="Plan the patio around the property—not just a square-foot number."
      whatToExpectCopy="Before construction, it helps to understand where the patio should sit, how people will move through the yard, what material fits the look, and whether grading, walls, irrigation, or other landscape work is part of the same project."
      bullets={[
        'Paver patios and walkways',
        'Retaining walls and masonry features',
        'Hardscape gathering areas and connected landscape zones',
        'Material guidance based on style, maintenance, and project scope',
      ]}
      detailSections={[
        {
          eyebrow: 'PAVER PROJECTS',
          title: 'Hardscape can solve more than one part of the yard.',
          items: [
            { title: 'Patios', text: 'Create a defined outdoor area sized around furniture, circulation, and the way you want to use the space.' },
            { title: 'Walkways', text: 'Connect doors, gates, patios, side yards, and landscape zones with a deliberate path.' },
            { title: 'Gathering areas', text: 'Use hardscape to organize seating or a fire-pit-style gathering zone as part of the overall backyard layout.' },
            { title: 'Retaining walls', text: 'Use wall systems where the project needs grade transitions, raised areas, or stronger visual definition.' },
          ],
        },
        {
          eyebrow: 'PAVER PATIO COST',
          title: 'What changes the price of a paver patio in Reno?',
          intro: 'An exact quote depends on the property and material selection. These are the project factors that typically change the amount of labor, preparation, and material required.',
          items: [
            { title: 'Patio size & layout', text: 'Square footage, curves, borders, steps, and connected walkways all affect material quantities and installation time.' },
            { title: 'Demolition & access', text: 'Removing an existing surface or working through limited access can add preparation and handling.' },
            { title: 'Base & grading', text: 'The site needs appropriate preparation for the selected hardscape and existing property conditions.' },
            { title: 'Paver or stone choice', text: 'Product size, finish, pattern, border details, and natural-stone options can change the overall scope.' },
          ],
        },
      ]}
      materialsIntro="The exact paver, stone, block, and concrete products should match what TerraNova can actually source. Photo links are intentionally left open until the preferred suppliers or real material samples are confirmed."
      materials={[
        { name: 'Concrete Pavers', description: 'Modular patio and walkway units available in different formats, finishes, and patterns.' },
        { name: 'Natural Stone / Flagstone', description: 'Natural stone for a more organic look in patios, paths, steps, and accents.' },
        { name: 'Retaining Wall Block', description: 'Segmental wall materials used for grade transitions and defined landscape areas.' },
        { name: 'Masonry / Accent Stone', description: 'Stone or masonry finishes that can tie walls and hardscape features into the overall design.' },
        { name: 'Concrete', description: 'A continuous hardscape option for patios, walkways, and pads with different finish possibilities.' },
        { name: 'Decorative Gravel', description: 'Can complement pavers and hardscape in lower-water landscape areas.' },
      ]}
      process={{
        title: 'A paver project should be planned before the first unit is installed.',
        steps: [
          { title: 'Measure the use', text: 'Define the patio, walkway, wall, and circulation needs for the property.' },
          { title: 'Choose the layout', text: 'Set the shape, transitions, borders, and relationship to the rest of the yard.' },
          { title: 'Choose the material', text: 'Compare paver, stone, wall, and concrete options that fit the project.' },
          { title: 'Prepare the site', text: 'Address demolition, excavation, grading, and base preparation required for the scope.' },
          { title: 'Install & finish', text: 'Complete the hardscape and connect it cleanly with the surrounding landscape.' },
        ],
      }}
      comparison={{
        eyebrow: 'PAVERS VS CONCRETE',
        title: 'Two different hardscape looks with different tradeoffs.',
        intro: 'The right choice depends on the property, design, maintenance expectations, and budget. TerraNova can discuss which option makes more sense for the project.',
        left: {
          title: 'Pavers',
          items: ['Modular pieces with many pattern and border options', 'Individual sections can be accessed or replaced more locally when needed', 'Joints and edge details become part of the finished look', 'Material selection can range from simple to more decorative'],
        },
        right: {
          title: 'Concrete',
          items: ['Creates a more continuous surface', 'Can work well with clean, simple layouts', 'Finish and joint planning affect the appearance', 'Repairs and movement can look different than a modular paver system'],
        },
      }}
      faqs={[
        { question: 'Can TerraNova combine a paver patio with retaining walls or other landscape work?', answer: 'Yes, those elements can be planned as one project when they fit the property and scope. The quote process confirms exactly what is included.' },
        { question: 'Do I need to pick the exact paver before requesting a quote?', answer: 'No. You can begin with the look you want. Material options can be narrowed down during planning and finalized based on availability and project requirements.' },
        { question: 'Are pavers always better than concrete?', answer: 'No. Each has different design, maintenance, installation, and cost considerations. The better choice depends on what you want the space to do and how you want it to look.' },
        { question: 'How do I get a paver patio price?', answer: 'Submit the free quote form with the approximate project area and what you want built. TerraNova can then determine the next step needed to price the actual property and scope.' },
      ]}
      related={[
        { href: '/backyard-design', label: 'Backyard Design' },
        { href: '/xeriscaping-reno', label: 'Xeriscaping' },
        { href: '/locations/verdi', label: 'Landscaping in Verdi' },
      ]}
      schema={{
        canonical,
        serviceName: 'Paver Patio and Hardscape Services in Reno, NV',
        description: 'Paver patio and hardscape planning for Reno homes, including patios, walkways, retaining walls, masonry, and material guidance.',
        areaServed: ['Reno, Nevada', 'Washoe County, Nevada'],
        breadcrumbLabel: 'Paver Patio Reno',
      }}
    />
  )
}
