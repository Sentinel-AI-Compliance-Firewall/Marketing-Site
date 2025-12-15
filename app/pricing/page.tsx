"use client"

import { useState } from "react"
import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge } from "@/app/components/ui"
import { PRICING_PLANS, PRICING_FAQ, FEATURE_COMPARISON } from "@/app/constants/pricing"
import { Check, X, Minus, ChevronDown } from "lucide-react"
import { cn } from "@/app/lib/utils"

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Flexible Plans for Every Team
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Join our waitlist to be the first to know when we launch. Pricing details coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "relative p-6",
                  plan.popular && "border-[var(--primary)] shadow-[var(--glow-primary)]"
                )}
                hover={false}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="success">Most Popular</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {plan.price.label}
                  </span>
                </div>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  fullWidth
                  as="a"
                  href="/contact"
                >
                  {plan.cta}
                </Button>

                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            feature.included
                              ? "text-[var(--text-secondary)]"
                              : "text-[var(--text-muted)]"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compare Plans
            </h2>
            <p className="text-[var(--text-secondary)]">
              See what&apos;s included in each plan
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-4 px-4 text-[var(--text-muted)] font-medium">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_COMPARISON.map((category) => (
                  <>
                    <tr key={category.category} className="bg-[var(--bg-card)]">
                      <td
                        colSpan={4}
                        className="py-3 px-4 text-sm font-medium text-[var(--text-secondary)]"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, i) => (
                      <tr key={i} className="border-b border-[var(--border)]">
                        <td className="py-4 px-4 text-sm text-[var(--text-secondary)]">
                          {feature.name}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-[var(--primary)] mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-[var(--text-muted)] mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-[var(--text-secondary)]">
                              {feature.starter}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-[var(--primary)] mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-[var(--text-muted)] mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-[var(--text-secondary)]">
                              {feature.professional}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-[var(--primary)] mx-auto" />
                            ) : (
                              <Minus className="w-5 h-5 text-[var(--text-muted)] mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-[var(--text-secondary)]">
                              {feature.enterprise}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {PRICING_FAQ.map((faq, i) => (
              <div
                key={i}
                className="border border-[var(--border)] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--bg-card)] transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-[var(--text-muted)] transition-transform",
                      openFaq === i && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-[var(--text-secondary)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Our team is here to help you find the right plan for your
              organization.
            </p>
            <Button variant="primary" size="lg" as="a" href="/contact?sales=true">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
