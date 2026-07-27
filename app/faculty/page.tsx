import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { MediaFrame } from '@/components/media-frame'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Flag } from '@/components/flag'
import { FeatureList } from '@/components/feature-list'

export const metadata = {
  title: 'Our Faculty — Language Instructors in Dehradun',
  description:
    'Meet the faculty at Unique Institute of Foreign Languages, Dehradun — led by director Dhananjay Dhoundiyal, teaching French, German, Spanish, Japanese, Russian, English and Chinese.',
  alternates: { canonical: '/faculty' },
}

// Real faculty. Photos: drop files at the paths below (see public/ASSETS.md).
// Bios are placeholders you can refine — replace with each instructor's real
// background whenever you like.
const faculty = [
  {
    id: 'dhananjay',
    name: 'Dhananjay Dhoundiyal',
    role: 'Director & Lead Instructor',
    photo: '/faculty/dhananjay.jpg',
    teaches: ['french', 'german', 'spanish', 'japanese', 'russian', 'english', 'chinese'],
    teachesLabel: 'All seven languages',
    bio: 'Dhananjay leads Unique Institute and teaches across all seven languages. Over more than two decades he has shaped the institute’s exam-focused method and personally guided thousands of students through DELF, Goethe, DELE, JLPT, HSK and IELTS preparation.',
  },
  {
    id: 'deekshit',
    name: 'Deekshit Rawat',
    role: 'Instructor',
    photo: '/faculty/deekshit.jpg',
    teaches: ['french', 'german', 'spanish', 'english'],
    teachesLabel: 'French · German · Spanish · English',
    bio: 'Deekshit teaches French, German, Spanish and English, taking learners from absolute beginner through advanced and exam-ready levels with a patient, conversation-first approach.',
  },
  {
    id: 'parth',
    name: 'Parth Dhoundiyal',
    role: 'Instructor',
    photo: '/faculty/parth.jpg',
    teaches: ['spanish', 'french'],
    teachesLabel: 'Spanish · French',
    bio: 'Parth teaches Spanish and French, focusing on practical fluency and steady, structured progress for students preparing for DELE and DELF.',
  },
]

const highlights = [
  { title: 'One team, seven languages', description: 'A close-knit faculty teaching French, German, Spanish, Japanese, Russian, English and Chinese under one roof.' },
  { title: 'Exam-focused teaching', description: 'Structured preparation for DELF, Goethe, DELE, JLPT, HSK, IELTS and TOEFL — with mock tests and real feedback.' },
  { title: 'Small, personal batches', description: 'Level-matched groups of 6–8, so every learner gets genuine individual attention.' },
  { title: 'Guidance beyond class', description: 'Study-abroad and exam counselling alongside day-to-day teaching.' },
]

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
}

export default function FacultyPage() {
  return (
    <main>
      <Navigation />

      <PageHeader
        eyebrow="Our faculty"
        title="The people who’ll teach you"
        description="A close-knit team led by our director, teaching all seven languages with a hands-on, exam-focused approach."
      />

      {/* Intro band */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-8 space-y-4">
            <h2 className="text-xl font-bold text-foreground">Small team. Personal attention.</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Unique Institute you learn directly from our director and a dedicated team of
              instructors — not a rotating cast of part-timers. The same faces guide you from your
              first class through to exam day.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2 border-t border-border">
              <span>Seven languages taught in-house</span>
              <span>Exam-focused preparation</span>
              <span>Classroom &amp; online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty grid */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member) => (
              <div key={member.id} className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
                <MediaFrame
                  src={member.photo}
                  alt={member.name}
                  aspect="aspect-square"
                  rounded="rounded-none"
                  className="border-0 border-b"
                  fallback={
                    <span className="text-4xl font-bold text-primary/70">{getInitials(member.name)}</span>
                  }
                />

                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mt-1">{member.role}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Teaches</p>
                    <div className="flex items-center gap-1.5">
                      {member.teaches.map((code) => (
                        <Flag key={code} code={code} className="h-4 w-6" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground mt-2">{member.teachesLabel}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureList
            eyebrow="What sets us apart"
            title="How our faculty works"
            items={highlights}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Meet your future instructor</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a free consultation to discuss your goals with our team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Book a Demo Class</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
