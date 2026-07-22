import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { MediaFrame } from '@/components/media-frame'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Flag } from '@/components/flag'
import { FeatureList } from '@/components/feature-list'

export const metadata = {
  title: 'Our Faculty — Certified Language Instructors in Dehradun',
  description:
    'Meet the certified, native-speaking instructors at Unique Institute of Foreign Languages, Dehradun — with an average of 11+ years teaching and exam-preparation experience.',
  alternates: { canonical: '/faculty' },
}

const faculty = [
  { name: 'Marie Dupont', photo: undefined, flag: 'french', language: 'French', qualification: 'M.A. French Literature (Sorbonne University)', experience: '12 years', specialization: 'DELF preparation & advanced French', languages: ['French', 'English'] },
  { name: 'Klaus Schmidt', photo: undefined, flag: 'german', language: 'German', qualification: 'Goethe-Institut Certification (Berlin)', experience: '10 years', specialization: 'Business German & CEFR levels', languages: ['German', 'English'] },
  { name: 'Carlos López', photo: undefined, flag: 'spanish', language: 'Spanish', qualification: 'B.A. Hispanic Studies (Madrid University)', experience: '11 years', specialization: 'DELE preparation & Latin American Spanish', languages: ['Spanish', 'English', 'Portuguese'] },
  { name: 'Yuki Tanaka', photo: undefined, flag: 'japanese', language: 'Japanese', qualification: 'JLPT N1 Certified (Japan Foundation)', experience: '9 years', specialization: 'JLPT preparation & Japanese culture', languages: ['Japanese', 'English'] },
  { name: 'Wei Chen', photo: undefined, flag: 'chinese', language: 'Chinese (Mandarin)', qualification: 'M.A. Linguistics (Beijing University)', experience: '8 years', specialization: 'HSK preparation & tone training', languages: ['Chinese', 'English'] },
  { name: 'Olga Volkov', photo: undefined, flag: 'russian', language: 'Russian', qualification: 'M.A. Russian Language & Literature (Moscow State University)', experience: '13 years', specialization: 'Russian grammar & literature', languages: ['Russian', 'English', 'German'] },
  { name: 'David Mitchell', photo: undefined, flag: 'english', language: 'English', qualification: 'TEFL/TESOL Certification (Cambridge)', experience: '15 years', specialization: 'TOEFL/IELTS & business English', languages: ['English', 'Spanish', 'French'] },
  { name: 'Priya Sharma', photo: undefined, flag: undefined, language: 'Coordination & support', qualification: 'M.A. Education (Delhi University)', experience: '14 years', specialization: 'Curriculum design & student support', languages: ['English', 'Hindi', 'Spanish'] },
]

const highlights = [
  { title: 'Native speakers', description: 'Authentic pronunciation and cultural understanding in every class.' },
  { title: 'Certified & qualified', description: 'Advanced degrees and professional certifications in language education.' },
  { title: 'Exam experts', description: 'Specialised training in DELF, Goethe, JLPT, HSK, TOEFL and IELTS.' },
  { title: 'Dedicated to students', description: 'Personalised attention, regular feedback and genuine commitment.' },
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
        title="Expert instructors, committed to your success"
        description="Native speakers and certified educators with an average of 11+ years teaching and exam preparation experience."
      />

      {/* Intro band */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-8 space-y-4">
            <h2 className="text-xl font-bold text-foreground">Passionate. Certified. Dedicated.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Each of our instructors brings unique expertise, cultural knowledge and a commitment to
              helping students reach their language goals — in the classroom and in exam preparation.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pt-2 border-t border-border">
              <span>Average experience: <span className="font-medium text-foreground">11+ years</span></span>
              <span>All faculty certified in their language</span>
              <span>Regular professional development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty grid */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member) => (
              <div key={member.name} className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
                <div className="relative">
                  <MediaFrame
                    src={member.photo}
                    alt={member.name}
                    label="Headshot"
                    aspect="aspect-square"
                    rounded="rounded-none"
                    className="border-0 border-b"
                  />
                  {!member.photo && (
                    <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-primary/70 pointer-events-none">
                      {getInitials(member.name)}
                    </span>
                  )}
                </div>

                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary mt-1 flex items-center gap-2">
                      {member.flag && <Flag code={member.flag} className="h-3.5 w-5" />}
                      {member.language}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Qualification</p>
                      <p className="text-foreground mt-0.5">{member.qualification}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Experience</p>
                        <p className="text-foreground mt-0.5">{member.experience}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Specialisation</p>
                      <p className="text-foreground mt-0.5">{member.specialization}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex flex-wrap gap-2">
                    {member.languages.map((lang) => (
                      <span key={lang} className="text-xs font-medium bg-accent text-primary rounded-full px-2.5 py-1">
                        {lang}
                      </span>
                    ))}
                  </div>
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
            eyebrow="What sets them apart"
            title="Why our faculty stands out"
            items={highlights}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Meet your future instructor</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a free consultation to discuss your goals with one of our expert faculty members.
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
