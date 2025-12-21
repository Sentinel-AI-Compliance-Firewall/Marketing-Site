/**
 * Navigation configuration for Sentinel AI Marketing Site
 */

interface NavChild {
  label: string
  href: string
  description?: string
}

interface NavLink {
  label: string
  href: string
  children?: NavChild[]
}

export const NAV_LINKS: NavLink[] = [
  {
    label: "Product",
    href: "/product",
    children: [
      {
        label: "Overview",
        href: "/product",
        description: "Complete product overview",
      },
      {
        label: "Features",
        href: "/product#features",
        description: "Explore all bias detection capabilities",
      },
      {
        label: "9 Categories",
        href: "/product#categories",
        description: "Learn about protected categories",
      },
      {
        label: "API & Integrations",
        href: "/product#api",
        description: "Connect with your existing tools",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Company",
    href: "/about",
    children: [
      {
        label: "About Us",
        href: "/about",
        description: "Our mission and story",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with our team",
      },
    ],
  },
]

export const FOOTER_LINKS = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "/product#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Integrations", href: "/product#integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Security Docs", href: "/security" },
      { label: "Help Center", href: "/help" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Security", href: "/security" },
    ],
  },
} as const

export const SOCIAL_LINKS = [
  {
    label: "X (Twitter)",
    href: "https://x.com/SentinelAICF",
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/sentinel-ai-compliance-firewall",
    icon: "linkedin",
  },
] as const

/**
 * CTA buttons configuration
 */
export const CTA_CONFIG = {
  primary: {
    label: "Request Demo",
    href: "/contact?demo=true",
  },
  secondary: {
    label: "Watch Product Tour",
    href: "#product-tour",
  },
  waitlist: {
    label: "Join Waitlist",
    href: "/#waitlist",
  },
  sales: {
    label: "Talk to Sales",
    href: "/contact?sales=true",
  },
} as const

/**
 * Page metadata configuration
 */
export const PAGE_META = {
  home: {
    title: "Enterprise Bias Detection & Compliance Platform",
    description:
      "AI-powered compliance firewall that detects and remediates workplace bias across 9 protected categories. Prevent discrimination before it happens.",
  },
  product: {
    title: "Product Features",
    description:
      "Comprehensive bias detection across 9 protected categories with real-time scanning, auto-remediation, and enterprise-grade security.",
  },
  pricing: {
    title: "Pricing Plans",
    description:
      "Flexible pricing for teams of all sizes. Start with a free trial and scale as you grow.",
  },
  about: {
    title: "About Us",
    description:
      "Learn about our mission to create fair, inclusive workplaces through AI-powered bias detection.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with our team for demos, sales inquiries, or support.",
  },
  security: {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with GDPR, CCPA compliance, encryption, and SOC 2 certification planned for 2026.",
  },
} as const
