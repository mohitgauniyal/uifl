import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'
import { ArrowRight, Phone, MapPin, MessageCircle } from 'lucide-react'

const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
  "Hi, I'd like to know more about your language courses.",
)}`

export default function CallToAction() {
  return (
    <section className="py-16 lg:py-20 bg-muted/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-primary mb-2">Take the next step</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to start learning?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Book a free assessment and we&apos;ll recommend the right language, level and format for your goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Free Assessment
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>

        {/* Slim contact line */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <a href={`tel:${siteConfig.phone[0].replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone size={15} className="text-primary" />
            {siteConfig.phone[0]}
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
            <MessageCircle size={15} className="text-primary" />
            WhatsApp
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={15} className="text-primary" />
            Rajpur Road, Dehradun
          </span>
        </div>
      </div>
    </section>
  )
}
