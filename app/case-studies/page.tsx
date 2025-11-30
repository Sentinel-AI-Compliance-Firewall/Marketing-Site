"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { ArrowRight, TrendingUp, Users, Clock, Building2 } from "lucide-react"
import Link from "next/link"

const CASE_STUDIES = [
  {
    company: "TechCorp Global",
    industry: "Technology",
    logo: "T",
    headline: "73% Reduction in Bias Incidents",
    description: "How a Fortune 100 technology company transformed their hiring process and reduced workplace discrimination complaints.",
    stats: [
      { value: "73%", label: "Fewer bias incidents" },
      { value: "45%", label: "Faster HR reviews" },
      { value: "$2.1M", label: "Annual savings" },
    ],
    quote: "Sentinel has fundamentally changed how we approach workplace fairness. The real-time detection capabilities have been game-changing.",
    author: "Chief People Officer",
  },
  {
    company: "HealthFirst Medical",
    industry: "Healthcare",
    logo: "H",
    headline: "HIPAA-Compliant Bias Detection",
    description: "A leading healthcare provider implemented Sentinel to ensure fair treatment across 50,000+ patient-facing communications.",
    stats: [
      { value: "50K+", label: "Documents scanned daily" },
      { value: "99.9%", label: "Uptime achieved" },
      { value: "100%", label: "HIPAA compliant" },
    ],
    quote: "The ability to scan patient communications while maintaining HIPAA compliance was crucial for our organization.",
    author: "VP of Compliance",
  },
  {
    company: "Global Finance Inc",
    industry: "Financial Services",
    logo: "G",
    headline: "Enterprise-Scale Compliance",
    description: "How a multinational bank deployed Sentinel across 30 countries to standardize their fair lending practices.",
    stats: [
      { value: "30", label: "Countries deployed" },
      { value: "12", label: "Languages supported" },
      { value: "89%", label: "Faster audits" },
    ],
    quote: "The multi-language support and global deployment capabilities made Sentinel the clear choice for our international operations.",
    author: "Global Head of Compliance",
  },
  {
    company: "RetailMax",
    industry: "Retail",
    logo: "R",
    headline: "Transforming Store Communications",
    description: "A major retail chain used Sentinel to ensure fair and inclusive communications across 2,000+ store locations.",
    stats: [
      { value: "2,000+", label: "Locations covered" },
      { value: "150K", label: "Employees protected" },
      { value: "62%", label: "Reduced complaints" },
    ],
    quote: "Sentinel helped us create a more inclusive culture across all our stores. Employee satisfaction scores have never been higher.",
    author: "Director of HR Operations",
  },
]

export default function CaseStudiesPage() {
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
              See how leading organizations are using Sentinel to create fairer,
              more inclusive workplaces and achieve measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <Building2 className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-[var(--text-muted)]">Enterprise Clients</div>
            </Card>
            <Card className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">65%</div>
              <div className="text-sm text-[var(--text-muted)]">Avg. Bias Reduction</div>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2M+</div>
              <div className="text-sm text-[var(--text-muted)]">Employees Protected</div>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">50%</div>
              <div className="text-sm text-[var(--text-muted)]">Faster Compliance</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            {CASE_STUDIES.map((study, i) => (
              <Card key={i} className="p-8 hover:border-[var(--primary)] transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold text-xl">
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{study.company}</h3>
                        <p className="text-sm text-[var(--text-muted)]">{study.industry}</p>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">{study.headline}</h2>
                    <p className="text-[var(--text-secondary)] mb-6">{study.description}</p>
                    <blockquote className="border-l-2 border-[var(--primary)] pl-4 mb-4">
                      <p className="text-[var(--text-secondary)] italic mb-2">&quot;{study.quote}&quot;</p>
                      <cite className="text-sm text-[var(--text-muted)]">— {study.author}, {study.company}</cite>
                    </blockquote>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">Key Results</h4>
                    {study.stats.map((stat, j) => (
                      <div key={j} className="p-4 rounded-lg bg-[var(--bg-card)]">
                        <div className="text-2xl font-bold text-[var(--primary)]">{stat.value}</div>
                        <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Join hundreds of organizations building fairer workplaces with Sentinel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as={Link} href="/contact?demo=true">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" as={Link} href="/pricing">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
