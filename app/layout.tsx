import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { WhatsappFab } from '@/components/whatsapp-fab'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Foreign Language Classes in Dehradun | Unique Institute',
    template: '%s | Unique Institute of Foreign Languages',
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  keywords: [
    'foreign language institute Dehradun',
    'French classes Dehradun',
    'German classes Dehradun',
    'Spanish classes Dehradun',
    'Japanese classes Dehradun',
    'IELTS coaching Dehradun',
    'TOEFL coaching Dehradun',
    'DELF Goethe DELE JLPT HSK preparation',
    'language classes online India',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: 'en_IN',
    title: 'Foreign Language Classes in Dehradun | Unique Institute',
    description: siteConfig.shortDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foreign Language Classes in Dehradun',
    description: siteConfig.shortDescription,
  },
  robots: { index: true, follow: true },
  // Favicons come from app/icon.tsx and app/apple-icon.tsx (Next auto-injects them).
}

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: siteConfig.foundingYear,
  image: `${siteConfig.url}/opengraph-image`,
  logo: `${siteConfig.url}/brand/logo.png`,
  telephone: siteConfig.phone[0],
  email: siteConfig.email,
  priceRange: siteConfig.priceRange,
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: siteConfig.areaServed,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.phone[0],
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: siteConfig.sameAs,
  knowsLanguage: ['French', 'German', 'Spanish', 'Japanese', 'Russian', 'English', 'Chinese'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased`}>
        <JsonLd data={organizationLd} />
        {children}
        <WhatsappFab />
        <Analytics />
      </body>
    </html>
  )
}
