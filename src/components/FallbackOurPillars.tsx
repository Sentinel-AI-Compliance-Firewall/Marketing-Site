"use client";

const pillars = [
  {
    title: "Fairness",
    description: "Ensure equal treatment across all demographics and protected classes.",
  },
  {
    title: "Transparency",
    description: "Clear explanations of detected bias and suggested corrections.",
  },
  {
    title: "Accuracy",
    description: "High-precision detection with minimal false positives.",
  },
  {
    title: "Compliance",
    description: "Meet regulatory requirements and industry standards.",
  },
];

export default function FallbackOurPillars() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-12">
          <div className="h-[1px] w-16 bg-[rgb(251,73,48)]" />
          <span
            className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            Our Pillars
          </span>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative p-6 border border-white/10 hover:border-[rgb(251,73,48)]/50 transition-all duration-300"
            >
              {/* Corner accent */}
              <svg className="absolute -top-2 -left-2 w-4 h-4" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              </svg>

              {/* Number */}
              <span className="text-[rgb(251,73,48)] text-xs font-mono mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-white uppercase tracking-tight mb-3"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
