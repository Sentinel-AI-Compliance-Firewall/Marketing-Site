"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge } from "@/app/components/ui"
import { Sparkles, Bug, Zap, Shield } from "lucide-react"

const CHANGELOG_ENTRIES = [
  {
    version: "1.0.0",
    date: "December 2025",
    type: "feature",
    title: "Initial Release - SentinelAI Compliance Firewall",
    changes: [
      "AI-powered bias detection platform",
      "Support for 9 EEOC-protected categories",
      "Real-time detection with sub-100ms latency",
      "RESTful API for seamless integration",
      "Enterprise-grade security with TLS 1.3 encryption",
    ],
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "feature":
      return <Sparkles className="w-5 h-5 text-[var(--primary)]" />
    case "fix":
      return <Bug className="w-5 h-5 text-orange-400" />
    case "improvement":
      return <Zap className="w-5 h-5 text-blue-400" />
    case "security":
      return <Shield className="w-5 h-5 text-green-400" />
    default:
      return <Sparkles className="w-5 h-5 text-[var(--primary)]" />
  }
}

const getTypeBadge = (type: string) => {
  const colors: Record<string, string> = {
    feature: "bg-[var(--primary)]/20 text-[var(--primary)]",
    fix: "bg-orange-500/20 text-orange-400",
    improvement: "bg-blue-500/20 text-blue-400",
    security: "bg-green-500/20 text-green-400",
  }
  return colors[type] || colors.feature
}

export default function ChangelogPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Changelog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              What&apos;s New
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Stay up to date with the latest features, improvements, and fixes
              to the Sentinel platform.
            </p>
          </div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {CHANGELOG_ENTRIES.map((entry, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getTypeIcon(entry.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-lg font-bold text-white">
                        v{entry.version}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${getTypeBadge(entry.type)}`}>
                        {entry.type}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">
                        {entry.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {entry.title}
                    </h3>
                    <ul className="space-y-2 list-disc list-inside marker:text-[var(--primary)]">
                      {entry.changes.map((change, j) => (
                        <li key={j} className="text-sm text-[var(--text-secondary)]">
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
