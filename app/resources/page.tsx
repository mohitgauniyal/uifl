import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PlayCircle, BookOpen, Headphones } from 'lucide-react'

const videoTutorials = [
  {
    id: 1,
    title: 'French Pronunciation Guide',
    language: 'French',
    category: 'Phonetics',
    duration: '8:45',
    thumbnail: '🎬',
  },
  {
    id: 2,
    title: 'German Modal Verbs Explained',
    language: 'German',
    category: 'Grammar',
    duration: '12:30',
    thumbnail: '🎬',
  },
  {
    id: 3,
    title: 'Spanish Present Tense Conjugation',
    language: 'Spanish',
    category: 'Grammar',
    duration: '10:15',
    thumbnail: '🎬',
  },
  {
    id: 4,
    title: 'Japanese Hiragana Tutorial',
    language: 'Japanese',
    category: 'Writing System',
    duration: '15:20',
    thumbnail: '🎬',
  },
  {
    id: 5,
    title: 'Chinese Tone Drills',
    language: 'Chinese',
    category: 'Pronunciation',
    duration: '9:50',
    thumbnail: '🎬',
  },
  {
    id: 6,
    title: 'English Phrasal Verbs',
    language: 'English',
    category: 'Vocabulary',
    duration: '11:05',
    thumbnail: '🎬',
  },
  {
    id: 7,
    title: 'Russian Case System Basics',
    language: 'Russian',
    category: 'Grammar',
    duration: '18:40',
    thumbnail: '🎬',
  },
  {
    id: 8,
    title: 'DELF Exam Strategy Tips',
    language: 'French',
    category: 'Exam Prep',
    duration: '7:30',
    thumbnail: '🎬',
  },
]

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

      {/* Video Tutorials Section - YouTube Style */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Video Tutorials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Learn from our expert instructors through high-quality video lessons covering pronunciation, grammar, and exam preparation
            </p>
          </div>

          {/* Main Featured Video and Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured Video - Large */}
            <div className="lg:col-span-2">
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
                <div className="aspect-video flex items-center justify-center relative">
                  <div className="text-9xl opacity-30">{videoTutorials[0].thumbnail}</div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircle size={80} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold bg-primary px-3 py-1 rounded-full">{videoTutorials[0].language}</span>
                    <span className="text-xs font-semibold">{videoTutorials[0].category}</span>
                  </div>
                  <h3 className="text-2xl font-bold">{videoTutorials[0].title}</h3>
                  <p className="text-sm text-gray-300 mt-2">Duration: {videoTutorials[0].duration}</p>
                </div>
              </div>
              <Button size="lg" className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <PlayCircle size={20} className="mr-2" />
                Watch Full Tutorial
              </Button>
            </div>

            {/* Sidebar - Next Videos */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6">Up Next</h3>
              {videoTutorials.slice(1, 4).map((video) => (
                <div key={video.id} className="group flex gap-4 cursor-pointer p-4 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex-shrink-0 flex items-center justify-center text-4xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <PlayCircle size={32} className="text-white" />
                    </div>
                    {video.thumbnail}
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <p className="text-xs font-semibold text-secondary">{video.language}</p>
                    <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
                    <p className="text-xs text-muted-foreground">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Filters and Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Browse by Category</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {['All', 'Grammar', 'Phonetics', 'Vocabulary', 'Exam Prep', 'Writing System'].map((filter) => (
                <button key={filter} className="px-4 py-2 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all text-sm font-medium text-foreground">
                  {filter}
                </button>
              ))}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTutorials.slice(0, 6).map((video) => (
                <div key={video.id} className="group overflow-hidden rounded-2xl border border-border hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                  <div className="relative bg-gradient-to-br from-primary/15 to-secondary/10 aspect-video flex items-center justify-center overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform">{video.thumbnail}</div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <PlayCircle size={56} className="text-white" />
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-secondary/20 text-secondary px-2 py-1 rounded">{video.language}</span>
                      <span className="text-xs text-muted-foreground">{video.category}</span>
                    </div>
                    <h4 className="font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
                    <p className="text-sm text-muted-foreground">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                View All {videoTutorials.length} Videos
              </Button>
            </div>
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

      {/* Study Tips Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Study Tips for Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Consistency is Key',
                description: 'Study regularly, even if for short periods. Daily practice of 30 minutes is better than weekend cramming.',
              },
              {
                title: 'Practice Speaking',
                description: 'Don\'t just read and write. Speak aloud, record yourself, and practice conversations with others.',
              },
              {
                title: 'Immerse Yourself',
                description: 'Watch movies, listen to music, and read content in your target language to build cultural understanding.',
              },
              {
                title: 'Focus on Comprehension',
                description: 'Concentrate on understanding meaning rather than translating word-by-word.',
              },
              {
                title: 'Use Context',
                description: 'Learn words and phrases in context, not isolated lists. This helps retention and practical usage.',
              },
              {
                title: 'Review Regularly',
                description: 'Use spaced repetition to review what you\'ve learned. This strengthens memory and understanding.',
              },
            ].map((tip, idx) => (
              <Card
                key={idx}
                className="border-border overflow-hidden hover:shadow-md transition-all"
              >
                <div className="p-6 space-y-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Take Your Learning Further?
          </h2>
          <p className="text-lg text-muted-foreground">
            Combine these resources with our structured courses for comprehensive language mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore Our Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted bg-transparent"
            >
              Contact for Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
