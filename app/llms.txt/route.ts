import { siteConfig } from '@/lib/site'

// Serves /llms.txt — a plain-text summary for AI / answer engines (ChatGPT,
// Perplexity, etc.) so they describe the institute accurately. Generated from
// siteConfig so contact details never drift.
export const dynamic = 'force-static'

export function GET() {
  const { url, name, email, phone, whatsapp, address, foundingYear } = siteConfig
  const addr = `${address.street}, ${address.locality} – ${address.postalCode}, ${address.region}, India`

  const body = `# ${name}

> Foreign language institute in ${address.locality}, India, established ${foundingYear}. Classroom and live-online courses in French, German, Spanish, Japanese, Russian, English and Chinese, with preparation for the DELF, DALF, Goethe-Zertifikat, TestDaF, DELE, JLPT, HSK, TORFL, IELTS and TOEFL exams.

## About
- Location: ${addr}
- Founded: ${foundingYear}
- Formats: in-person at our ${address.locality} centre, and live online
- Ways to learn: group batches, one-on-one coaching, and online classes
- Languages taught: French, German, Spanish, Japanese, Russian, English, Chinese
- Exam preparation: DELF, DALF, Goethe-Zertifikat, TestDaF, DELE, JLPT, HSK, TORFL, IELTS, TOEFL
- Levels: beginner to advanced (CEFR A1–C1, JLPT N5–N1, HSK 1–5)
- Hours: Monday to Sunday, 9 AM – 8 PM

## Contact
- Phone: ${phone.join(', ')}
- WhatsApp: ${whatsapp}
- Email: ${email}
- Website: ${url}

## Key pages
- Home: ${url}
- Courses: ${url}/courses
- Languages: ${url}/languages
- Faculty: ${url}/faculty
- Testimonials: ${url}/testimonials
- Frequently asked questions: ${url}/faq
- Contact and location: ${url}/contact
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
