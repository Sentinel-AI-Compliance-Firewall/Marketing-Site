"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Badge, Button } from "@/app/components/ui"
import { CheckCircle, ArrowRight, Activity, Bell } from "lucide-react"

const SERVICES = [
  { name: "API", status: "operational" },
  { name: "Dashboard", status: "operational" },
  { name: "Bias Detection Engine", status: "operational" },
  { name: "Authentication", status: "operational" },
  { name: "Webhooks", status: "operational" },
]

export default function StatusPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              System Status
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Service Status
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Real-time status of SentinelAI services and infrastructure.
            </p>

            {/* Coming Soon Banner */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--secondary)]"></span>
              </span>
              <span className="text-[var(--secondary)] font-medium">Live status page coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated" className="p-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--success)]/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[var(--success)]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">All Systems Operational</h2>
                  <p className="text-sm text-[var(--text-muted)]">Last updated: Just now</p>
                </div>
              </div>
            </Card>

            {/* Services List */}
            <div className="space-y-3">
              {SERVICES.map((service, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">{service.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[var(--success)]">Operational</span>
                      <div className="w-2 h-2 rounded-full bg-[var(--success)]" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center">
              <Activity className="w-8 h-8 text-[var(--primary)]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Live Status Dashboard Coming Soon
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              We&apos;re building a comprehensive status page with real-time monitoring,
              incident history, and scheduled maintenance notifications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-center">
                <Activity className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
                <h3 className="font-medium text-white text-sm">Real-time Monitoring</h3>
              </Card>
              <Card className="p-4 text-center">
                <Bell className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
                <h3 className="font-medium text-white text-sm">Status Notifications</h3>
              </Card>
              <Card className="p-4 text-center">
                <CheckCircle className="w-6 h-6 text-[var(--primary)] mx-auto mb-2" />
                <h3 className="font-medium text-white text-sm">Incident History</h3>
              </Card>
            </div>

            <Button variant="primary" as="a" href="/contact">
              Get Notified When Ready
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
