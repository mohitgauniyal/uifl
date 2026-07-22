import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { JsonLd } from '@/components/json-ld'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about language courses at Unique Institute of Foreign Languages, Dehradun — fees, batch timings, online classes, certifications and study-abroad support.',
  alternates: { canonical: '/faq' },
}

const faqs = [
  {
    q: 'Which languages and levels do you teach?',
    a: 'We teach French, German, Spanish, Japanese, Russian, English and Chinese, from beginner (A1 / N5 / HSK1) up to advanced (C1 / N1 / HSK5). Every course maps to an internationally recognised certification.',
  },
  {
    q: 'Do you offer online classes, or only classroom?',
    a: 'Both. You can attend live, interactive online classes from anywhere, or study in person at our centre on Rajpur Road, Dehradun. The curriculum and faculty are the same for both.',
  },
  {
    q: 'Which exams do you prepare students for?',
    a: 'DELF and DALF (French), Goethe-Zertifikat (German), DELE (Spanish), JLPT (Japanese), HSK (Chinese), TORFL (Russian), and IELTS and TOEFL (English).',
  },
  {
    q: 'How long does it take to complete a level or clear an exam?',
    a: 'Most levels take around 2–4 months depending on the language and whether you choose a regular or fast-track batch. Japanese and Chinese take longer at higher levels. We map out a clear timeline for you during your free assessment.',
  },
  {
    q: 'What are the batch sizes and timings?',
    a: 'Batches are small — an average of 6–8 students — so everyone gets individual attention. We run morning, evening and weekend batches. Contact us for the next available start dates for your language and level.',
  },
  {
    q: 'What are the fees?',
    a: 'Fees vary by language, level and format (classroom, online, group or one-on-one). Please call us on +91 97246 40763 or book a free assessment and we will share the current fees along with a recommended learning plan.',
  },
  {
    q: 'Can you help with studying or working abroad?',
    a: 'Yes. Many of our students learn German for studies, Ausbildung and jobs in Germany, or French for Canada and France. We prepare you for the exact certification and language level your destination requires, and guide you on the process.',
  },
  {
    q: 'How do I enrol or book a demo class?',
    a: 'Book a free assessment through our contact page, or call +91 97246 40763. We will assess your current level, recommend the right course, and help you join the next suitable batch.',
  },
  {
    q: 'Where are you located?',
    a: 'We are at 1/4, Rajpur Road, Dehradun – 248001, Uttarakhand. The centre is easy to reach by public transport, with parking available.',
  },
]

const faqPageLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqPageLd} />
      <Navigation />

      <PageHeader
        eyebrow="Help"
        title="Frequently asked questions"
        description="Everything you need to know about courses, batches, fees and studying abroad. Can't find your answer? Just call or message us."
      />

      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-bold text-foreground">Still have a question?</h2>
            <p className="mt-2 text-muted-foreground">
              Our team is happy to help you find the right course and batch.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/contact">Book a Free Assessment</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+919724640763">Call +91 97246 40763</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
