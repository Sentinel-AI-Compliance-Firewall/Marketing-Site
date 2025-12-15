"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const BLOG_POSTS = [
  {
    title: "The Hidden Cost of Workplace Bias: A 2024 Analysis",
    excerpt: "New research reveals that workplace discrimination costs Fortune 500 companies an average of $8.1 billion annually in lost productivity, legal fees, and turnover.",
    author: "Dr. Sarah Chen",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "Research",
    featured: true,
  },
  {
    title: "How AI is Transforming HR Compliance",
    excerpt: "From manual audits to real-time detection: exploring the evolution of workplace compliance technology and what it means for HR teams.",
    author: "Marcus Johnson",
    date: "November 8, 2024",
    readTime: "6 min read",
    category: "Technology",
    featured: true,
  },
  {
    title: "Understanding the 9 Protected Categories",
    excerpt: "A comprehensive guide to the protected categories under EEOC guidelines and how organizations can ensure compliance across all of them.",
    author: "Dr. Elena Rodriguez",
    date: "October 28, 2024",
    readTime: "12 min read",
    category: "Compliance",
    featured: false,
  },
  {
    title: "Case Study: How TechCorp Reduced Bias Incidents by 73%",
    excerpt: "Learn how a Fortune 100 technology company implemented Sentinel and dramatically improved their workplace culture in just 6 months.",
    author: "David Park",
    date: "October 20, 2024",
    readTime: "10 min read",
    category: "Case Study",
    featured: false,
  },
  {
    title: "The Future of Fair Hiring: Trends to Watch in 2025",
    excerpt: "From blind resume screening to AI-powered interview analysis, explore the technologies reshaping how companies hire.",
    author: "Dr. Sarah Chen",
    date: "October 12, 2024",
    readTime: "7 min read",
    category: "Trends",
    featured: false,
  },
  {
    title: "Building Inclusive Job Descriptions: A Practical Guide",
    excerpt: "Common phrases that inadvertently exclude qualified candidates and how to write job posts that attract diverse talent.",
    author: "Marcus Johnson",
    date: "October 5, 2024",
    readTime: "5 min read",
    category: "Guide",
    featured: false,
  },
]

const CATEGORIES = ["All", "Research", "Technology", "Compliance", "Case Study", "Trends", "Guide"]

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured)
  const regularPosts = BLOG_POSTS.filter(post => !post.featured)

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
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  i === 0
                    ? "bg-[var(--primary)] text-black"
                    : "border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.map((post, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors cursor-pointer">
                <Badge variant="outline" className="mb-4">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded bg-[var(--primary)]/20 text-[var(--primary)]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="ghost" size="lg">
              Load More Posts
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Get the latest insights on workplace fairness and AI ethics delivered to your inbox.
            </p>
            <Button variant="primary" size="lg" as="a" href="#newsletter">
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
