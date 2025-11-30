"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge } from "@/app/components/ui"
import {
  Shield,
  Target,
  Heart,
  Zap,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const MISSION_STATS = [
  { value: "1M+", label: "Documents Scanned" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "9", label: "Protected Categories" },
  { value: "99.7%", label: "Detection Accuracy" },
]

const VALUES = [
  {
    icon: Shield,
    title: "Fairness First",
    description:
      "We believe every workplace decision should be free from bias. Our technology ensures equitable treatment for all.",
  },
  {
    icon: Target,
    title: "Precision Matters",
    description:
      "False positives erode trust. We invest heavily in accuracy to deliver actionable insights, not noise.",
  },
  {
    icon: Heart,
    title: "Human-Centered AI",
    description:
      "AI should empower humans, not replace them. Our tools augment HR teams with intelligence, not automation.",
  },
  {
    icon: Zap,
    title: "Speed & Scale",
    description:
      "Real-time detection at enterprise scale. We process millions of documents without compromising performance.",
  },
]

const TIMELINE = [
  {
    year: "2021",
    title: "Research Begins",
    description:
      "Started as an academic research project at Stanford, studying bias in hiring algorithms and workplace communications.",
  },
  {
    year: "2022",
    title: "Company Founded",
    description:
      "Spun out of Stanford with seed funding to commercialize bias detection technology. First prototype deployed.",
  },
  {
    year: "2023",
    title: "Enterprise Launch",
    description:
      "Released enterprise product with SOC 2 Type II certification. Signed first Fortune 500 customers.",
  },
  {
    year: "2024",
    title: "Scale & Impact",
    description:
      "Expanded to 9 protected categories, launched multi-language support, and reached 1M+ documents scanned.",
  },
]

const TEAM = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Stanford AI Lab researcher. PhD in NLP with focus on fairness in ML systems.",
    image: "/team/sarah.jpg",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-Founder",
    bio: "Ex-Google ML engineer. Built large-scale NLP systems processing billions of documents.",
    image: "/team/marcus.jpg",
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Chief Science Officer",
    bio: "Leading expert in algorithmic fairness. Former Microsoft Research. 50+ published papers.",
    image: "/team/elena.jpg",
  },
  {
    name: "David Park",
    role: "VP of Engineering",
    bio: "Former Stripe infrastructure lead. Expert in building secure, scalable enterprise systems.",
    image: "/team/david.jpg",
  },
]

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Fair Workplaces Through AI
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              We&apos;re on a mission to eliminate workplace bias and create
              equitable opportunities for everyone. Our AI-powered platform
              helps organizations detect and prevent discrimination before it
              happens.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {MISSION_STATS.map((stat, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Bias Detection That Protects Everyone
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-6">
                Workplace discrimination costs businesses billions annually and
                causes immeasurable harm to individuals. Traditional compliance
                approaches react after damage is done. We believe in prevention.
              </p>
              <p className="text-[var(--text-secondary)] text-lg mb-8">
                Our multi-model ML ensemble analyzes text in real-time,
                detecting subtle patterns of bias across 9 protected categories
                aligned with EEOC guidelines. We catch issues before they become
                incidents.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time scanning of all workplace communications",
                  "Configurable policies for different contexts",
                  "Actionable remediation suggestions",
                  "Comprehensive audit trails for compliance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-[var(--text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card variant="elevated" className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Global Impact
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Making workplaces fairer worldwide
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)]">
                      Biased content flagged
                    </span>
                    <span className="text-sm font-mono text-[var(--primary)]">
                      2.3M+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)]">
                      Discrimination incidents prevented
                    </span>
                    <span className="text-sm font-mono text-[var(--primary)]">
                      50K+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)]">
                      Countries served
                    </span>
                    <span className="text-sm font-mono text-[var(--primary)]">
                      35+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)]">
                      Languages supported
                    </span>
                    <span className="text-sm font-mono text-[var(--primary)]">
                      12
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              Our core values guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {VALUES.map((value, i) => (
              <Card key={i} className="p-6">
                <value.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From Research to Reality
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] md:-translate-x-px" />

              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-[var(--primary)] md:-translate-x-1.5 ring-4 ring-black" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-sm font-mono text-[var(--primary)]">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Leadership
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              World-class experts in AI, fairness, and enterprise software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-[var(--bg-dark)] mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--primary)] mb-3">
                  {member.role}
                </p>
                <p className="text-xs text-[var(--text-muted)]">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us in Building Fair Workplaces
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">
              Whether you&apos;re looking to protect your organization or join
              our team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="/contact?demo=true">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" as="a" href="/careers">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
