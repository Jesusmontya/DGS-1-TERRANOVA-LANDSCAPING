import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Xeriscaping Reno NV | Artificial Turf & Low-Water Landscaping',
  description: 'Xeriscaping in Reno, NV with low-water landscaping, artificial turf, rock, planting, and outdoor living design for Northern Nevada homes.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/xeriscaping-reno' },
}

export default function XeriscapingRenoPage() {
  return <SeoLandingPage eyebrow="XERISCAPING · RENO, NV" title="Low-water landscaping that still feels finished and intentional." intro="TerraNova helps Reno homeowners combine xeriscaping, artificial turf, planting, hardscape, and outdoor living features into a yard that fits the climate and the way you want to use the space." bullets={["Low-water landscape planning","Artificial turf and rock combinations","Planting choices suited to Northern Nevada conditions","Outdoor living layouts that balance looks and maintenance"]} related={[{href:'/backyard-design',label:'Backyard Design'},{href:'/paver-patio-reno',label:'Paver Patios'},{href:'/locations/lake-tahoe',label:'Lake Tahoe'}]} />
}
