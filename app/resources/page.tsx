'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import { VideoCard } from '@/components/resources/video-card'
import youtubeVideos from '@/lib/data/youtube-videos.json'

const learningResources = [
  {
    icon: '📚',
    title: 'Grammar Guides',
    description: 'Comprehensive grammatical explanations with examples for all levels',
    languages: 'All languages',
  },
  {
    icon: '🎤',
    title: 'Vocabulary Lists',
    description: 'Organized vocabulary by topic, level, and frequency',
    languages: 'All languages',
  },
  {
    icon: '📖',
    title: 'Reading Materials',
    description: 'Level-appropriate texts, articles, and short stories',
    languages: 'All languages',
  },
  {
    icon: '🔊',
    title: 'Audio Lessons',
    description: 'Native speaker pronunciations and listening comprehension exercises',
    languages: 'All languages',
  },
  {
    icon: '✍️',
    title: 'Writing Samples',
    description: 'Example essays, letters, and compositions with feedback',
    languages: 'All languages',
  },
  {
    icon: '💬',
    title: 'Conversation Scripts',
    description: 'Realistic dialogues for various real-world situations',
    languages: 'All languages',
  },
]

export default function ResourcesPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('All')

  const languages = useMemo(() => {
    const langs = new Set(youtubeVideos.map(v => v.language))
    return ['All', ...Array.from(langs).sort()]
  }, [])

  const filteredVideos = useMemo(() => {
    if (selectedLanguage === 'All') return youtubeVideos
    return youtubeVideos.filter(v => v.language === selectedLanguage)
  }, [selectedLanguage])

  // Featured video is the first one in the list (or could be randomly selected)
  const featuredVideo = youtubeVideos[0]

  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Access our comprehensive library of tutorials, guides, and learning materials to enhance your language learning journey.
          </p>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Video Tutorials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Learn from our expert instructors through high-quality video lessons covering pronunciation, grammar, and exam preparation.
            </p>
          </div>

          {/* Featured Video Highlight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2">
              <div
                className="relative group overflow-hidden rounded-3xl bg-black border border-border shadow-2xl cursor-pointer"
                onClick={() => window.open(featuredVideo.youtubeLink, '_blank')}
              >
                <div className="aspect-video relative">
                  <img
                    src={`https://img.youtube.com/vi/${featuredVideo.youtubeLink.split('v=')[1]?.split('&')[0] || ''}/maxresdefault.jpg`}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle size={40} className="text-primary-foreground fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-10 pt-20">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4 backdrop-blur-md border border-primary/30">
                    FEATURED LESSON • {featuredVideo.language.toUpperCase()}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2">
                    {featuredVideo.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8 p-6 bg-muted/30 rounded-3xl border border-border">
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-4 italic">Teacher's Note</h4>
                <p className="text-muted-foreground leading-relaxed italic">
                  "Visual learning is one of the most effective ways to grasp pronunciation and grammar nuances. Our YouTube channel is dedicated to making these complex topics simple for everyone."
                </p>
              </div>
              <div className="pt-6 border-t border-border">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                  onClick={() => window.open('https://www.youtube.com/@UILF', '_blank')}
                >
                  Subscribe to Channel
                </Button>
              </div>
            </div>
          </div>

          {/* Search & Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <h3 className="text-2xl font-black text-foreground uppercase tracking-tight">
                Browse by Language
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${selectedLanguage === lang
                        ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105'
                        : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-primary'
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-20 bg-muted/20 rounded-3xl border border-dashed border-border">
                <p className="text-muted-foreground text-lg">No videos found for this language selection.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Learning Resources Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Learning Materials</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive resources for self-study and practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningResources.map((resource, idx) => (
              <Card
                key={idx}
                className="border-border overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="p-8 space-y-4">
                  <div className="text-5xl">{resource.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{resource.description}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-semibold text-primary uppercase">{resource.languages}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
