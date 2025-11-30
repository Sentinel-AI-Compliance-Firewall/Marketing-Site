"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const MarqueeText = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const container = containerRef.current
    if (!cursor || !container) return

    const handleMouseMove = (e: MouseEvent) => {
      if (isHovering.current) {
        gsap.to(cursor, {
          x: e.clientX - 16,
          y: e.clientY - 16,
          duration: 0.1,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleMouseEnter = () => {
    isHovering.current = true
    gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.2 })
    document.body.style.cursor = "none"
  }

  const handleMouseLeave = () => {
    isHovering.current = false
    gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2 })
    document.body.style.cursor = "auto"
  }

  const marqueeText = "Featured Works© "

  return (
    <div ref={containerRef} className="relative py-12 overflow-hidden bg-black">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        style={{ transform: "scale(0)", opacity: 0 }}
      />

      <div className="flex cursor-none" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{
            animationDuration: "100s",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[12vw] font-bold uppercase tracking-tight select-none px-8"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className="flex animate-marquee whitespace-nowrap"
          style={{
            animationDuration: "100s",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-[12vw] font-bold uppercase tracking-tight select-none px-8"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.6)",
                WebkitTextFillColor: "transparent",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarqueeText
