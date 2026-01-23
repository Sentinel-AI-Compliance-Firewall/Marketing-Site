"use client";

import Link from "next/link";

export default function FallbackFooter() {
  return (
    <footer className="w-full bg-black py-16 px-6 md:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Logo and tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <svg
              className="w-12 h-12 mb-4"
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
            <p className="text-white/60 text-sm max-w-xs" style={{ fontFamily: '"Mozilla Text", sans-serif' }}>
              Catch bias before it ships. Real-time detection and intelligent rewriting for fair, compliant content.
            </p>
          </div>

          {/* Contact */}
          <div className="text-right">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: '"Mozilla Text", sans-serif' }}>
              Contact
            </p>
            <a
              href="mailto:hello@sentinel.ai"
              className="text-white hover:text-[rgb(251,73,48)] transition-colors text-sm"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              hello@sentinel.ai
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {["Home", "Services", "Process", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="text-white/60 hover:text-white text-sm uppercase tracking-wider transition-colors"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs" style={{ fontFamily: '"Mozilla Text", sans-serif' }}>
            © {new Date().getFullYear()} Sentinel AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
