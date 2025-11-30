"use client"

import { useState, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

// Core components
import Preloader from "@/app/components/preloader/preloader"
import HeroScroll from "@/app/components/HeroScroll"
import { Footer } from "@/app/components/layout"

// Landing page sections
import {
  StatsSection,
  CategoriesGrid,
  InteractiveDemo,
  HowItWorks,
  CTASection,
} from "@/app/components/landing"

// Smooth scroll
import SmoothScroll from "@/app/components/SmoothScroll"
import ScrollManager from "@/app/components/ScrollManager"

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false)
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useEffect(() => {
    if (preloaderFinished) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setPageReady(true)
        ScrollTrigger.refresh()
      }, 100)
    }
  }, [preloaderFinished])

  return (
    <SmoothScroll>
      <ScrollManager isLocked={!preloaderFinished} />

      {/* Preloader */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Main content */}
      <main className="bg-black min-h-screen">
        {/* Hero with Frame Animation */}
        <HeroScroll onFirstFrameReady={() => {}} showContent={pageReady} />

        {/* Stats / Problem Statement */}
        <StatsSection />

        {/* 9 Categories Grid */}
        <CategoriesGrid />

        {/* Interactive Demo */}
        <InteractiveDemo />

        {/* How It Works */}
        <HowItWorks />

        {/* Final CTA */}
        <CTASection />

        {/* Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  )
}
