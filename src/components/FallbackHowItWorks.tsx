"use client";

const steps = [
  {
    number: "01",
    title: "Paste Your Content",
    description: "Drop in any text - job postings, marketing copy, product descriptions, or documentation.",
  },
  {
    number: "02",
    title: "Instant Analysis",
    description: "Our AI scans for gender bias, age discrimination, cultural stereotypes, and more.",
  },
  {
    number: "03",
    title: "Smart Suggestions",
    description: "Get specific, actionable rewrites that maintain your message while removing bias.",
  },
  {
    number: "04",
    title: "Ship With Confidence",
    description: "Publish content knowing it's been vetted for fairness and inclusivity.",
  },
];

export default function FallbackHowItWorks() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-[1px] w-16 bg-[rgb(251,73,48)]" />
          <span
            className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            How it Works
          </span>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 border-l-2 border-[rgb(251,73,48)]/30 hover:border-[rgb(251,73,48)] transition-colors duration-300"
            >
              {/* Step number */}
              <span
                className="text-[rgb(251,73,48)] text-xs font-mono mb-4 block"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                {step.number}
              </span>

              {/* Title */}
              <h3
                className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/60 text-sm md:text-base leading-relaxed"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
