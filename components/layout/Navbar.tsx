'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/services',  label: 'Services'     },
  { href: '/areas',     label: 'Service Areas' },
  { href: '/gallery',   label: 'Gallery'       },
  { href: '/reviews',   label: 'Reviews'       },
  { href: '/contact',   label: 'Contact'       },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-800">Terra</span>
            <span className="text-xl font-bold text-stone-500">Nova</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-stone-600 hover:text-green-700 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            
              href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
              className="flex items-center gap-1 text-sm text-stone-600 hover:text-green-700"
            >
              <Phone size={14} />
              {process.env.NEXT_PUBLIC_PHONE}
            </a>
            <Link
              href="/estimate"
              className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-stone-700 font-medium"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/estimate"
            onClick={() => setOpen(false)}
            className="bg-green-700 text-white text-center font-semibold px-4 py-3 rounded-lg"
          >
            Get Free Estimate
          </Link>
          
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="text-center text-green-700 font-medium"
          >
            Call {process.env.NEXT_PUBLIC_PHONE}
          </a>
        </div>
      )}
    </header>
  )
}
