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
import { faqs } from '@/lib/data/faqs'

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about language courses at Unique Institute of Foreign Languages, Dehradun — fees, batch timings, online classes, certifications and study-abroad support.',
  alternates: { canonical: '/faq' },
}

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
                <Link href="/contact">Book a Free Demo Class</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+919412059424">Call +91 94120 59424</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
