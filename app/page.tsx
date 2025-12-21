"use client"

import { useState, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

// Core components
import Preloader from "@/app/components/preloader/preloader"
import HeroScroll from "@/app/components/HeroScroll"
import HeroScrollStatic from "@/app/components/HeroScrollStatic"
import { Footer } from "@/app/components/layout"

// Landing page sections
import {
  StatsSection,
  CategoriesGrid,
  InteractiveDemo,
  HowItWorks,
  CTASection,
  TrustedBy,
} from "@/app/components/landing"

// Smooth scroll
import SmoothScroll from "@/app/components/SmoothScroll"
import ScrollManager from "@/app/components/ScrollManager"

// Session storage key for tracking first visit
const VISITED_KEY = "sentinel_visited"

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false)
  const [pageReady, setPageReady] = useState(false)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Register GSAP plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  // Check session storage after mount (client-side only)
  useEffect(() => {
    setMounted(true)
    try {
      const hasVisited = sessionStorage.getItem(VISITED_KEY)
      if (hasVisited) {
        // Return visit - skip preloader
        setIsFirstVisit(false)
        setPreloaderFinished(true)
        setPageReady(true)
      } else {
        // First visit - mark as visited and show preloader
        sessionStorage.setItem(VISITED_KEY, "true")
        setIsFirstVisit(true)
      }
    } catch {
      // SessionStorage not available - show preloader
      setIsFirstVisit(true)
    }
  }, [])

  // When preloader finishes, set page ready
  useEffect(() => {
    if (preloaderFinished && isFirstVisit) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setPageReady(true)
        ScrollTrigger.refresh()
      }, 100)
    }
  }, [preloaderFinished, isFirstVisit])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-black min-h-screen" />
    )
  }

  return (
    <SmoothScroll>
      <ScrollManager isLocked={isFirstVisit && !preloaderFinished} />

      {/* Preloader - only on first visit */}
      {isFirstVisit && !preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Main content */}
      <main id="main-content" className="bg-black min-h-screen">
        {/* Hero with Frame Animation - use static version on return visits */}
        {isFirstVisit ? (
          <HeroScroll onFirstFrameReady={() => {}} showContent={pageReady} />
        ) : (
          <HeroScrollStatic />
        )}

        {/* Stats / Problem Statement */}
        <StatsSection />

        {/* 9 Categories Grid */}
        <CategoriesGrid />

        {/* Interactive Demo */}
        <InteractiveDemo />

        {/* How It Works */}
        <HowItWorks />

        {/* Trust Indicators */}
        <TrustedBy />

        {/* Final CTA */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  )
}
