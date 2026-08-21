import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Paver Patio Reno NV | Patios, Fire Pits & Retaining Walls',
  description: 'Paver patio installation in Reno, NV with options for fire pits, retaining walls, walkways, and custom outdoor living spaces.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/paver-patio-reno' },
}

export default function PaverPatioRenoPage() {
  return <SeoLandingPage eyebrow="PAVER PATIOS · RENO, NV" title="Paver patios and hardscape features designed for Reno homes." intro="Plan a patio, walkway, fire pit, or retaining wall with a layout that fits your yard and a material plan you can understand before construction starts." bullets={["Paver patios and walkways","Fire pit and outdoor gathering areas","Retaining walls and masonry features","Material guidance based on style, budget, and maintenance"]} related={[{href:'/backyard-design',label:'Backyard Design'},{href:'/xeriscaping-reno',label:'Xeriscaping'},{href:'/locations/verdi',label:'Landscaping in Verdi'}]} />
}
