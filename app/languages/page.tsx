import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Globe, Users, Award, Zap, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Languages | Unique Institute',
  description: 'Explore our 7 language programs: French, German, Spanish, Japanese, Russian, English, and Chinese. Learn about global opportunities and career advancement.',
}

const languages = [
  {
    id: 'french',
    name: 'French',
    icon: '🇫🇷',
    nativeSpeakers: '280 Million',
    countries: '29 Countries',
    description: 'The language of diplomacy, culture, and romance. French is spoken across continents and opens doors to international careers.',
    opportunities: [
      'International diplomacy and politics',
      'Fashion, cuisine, and culture industries',
      'Tourism and hospitality sectors',
      'UNESCO and international organizations',
      'Academia and research institutions',
    ],
    certifications: ['DELF', 'DALF'],
    difficulty: 'Intermediate',
    learningTime: '600-750 hours',
    stats: { speakers: '280M', fluent: '45M', learners: '100M+' },
  },
  {
    id: 'german',
    name: 'German',
    icon: '🇩🇪',
    nativeSpeakers: '135 Million',
    countries: '7 Countries',
    description: 'A language of precision, engineering, and philosophy. German is crucial for technology, business, and intellectual pursuits.',
    opportunities: [
      'Engineering and manufacturing sectors',
      'Technology and IT companies',
      'Automotive industry leadership',
      'Philosophy and academic research',
      'Music and performing arts',
    ],
    certifications: ['Goethe-Zertifikat', 'TestDaF'],
    difficulty: 'Intermediate',
    learningTime: '750-900 hours',
    stats: { speakers: '135M', fluent: '76M', learners: '50M+' },
  },
  {
    id: 'spanish',
    name: 'Spanish',
    icon: '🇪🇸',
    nativeSpeakers: '500 Million',
    countries: '21 Countries',
    description: 'The second most spoken language globally. Spanish opens opportunities across Latin America, Spain, and beyond.',
    opportunities: [
      'International business and trade',
      'Healthcare and social work',
      'Entertainment and media industries',
      'Tourism and hospitality',
      'Education and cultural exchange programs',
    ],
    certifications: ['DELE'],
    difficulty: 'Beginner-Friendly',
    learningTime: '600-750 hours',
    stats: { speakers: '500M', fluent: '460M', learners: '200M+' },
  },
  {
    id: 'japanese',
    name: 'Japanese',
    icon: '🇯🇵',
    nativeSpeakers: '125 Million',
    countries: '1 Country',
    description: 'Gateway to Japanese culture, technology, and innovation. Essential for those interested in Asia-Pacific opportunities.',
    opportunities: [
      'Technology and robotics sectors',
      'Anime, manga, and entertainment',
      'Cultural and academic exchange',
      'International business in Asia',
      'Creative industries and design',
    ],
    certifications: ['JLPT'],
    difficulty: 'Advanced',
    learningTime: '2200-2500 hours',
    stats: { speakers: '125M', fluent: '99M', learners: '3M+' },
  },
  {
    id: 'russian',
    name: 'Russian',
    icon: '🇷🇺',
    nativeSpeakers: '160 Million',
    countries: '15 Countries',
    description: 'A language of literature, science, and Eastern European culture. Russian provides insights into rich traditions.',
    opportunities: [
      'Literature and philosophy studies',
      'International diplomacy',
      'Science and space exploration',
      'Energy sector and business',
      'Cultural heritage and arts',
    ],
    certifications: ['TRKI'],
    difficulty: 'Intermediate-Advanced',
    learningTime: '900-1100 hours',
    stats: { speakers: '160M', fluent: '154M', learners: '2M+' },
  },
  {
    id: 'english',
    name: 'English',
    icon: '🇬🇧',
    nativeSpeakers: '370 Million',
    countries: '67 Countries',
    description: 'The global language of business, technology, and international communication. Essential for modern career advancement.',
    opportunities: [
      'International business and finance',
      'Information technology sector',
      'Academic and research opportunities',
      'Media, publishing, and communications',
      'Global career mobility and networking',
    ],
    certifications: ['IELTS', 'TOEFL', 'Cambridge'],
    difficulty: 'Beginner-Friendly',
    learningTime: '350-500 hours',
    stats: { speakers: '370M', fluent: '1B+', learners: '1.5B+' },
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🇨🇳',
    nativeSpeakers: '1.1 Billion',
    countries: '3 Countries',
    description: 'The most spoken language in the world. Chinese is vital for understanding Asian markets and culture.',
    opportunities: [
      'E-commerce and digital business',
      'International trade and commerce',
      'Technology and innovation sectors',
      'Tourism and cultural exchange',
      'Educational and research opportunities',
    ],
    certifications: ['HSK'],
    difficulty: 'Advanced',
    learningTime: '1500-1800 hours',
    stats: { speakers: '1.1B', fluent: '900M', learners: '50M+' },
  },
]

export default function LanguagesPage() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-4">Our Language Offerings</p>
            <h1 className="text-balance text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              Seven Gates to Global Opportunities
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Explore our comprehensive language programs and discover how each language opens unique doors to career advancement, cultural understanding, and global connections.
            </p>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((lang, idx) => (
              <Link
                key={lang.id}
                href={`/languages/${lang.id}`}
                className="group relative overflow-hidden"
              >
                <div className="bg-white border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:border-primary/60 transition-all duration-300 hover:-translate-y-2">
                  {/* Language Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-5xl mb-3">{lang.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{lang.name}</h3>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">Native Speakers</p>
                      <p className="text-sm font-bold text-foreground">{lang.nativeSpeakers}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold">Spoken In</p>
                      <p className="text-sm font-bold text-foreground">{lang.countries}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{lang.description}</p>

                  {/* Certifications */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-secondary mb-2">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {lang.certifications.map((cert) => (
                        <span key={cert} className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty & Time */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Difficulty</p>
                      <p className="text-xs font-bold text-primary">{lang.difficulty}</p>
                    </div>
                    <ArrowRight size={20} className="text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn These Languages */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Why These Languages Matter</h2>
            <p className="text-lg text-muted-foreground">
              Each language represents a gateway to unique opportunities, rich cultures, and professional advancement in different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-border rounded-2xl p-8">
              <Globe size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Global Reach</h3>
              <p className="text-sm text-muted-foreground">
                Our languages are spoken by over 3 billion people across all continents, representing diverse markets and cultures.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <Zap size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Career Growth</h3>
              <p className="text-sm text-muted-foreground">
                Multi-lingual professionals command higher salaries and have access to international job markets with better opportunities.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <Users size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Cultural Connection</h3>
              <p className="text-sm text-muted-foreground">
                Learn about rich histories, traditions, and perspectives that shape our global world. Build meaningful cross-cultural relationships.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <Award size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Certifications</h3>
              <p className="text-sm text-muted-foreground">
                Internationally recognized certifications (DELF, GOETHE, JLPT, HSK) enhance your credentials and open doors globally.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <BookOpen size={32} className="text-secondary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Academic Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Access world-class literature, research, and educational resources available only in these languages.
              </p>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8">
              <Globe size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Travel & Experiences</h3>
              <p className="text-sm text-muted-foreground">
                Connect authentically with locals, navigate new places confidently, and enrich your travel experiences significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/10 to-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Ready to Start Learning?</h2>
            <p className="text-lg text-muted-foreground">
              Choose any language and begin your journey with Unique Institute's comprehensive programs and expert instructors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <Link href="/courses">
                Explore All Courses
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted bg-transparent border-2"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
