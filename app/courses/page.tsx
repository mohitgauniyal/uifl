import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

const languages = [
  {
    id: 'french',
    name: 'French',
    icon: '🇫🇷',
    description: 'Master French with DELF certification preparation',
    levels: 'A1 - C1',
    popular: true,
    students: 240,
  },
  {
    id: 'german',
    name: 'German',
    icon: '🇩🇪',
    description: 'Learn German for business, culture, and Goethe certification',
    levels: 'A1 - C1',
    popular: true,
    students: 180,
  },
  {
    id: 'spanish',
    name: 'Spanish',
    icon: '🇪🇸',
    description: 'Spanish language with DELE exam preparation included',
    levels: 'A1 - C1',
    popular: true,
    students: 210,
  },
  {
    id: 'japanese',
    name: 'Japanese',
    icon: '🇯🇵',
    description: 'Japanese language and culture with JLPT preparation',
    levels: 'N5 - N1',
    popular: false,
    students: 160,
  },
  {
    id: 'russian',
    name: 'Russian',
    icon: '🇷🇺',
    description: 'Russian language including literature and business communication',
    levels: 'A1 - C1',
    popular: false,
    students: 95,
  },
  {
    id: 'english',
    name: 'English',
    icon: '🇬🇧',
    description: 'English proficiency with TOEFL and IELTS preparation',
    levels: 'A1 - C1',
    popular: true,
    students: 320,
  },
  {
    id: 'chinese',
    name: 'Chinese',
    icon: '🇨🇳',
    description: 'Mandarin Chinese with HSK certification pathway',
    levels: 'HSK 1-5',
    popular: false,
    students: 140,
  },
]

const learningTracks = [
  {
    title: 'Exam Preparation',
    description: 'Focused training for international language certifications',
    icon: '📝',
  },
  {
    title: 'Conversation & Fluency',
    description: 'Real-world communication skills and cultural context',
    icon: '💬',
  },
  {
    title: 'Business Communication',
    description: 'Professional vocabulary and corporate interaction training',
    icon: '💼',
  },
  {
    title: 'Kids & Teens',
    description: 'Age-appropriate learning programs for younger students',
    icon: '👶',
  },
]

export default function CoursesPage() {
  const popularLanguages = languages.filter(l => l.popular)
  const allLanguages = languages
  
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">Course Catalog</p>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Seven Languages, Endless Possibilities
            </h1>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
              Explore our complete language programs designed to take you from beginner to fluency, with professional certification options.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Tracks Overview */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">How We Teach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Multiple Learning Paths</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningTracks.map((track, idx) => (
              <div
                key={idx}
                className="group p-6 border border-border rounded-xl hover:border-primary/50 transition-colors bg-gradient-to-br from-background to-muted hover:shadow-md"
              >
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {track.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Languages */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">Most Popular</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Top Courses This Year</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularLanguages.map((lang, idx) => (
              <Link
                key={lang.id}
                href={`/languages/${lang.id}`}
                className="group relative bg-gradient-to-br from-white to-muted/20 border-2 border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/60 transition-all duration-300 overflow-hidden hover:-translate-y-2"
                style={{ animation: `fade-in-up 0.6s ease-out ${idx * 0.1}s backwards` }}
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="relative space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="text-7xl group-hover:scale-110 transition-transform duration-300">{lang.icon}</div>
                    <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 text-secondary text-xs font-bold px-4 py-2 rounded-full">
                      {lang.students}+ students
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {lang.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-lg">{lang.levels}</span>
                    <ArrowRight size={20} className="text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Languages */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">All Languages Available</h2>
          </div>
          
          <div className="space-y-4">
            {allLanguages.map((lang, idx) => (
              <Link
                key={lang.id}
                href={`/languages/${lang.id}`}
                className="group relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative z-10 flex items-center justify-between p-6 sm:p-8 bg-gradient-to-r from-white to-muted/10 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all">
                  <div className="flex items-center gap-6 flex-1">
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-300 ease-out">{lang.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mr-3">Levels {lang.levels}</span>
                        <span>{lang.students}+ students</span>
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs text-secondary font-semibold">Explore</p>
                      <ArrowRight size={24} className="text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>

                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-secondary tracking-wide uppercase">Ready to start?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Choose Your Language Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a free consultation with our language counselors to find the right program for your goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <Link href="/contact">
                <BookOpen size={20} className="mr-2" />
                Start Learning
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-muted bg-transparent border-2"
              asChild
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
