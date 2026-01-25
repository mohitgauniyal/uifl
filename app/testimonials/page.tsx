import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Gupta',
    category: 'Student - DELF Exam',
    language: 'French',
    text: 'Unique Institute completely transformed my French learning. Within 6 months, I went from zero to DELF B1. The instructors are incredibly patient and the teaching methodology is excellent. I highly recommend them!',
    rating: 5,
    location: 'Dehradun',
  },
  {
    name: 'Arjun Singh',
    category: 'Working Professional',
    language: 'German',
    text: 'I needed business German for my job, and the institute delivered exactly what I needed. Flexible timings, practical lessons, and professional instructors made it so easy to balance work and studies.',
    rating: 5,
    location: 'Delhi',
  },
  {
    name: 'Anjali Patel',
    category: 'Student - JLPT Exam',
    language: 'Japanese',
    text: 'Learning Japanese was challenging, but the faculty at Unique Institute made it manageable. Their focus on kanji and grammar sequencing really helped. I cleared JLPT N3 on my first attempt!',
    rating: 5,
    location: 'Mumbai',
  },
  {
    name: 'Rohit Sharma',
    category: 'University Student',
    language: 'Spanish',
    text: 'Great experience! The conversational Spanish classes really boosted my confidence. I can now speak fluently and even helped my classmates. The online classes were perfect for my schedule.',
    rating: 5,
    location: 'Bangalore',
  },
  {
    name: 'Meera Kapoor',
    category: 'Parent - Children\'s Course',
    language: 'French',
    text: 'My daughter loves her French classes. The teachers make learning fun and interactive. She\'s not only learning the language but also about French culture. Highly satisfied!',
    rating: 5,
    location: 'Dehradun',
  },
  {
    name: 'Vikram Desai',
    category: 'IELTS Candidate',
    language: 'English',
    text: 'The IELTS coaching was outstanding. Structured lessons, mock exams, and personalized feedback really helped me achieve a band 7.5. The institute\'s commitment to student success is unmatched.',
    rating: 5,
    location: 'Pune',
  },
  {
    name: 'Neha Mishra',
    category: 'HSK Preparation',
    language: 'Chinese',
    text: 'Mandarin seemed impossible before, but the methodical approach to characters and tones made it click. I passed HSK 2 and planning to continue. Excellent institute!',
    rating: 5,
    location: 'Delhi',
  },
  {
    name: 'Sanjay Tiwari',
    category: 'Corporate Training',
    language: 'English & German',
    text: 'We enrolled our team for corporate language training. The customized curriculum and professional instructors transformed our communication abilities. Great ROI for our investment.',
    rating: 5,
    location: 'Dehradun',
  },
  {
    name: 'Divya Nair',
    category: 'Competitive Exam',
    language: 'Russian',
    text: 'I needed Russian for my university entrance exam. The intensive 3-month program covered everything I needed. The faculty\'s support and regular assessments ensured I was exam-ready.',
    rating: 5,
    location: 'Kerala',
  },
  {
    name: 'Rajesh Kumar',
    category: 'Traveler',
    language: 'Multiple Languages',
    text: 'I took conversational courses in French and Spanish for my travels. The practical, travel-focused lessons and small batch sizes made learning so engaging and useful!',
    rating: 5,
    location: 'Dehradun',
  },
  {
    name: 'Komal Singh',
    category: 'Student - GOETHE Exam',
    language: 'German',
    text: 'The Goethe certification was my goal, and the institute provided perfect preparation. Clear structure, mock exams, and expert feedback. Passed B2 on first attempt!',
    rating: 5,
    location: 'Chandigarh',
  },
  {
    name: 'Aditya Verma',
    category: 'Online Learner',
    language: 'French',
    text: 'Living abroad and still wanted to learn French. The online classes were seamless, interactive, and the instructors were always available for doubt clearance. Perfect experience!',
    rating: 5,
    location: 'USA',
  },
]

export default function TestimonialsPage() {
  const avgRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Student Testimonials
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Real stories from students who transformed their language skills
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{testimonials.length}+</p>
              <p className="text-sm text-muted-foreground">Happy Students</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{avgRating}</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Success Stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className="overflow-hidden border-border hover:shadow-lg transition-all duration-300 flex flex-col bg-gradient-to-br from-background to-muted/30"
              >
                <div className="p-8 flex flex-col h-full space-y-4">
                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-accent text-accent"
                        />
                      ))}
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed flex-1 italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {testimonial.language}
                      </span>
                      <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Video Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sakshi Sharma', language: 'French', exam: 'DELF B2' },
              { name: 'Amit Verma', language: 'German', exam: 'Goethe B1' },
              { name: 'Lisa Chen', language: 'Chinese', exam: 'HSK 3' },
            ].map((video, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden cursor-pointer border border-border hover:shadow-lg transition-all"
              >
                <div className="aspect-video flex items-center justify-center text-6xl">
                  🎥
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                  <p className="font-semibold">{video.name}</p>
                  <p className="text-sm text-gray-200">
                    {video.language} - {video.exam}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-secondary/5 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl font-bold text-foreground">
            Start Your Success Story Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of successful language learners who have transformed their skills at Unique Institute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors">
              Enroll Now
            </button>
            <button className="px-8 py-3 border border-border hover:bg-muted text-foreground rounded-lg font-semibold transition-colors">
              Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
