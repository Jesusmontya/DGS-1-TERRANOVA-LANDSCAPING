import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Landscaping Lake Tahoe & Incline Village | TerraNova',
  description: 'Landscaping for Lake Tahoe and Incline Village properties, including custom backyard design, hardscape, and outdoor living projects.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/locations/lake-tahoe' },
}

export default function LakeTahoePage() {
  return <SeoLandingPage eyebrow="LANDSCAPING · LAKE TAHOE" title="Landscape design for Lake Tahoe and Incline Village properties." intro="TerraNova helps homeowners plan custom outdoor spaces with practical material guidance and a design process built around the property, climate, and project goals." city="Lake Tahoe & Incline Village" bullets={["Custom landscape and backyard planning","Patios, pavers, and retaining walls","Outdoor living features","Material planning for mountain conditions and maintenance"]} related={[{href:'/backyard-design',label:'Backyard Design'},{href:'/paver-patio-reno',label:'Paver Patios'},{href:'/xeriscaping-reno',label:'Xeriscaping'}]} />
}
