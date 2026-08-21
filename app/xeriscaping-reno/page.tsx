import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

const canonical = 'https://terranovalandscapingnv.com/xeriscaping-reno'

export const metadata: Metadata = {
  title: 'Xeriscaping Reno NV | Artificial Turf & Low-Water Landscaping',
  description: 'Xeriscaping in Reno, NV with artificial turf, decorative rock, planting, irrigation planning, pavers, and low-water landscape design.',
  alternates: { canonical },
}

export default function XeriscapingRenoPage() {
  return (
    <SeoLandingPage
      eyebrow="XERISCAPING · RENO, NV"
      title="Low-water landscaping that still feels finished and intentional."
      intro="Xeriscaping does not have to mean covering the entire yard with one type of rock. TerraNova can help combine turf, planting, decorative stone, pavers, irrigation, and usable outdoor areas into a lower-water landscape plan."
      whatToExpectTitle="Design around water use, maintenance, and how you actually use the yard."
      whatToExpectCopy="The goal is to put each material where it makes sense. Green space can stay where it is useful, rock and planting can reduce maintenance in other zones, and hardscape can create practical areas for walking and gathering."
      bullets={[
        'Low-water landscape planning',
        'Artificial turf and decorative rock combinations',
        'Planting and irrigation planning for the property',
        'Pavers and outdoor living zones integrated into the xeriscape',
      ]}
      detailSections={[
        {
          eyebrow: 'LOW-WATER DESIGN',
          title: 'A xeriscape can still have contrast, green space, and usable areas.',
          items: [
            { title: 'Use turf where it matters', text: 'Artificial turf can create a green, usable zone without making it the only surface in the yard.' },
            { title: 'Use rock with purpose', text: 'Decorative gravel and stone can define lower-maintenance zones, planting beds, and transitions instead of becoming one flat field.' },
            { title: 'Keep planting intentional', text: 'Plant selection and placement can add shade, texture, and seasonal interest while respecting the maintenance goals of the project.' },
            { title: 'Connect it with hardscape', text: 'Pavers, concrete, paths, and gathering areas give the landscape structure and make the outdoor space easier to use.' },
          ],
        },
        {
          eyebrow: 'PROJECT PLANNING',
          title: 'What should be considered before replacing a traditional yard?',
          items: [
            { title: 'Existing irrigation', text: 'The irrigation plan may need to change when lawn areas become turf, rock, planting zones, or hardscape.' },
            { title: 'Drainage & grade', text: 'Existing slopes and water movement should be considered before final surfaces and planting areas are installed.' },
            { title: 'Sun & exposure', text: 'Different areas of the property can have different planting, surface-temperature, and maintenance needs.' },
            { title: 'Long-term maintenance', text: 'Material choices should reflect how much watering, cleanup, plant care, and surface maintenance you want over time.' },
          ],
        },
      ]}
      materialsIntro="The exact turf, rock, paver, and plant selections should come from products TerraNova can actually source. Material photo links are left open until the preferred supplier examples or real samples are confirmed."
      materials={[
        { name: 'Artificial Turf', description: 'A lower-water lawn-style surface for selected green and usable areas.' },
        { name: 'Decorative Gravel', description: 'Ground cover that can define planting zones, transitions, and lower-maintenance areas.' },
        { name: 'River Rock', description: 'Rounded stone that can be used for accent areas and selected drainage-style features.' },
        { name: 'Drought-Conscious Planting', description: 'Plant selections planned around exposure, water use, maintenance, and the specific property.' },
        { name: 'Pavers', description: 'Useful for patios and paths inside a low-water landscape design.' },
        { name: 'Boulders / Accent Stone', description: 'Larger natural-stone accents that can add structure and contrast to the landscape.' },
      ]}
      process={{
        title: 'Turn a water-heavy or unfinished yard into a clearer landscape plan.',
        steps: [
          { title: 'Choose priorities', text: 'Decide where you want green space, planting, hardscape, and lower-maintenance zones.' },
          { title: 'Plan the surfaces', text: 'Lay out turf, rock, pavers, concrete, and planting areas so they connect visually and functionally.' },
          { title: 'Plan irrigation', text: 'Adjust irrigation needs to the new mix of planting and non-planted areas.' },
          { title: 'Choose materials', text: 'Confirm the rock, turf, paver, and planting direction for the project.' },
          { title: 'Install & finish', text: 'Prepare the property and complete the landscape in the correct construction sequence.' },
        ],
      }}
      comparison={{
        eyebrow: 'TURF VS ROCK & PLANTING',
        title: 'Most yards do not need to choose only one approach.',
        intro: 'A mixed layout often gives each part of the yard a clearer purpose. The right balance depends on how you use the property and what level of maintenance you want.',
        left: {
          title: 'Artificial Turf',
          items: ['Provides a consistently green appearance', 'Creates a usable lawn-style area', 'Avoids routine lawn watering and mowing', 'Still requires appropriate base, drainage, and periodic maintenance'],
        },
        right: {
          title: 'Rock & Planting',
          items: ['Creates lower-water landscape zones', 'Allows different textures, stone sizes, and plant groupings', 'Can reduce the amount of green surface that needs upkeep', 'Still benefits from thoughtful weed control, irrigation planning, and cleanup'],
        },
      }}
      faqs={[
        { question: 'Does xeriscaping mean removing every plant or green area?', answer: 'No. A xeriscape can combine artificial turf, planting, rock, hardscape, and other features. The mix should be based on the property and how you want to use it.' },
        { question: 'Can TerraNova update irrigation as part of a xeriscape project?', answer: 'Irrigation is one of the services TerraNova can include in landscape projects. The exact work required is confirmed after reviewing the existing property and design.' },
        { question: 'Can pavers or concrete be part of xeriscaping?', answer: 'Yes. Hardscape can create patios, paths, and usable zones while helping organize the lower-water parts of the landscape.' },
        { question: 'How do I know whether turf or rock is better for my yard?', answer: 'Start with how you want to use each area. Turf can make sense for a green usable zone, while rock and planting may fit areas where lower water use and lower routine maintenance are bigger priorities.' },
      ]}
      related={[
        { href: '/backyard-design', label: 'Backyard Design' },
        { href: '/paver-patio-reno', label: 'Paver Patios' },
        { href: '/locations/lake-tahoe', label: 'Lake Tahoe' },
      ]}
      schema={{
        canonical,
        serviceName: 'Xeriscaping and Artificial Turf in Reno, NV',
        description: 'Low-water landscaping in Reno with artificial turf, decorative rock, planting, irrigation planning, pavers, and outdoor living areas.',
        areaServed: ['Reno, Nevada', 'Washoe County, Nevada'],
        breadcrumbLabel: 'Xeriscaping Reno',
      }}
    />
  )
}
