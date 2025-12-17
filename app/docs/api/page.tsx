"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { Lock, Zap, Database, ArrowRight, Code } from "lucide-react"

const API_ENDPOINTS = [
  {
    method: "POST",
    endpoint: "/v1/scan",
    description: "Scan text for bias across all or specified categories",
  },
  {
    method: "POST",
    endpoint: "/v1/batch",
    description: "Batch scan multiple documents in a single request",
  },
  {
    method: "GET",
    endpoint: "/v1/categories",
    description: "List all available bias detection categories",
  },
  {
    method: "GET",
    endpoint: "/v1/results/:id",
    description: "Retrieve scan results by ID",
  },
  {
    method: "POST",
    endpoint: "/v1/webhooks",
    description: "Configure webhooks for async notifications",
  },
  {
    method: "GET",
    endpoint: "/v1/usage",
    description: "Get API usage statistics for your account",
  },
]

export default function ApiDocsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              API Reference
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SentinelAI API
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              RESTful API for integrating bias detection into your applications.
              Production-ready with enterprise-grade reliability.
            </p>

            {/* Coming Soon Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
              </span>
              <span className="text-[var(--secondary)] font-medium">API access coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* API Info */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="p-6 text-center">
              <Zap className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Low Latency</h3>
              <p className="text-sm text-[var(--text-muted)]">&lt;100ms average response time</p>
            </Card>
            <Card className="p-6 text-center">
              <Lock className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Secure</h3>
              <p className="text-sm text-[var(--text-muted)]">TLS 1.3 encryption</p>
            </Card>
            <Card className="p-6 text-center">
              <Database className="w-8 h-8 text-[var(--primary)] mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">High Availability</h3>
              <p className="text-sm text-[var(--text-muted)]">Enterprise SLA available</p>
            </Card>
          </div>

          {/* Base URL */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Base URL</h2>
            <Card className="p-4 bg-[var(--bg-card)]">
              <code className="text-[var(--primary)] font-mono">
                https://api.sentinelai-firewall.com
              </code>
            </Card>
          </div>

          {/* Authentication */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Authentication</h2>
            <p className="text-[var(--text-secondary)] mb-4">
              All API requests require authentication using an API key in the header:
            </p>
            <Card className="p-4 bg-[var(--bg-card)]">
              <pre className="text-sm text-[var(--text-secondary)] font-mono">
{`Authorization: Bearer sk_live_your_api_key_here`}
              </pre>
            </Card>
          </div>

          {/* Endpoints */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Planned Endpoints</h2>
            <div className="space-y-4">
              {API_ENDPOINTS.map((endpoint, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-start gap-4">
                    <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                      endpoint.method === "GET"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}>
                      {endpoint.method}
                    </span>
                    <div>
                      <code className="text-white font-mono">{endpoint.endpoint}</code>
                      <p className="text-sm text-[var(--text-muted)] mt-1">
                        {endpoint.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Example */}
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Example Request</h2>
            <Card className="p-4 bg-[var(--bg-card)]">
              <pre className="text-sm text-[var(--text-secondary)] font-mono overflow-x-auto">
{`curl -X POST https://api.sentinelai-firewall.com/v1/scan \\
  -H "Authorization: Bearer sk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "We are looking for a young, energetic candidate",
    "categories": ["age", "gender"],
    "language": "en"
  }'`}
              </pre>
            </Card>

            <h2 className="text-2xl font-bold text-white mb-4 mt-8">Example Response</h2>
            <Card className="p-4 bg-[var(--bg-card)]">
              <pre className="text-sm text-[var(--text-secondary)] font-mono overflow-x-auto">
{`{
  "id": "scan_abc123",
  "biasDetected": true,
  "confidence": 0.94,
  "categories": [
    {
      "name": "age",
      "severity": "medium",
      "phrase": "young, energetic",
      "suggestion": "Consider using 'motivated' or 'dynamic' instead"
    }
  ],
  "processedAt": "2025-12-15T10:30:00Z"
}`}
              </pre>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated" className="p-8 md:p-12 text-center">
              <Code className="w-16 h-16 text-[var(--primary)] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Get Early API Access
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Join our waitlist to be among the first to integrate SentinelAI&apos;s
                bias detection API into your applications. Early adopters will receive
                priority access and dedicated support.
              </p>
              <Button variant="primary" size="lg" as="a" href="/contact">
                Request API Access
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
