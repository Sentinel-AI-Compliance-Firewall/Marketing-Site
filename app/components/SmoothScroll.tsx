"use client"

import type React from "react"
import { useEffect } from "react"
import { ReactLenis, useLenis } from "lenis/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

function ScrollTriggerSync() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    gsap.registerPlugin(ScrollTrigger)

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off("scroll", ScrollTrigger.update)
    }
  }, [lenis])

  return null
}

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.5, smoothWheel: true }}>
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
