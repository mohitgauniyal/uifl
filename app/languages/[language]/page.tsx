'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { MediaFrame } from '@/components/media-frame'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Flag } from '@/components/flag'
import { FeatureList } from '@/components/feature-list'
import { IntroVideo } from '@/components/intro-video'
import { VideoCard } from '@/components/resources/video-card'
import youtubeVideos from '@/lib/data/youtube-videos.json'
import { use, useState } from 'react'

const languageData: Record<string, any> = {
  french: {
    language: 'French', greeting: 'Bonjour', tagline: 'Parlez français avec confiance',
    description: 'Learn French in Dehradun for study and immigration to Canada and France, or for global careers. Our DELF and DALF coaching builds real speaking skills and takes you from beginner to advanced — at our Dehradun centre or online.',
    levels: [{ code: 'A1', title: 'Beginner', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3–4 mo', topics: 5 }, { code: 'B2', title: 'Upper Intermediate', duration: '3–4 mo', topics: 4 }, { code: 'C1', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'DELF Exam Prep', desc: 'All levels with mock tests', duration: '6–10 weeks' }, { title: 'Conversational', desc: 'Real-world communication', duration: '8–12 weeks' }, { title: 'Business French', desc: 'Professional communication', duration: '10–12 weeks' }, { title: 'Kids Program', desc: 'Ages 6–12, interactive', duration: 'Flexible' }],
  },
  german: {
    language: 'German', greeting: 'Guten Tag', tagline: 'Sprechen Sie Deutsch mit Zuversicht',
    description: 'Learn German in Dehradun for higher studies, jobs, and vocational training in Germany. Our Goethe-Zertifikat coaching focuses on speaking and exam success, from beginner to advanced — in class or live online.',
    levels: [{ code: 'A1', title: 'Beginner', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3–4 mo', topics: 5 }, { code: 'B2', title: 'Upper Intermediate', duration: '3–4 mo', topics: 4 }, { code: 'C1', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'Goethe Exam', desc: 'All certification levels', duration: '6–10 weeks' }, { title: 'Business German', desc: 'Corporate communication', duration: '10–12 weeks' }, { title: 'Conversational', desc: 'Everyday fluency', duration: '8–12 weeks' }, { title: 'Cultural Course', desc: 'German culture & history', duration: '6 weeks' }],
  },
  spanish: {
    language: 'Spanish', greeting: 'Hola', tagline: 'Habla español con confianza',
    description: 'Learn Spanish in Dehradun for travel, business, and connecting across Latin America and Spain. Our DELE preparation blends everyday conversation with exam practice, from beginner to advanced — at our centre or online.',
    levels: [{ code: 'A1', title: 'Beginner', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3–4 mo', topics: 5 }, { code: 'B2', title: 'Upper Intermediate', duration: '3–4 mo', topics: 4 }, { code: 'C1', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'DELE Exam Prep', desc: 'All levels certified', duration: '6–10 weeks' }, { title: 'Latin American', desc: 'Regional variations', duration: '8 weeks' }, { title: 'Conversational', desc: 'Practical communication', duration: '8–12 weeks' }, { title: 'Business Spanish', desc: 'Professional skills', duration: '10 weeks' }],
  },
  japanese: {
    language: 'Japanese', greeting: 'こんにちは', tagline: '日本語を話す',
    description: 'Learn Japanese in Dehradun for study and work in Japan, and for careers in the IT and automobile sectors. Our JLPT coaching covers script, grammar, and conversation from beginner (N5) to advanced (N1) — in class or online.',
    levels: [{ code: 'N5', title: 'Beginner', duration: '3 mo', topics: 4 }, { code: 'N4', title: 'Elementary', duration: '3 mo', topics: 4 }, { code: 'N3', title: 'Intermediate', duration: '4 mo', topics: 5 }, { code: 'N2', title: 'Upper Intermediate', duration: '4 mo', topics: 5 }, { code: 'N1', title: 'Advanced', duration: '5 mo', topics: 5 }],
    tracks: [{ title: 'JLPT Prep', desc: 'All levels N5–N1', duration: '12–20 weeks' }, { title: 'Cultural', desc: 'Art, tradition & food', duration: '6 weeks' }, { title: 'Conversational', desc: 'Daily communication', duration: '8–12 weeks' }, { title: 'Business Japanese', desc: 'Professional context', duration: '10 weeks' }],
  },
  russian: {
    language: 'Russian', greeting: 'Привет', tagline: 'Говорите по-русски с уверенностью',
    description: 'Learn Russian in Dehradun for medical and higher studies in Russia, and for business communication. Our TORFL preparation covers reading, writing, and speaking from beginner to advanced — at our centre or live online.',
    levels: [{ code: 'A1', title: 'Beginner', duration: '3 mo', topics: 4 }, { code: 'A2', title: 'Elementary', duration: '3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '4 mo', topics: 5 }, { code: 'B2', title: 'Upper Intermediate', duration: '4 mo', topics: 5 }],
    tracks: [{ title: 'Literature Focus', desc: 'Russian classics', duration: '8 weeks' }, { title: 'Business Russian', desc: 'Corporate training', duration: '10 weeks' }, { title: 'Conversational', desc: 'Everyday fluency', duration: '10–12 weeks' }, { title: 'Intensive', desc: 'Fast-track program', duration: '6 weeks' }],
  },
  english: {
    language: 'English', greeting: 'Hello', tagline: 'Speak English fluently',
    description: 'Learn English in Dehradun for IELTS and TOEFL, and to speak confidently for study, work, and travel abroad. Our coaching improves spoken and written English and prepares you for the score you need — in class or online.',
    levels: [{ code: 'A1', title: 'Beginner', duration: '2–3 mo', topics: 4 }, { code: 'A2', title: 'Elementary', duration: '2–3 mo', topics: 4 }, { code: 'B1', title: 'Intermediate', duration: '3 mo', topics: 5 }, { code: 'B2', title: 'Upper Intermediate', duration: '3 mo', topics: 5 }, { code: 'C1', title: 'Advanced', duration: '4 mo', topics: 5 }],
    tracks: [{ title: 'TOEFL Prep', desc: 'Academic English', duration: '8–12 weeks' }, { title: 'IELTS Prep', desc: 'All modules', duration: '8–12 weeks' }, { title: 'Spoken English', desc: 'Confidence & fluency', duration: '6–10 weeks' }, { title: 'Business English', desc: 'Professional skills', duration: '8 weeks' }],
  },
  chinese: {
    language: 'Chinese', greeting: '你好', tagline: '说普通话',
    description: 'Learn Mandarin Chinese in Dehradun for business, trade, and career growth across Asia. Our HSK coaching builds tones, characters, and everyday conversation from beginner to advanced — at our centre or live online.',
    levels: [{ code: 'HSK1', title: 'Beginner', duration: '2–3 mo', topics: 3 }, { code: 'HSK2', title: 'Elementary', duration: '2–3 mo', topics: 3 }, { code: 'HSK3', title: 'Intermediate', duration: '3–4 mo', topics: 4 }, { code: 'HSK4', title: 'Upper Intermediate', duration: '3–4 mo', topics: 4 }, { code: 'HSK5', title: 'Advanced', duration: '4–5 mo', topics: 5 }],
    tracks: [{ title: 'HSK Certification', desc: 'All levels HSK1–5', duration: '8–16 weeks' }, { title: 'Conversational', desc: 'Practical communication', duration: '10 weeks' }, { title: 'Business Chinese', desc: 'Professional context', duration: '10 weeks' }, { title: 'Cultural Immersion', desc: 'Heritage & customs', duration: '6 weeks' }],
  },
}

const levelSummaries: Record<string, string> = {
  A1: 'Understand and use everyday expressions and very basic phrases to introduce yourself and handle simple, concrete needs.',
  A2: 'Communicate in simple, routine tasks and describe your background, immediate environment and matters of immediate need.',
  B1: 'Handle most situations while travelling, describe experiences and events, and give brief reasons and explanations.',
  B2: 'Interact with fluency and spontaneity, and produce clear, detailed text on a wide range of subjects.',
  C1: 'Express ideas fluently and spontaneously, and use the language flexibly for social, academic and professional purposes.',
  N5: 'Understand basic Japanese — simple phrases, hiragana, katakana and everyday expressions.',
  N4: 'Understand basic Japanese used in everyday situations, with essential kanji and grammar.',
  N3: 'Understand Japanese used in everyday situations, bridging basic and advanced use.',
  N2: 'Understand Japanese used in a variety of everyday and some formal or work situations.',
  N1: 'Understand Japanese across a broad range of situations, including abstract and complex topics.',
  HSK1: 'Understand and use very simple Chinese words and phrases to meet basic needs.',
  HSK2: 'Communicate simply and directly on familiar, everyday topics.',
  HSK3: 'Handle most situations in daily life, study and work in Chinese.',
  HSK4: 'Discuss a wide range of topics and communicate fluently with native speakers.',
  HSK5: 'Read newspapers and magazines, enjoy films, and give full, structured speeches in Chinese.',
}

const levelSummary = (code: string) =>
  levelSummaries[code] ?? 'Structured learning outcomes appropriate to this level.'

export default function LanguagePage({ params }: { params: Promise<{ language: string }> }) {
  const { language } = use(params)
  const [selectedLevel, setSelectedLevel] = useState(0)
  const data = languageData[language]

  // Real lessons for this language from our channel. When none exist yet
  // (e.g. Japanese, Chinese), the hero keeps its classroom placeholder and the
  // video section is skipped — add a video with this `language` tag to light it up.
  const langVideos = data ? youtubeVideos.filter((v) => v.language === data.language) : []
  const featuredVideo = langVideos[0]
  const moreVideos = langVideos.slice(1, 7)

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
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {data.language} Classes <span className="text-primary">in Dehradun</span>
              </h1>
              <p className="text-lg text-primary font-medium">{data.tagline}</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{data.description}</p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Enroll Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            {featuredVideo ? (
              <IntroVideo
                videoUrl={featuredVideo.youtubeLink}
                label={`${data.language} lesson`}
                caption={featuredVideo.title}
              />
            ) : (
              <MediaFrame aspect="aspect-[4/3]" label={`${data.language} classroom`} />
            )}
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

          {/* Level stepper */}
          <div className="flex flex-wrap gap-2">
            {data.levels.map((level: any, idx: number) => {
              const active = selectedLevel === idx
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedLevel(idx)}
                  className={`px-5 py-2.5 rounded-lg border text-sm font-semibold transition-colors ${
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary/40'
                  }`}
                >
                  {level.code}
                </button>
              )
            })}
          </div>

          {/* Selected level detail */}
          <div className="mt-6 rounded-xl border border-border bg-card p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h3 className="text-2xl font-bold text-foreground">
                {data.levels[selectedLevel].code} · {data.levels[selectedLevel].title}
              </h3>
              <span className="text-sm text-muted-foreground">
                Approx. {data.levels[selectedLevel].duration}
              </span>
            </div>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {levelSummary(data.levels[selectedLevel].code)}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground border-t border-border pt-5">
              <span>
                <span className="font-semibold text-foreground">{data.levels[selectedLevel].topics}</span> core topics
              </span>
              <span>
                Duration · <span className="font-semibold text-foreground">{data.levels[selectedLevel].duration}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning tracks */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureList
            eyebrow="Learning options"
            title="Specialised tracks"
            items={data.tracks.map((t: any) => ({
              title: t.title,
              description: t.desc,
              meta: `Duration · ${t.duration}`,
            }))}
          />
        </div>
      </section>

      {/* Video lessons — real content from our channel */}
      {moreVideos.length > 0 && (
        <section className="py-20 lg:py-24 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">From our channel</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Learn {data.language} with our lessons
                </h2>
              </div>
              <Button variant="outline" asChild>
                <Link href={`/resources?lang=${encodeURIComponent(data.language)}`}>
                  Browse all {data.language} lessons
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </div>
        </section>
      )}

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
              <Link href="/contact">Book a Free Demo Class</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
