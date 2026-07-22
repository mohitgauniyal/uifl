/**
 * Single source of truth for site/business data.
 * Used by metadata, sitemap, robots and JSON-LD structured data.
 *
 * TODO(owner): refine `geo` to the exact centre coordinates (from your Google
 * Business Profile) and add the Business Profile / social URLs to `sameAs`.
 * Keep name/address/phone identical to the Google Business Profile listing.
 */
export const siteConfig = {
  name: 'Unique Institute of Foreign Languages',
  shortName: 'UIFL',
  url: 'https://uniqueinstituteddn.in',
  tagline: 'Foreign language training that gets you certified',
  description:
    'Foreign language institute in Dehradun since 1998. Classroom & online courses in French, German, Spanish, Japanese, Russian, English and Chinese, with DELF, Goethe, DELE, JLPT, HSK, IELTS and TOEFL exam preparation.',
  foundingYear: '1998',
  phone: ['+91 97246 40763', '+91 98798 78975'],
  email: 'uniqueinstituteddn@gmail.com',
  whatsapp: '+919724640763',
  priceRange: '₹₹',
  address: {
    street: '1/4, Rajpur Road',
    locality: 'Dehradun',
    region: 'Uttarakhand',
    postalCode: '248001',
    country: 'IN',
  },
  // Approx. Rajpur Road, Dehradun. TODO: refine to the exact centre location.
  geo: { latitude: 30.3436, longitude: 78.0765 },
  openingHours: 'Mo-Su 09:00-20:00',
  areaServed: 'Dehradun, Uttarakhand',
  // TODO: add your Google Business Profile URL and any social profiles here —
  // it strengthens the link between the site and your verified listing.
  sameAs: ['https://www.youtube.com/@UILF'],
} as const

/** Per-language SEO metadata, keyed by route id. */
export const languageMeta: Record<
  string,
  { name: string; exam: string; blurb: string }
> = {
  french: { name: 'French', exam: 'DELF / DALF', blurb: 'DELF and DALF preparation, conversation and business French — ideal for studying or migrating to France and Canada.' },
  german: { name: 'German', exam: 'Goethe-Zertifikat', blurb: 'Goethe-Zertifikat preparation, business German and everyday fluency — ideal for studies, Ausbildung and jobs in Germany.' },
  spanish: { name: 'Spanish', exam: 'DELE', blurb: 'DELE preparation, conversation and Latin American Spanish for travel, work and study.' },
  japanese: { name: 'Japanese', exam: 'JLPT', blurb: 'JLPT preparation with kanji, grammar and culture for study, work and the JLPT N5–N1 exams.' },
  russian: { name: 'Russian', exam: 'TORFL', blurb: 'Russian grammar, literature and business communication with TORFL preparation.' },
  english: { name: 'English', exam: 'IELTS / TOEFL', blurb: 'IELTS and TOEFL preparation, spoken English and business English for study and work abroad.' },
  chinese: { name: 'Chinese', exam: 'HSK', blurb: 'Mandarin Chinese with the HSK certification pathway, tone training and business Chinese.' },
}

export const languageIds = Object.keys(languageMeta)
