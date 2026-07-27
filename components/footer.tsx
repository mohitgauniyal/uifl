import Link from 'next/link'
import { Phone, MapPin, Mail, Facebook, Instagram, Youtube, Star } from 'lucide-react'
import { Brand } from '@/components/brand'
import { siteConfig } from '@/lib/site'

const socialLinks = [
  { label: 'Facebook', href: siteConfig.social.facebook, icon: Facebook },
  { label: 'Instagram', href: siteConfig.social.instagram, icon: Instagram },
  { label: 'YouTube', href: siteConfig.social.youtube, icon: Youtube },
]

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
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Brand layout="stacked" logoClassName="h-12" className="mb-6" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Unique Institute of Foreign Languages: 25+ years of excellence in language education.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  {siteConfig.phone.map((number) => (
                    <p key={number} className="text-muted-foreground">{number}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary flex-shrink-0 mt-1" />
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-muted-foreground">{siteConfig.address.street}</p>
                  <p className="text-muted-foreground">
                    {siteConfig.address.locality} – {siteConfig.address.postalCode}, {siteConfig.address.region}
                  </p>
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

          {/* Follow us */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow us</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a
              href={siteConfig.justdial}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Star size={15} className="flex-shrink-0" />
              Reviews on JustDial
            </a>
          </div>
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
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
