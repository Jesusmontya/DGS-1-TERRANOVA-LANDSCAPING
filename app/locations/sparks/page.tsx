import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Landscaping Sparks NV | TerraNova Landscaping',
  description: 'Landscaping in Sparks, NV for backyard design, pavers, xeriscaping, irrigation, and custom outdoor projects.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/locations/sparks' },
}

export default function SparksPage() {
  return <SeoLandingPage eyebrow="LANDSCAPING · SPARKS, NV" title="Landscaping in Sparks for homeowners who want a clear plan before the work starts." intro="TerraNova helps Sparks homeowners plan custom outdoor spaces with design guidance, material recommendations, and a straightforward path from idea to finished yard." city="Sparks, NV" bullets={["Custom backyard design","Pavers and hardscape features","Xeriscaping and artificial turf","Irrigation and landscape improvements"]} related={[{href:'/backyard-design',label:'Backyard Design'},{href:'/paver-patio-reno',label:'Paver Patios'},{href:'/xeriscaping-reno',label:'Xeriscaping'}]} />
}
