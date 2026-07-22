import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Target, MessageCircle, Briefcase, GraduationCap } from 'lucide-react'

const languages = [
  { id: 'french', name: 'French', greeting: 'Bonjour', description: 'DELF / DALF preparation, conversation and business French.', levels: 'A1 – C1', exam: 'DELF · DALF', students: 240, popular: true },
  { id: 'german', name: 'German', greeting: 'Guten Tag', description: 'Goethe certification, business German and everyday fluency.', levels: 'A1 – C1', exam: 'Goethe', students: 180, popular: true },
  { id: 'spanish', name: 'Spanish', greeting: 'Hola', description: 'DELE exam preparation and Latin American Spanish.', levels: 'A1 – C1', exam: 'DELE', students: 210, popular: true },
  { id: 'japanese', name: 'Japanese', greeting: 'こんにちは', description: 'JLPT preparation with kanji, grammar and culture.', levels: 'N5 – N1', exam: 'JLPT', students: 160, popular: false },
  { id: 'russian', name: 'Russian', greeting: 'Привет', description: 'Grammar, literature and business communication.', levels: 'A1 – B2', exam: 'TORFL', students: 95, popular: false },
  { id: 'english', name: 'English', greeting: 'Hello', description: 'IELTS & TOEFL preparation, spoken and business English.', levels: 'A1 – C1', exam: 'IELTS · TOEFL', students: 320, popular: true },
  { id: 'chinese', name: 'Chinese', greeting: '你好', description: 'HSK certification pathway and tone training.', levels: 'HSK 1 – 5', exam: 'HSK', students: 140, popular: false },
]

const tracks = [
  { title: 'Exam Preparation', description: 'Focused training for international certifications with mock tests.', icon: Target },
  { title: 'Conversation & Fluency', description: 'Real-world communication skills and cultural context.', icon: MessageCircle },
  { title: 'Business Communication', description: 'Professional vocabulary and corporate interaction.', icon: Briefcase },
  { title: 'Kids & Teens', description: 'Age-appropriate programs for younger learners.', icon: GraduationCap },
]

export default function CoursesPage() {
  return (
    <main>
      <Navigation />

      <PageHeader
        eyebrow="Course catalogue"
        title="Seven languages, from beginner to certified"
        description="Complete programs that take you from A1 to fluency, each mapped to an internationally recognised certification."
      />

      {/* Learning tracks */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-primary mb-2">How we teach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Multiple learning paths</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track) => {
              const Icon = track.icon
              return (
                <div key={track.title} className="rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{track.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{track.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All languages */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-primary mb-2">Programs</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">All languages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <Link
                key={lang.id}
                href={`/languages/${lang.id}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-medium text-foreground">{lang.greeting}</span>
                  <div className="flex items-center gap-2">
                    {lang.popular && (
                      <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {lang.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{lang.description}</p>

                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-sm">
                  <span className="font-medium text-foreground">{lang.levels}</span>
                  <span className="text-muted-foreground">{lang.exam}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary mb-3">Ready to start?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Choose your language today</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a free consultation with our counsellors to find the right program for your goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Free Assessment
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
