import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Paver Patio Reno NV | Patios, Fire Pits & Retaining Walls',
  description: 'Paver patio installation in Reno, NV with options for fire pits, retaining walls, walkways, and custom outdoor living spaces.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/paver-patio-reno' },
}

export default function PaverPatioRenoPage() {
  return <SeoLandingPage eyebrow="PAVER PATIOS · RENO, NV" title="Paver patios and hardscape features designed for Reno homes." intro="Plan a patio, walkway, fire pit, or retaining wall with a layout that fits your yard and a material plan you can understand before construction starts." bullets={["Paver patios and walkways","Fire pit and outdoor gathering areas","Retaining walls and masonry features","Material guidance based on style, budget, and maintenance"]} materials={[{name:'Concrete Pavers',description:'Versatile patio and walkway material available in many shapes and finishes.',photoUrl:'https://unsplash.com/s/photos/concrete-pavers'},{name:'Natural Stone / Flagstone',description:'Irregular natural stone for a more organic, premium outdoor look.',photoUrl:'https://unsplash.com/s/photos/flagstone-patio'},{name:'Retaining Wall Block',description:'Segmental block used for retaining walls, raised beds, and elevation changes.',photoUrl:'https://unsplash.com/s/photos/retaining-wall'},{name:'Fire Pit Stone',description:'Stone and masonry finishes used around outdoor fire features.',photoUrl:'https://unsplash.com/s/photos/stone-fire-pit'},{name:'Concrete',description:'A simple, durable material for pads, walkways, and contemporary patios.',photoUrl:'https://unsplash.com/s/photos/concrete-patio'},{name:'Decorative Gravel',description:'Can be combined with pavers to create drainage-friendly, low-maintenance areas.',photoUrl:'https://unsplash.com/s/photos/gravel-patio'}]} related={[{href:'/backyard-design',label:'Backyard Design'},{href:'/xeriscaping-reno',label:'Xeriscaping'},{href:'/locations/verdi',label:'Landscaping in Verdi'}]} />
}
