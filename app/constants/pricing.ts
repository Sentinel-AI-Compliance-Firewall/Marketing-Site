/**
 * Pricing Plans for Sentinel AI
 */

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small teams getting started with bias detection",
    price: {
      monthly: null,
      annual: null,
      label: "Coming Soon",
    },
    popular: false,
    features: [
      { text: "10,000 API calls/month", included: true },
      { text: "3 bias categories", included: true },
      { text: "Email support", included: true },
      { text: "30-day audit logs", included: true },
      { text: "Basic dashboard", included: true },
      { text: "All 9 categories", included: false },
      { text: "SSO integration", included: false },
      { text: "Priority support", included: false },
      { text: "Custom policies", included: false },
      { text: "On-premise deployment", included: false },
    ],
    cta: "Join Waitlist",
    ctaVariant: "outline" as const,
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing organizations with compliance requirements",
    price: {
      monthly: null,
      annual: null,
      label: "Coming Soon",
    },
    popular: true,
    features: [
      { text: "50,000 API calls/month", included: true },
      { text: "All 9 bias categories", included: true },
      { text: "Priority support", included: true },
      { text: "1-year audit logs", included: true },
      { text: "Full analytics dashboard", included: true },
      { text: "SSO integration", included: true },
      { text: "Slack/Teams integration", included: true },
      { text: "Custom policies", included: true },
      { text: "On-premise deployment", included: false },
      { text: "Dedicated account manager", included: false },
    ],
    cta: "Join Waitlist",
    ctaVariant: "primary" as const,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: {
      monthly: null,
      annual: null,
      label: "Contact Us",
    },
    popular: false,
    features: [
      { text: "Unlimited API calls", included: true },
      { text: "All 9 categories + custom", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Unlimited audit logs", included: true },
      { text: "White-label dashboard", included: true },
      { text: "SSO + advanced security", included: true },
      { text: "All integrations", included: true },
      { text: "Custom policies & rules", included: true },
      { text: "On-premise deployment", included: true },
      { text: "Dedicated account manager", included: true },
    ],
    cta: "Contact Us",
    ctaVariant: "outline" as const,
  },
] as const

export type PricingPlan = (typeof PRICING_PLANS)[number]

/**
 * FAQ items for pricing page
 */
export const PRICING_FAQ = [
  {
    question: "What counts as an API call?",
    answer:
      "Each text submission for bias scanning counts as one API call. Batch submissions count as one call per text item in the batch. Rewrite requests count as an additional call.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you'll be able to change your plan at any time once we launch. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate takes effect at your next billing cycle.",
  },
  {
    question: "Will there be a free trial?",
    answer:
      "Yes! We plan to offer a free trial period with full access to features for all plans. Join the waitlist to be notified when we launch.",
  },
  {
    question: "What payment methods will you accept?",
    answer:
      "We plan to accept all major credit cards (Visa, MasterCard, American Express), ACH bank transfers for annual plans, and can arrange invoicing for Enterprise customers.",
  },
  {
    question: "How does the on-premise deployment work?",
    answer:
      "Enterprise customers can deploy Sentinel AI Compliance Firewall within their own infrastructure. We provide Docker containers, Kubernetes Helm charts, and full deployment support.",
  },
  {
    question: "What SLA do you offer?",
    answer:
      "Professional plans include 99.9% uptime SLA. Enterprise customers can negotiate custom SLAs up to 99.99% with dedicated support.",
  },
] as const

/**
 * Comparison features for feature matrix
 */
export const FEATURE_COMPARISON = [
  {
    category: "Core Features",
    features: [
      {
        name: "API Calls/Month",
        starter: "10,000",
        professional: "50,000",
        enterprise: "Unlimited",
      },
      {
        name: "Bias Categories",
        starter: "3",
        professional: "9",
        enterprise: "9 + Custom",
      },
      {
        name: "Real-time Detection",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Auto-Remediation",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Analytics & Reporting",
    features: [
      {
        name: "Basic Dashboard",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Advanced Analytics",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Audit Log Retention",
        starter: "30 days",
        professional: "1 year",
        enterprise: "Unlimited",
      },
      {
        name: "Custom Reports",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Integrations",
    features: [
      {
        name: "REST API",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Slack Integration",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Microsoft Teams",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "Webhooks",
        starter: false,
        professional: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Security & Compliance",
    features: [
      {
        name: "SSO (SAML/OIDC)",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "SOC 2 Type II",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "HIPAA Compliance",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "On-Premise Option",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
  {
    category: "Support",
    features: [
      {
        name: "Email Support",
        starter: true,
        professional: true,
        enterprise: true,
      },
      {
        name: "Priority Support",
        starter: false,
        professional: true,
        enterprise: true,
      },
      {
        name: "24/7 Phone Support",
        starter: false,
        professional: false,
        enterprise: true,
      },
      {
        name: "Dedicated Account Manager",
        starter: false,
        professional: false,
        enterprise: true,
      },
    ],
  },
] as const
