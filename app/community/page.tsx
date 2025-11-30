"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Users, MessageSquare, Github, Calendar, ArrowRight, Star, GitPullRequest, BookOpen } from "lucide-react"
import Link from "next/link"

const COMMUNITY_STATS = [
  { value: "5,000+", label: "Community Members" },
  { value: "1,200+", label: "Discord Members" },
  { value: "500+", label: "GitHub Stars" },
  { value: "100+", label: "Contributors" },
]

const COMMUNITY_CHANNELS = [
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Join our Discord server to chat with other users, ask questions, and share feedback.",
    link: "https://discord.gg/sentinel",
    linkText: "Join Discord",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Star our repo, report issues, contribute to open-source projects, and explore our SDK.",
    link: "https://github.com/sentinel-ai",
    linkText: "View GitHub",
  },
  {
    icon: BookOpen,
    title: "Forum",
    description: "Browse discussions, share best practices, and learn from other compliance professionals.",
    link: "#",
    linkText: "Visit Forum",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Attend webinars, workshops, and community meetups to learn and network.",
    link: "#",
    linkText: "View Events",
  },
]

const RECENT_DISCUSSIONS = [
  {
    title: "Best practices for scanning large document batches",
    author: "sarah_dev",
    replies: 23,
    category: "Best Practices",
  },
  {
    title: "Custom bias categories for healthcare industry",
    author: "health_compliance",
    replies: 15,
    category: "Use Cases",
  },
  {
    title: "Webhook integration with Slack - step by step guide",
    author: "integration_guru",
    replies: 42,
    category: "Tutorials",
  },
  {
    title: "Feature request: Multi-tenant dashboard",
    author: "enterprise_admin",
    replies: 31,
    category: "Feature Requests",
  },
]

const OPEN_SOURCE = [
  {
    name: "sentinel-sdk-node",
    description: "Official Node.js SDK for Sentinel API",
    stars: 234,
    prs: 12,
  },
  {
    name: "sentinel-sdk-python",
    description: "Official Python SDK with async support",
    stars: 189,
    prs: 8,
  },
  {
    name: "bias-detection-models",
    description: "Research models and datasets for bias detection",
    stars: 456,
    prs: 24,
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
              Join the Sentinel Community
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Connect with thousands of developers, compliance professionals, and
              organizations building fairer workplaces together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" as="a" href="https://discord.gg/sentinel">
                Join Discord
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="lg" as="a" href="https://github.com/sentinel-ai">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {COMMUNITY_STATS.map((stat, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="text-3xl font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {COMMUNITY_CHANNELS.map((channel, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors">
                <channel.icon className="w-10 h-10 text-[var(--primary)] mb-4" />
                <h3 className="font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">{channel.description}</p>
                <a href={channel.link} className="text-sm text-[var(--primary)] hover:underline inline-flex items-center gap-1">
                  {channel.linkText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">Recent Discussions</h2>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-4">
              {RECENT_DISCUSSIONS.map((discussion, i) => (
                <Card key={i} className="p-4 hover:border-[var(--primary)] transition-colors cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium text-white mb-2">{discussion.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span>@{discussion.author}</span>
                        <span className="px-2 py-0.5 rounded bg-[var(--primary)]/20 text-[var(--primary)] text-xs">
                          {discussion.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                      <MessageSquare className="w-4 h-4" />
                      {discussion.replies}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Open Source Projects</h2>
              <p className="text-[var(--text-secondary)]">
                Contribute to our open-source SDKs and research projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OPEN_SOURCE.map((repo, i) => (
                <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors">
                  <h3 className="font-semibold text-white mb-2 font-mono text-sm">{repo.name}</h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4">{repo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitPullRequest className="w-4 h-4" />
                      {repo.prs} open PRs
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Become part of a growing community dedicated to workplace fairness.
            </p>
            <Button variant="primary" size="lg" as="a" href="https://discord.gg/sentinel">
              Join Our Discord
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
