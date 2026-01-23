"use client";

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
        <h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-tight text-center mb-8"
          style={{ fontFamily: '"Anton", sans-serif' }}
        >
          REAL-TIME BIAS DETECTION
          <br />
          & SMART REWRITING AT SCALE
        </h2>

        {/* Description */}
        <p
          className="text-white/60 text-base md:text-lg max-w-3xl mx-auto text-center leading-relaxed"
          style={{ fontFamily: '"Mozilla Text", sans-serif' }}
        >
          We help teams catch unintended bias before it reaches your audience.
          Real-time detection, intelligent rewriting suggestions, and
          comprehensive audit trails keep your content fair, compliant, and
          trustworthy.
        </p>
      </div>
    </section>
  );
}
