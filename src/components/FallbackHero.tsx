"use client";

import Link from "next/link";

interface FallbackHeroProps {
  tagline: string;
}

export default function FallbackHero({ tagline }: FallbackHeroProps) {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              className="w-10 h-10"
              viewBox="0 0 56 47.6"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 20.959 0 L 54.98 0 L 44.941 5.444 L 10.919 5.444 Z" />
              <path d="M 0.179 0.179 C 0.278 0.08 0.438 0.08 0.537 0.179 L 11.813 11.468 C 11.912 11.567 11.912 11.727 11.813 11.826 L 11.813 11.826 C 11.714 11.925 11.554 11.925 11.455 11.826 L 0.179 0.538 C 0.08 0.439 0.08 0.278 0.179 0.179 Z" transform="translate(44.314 4.955) rotate(2 6 6)" />
              <path d="M 0.179 0.179 C 0.278 0.08 0.438 0.08 0.537 0.179 L 11.813 11.468 C 11.912 11.567 11.912 11.727 11.813 11.826 L 11.813 11.826 C 11.714 11.925 11.554 11.925 11.455 11.826 L 0.179 0.538 C 0.08 0.439 0.08 0.278 0.179 0.179 Z" transform="translate(-0.305 30.64) rotate(2 6 6)" />
              <g transform="translate(12.349 4.714)">
                <path d="M 0.261 0.258 C 0.406 0.115 0.639 0.115 0.784 0.258 L 17.171 16.442 C 17.315 16.584 17.315 16.816 17.171 16.958 L 17.171 16.958 C 17.026 17.101 16.793 17.101 16.649 16.958 L 0.261 0.774 C 0.117 0.632 0.117 0.4 0.261 0.258 Z" transform="translate(-0.296 -0.009) rotate(1 8.75 8.5)" />
                <path d="M 13.996 0.899 L 30.227 0 L 29.819 7.475 L 0 9.127 Z" transform="translate(10.974 17.328) rotate(49 15 4.5)" />
              </g>
              <g transform="translate(4.854 6.212) rotate(179 19.75 18.5)">
                <path d="M 0.271 0.277 C 0.42 0.125 0.664 0.125 0.813 0.278 L 17.855 17.733 C 18.006 17.887 18.006 18.134 17.855 18.288 L 17.855 18.288 C 17.707 18.44 17.462 18.44 17.313 18.288 L 0.271 0.832 C 0.12 0.678 0.12 0.432 0.271 0.277 Z" transform="translate(-0.312 -0.016) rotate(1 9 9.25)" />
                <path d="M 13.764 0.352 L 30.013 0 L 29.853 7.414 L 0 8.062 Z" transform="translate(11.397 19.401) rotate(49 15 4)" />
              </g>
              <path d="M 10.78 42.156 L 50.242 42.156 L 40.2 47.6 L 0.88 47.6 Z" />
            </svg>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Process", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/#hero" : `/#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-sm uppercase tracking-wider transition-colors"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-4xl">
          {/* Corner brackets */}
          <div className="relative inline-block">
            <svg className="absolute -top-6 -left-6 w-8 h-8" viewBox="0 0 20 20" fill="none">
              <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
              <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
            </svg>
            <svg className="absolute -bottom-6 -right-6 w-8 h-8 rotate-180" viewBox="0 0 20 20" fill="none">
              <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
              <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
            </svg>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight leading-none py-4"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              {tagline}
            </h1>
          </div>

          {/* Subtext */}
          <p
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-8"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            Real-time bias detection and intelligent rewriting for fair, compliant content.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer scroll-indicator"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: '"Mozilla Text", sans-serif' }}>
            Scroll
          </span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
