import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://terranovalandscapingnv.com'
  const routes = [
    '',
    '/backyard-design',
    '/paver-patio-reno',
    '/xeriscaping-reno',
    '/locations/sparks',
    '/locations/verdi',
    '/locations/lake-tahoe',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
