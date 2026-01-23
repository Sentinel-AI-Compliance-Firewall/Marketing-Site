"use client";

import Link from "next/link";

export default function FallbackCta() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-[1px] w-12 bg-[rgb(251,73,48)]" />
          <span
            className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            Get Started
          </span>
          <div className="h-[1px] w-12 bg-[rgb(251,73,48)]" />
        </div>

        {/* Main heading */}
        <div className="relative inline-block mb-8">
          <svg className="absolute -top-4 -left-4 w-6 h-6" viewBox="0 0 20 20" fill="none">
            <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
            <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
          </svg>
          <svg className="absolute -bottom-4 -right-4 w-6 h-6 rotate-180" viewBox="0 0 20 20" fill="none">
            <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
            <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
          </svg>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight leading-tight py-2"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            Ready to Build
            <br />
            <span className="text-[rgb(251,73,48)]">Fair AI?</span>
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: '"Mozilla Text", sans-serif' }}
        >
          Join teams already using Sentinel AI to catch bias before it ships.
          Start detecting and fixing biased content today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/login"
            className="group relative inline-flex items-center"
          >
            <div className="absolute inset-0 bg-[rgb(251,73,48)] transition-all duration-300 group-hover:bg-[rgb(220,60,40)]" />
            <svg className="absolute -top-2 -left-2 w-4 h-4 transition-all duration-300 group-hover:-top-3 group-hover:-left-3" viewBox="0 0 20 20" fill="none">
              <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
            </svg>
            <svg className="absolute -bottom-2 -right-2 w-4 h-4 rotate-180 transition-all duration-300 group-hover:-bottom-3 group-hover:-right-3" viewBox="0 0 20 20" fill="none">
              <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
            </svg>
            <span
              className="relative px-8 py-4 text-white font-semibold tracking-[0.15em] text-sm uppercase"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              Get Started Free
            </span>
          </Link>

          <a
            href="mailto:hello@sentinel.ai"
            className="group relative inline-flex items-center"
          >
            <div className="absolute inset-0 border border-white/20 transition-all duration-300 group-hover:border-[rgb(251,73,48)]/50" />
            <span
              className="relative px-8 py-4 text-white/80 font-medium tracking-[0.15em] text-sm uppercase transition-colors group-hover:text-white"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              Contact Us
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
