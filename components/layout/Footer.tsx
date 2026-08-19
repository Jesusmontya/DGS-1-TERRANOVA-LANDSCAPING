import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { SERVICES, SERVICE_AREAS, COMPANY } from '@/lib/data'

export default function Footer() {
  const featured = SERVICE_AREAS.filter(a => a.featured)

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-1">
          <p className="text-xl font-bold text-white mb-2">TerraNova <span className="text-green-400">Landscaping</span></p>
          <p className="text-sm leading-relaxed mb-4">{COMPANY.description}</p>
          <p className="text-xs text-stone-500">Serving Northern Nevada for {COMPANY.years}+ years</p>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold mb-3">Services</p>
          <ul className="space-y-2">
            {SERVICES.slice(0, 6).map(s => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-sm hover:text-green-400 transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas */}
        <div>
          <p className="text-white font-semibold mb-3">Service Areas</p>
          <ul className="space-y-2">
            {featured.map(a => (
              <li key={a.slug}>
                <Link href={`/areas#${a.slug}`} className="text-sm hover:text-green-400 transition-colors">
                  {a.city}, {a.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-3">
            <li>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm hover:text-green-400">
                <Phone size={14} /> {COMPANY.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 text-sm hover:text-green-400">
                <Mail size={14} /> {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <MapPin size={14} /> Reno, NV — Northern Nevada
            </li>
          </ul>
          <Link
            href="/estimate"
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-stone-800 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} TerraNova Landscaping. All rights reserved. | Reno, NV
      </div>
    </footer>
  )
}
