import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/data/faqs'

// The most decision-relevant questions; the rest live on /faq.
const homeFaqs = faqs.slice(0, 6)

export default function HomeFaq() {
  return (
    <section className="py-20 lg:py-28 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold text-primary mb-2">Questions?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Frequently asked questions</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Quick answers on courses, batches, fees and studying abroad.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {homeFaqs.map((faq, idx) => (
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

        <div className="mt-10">
          <Button variant="outline" asChild>
            <Link href="/faq">
              See all FAQs
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
