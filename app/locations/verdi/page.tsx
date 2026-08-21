import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const metadata: Metadata = {
  title: 'Landscaping Verdi NV | TerraNova Landscaping',
  description: 'Landscaping in Verdi, NV for backyard design, hardscape, xeriscaping, irrigation, and custom outdoor projects.',
  alternates: { canonical: 'https://terranovalandscapingnv.com/locations/verdi' },
}

export default function VerdiPage() {
  return <SeoLandingPage eyebrow="LANDSCAPING · VERDI, NV" title="Custom landscaping in Verdi with a plan that fits your property." intro="TerraNova helps Verdi homeowners turn unfinished or outdated yards into functional outdoor spaces with clear design guidance and practical material choices." city="Verdi, NV" bullets={["Backyard design and layout planning","Pavers, patios, and retaining walls","Xeriscaping and low-maintenance options","Irrigation and complete landscape upgrades"]} related={[{href:'/backyard-design',label:'Backyard Design'},{href:'/paver-patio-reno',label:'Paver Patios'},{href:'/locations/sparks',label:'Sparks'}]} />
}
