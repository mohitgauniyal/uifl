import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerSections = [
  {
    title: 'Languages',
    links: [
      { label: 'French', href: '/languages/french' },
      { label: 'German', href: '/languages/german' },
      { label: 'Spanish', href: '/languages/spanish' },
      { label: 'Russian', href: '/languages/russian' },
      { label: 'English', href: '/languages/english' },
      { label: 'Japanese', href: '/languages/japanese' },
      { label: 'Chinese', href: '/languages/chinese' },
    ],
  },
  {
    title: 'Institution',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Director\'s Message', href: '/about' },
      { label: 'Faculty', href: '/faculty' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Learning Materials', href: '/resources' },
      { label: 'Video Tutorials', href: '/resources' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Exam Prep', href: '/courses' },
    ],
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <div>
                <h3 className="font-bold text-primary">UIFL</h3>
                <p className="text-xs text-muted-foreground">Languages</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Unique Institute of Foreign Languages: 25+ years of excellence in language education.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-muted-foreground">+91 9724640763</p>
                  <p className="text-muted-foreground">+91 9879878975</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-muted-foreground">1/4, Rajpur Road</p>
                  <p className="text-muted-foreground">Dehradun – 248001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-sm text-muted-foreground">
              <p>
                &copy; {currentYear} Unique Institute of Foreign Languages. All rights reserved.
              </p>
            </div>
            <div className="flex items-center justify-start md:justify-end gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
