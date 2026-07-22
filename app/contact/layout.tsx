import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact & Location — Rajpur Road, Dehradun',
  description:
    'Contact Unique Institute of Foreign Languages on Rajpur Road, Dehradun. Call +91 97246 40763, book a free assessment, or enquire about classroom and online language courses.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
