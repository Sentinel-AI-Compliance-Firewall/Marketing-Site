"use client";

import Link from "next/link";

const services = [
  {
    title: "Real-Time Detection",
    description: "Instant bias scanning as you type. No delays, no waiting.",
  },
  {
    title: "Smart Rewriting",
    description: "AI-powered suggestions that preserve your voice while removing bias.",
  },
  {
    title: "Audit Trails",
    description: "Complete history of changes for compliance and accountability.",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrate bias detection into your existing workflows.",
  },
];

export default function FallbackServices() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[1px] w-16 bg-[rgb(251,73,48)]" />
          <span
            className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            Services
          </span>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/[0.02] border border-white/10 hover:border-[rgb(251,73,48)]/50 transition-all duration-300"
            >
              {/* Corner accent */}
              <svg className="absolute -top-2 -left-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              </svg>

              {/* Number */}
              <span className="text-[rgb(251,73,48)]/50 text-xs font-mono mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-[rgb(251,73,48)] hover:text-white text-sm uppercase tracking-wider transition-colors"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            Request Pricing
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
