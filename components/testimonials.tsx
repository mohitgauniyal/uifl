'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
import testimonialsData from '@/lib/data/testimonials.json'

// Cast the imported JSON to the expected type
const testimonials = testimonialsData as any[]

export default function Testimonials() {
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-black text-primary tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary" />
              Success Stories
            </p>
            <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
              Trust the <span className="text-primary italic">Best</span> in Dehradun.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              className="group w-14 h-14 bg-background border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl hover:shadow-primary/20"
            >
              <ChevronLeft size={24} className="text-foreground group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="group w-14 h-14 bg-background border-2 border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl hover:shadow-primary/20"
            >
              <ChevronRight size={24} className="text-foreground group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="w-14 h-14 bg-secondary/10 border-2 border-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-all font-bold text-secondary"
            >
              {isAutoPlay ? <Pause size={20} /> : <Play size={20} className="fill-current" />}
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
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[350px] md:w-[450px] snap-start"
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
            View all {testimonials.length} reviews
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
