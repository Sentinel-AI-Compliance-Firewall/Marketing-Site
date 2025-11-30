"use client"

import { useState, useCallback } from "react"
import { getDemoApi } from "@/app/services/api/demo"
import type { ScanResult, DemoExample } from "@/app/types"

const MAX_TEXT_LENGTH = 500

interface UseBiasScanReturn {
  scan: (text: string) => Promise<void>
  result: ScanResult | null
  loading: boolean
  error: string | null
  reset: () => void
  examples: DemoExample[]
  loadExamples: () => Promise<void>
  examplesLoading: boolean
}

/**
 * Hook for interactive bias scanning demo
 */
export function useBiasScan(): UseBiasScanReturn {
  const [result, setResult] = useState<ScanResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [examples, setExamples] = useState<DemoExample[]>([])
  const [examplesLoading, setExamplesLoading] = useState(false)

  const demoApi = getDemoApi()

  const scan = useCallback(
    async (text: string) => {
      // Validate input
      if (!text.trim()) {
        setError("Please enter some text to scan")
        return
      }

      if (text.length > MAX_TEXT_LENGTH) {
        setError(`Text must be under ${MAX_TEXT_LENGTH} characters for the demo`)
        return
      }

      setLoading(true)
      setError(null)
      setResult(null)

      try {
        const data = await demoApi.scan(text)
        setResult(data)
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to scan text. Please try again."
        setError(message)
      } finally {
        setLoading(false)
      }
    },
    [demoApi]
  )

  const reset = useCallback(() => {
    setResult(null)
    setError(null)
  }, [])

  const loadExamples = useCallback(async () => {
    if (examples.length > 0) return // Already loaded

    setExamplesLoading(true)
    try {
      const data = await demoApi.getExamples()
      setExamples(data.examples)
    } catch (err) {
      console.error("Failed to load examples:", err)
    } finally {
      setExamplesLoading(false)
    }
  }, [demoApi, examples.length])

  return {
    scan,
    result,
    loading,
    error,
    reset,
    examples,
    loadExamples,
    examplesLoading,
  }
}
