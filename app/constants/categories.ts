/**
 * 9 Protected Bias Categories
 * These categories align with EEOC guidelines and anti-discrimination laws
 */

export const BIAS_CATEGORIES = [
  {
    id: "age",
    name: "Age Discrimination",
    shortName: "Age",
    icon: "👴",
    color: "#FF6B6B",
    colorRgb: "255, 107, 107",
    legalFramework: "ADEA (Age 40+)",
    legalUrl: "https://www.eeoc.gov/statutes/age-discrimination-employment-act-1967",
    description:
      "Detects age-coded language that may discriminate against older or younger candidates.",
    accuracy: 97.3,
    examples: [
      "Young and energetic",
      "Digital native required",
      "Recent graduates preferred",
      "Overqualified",
      "Culture fit for our young team",
    ],
  },
  {
    id: "gender",
    name: "Gender Bias",
    shortName: "Gender",
    icon: "⚧️",
    color: "#9B59B6",
    colorRgb: "155, 89, 182",
    legalFramework: "Title VII",
    legalUrl: "https://www.eeoc.gov/statutes/title-vii-civil-rights-act-1964",
    description:
      "Identifies gender-specific terms, stereotypes, and biased language patterns.",
    accuracy: 96.8,
    examples: [
      "He/she pronouns in neutral contexts",
      "Aggressive leadership style",
      "Work-life balance concerns",
      "Maternal wall bias",
      "Manning the desk",
    ],
  },
  {
    id: "race",
    name: "Race & Ethnicity",
    shortName: "Race",
    icon: "🌍",
    color: "#3498DB",
    colorRgb: "52, 152, 219",
    legalFramework: "Title VII, Section 1981",
    legalUrl: "https://www.eeoc.gov/racecolor-discrimination",
    description:
      "Detects racial and ethnic bias including coded language and microaggressions.",
    accuracy: 98.1,
    examples: [
      "Cultural fit",
      "Articulate/well-spoken",
      "Professional appearance",
      "Urban/inner-city",
      "Exotic features",
    ],
  },
  {
    id: "nationality",
    name: "Nationality",
    shortName: "Nationality",
    icon: "🗺️",
    color: "#1ABC9C",
    colorRgb: "26, 188, 156",
    legalFramework: "Title VII, INA",
    legalUrl: "https://www.eeoc.gov/national-origin-discrimination",
    description:
      "Identifies national origin discrimination and citizenship-based bias.",
    accuracy: 95.4,
    examples: [
      "Native English speaker required",
      "US citizens only",
      "Accent discrimination",
      "Foreign degree concerns",
      "Must be authorized to work",
    ],
  },
  {
    id: "disability",
    name: "Disability",
    shortName: "Disability",
    icon: "♿",
    color: "#E67E22",
    colorRgb: "230, 126, 34",
    legalFramework: "ADA, Section 503",
    legalUrl: "https://www.eeoc.gov/statutes/americans-disabilities-act-1990",
    description:
      "Detects language that may exclude or discriminate against people with disabilities.",
    accuracy: 97.0,
    examples: [
      "Must be able to stand for 8 hours",
      "Valid driver's license required",
      "Physically demanding",
      "Health requirements",
      "No accommodations needed",
    ],
  },
  {
    id: "religion",
    name: "Religion",
    shortName: "Religion",
    icon: "🕌",
    color: "#F39C12",
    colorRgb: "243, 156, 18",
    legalFramework: "Title VII",
    legalUrl: "https://www.eeoc.gov/religious-discrimination",
    description:
      "Identifies religious discrimination and scheduling/accommodation bias.",
    accuracy: 94.7,
    examples: [
      "Christmas party attendance",
      "Scheduling conflicts with observances",
      "Dress code violations",
      "Religious expression limits",
      "Faith-based requirements",
    ],
  },
  {
    id: "sexual_orientation",
    name: "Sexual Orientation",
    shortName: "LGBTQ+",
    icon: "🏳️‍🌈",
    color: "#E74C3C",
    colorRgb: "231, 76, 60",
    legalFramework: "Title VII (Bostock)",
    legalUrl: "https://www.eeoc.gov/sexual-orientation-and-gender-identity-sogi-discrimination",
    description:
      "Detects discrimination based on sexual orientation and gender identity.",
    accuracy: 96.2,
    examples: [
      "Family-oriented workplace",
      "Traditional values",
      "Spousal benefit language",
      "Pronoun misuse",
      "Lifestyle preferences",
    ],
  },
  {
    id: "employment",
    name: "Employment Bias",
    shortName: "Employment",
    icon: "💼",
    color: "#2ECC71",
    colorRgb: "46, 204, 113",
    legalFramework: "Various EEOC",
    legalUrl: "https://www.eeoc.gov/laws/guidance",
    description:
      "Identifies general employment discrimination patterns and unfair practices.",
    accuracy: 93.5,
    examples: [
      "Salary history inquiries",
      "Background check discrimination",
      "Credit check requirements",
      "Unemployment gaps",
      "Must currently be employed",
    ],
  },
  {
    id: "toxicity",
    name: "Toxicity",
    shortName: "Toxicity",
    icon: "⚠️",
    color: "#C0392B",
    colorRgb: "192, 57, 43",
    legalFramework: "Hostile Work Environment",
    legalUrl: "https://www.eeoc.gov/harassment",
    description:
      "Detects harassment, bullying, and hostile language patterns.",
    accuracy: 99.1,
    examples: [
      "Harassment language",
      "Threatening tone",
      "Bullying patterns",
      "Microaggressions",
      "Demeaning comments",
    ],
  },
] as const

export type BiasCategory = (typeof BIAS_CATEGORIES)[number]
export type BiasCategoryId = BiasCategory["id"]

/**
 * Get category by ID
 */
export function getCategoryById(id: string): BiasCategory | undefined {
  return BIAS_CATEGORIES.find((cat) => cat.id === id)
}

/**
 * Get category color by ID
 */
export function getCategoryColor(id: string): string {
  return getCategoryById(id)?.color || "#666666"
}

/**
 * Severity levels for bias detection
 */
export const SEVERITY_LEVELS = {
  LOW: { min: 0, max: 30, label: "Low", color: "#FFD700" },
  MEDIUM: { min: 31, max: 60, label: "Medium", color: "#FFB800" },
  HIGH: { min: 61, max: 80, label: "High", color: "#FF6B35" },
  CRITICAL: { min: 81, max: 100, label: "Critical", color: "#FF4444" },
} as const

/**
 * Get severity level from score
 */
export function getSeverityLevel(score: number) {
  if (score <= 30) return SEVERITY_LEVELS.LOW
  if (score <= 60) return SEVERITY_LEVELS.MEDIUM
  if (score <= 80) return SEVERITY_LEVELS.HIGH
  return SEVERITY_LEVELS.CRITICAL
}

/**
 * Policy actions
 */
export const POLICY_ACTIONS = {
  PASS: { label: "Pass", color: "#FFD700", icon: "✓" },
  WARN: { label: "Warning", color: "#FFB800", icon: "⚠" },
  BLOCK: { label: "Blocked", color: "#FF4444", icon: "✕" },
  AUTO_REWRITE: { label: "Auto-Rewrite", color: "#FFA500", icon: "↻" },
} as const
