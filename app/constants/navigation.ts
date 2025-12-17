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
      {
        label: "Enterprise",
        href: "/product#enterprise",
        description: "Solutions for large organizations",
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
      { label: "Case Studies", href: "/case-studies" },
      { label: "Help Center", href: "/help" },
      { label: "Status", href: "/status" },
      { label: "Community", href: "/community" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "DPA", href: "/dpa" },
      { label: "Security", href: "/security" },
    ],
  },
} as const

export const SOCIAL_LINKS = [
  {
    label: "Twitter",
    href: "https://twitter.com/sentinelai",
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/sentinel-ai",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/sentinel-ai",
    icon: "github",
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
      "Enterprise-grade security with SOC 2 Type II, GDPR, HIPAA compliance and more.",
  },
} as const
