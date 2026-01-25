'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Award, Zap, BookOpen, Star } from 'lucide-react'
import { useState } from 'react'

const languageData: Record<string, any> = {
  french: {
    language: 'French',
    icon: '🇫🇷',
    tagline: 'Parlez Français avec Confiance',
    color: 'from-blue-500/20 to-blue-600/10',
    accentColor: 'text-blue-600',
    description: 'Master French through comprehensive DELF preparation, conversational fluency, and rich cultural immersion.',
    stats: [
      { label: '240+', value: 'Active Students', icon: Users },
      { label: '95%', value: 'Success Rate', icon: Award },
      { label: '12+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'A1', title: 'Elementary', duration: '2-3 mo', topics: 4 },
      { code: 'A2', title: 'Elementary Upper', duration: '2-3 mo', topics: 4 },
      { code: 'B1', title: 'Intermediate', duration: '3-4 mo', topics: 5 },
      { code: 'B2', title: 'Upper Inter', duration: '3-4 mo', topics: 4 },
      { code: 'C1', title: 'Advanced', duration: '4-5 mo', topics: 5 },
    ],
    tracks: [
      { title: 'DELF Exam Prep', desc: 'All levels with mock tests', duration: '6-10 weeks' },
      { title: 'Conversational', desc: 'Real-world communication', duration: '8-12 weeks' },
      { title: 'Business French', desc: 'Professional communication', duration: '10-12 weeks' },
      { title: 'Kids Program', desc: 'Ages 6-12 interactive', duration: 'Flexible' },
    ],
  },
  german: {
    language: 'German',
    icon: '🇩🇪',
    tagline: 'Sprechen Sie Deutsch mit Zuversicht',
    color: 'from-amber-500/20 to-amber-600/10',
    accentColor: 'text-amber-600',
    description: 'Learn German for business, culture, and Goethe certification with expert instructors.',
    stats: [
      { label: '180+', value: 'Active Students', icon: Users },
      { label: '95%', value: 'Success Rate', icon: Award },
      { label: '10+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'A1', title: 'Elementary', duration: '2-3 mo', topics: 4 },
      { code: 'A2', title: 'Elementary Upper', duration: '2-3 mo', topics: 4 },
      { code: 'B1', title: 'Intermediate', duration: '3-4 mo', topics: 5 },
      { code: 'B2', title: 'Upper Inter', duration: '3-4 mo', topics: 4 },
      { code: 'C1', title: 'Advanced', duration: '4-5 mo', topics: 5 },
    ],
    tracks: [
      { title: 'Goethe Exam', desc: 'All certification levels', duration: '6-10 weeks' },
      { title: 'Business German', desc: 'Corporate communication', duration: '10-12 weeks' },
      { title: 'Conversational', desc: 'Everyday fluency', duration: '8-12 weeks' },
      { title: 'Cultural Course', desc: 'German culture & history', duration: '6 weeks' },
    ],
  },
  spanish: {
    language: 'Spanish',
    icon: '🇪🇸',
    tagline: 'Habla Español con Confianza',
    color: 'from-red-500/20 to-red-600/10',
    accentColor: 'text-red-600',
    description: 'Spanish language with DELE exam preparation, conversational skills, and Latin American culture.',
    stats: [
      { label: '210+', value: 'Active Students', icon: Users },
      { label: '95%', value: 'Success Rate', icon: Award },
      { label: '11+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'A1', title: 'Elementary', duration: '2-3 mo', topics: 4 },
      { code: 'A2', title: 'Elementary Upper', duration: '2-3 mo', topics: 4 },
      { code: 'B1', title: 'Intermediate', duration: '3-4 mo', topics: 5 },
      { code: 'B2', title: 'Upper Inter', duration: '3-4 mo', topics: 4 },
      { code: 'C1', title: 'Advanced', duration: '4-5 mo', topics: 5 },
    ],
    tracks: [
      { title: 'DELE Exam Prep', desc: 'All levels certified', duration: '6-10 weeks' },
      { title: 'Latin American', desc: 'Regional variations', duration: '8 weeks' },
      { title: 'Conversational', desc: 'Practical communication', duration: '8-12 weeks' },
      { title: 'Business Spanish', desc: 'Professional skills', duration: '10 weeks' },
    ],
  },
  japanese: {
    language: 'Japanese',
    icon: '🇯🇵',
    tagline: '日本語を話す',
    color: 'from-pink-500/20 to-pink-600/10',
    accentColor: 'text-pink-600',
    description: 'Japanese language and culture with JLPT certification preparation and immersive learning.',
    stats: [
      { label: '160+', value: 'Active Students', icon: Users },
      { label: '94%', value: 'Success Rate', icon: Award },
      { label: '9+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'N5', title: 'Beginner', duration: '3 mo', topics: 4 },
      { code: 'N4', title: 'Elementary', duration: '3 mo', topics: 4 },
      { code: 'N3', title: 'Intermediate', duration: '4 mo', topics: 5 },
      { code: 'N2', title: 'Upper Inter', duration: '4 mo', topics: 5 },
      { code: 'N1', title: 'Advanced', duration: '5 mo', topics: 5 },
    ],
    tracks: [
      { title: 'JLPT Prep', desc: 'All levels N5-N1', duration: '12-20 weeks' },
      { title: 'Cultural', desc: 'Art, tradition & food', duration: '6 weeks' },
      { title: 'Conversational', desc: 'Daily communication', duration: '8-12 weeks' },
      { title: 'Business Japanese', desc: 'Professional context', duration: '10 weeks' },
    ],
  },
  russian: {
    language: 'Russian',
    icon: '🇷🇺',
    tagline: 'Говорите Русский с Уверенностью',
    color: 'from-indigo-500/20 to-indigo-600/10',
    accentColor: 'text-indigo-600',
    description: 'Russian language including literature, business communication, and cultural immersion.',
    stats: [
      { label: '95+', value: 'Active Students', icon: Users },
      { label: '93%', value: 'Success Rate', icon: Award },
      { label: '7+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'A1', title: 'Elementary', duration: '3 mo', topics: 4 },
      { code: 'A2', title: 'Elementary Upper', duration: '3 mo', topics: 4 },
      { code: 'B1', title: 'Intermediate', duration: '4 mo', topics: 5 },
      { code: 'B2', title: 'Upper Inter', duration: '4 mo', topics: 5 },
    ],
    tracks: [
      { title: 'Literature Focus', desc: 'Russian classics', duration: '8 weeks' },
      { title: 'Business Russian', desc: 'Corporate training', duration: '10 weeks' },
      { title: 'Conversational', desc: 'Everyday fluency', duration: '10-12 weeks' },
      { title: 'Intensive', desc: 'Fast-track program', duration: '6 weeks' },
    ],
  },
  english: {
    language: 'English',
    icon: '🇬🇧',
    tagline: 'Speak English Fluently',
    color: 'from-green-500/20 to-green-600/10',
    accentColor: 'text-green-600',
    description: 'English proficiency with TOEFL and IELTS certification, business English, and academic writing.',
    stats: [
      { label: '320+', value: 'Active Students', icon: Users },
      { label: '96%', value: 'Success Rate', icon: Award },
      { label: '15+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'A1', title: 'Elementary', duration: '2-3 mo', topics: 4 },
      { code: 'A2', title: 'Elementary Upper', duration: '2-3 mo', topics: 4 },
      { code: 'B1', title: 'Intermediate', duration: '3 mo', topics: 5 },
      { code: 'B2', title: 'Upper Inter', duration: '3 mo', topics: 5 },
      { code: 'C1', title: 'Advanced', duration: '4 mo', topics: 5 },
    ],
    tracks: [
      { title: 'TOEFL Prep', desc: 'Academic English', duration: '8-12 weeks' },
      { title: 'IELTS Prep', desc: 'All modules', duration: '8-12 weeks' },
      { title: 'Spoken English', desc: 'Confidence & fluency', duration: '6-10 weeks' },
      { title: 'Business English', desc: 'Professional skills', duration: '8 weeks' },
    ],
  },
  chinese: {
    language: 'Chinese',
    icon: '🇨🇳',
    tagline: '说普通话',
    color: 'from-yellow-500/20 to-yellow-600/10',
    accentColor: 'text-yellow-600',
    description: 'Mandarin Chinese with HSK certification pathway and cultural immersion programs.',
    stats: [
      { label: '140+', value: 'Active Students', icon: Users },
      { label: '93%', value: 'Success Rate', icon: Award },
      { label: '8+', value: 'Expert Teachers', icon: Zap },
    ],
    levels: [
      { code: 'HSK1', title: 'Beginner', duration: '2-3 mo', topics: 3 },
      { code: 'HSK2', title: 'Elementary', duration: '2-3 mo', topics: 3 },
      { code: 'HSK3', title: 'Intermediate', duration: '3-4 mo', topics: 4 },
      { code: 'HSK4', title: 'Upper Inter', duration: '3-4 mo', topics: 4 },
      { code: 'HSK5', title: 'Advanced', duration: '4-5 mo', topics: 5 },
    ],
    tracks: [
      { title: 'HSK Certification', desc: 'All levels HSK1-5', duration: '8-16 weeks' },
      { title: 'Conversational', desc: 'Practical communication', duration: '10 weeks' },
      { title: 'Business Chinese', desc: 'Professional context', duration: '10 weeks' },
      { title: 'Cultural Immersion', desc: 'Heritage & customs', duration: '6 weeks' },
    ],
  },
}

export default function LanguagePage({ params }: { params: Promise<{ language: string }> }) {
  const [selectedLevel, setSelectedLevel] = useState(0)
  const language = (params as any).language as string
  const data = languageData[language as keyof typeof languageData]

  if (!data) {
    return (
      <main>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p>Language not found</p>
        </div>
        <Footer />
      </main>
    )
  }

  const StatIcon = data.stats[0]?.icon || Users

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${data.color} py-16 lg:py-24 border-b border-border`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-secondary tracking-wide uppercase">Language Program</p>
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{data.icon}</span>
                  <h1 className="text-5xl sm:text-6xl font-bold text-foreground">{data.language}</h1>
                </div>
                <p className="text-xl text-secondary font-semibold italic">{data.tagline}</p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                {data.description}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
                <Link href="/contact">
                  Enroll Now
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.stats.map((stat: any, idx: number) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="bg-white border border-border rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                    <Icon size={32} className={`${data.accentColor} mx-auto mb-3`} />
                    <p className="text-3xl font-bold text-foreground">{stat.label}</p>
                    <p className="text-sm text-muted-foreground mt-2">{stat.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Proficiency Levels */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">Your Learning Path</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Proficiency Levels</h2>
          </div>

          {/* Level Cards Carousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.levels.map((level: any, idx: number) => (
              <div
                key={idx}
                className={`group relative rounded-2xl border-2 p-8 text-center cursor-pointer transition-all duration-300 ${
                  selectedLevel === idx
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/10 border-primary/50 shadow-lg'
                    : 'bg-white border-border hover:border-primary/30 hover:shadow-md'
                }`}
                onClick={() => setSelectedLevel(idx)}
              >
                <div className="space-y-4">
                  <p className={`text-4xl font-bold ${selectedLevel === idx ? data.accentColor : 'text-muted-foreground'}`}>
                    {level.code}
                  </p>
                  <div>
                    <h3 className="font-bold text-foreground">{level.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{level.duration}</p>
                  </div>
                  {selectedLevel === idx && (
                    <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                      {level.topics} topics
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">Learning Options</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Specialized Tracks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.tracks.map((track: any, idx: number) => (
              <div
                key={idx}
                className="group bg-white border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                style={{ animation: `fade-in-up 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{track.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{track.desc}</p>
                  </div>
                  <Star size={24} className="text-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                  <Clock size={16} />
                  <span>{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase">Ready to Begin?</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Start Learning {data.language} Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Free consultation with our language experts. Choose your level and get a personalized learning plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
              <Link href="/contact">
                <BookOpen size={20} className="mr-2" />
                Enroll Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent border-2" asChild>
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
