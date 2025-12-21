"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { MessageCircle, Mail, ArrowRight, HelpCircle, Zap, Shield, Code } from "lucide-react"

const HELP_CATEGORIES = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "Quick start guides and onboarding tutorials",
  },
  {
    icon: Code,
    title: "API & Integrations",
    description: "REST API docs and integration guides",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Data privacy and EEOC compliance",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
  },
]

const FAQ = [
  {
    question: "What is Sentinel AI Compliance Firewall?",
    answer: "Sentinel AI Compliance Firewall is an AI-powered bias detection platform that helps organizations identify and prevent workplace discrimination in HR documents, communications, and processes. We detect bias across 9 EEOC-protected categories in real-time.",
  },
  {
    question: "What are the 9 protected categories you detect?",
    answer: "We detect bias related to: Age, Gender, Race & Ethnicity, Nationality, Disability, Religion, Sexual Orientation, Employment practices, and Toxicity/harassment. These align with EEOC guidelines.",
  },
  {
    question: "How accurate is the bias detection?",
    answer: "Our multi-model ML ensemble achieves 99.7% accuracy on internal benchmarks. We use advanced NLP models (DeBERTa + RoBERTa) that analyze context, not just keywords, to minimize false positives.",
  },
  {
    question: "How fast is the scanning?",
    answer: "Real-time detection with sub-100ms latency for single documents. Our system can handle batch processing for high-volume enterprise needs.",
  },
  {
    question: "Is my data secure?",
    answer: "Security is our priority. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We follow data minimization principles and never use customer data to train our models.",
  },
  {
    question: "When will the platform launch?",
    answer: "We're currently in pre-launch phase. Join our waitlist to get early access and be notified when we launch. Early adopters will receive priority support and special pricing.",
  },
  {
    question: "How can I get early access?",
    answer: "You can request early access by filling out our contact form. Select 'Request Early Demo' to schedule a demo or 'Early API Access' for API integration.",
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
            <p className="text-xl text-[var(--text-secondary)]">
              Browse our FAQ below or contact our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Knowledge Base</h2>
            <p className="text-[var(--text-muted)]">Documentation coming soon</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {HELP_CATEGORIES.map((category, i) => (
              <Card key={i} className="p-6 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)] font-medium">
                    Coming Soon
                  </span>
                </div>
                <category.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                <h3 className="font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[var(--bg-dark)]">
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
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Need More Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="p-6 text-center">
                <MessageCircle className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Request a Demo</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">See Sentinel AI in action with a personalized demo</p>
                <Button variant="outline" size="sm" as="a" href="/contact?demo=true">
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
              <Card className="p-6 text-center">
                <Mail className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">Have questions? Our team is here to help</p>
                <Button variant="outline" size="sm" as="a" href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
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
