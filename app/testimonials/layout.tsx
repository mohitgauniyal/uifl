import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Reviews & Success Stories',
  description:
    'Read reviews and success stories from students of Unique Institute of Foreign Languages, Dehradun — exam results, study-abroad journeys and real experiences.',
  alternates: { canonical: '/testimonials' },
}

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children
}
