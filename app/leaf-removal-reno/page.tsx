import type { Metadata } from 'next'
import CommercialServicePage from '@/components/CommercialServicePage'

const canonical = 'https://terranovalandscapingnv.com/leaf-removal-reno'

export const metadata: Metadata = {
  title: 'Leaf Removal Reno, NV | Seasonal Yard Cleanup',
  description: 'Professional leaf removal and pine needle cleanup for Reno and Sparks homes. Request a free seasonal yard cleanup estimate from TerraNova Landscaping.',
  alternates: { canonical },
  openGraph: {
    title: 'Leaf Removal Reno, NV | Seasonal Yard Cleanup',
    description: 'Clear fallen leaves and pine needles with a free estimate from TerraNova Landscaping in Reno and Sparks.',
    url: canonical,
  },
}

export default function LeafRemovalRenoPage() {
  return <CommercialServicePage
    showSiteChrome
    canonical={canonical}
    serviceName="Leaf Removal"
    eyebrow="LEAF REMOVAL · RENO & SPARKS, NV"
    title="Keep your yard clear with seasonal leaf removal in Reno and Sparks."
    intro="TerraNova Landscaping provides leaf removal and seasonal yard cleanup for homes in Reno, Sparks, Verdi, and surrounding Northern Nevada communities."
    photoAlt="Completed TerraNova leaf removal and yard cleanup project"
    tags={['Leaf Removal', 'Pine Needle Cleanup', 'Seasonal Yard Cleanup', 'Free Estimates']}
    features={[
      { title: 'Leaf removal', text: 'Clear fallen leaves from the parts of your yard, beds, paths, and outdoor areas that need attention.' },
      { title: 'Pine needle cleanup', text: 'Address accumulated pine needles as part of a seasonal cleanup scope for your property.' },
      { title: 'One-time seasonal visits', text: 'Request a cleanup for the current season and describe the outdoor areas you want reviewed.' },
      { title: 'A cleaner starting point', text: 'Prepare the property for landscape work, outdoor living updates, or the next season.' },
    ]}
    faqs={[
      { question: 'Do you provide leaf removal in Reno and Sparks?', answer: 'Yes. TerraNova provides leaf removal and seasonal yard cleanup for Reno, Sparks, Verdi, and surrounding Northern Nevada communities based on scope and scheduling.' },
      { question: 'Can leaf removal include pine needles?', answer: 'Yes. Tell us about the areas with leaves or pine needles when you request an estimate so the cleanup scope can be reviewed.' },
      { question: 'Can I request a one-time leaf cleanup?', answer: 'Yes. Use the estimate form to describe your property and the areas you want cleared.' },
      { question: 'Do you handle landscaping projects beyond seasonal cleanup?', answer: 'Yes. TerraNova also provides landscape design, construction, hardscaping, pavers, xeriscaping, artificial turf, and backyard remodels.' },
    ]}
    related={[
      { href: '/fall-leaf-cleanup-reno', label: 'Fall Leaf Cleanup' },
      { href: '/yard-debris-removal-reno', label: 'Yard Debris Removal' },
      { href: '/landscaping-reno-nv', label: 'Landscaping Reno' },
      { href: '/xeriscaping-reno', label: 'Xeriscaping Reno' },
    ]}
  />
}
