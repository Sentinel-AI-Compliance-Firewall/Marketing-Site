"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Download, ExternalLink, Mail, Calendar } from "lucide-react"
import Link from "next/link"

const PRESS_RELEASES = [
  {
    title: "Sentinel AI Raises $50M Series B to Combat Workplace Discrimination",
    date: "November 2024",
    source: "Company Announcement",
    excerpt: "Funding round led by Accel to accelerate product development and global expansion.",
  },
  {
    title: "Sentinel Achieves SOC 2 Type II and HIPAA Certification",
    date: "September 2024",
    source: "Company Announcement",
    excerpt: "Demonstrating enterprise-grade security standards for healthcare and regulated industries.",
  },
  {
    title: "Sentinel Expands Multi-Language Support to 12 Languages",
    date: "July 2024",
    source: "Company Announcement",
    excerpt: "New language models enable bias detection for global enterprises across Europe and Asia.",
  },
  {
    title: "Sentinel Surpasses 1 Million Documents Scanned",
    date: "May 2024",
    source: "Company Announcement",
    excerpt: "Milestone reflects growing enterprise adoption of AI-powered compliance solutions.",
  },
]

const MEDIA_COVERAGE = [
  {
    title: "How AI is Revolutionizing HR Compliance",
    publication: "TechCrunch",
    date: "November 2024",
    link: "#",
  },
  {
    title: "The Startups Fighting Workplace Bias with Machine Learning",
    publication: "Forbes",
    date: "October 2024",
    link: "#",
  },
  {
    title: "Sentinel AI: Making Workplaces Fairer, One Document at a Time",
    publication: "VentureBeat",
    date: "September 2024",
    link: "#",
  },
  {
    title: "The Rise of AI-Powered DEI Tools",
    publication: "Harvard Business Review",
    date: "August 2024",
    link: "#",
  },
]

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
              Latest news, press releases, and media resources from Sentinel AI.
            </p>
            <Button variant="primary" size="lg" as={Link} href="mailto:press@sentinel-ai.com">
              <Mail className="w-5 h-5" />
              Media Inquiries
            </Button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="pb-20">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-8">Press Releases</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {PRESS_RELEASES.map((release, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-2 text-sm text-[var(--text-muted)]">
                  <Calendar className="w-4 h-4" />
                  {release.date}
                  <span className="mx-2">•</span>
                  {release.source}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{release.title}</h3>
                <p className="text-[var(--text-secondary)]">{release.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-8">Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {MEDIA_COVERAGE.map((article, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors">
                <a href={article.link} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-[var(--primary)] font-medium mb-1">{article.publication}</p>
                    <h3 className="font-semibold text-white mb-2">{article.title}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{article.date}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Brand Assets</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Download official Sentinel logos, screenshots, and brand materials for press use.
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

      {/* Contact */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Press Contact
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              For media inquiries, interview requests, or additional information,
              please contact our communications team.
            </p>
            <Card className="p-6 max-w-md mx-auto">
              <p className="text-white font-semibold mb-1">Media Relations</p>
              <a href="mailto:press@sentinel-ai.com" className="text-[var(--primary)] hover:underline">
                press@sentinel-ai.com
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
