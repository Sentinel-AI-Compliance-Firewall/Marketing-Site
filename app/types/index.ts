/**
 * Core type definitions for Sentinel AI Marketing Site
 */

// ============================================
// API Types
// ============================================

export interface ApiResponse<T> {
  data: T
  success: boolean
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// ============================================
// Bias Detection Types
// ============================================

export interface BiasLabel {
  label: string
  category: string
  confidence: number
  severity: number
}

export interface BiasSpan {
  start: number
  end: number
  text: string
  category: string
  suggestion?: string
}

export interface ScanRequest {
  text: string
  context?: "job_description" | "chatbot" | "internal_comms" | "general"
  tenant_id?: string
}

export interface ScanResult {
  scan_id: string
  text: string
  overall_severity: number
  overall_risk_score: number
  detected_labels: BiasLabel[]
  spans: BiasSpan[]
  policy_action: PolicyAction
  explanation?: string
  processing_time_ms?: number
}

export interface RewriteResult {
  original_text: string
  rewritten_text: string
  before_score: number
  after_score: number
  improvement: number
  semantic_similarity: number
  changes_made: string[]
}

export interface ScanAndRewriteResult {
  scan: ScanResult
  rewrite?: RewriteResult
}

export type PolicyAction = "PASS" | "WARN" | "BLOCK" | "AUTO_REWRITE"

// ============================================
// Demo Types
// ============================================

export interface DemoExample {
  id: number
  title: string
  text: string
  expected_issues: string[]
  category?: string
}

export interface DemoScanRequest {
  text: string
}

export interface DemoScanResponse extends ScanResult {
  demo: true
}

// ============================================
// Form Types
// ============================================

export interface ContactFormData {
  name: string
  email: string
  company: string
  jobTitle?: string
  companySize?: CompanySize
  message: string
  source?: string
  type: "demo" | "sales" | "support" | "general"
}

export type CompanySize =
  | "1-10"
  | "11-50"
  | "51-200"
  | "201-500"
  | "501-1000"
  | "1000+"

export interface NewsletterFormData {
  email: string
}

// ============================================
// UI Component Types
// ============================================

export interface NavLink {
  label: string
  href: string
  children?: NavLinkChild[]
}

export interface NavLinkChild {
  label: string
  href: string
  description?: string
  icon?: string
}

export interface Feature {
  title: string
  description: string
  icon?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
  logo?: string
}

export interface Stat {
  value: string | number
  label: string
  prefix?: string
  suffix?: string
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export interface Certification {
  name: string
  description: string
  icon: string
  status: "certified" | "compliant" | "pending"
}

// ============================================
// Animation Types
// ============================================

export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
}

export interface ScrollTriggerConfig {
  trigger: string | HTMLElement
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
}

// ============================================
// Theme Types
// ============================================

export type ThemeColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info"

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent"

export type ButtonSize = "sm" | "md" | "lg"

export type CardVariant = "default" | "elevated" | "glass" | "glow"

// ============================================
// Layout Types
// ============================================

export interface PageProps {
  params?: Record<string, string>
  searchParams?: Record<string, string | string[] | undefined>
}

export interface LayoutProps {
  children: React.ReactNode
}

// ============================================
// Utility Types
// ============================================

export type WithClassName<T = object> = T & {
  className?: string
}

export type WithChildren<T = object> = T & {
  children?: React.ReactNode
}

export type Nullable<T> = T | null

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
