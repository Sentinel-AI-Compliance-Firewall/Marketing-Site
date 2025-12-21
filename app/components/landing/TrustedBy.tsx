"use client"

import { Sparkles, ArrowRight } from "lucide-react"
import { useWaitlist } from "@/app/context/WaitlistContext"

export function TrustedBy() {
  const { openWaitlist } = useWaitlist()

  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--primary)]/5 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 rounded-full border border-[var(--primary)]/20">
            Early Access Program
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Early Access Program
          </h2>

          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
            Be among the first to experience enterprise-grade bias detection.
            Early access members get priority onboarding, dedicated support, and
            help shape the future of workplace compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={openWaitlist}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold text-lg hover:from-[#FFE55C] hover:to-[#FFB733] transition-all hover:scale-105 shadow-[0_4px_30px_rgba(255,165,0,0.4)]"
            >
              <Sparkles className="w-5 h-5" />
              Request Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-white font-semibold mb-2">Priority Access</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Be first in line when we launch. Skip the waitlist and get immediate access.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-white font-semibold mb-2">Founding Member Pricing</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Lock in special rates available only to early access members.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
              <h3 className="text-white font-semibold mb-2">Shape the Product</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Direct input on features and roadmap. Your feedback drives development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
