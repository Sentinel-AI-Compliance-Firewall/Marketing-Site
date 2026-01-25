"use client";

import { motion } from "framer-motion";

export default function FallbackWelcome() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Top labels */}
        <div className="flex justify-between items-center mb-12">
          <span
            className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            Human Fairness
          </span>
          <span
            className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            AI Precision
          </span>
        </div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-tight text-center mb-8"
          style={{ fontFamily: '"Anton", sans-serif' }}
        >
          REAL-TIME BIAS DETECTION
          <br />
          & SMART REWRITING AT SCALE
        </motion.h2>

        {/* Description with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p
              className="text-white/60 text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              We help teams catch unintended bias before it reaches your audience.
              Real-time detection, intelligent rewriting suggestions, and
              comprehensive audit trails keep your content fair, compliant, and
              trustworthy.
            </p>

            {/* Features list */}
            <ul className="space-y-4">
              {[
                "Gender, race, age & disability bias detection",
                "Context-aware rewriting suggestions",
                "Full compliance audit trails",
                "API-first integration",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-white/70"
                  style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                >
                  <svg
                    className="w-5 h-5 text-[rgb(251,73,48)] flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image/Visual Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Image container with border */}
            <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
              {/* Corner brackets */}
              <svg className="absolute -top-2 -left-2 w-6 h-6 z-10" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
              </svg>
              <svg className="absolute -bottom-2 -right-2 w-6 h-6 rotate-180 z-10" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
              </svg>

              {/* Placeholder image - replace src with actual image */}
              <img
                src="/images/welcome-bias-detection.jpg"
                alt="AI Bias Detection Dashboard"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Hide broken image and show fallback
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />

              {/* Fallback visual if image doesn't exist */}
              <div className="absolute inset-0 hidden flex-col items-center justify-center p-8 bg-gradient-to-br from-[rgb(251,73,48)]/5 to-black/50">
                {/* Abstract visualization */}
                <div className="relative w-full max-w-xs">
                  {/* Animated circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[rgb(251,73,48)]/30 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[rgb(251,73,48)]/20 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[rgb(251,73,48)]/10 rounded-full" />

                  {/* Center icon */}
                  <div className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto bg-[rgb(251,73,48)]/10 border border-[rgb(251,73,48)]/30 rounded-full">
                    <svg className="w-10 h-10 text-[rgb(251,73,48)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <p
                  className="mt-8 text-white/40 text-sm text-center"
                  style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                >
                  Bias Detection in Action
                </p>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
