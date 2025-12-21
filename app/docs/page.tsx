"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge } from "@/app/components/ui"
import { Book, Code, Zap, Shield, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const DOC_SECTIONS = [
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get up and running with Sentinel in under 5 minutes",
    href: "#quickstart",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with examples",
    href: "/docs/api",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security best practices and compliance guides",
    href: "/security",
  },
  {
    icon: Book,
    title: "Guides",
    description: "Step-by-step tutorials for common use cases",
    href: "#guides",
  },
]

const QUICK_LINKS = [
  { label: "Installation", href: "#installation" },
  { label: "Authentication", href: "#authentication" },
  { label: "Scanning Documents", href: "#scanning" },
  { label: "Webhooks", href: "#webhooks" },
  { label: "Rate Limits", href: "#rate-limits" },
  { label: "Error Handling", href: "#errors" },
]

export default function DocsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Documentation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build with Sentinel AI Compliance Firewall
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-6">
              Everything you need to integrate bias detection into your applications.
              Comprehensive guides, API references, and code examples.
            </p>

            {/* Coming Soon Notice */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
              </span>
              <span className="text-[var(--secondary)] font-medium">Documentation will be finalized once we are live. Join waitlist for updates.</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="#quickstart">
                Quick Start
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" as="a" href="/docs/api">
                API Reference
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Doc Sections */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {DOC_SECTIONS.map((section, i) => (
              <Link key={i} href={section.href}>
                <Card className="p-6 h-full hover:border-[var(--primary)] transition-colors">
                  <section.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm">
                    {section.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Quick Start
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Started in Minutes
            </h2>

            {/* Demo Notice */}
            <div className="mb-8 p-4 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-lg">
              <p className="text-sm text-[var(--secondary)]">
                <strong>Note:</strong> This is preview documentation. Code examples and SDK details will be finalized once we launch.
              </p>
            </div>

            <div className="space-y-8">
              <div id="installation">
                <h3 className="text-xl font-semibold text-white mb-4">1. Install the SDK</h3>
                <Card className="p-4 bg-[var(--bg-card)]">
                  <code className="text-sm text-[var(--primary)] font-mono">
                    npm install @sentinel-ai/sdk
                  </code>
                </Card>
              </div>

              <div id="authentication">
                <h3 className="text-xl font-semibold text-white mb-4">2. Initialize the Client</h3>
                <Card className="p-4 bg-[var(--bg-card)]">
                  <pre className="text-sm text-[var(--text-secondary)] font-mono overflow-x-auto">
{`import { Sentinel } from '@sentinel-ai/sdk';

const sentinel = new Sentinel({
  apiKey: process.env.SENTINEL_API_KEY
});`}
                  </pre>
                </Card>
              </div>

              <div id="scanning">
                <h3 className="text-xl font-semibold text-white mb-4">3. Scan for Bias</h3>
                <Card className="p-4 bg-[var(--bg-card)]">
                  <pre className="text-sm text-[var(--text-secondary)] font-mono overflow-x-auto">
{`const result = await sentinel.scan({
  text: "Your document content here",
  categories: ["gender", "race", "age"]
});

console.log(result.biasDetected);
console.log(result.suggestions);`}
                  </pre>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Guides
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Step-by-Step Tutorials
            </h2>
            <p className="text-[var(--text-muted)] text-sm mb-8">
              Coming soon — detailed guides will be available at launch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Integrating with HR Systems", desc: "Connect Sentinel AI Compliance Firewall to Workday, BambooHR, and more" },
                { title: "Custom Bias Categories", desc: "Define organization-specific bias patterns" },
                { title: "Webhook Configuration", desc: "Set up real-time notifications" },
                { title: "Batch Processing", desc: "Scan large document sets efficiently" },
              ].map((guide, i) => (
                <Card key={i} className="p-4 hover:border-[var(--primary)] transition-colors cursor-pointer">
                  <h4 className="font-semibold text-white mb-1">{guide.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{guide.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {QUICK_LINKS.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="p-4 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] transition-colors text-[var(--text-secondary)] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
