"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge } from "@/app/components/ui"
import { MapPin, Clock, ArrowRight, Heart, Zap, Globe, Users } from "lucide-react"
import Link from "next/link"

const BENEFITS = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family",
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO",
  },
  {
    icon: Globe,
    title: "Global Team",
    description: "Work with talented people from around the world",
  },
  {
    icon: Users,
    title: "Growth",
    description: "Learning budget, conference attendance, and career development",
  },
]

const JOB_OPENINGS = [
  {
    title: "Senior Machine Learning Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build and improve our bias detection ML models",
  },
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (US/EU)",
    type: "Full-time",
    description: "Create beautiful, accessible interfaces for our dashboard",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Shape the future of workplace fairness technology",
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    description: "Help Fortune 500 companies build fair workplaces",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "Ensure our customers achieve their compliance goals",
  },
  {
    title: "Technical Writer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create world-class documentation and developer guides",
  },
]

export default function CareersPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Careers
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Help us build a future where every workplace is fair, inclusive,
              and free from bias. We&apos;re looking for passionate people to join our team.
            </p>
            <Button variant="primary" size="lg" as="a" href="#openings">
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join Sentinel?</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              We offer competitive compensation and benefits to support your best work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {BENEFITS.map((benefit, i) => (
              <Card key={i} className="p-6 text-center">
                <benefit.icon className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Open Positions
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-4">Current Openings</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Find your next opportunity at Sentinel
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {JOB_OPENINGS.map((job, i) => (
              <Card key={i} className="p-6 hover:border-[var(--primary)] transition-colors cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-[var(--primary)]/20 text-[var(--primary)]">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1">{job.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] mb-3">{job.description}</p>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Apply
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              We&apos;re always looking for talented people. Send us your resume and
              we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button variant="primary" size="lg" as="a" href="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
