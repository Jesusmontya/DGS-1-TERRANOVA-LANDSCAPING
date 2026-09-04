import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://terranovalandscapingnv.com'
  const routes = [
    '',
    '/landscaping-reno-nv',
    '/backyard-remodel-reno',
    '/backyard-design',
    '/pavers-reno-nv',
    '/hardscape-reno',
    '/xeriscaping-reno',
    '/locations/sparks',
    '/locations/verdi',
    '/locations/lake-tahoe',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/pavers-reno-nv' ? 0.95 : route === '/hardscape-reno' || route === '/xeriscaping-reno' ? 0.9 : route === '/backyard-remodel-reno' ? 0.85 : 0.8,
  }))
}
