'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
import testimonialsData from '@/lib/data/testimonials.json'
import { Search, Filter } from 'lucide-react'

const testimonials = testimonialsData as any[]

export default function TestimonialsPage() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  const shuffle = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  useEffect(() => {
    setShuffledTestimonials(shuffle(testimonials))
  }, [])

  const languages = useMemo(() => {
    const langs = new Set(testimonials.map((t) => t.language).filter(Boolean))
    return ['All', ...Array.from(langs).sort()]
  }, [])

  const filteredTestimonials = useMemo(() => {
    return shuffledTestimonials.filter((t) => {
      const q = searchQuery.toLowerCase()
      const matchesSearch =
        t.name.toLowerCase().includes(q) ||
        t.content.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q)
      const matchesLanguage = selectedLanguage === 'All' || t.language === selectedLanguage
      return matchesSearch && matchesLanguage
    })
  }, [shuffledTestimonials, searchQuery, selectedLanguage])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-3">Success stories</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Real people. <span className="text-primary">Real results.</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              From Dehradun to the world, our students share their journeys in mastering a new language.
            </p>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-16 md:top-[6.25rem] z-30 bg-background/90 backdrop-blur border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search by name, role or content..."
                className="pl-10 h-11 rounded-full bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              <Filter className="w-4 h-4 text-muted-foreground mr-1 flex-shrink-0" />
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap border ${
                    selectedLanguage === lang
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTestimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground">No stories match your criteria.</p>
              <Button
                variant="link"
                className="mt-2 text-primary"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedLanguage('All')
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Join */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Become our next success story
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Book a free assessment and start your language journey with us.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-background/30 text-background hover:bg-background/10 hover:text-background"
              asChild
            >
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
