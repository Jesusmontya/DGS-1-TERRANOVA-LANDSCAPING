import type { Service, ServiceArea } from '@/types'

export const SERVICES: Service[] = [
  {
    slug:      'custom-backyard-design',
    title:     'Custom Backyard Design',
    shortDesc: 'Your dream backyard, designed from scratch — personalized to your style and budget.',
    description: 'We design your dream backyard from scratch — personalized to your style, budget, and space. Our free design consultation includes a full walkthrough of materials, layout options, and estimated costs. No cookie-cutter designs. Every project is built for you.',
    icon:      '✏️',
    featured:  true,
  },
  {
    slug:      'full-backyard-installation',
    title:     'Full Backyard Installation',
    shortDesc: 'From empty lot to finished outdoor living space — we handle everything.',
    description: 'From an empty lot to a finished outdoor living space — we handle excavation, grading, hardscaping, planting, irrigation, and final cleanup. One team, start to finish.',
    icon:      '🏗️',
    featured:  true,
  },
  {
    slug:      'hardscaping-patios',
    title:     'Hardscaping & Patios',
    shortDesc: 'Custom patios, walkways, retaining walls and driveways built to last.',
    description: 'Custom patios, walkways, retaining walls, driveways, and outdoor structures built with premium materials. Natural stone, pavers, concrete, and boulders.',
    icon:      '🪨',
    featured:  true,
  },
  {
    slug:      'irrigation-systems',
    title:     'Irrigation Systems',
    shortDesc: 'Smart irrigation designed for Nevada\'s dry climate — saves water and money.',
    description: 'Professional drip and sprinkler system design and installation. We optimize water usage for Nevada\'s dry climate — saving you money on every water bill.',
    icon:      '💧',
    featured:  false,
  },
  {
    slug:      'xeriscaping',
    title:     'Xeriscaping',
    shortDesc: 'Beautiful, low-maintenance yards that thrive in Reno\'s dry climate.',
    description: 'Water-efficient landscape design using drought-resistant plants, decorative rock, and smart layout — perfect for Northern Nevada\'s hot, dry summers.',
    icon:      '🌵',
    featured:  false,
  },
  {
    slug:      'sod-installation',
    title:     'Sod Installation',
    shortDesc: 'Instant green lawns for residential and commercial properties.',
    description: 'Instant, lush green lawns using high-quality sod suited for Nevada\'s soil and climate. Residential and commercial.',
    icon:      '🌿',
    featured:  false,
  },
  {
    slug:      'outdoor-living-spaces',
    title:     'Outdoor Living Spaces',
    shortDesc: 'Fire pits, pergolas, outdoor kitchens — backyards you actually use.',
    description: 'Fire pits, seating areas, pergolas, outdoor kitchens, and lighting — so your backyard becomes a space you love to use every day.',
    icon:      '🔥',
    featured:  false,
  },
  {
    slug:      'landscape-maintenance',
    title:     'Landscape Maintenance',
    shortDesc: 'Year-round maintenance to keep your yard looking its best.',
    description: 'Regular maintenance programs including mowing, trimming, seasonal cleanup, fertilization, and irrigation checks.',
    icon:      '✂️',
    featured:  false,
  },
]

export const SERVICE_AREAS: ServiceArea[] = [
  { city: 'Reno',            state: 'NV', slug: 'reno-nv',            featured: true  },
  { city: 'Sparks',          state: 'NV', slug: 'sparks-nv',          featured: true  },
  { city: 'Washoe County',   state: 'NV', slug: 'washoe-county-nv',   featured: true  },
  { city: 'Verdi',           state: 'NV', slug: 'verdi-nv',           featured: false },
  { city: 'Spanish Springs', state: 'NV', slug: 'spanish-springs-nv', featured: false },
  { city: 'South Reno',      state: 'NV', slug: 'south-reno-nv',      featured: false },
  { city: 'Somersett',       state: 'NV', slug: 'somersett-nv',       featured: false },
  { city: 'Caughlin Ranch',  state: 'NV', slug: 'caughlin-ranch-nv',  featured: false },
  { city: 'Lake Tahoe',      state: 'NV', slug: 'lake-tahoe-nv',      featured: true  },
  { city: 'Incline Village', state: 'NV', slug: 'incline-village-nv', featured: false },
]

export const COMPANY = {
  name:    'TerraNova Landscaping',
  phone:   process.env.NEXT_PUBLIC_PHONE    || '(775) 000-0000',
  email:   process.env.NEXT_PUBLIC_EMAIL    || 'info@terranovalandscapingnv.com',
  website: process.env.NEXT_PUBLIC_SITE_URL || 'https://terranovalandscapingnv.com',
  years:   15,
  tagline: 'Northern Nevada\'s Custom Landscaping Specialists',
  description: 'TerraNova Landscaping transforms outdoor spaces across Reno, Sparks, and Northern Nevada with 15 years of expert craftsmanship.',
}
