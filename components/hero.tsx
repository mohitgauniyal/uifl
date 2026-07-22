import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { IntroVideo } from '@/components/intro-video'

// Drop a real YouTube link here (director's message / campus tour) and it
// plays inline. Until then, a clean placeholder is shown.
const INTRO_VIDEO_URL: string | undefined = undefined

const exams = ['DELF / DALF', 'Goethe-Zertifikat', 'DELE', 'JLPT', 'HSK', 'IELTS', 'TOEFL', 'TORFL']

export default function Hero() {
  return (
    <section className="relative w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: message */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Established 1998 · Dehradun &amp; Online
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground">
              Foreign language training that gets you{' '}
              <span className="text-primary">certified</span>.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Structured courses in seven languages, taught by certified
              instructors and aligned with international exam standards. In our
              Dehradun centre or live online.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="px-6" asChild>
                <Link href="/courses">
                  Explore Courses
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-6" asChild>
                <Link href="/contact">Book a Free Assessment</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              {['Exam-focused curriculum', 'Small batches (6–8)', 'Native & certified faculty'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={15} className="text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: welcome video */}
          <div className="lg:pl-4">
            <IntroVideo videoUrl={INTRO_VIDEO_URL} />
          </div>
        </div>
      </div>

      {/* Exam-certification strip — proof of legitimacy over generic numbers */}
      <div className="border-y border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center gap-x-8 gap-y-3">
            <p className="shrink-0 text-sm font-semibold text-foreground">
              Preparing students for
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {exams.map((exam) => (
                <li
                  key={exam}
                  className="text-sm font-medium text-muted-foreground whitespace-nowrap"
                >
                  {exam}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
