import { Check } from 'lucide-react'

const pillars = [
  {
    title: 'Certified, native faculty',
    description: 'Native speakers and certified instructors, each with 10+ years of teaching experience.',
  },
  {
    title: 'Small batches of 6–8',
    description: 'Level-matched groups so every learner gets genuine individual attention.',
  },
  {
    title: 'Proven, exam-aligned results',
    description: 'A 95%+ success rate across DELF, Goethe, DELE, JLPT, HSK, IELTS and more.',
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
        <p className="text-sm font-semibold text-primary mb-4">Why Unique Institute</p>

        {/* Editorial statement */}
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] max-w-4xl">
          Small batches, certified native faculty, and a curriculum built around the exams that matter —
          <span className="text-primary"> with results to prove it.</span>
        </p>

        {/* Three supporting pillars — clean columns, single hairline divider */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`pt-6 border-t border-border md:pt-0 md:border-t-0 md:pl-8 md:border-l ${
                i === 0 ? 'md:pl-0 md:border-l-0' : ''
              }`}
            >
              <h3 className="font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-16 rounded-xl border border-border bg-card p-8 lg:p-10">
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
