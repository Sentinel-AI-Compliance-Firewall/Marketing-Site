"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  analysis?: BiasAnalysis;
}

interface BiasAnalysis {
  hasBias: boolean;
  biasTypes: string[];
  severity: "low" | "medium" | "high";
  suggestions: string[];
  rewrittenText?: string;
}

const exampleTexts = [
  "The chairman should make sure his team is productive.",
  "We're looking for a young, energetic candidate for this role.",
  "The nurse helped her patient with his medication.",
  "Our software is so easy, even your grandmother could use it.",
];

// Simulated analysis function - will be replaced with real API
function analyzeTextForBias(text: string): BiasAnalysis {
  const lowerText = text.toLowerCase();
  const biasTypes: string[] = [];
  const suggestions: string[] = [];
  let rewrittenText = text;

  // Gender bias detection
  if (
    lowerText.includes("chairman") ||
    lowerText.includes("his team") ||
    lowerText.includes("mankind")
  ) {
    biasTypes.push("Gender Bias");
    suggestions.push(
      'Consider using gender-neutral terms like "chairperson" or "their team"'
    );
    rewrittenText = rewrittenText
      .replace(/chairman/gi, "chairperson")
      .replace(/his team/gi, "their team")
      .replace(/mankind/gi, "humankind");
  }

  // Age bias detection
  if (
    lowerText.includes("young") ||
    lowerText.includes("energetic candidate") ||
    lowerText.includes("digital native")
  ) {
    biasTypes.push("Age Bias");
    suggestions.push(
      "Avoid age-related requirements unless essential for the role"
    );
    rewrittenText = rewrittenText
      .replace(/young,?\s*/gi, "")
      .replace(/energetic candidate/gi, "motivated candidate");
  }

  // Stereotype detection
  if (
    lowerText.includes("nurse") &&
    (lowerText.includes("her") || lowerText.includes("she"))
  ) {
    biasTypes.push("Occupational Stereotype");
    suggestions.push(
      "Avoid assuming gender based on profession - use they/them or the person's actual pronouns"
    );
    rewrittenText = rewrittenText
      .replace(/\bher\b/gi, "their")
      .replace(/\bshe\b/gi, "they");
  }

  // Tech ageism detection
  if (
    lowerText.includes("grandmother") ||
    lowerText.includes("grandma") ||
    lowerText.includes("even a child")
  ) {
    biasTypes.push("Age-based Stereotype");
    suggestions.push(
      "Avoid using age groups as measures of simplicity - this reinforces harmful stereotypes"
    );
    rewrittenText = rewrittenText
      .replace(/even your grandmother could use it/gi, "intuitive for everyone")
      .replace(/even a child could/gi, "anyone can");
  }

  const hasBias = biasTypes.length > 0;
  const severity: "low" | "medium" | "high" =
    biasTypes.length === 0 ? "low" : biasTypes.length === 1 ? "medium" : "high";

  if (!hasBias) {
    suggestions.push(
      "Great job! Your text appears to be inclusive and bias-free."
    );
  }

  return {
    hasBias,
    biasTypes,
    severity,
    suggestions,
    rewrittenText: hasBias ? rewrittenText : undefined,
  };
}

