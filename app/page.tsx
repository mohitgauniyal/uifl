import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import FeaturedCourses from '@/components/featured-courses'
import Testimonials from '@/components/testimonials'
import WhyChooseUs from '@/components/why-choose-us'
import HomeFaq from '@/components/home-faq'
import CallToAction from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FeaturedCourses />
      <Testimonials />
      <WhyChooseUs />
      <HomeFaq />
      <CallToAction />
      <Footer />
    </main>
  )
}
