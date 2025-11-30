"use client"

import { useState } from "react"
import { Button, Input } from "@/app/components/ui"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    console.log("Demo request:", email)
    setSubmitted(true)
  }

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/10 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
            <Shield className="w-8 h-8 text-[var(--primary)]" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Protect Your Organization?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
            Join 500+ enterprises already using Sentinel AI to prevent workplace
            bias and ensure compliance.
          </p>

          {/* Form or Success Message */}
          {submitted ? (
            <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--primary)]/30">
              <CheckCircle className="w-12 h-12 text-[var(--primary)]" />
              <h3 className="text-xl font-semibold text-white">
                Thank you for your interest!
              </h3>
              <p className="text-[var(--text-secondary)]">
                Our team will reach out within 24 hours to schedule your demo.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" variant="primary" size="lg">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          )}

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