export default function LiveDemoSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Small delay to ensure DOM is updated before scrolling
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSubmit = async (text?: string) => {
    const textToAnalyze = text || inputText.trim();
    if (!textToAnalyze) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: textToAnalyze,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsAnalyzing(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const analysis = analyzeTextForBias(textToAnalyze);

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: "",
      analysis,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsAnalyzing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleExampleClick = (example: string) => {
    setInputText(example);
    handleSubmit(example);
  };

  return (
    <section className="w-full relative overflow-hidden min-h-screen">
      {/* Background - Showreel image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/P2jmP5B6uTCQr8FL477o3jtE.png?width=3200&height=1800"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            {/* Top accent line */}
            <div className="flex items-center gap-6 mb-8">
              <div className="h-[1px] w-16 bg-[rgb(251,73,48)]" />
              <span
                className="text-[rgb(251,73,48)] text-sm font-medium tracking-[0.3em] uppercase"
                style={{ fontFamily: '"Mozilla Text", sans-serif' }}
              >
                Live Demo
              </span>
            </div>

            {/* Main heading with corner brackets like process section */}
            <div className="relative inline-block">
              {/* Top-left corner bracket SVG */}
              <svg className="absolute -top-4 -left-4 w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              </svg>
              {/* Bottom-right corner bracket SVG */}
              <svg className="absolute -bottom-4 -right-4 w-5 h-5 rotate-180" viewBox="0 0 20 20" fill="none">
                <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              </svg>

              <h2
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white uppercase tracking-tight leading-none py-4"
                style={{ fontFamily: '"Anton", sans-serif' }}
              >
                Try It<br />
                <span className="text-[rgb(251,73,48)]">Yourself</span>
              </h2>
            </div>

            <p
              className="text-white/60 text-base md:text-lg max-w-xl mt-8 leading-relaxed"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              Paste any text below and see how Sentinel AI detects bias in
              real-time. Get instant suggestions for more inclusive language.
            </p>
          </motion.div>

          {/* Main Demo Interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Corner brackets for the demo box */}
            <svg className="absolute -top-3 -left-3 w-5 h-5 z-20" viewBox="0 0 20 20" fill="none">
              <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
            </svg>
            <svg className="absolute -bottom-3 -right-3 w-5 h-5 z-20 rotate-180" viewBox="0 0 20 20" fill="none">
              <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
              <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
            </svg>

            <div
              className="relative overflow-hidden border border-white/10"
              style={{
                background: "rgba(31, 31, 31, 0.8)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[rgb(251,73,48)]" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <span
                    className="text-white/40 text-xs tracking-widest uppercase ml-4"
                    style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                  >
                    Bias Detection Engine
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[rgb(251,73,48)] animate-pulse" />
                  <span className="text-white/40 text-xs">Active</span>
                </div>
              </div>

              {/* Messages Area */}
              <div ref={messagesContainerRef} className="h-[420px] overflow-y-auto p-6 space-y-5 scroll-smooth">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    {/* Icon */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 flex items-center justify-center border border-[rgb(251,73,48)]/30">
                        <svg
                          className="w-10 h-10 text-[rgb(251,73,48)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      {/* Corner accents */}
                      <svg className="absolute -top-2 -left-2 w-4 h-4" viewBox="0 0 20 20" fill="none">
                        <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                        <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                      </svg>
                      <svg className="absolute -bottom-2 -right-2 w-4 h-4 rotate-180" viewBox="0 0 20 20" fill="none">
                        <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                        <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" fill="transparent"/>
                      </svg>
                    </div>

                    <p
                      className="text-white/40 text-sm mb-8 tracking-wide uppercase"
                      style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                    >
                      Enter text to analyze or try an example
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl w-full">
                      {exampleTexts.map((example, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleExampleClick(example)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative px-4 py-3 text-sm text-white/50 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[rgb(251,73,48)]/50 transition-all duration-300 text-left"
                        >
                          <span className="line-clamp-2">"{example}"</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <AnimatePresence>
                      {messages.map((message, index) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`relative max-w-[85%] px-5 py-4 ${
                              message.type === "user"
                                ? "bg-[rgb(251,73,48)] text-white"
                                : "bg-white/[0.05] text-white border border-white/10"
                            }`}
                          >
                            {/* Message number indicator */}
                            <span className={`absolute -top-2 ${message.type === "user" ? "-right-2" : "-left-2"} text-[10px] text-white/30 font-mono`}>
                              {String(Math.floor(index / 2) + 1).padStart(2, "0")}
                            </span>

                            {message.type === "user" ? (
                              <p className="text-sm md:text-base leading-relaxed">
                                {message.content}
                              </p>
                            ) : (
                              <AnalysisResult analysis={message.analysis!} />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    {isAnalyzing && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white/[0.05] border border-white/10 px-5 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-white/40 text-sm">Analyzing</span>
                            <div className="flex gap-1">
                              <span className="w-1.5 h-1.5 bg-[rgb(251,73,48)] rounded-full animate-bounce" />
                              <span
                                className="w-1.5 h-1.5 bg-[rgb(251,73,48)] rounded-full animate-bounce"
                                style={{ animationDelay: "0.15s" }}
                              />
                              <span
                                className="w-1.5 h-1.5 bg-[rgb(251,73,48)] rounded-full animate-bounce"
                                style={{ animationDelay: "0.3s" }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-white/10 p-5 bg-black/30">
                <div className="flex gap-4 items-end">
                  <div className="flex-1 relative">
                    <textarea
                      ref={textareaRef}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Paste your text here to check for bias..."
                      rows={2}
                      className="w-full bg-white/[0.05] border border-white/10 px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[rgb(251,73,48)]/50 resize-none transition-all duration-300 text-sm"
                      style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                    />
                    <span className="absolute bottom-3 right-4 text-white/20 text-xs">
                      Press Enter to send
                    </span>
                  </div>
                  <motion.button
                    onClick={() => handleSubmit()}
                    disabled={!inputText.trim() || isAnalyzing}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group px-6 py-4 bg-[rgb(251,73,48)] hover:bg-[rgb(220,60,40)] disabled:bg-white/10 disabled:cursor-not-allowed text-white font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Analyze</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="h-[1px] w-8 bg-[rgb(251,73,48)]/50" />
            <p
              className="text-white/30 text-xs tracking-wider uppercase"
              style={{ fontFamily: '"Mozilla Text", sans-serif' }}
            >
              Preview demo with pattern-based detection — Full AI-powered analysis coming soon
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnalysisResult({ analysis }: { analysis: BiasAnalysis }) {
  return (
    <div className="space-y-4">
      {/* Status Badge - using site colors only */}
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium border ${
            analysis.hasBias
              ? "bg-[rgb(251,73,48)]/10 text-[rgb(251,73,48)] border-[rgb(251,73,48)]/30"
              : "bg-white/5 text-white/70 border-white/20"
          }`}
        >
          {analysis.hasBias ? (
            <>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Bias Detected
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No Bias Found
            </>
          )}
        </span>
      </div>

      {/* Bias Types */}
      {analysis.biasTypes.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {analysis.biasTypes.map((type, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-[rgb(251,73,48)]/10 text-[rgb(251,73,48)] text-xs border border-[rgb(251,73,48)]/20"
            >
              {type}
            </span>
          ))}
        </div>
      )}

      {/* Suggestions */}
      <div className="space-y-2">
        {analysis.suggestions.map((suggestion, index) => (
          <p key={index} className="text-sm text-white/60 leading-relaxed">
            {suggestion}
          </p>
        ))}
      </div>

      {/* Rewritten Text - using site colors */}
      {analysis.rewrittenText && (
        <div className="mt-4 p-4 bg-white/5 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-white/50 font-medium uppercase tracking-wider">
              Suggested Rewrite
            </span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">{analysis.rewrittenText}</p>
        </div>
      )}
    </div>
  );
}
