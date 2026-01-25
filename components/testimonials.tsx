'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const testimonials = [
  {
    type: 'text',
    name: 'Priya Sharma',
    role: 'DELF B2 Certified',
    text: 'Transformative experience! Cleared DELF B2 on first attempt.',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Rohit Patel',
    role: 'Business German',
    title: 'My Goethe Journey',
  },
  {
    type: 'text',
    name: 'Anjali Gupta',
    role: 'JLPT N2 Achiever',
    text: 'Zero to JLPT N2 in 18 months with structured curriculum.',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Vikram Kumar',
    role: 'Spanish Professional',
    title: 'Conversational Fluency',
  },
  {
    type: 'text',
    name: 'Meera Reddy',
    role: 'IELTS Student',
    text: 'Excellent batch sizes with detailed feedback on every assignment.',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Arjun Singh',
    role: 'French Learner',
    text: 'Best language institute in Dehradun. Highly recommend!',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Neha Verma',
    role: 'German Student',
    title: 'My Learning Story',
  },
  {
    type: 'text',
    name: 'Deepak Mishra',
    role: 'English Proficiency',
    text: 'Teachers are native speakers with 10+ years experience.',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Kavya Iyer',
    role: 'Spanish Enthusiast',
    text: 'Affordable fees with quality education. Worth every penny!',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Sanjay Nair',
    role: 'Japanese Learner',
    title: 'JLPT Success',
  },
  {
    type: 'text',
    name: 'Divya Sharma',
    role: 'Multiple Languages',
    text: 'Learned 3 languages here. Excellent infrastructure!',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Rahul Patel',
    role: 'Chinese Student',
    text: 'HSK 3 cleared! Thank you Unique Institute.',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Priya Nair',
    role: 'French Learner',
    title: 'DELF Success Story',
  },
  {
    type: 'text',
    name: 'Akshay Kumar',
    role: 'Russian Language',
    text: 'Flexible online classes made learning convenient.',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Sophie Martin',
    role: 'English for Professionals',
    text: 'Career-oriented approach helped me get promoted!',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Harish Reddy',
    role: 'Spanish Conversational',
    title: 'Travel Ready Spanish',
  },
  {
    type: 'text',
    name: 'Isha Gupta',
    role: 'IELTS Achiever',
    text: 'Mock tests and expert guidance led to 7.5 band score.',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Ravi Patel',
    role: 'German B1 Level',
    text: 'Supportive environment with like-minded learners.',
    rating: 5,
  },
  {
    type: 'video',
    name: 'Jyoti Sharma',
    role: 'Japanese Culture',
    title: 'More than Language',
  },
  {
    type: 'text',
    name: 'Nikhil Verma',
    role: 'Chinese HSK 2',
    text: 'Best investment in my education. Thank you!',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  useEffect(() => {
    if (isAutoPlay) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => stopAutoPlay()
  }, [isAutoPlay])

  const goToPrevious = () => {
    stopAutoPlay()
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    stopAutoPlay()
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">Success Stories</p>
          <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Hear From Our Students
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Real stories from students who achieved their language learning goals
          </p>
        </div>

        {/* Carousel - Small Card Grid Horizontal Scroll */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-muted/30 to-transparent z-10"></div>

          {/* Scrollable container */}
          <div className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-4 min-w-min px-4">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-80"
                  style={{ animation: `slide-in-left 0.6s ease-out ${idx * 0.05}s backwards` }}
                >
                  {testimonial.type === 'text' ? (
                    <div className="bg-white border border-border rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-lg hover:border-primary/50 transition-all group">
                      <div className="space-y-4">
                        <div className="flex gap-0.5">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <span key={i} className="text-lg text-secondary">★</span>
                          ))}
                        </div>
                        <p className="text-sm text-foreground line-clamp-3 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-secondary font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/15 border border-border rounded-2xl p-6 h-full flex flex-col items-center justify-center hover:shadow-lg hover:border-primary/50 transition-all group">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-sm text-foreground text-center">{testimonial.title}</h4>
                      <p className="text-xs text-muted-foreground text-center mt-2">{testimonial.name}</p>
                      <p className="text-xs text-secondary font-medium text-center">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground mt-3">Video</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={goToPrevious}
              className="group w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              <ChevronLeft size={20} className="text-primary group-hover:text-white" />
            </button>

            <button
              onClick={toggleAutoPlay}
              className="group w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all"
            >
              {isAutoPlay ? (
                <Pause size={18} className="text-secondary group-hover:text-white" />
              ) : (
                <Play size={18} className="text-secondary group-hover:text-white" />
              )}
            </button>

            <button
              onClick={goToNext}
              className="group w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
            >
              <ChevronRight size={20} className="text-primary group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
