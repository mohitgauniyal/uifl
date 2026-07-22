'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import { VideoCard } from '@/components/resources/video-card'
import { FeatureList } from '@/components/feature-list'
import youtubeVideos from '@/lib/data/youtube-videos.json'

const learningResources = [
  { title: 'Grammar guides', description: 'Comprehensive grammatical explanations with examples for all levels.' },
  { title: 'Vocabulary lists', description: 'Organised vocabulary by topic, level and frequency.' },
  { title: 'Reading materials', description: 'Level-appropriate texts, articles and short stories.' },
  { title: 'Audio lessons', description: 'Native-speaker pronunciation and listening comprehension.' },
  { title: 'Writing samples', description: 'Example essays, letters and compositions with feedback.' },
  { title: 'Conversation scripts', description: 'Realistic dialogues for everyday situations.' },
]

export default function ResourcesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  const languages = useMemo(() => {
    const langs = new Set(youtubeVideos.map((v) => v.language))
    return ['All', ...Array.from(langs).sort()]
  }, [])

  const filteredVideos = useMemo(() => {
    if (selectedLanguage === 'All') return youtubeVideos
    return youtubeVideos.filter((v) => v.language === selectedLanguage)
  }, [selectedLanguage])

  const featuredVideo = youtubeVideos[0]
  const featuredId = featuredVideo?.youtubeLink.split('v=')[1]?.split('&')[0] || ''

  return (
    <main>
      <Navigation />

      <PageHeader
        eyebrow="Learning resources"
        title="Tutorials, guides and practice materials"
        description="A growing library of video lessons and self-study materials from our expert instructors."
      />

      {/* Video tutorials */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold text-primary mb-2">From our channel</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Video tutorials</h2>
          </div>

          {/* Featured video */}
          {featuredVideo && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              <button
                type="button"
                onClick={() => window.open(featuredVideo.youtubeLink, '_blank')}
                className="group lg:col-span-2 relative block overflow-hidden rounded-xl border border-border bg-black text-left"
              >
                <div className="aspect-video relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${featuredId}/hqdefault.jpg`}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <PlayCircle size={34} className="text-primary-foreground fill-current" />
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-16">
                  <span className="inline-block text-xs font-semibold text-white/80 mb-2">
                    Featured lesson · {featuredVideo.language}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{featuredVideo.title}</h3>
                </div>
              </button>

              <div className="flex flex-col justify-center gap-6 rounded-xl border border-border bg-card p-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">A note from our teachers</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Visual learning is one of the most effective ways to grasp pronunciation and grammar.
                    Our channel is dedicated to making these topics simple and accessible for everyone.
                  </p>
                </div>
                <Button className="w-full" onClick={() => window.open('https://www.youtube.com/@UILF', '_blank')}>
                  Subscribe to our channel
                </Button>
              </div>
            </div>
          )}

          {/* Filters + grid */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h3 className="text-xl font-semibold text-foreground">Browse by language</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    selectedLanguage === lang
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16 bg-muted/40 rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground">No videos found for this language.</p>
            </div>
          )}
        </div>
      </section>

      {/* Learning materials */}
      <section className="py-20 lg:py-24 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureList
            eyebrow="Self-study"
            title="Learning materials"
            intro="Available across all seven languages, for practice between classes."
            items={learningResources}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
