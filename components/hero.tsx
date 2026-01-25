import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(99, 102, 241, 0.2) 100%)',
        }}
      >
        <source src="https://videos.pexels.com/video-files/3571200/3571200-sd_640_360_30fps.mp4" type="video/mp4" />
      </video>

      {/* Animated background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/15"></div>
      
      {/* Blurred background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-6 animate-slide-in-left">
          <div className="inline-block">
            <span className="text-sm font-semibold text-secondary tracking-wide uppercase">Since 1998</span>
          </div>
          
          <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Learn Languages</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">That Open Doors</span>
          </h1>
          
          <p className="text-pretty text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            25 years of excellence in language education. Join thousands of students who've achieved fluency and passed international exams with our proven teaching methods.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6" style={{ animation: 'slide-in-left 0.6s ease-out 0.2s backwards' }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="/courses">
              Explore Courses
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-muted bg-transparent border-2 hover:border-primary/50"
            asChild
          >
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>

        {/* Stats Below */}
        <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto" style={{ animation: 'slide-in-left 0.6s ease-out 0.4s backwards' }}>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-b from-secondary to-secondary/70 bg-clip-text text-transparent">7</div>
            <p className="text-sm text-muted-foreground">Languages</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-b from-secondary to-secondary/70 bg-clip-text text-transparent">5000+</div>
            <p className="text-sm text-muted-foreground">Students</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-b from-secondary to-secondary/70 bg-clip-text text-transparent">95%</div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
