"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Users, MessageSquare, Github, Calendar, ArrowRight, BookOpen } from "lucide-react"

const COMMUNITY_FEATURES = [
  {
    icon: MessageSquare,
    title: "Discord Server",
    description: "Chat with other users, ask questions, and share feedback in real-time.",
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Contribute to our SDKs, report issues, and explore our public repositories.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description: "Browse discussions, share best practices, and learn from other professionals.",
  },
  {
    icon: Calendar,
    title: "Events & Webinars",
    description: "Attend workshops and community meetups to learn and network.",
  },
]

export default function CommunityPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Community
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join the SentinelAI Community
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Connect with developers, compliance professionals, and organizations
              building fairer workplaces together.
            </p>

            {/* Coming Soon Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
              </span>
              <span className="text-[var(--secondary)] font-medium">Community launching soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What to Expect</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We&apos;re building a community where you can learn, share, and grow
              with like-minded professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {COMMUNITY_FEATURES.map((feature, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Notified */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated" className="p-8 md:p-12 text-center">
              <Users className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Be the First to Join
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Sign up to get notified when our community launches. Early members
                will get exclusive access and recognition as founding members.
              </p>
              <Button variant="primary" size="lg" as="a" href="/contact">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
