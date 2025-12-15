"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp, FileText } from "lucide-react"

// Upcoming topics we'll cover
const UPCOMING_TOPICS = [
  {
    icon: BookOpen,
    title: "Understanding EEOC Guidelines",
    description: "A comprehensive breakdown of all 9 protected categories and what they mean for your organization.",
    category: "Compliance",
  },
  {
    icon: Lightbulb,
    title: "AI Ethics in HR",
    description: "How to implement AI-powered tools responsibly while maintaining fairness and transparency.",
    category: "Technology",
  },
  {
    icon: TrendingUp,
    title: "Bias Detection Best Practices",
    description: "Practical strategies for identifying and eliminating bias in workplace communications.",
    category: "Guide",
  },
  {
    icon: FileText,
    title: "Writing Inclusive Job Posts",
    description: "Learn to craft job descriptions that attract diverse talent without unintentional bias.",
    category: "How-To",
  },
]

// Sample preview articles (coming soon)
const PREVIEW_POSTS = [
  {
    title: "The Hidden Cost of Workplace Bias: A 2025 Analysis",
    excerpt: "New research reveals that workplace discrimination costs Fortune 500 companies an average of $8.1 billion annually in lost productivity, legal fees, and turnover.",
    date: "Coming January 2025",
    readTime: "8 min read",
    category: "Research",
  },
  {
    title: "How AI is Transforming HR Compliance",
    excerpt: "From manual audits to real-time detection: exploring the evolution of workplace compliance technology and what it means for HR teams.",
    date: "Coming January 2025",
    readTime: "6 min read",
    category: "Technology",
  },
  {
    title: "Case Study: Reducing Bias Incidents by 73%",
    excerpt: "Learn how organizations are implementing AI-powered bias detection to dramatically improve their workplace culture.",
    date: "Coming February 2025",
    readTime: "10 min read",
    category: "Case Study",
  },
]

export default function BlogPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Expert insights on workplace fairness, AI ethics, compliance best practices,
              and the future of HR technology.
            </p>

            {/* Coming Soon Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
              </span>
              <span className="text-[var(--secondary)] font-medium">Full blog launching January 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What to Expect</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We&apos;re preparing in-depth articles, guides, and research to help you build fairer workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {UPCOMING_TOPICS.map((topic, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
                  <topic.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <span className="text-xs px-2 py-1 rounded bg-[var(--bg-dark)] text-[var(--text-muted)] mb-3 inline-block">
                  {topic.category}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">{topic.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{topic.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Posts */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-[var(--text-secondary)]">
              Here&apos;s a sneak peek at some of the articles we&apos;re working on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PREVIEW_POSTS.map((post, i) => (
              <Card key={i} className="p-6 relative overflow-hidden">
                {/* Coming Soon Overlay */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-[var(--secondary)]/20 text-[var(--secondary)] font-medium">
                    Coming Soon
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded bg-[var(--primary)]/20 text-[var(--primary)]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 pr-16">{post.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="container">
          <Card variant="elevated" className="max-w-3xl mx-auto p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be the First to Read
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              Join our waitlist to get notified when we publish new articles. Plus, get early access
              to exclusive research and guides on workplace fairness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" as="a" href="/contact">
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
