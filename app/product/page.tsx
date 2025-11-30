"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge } from "@/app/components/ui"
import { BIAS_CATEGORIES } from "@/app/constants/categories"
import {
  Shield,
  Zap,
  Code,
  Lock,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const FEATURES = [
  {
    icon: Shield,
    title: "9 Protected Categories",
    description:
      "Comprehensive detection across age, gender, race, nationality, disability, religion, sexual orientation, employment, and toxicity.",
  },
  {
    icon: Zap,
    title: "Real-Time Detection",
    description:
      "Sub-100ms latency ensures instant feedback without slowing down your workflows.",
  },
  {
    icon: Code,
    title: "Simple API",
    description:
      "RESTful API with SDKs for Python, JavaScript, and more. Integrate in minutes.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR, HIPAA compliant with AES-256 encryption and SSO support.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Track bias trends over time with comprehensive dashboards and exportable reports.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Detection works across English, Spanish, French, German, and more languages.",
  },
]

const CODE_EXAMPLE = `import sentinel from '@sentinel-ai/sdk';

const client = new sentinel.Client({
  apiKey: process.env.SENTINEL_API_KEY
});

// Scan text for bias
const result = await client.scan({
  text: "Looking for a young, energetic candidate",
  context: "job_description"
});

console.log(result.detected_labels);
// [{ category: "Age", confidence: 0.94 }]

console.log(result.policy_action);
// "WARN"`

export default function ProductPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Product
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Bias Detection for the Enterprise
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Our multi-model ML ensemble detects workplace bias across 9
              protected categories with industry-leading accuracy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="/contact?demo=true">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" as="a" href="#api">
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Enterprise-grade features built for security teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <Card key={i} className="p-6">
                <feature.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Deep Dive */}
      <section id="categories" className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              9 Categories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protected Categories
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Aligned with EEOC guidelines and anti-discrimination laws
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIAS_CATEGORIES.map((category) => (
              <Card key={category.id} className="p-6" hover={true}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {category.legalFramework}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {category.description}
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-medium text-[var(--text-muted)]">
                    Example phrases detected:
                  </p>
                  {category.examples.slice(0, 3).map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <CheckCircle
                        className="w-3 h-3 flex-shrink-0"
                        style={{ color: category.color }}
                      />
                      <span>&quot;{example}&quot;</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <span className="text-xs text-[var(--text-muted)]">
                    Detection accuracy
                  </span>
                  <span
                    className="text-sm font-mono font-bold"
                    style={{ color: category.color }}
                  >
                    {category.accuracy}%
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section id="api" className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                API & SDKs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Integrate in Minutes
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-6">
                Our RESTful API and official SDKs make integration simple.
                Connect to your existing workflows with just a few lines of
                code.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Official SDKs for Python, JavaScript, Go",
                  "Webhook support for real-time notifications",
                  "Batch processing for high-volume scanning",
                  "Comprehensive documentation with examples",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" as="a" href="/docs/api">
                View API Reference
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div>
              <Card variant="elevated" padding="none" className="overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-black)] border-b border-[var(--border)]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                  </div>
                  <span className="ml-2 text-sm text-[var(--text-muted)] font-mono">
                    example.ts
                  </span>
                </div>
                <pre className="p-4 text-sm font-mono text-[var(--text-secondary)] overflow-x-auto">
                  <code>{CODE_EXAMPLE}</code>
                </pre>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">
              Start your 14-day free trial and see Sentinel AI in action.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="/contact?demo=true">
                Request Demo
              </Button>
              <Button variant="ghost" size="lg" as="a" href="/pricing">
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
