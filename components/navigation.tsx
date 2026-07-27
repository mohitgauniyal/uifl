'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Brand } from '@/components/brand'

const navLinks = [
  { label: 'Courses', href: '/courses' },
  { label: 'Languages', href: '/languages' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-6">
              <a href="tel:+919724640763" className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                <Phone size={13} />
                +91 97246 40763
              </a>
              <span className="inline-flex items-center gap-1.5 opacity-90">
                <MapPin size={13} />
                Rajpur Road, Dehradun
              </span>
            </div>
            <span className="opacity-90">Mon–Sun · 9 AM – 8 PM · Online &amp; Classroom</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Brand />

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button className="hidden sm:inline-flex" asChild>
                <Link href="/contact">Book Assessment</Link>
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden border-t border-border py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-3">
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Book Assessment</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
