import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { CheckCircle, Clock, Users, Target } from 'lucide-react'

interface CourseLevel {
  code: string
  title: string
  duration: string
  topics: string[]
}

interface LanguageDetailProps {
  language: string
  icon: string
  description: string
  levels: CourseLevel[]
  specialTracks: {
    title: string
    description: string
    duration: string
  }[]
  syllabi: {
    level: string
    topics: string[]
  }[]
  fastTrack?: {
    duration: string
    intensity: string
    description: string
  }
}

export default function LanguageDetail({
  language,
  icon,
  description,
  levels,
  specialTracks,
  syllabi,
  fastTrack,
}: LanguageDetailProps) {
  return (
    <div>
      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-6 mb-8">
            <div className="text-6xl">{icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">{language}</h1>
              <p className="text-pretty text-lg text-muted-foreground">{description}</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-3 gap-4 py-8 border-t border-border">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Levels Available</p>
              <p className="text-2xl font-bold text-primary">{levels.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Special Tracks</p>
              <p className="text-2xl font-bold text-primary">{specialTracks.length}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Avg. Batch Size</p>
              <p className="text-2xl font-bold text-primary">6-8</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="levels" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="levels">Proficiency Levels</TabsTrigger>
              <TabsTrigger value="tracks">Special Tracks</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            </TabsList>

            {/* Levels Tab */}
            <TabsContent value="levels" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Proficiency Levels</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {levels.map((level) => (
                    <Card key={level.code} className="overflow-hidden border-border">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                        <div className="mb-6">
                          <div className="inline-flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full mb-3">
                            <span className="font-bold text-primary">{level.code}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">{level.title}</h3>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center gap-3">
                            <Clock size={18} className="text-primary flex-shrink-0" />
                            <span className="text-foreground font-medium">{level.duration}</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Target size={18} className="text-primary flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-medium text-foreground mb-2">Key Topics:</p>
                              <ul className="space-y-1">
                                {level.topics.map((topic) => (
                                  <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                                    <div className="w-1 h-1 bg-accent rounded-full"></div>
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Enroll in {level.code}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Tracks Tab */}
            <TabsContent value="tracks" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Special Learning Tracks</h2>
                <div className="space-y-4">
                  {specialTracks.map((track, idx) => (
                    <Card key={idx} className="border-border overflow-hidden hover:shadow-md transition-all">
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{track.title}</h3>
                            <p className="text-muted-foreground mt-1">{track.description}</p>
                          </div>
                          <span className="inline-flex items-center gap-2 bg-secondary/20 px-3 py-1 rounded-lg whitespace-nowrap">
                            <Clock size={16} className="text-secondary" />
                            <span className="text-sm font-medium text-secondary">{track.duration}</span>
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Comprehensive Curriculum</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {syllabi.map((syllabus, idx) => (
                    <AccordionItem key={idx} value={`level-${idx}`} className="border border-border rounded-lg px-4 overflow-hidden">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <span className="text-lg font-semibold text-foreground">{syllabus.level}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-0">
                        <div className="space-y-2 pb-4">
                          {syllabus.topics.map((topic, topicIdx) => (
                            <div key={topicIdx} className="flex items-start gap-3 pl-4">
                              <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                              <span className="text-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Fast Track CTA */}
      {fastTrack && (
        <section className="py-16 lg:py-24 bg-muted/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Fast-Track Intensive Program
                </h2>
                <p className="text-lg text-muted-foreground">
                  {fastTrack.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="text-2xl font-bold text-primary">{fastTrack.duration}</p>
                  </div>
                  <div className="bg-background border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Intensity</p>
                    <p className="text-2xl font-bold text-primary">{fastTrack.intensity}</p>
                  </div>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
                  Enroll in Fast-Track
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 border border-border">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">What's Included</h3>
                  {[
                    'Daily live interactive classes',
                    'Small batch size (max 6 students)',
                    'Comprehensive study materials',
                    'Mock exams & assessments',
                    'One-on-one coaching sessions',
                    'Exam guaranteed success support',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enrollment CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Start Learning {language}?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community of successful language learners. Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Enroll Now
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent" asChild>
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
