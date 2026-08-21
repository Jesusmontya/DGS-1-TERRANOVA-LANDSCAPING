import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Backyard Design Reno NV | Custom Landscape Design',
  description: 'Custom backyard design in Reno, NV with a simple planning process, material guidance, and a free design conversation.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/backyard-design' },
}

export default function BackyardDesignPage() {
  return <SeoLandingPage eyebrow="BACKYARD DESIGN · RENO, NV" title="Backyard design in Reno, built around your space from the start." intro="Not sure how to design your backyard or which materials make sense for Northern Nevada? TerraNova helps you plan the layout, materials, and priorities before the work begins." bullets={["Free design conversation to understand your goals","Custom layout planning for your property","Material guidance for heat, snow, water use, and maintenance","Clear next steps before construction begins"]} materials={[{name:'Pavers',description:'A durable option for patios, walkways, and gathering areas.',photoUrl:'https://unsplash.com/s/photos/paver-patio'},{name:'Natural Stone / Flagstone',description:'A premium natural look for patios, paths, and accent areas.',photoUrl:'https://unsplash.com/s/photos/flagstone-patio'},{name:'Decorative Gravel / Rock',description:'Low-water ground cover commonly used in desert-style landscapes.',photoUrl:'https://unsplash.com/s/photos/gravel-landscape'},{name:'Artificial Turf',description:'A green, low-water option for usable lawn areas.',photoUrl:'https://unsplash.com/s/photos/artificial-turf'},{name:'Concrete',description:'A clean and versatile choice for walkways, pads, and modern layouts.',photoUrl:'https://unsplash.com/s/photos/concrete-patio'},{name:'Retaining Wall Block',description:'Used to create grade changes, raised areas, and defined spaces.',photoUrl:'https://unsplash.com/s/photos/retaining-wall'}]} related={[{href:'/paver-patio-reno',label:'Paver Patios'},{href:'/xeriscaping-reno',label:'Xeriscaping'},{href:'/locations/sparks',label:'Landscaping in Sparks'}]} />
}
