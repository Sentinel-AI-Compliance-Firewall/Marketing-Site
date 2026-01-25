"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    try {
      // TODO: Replace with actual API endpoint
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, message }),
      // });
      // if (!response.ok) throw new Error('Failed to submit');

      console.log("Contact form submitted:", { email, message });
      setStatus("success");
      setEmail("");
      setMessage("");

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-black relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-[rgb(251,73,48)]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[rgb(251,73,48)]" />
              <span
                className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-tight mb-6"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              Ready to Build
              <br />
              <span className="text-[rgb(251,73,48)]">Fair AI?</span>
            </h2>

            {/* Description */}
            <p
              className="text-white/60 text-base leading-relaxed mb-8"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              Join teams already using Sentinel AI to catch bias before it ships.
              Drop us your email and we'll get back to you within 24 hours.
            </p>

            {/* Quick links */}
            <div className="space-y-3">
              <a
                href="mailto:hello@sentinel.ai"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                <svg className="w-5 h-5 text-[rgb(251,73,48)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@sentinel.ai</span>
              </a>
              <Link
                href="/login"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                <svg className="w-5 h-5 text-[rgb(251,73,48)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Start Free Trial</span>
              </Link>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Form container with border */}
            <div className="relative p-8 md:p-10 border border-white/10 bg-white/[0.02]">
              {/* Corner brackets */}
              <svg className="absolute -top-2 -left-2 w-6 h-6" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
              </svg>
              <svg className="absolute -bottom-2 -right-2 w-6 h-6 rotate-180" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
              </svg>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="block text-white/60 text-sm uppercase tracking-wider"
                    style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgb(251,73,48)] transition-colors"
                    style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-white/60 text-sm uppercase tracking-wider"
                    style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgb(251,73,48)] transition-colors resize-none"
                    style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading" || !email}
                  className="w-full relative group overflow-hidden"
                >
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-600"
                      : status === "error"
                      ? "bg-red-600"
                      : "bg-[rgb(251,73,48)] group-hover:bg-[rgb(220,60,40)]"
                  }`} />
                  <span
                    className="relative block px-8 py-4 text-white font-semibold tracking-[0.15em] text-sm uppercase"
                    style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : status === "success" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </span>
                    ) : status === "error" ? (
                      "Error - Try Again"
                    ) : (
                      "Send Message"
                    )}
                  </span>
                </button>

                {/* Privacy note */}
                <p
                  className="text-white/40 text-xs text-center"
                  style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                >
                  We'll never share your email with anyone else.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
