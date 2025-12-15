"use client"

import { BIAS_CATEGORIES } from "@/app/constants/categories"

export function CategoriesGrid() {
  return (
    <section className="section bg-black relative">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Categories Grid - Compact View */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {BIAS_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--category-color)]/50 transition-all duration-300 text-center group"
              style={{ "--category-color": category.color } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-2xl bg-[var(--category-color)]/10">
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-white">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="/product#categories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors font-medium"
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
