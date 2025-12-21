"use client"

import { BIAS_CATEGORIES } from "@/app/constants/categories"

export function CategoriesGrid() {
  return (
    <section className="section bg-transparent relative">
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

        {/* Categories Grid - 3x3 layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {BIAS_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`category-${category.id} category-card p-5 md:p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 text-center group`}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-xl flex items-center justify-center text-3xl md:text-4xl category-icon-bg">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
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
