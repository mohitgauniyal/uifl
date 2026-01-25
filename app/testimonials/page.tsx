'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
import testimonialsData from '@/lib/data/testimonials.json'
import { Search, Filter } from 'lucide-react'

// Cast the imported JSON to the expected type
const testimonials = testimonialsData as any[]

export default function TestimonialsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  const avgRating = 5.0 // Since all real reviews are positive 5-star style

  const languages = useMemo(() => {
    const langs = new Set(testimonials.map(t => t.language).filter(Boolean))
    return ['All', ...Array.from(langs).sort()]
  }, [])

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(t => {
      const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.role.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesLanguage = selectedLanguage === 'All' || t.language === selectedLanguage

      return matchesSearch && matchesLanguage
    })
  }, [searchQuery, selectedLanguage])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-background border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-balance text-5xl sm:text-7xl font-black text-foreground mb-6 tracking-tighter leading-[0.9]">
              Real People. <br />
              <span className="text-primary italic">Real Success.</span>
            </h1>
            <p className="text-pretty text-xl text-muted-foreground leading-relaxed max-w-2xl">
              From Dehradun to the world, our students share their transformative journeys in mastering foreign languages.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Toolbar */}
      <section className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 transition-colors group-focus-within:text-primary" />
              <Input
                placeholder="Search by name, role or content..."
                className="pl-11 h-12 rounded-full border-border focus:ring-primary/20 transition-all bg-muted/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
              <Filter className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${selectedLanguage === lang
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                      : 'bg-muted/50 text-muted-foreground border-transparent hover:border-primary/50'
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 bg-muted/20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-4xl font-black text-foreground tracking-tighter">300+</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Global Placements</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-primary tracking-tighter">{avgRating.toFixed(1)}</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Average User Rating</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-foreground tracking-tighter">25+</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Years of Trust</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-black text-foreground tracking-tighter">100%</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Exam Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-40 border-2 border-dashed border-border rounded-3xl">
              <p className="text-muted-foreground text-lg font-medium">No success stories found matching your criteria.</p>
              <Button
                variant="link"
                className="mt-4 text-primary font-bold"
                onClick={() => { setSearchQuery(''); setSelectedLanguage('All') }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 lg:py-40 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
            Become Our Next <span className="text-primary italic">Success</span> Story.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-black uppercase text-sm tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40">
              Get Started Today
            </button>
            <button className="px-12 py-5 border-2 border-background/20 hover:border-primary hover:text-primary rounded-full font-black uppercase text-sm tracking-widest transition-all">
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
