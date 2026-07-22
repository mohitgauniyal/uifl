'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { MediaFrame } from '@/components/media-frame'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Award, Zap, BookOpen } from 'lucide-react'
import { Flag } from '@/components/flag'
import { use, useState } from 'react'

const languageData: Record<string, any> = {
  french: {
    language: 'French', greeting: 'Bonjour', tagline: 'Parlez français avec confiance',
    description: 'Master French through comprehensive DELF preparation, conversational fluency and rich cultural immersion.',
    stats: [{ label: '240+', value: 'Active students', icon: Users }, { label: '95%', value: 'Success rate', icon: Award }, { label: '12+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'A1', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary Upper', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3–4 mo', topics: 5 }, { code: 'B2', title: 'Upper Inter', duration: '3–4 mo', topics: 4 }, { code: 'C1', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'DELF Exam Prep', desc: 'All levels with mock tests', duration: '6–10 weeks' }, { title: 'Conversational', desc: 'Real-world communication', duration: '8–12 weeks' }, { title: 'Business French', desc: 'Professional communication', duration: '10–12 weeks' }, { title: 'Kids Program', desc: 'Ages 6–12, interactive', duration: 'Flexible' }],
  },
  german: {
    language: 'German', greeting: 'Guten Tag', tagline: 'Sprechen Sie Deutsch mit Zuversicht',
    description: 'Learn German for business, culture and Goethe certification with expert instructors.',
    stats: [{ label: '180+', value: 'Active students', icon: Users }, { label: '95%', value: 'Success rate', icon: Award }, { label: '10+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'A1', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary Upper', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3–4 mo', topics: 5 }, { code: 'B2', title: 'Upper Inter', duration: '3–4 mo', topics: 4 }, { code: 'C1', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'Goethe Exam', desc: 'All certification levels', duration: '6–10 weeks' }, { title: 'Business German', desc: 'Corporate communication', duration: '10–12 weeks' }, { title: 'Conversational', desc: 'Everyday fluency', duration: '8–12 weeks' }, { title: 'Cultural Course', desc: 'German culture & history', duration: '6 weeks' }],
  },
  spanish: {
    language: 'Spanish', greeting: 'Hola', tagline: 'Habla español con confianza',
    description: 'Spanish language with DELE exam preparation, conversational skills and Latin American culture.',
    stats: [{ label: '210+', value: 'Active students', icon: Users }, { label: '95%', value: 'Success rate', icon: Award }, { label: '11+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'A1', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary Upper', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3–4 mo', topics: 5 }, { code: 'B2', title: 'Upper Inter', duration: '3–4 mo', topics: 4 }, { code: 'C1', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'DELE Exam Prep', desc: 'All levels certified', duration: '6–10 weeks' }, { title: 'Latin American', desc: 'Regional variations', duration: '8 weeks' }, { title: 'Conversational', desc: 'Practical communication', duration: '8–12 weeks' }, { title: 'Business Spanish', desc: 'Professional skills', duration: '10 weeks' }],
  },
  japanese: {
    language: 'Japanese', greeting: 'こんにちは', tagline: '日本語を話す',
    description: 'Japanese language and culture with JLPT certification preparation and immersive learning.',
    stats: [{ label: '160+', value: 'Active students', icon: Users }, { label: '94%', value: 'Success rate', icon: Award }, { label: '9+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'N5', title: 'Beginner', duration: '3 mo', topics: 4 }, { code: 'N4', title: 'Elementary', duration: '3 mo', topics: 4 }, { code: 'N3', title: 'Intermediate', duration: '4 mo', topics: 5 }, { code: 'N2', title: 'Upper Inter', duration: '4 mo', topics: 5 }, { code: 'N1', title: 'Advanced', duration: '5 mo', topics: 5 }],
    tracks: [{ title: 'JLPT Prep', desc: 'All levels N5–N1', duration: '12–20 weeks' }, { title: 'Cultural', desc: 'Art, tradition & food', duration: '6 weeks' }, { title: 'Conversational', desc: 'Daily communication', duration: '8–12 weeks' }, { title: 'Business Japanese', desc: 'Professional context', duration: '10 weeks' }],
  },
  russian: {
    language: 'Russian', greeting: 'Привет', tagline: 'Говорите по-русски с уверенностью',
    description: 'Russian language including literature, business communication and cultural immersion.',
    stats: [{ label: '95+', value: 'Active students', icon: Users }, { label: '93%', value: 'Success rate', icon: Award }, { label: '7+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'A1', title: 'Elementary', duration: '3 mo', topics: 4 }, { code: 'A2', title: 'Elementary Upper', duration: '3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '4 mo', topics: 5 }, { code: 'B2', title: 'Upper Inter', duration: '4 mo', topics: 5 }],
    tracks: [{ title: 'Literature Focus', desc: 'Russian classics', duration: '8 weeks' }, { title: 'Business Russian', desc: 'Corporate training', duration: '10 weeks' }, { title: 'Conversational', desc: 'Everyday fluency', duration: '10–12 weeks' }, { title: 'Intensive', desc: 'Fast-track program', duration: '6 weeks' }],
  },
  english: {
    language: 'English', greeting: 'Hello', tagline: 'Speak English fluently',
    description: 'English proficiency with TOEFL and IELTS certification, business English and academic writing.',
    stats: [{ label: '320+', value: 'Active students', icon: Users }, { label: '96%', value: 'Success rate', icon: Award }, { label: '15+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'A1', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary Upper', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3 mo', topics: 5 }, { code: 'B2', title: 'Upper Inter', duration: '3 mo', topics: 5 }, { code: 'C1', title: 'Advanced', duration: '4 mo', topics: 5 }],
    tracks: [{ title: 'TOEFL Prep', desc: 'Academic English', duration: '8–12 weeks' }, { title: 'IELTS Prep', desc: 'All modules', duration: '8–12 weeks' }, { title: 'Spoken English', desc: 'Confidence & fluency', duration: '6–10 weeks' }, { title: 'Business English', desc: 'Professional skills', duration: '8 weeks' }],
  },
  chinese: {
    language: 'Chinese', greeting: '你好', tagline: '说普通话',
    description: 'Mandarin Chinese with HSK certification pathway and cultural immersion programs.',
    stats: [{ label: '140+', value: 'Active students', icon: Users }, { label: '93%', value: 'Success rate', icon: Award }, { label: '8+', value: 'Expert teachers', icon: Zap }],
    levels: [{ code: 'HSK1', title: 'Beginner', duration: '2–3 mo', topics: 3 }, { code: 'HSK2', title: 'Elementary', duration: '2–3 mo', topics: 3 }, { code: 'HSK3', title: 'Intermediate', duration: '3–4 mo', topics: 4 }, { code: 'HSK4', title: 'Upper Inter', duration: '3–4 mo', topics: 4 }, { code: 'HSK5', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'HSK Certification', desc: 'All levels HSK1–5', duration: '8–16 weeks' }, { title: 'Conversational', desc: 'Practical communication', duration: '10 weeks' }, { title: 'Business Chinese', desc: 'Professional context', duration: '10 weeks' }, { title: 'Cultural Immersion', desc: 'Heritage & customs', duration: '6 weeks' }],
  },
}

export default function LanguagePage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = use(params)
  const [selectedLevel, setSelectedLevel] = useState(0)
  const data = languageData[language]

  if (!data) {
    return (
      <main>
        <Navigation />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
          <h1 className="text-2xl font-bold text-foreground">Language not found</h1>
          <Button asChild><Link href="/languages">Browse all languages</Link></Button>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="border-b border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary">Language program</p>
              <div className="flex items-center gap-3">
                <Flag code={language} className="h-8 w-12" />
                <span className="text-2xl font-medium text-muted-foreground">{data.greeting}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">{data.language}</h1>
              <p className="text-lg text-primary font-medium">{data.tagline}</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{data.description}</p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Enroll Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            <MediaFrame aspect="aspect-[4/3]" label={`${data.language} classroom`} />
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.stats.map((stat: any, idx: number) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground tabular-nums">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proficiency levels */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-primary mb-2">Your learning path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Proficiency levels</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.levels.map((level: any, idx: number) => {
              const active = selectedLevel === idx
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedLevel(idx)}
                  className={`rounded-xl border p-6 text-center transition-colors ${
                    active
                      ? 'border-primary bg-accent'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  <p className={`text-3xl font-bold ${active ? 'text-primary' : 'text-foreground'}`}>{level.code}</p>
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{level.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{level.duration}</p>
                  {active && (
                    <p className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">{level.topics} topics</p>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning tracks */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-primary mb-2">Learning options</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Specialised tracks</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.tracks.map((track: any, idx: number) => (
              <div key={idx} className="group rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <BookOpen size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{track.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{track.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 mt-4 border-t border-border">
                      <Clock size={16} />
                      <span>{track.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary mb-3">Ready to begin?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Start learning {data.language} today</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Free consultation with our language experts. Choose your level and get a personalised learning plan.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Book a Free Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
