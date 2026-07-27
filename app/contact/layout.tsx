import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Location — Rajpur Road, Dehradun',
  description:
    'Contact Unique Institute of Foreign Languages on Rajpur Road, Dehradun. Call +91 94120 59424, book a free demo class, or enquire about classroom and online language courses.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
