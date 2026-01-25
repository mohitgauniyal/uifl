import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone, MapPin, Clock, Globe } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-background border-t border-border overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-secondary tracking-wide uppercase">Take the next step</p>
              <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Ready to Speak With Confidence?
              </h2>
              <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                Join thousands of students who've transformed their language skills with personalized guidance from expert instructors.
              </p>
            </div>

            {/* Feature List with Icons */}
            <div className="space-y-4">
              {[
                { icon: '✓', text: 'Free consultation & assessment' },
                { icon: '✓', text: 'Customized learning plan based on your goals' },
                { icon: '✓', text: 'Flexible batch and online options' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-secondary">{item.icon}</span>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl px-8 transition-all"
                asChild
              >
                <Link href="/contact">
                  Start Learning Today
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-white bg-transparent border-2"
                asChild
              >
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>

          {/* Right Contact Info - Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Call Us</h3>
                  <p className="text-xs text-muted-foreground mt-1">Available 9 AM - 8 PM</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-border">
                  <p className="text-primary font-bold text-sm">+91 9724640763</p>
                  <p className="text-primary font-bold text-sm">+91 9879878975</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all hover:border-secondary/50">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Visit Us</h3>
                  <p className="text-xs text-muted-foreground mt-1">Dehradun Center</p>
                </div>
                <div className="text-sm text-foreground pt-2 border-t border-border space-y-1">
                  <p className="font-medium">1/4, Rajpur Road</p>
                  <p className="text-muted-foreground">Dehradun – 248001</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all hover:border-accent/50">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Hours</h3>
                  <p className="text-xs text-muted-foreground mt-1">Open daily</p>
                </div>
                <div className="text-sm text-foreground pt-2 border-t border-border font-medium">
                  <p>Monday - Sunday</p>
                  <p className="text-accent font-bold">9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Online Classes Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-lg transition-all hover:border-primary/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Globe size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">Online Classes</h3>
                  <p className="text-xs text-muted-foreground mt-1">From anywhere</p>
                </div>
                <div className="text-sm text-foreground pt-2 border-t border-border space-y-1">
                  <p className="font-medium">Live & Interactive</p>
                  <p className="text-primary font-bold">Available worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
