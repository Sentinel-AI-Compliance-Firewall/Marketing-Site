import { api } from "./client"
import type {
  ScanResult,
  DemoExample,
  DemoScanRequest,
  ContactFormData,
  NewsletterFormData,
} from "@/app/types"

/**
 * API endpoints
 */
const ENDPOINTS = {
  DEMO_SCAN: "/v1/demo/scan",
  DEMO_EXAMPLES: "/v1/demo/examples",
  HEALTH: "/v1/compliance/health",
  CONTACT: "/v1/contact",
  NEWSLETTER: "/v1/newsletter",
} as const

/**
 * Demo API service
 * Public endpoints for marketing site interactive features
 */
export const demoApi = {
  /**
   * Scan text for bias (rate-limited demo endpoint)
   */
  scan: async (text: string): Promise<ScanResult> => {
    const payload: DemoScanRequest = { text }
    return api.post<ScanResult>(ENDPOINTS.DEMO_SCAN, payload)
  },

  /**
   * Get pre-built demo examples
   */
  getExamples: async (): Promise<{ examples: DemoExample[] }> => {
    return api.get<{ examples: DemoExample[] }>(ENDPOINTS.DEMO_EXAMPLES)
  },

  /**
   * Check API health status
   */
  healthCheck: async (): Promise<{ status: string; ml_ready: boolean }> => {
    return api.get<{ status: string; ml_ready: boolean }>(ENDPOINTS.HEALTH)
  },
}

/**
 * Contact form API
 */
export const contactApi = {
  /**
   * Submit contact form
   */
  submit: async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
    return api.post<{ success: boolean; message: string }>(ENDPOINTS.CONTACT, data)
  },
}

/**
 * Newsletter API
 */
export const newsletterApi = {
  /**
   * Subscribe to newsletter
   */
  subscribe: async (
    data: NewsletterFormData
  ): Promise<{ success: boolean; message: string }> => {
    return api.post<{ success: boolean; message: string }>(ENDPOINTS.NEWSLETTER, data)
  },
}

/**
 * Mock implementations for demo when API is not available
 */
export const mockDemoApi = {
  scan: async (text: string): Promise<ScanResult> => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simple mock detection logic
    const detectedLabels = []
    const spans = []
    let severity = 0

    const biasPatterns = [
      {
        pattern: /young|energetic|digital native|recent grad/gi,
        category: "Age Discrimination",
        severity: 75,
      },
      {
        pattern: /he\/she|manpower|chairman|mankind/gi,
        category: "Gender Bias",
        severity: 60,
      },
      {
        pattern: /native english|native speaker/gi,
        category: "Nationality",
        severity: 70,
      },
      {
        pattern: /must be able to stand|physically fit|no disabilities/gi,
        category: "Disability",
        severity: 80,
      },
      {
        pattern: /culture fit|good fit for our team/gi,
        category: "Race & Ethnicity",
        severity: 50,
      },
    ]

    for (const { pattern, category, severity: patternSeverity } of biasPatterns) {
      const matches = text.matchAll(pattern)
      for (const match of matches) {
        if (match.index !== undefined) {
          detectedLabels.push({
            label: category,
            category,
            confidence: 0.85 + Math.random() * 0.1,
            severity: patternSeverity,
          })
          spans.push({
            start: match.index,
            end: match.index + match[0].length,
            text: match[0],
            category,
            suggestion: `Consider revising "${match[0]}" to use more inclusive language`,
          })
          severity = Math.max(severity, patternSeverity)
        }
      }
    }

    const policyAction =
      severity >= 80 ? "BLOCK" : severity >= 50 ? "WARN" : "PASS"

    return {
      scan_id: `demo-${Date.now()}`,
      text,
      overall_severity: severity,
      overall_risk_score: severity * 0.8,
      detected_labels: detectedLabels,
      spans,
      policy_action: policyAction,
      explanation:
        detectedLabels.length > 0
          ? `Detected ${detectedLabels.length} potential bias issue(s) in the text.`
          : "No bias detected in the text.",
      processing_time_ms: Math.floor(Math.random() * 200) + 100,
    }
  },

  getExamples: async (): Promise<{ examples: DemoExample[] }> => {
    return {
      examples: [
        {
          id: 1,
          title: "Job Description - Age Bias",
          text: "We're looking for a young, energetic digital native to join our fast-paced team. Recent graduates preferred.",
          expected_issues: ["Age Discrimination"],
          category: "age",
        },
        {
          id: 2,
          title: "Performance Review - Gender Bias",
          text: "She needs to be more aggressive in meetings and less emotional when presenting ideas.",
          expected_issues: ["Gender Bias"],
          category: "gender",
        },
        {
          id: 3,
          title: "Job Posting - Disability Bias",
          text: "Candidate must be able to stand for 8 hours and lift 50 pounds regularly. Valid driver's license required.",
          expected_issues: ["Disability"],
          category: "disability",
        },
        {
          id: 4,
          title: "Job Requirements - Nationality Bias",
          text: "Native English speakers only. Must be a US citizen or permanent resident.",
          expected_issues: ["Nationality"],
          category: "nationality",
        },
        {
          id: 5,
          title: "Company Culture - Multiple Biases",
          text: "Looking for someone who's a good culture fit for our young, dynamic team. Must be energetic and able to work long hours.",
          expected_issues: ["Age Discrimination", "Race & Ethnicity"],
          category: "multiple",
        },
      ],
    }
  },

  healthCheck: async (): Promise<{ status: string; ml_ready: boolean }> => {
    return { status: "healthy", ml_ready: true }
  },
}

/**
 * Export the appropriate API based on environment
 * Uses mock API if NEXT_PUBLIC_USE_MOCK_API is set to 'true'
 */
export const getDemoApi = () => {
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK_API === "true"
  return useMock ? mockDemoApi : demoApi
}
