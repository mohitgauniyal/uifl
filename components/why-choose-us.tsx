'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { CheckCircle, Users, BookOpen, Globe, Clock, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import StatCounter from './stat-counter'

const features = [
  {
    icon: Award,
    title: 'Expert Faculty',
    description: 'Native speakers and certified instructors with 10+ years of teaching experience',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Updated syllabi aligned with international exam standards (DELF, GOETHE, JLPT, HSK)',
  },
  {
    icon: Globe,
    title: 'Online & Classroom',
    description: 'Flexible learning options: join live classes online or attend in our Dehradun center',
  },
  {
    icon: Clock,
    title: 'Fast-Track Programs',
    description: 'Intensive courses available for those seeking rapid language acquisition',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'Personalized attention with average batch size of 6-8 students per class',
  },
  {
    icon: CheckCircle,
    title: 'Proven Results',
    description: '95%+ success rate in international exams and student satisfaction ratings',
  },
]

export default function WhyChooseUs() {
  const [selectedFeature, setSelectedFeature] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Unique Institute?
          </h2>
          <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
            Established in 1999, we bring 25+ years of language education excellence to every student
          </p>
        </div>

        {/* Features Carousel */}
        <div className="relative">
          {/* Carousel slides */}
          <div className="overflow-hidden rounded-3xl border border-border bg-white">
            <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${selectedFeature * 100}%)` }}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 p-12 md:p-16 items-center"
                  >
                    {/* Content */}
                    <div className="space-y-6 order-2 md:order-1">
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon size={32} className="text-primary" />
                        </div>
                        <h3 className="text-4xl font-bold text-foreground">{feature.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                      <div className="pt-4">
                        <p className="text-sm text-secondary font-semibold">Learn more →</p>
                      </div>
                    </div>

                    {/* Image/Visual Slider */}
                    <div className="relative h-80 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/10 overflow-hidden order-1 md:order-2 flex items-center justify-center">
                      {/* Sliding image carousel */}
                      <div className="absolute inset-0 flex overflow-hidden">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-full h-full flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/15 flex items-center justify-center border border-primary/20"
                            style={{
                              animation: `slide-carousel-vertical 15s linear infinite`,
                              animationDelay: `${(i - 1) * 5}s`,
                            }}
                          >
                            <div className="text-center space-y-3">
                              <div className="w-24 h-24 mx-auto rounded-xl bg-white/80 flex items-center justify-center">
                                <Icon size={48} className="text-primary opacity-60" />
                              </div>
                              <p className="text-xs text-muted-foreground font-semibold">Visual {i}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => setSelectedFeature((prev) => (prev - 1 + features.length) % features.length)}
              className="group w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-md"
            >
              <ChevronLeft size={24} className="text-primary group-hover:text-white" />
            </button>

            <div className="flex gap-3">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFeature(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === selectedFeature ? 'bg-primary w-8' : 'bg-border w-2 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setSelectedFeature((prev) => (prev + 1) % features.length)}
              className="group w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all shadow-md"
            >
              <ChevronRight size={24} className="text-primary group-hover:text-white" />
            </button>
          </div>
        </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Trust Section - Redesigned */}
        <div className="mt-20">
          <div className="max-w-3xl mb-16">
            <h3 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Trusted by Students Across India
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, Unique Institute has been the preferred choice for professional language education. Our students range from school children to working professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Achievement Cards */}
            <div className="group relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-10 hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1" style={{ animation: 'fade-in-up 0.6s ease-out 0s backwards' }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl -z-10 group-hover:bg-primary/20 transition-all"></div>
              <div className="space-y-4">
                <StatCounter target={25} suffix="+" className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent" />
                <h4 className="text-xl font-bold text-foreground">Years of Excellence</h4>
                <p className="text-sm text-muted-foreground">Established in 1998, setting standards in language education</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-2xl p-10 hover:shadow-lg hover:border-secondary/50 transition-all hover:-translate-y-1" style={{ animation: 'fade-in-up 0.6s ease-out 0.1s backwards' }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-2xl -z-10 group-hover:bg-secondary/20 transition-all"></div>
              <div className="space-y-4">
                <StatCounter target={5000} suffix="+" className="text-5xl font-bold bg-gradient-to-br from-secondary to-secondary/70 bg-clip-text text-transparent" />
                <h4 className="text-xl font-bold text-foreground">Students Trained</h4>
                <p className="text-sm text-muted-foreground">Success stories from across the country</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-10 hover:shadow-lg hover:border-accent/50 transition-all hover:-translate-y-1" style={{ animation: 'fade-in-up 0.6s ease-out 0.2s backwards' }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl -z-10 group-hover:bg-accent/20 transition-all"></div>
              <div className="space-y-4">
                <StatCounter target={95} suffix="%" className="text-5xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent" />
                <h4 className="text-xl font-bold text-foreground">Success Rate</h4>
                <p className="text-sm text-muted-foreground">Exam passing and fluency achievement rate</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="bg-gradient-to-b from-muted/50 to-transparent rounded-2xl border border-border p-12">
            <h4 className="text-xl font-bold text-foreground mb-8">Why Students Choose Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🎯', title: 'Personalised Learning Paths' },
                { icon: '📊', title: 'Regular Progress Tracking' },
                { icon: '📚', title: 'Exam Preparation Workshops' },
                { icon: '🌍', title: 'Cultural Immersion Sessions' },
                { icon: '💼', title: 'Career Counseling Support' },
                { icon: '👥', title: 'Small Batch Classes' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <p className="text-foreground font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
