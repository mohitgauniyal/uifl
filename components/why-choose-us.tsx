import { CheckCircle2, Users, BookOpen, Globe, Clock, Award, Check } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expert Faculty',
    description: 'Native speakers and certified instructors, each with 10+ years of teaching experience.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Syllabi aligned to international standards — DELF, Goethe, JLPT, HSK and more.',
  },
  {
    icon: Globe,
    title: 'Online & Classroom',
    description: 'Join live online classes or attend in person at our Rajpur Road centre in Dehradun.',
  },
  {
    icon: Clock,
    title: 'Fast-Track Programs',
    description: 'Intensive tracks for students who need to reach a level or clear an exam quickly.',
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description: 'An average of 6–8 students per batch so every learner gets individual attention.',
  },
  {
    icon: CheckCircle2,
    title: 'Proven Results',
    description: 'A 95%+ success rate across international certifications, year after year.',
  },
]

const included = [
  'Personalised learning path',
  'Regular progress assessments',
  'Exam preparation workshops',
  'Cultural immersion sessions',
  'Career & study-abroad counselling',
  'Course materials provided',
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary mb-2">Why Unique Institute</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            A quarter century of language education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Established in 1998, we have trained everyone from school students to
            working professionals — with a method built on structure, small
            batches and measurable progress.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="rounded-xl border border-border bg-card p-7">
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* What's included */}
        <div className="mt-8 rounded-xl border border-border bg-card p-8 lg:p-10">
          <h3 className="font-semibold text-foreground mb-6">Every course includes</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check size={13} className="text-primary" />
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
