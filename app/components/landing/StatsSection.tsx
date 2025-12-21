"use client"

import { useEffect, useState } from "react"
import { useAnimateOnScroll } from "@/app/hooks/useIntersection"

// All statistics verified December 2024 from official EEOC sources
// FY = Fiscal Year (October - September)
const STATS = [
  {
    value: 700,
    suffix: "M",
    prefix: "$",
    label: "Recovered for discrimination victims (FY 2024)",
    source: "EEOC FY 2024 Annual Report",
    sourceUrl: "https://www.eeoc.gov/2024-annual-performance-report",
  },
  {
    value: 88531,
    suffix: "",
    prefix: "",
    label: "Discrimination charges filed (FY 2024)",
    source: "EEOC Enforcement Statistics",
    sourceUrl: "https://www.eeoc.gov/data/enforcement-and-litigation-statistics-0",
  },
  {
    value: 28,
    suffix: "K",
    prefix: "$",
    label: "Average EEOC mediation settlement",
    source: "EEOC Mediation Program",
    sourceUrl: "https://www.eeoc.gov/2024-annual-performance-report",
  },
  {
    value: 45,
    suffix: "%",
    prefix: "",
    label: "Of workers have faced discrimination",
    source: "CIPHR 2025 Workplace Survey",
    sourceUrl: "https://www.ciphr.com/infographics/workplace-discrimination-statistics",
  },
]

// Year-over-year comparison data (verified from EEOC Annual Reports)
const COMPARISON_DATA = {
  fy2022: {
    charges: 73485,
    recovery: 513.7,
    mediationTotal: 170.4,
    mediationCount: 6578,
    avgMediation: 25900,
    source: "https://www.eeoc.gov/2022-annual-performance-report-apr"
  },
  fy2023: {
    charges: 81055,
    recovery: 665,
    mediationTotal: 201.2,
    mediationCount: 7471,
    avgMediation: 26900,
    source: "https://www.eeoc.gov/2023-annual-performance-report"
  },
  fy2024: {
    charges: 88531,
    recovery: 700,
    mediationTotal: 243.2,
    mediationCount: 8543,
    avgMediation: 28500,
    source: "https://www.eeoc.gov/2024-annual-performance-report"
  }
}

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
            The Challenge
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
              className="text-center p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors group"
            >
              <p className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-3">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  start={hasAnimated}
                />
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                {stat.label}
              </p>
              {/* Source reference */}
              <a
                href={stat.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors opacity-70 group-hover:opacity-100"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                {stat.source}
              </a>
            </div>
          ))}
        </div>

        {/* Year-over-year comparison table */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-white text-center mb-6">
            EEOC Trends: FY 2022 → FY 2024
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium">Metric</th>
                  <th className="text-center py-3 px-4 text-[var(--text-muted)] font-medium">
                    <a href={COMPARISON_DATA.fy2022.source} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
                      FY 2022
                    </a>
                  </th>
                  <th className="text-center py-3 px-4 text-[var(--text-muted)] font-medium">
                    <a href={COMPARISON_DATA.fy2023.source} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
                      FY 2023
                    </a>
                  </th>
                  <th className="text-center py-3 px-4 text-[var(--text-muted)] font-medium">
                    <a href={COMPARISON_DATA.fy2024.source} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)]">
                      FY 2024
                    </a>
                  </th>
                  <th className="text-center py-3 px-4 text-[var(--text-muted)] font-medium">2-Year Change</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-3 px-4 text-white">Charges Filed</td>
                  <td className="py-3 px-4 text-center">{COMPARISON_DATA.fy2022.charges.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center">{COMPARISON_DATA.fy2023.charges.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center text-[var(--primary)] font-semibold">{COMPARISON_DATA.fy2024.charges.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center text-red-400">+20.5%</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-3 px-4 text-white">Total Recovery</td>
                  <td className="py-3 px-4 text-center">${COMPARISON_DATA.fy2022.recovery}M</td>
                  <td className="py-3 px-4 text-center">${COMPARISON_DATA.fy2023.recovery}M</td>
                  <td className="py-3 px-4 text-center text-[var(--primary)] font-semibold">${COMPARISON_DATA.fy2024.recovery}M</td>
                  <td className="py-3 px-4 text-center text-red-400">+36.3%</td>
                </tr>
                <tr className="border-b border-[var(--border)]/50">
                  <td className="py-3 px-4 text-white">Avg. Mediation Settlement</td>
                  <td className="py-3 px-4 text-center">${(COMPARISON_DATA.fy2022.avgMediation / 1000).toFixed(1)}K</td>
                  <td className="py-3 px-4 text-center">${(COMPARISON_DATA.fy2023.avgMediation / 1000).toFixed(1)}K</td>
                  <td className="py-3 px-4 text-center text-[var(--primary)] font-semibold">${(COMPARISON_DATA.fy2024.avgMediation / 1000).toFixed(1)}K</td>
                  <td className="py-3 px-4 text-center text-red-400">+10.0%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white">Successful Mediations</td>
                  <td className="py-3 px-4 text-center">{COMPARISON_DATA.fy2022.mediationCount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center">{COMPARISON_DATA.fy2023.mediationCount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center text-[var(--primary)] font-semibold">{COMPARISON_DATA.fy2024.mediationCount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-center text-red-400">+29.9%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] text-center mt-4">
            Source: U.S. Equal Employment Opportunity Commission Annual Performance Reports •
            <a href="https://www.eeoc.gov/data/enforcement-and-litigation-statistics-0" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] ml-1">
              View all EEOC statistics
            </a>
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-[var(--text-secondary)] mb-4">
            Prevention is better than litigation.{" "}
            <span className="text-white font-medium">
              Our compliance firewall catches bias before it causes harm.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
