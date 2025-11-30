"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge } from "@/app/components/ui"
import {
  Shield,
  Lock,
  Key,
  Server,
  Eye,
  FileCheck,
  Globe,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react"

const CERTIFICATIONS = [
  {
    name: "SOC 2 Type II",
    description: "Annual audit of security controls and processes",
    icon: Shield,
    status: "Certified",
  },
  {
    name: "GDPR",
    description: "Full compliance with EU data protection regulations",
    icon: Globe,
    status: "Compliant",
  },
  {
    name: "HIPAA",
    description: "Healthcare data protection standards",
    icon: FileCheck,
    status: "Compliant",
  },
  {
    name: "ISO 27001",
    description: "International security management standard",
    icon: CheckCircle,
    status: "Certified",
  },
]

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description:
      "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Your data is protected by military-grade encryption.",
  },
  {
    icon: Key,
    title: "SSO & SAML",
    description:
      "Enterprise single sign-on support with SAML 2.0 and OAuth integration. Supports Okta, Azure AD, and Google Workspace.",
  },
  {
    icon: Server,
    title: "SOC 2 Infrastructure",
    description:
      "Hosted on AWS with SOC 2 Type II certified data centers. Multi-region availability with automatic failover.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description:
      "Comprehensive audit trails for all API calls and user actions. Logs are immutable and retained for compliance.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description:
      "Granular RBAC controls let you define exactly who can access what. Supports custom roles and permissions.",
  },
  {
    icon: Globe,
    title: "Data Residency",
    description:
      "Choose where your data is stored. Available regions include US, EU, and Asia-Pacific for compliance needs.",
  },
]

const DATA_PRACTICES = [
  {
    title: "Data Minimization",
    description:
      "We only collect data necessary to provide our service. Text is processed and results returned - we don't store your content longer than needed.",
  },
  {
    title: "No Training on Your Data",
    description:
      "Your data is never used to train our models. Our ML systems are pre-trained and your content remains your own.",
  },
  {
    title: "Right to Deletion",
    description:
      "Request complete deletion of your data at any time. We provide tools to export and remove all your information.",
  },
  {
    title: "Transparent Processing",
    description:
      "Clear documentation of how we process data. No hidden data sharing or third-party access without consent.",
  },
]

const SECURITY_FAQ = [
  {
    question: "Where is my data stored?",
    answer:
      "By default, data is stored in AWS US-East. Enterprise customers can choose from US, EU (Frankfurt), or Asia-Pacific (Singapore) regions for data residency compliance.",
  },
  {
    question: "Do you use my data to train AI models?",
    answer:
      "No. We never use customer data to train or improve our models. Our bias detection models are pre-trained on curated, consented datasets. Your data remains strictly yours.",
  },
  {
    question: "How long do you retain data?",
    answer:
      "Scan results and audit logs are retained for 90 days by default. Enterprise customers can configure custom retention periods. Original text content is deleted immediately after processing.",
  },
  {
    question: "Can I get a copy of your SOC 2 report?",
    answer:
      "Yes. Our SOC 2 Type II report is available under NDA. Contact our security team at security@sentinel-ai.com to request a copy.",
  },
  {
    question: "Do you support on-premise deployment?",
    answer:
      "Enterprise customers can deploy Sentinel AI in their own cloud environment (AWS, GCP, Azure) or on-premise. Contact sales for details.",
  },
]

export default function SecurityPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Security
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise-Grade Security
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Your data security is our top priority. We&apos;ve built Sentinel
              AI from the ground up with security and compliance at its core.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="#certifications">
                View Certifications
              </Button>
              <Button variant="ghost" size="lg" as="a" href="mailto:security@sentinel-ai.com">
                Contact Security Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="pb-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-[var(--text-secondary)]">
              Independently audited and certified to meet the highest standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((cert, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  {cert.description}
                </p>
                <Badge variant="success" size="sm">
                  {cert.status}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Infrastructure
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for Security
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Every layer of our infrastructure is designed with security in
              mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_FEATURES.map((feature, i) => (
              <Card key={i} className="p-6">
                <feature.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Privacy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Data Stays Yours
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8">
                We take a privacy-first approach to data handling. Your content
                is processed and protected - never shared, sold, or used for
                training.
              </p>

              <div className="space-y-6">
                {DATA_PRACTICES.map((practice, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {practice.title}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)]">
                        {practice.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card variant="elevated" className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Report a Vulnerability
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  We run a responsible disclosure program and reward security
                  researchers who help us keep our platform secure.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                    <span>Bug bounty rewards up to $10,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                    <span>Safe harbor policy</span>
                  </div>
                </div>
                <Button variant="outline" fullWidth as="a" href="mailto:security@sentinel-ai.com">
                  Report Vulnerability
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security FAQ */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Security FAQ
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {SECURITY_FAQ.map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Center CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need More Information?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Our security team is here to answer your questions and provide
              documentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="mailto:security@sentinel-ai.com">
                Contact Security Team
              </Button>
              <Button variant="ghost" size="lg" as="a" href="/docs/security">
                Security Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
