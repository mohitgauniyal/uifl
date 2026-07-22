import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Flag } from '@/components/flag'
import { FeatureList } from '@/components/feature-list'

const languages = [
  { id: 'french', name: 'French', greeting: 'Bonjour', exam: 'DELF · DALF' },
  { id: 'german', name: 'German', greeting: 'Guten Tag', exam: 'Goethe-Zertifikat' },
  { id: 'spanish', name: 'Spanish', greeting: 'Hola', exam: 'DELE' },
  { id: 'japanese', name: 'Japanese', greeting: 'こんにちは', exam: 'JLPT' },
  { id: 'russian', name: 'Russian', greeting: 'Привет', exam: 'TORFL' },
  { id: 'english', name: 'English', greeting: 'Hello', exam: 'IELTS · TOEFL' },
  { id: 'chinese', name: 'Chinese', greeting: '你好', exam: 'HSK' },
]

const formats = [
  {
    title: 'Exam Preparation',
    description: 'Targeted DELF, Goethe, DELE, JLPT, HSK, IELTS & TOEFL preparation with mock tests and structured feedback.',
  },
  {
    title: 'Conversational Fluency',
    description: 'Speaking-first sessions that build real-world communication for travel, work and daily life.',
  },
  {
    title: 'Group Classes',
    description: 'Small, level-matched batches of 6–8 students with interactive, guided practice.',
  },
  {
    title: 'One-on-One Training',
    description: 'Personalised learning plans built around your goals, schedule and target certification.',
  },
]

export default function FeaturedCourses() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Languages */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-primary mb-2">Languages</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Seven languages, one standard</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Every course runs A1 to C1 and maps to an internationally recognised certification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {languages.map((lang) => (
            <Link
              key={lang.id}
              href={`/languages/${lang.id}`}
              className="group bg-card p-6 flex flex-col justify-between min-h-44 hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between">
                <Flag code={lang.id} className="h-6 w-9" />
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </div>
              <div className="mt-6">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {lang.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">{lang.greeting}</p>
                <p className="text-xs text-muted-foreground mt-2">A1–C1 · {lang.exam}</p>
              </div>
            </Link>
          ))}
          {/* Trailing cell links to all languages */}
          <Link
            href="/languages"
            className="group bg-card p-6 flex flex-col justify-between min-h-44 hover:bg-accent transition-colors"
          >
            <span className="text-sm font-medium text-muted-foreground">Not sure where to start?</span>
            <span className="mt-6 inline-flex items-center gap-1 font-semibold text-primary">
              Compare all languages
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Formats — sticky heading + list */}
        <div className="mt-24">
          <FeatureList
            eyebrow="Ways to learn"
            title="Formats built around your goal"
            intro="Choose the track that fits how you learn and what you're working toward."
            items={formats}
          />
        </div>

        <div className="mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">
              View all courses
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
