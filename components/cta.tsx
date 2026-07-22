import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Phone, MapPin, Clock, Globe } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    title: 'Call us',
    meta: 'Daily, 9 AM – 8 PM',
    lines: ['+91 97246 40763', '+91 98798 78975'],
  },
  {
    icon: MapPin,
    title: 'Visit us',
    meta: 'Dehradun centre',
    lines: ['1/4, Rajpur Road', 'Dehradun – 248001'],
  },
  {
    icon: Clock,
    title: 'Hours',
    meta: 'Monday – Sunday',
    lines: ['9:00 AM – 8:00 PM'],
  },
  {
    icon: Globe,
    title: 'Online classes',
    meta: 'From anywhere',
    lines: ['Live & interactive', 'Available worldwide'],
  },
]

export default function CallToAction() {
  return (
    <section className="py-20 lg:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-primary mb-3">Take the next step</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Ready to start learning?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Book a free assessment and we&apos;ll recommend the right language,
              level and format for your goals.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Free consultation & level assessment',
                'A learning plan matched to your goals',
                'Flexible batch and online options',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check size={13} className="text-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="px-6" asChild>
                <Link href="/contact">
                  Start Learning Today
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-6" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>

          {/* Right: contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contacts.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.meta}</p>
                  <div className="mt-3 pt-3 border-t border-border space-y-1">
                    {c.lines.map((line) => (
                      <p key={line} className="text-sm text-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
