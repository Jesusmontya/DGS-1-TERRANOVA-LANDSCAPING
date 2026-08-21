import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Backyard Design Reno NV | Custom Landscape Design',
  description: 'Custom backyard design in Reno, NV with a simple planning process, material guidance, and a free design conversation.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/backyard-design' },
}

export default function BackyardDesignPage() {
  return <SeoLandingPage eyebrow="BACKYARD DESIGN · RENO, NV" title="Backyard design in Reno, built around your space from the start." intro="Not sure how to design your backyard or which materials make sense for Northern Nevada? TerraNova helps you plan the layout, materials, and priorities before the work begins." bullets={["Free design conversation to understand your goals","Custom layout planning for your property","Material guidance for heat, snow, water use, and maintenance","Clear next steps before construction begins"]} related={[{href:'/paver-patio-reno',label:'Paver Patios'},{href:'/xeriscaping-reno',label:'Xeriscaping'},{href:'/locations/sparks',label:'Landscaping in Sparks'}]} />
}
