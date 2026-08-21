import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Landscaping Lake Tahoe & Incline Village | TerraNova',
  description: 'Landscaping for Lake Tahoe and Incline Village properties, including custom backyard design, hardscape, outdoor living, and material guidance for mountain conditions.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/locations/lake-tahoe' },
}

export default function LakeTahoePage() {
  return <SeoLandingPage
    eyebrow="LANDSCAPING · LAKE TAHOE"
    title="Landscape design for Lake Tahoe and Incline Village properties."
    intro="TerraNova helps homeowners plan outdoor spaces around mountain conditions, maintenance, materials, and the way the property will actually be used. You can start without a finished design—we help you work through the layout and material choices."
    city="Lake Tahoe & Incline Village"
    bullets={[
      'Custom landscape and backyard planning',
      'Patios, pavers, retaining walls, and masonry',
      'Outdoor living and gathering areas',
      'Material planning for snow, freeze-thaw conditions, drainage, and maintenance',
    ]}
    materials={[
      {name:'Pavers',description:'A clean option for patios, walkways, and gathering spaces with many styles and patterns available.',photoUrl:'https://unsplash.com/s/photos/paver-patio'},
      {name:'Natural Stone / Flagstone',description:'Natural stone can create a premium mountain look for patios, paths, steps, and landscape accents.',photoUrl:'https://unsplash.com/s/photos/flagstone-patio'},
      {name:'Retaining Wall Block',description:'Used to manage grade changes, create usable levels, and define planting or outdoor living areas.',photoUrl:'https://unsplash.com/s/photos/retaining-wall-landscape'},
      {name:'Decorative Gravel / Rock',description:'A lower-maintenance ground cover that can support drainage and complement stone-heavy mountain landscapes.',photoUrl:'https://unsplash.com/s/photos/gravel-landscape'},
      {name:'Boulders / Accent Stone',description:'Large natural stone adds structure and works well with Tahoe-style landscape designs.',photoUrl:'https://unsplash.com/s/photos/boulder-landscape'},
      {name:'Drought-Tolerant Planting',description:'Plant selections can be planned around sun, elevation, seasonal conditions, and maintenance goals.',photoUrl:'https://unsplash.com/s/photos/drought-tolerant-landscape'},
    ]}
    related={[
      {href:'/backyard-design',label:'Backyard Design'},
      {href:'/paver-patio-reno',label:'Paver Patios'},
      {href:'/xeriscaping-reno',label:'Xeriscaping'},
    ]}
  />
}
