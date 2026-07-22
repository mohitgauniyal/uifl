import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { MediaFrame } from '@/components/media-frame'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Trophy, Users, Globe, Award, Star, Accessibility, UserCheck, Handshake } from 'lucide-react'

const stats = [
  { icon: Trophy, label: 'Excellence', value: '25+ years' },
  { icon: Users, label: 'Students', value: '5,000+' },
  { icon: Globe, label: 'Languages', value: '7' },
  { icon: Award, label: 'Success rate', value: '95%+' },
]

const timeline = [
  { year: '1998', title: 'Foundation', description: 'Unique Institute of Foreign Languages was established in Dehradun, starting with French and Spanish courses.' },
  { year: '2005', title: 'Expansion to new languages', description: 'Added German, Russian and English programs, with exam-preparation courses aligned to international boards.' },
  { year: '2010', title: 'Online learning launch', description: 'Pioneered online language learning in the region, making quality education accessible across India and beyond.' },
  { year: '2015', title: 'Japanese & Chinese programs', description: 'Introduced Japanese (JLPT) and Mandarin Chinese (HSK) to meet growing demand for Asian languages.' },
  { year: '2018', title: '5,000+ students milestone', description: 'Trained our 5,000th student while maintaining a 95%+ success rate in international exams.' },
  { year: '2023', title: 'Modern facilities & faculty', description: 'Upgraded to modern classroom facilities and expanded our team of certified, native-speaking instructors.' },
]

const values = [
  { icon: Star, title: 'Excellence', description: 'We hold the highest standards in teaching, curriculum design and student outcomes.' },
  { icon: Accessibility, title: 'Accessibility', description: 'Quality education for everyone, through flexible timing and online options.' },
  { icon: UserCheck, title: 'Personalisation', description: 'Every student is unique. We tailor our approach to individual goals and learning styles.' },
  { icon: Handshake, title: 'Cultural respect', description: 'Language learning includes understanding and respecting the culture behind it.' },
]

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      <PageHeader
        eyebrow="About us"
        title="About Unique Institute"
        description="More than 25 years of professional language education in Dehradun."
      />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Our mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To equip learners with professional language skills that open doors to personal
                  growth, academic success and career advancement — building bridges across cultures,
                  not just teaching grammar and vocabulary.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Our vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted language education institution in the region — known for
                  producing fluent, confident and culturally aware learners who excel in international
                  exams and real-world communication.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="rounded-xl border border-border bg-card p-8 flex flex-col items-start gap-3">
                    <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary mb-2">Our journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">A quarter century of growth</h2>
          </div>

          <div className="space-y-8">
            {timeline.map((milestone) => (
              <div key={milestone.year} className="flex gap-6 sm:gap-8 pb-8 border-b border-border last:border-0">
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 bg-card text-primary font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's message */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-1">
              <MediaFrame aspect="aspect-[3/4]" label="Director's photo" />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Director&apos;s message</p>
                <h2 className="text-2xl font-bold text-foreground">Dr. Rajesh Kumar</h2>
                <p className="text-muted-foreground">Founder &amp; Director</p>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  When I founded Unique Institute in 1998, the vision was simple: to make quality
                  language education accessible to everyone who dreamed of mastering a foreign language.
                  Over the years, watching thousands of students transform their lives through language
                  has been the greatest reward.
                </p>
                <p>
                  Language is not just a subject — it is a gateway to new worlds, cultures and
                  opportunities. Every student brings unique aspirations, and our commitment has always
                  been to help them achieve those goals with personalised attention and expert guidance.
                </p>
                <p>
                  Today, with seven languages, expert faculty and both classroom and online options, we
                  stand as a trusted name in language education. Our 95%+ success rate and the confidence
                  we see in our students speak to our method and dedication.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <Button asChild>
                  <Link href="/faculty">Meet our faculty</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-primary mb-2">What we stand for</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our core values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="rounded-xl border border-border bg-card p-8">
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Join our community of learners</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the difference that more than 25 years of expertise makes in your language journey.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/courses">Explore Courses</Link>
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
