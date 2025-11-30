import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"

/**
 * API Client for Sentinel AI
 * Configured for the marketing site demo functionality
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
const API_TIMEOUT = 30000 // 30 seconds

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add any custom headers here
    // For demo endpoints, no auth is required
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    // Handle specific error codes
    if (error.response) {
      switch (error.response.status) {
        case 429:
          // Rate limited
          const customError = new Error(
            "Demo limit reached. Please wait a moment before trying again."
          )
          customError.name = "RateLimitError"
          return Promise.reject(customError)

        case 400:
          return Promise.reject(new Error("Invalid request. Please check your input."))

        case 500:
          return Promise.reject(
            new Error("Server error. Please try again later.")
          )

        case 503:
          return Promise.reject(
            new Error("Service temporarily unavailable. Please try again later.")
          )

        default:
          return Promise.reject(
            new Error(
              (error.response.data as { detail?: string })?.detail ||
                "An error occurred"
            )
          )
      }
    }

    // Network error
    if (error.code === "ECONNABORTED") {
      return Promise.reject(new Error("Request timed out. Please try again."))
    }

    return Promise.reject(new Error("Network error. Please check your connection."))
  }
)

/**
 * Generic request function with type safety
 */
async function request<T>(config: AxiosRequestConfig): Promise<T> {
  const response = await apiClient.request<T>(config)
  return response.data
}

/**
 * API methods
 */
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    request<T>({ ...config, method: "GET", url }),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    request<T>({ ...config, method: "POST", url, data }),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    request<T>({ ...config, method: "PUT", url, data }),

  patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    request<T>({ ...config, method: "PATCH", url, data }),

  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    request<T>({ ...config, method: "DELETE", url }),
}

export default apiClient
