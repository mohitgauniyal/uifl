import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { siteConfig } from '@/lib/site'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Unique Institute of Foreign Languages collects, uses and protects your information.',
  alternates: { canonical: '/privacy' },
}

const updated = 'July 2026'

export default function PrivacyPage() {
  return (
    <main>
      <Navigation />

      <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Last updated: ${updated}`} />

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-muted-foreground leading-relaxed">
          <p>
            This policy explains what information {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
            collects when you use this website, how we use it, and the choices you have.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Information we collect</h2>
            <p>When you submit our contact form, we collect the details you provide:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>Your language of interest (optional)</li>
              <li>The message you send us</li>
            </ul>
            <p>
              We also collect basic, anonymous usage information automatically (such as pages viewed and
              general device or browser type) to understand how the site is used and improve it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">How we use your information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your enquiry and provide information about our courses;</li>
              <li>Recommend a suitable language, level and format;</li>
              <li>Improve our website and services.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">How your information is handled</h2>
            <p>
              Contact-form submissions are delivered to our email inbox through a third-party form
              service. Anonymous analytics are processed by our hosting/analytics provider. We do not
              sell your personal information.
            </p>
            <p>
              Some pages embed third-party content — for example YouTube videos and Google Maps — which
              may set their own cookies and collect data under their own privacy policies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Data retention &amp; your choices</h2>
            <p>
              We keep enquiry details only as long as needed to respond to you and for our records. You
              may ask us to access or delete your information at any time by contacting us using the
              details below.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Contact us</h2>
            <p>
              For any questions about this policy or your data, contact us at{' '}
              <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                {siteConfig.email}
              </a>{' '}
              or {siteConfig.phone[0]}, {siteConfig.address.street}, {siteConfig.address.locality} –{' '}
              {siteConfig.address.postalCode}.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with a
              revised date above.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
