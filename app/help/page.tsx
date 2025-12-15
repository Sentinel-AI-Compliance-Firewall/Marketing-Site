"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button, Input } from "@/app/components/ui"
import { Search, Book, MessageCircle, Mail, Phone, ArrowRight, HelpCircle, Zap, Shield, Code } from "lucide-react"
import Link from "next/link"

const HELP_CATEGORIES = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "Quick start guides and onboarding help",
    articles: 12,
  },
  {
    icon: Code,
    title: "API & Integrations",
    description: "Technical documentation and API guides",
    articles: 24,
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security settings and compliance information",
    articles: 18,
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: 31,
  },
]

const POPULAR_ARTICLES = [
  { title: "How to set up your first scan", category: "Getting Started" },
  { title: "Understanding bias severity levels", category: "Getting Started" },
  { title: "Configuring webhook notifications", category: "API & Integrations" },
  { title: "Managing team permissions", category: "Account" },
  { title: "Interpreting scan results", category: "Getting Started" },
  { title: "Rate limits and quotas explained", category: "API & Integrations" },
]

const FAQ = [
  {
    question: "How accurate is Sentinel's bias detection?",
    answer: "Sentinel achieves 99.7% accuracy across all 9 protected categories, validated through extensive testing with diverse datasets and regular third-party audits.",
  },
  {
    question: "What languages does Sentinel support?",
    answer: "We currently support 12 languages including English, Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Italian, Dutch, Arabic, and Hindi.",
  },
  {
    question: "How long does it take to scan a document?",
    answer: "Most documents are scanned in under 100ms. Batch processing of large document sets is optimized for throughput while maintaining low latency.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Sentinel is SOC 2 Type II certified, GDPR compliant, and offers HIPAA-compliant deployments. All data is encrypted in transit and at rest.",
  },
]

export default function HelpPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Search our knowledge base or browse categories to find answers.
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                className="pl-12 py-4 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {HELP_CATEGORIES.map((category, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors cursor-pointer">
                <category.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                <h3 className="font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-3">{category.description}</p>
                <span className="text-xs text-[var(--primary)]">{category.articles} articles</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {POPULAR_ARTICLES.map((article, i) => (
                <Card key={i} className="p-4 hover:border-[var(--primary)] transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-white mb-1">{article.title}</h3>
                      <span className="text-xs text-[var(--text-muted)]">{article.category}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-semibold text-white mb-3">{item.question}</h3>
                  <p className="text-[var(--text-secondary)]">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Still Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <MessageCircle className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">Chat with our support team in real-time</p>
                <Button variant="ghost" size="sm">
                  Start Chat
                </Button>
              </Card>
              <Card className="p-6 text-center">
                <Mail className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">Get a response within 24 hours</p>
                <Button variant="ghost" size="sm" as="a" href="mailto:support@sentinel-ai.com">
                  Send Email
                </Button>
              </Card>
              <Card className="p-6 text-center">
                <Phone className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">Enterprise customers only</p>
                <Button variant="ghost" size="sm">
                  Schedule Call
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
