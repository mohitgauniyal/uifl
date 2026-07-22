import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learning Resources & Video Tutorials',
  description:
    'Free language learning resources from Unique Institute, Dehradun — video tutorials, grammar guides, vocabulary lists and exam-preparation material across seven languages.',
  alternates: { canonical: '/resources' },
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
