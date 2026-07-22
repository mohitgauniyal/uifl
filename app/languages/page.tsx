import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Flag } from '@/components/flag'
import { EditorialStatement } from '@/components/editorial-statement'

export const metadata = {
  title: 'Foreign Language Programs in Dehradun',
  description:
    'Seven foreign language programs in Dehradun and online — French, German, Spanish, Japanese, Russian, English and Chinese. Compare certifications, career opportunities and learning time.',
  alternates: { canonical: '/languages' },
}

const languages = [
  { id: 'french', name: 'French', greeting: 'Bonjour', nativeSpeakers: '280 Million', countries: '29 countries', description: 'The language of diplomacy and culture, spoken across continents and central to international careers.', certifications: ['DELF', 'DALF'], difficulty: 'Intermediate', learningTime: '600–750 hrs' },
  { id: 'german', name: 'German', greeting: 'Guten Tag', nativeSpeakers: '135 Million', countries: '7 countries', description: 'A language of precision, engineering and philosophy — crucial for technology and business.', certifications: ['Goethe-Zertifikat', 'TestDaF'], difficulty: 'Intermediate', learningTime: '750–900 hrs' },
  { id: 'spanish', name: 'Spanish', greeting: 'Hola', nativeSpeakers: '500 Million', countries: '21 countries', description: 'The second most spoken language globally, opening doors across Latin America and Spain.', certifications: ['DELE'], difficulty: 'Beginner-friendly', learningTime: '600–750 hrs' },
  { id: 'japanese', name: 'Japanese', greeting: 'こんにちは', nativeSpeakers: '125 Million', countries: '1 country', description: 'A gateway to Japanese culture, technology and innovation across the Asia-Pacific.', certifications: ['JLPT'], difficulty: 'Advanced', learningTime: '2200–2500 hrs' },
  { id: 'russian', name: 'Russian', greeting: 'Привет', nativeSpeakers: '160 Million', countries: '15 countries', description: 'A language of literature, science and Eastern European culture and heritage.', certifications: ['TORFL'], difficulty: 'Intermediate–Advanced', learningTime: '900–1100 hrs' },
  { id: 'english', name: 'English', greeting: 'Hello', nativeSpeakers: '370 Million', countries: '67 countries', description: 'The global language of business, technology and international communication.', certifications: ['IELTS', 'TOEFL', 'Cambridge'], difficulty: 'Beginner-friendly', learningTime: '350–500 hrs' },
  { id: 'chinese', name: 'Chinese', greeting: '你好', nativeSpeakers: '1.1 Billion', countries: '3 countries', description: 'The most spoken language in the world, vital for understanding Asian markets.', certifications: ['HSK'], difficulty: 'Advanced', learningTime: '1500–1800 hrs' },
]

const openings = [
  { title: 'Career growth', description: 'Multilingual professionals access international job markets and higher pay.' },
  { title: 'Recognised certifications', description: 'DELF, Goethe, JLPT, HSK and more — credentials that open doors globally.' },
  { title: 'Global reach', description: 'Our languages are spoken by over 3 billion people across every continent.' },
]

export default function LanguagesPage() {
  return (
    <main>
      <Navigation />

      <PageHeader
        eyebrow="Our language offerings"
        title="Seven languages, seven paths forward"
        description="Explore each program and see how the language, certifications and opportunities line up with your goals."
      />

      {/* Languages grid */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <Link
                key={lang.id}
                href={`/languages/${lang.id}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-8 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <Flag code={lang.id} className="h-7 w-11" />
                    <h3 className="mt-4 text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{lang.greeting}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 py-5 border-y border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Native speakers</p>
                    <p className="text-sm font-semibold text-foreground">{lang.nativeSpeakers}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Spoken in</p>
                    <p className="text-sm font-semibold text-foreground">{lang.countries}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed flex-1">{lang.description}</p>

                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {lang.certifications.map((cert) => (
                      <span key={cert} className="text-xs font-medium bg-accent text-primary px-2.5 py-1 rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>Difficulty · <span className="font-medium text-foreground">{lang.difficulty}</span></span>
                    <span>{lang.learningTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why these languages matter */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EditorialStatement
            eyebrow="Why it matters"
            statement={
              <>
                A language is more than a skill — it&apos;s access to careers, recognised
                certifications and <span className="text-primary">connections across the world.</span>
              </>
            }
            pillars={openings}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Ready to start learning?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose any language and begin with our structured programs and expert instructors.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/courses">
                Explore all courses
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
