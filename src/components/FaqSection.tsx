"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
  icon: string;
}

const faqData: FaqItem[] = [
  {
    question: "What types of bias can Sentinel AI detect?",
    answer: "Our system detects multiple bias categories including gender, race, age, disability, religion, nationality, and socioeconomic bias. We use advanced NLP models trained on diverse datasets to identify both explicit and subtle forms of biased language.",
    icon: "01",
  },
  {
    question: "How does real-time detection work?",
    answer: "Our API processes your content as it's being created. Each piece of text is analyzed in milliseconds, with bias flags appearing instantly alongside confidence scores and explanations. This allows writers to catch and fix issues before publishing.",
    icon: "02",
  },
  {
    question: "Can I integrate Sentinel AI with my existing workflow?",
    answer: "Yes! We offer REST APIs, SDKs for major programming languages, and direct integrations with popular CMS platforms like WordPress, Contentful, and Sanity. Our webhook support enables custom workflow automation.",
    icon: "03",
  },
  {
    question: "What makes your rewrite suggestions different?",
    answer: "Our system generates context-aware alternatives that preserve your original tone and message while removing bias. Each suggestion includes an explanation of why it's less biased, helping writers learn and improve over time.",
    icon: "04",
  },
  {
    question: "Is my content data secure and private?",
    answer: "Absolutely. We use end-to-end encryption, never store your content after processing, and are SOC 2 Type II compliant. Enterprise plans include options for on-premise deployment and custom data retention policies.",
    icon: "05",
  },
  {
    question: "How do I get started with Sentinel AI?",
    answer: "Sign up for a free trial to test our API with up to 10,000 words per month. Our documentation includes quickstart guides, code samples, and interactive tutorials to get you detecting bias in minutes.",
    icon: "06",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-black relative overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[rgb(251,73,48)]/5 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[rgb(251,73,48)]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[rgb(251,73,48)] text-sm uppercase tracking-[0.3em] mb-4"
            style={{ fontFamily: '"Mozilla Text", sans-serif' }}
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            Frequently Asked
            <br />
            Questions
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* FAQ Item */}
              <div
                className={`relative border transition-all duration-500 cursor-pointer overflow-hidden ${
                  activeIndex === index
                    ? "border-[rgb(251,73,48)] bg-[rgb(251,73,48)]/5"
                    : hoveredIndex === index
                    ? "border-white/30 bg-white/[0.02]"
                    : "border-white/10 bg-transparent"
                }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[rgb(251,73,48)]/10 via-transparent to-transparent"
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    x: hoveredIndex === index ? "0%" : "-100%",
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Question Row */}
                <div className="relative flex items-center justify-between p-6 md:p-8">
                  {/* Number */}
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                        activeIndex === index || hoveredIndex === index
                          ? "text-[rgb(251,73,48)]"
                          : "text-white/20"
                      }`}
                      style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                      {item.icon}
                    </span>

                    {/* Question */}
                    <h3
                      className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                        activeIndex === index ? "text-white" : "text-white/80"
                      }`}
                      style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border transition-all duration-300 ${
                      activeIndex === index
                        ? "border-[rgb(251,73,48)] text-[rgb(251,73,48)]"
                        : "border-white/20 text-white/40"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="8" y1="0" x2="8" y2="16" />
                      <line x1="0" y1="8" x2="16" y2="8" />
                    </svg>
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[76px] md:pl-[88px]">
                        <p
                          className="text-white/60 text-base leading-relaxed"
                          style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Corner brackets on hover/active */}
                <motion.div
                  className="absolute top-0 left-0 w-4 h-4"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index || hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                    <path
                      d="M 0 16 L 0 0 L 16 0"
                      stroke="rgb(251, 73, 48)"
                      strokeWidth="2"
                      fill="transparent"
                    />
                  </svg>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 right-0 w-4 h-4 rotate-180"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeIndex === index || hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-full h-full">
                    <path
                      d="M 0 16 L 0 0 L 16 0"
                      stroke="rgb(251, 73, 48)"
                      strokeWidth="2"
                      fill="transparent"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
{/* "Still have questions?" section removed */}
      </div>
    </section>
  );
}
