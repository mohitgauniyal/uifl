'use client'

import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'
import { Phone, MapPin, Clock, Check, MessageCircle } from 'lucide-react'

// Free, no-backend form delivery. Get an access key at https://web3forms.com
// (enter your email, they send a key) and put it in .env.local as
// NEXT_PUBLIC_WEB3FORMS_KEY. Submissions then arrive in your inbox.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, '')
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hi, I'd like to know more about your language courses.",
)}`

const infoCards = [
  { icon: Phone, title: 'Call us', meta: 'Available 9 AM – 8 PM, Mon–Sun', lines: siteConfig.phone },
  { icon: MapPin, title: 'Visit us', meta: 'Our centre', lines: ['1/4, Rajpur Road', 'Dehradun – 248001', 'Uttarakhand, India'] },
  { icon: Clock, title: 'Working hours', meta: 'Monday – Sunday', lines: ['9:00 AM – 8:00 PM', 'Online classes worldwide'] },
]

const reasons = [
  'Get personalised language learning recommendations',
  'Book a free demo class with our instructors',
  'Learn about current batch timings and enrolment',
  'Enquire about corporate training solutions',
  'Ask about payment plans and scholarships',
  'Discuss your specific goals and challenges',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', language: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!WEB3FORMS_KEY) {
      setStatus('error')
      setErrorMsg('The form isn’t configured yet. Please call or message us on WhatsApp for now.')
      return
    }

    setStatus('submitting')
    setErrorMsg('')
    try {
      const fd = new FormData(form)
      fd.append('access_key', WEB3FORMS_KEY)
      fd.append('subject', 'New enquiry from the UIFL website')
      fd.append('from_name', 'UIFL Website')

      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', language: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again, or reach us on WhatsApp.')
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring'

  return (
    <main>
      <Navigation />

      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have questions? Reach out and let's discuss your language learning journey."
      />

      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {infoCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="rounded-xl border border-border bg-card p-8">
                  <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-5">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{card.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{card.meta}</p>
                  <div className="mt-4 pt-4 border-t border-border space-y-1">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Form + info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from users, catches bots */}
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 9XXXXXXXXX" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Language of interest <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <select name="language" value={formData.language} onChange={handleChange} className={inputClass}>
                    <option value="">Select a language</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Russian">Russian</option>
                    <option value="English">English</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Multiple languages">Multiple languages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell us about your language learning goals..." />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : status === 'success' ? 'Message sent!' : 'Send message'}
                </Button>

                {status === 'success' && (
                  <div className="p-4 rounded-md bg-accent border border-primary/20 text-foreground">
                    <p className="font-semibold text-sm">Thank you for reaching out!</p>
                    <p className="text-sm text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 rounded-md bg-destructive/10 border border-destructive/30 text-foreground">
                    <p className="font-semibold text-sm">Couldn&apos;t send your message.</p>
                    <p className="text-sm text-muted-foreground">{errorMsg}</p>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              {/* WhatsApp — instant, no form */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Prefer WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground">Message us and we&apos;ll reply quickly.</p>
                </div>
              </a>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Why contact us?</h3>
                <ul className="space-y-3">
                  {reasons.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                        <Check size={13} className="text-primary" />
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">Response time</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  We typically respond within 24 hours during business hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-semibold text-primary mb-2">Find us</p>
            <h2 className="text-3xl font-bold text-foreground">On Rajpur Road, Dehradun</h2>
          </div>
          <div className="rounded-xl border border-border overflow-hidden h-96 bg-card">
            <iframe
              title="Unique Institute location"
              src="https://maps.google.com/maps?q=Unique%20Institute%20of%20Foreign%20Languages%2C%20Rajpur%20Road%2C%20Dehradun&z=16&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Located on Rajpur Road, Dehradun. Easy access via public transport, with parking available.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
