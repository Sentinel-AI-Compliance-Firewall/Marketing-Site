"use client"

import { useState } from "react"
import { Card, Button, Badge } from "@/app/components/ui"
import { useBiasScan } from "@/app/hooks/useBiasScan"
import { getSeverityLevel } from "@/app/constants/categories"
import { Loader2, AlertTriangle, CheckCircle, XCircle, Sparkles } from "lucide-react"

const DEMO_EXAMPLES = [
  {
    label: "Job Description",
    text: "We're looking for a young, energetic digital native to join our fast-paced team. Recent graduates preferred.",
  },
  {
    label: "Performance Review",
    text: "She needs to be more aggressive in meetings and less emotional when presenting her ideas.",
  },
  {
    label: "Job Posting",
    text: "Candidate must be able to stand for 8 hours and have a valid driver's license.",
  },
]

export function InteractiveDemo() {
  const [inputText, setInputText] = useState("")
  const { scan, result, loading, error, reset } = useBiasScan()

  const handleScan = () => {
    if (inputText.trim()) {
      scan(inputText)
    }
  }

  const handleExampleClick = (text: string) => {
    setInputText(text)
    reset()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleScan()
    }
  }

  const severityInfo = result ? getSeverityLevel(result.overall_severity) : null

  return (
    <section className="section bg-[var(--bg-dark)] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[var(--secondary)] bg-[var(--secondary)]/10 rounded-full border border-[var(--secondary)]/20">
            Try It Live
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Interactive Demo
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Enter any text to see real-time bias detection in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal-style container */}
          <Card variant="elevated" padding="none" className="overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-black)] border-b border-[var(--border)]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              </div>
              <span className="ml-2 text-sm text-[var(--text-muted)] font-mono">
                sentinel-ai-demo
              </span>
            </div>

            <div className="p-6">
              {/* Example buttons */}
              <div className="mb-4">
                <p className="text-xs text-[var(--text-muted)] mb-2">
                  Try an example:
                </p>
                <div className="flex flex-wrap gap-2">
                  {DEMO_EXAMPLES.map((example, i) => (
                    <button
                      key={i}
                      onClick={() => handleExampleClick(example.text)}
                      className="px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border)] rounded hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {example.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input area */}
              <div className="relative mb-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter text to scan for bias..."
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-[var(--bg-black)] border border-[var(--border)] rounded-lg text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--primary)] font-mono text-sm resize-none"
                />
                <div className="absolute bottom-3 right-3 text-xs text-[var(--text-muted)]">
                  {inputText.length}/500
                </div>
              </div>

              {/* Scan button with Coming Soon overlay */}
              <div className="relative">
                <Button
                  variant="primary"
                  onClick={handleScan}
                  loading={loading}
                  disabled={true}
                  fullWidth
                >
                  <Sparkles className="w-4 h-4" />
                  Scan for Bias
                </Button>
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--primary)]/90 rounded-lg cursor-not-allowed">
                  <span className="text-white font-bold text-lg tracking-wide">
                    COMING SOON
                  </span>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="mt-4 p-4 bg-[var(--error)]/10 border border-[var(--error)]/30 rounded-lg flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-[var(--error)]" />
                  <p className="text-sm text-[var(--error)]">{error}</p>
                </div>
              )}

              {/* Results */}
              {result && (
                <div className="mt-6 space-y-4">
                  {/* Severity indicator */}
                  <div className="flex items-center justify-between p-4 bg-[var(--bg-black)] rounded-lg">
                    <div className="flex items-center gap-3">
                      {result.overall_severity === 0 ? (
                        <CheckCircle className="w-6 h-6 text-[var(--success)]" />
                      ) : (
                        <AlertTriangle
                          className="w-6 h-6"
                          style={{ color: severityInfo?.color }}
                        />
                      )}
                      <div>
                        <p className="font-medium text-white">
                          {result.overall_severity === 0
                            ? "No bias detected"
                            : `${result.detected_labels.length} issue(s) found`}
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">
                          Severity: {severityInfo?.label || "None"} (
                          {result.overall_severity}%)
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        result.policy_action === "PASS"
                          ? "success"
                          : result.policy_action === "WARN"
                          ? "warning"
                          : "error"
                      }
                    >
                      {result.policy_action}
                    </Badge>
                  </div>

                  {/* Detected issues */}
                  {result.detected_labels.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[var(--text-secondary)]">
                        Detected Issues:
                      </p>
                      {result.detected_labels.map((label, i) => (
                        <div
                          key={i}
                          className="p-3 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-white text-sm">
                              {label.category}
                            </span>
                            <span className="text-xs font-mono text-[var(--text-muted)]">
                              {(label.confidence * 100).toFixed(0)}% confidence
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlighted spans */}
                  {result.spans.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-[var(--text-secondary)]">
                        Problematic Phrases:
                      </p>
                      {result.spans.map((span, i) => (
                        <div
                          key={i}
                          className="p-3 bg-[var(--error)]/5 border border-[var(--error)]/20 rounded-lg"
                        >
                          <p className="text-sm text-white mb-1">
                            &quot;<span className="text-[var(--error)]">{span.text}</span>&quot;
                          </p>
                          {span.suggestion && (
                            <p className="text-xs text-[var(--text-muted)]">
                              {span.suggestion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Processing time */}
                  {result.processing_time_ms && (
                    <p className="text-xs text-[var(--text-muted)] text-right font-mono">
                      Processed in {result.processing_time_ms}ms
                    </p>
                  )}
                </div>
              )}
            </div>
          </Card>

          {/* Disclaimer */}
          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            Demo is rate-limited to 10 requests per minute. Full API access
            available with subscription.
          </p>
        </div>
      </div>
    </section>
  )
}
