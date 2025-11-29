"use client"

import type React from "react"

import { ReactLenis } from "lenis/react"

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.09, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
