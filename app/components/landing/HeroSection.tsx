"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "@/app/components/ui"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
import { useWaitlist } from "@/app/context/WaitlistContext"

interface HeroSectionProps {
  showContent: boolean
}

export function HeroSection({ showContent }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    if (!showContent) return

    const tl = gsap.timeline()

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subheadlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
  }, [showContent])

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center px-4 ${showContent ? "visibility-visible" : "visibility-hidden"}`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-[#00FF88]/5 via-transparent to-transparent" />
        {/* Grid */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[var(--bg-card)] border border-[var(--border)] opacity-0"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]" />
          </span>
          <span className="text-sm text-[var(--text-secondary)]">
            Trusted by 500+ enterprise organizations
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0"
        >
          The Compliance Firewall for{" "}
          <span className="gradient-text">Enterprise Communications</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 opacity-0"
        >
          Enterprise-grade AI that detects and remediates workplace bias across{" "}
          <span className="text-white font-medium">9 protected categories</span>.
          Prevent liability before it happens.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
        >
          <Button variant="accent" size="lg" onClick={openWaitlist}>
            <Sparkles className="w-5 h-5" />
            Join Waitlist
          </Button>
          <Button variant="ghost" size="lg" as="a" href="/contact?demo=true">
            Request Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-[var(--border)]">
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Enterprise security certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "CCPA"].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 text-[var(--text-secondary)]"
              >
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
