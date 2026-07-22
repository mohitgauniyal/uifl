import type { Metadata } from 'next'
import { siteConfig, languageMeta } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>
}): Promise<Metadata> {
  const { language } = await params
  const m = languageMeta[language]
  if (!m) return { title: 'Language Program' }

  return {
    title: `${m.name} Classes in Dehradun — ${m.exam} Preparation`,
    description: `Learn ${m.name} in Dehradun and online at Unique Institute. ${m.blurb} Certified faculty, small batches, A1 to advanced levels.`,
    alternates: { canonical: `/languages/${language}` },
    openGraph: {
      type: 'website',
      title: `${m.name} Classes in Dehradun — ${m.exam} Preparation`,
      description: m.blurb,
      url: `${siteConfig.url}/languages/${language}`,
    },
  }
}

export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ language: string }>
}) {
  const { language } = await params
  const m = languageMeta[language]

  const courseLd = m && {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${m.name} Language Course`,
    description: m.blurb,
    url: `${siteConfig.url}/languages/${language}`,
    inLanguage: 'en',
    educationalCredentialAwarded: m.exam,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
  }

  return (
    <>
      {courseLd && <JsonLd data={courseLd} />}
      {children}
    </>
  )
}
