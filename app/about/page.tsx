import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Trophy, Users, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About Unique Institute
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            25+ Years of Excellence in Language Education
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower learners worldwide with professional language skills that open doors to personal growth, academic success, and career advancement. We believe language learning transcends grammar and vocabulary—it&apos;s about building bridges across cultures and communities.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the most trusted and innovative language education institution in India, recognized for producing fluent, confident, and culturally aware language learners who excel in international exams and real-world communication.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Trophy, label: 'Excellence', value: '25+ Years' },
                { icon: Users, label: 'Students', value: '5000+' },
                { icon: Globe, label: 'Languages', value: '7' },
                { icon: Award, label: 'Success Rate', value: '95%+' },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={idx}
                    className="border-border overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10"
                  >
                    <div className="p-8 flex flex-col items-center text-center space-y-3">
                      <Icon size={32} className="text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>

          <div className="space-y-8">
            {[
              {
                year: '1999',
                title: 'Foundation',
                description: 'Unique Institute of Foreign Languages was established with a vision to provide world-class language education in Dehradun. Starting with just French and Spanish courses.',
              },
              {
                year: '2005',
                title: 'Expansion to New Languages',
                description: 'Added German, Russian, and English programs. Recognized by language proficiency exam boards for exam preparation courses.',
              },
              {
                year: '2010',
                title: 'Online Learning Launch',
                description: 'Pioneered online language learning in the region, making quality education accessible across India and internationally.',
              },
              {
                year: '2015',
                title: 'Japanese & Chinese Programs',
                description: 'Introduced Japanese (JLPT) and Mandarin Chinese (HSK) programs to meet growing demand for Asian languages.',
              },
              {
                year: '2018',
                title: '5000+ Students Milestone',
                description: 'Celebrated training our 5000th student and maintaining 95%+ success rate in international language exams.',
              },
              {
                year: '2023',
                title: 'Modern Facilities & Expert Faculty',
                description: 'Upgraded to state-of-the-art classroom facilities and expanded faculty team with certified, native-speaking instructors.',
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8 pb-8 border-b border-border last:border-0">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left - Image area */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 aspect-square flex items-center justify-center border border-border">
                <span className="text-7xl">👨‍🏫</span>
              </div>
            </div>

            {/* Right - Message */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Director&apos;s Message</h2>
                <p className="text-lg text-primary font-semibold">Dr. Rajesh Kumar, Founder & Director</p>
              </div>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  When I founded Unique Institute in 1999, my vision was simple yet profound: to make quality language education accessible to everyone who dreamed of mastering a foreign language. Over the past 25 years, witnessing thousands of students transform their lives through language learning has been the greatest reward.
                </p>
                <p>
                  Language is not just a subject to study—it&apos;s a gateway to new worlds, cultures, and opportunities. Every student who walks through our doors brings unique aspirations, and our commitment has always been to help them achieve those goals with personalized attention and expert guidance.
                </p>
                <p>
                  Today, with seven languages, expert faculty, and both classroom and online learning options, we stand as a beacon of excellence in language education. Our 95%+ success rate in international exams and the confidence we see in our students&apos; speech is a testament to our methodology and dedication.
                </p>
                <p>
                  I invite you to join our community and experience the transformative power of language learning at Unique Institute. Together, let&apos;s bridge continents and cultures.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/contact">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in teaching, curriculum design, and student outcomes.',
                icon: '⭐',
              },
              {
                title: 'Accessibility',
                description: 'Quality education should be available to everyone, through flexible timing and online options.',
                icon: '🌍',
              },
              {
                title: 'Personalization',
                description: 'Every student is unique. We tailor our approach to individual learning styles and goals.',
                icon: '👤',
              },
              {
                title: 'Cultural Respect',
                description: 'Language learning includes understanding and respecting the culture behind the language.',
                icon: '🤝',
              },
            ].map((value, idx) => (
              <Card key={idx} className="border-border overflow-hidden bg-background">
                <div className="p-8 space-y-4 text-center">
                  <div className="text-5xl mb-2">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Join Our Community of Learners
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the unique difference that 25+ years of expertise can make in your language learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent" asChild>
              <Link href="/contact">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
