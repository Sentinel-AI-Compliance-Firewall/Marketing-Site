"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Download, Mail, ArrowRight, Newspaper } from "lucide-react"

const BRAND_ASSETS = [
  { name: "Logo Pack (SVG, PNG)", type: "ZIP", size: "2.4 MB" },
  { name: "Brand Guidelines", type: "PDF", size: "5.1 MB" },
  { name: "Product Screenshots", type: "ZIP", size: "12.8 MB" },
  { name: "Executive Headshots", type: "ZIP", size: "8.2 MB" },
]

export default function PressPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Press
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Newsroom
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Media resources and press information for SentinelAI Compliance Firewall.
            </p>
            <Button variant="primary" size="lg" as="a" href="/contact">
              <Mail className="w-5 h-5" />
              Media Inquiries
            </Button>
          </div>
        </div>
      </section>

      {/* About Section for Press */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">About SentinelAI</h2>
                  <p className="text-sm text-[var(--text-muted)]">Company Overview</p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] mb-4">
                SentinelAI Compliance Firewall is an AI-powered platform that helps organizations
                detect and prevent workplace bias in real-time. Our multi-model ML ensemble analyzes
                text across 9 EEOC-protected categories, enabling HR teams and compliance officers
                to catch potential issues before they become incidents.
              </p>
              <p className="text-[var(--text-secondary)]">
                Founded in 2025, we&apos;re on a mission to create fairer workplaces through
                responsible AI technology. Our platform is designed for enterprise-grade security
                and seamless integration with existing HR workflows.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Brand Assets</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Download official SentinelAI logos, screenshots, and brand materials for press use.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BRAND_ASSETS.map((asset, i) => (
                <Card key={i} className="p-4 hover:border-[var(--primary)] transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">{asset.name}</h3>
                      <p className="text-sm text-[var(--text-muted)]">{asset.type} • {asset.size}</p>
                    </div>
                    <Download className="w-5 h-5 text-[var(--primary)]" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Press Contact
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              For media inquiries, interview requests, or additional information,
              please reach out through our contact form.
            </p>
            <Button variant="primary" size="lg" as="a" href="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
