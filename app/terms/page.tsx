import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { siteConfig } from '@/lib/site'

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms for using the Unique Institute of Foreign Languages website.',
  alternates: { canonical: '/terms' },
}

const updated = 'July 2026'

export default function TermsPage() {
  return (
    <main>
      <Navigation />

      <PageHeader eyebrow="Legal" title="Terms of Service" description={`Last updated: ${updated}`} />

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-muted-foreground leading-relaxed">
          <p>
            These terms apply to your use of the {siteConfig.name} website. By using the site, you agree
            to them.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Use of this website</h2>
            <p>
              The content on this site is provided for general information about our courses and services.
              Course details, levels, timings and outcomes are indicative and may change; nothing on this
              site is a binding offer or a guarantee of specific results.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Enrolment &amp; fees</h2>
            <p>
              Enrolment, fees, batch schedules and any commitments are confirmed directly with us when you
              register. Please contact us for current details before enrolling.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Intellectual property</h2>
            <p>
              The text, design and materials on this site belong to {siteConfig.name} unless stated
              otherwise. Please do not reproduce or redistribute them without our permission.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">External links</h2>
            <p>
              This site may link to or embed third-party content. We are not responsible for the content
              or practices of external websites.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p>
              Questions about these terms? Contact us at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>{' '}
              or {siteConfig.phone[0]}.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
