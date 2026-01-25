'use client'

import React from "react"

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', language: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main>
      <Navigation />

      {/* Header */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-pretty text-lg text-muted-foreground">
            Have questions? We&apos;d love to hear from you. Reach out and let&apos;s discuss your language learning journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="border-border overflow-hidden bg-gradient-to-br from-primary/10 to-background">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Call Us</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Available 9 AM - 8 PM (Monday-Sunday)</p>
                  <p className="text-primary font-semibold text-lg">+91 9724640763</p>
                  <p className="text-primary font-semibold text-lg">+91 9879878975</p>
                </div>
              </div>
            </Card>

            <Card className="border-border overflow-hidden bg-gradient-to-br from-secondary/10 to-background">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Visit Us</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">Our Academy</p>
                  <p className="text-foreground font-semibold">1/4, Rajpur Road</p>
                  <p className="text-foreground font-semibold">Dehradun – 248001</p>
                  <p className="text-foreground font-semibold">Uttarakhand, India</p>
                </div>
              </div>
            </Card>

            <Card className="border-border overflow-hidden bg-gradient-to-br from-accent/10 to-background">
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Clock size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Working Hours</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-muted-foreground text-sm">Monday - Sunday</p>
                    <p className="text-foreground font-semibold">9:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Online Classes Available</p>
                    <p className="text-foreground font-semibold">Worldwide</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 9XXXXXXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Language of Interest
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a Language</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                    <option value="spanish">Spanish</option>
                    <option value="russian">Russian</option>
                    <option value="english">English</option>
                    <option value="japanese">Japanese</option>
                    <option value="chinese">Chinese</option>
                    <option value="multiple">Multiple Languages</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your language learning goals..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </Button>

                {submitted && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <p className="font-semibold">Thank you for reaching out!</p>
                    <p className="text-sm">We&apos;ll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Get personalized language learning recommendations',
                    'Schedule a free demo class with our instructors',
                    'Learn about current batch timings and enrollment',
                    'Inquire about corporate training solutions',
                    'Ask about payment plans and scholarships',
                    'Discuss your specific learning goals and challenges',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-border p-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond to inquiries within 24 hours during business hours. For urgent matters, please call us directly.
                </p>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-border p-8 space-y-4">
                <h3 className="text-xl font-bold text-foreground">Online Classes Available</h3>
                <p className="text-muted-foreground">
                  Can&apos;t visit us in Dehradun? No problem! We offer live, interactive online classes for students worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Find Us</h2>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border overflow-hidden h-96">
            <div className="w-full h-full flex items-center justify-center text-6xl">
              📍
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Located on Rajpur Road, next to Mohan Mandir, Dehradun. Easy access via public transport and ample parking available.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
