import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Mic2, Users, Target } from 'lucide-react'

const languages = [
  { id: 'french', name: 'French', icon: '🇫🇷', words: ['Bonjour', 'Merci', 'Amour', 'Café'] },
  { id: 'german', name: 'German', icon: '🇩🇪', words: ['Guten Tag', 'Danke', 'Liebe', 'Musik'] },
  { id: 'spanish', name: 'Spanish', icon: '🇪🇸', words: ['Hola', 'Gracias', 'Amor', 'Fuego'] },
  { id: 'japanese', name: 'Japanese', icon: '🇯🇵', words: ['こんにちは', 'ありがとう', '愛', '桜'] },
  { id: 'russian', name: 'Russian', icon: '🇷🇺', words: ['Привет', 'Спасибо', 'Любовь', 'Снег'] },
  { id: 'english', name: 'English', icon: '🇬🇧', words: ['Hello', 'Thank You', 'Love', 'Sky'] },
  { id: 'chinese', name: 'Chinese', icon: '🇨🇳', words: ['你好', '谢谢', '爱', '龙'] },
]

const categories = [
  {
    title: 'Exam Preparation',
    description: 'DELF, GOETHE, DELE, JLPT, IELTS, TOEFL - master international certifications',
    icon: Target,
    color: 'from-primary/10 to-primary/5',
  },
  {
    title: 'Conversational Fluency',
    description: 'Real-world communication skills for everyday life and travel',
    icon: Mic2,
    color: 'from-secondary/10 to-secondary/5',
  },
  {
    title: 'Group Classes',
    description: 'Learn alongside peers in our interactive group sessions',
    icon: Users,
    color: 'from-accent/10 to-accent/5',
  },
  {
    title: 'One-on-One Training',
    description: 'Personalized learning paths tailored to your specific goals',
    icon: BookOpen,
    color: 'from-primary/10 to-secondary/5',
  },
]

export default function FeaturedCourses() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-3">Choose Your Path</p>
          <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Start Your Language Journey
          </h2>
        </div>

        {/* Languages Carousel */}
        <div className="mb-24">
          <div className="relative">
            {/* Gradient masks for smooth scroll edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10"></div>

            {/* Horizontal scrollable container */}
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex gap-6 min-w-min px-4">
                {languages.map((lang, idx) => (
                  <Link
                    key={lang.id}
                    href={`/languages/${lang.id}`}
                    className="group flex-shrink-0"
                    style={{ animation: `slide-in-left 0.6s ease-out ${idx * 0.1}s backwards` }}
                  >
                    <div className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-white to-muted border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 w-40 h-56 justify-between text-center group hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 relative overflow-hidden">
                      {/* Image slider background */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 flex overflow-hidden">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="w-full h-full bg-gradient-to-b from-primary/30 to-secondary/20 flex-shrink-0"
                              style={{
                                animation: `slide-carousel 12s linear infinite`,
                                animationDelay: `${(i - 1) * 4}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-2">
                        <p className="text-xs font-bold text-secondary bg-secondary/20 px-2 py-1 rounded">
                          {lang.id.toUpperCase().slice(0, 2)}
                        </p>
                        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{lang.icon}</div>
                      </div>
                      <div className="relative z-10 space-y-2">
                        <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{lang.name}</h3>
                        <p className="text-xs text-muted-foreground font-medium">A1-C1 Levels</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Explore all 7 languages with industry-standard certifications
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12"></div>

        {/* Learning Categories */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-secondary tracking-wide uppercase mb-4">Learning Formats</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
            Multiple Ways to Learn
          </h3>
        </div>

        <div className="space-y-12 mb-12">
          {categories.map((category, idx) => {
            const Icon = category.icon
            const isEven = idx % 2 === 0

            return (
              <div
                key={idx}
                className="overflow-hidden"
                style={{ animation: isEven ? `slide-fade-in-left 0.6s ease-out ${0.2 + idx * 0.1}s backwards` : `slide-fade-in-right 0.6s ease-out ${0.2 + idx * 0.1}s backwards` }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-cols-[1fr_1fr] lg:direction-rtl'}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex gap-2 pt-4">
                      {['Expert Trainers', 'Live Sessions', 'Material Provided'].map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Image Carousel */}
                  <div className={`relative h-80 rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/5 to-secondary/5 group ${!isEven ? 'lg:order-1' : ''}`}>
                    {/* Placeholder images carousel */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="flex gap-2 justify-center mb-4">
                          {[1, 2, 3].map((i) => (
                            <button
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all ${
                                i === 1 ? 'bg-primary w-6' : 'bg-border hover:bg-primary/50'
                              }`}
                              aria-label={`View image ${i}`}
                            />
                          ))}
                        </div>
                        <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl mx-auto flex items-center justify-center animate-bounce-gentle">
                          <span className="text-6xl opacity-60">{category.icon === Target ? '📊' : category.icon === Mic2 ? '🎤' : category.icon === Users ? '👥' : '📚'}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-6">Image gallery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            asChild
          >
            <Link href="/courses">
              View All Courses
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
