"use client"

import { Shield, Building2, Users, Award } from "lucide-react"

const TRUST_INDICATORS = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    description: "Enterprise security certified",
  },
  {
    icon: Building2,
    title: "EEOC Aligned",
    description: "Compliant with federal guidelines",
  },
  {
    icon: Users,
    title: "500+ Teams",
    description: "On our waitlist",
  },
  {
    icon: Award,
    title: "99.7% Accuracy",
    description: "Bias detection rate",
  },
]

export function TrustedBy() {
  return (
    <section className="section bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--secondary)] bg-[var(--secondary)]/10 rounded-full border border-[var(--secondary)]/20">
            Why Choose Sentinel
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Enterprise-Ready Compliance
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Built for organizations that take workplace fairness seriously
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {TRUST_INDICATORS.map((item, i) => (
            <div
              key={i}
              className="text-center p-4 md:p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--secondary)]/30 transition-colors"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[var(--secondary)]" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-white mb-1">{item.title}</h3>
              <p className="text-xs md:text-sm text-[var(--text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
