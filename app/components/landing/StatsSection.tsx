"use client"

import { useRef, useEffect, useState } from "react"
import { useAnimateOnScroll } from "@/app/hooks/useIntersection"

const STATS = [
  {
    value: 2.3,
    suffix: "B",
    prefix: "$",
    label: "In discrimination lawsuits annually",
  },
  {
    value: 75000,
    suffix: "+",
    prefix: "",
    label: "EEOC complaints filed each year",
  },
  {
    value: 125,
    suffix: "K",
    prefix: "$",
    label: "Average settlement cost",
  },
  {
    value: 67,
    suffix: "%",
    prefix: "",
    label: "Of biased language is unintentional",
  },
]

function AnimatedCounter({
  value,
  prefix,
  suffix,
  duration = 2000,
  start,
}: {
  value: number
  prefix: string
  suffix: string
  duration?: number
  start: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration, start])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span className="tabular-nums">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const [ref, , hasAnimated] = useAnimateOnScroll<HTMLDivElement>({
    threshold: 0.3,
  })

  return (
    <section className="section bg-[var(--bg-dark)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--accent)] bg-[var(--accent)]/10 rounded-full border border-[var(--accent)]/20">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bias is Inherited, Not Created
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Unconscious bias in workplace communications leads to costly
            lawsuits and damaged reputation. Here&apos;s the reality:
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-3">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  start={hasAnimated}
                />
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-[var(--text-secondary)] mb-4">
            Prevention is better than litigation.{" "}
            <span className="text-white font-medium">
              Sentinel AI catches bias before it causes harm.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
