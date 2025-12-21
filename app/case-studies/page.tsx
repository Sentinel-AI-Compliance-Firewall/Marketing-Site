"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { ArrowRight, Building2, TrendingUp, FileText, Users, Sparkles } from "lucide-react"
import { useWaitlist } from "@/app/context/WaitlistContext"

const INDUSTRIES = [
  {
    icon: Building2,
    name: "Technology",
    description: "Transform hiring and performance reviews with bias-free communications.",
  },
  {
    icon: TrendingUp,
    name: "Financial Services",
    description: "Ensure fair lending practices and compliant customer communications.",
  },
  {
    icon: Users,
    name: "Healthcare",
    description: "HIPAA-compliant bias detection for patient and employee communications.",
  },
  {
    icon: FileText,
    name: "Retail & Hospitality",
    description: "Create inclusive environments across distributed store locations.",
  },
]

export default function CaseStudiesPage() {
  const { openWaitlist } = useWaitlist()

  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Case Studies
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              See how organizations are using SentinelAI to create fairer,
              more inclusive workplaces.
            </p>

            {/* Coming Soon Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
              </span>
              <span className="text-[var(--secondary)] font-medium">Case studies coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our platform is designed to help organizations across various industries
              build more equitable workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {INDUSTRIES.map((industry, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                  <industry.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-sm text-[var(--text-muted)]">{industry.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated" className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Be Our First Case Study
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                We&apos;re looking for forward-thinking organizations to partner with
                and document their journey toward fairer workplaces. Early adopters
                will receive exclusive benefits and recognition.
              </p>
              <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  Priority onboarding and dedicated support
                </li>
                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  Featured placement on our website
                </li>
                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  Exclusive early adopter pricing
                </li>
                <li className="flex items-center gap-3 text-[var(--text-secondary)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                  Input on product roadmap
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" as="a" href="/contact">
                  Become a Case Study Partner
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="lg" onClick={openWaitlist}>
                  <Sparkles className="w-5 h-5" />
                  Join Waitlist
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
