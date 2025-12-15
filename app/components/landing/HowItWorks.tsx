"use client"

import { Scan, AlertCircle, CheckCircle, ArrowRight } from "lucide-react"

const STEPS = [
  {
    number: "01",
    title: "SCAN",
    subtitle: "Connect Your Channels",
    description:
      "Integrate with your existing communication tools - Slack, Teams, email, HR systems, and more. Our API scans text in real-time.",
    icon: Scan,
    color: "#0066FF",
  },
  {
    number: "02",
    title: "DETECT",
    subtitle: "AI-Powered Analysis",
    description:
      "Our multi-model ensemble (DeBERTa + RoBERTa) analyzes text across 9 protected categories with sub-100ms latency.",
    icon: AlertCircle,
    color: "#FFB800",
  },
  {
    number: "03",
    title: "REMEDIATE",
    subtitle: "Automatic Suggestions",
    description:
      "Receive instant remediation suggestions that preserve meaning while removing bias. Auto-rewrite or review manually.",
    icon: CheckCircle,
    color: "#00FF88",
  },
]

export function HowItWorks() {
  return (
    <section className="section bg-black relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 rounded-full border border-[var(--primary)]/20">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Three Steps to Compliance
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Get started in minutes with our simple integration process
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="step-card relative"
              style={{ "--step-color": step.color } as React.CSSProperties}
            >
              <div className="flex flex-col md:flex-row items-start gap-6 p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:border-opacity-50 bg-[var(--step-color)]/5 border-[var(--step-color)]/30">
                {/* Number */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-mono text-2xl font-bold bg-[var(--step-color)]/15 text-[var(--step-color)]">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <step.icon className="w-6 h-6 text-[var(--step-color)]" />
                  </div>
                  <p className="text-sm font-medium mb-3 text-[var(--step-color)]">
                    {step.subtitle}
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector arrow */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:flex absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[var(--text-muted)] rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
