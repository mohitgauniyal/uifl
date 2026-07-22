'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
import testimonialsData from '@/lib/data/testimonials.json'

// Cast the imported JSON to the expected type
const testimonials = testimonialsData as any[]

export default function Testimonials() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState<any[]>([])
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Shuffle algorithm
  const shuffle = (array: any[]) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  useEffect(() => {
    setShuffledTestimonials(shuffle(testimonialsData))
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2

      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      })
      setIsAutoPlay(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlay && scrollContainerRef.current) {
      interval = setInterval(() => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current!
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current!.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollContainerRef.current!.scrollTo({
            left: scrollLeft + 400,
            behavior: 'smooth'
          })
        }
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay])

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary mb-2">Success stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trusted by students across Dehradun
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous"
              className="group w-11 h-11 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} className="text-foreground group-hover:text-primary-foreground transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next"
              className="group w-11 h-11 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
            >
              <ChevronRight size={20} className="text-foreground group-hover:text-primary-foreground transition-colors" />
            </button>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              aria-label={isAutoPlay ? 'Pause autoplay' : 'Play autoplay'}
              className="w-11 h-11 bg-muted border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors text-muted-foreground"
            >
              {isAutoPlay ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
            </button>
          </div>
        </div>

        {/* Carousel View */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing"
            onMouseDown={() => setIsAutoPlay(false)}
          >
            {shuffledTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[300px] md:w-[380px] snap-start"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-8 decoration-2 uppercase tracking-widest"
          >
            View all {shuffledTestimonials.length} reviews
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
