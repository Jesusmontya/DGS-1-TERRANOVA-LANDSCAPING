import type { Metadata } from 'next'
import Image from 'next/image'
import SeoLandingPage from '@/components/SeoLandingPage'
import styles from './page.module.css'

const canonical = 'https://terranovalandscapingnv.com/landscaping-reno-nv'

export const metadata: Metadata = {
  title: 'Landscaping Reno NV | TerraNova Landscaping',
  description: 'Custom landscaping in Reno, NV for backyards, pavers, concrete, hardscaping, walls and design. Plan your outdoor project with a free estimate.',
  alternates: { canonical },
}

const photos = [
  { src: '/images/imgs/IMG_0272.PNG', alt: 'Completed TerraNova landscaping project with finished outdoor hardscape' },
  { src: '/images/imgs/IMG_0273.PNG', alt: 'TerraNova backyard landscaping project with completed outdoor features' },
  { src: '/images/imgs/IMG_0274.PNG', alt: 'Completed custom landscape project by TerraNova Landscaping' },
]

export default function LandscapingRenoPage() {
  return (
    <>
      <SeoLandingPage
        eyebrow="LANDSCAPING · RENO, NV"
        title="Landscaping in Reno, NV designed and built around your property."
        intro="TerraNova Landscaping helps Reno homeowners turn unfinished, outdated, or underused yards into complete outdoor spaces. We can help plan the layout, choose materials, visualize the project, and build the landscaping and hardscape as one connected project."
        whatToExpectTitle="You do not need to figure out the whole yard before you call."
        whatToExpectCopy="Start with the property, the problems you want to solve, and the way you want to use the space. TerraNova can help organize the design, materials, construction priorities, and next steps before work begins."
        bullets={[
          'Backed by 15 years of landscaping experience',
          'Residential landscaping with commercial work available by scope',
          '2D and 3D landscape design options when appropriate',
          'Free consultation and project estimate',
        ]}
        detailSections={[
          {
            eyebrow: 'COMPLETE LANDSCAPING SERVICES',
            title: 'Design, hardscape, and construction for complete outdoor projects.',
            intro: 'TerraNova can coordinate the major pieces of a yard transformation so the space feels planned as one project instead of a collection of unrelated improvements.',
            items: [
              { title: 'Pavers', text: 'Plan patios, walkways, gathering areas, borders, and other paver installations around the way the yard will be used.' },
              { title: 'Concrete', text: 'Incorporate concrete patios, walkways, pads, and other outdoor surfaces into the overall landscape plan.' },
              { title: 'Hardscaping', text: 'Use structural outdoor elements to define circulation, gathering spaces, transitions, and the finished layout.' },
              { title: 'Retaining Walls', text: 'Add functional or visual wall systems where the property and project scope call for grade transitions or defined areas.' },
              { title: 'Fencing', text: 'Coordinate fencing with the rest of the landscape transformation when it is part of the project.' },
              { title: 'Masonry', text: 'Add masonry details and outdoor construction elements that support the overall design.' },
              { title: '2D Landscape Design', text: 'Organize the yard layout and major features before construction so the project direction is easier to understand.' },
              { title: '3D Landscape Design', text: 'When appropriate, use 3D design to help visualize how the finished backyard can come together.' },
            ],
          },
          {
            eyebrow: 'DESIGN + BUILD',
            title: 'Know you want a better backyard but not sure what to build?',
            intro: 'That is a normal starting point. TerraNova can help work through the decisions that turn an unfinished yard into a buildable plan.',
            items: [
              { title: 'Plan the layout', text: 'Decide how patios, paths, open areas, walls, fencing, and landscape zones should work together.' },
              { title: 'Compare materials', text: 'Discuss pavers, concrete, stone, wall materials, and other finishes based on the look and practical needs of the property.' },
              { title: 'Visualize the project', text: 'Use planning and 2D or 3D design when appropriate to make the direction easier to understand before construction.' },
              { title: 'Build from zero', text: 'For the right scope, TerraNova can help take a dirt or unfinished backyard from initial planning through landscape construction.' },
            ],
          },
          {
            eyebrow: 'LANDSCAPING FOR RENO PROPERTIES',
            title: 'Outdoor spaces in Northern Nevada need practical material and layout decisions.',
            intro: 'Reno properties deal with a dry climate, strong seasonal temperature changes, and outdoor spaces that need to hold up while still looking intentional.',
            items: [
              { title: 'Water-conscious choices', text: 'The layout can combine usable hardscape and landscape areas with lower-water decisions where they make sense for the property.' },
              { title: 'Durable materials', text: 'Material selection should consider appearance, maintenance expectations, exposure, and the way the outdoor space will be used.' },
              { title: 'Outdoor living', text: 'Patios, walkways, walls, and gathering areas can be planned around how homeowners actually use the yard.' },
              { title: 'Property-specific planning', text: 'Access, grade, existing conditions, layout, and project priorities all influence the right design and construction approach.' },
            ],
          },
          {
            eyebrow: 'WHY TERRANOVA',
            title: 'A clearer way to move from idea to finished landscape.',
            items: [
              { title: '15 years of experience', text: 'TerraNova is backed by approximately 15 years of landscaping experience across design, hardscape, and construction work.' },
              { title: 'Personalized planning', text: 'The process starts with your property and goals instead of forcing every project into the same layout.' },
              { title: 'Material guidance', text: 'Get help understanding options and what makes sense before exact products and finishes are finalized.' },
              { title: 'One connected project', text: 'Design and construction can be planned together so the finished yard feels intentional from one area to the next.' },
            ],
          },
        ]}
        process={{
          title: 'From first conversation to completed outdoor space.',
          intro: 'The exact scope varies by property, but the planning process stays clear.',
          steps: [
            { title: 'Consultation', text: 'Talk through the property, what is not working, your goals, and the outdoor space you want to create.' },
            { title: 'Landscape planning', text: 'Discuss the layout, features, materials, and realistic direction for the project.' },
            { title: 'Design', text: 'Use planning and, when appropriate, 2D or 3D design to help visualize the finished space.' },
            { title: 'Construction', text: 'Build the agreed landscaping, hardscape, concrete, walls, fencing, masonry, and other included elements.' },
            { title: 'Final walkthrough', text: 'Review the completed work and the finished project with the customer.' },
          ],
        }}
        city="Reno, NV"
        localBody="TerraNova serves Reno along with Sparks, Verdi, Washoe County, the Lake Tahoe area, and surrounding communities within roughly 1.5 hours of Reno. Exact availability depends on the property, scope, and scheduling."
        faqs={[
          { question: 'How much does landscaping cost in Reno?', answer: 'The cost depends on the yard size, site preparation, access, materials, design, and the amount of construction involved. TerraNova can review the property and project goals before providing an estimate.' },
          { question: 'Can TerraNova design my backyard?', answer: 'Yes. TerraNova can help plan a backyard from the beginning and offers 2D and 3D landscape design options when they fit the project.' },
          { question: 'Do you install pavers?', answer: 'Yes. Pavers are part of TerraNova’s hardscape and landscaping services and can be used for patios, walkways, gathering areas, and other outdoor features.' },
          { question: 'Can you build an entire backyard from scratch?', answer: 'Yes, when the project scope is a fit. TerraNova can help with planning, design, material decisions, and construction for unfinished or dirt backyards.' },
          { question: 'Do you provide free landscaping estimates?', answer: 'Yes. TerraNova offers a free consultation and estimate so you can discuss the property, project direction, and next steps.' },
          { question: 'What areas do you serve?', answer: 'TerraNova primarily serves Reno and also works in Sparks, Verdi, Washoe County, the Lake Tahoe area, and nearby communities depending on the project.' },
        ]}
        related={[
          { href: '/backyard-design', label: 'Backyard Design' },
          { href: '/paver-patio-reno', label: 'Paver Patios & Hardscape' },
          { href: '/xeriscaping-reno', label: 'Xeriscaping' },
          { href: '/locations/sparks', label: 'Landscaping in Sparks' },
          { href: '/locations/verdi', label: 'Landscaping in Verdi' },
          { href: '/locations/lake-tahoe', label: 'Landscaping in Lake Tahoe' },
        ]}
        schema={{
          canonical,
          serviceName: 'Landscaping Services in Reno, NV',
          description: 'Custom landscaping, landscape design, hardscaping, pavers, concrete, retaining walls, fencing, masonry, and backyard transformations in Reno, Nevada.',
          areaServed: ['Reno, Nevada', 'Sparks, Nevada', 'Washoe County, Nevada', 'Verdi, Nevada', 'Lake Tahoe'],
          breadcrumbLabel: 'Landscaping Reno NV',
        }}
      />

      <section className={styles.projects} aria-labelledby="reno-projects-heading">
        <div className={styles.heading}>
          <p>REAL TERRANOVA WORK</p>
          <h2 id="reno-projects-heading">Landscaping projects from the TerraNova portfolio.</h2>
          <span>Real project photography is used here rather than stock or AI-generated work. As the portfolio grows, additional Reno-area projects can be added with verified locations and project details.</span>
        </div>
        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <figure key={photo.src}>
              <Image src={photo.src} alt={photo.alt} width={1200} height={900} sizes="(max-width: 760px) 100vw, 33vw" />
              <figcaption>TerraNova project {String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
