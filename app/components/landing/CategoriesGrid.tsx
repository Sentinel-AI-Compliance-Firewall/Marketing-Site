"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/app/components/ui"
import { BIAS_CATEGORIES } from "@/app/constants/categories"
import { useAnimateOnScroll } from "@/app/hooks/useIntersection"

export function CategoriesGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const [titleRef, isTitleVisible] = useAnimateOnScroll<HTMLDivElement>({
    threshold: 0.2,
  })
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll(".category-card")

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="section bg-black relative">
      <div className="container">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isTitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--primary)] bg-[var(--primary)]/10 rounded-full border border-[var(--primary)]/20">
            9 Protected Categories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Bias Detection
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Our ML models detect bias across all EEOC-protected categories with
            industry-leading accuracy.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BIAS_CATEGORIES.map((category) => (
            <Card
              key={category.id}
              className="category-card p-6 group"
              hover={true}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  {category.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {category.name}
                    </h3>
                    <span
                      className="text-xs font-mono px-2 py-1 rounded"
                      style={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                      }}
                    >
                      {category.accuracy}%
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] mb-3">
                    {category.legalFramework}
                  </p>

                  {/* Example phrases */}
                  <div className="space-y-1">
                    {category.examples.slice(0, 2).map((example, i) => (
                      <div
                        key={i}
                        className="text-xs text-[var(--text-secondary)] flex items-center gap-2"
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="truncate">&quot;{example}&quot;</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: category.color }}
              />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/product#categories"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
          >
            Learn more about each category
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
