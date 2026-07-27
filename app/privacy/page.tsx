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
            collects when you use this website, how we use it, and the choices you have. This is an
            informational website — we do not run user accounts and we do not collect payments here.
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
              We also receive basic, anonymous usage information automatically (such as pages viewed and
              general device or browser type), and our host keeps standard server logs (such as your IP
              address and the pages requested) to keep the site secure and reliable.
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
            <h2 className="text-xl font-bold text-foreground">Who handles your information</h2>
            <p>
              We use a small number of trusted third-party services to run this site. We do not sell your
              personal information to anyone.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Web3Forms</strong> — delivers your contact-form
                submission to our email inbox.{' '}
                <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Their privacy policy
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Vercel</strong> — hosts this website and keeps standard
                server logs.{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Their privacy policy
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">Vercel Analytics</strong> — gives us aggregated,
                cookieless usage statistics; it does not identify you personally.
              </li>
              <li>
                <strong className="text-foreground">Google Maps &amp; YouTube</strong> — embedded on some
                pages for our location and video lessons; Google may set cookies and collect data under{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  its own policy
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">WhatsApp</strong> — if you choose to message us, your
                chat is handled by WhatsApp under{' '}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  its own policy
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Cookies</h2>
            <p>
              This website does not set its own advertising or tracking cookies. Some embedded third-party
              content (such as Google Maps or YouTube) may set cookies under its own privacy policy when you
              interact with it.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Data retention &amp; your choices</h2>
            <p>
              We keep enquiry details only as long as needed to respond to you and for our records. You may
              ask us to access, correct or delete your information at any time by contacting us using the
              details below, and we will act on reasonable requests.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">Governing law</h2>
            <p>
              This policy and our handling of your information are governed by the laws of India, including
              the Digital Personal Data Protection Act, 2023.
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
