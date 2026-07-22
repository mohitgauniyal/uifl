import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Home, BookOpen, Phone } from 'lucide-react'

export const metadata = {
  title: 'Page not found',
  description: 'The page you are looking for could not be found.',
}

const suggestions = [
  { href: '/courses', label: 'Browse courses' },
  { href: '/languages', label: 'Explore languages' },
  { href: '/faq', label: 'Read FAQs' },
  { href: '/contact', label: 'Contact us' },
]

export default function NotFound() {
  return (
    <main>
      <Navigation />

      <section className="bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <p className="text-sm font-semibold text-primary mb-3">Error 404</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground">Page not found</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
            back on track.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/">
                <Home size={18} className="mr-2" />
                Back to home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">
                <BookOpen size={18} className="mr-2" />
                View courses
              </Link>
            </Button>
          </div>

          <div className="mt-14 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Or try one of these:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground inline-flex items-center gap-2">
              <Phone size={14} className="text-primary" />
              Need help? Call +91 97246 40763
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
