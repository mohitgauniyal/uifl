import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Mail } from 'lucide-react'

const faculty = [
  {
    name: 'Marie Dupont',
    language: 'French',
    qualification: 'M.A. French Literature (Sorbonne University)',
    experience: '12 years',
    specialization: 'DELF Preparation & Advanced French',
    bio: 'Native French speaker from Paris with extensive experience in exam preparation and conversational fluency.',
    languages: ['French', 'English'],
    icon: '🇫🇷',
  },
  {
    name: 'Klaus Schmidt',
    language: 'German',
    qualification: 'Goethe Institute Certification (Berlin)',
    experience: '10 years',
    specialization: 'Business German & CEFR Levels',
    bio: 'Certified Goethe instructor specializing in professional German communication and exam readiness.',
    languages: ['German', 'English'],
    icon: '🇩🇪',
  },
  {
    name: 'Carlos López',
    language: 'Spanish',
    qualification: 'B.A. Hispanic Studies (Madrid University)',
    experience: '11 years',
    specialization: 'DELE Preparation & Latin American Spanish',
    bio: 'Passionate educator from Mexico bringing authentic Spanish culture and communication skills to every lesson.',
    languages: ['Spanish', 'English', 'Portuguese'],
    icon: '🇪🇸',
  },
  {
    name: 'Yuki Tanaka',
    language: 'Japanese',
    qualification: 'JLPT N1 Certified (Japan Foundation)',
    experience: '9 years',
    specialization: 'JLPT Preparation & Japanese Culture',
    bio: 'Native Japanese instructor with deep knowledge of kanji, grammar, and cultural nuances essential for fluency.',
    languages: ['Japanese', 'English'],
    icon: '🇯🇵',
  },
  {
    name: 'Wei Chen',
    language: 'Chinese (Mandarin)',
    qualification: 'M.A. Linguistics (Beijing University)',
    experience: '8 years',
    specialization: 'HSK Preparation & Tone Training',
    bio: 'Mandarin expert skilled in pinyin system, character recognition, and business Chinese communication.',
    languages: ['Chinese', 'English'],
    icon: '🇨🇳',
  },
  {
    name: 'Olga Volkov',
    language: 'Russian',
    qualification: 'M.A. Russian Language & Literature (Moscow State University)',
    experience: '13 years',
    specialization: 'Russian Grammar & Literature Analysis',
    bio: 'Specialist in Russian case system and literature, bringing depth and authenticity to language instruction.',
    languages: ['Russian', 'English', 'German'],
    icon: '🇷🇺',
  },
  {
    name: 'David Mitchell',
    language: 'English',
    qualification: 'TEFL/TESOL Certification (Cambridge)',
    experience: '15 years',
    specialization: 'TOEFL/IELTS & Business English',
    bio: 'Experienced English educator with expertise in exam preparation and professional communication skills.',
    languages: ['English', 'Spanish', 'French'],
    icon: '🇬🇧',
  },
  {
    name: 'Priya Sharma',
    language: 'Hindi & Language Coordination',
    qualification: 'M.A. Education (Delhi University)',
    experience: '14 years',
    specialization: 'Curriculum Design & Student Support',
    bio: 'Dedicated coordinator ensuring personalized learning paths and consistent quality across all programs.',
    languages: ['English', 'Hindi', 'Spanish'],
    icon: '🇮🇳',
  },
]

export default function FacultyPage() {
  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Faculty
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Expert instructors committed to your language learning success
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-border p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Passionate. Certified. Dedicated.</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members are native speakers and certified language educators with years of experience in both classroom teaching and exam preparation. Each instructor brings unique expertise, cultural knowledge, and a commitment to helping students achieve their language goals.
            </p>
            <p className="text-muted-foreground">
              Average experience: 11+ years | All faculty certified in their respective languages | Regular professional development
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-border hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center h-40">
                  <div className="text-6xl">{member.icon}</div>
                </div>

                <div className="flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold mt-1">{member.language}</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Experience</p>
                      <p className="text-foreground">{member.experience}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase">Specialization</p>
                      <p className="text-foreground text-sm">{member.specialization}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground line-clamp-2">{member.bio}</p>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs font-semibold text-primary uppercase mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((lang) => (
                        <span
                          key={lang}
                          className="text-xs bg-primary/10 text-primary rounded px-2 py-1"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Our Faculty Stands Out</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Native Speakers',
                description: 'All faculty are native speakers ensuring authentic pronunciation and cultural understanding.',
                icon: '🗣️',
              },
              {
                title: 'Certified & Qualified',
                description: 'Advanced degrees and professional certifications in language education and their respective fields.',
                icon: '🎓',
              },
              {
                title: 'Exam Experts',
                description: 'Specialized training in international exams (DELF, GOETHE, JLPT, HSK, TOEFL, IELTS).',
                icon: '📝',
              },
              {
                title: 'Dedicated to Students',
                description: 'Personalized attention, regular feedback, and commitment to individual student success.',
                icon: '💡',
              },
            ].map((highlight, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="text-5xl mb-2">{highlight.icon}</div>
                <h3 className="text-lg font-bold text-foreground">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Meet Your Future Instructor
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a free consultation to discuss your learning goals with one of our expert faculty members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
                Schedule Demo Class
              </button>
              <button className="px-8 py-3 border border-border hover:bg-muted text-foreground rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Mail size={18} />
                Contact Faculty
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
