"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge, Card } from "@/app/components/ui"

const COOKIE_TYPES = [
  {
    name: "Essential Cookies",
    description: "Required for the website to function properly. Cannot be disabled.",
    examples: ["Session management", "Authentication", "Security tokens"],
    canDisable: false,
  },
  {
    name: "Functional Cookies",
    description: "Enable personalized features and remember your preferences.",
    examples: ["Language preferences", "Theme settings", "Dashboard layout"],
    canDisable: true,
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website.",
    examples: ["Page views", "Navigation patterns", "Feature usage"],
    canDisable: true,
  },
  {
    name: "Marketing Cookies",
    description: "Used to deliver relevant advertisements and track campaign effectiveness.",
    examples: ["Ad targeting", "Campaign attribution", "Retargeting"],
    canDisable: true,
  },
]

export default function CookiesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-[var(--text-secondary)]">
              Last updated: November 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-[var(--text-secondary)]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files that are stored on your device when you visit a website.
                  They help websites remember information about your visit, making your next visit easier
                  and the site more useful to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="mb-4">
                  Sentinel AI uses cookies and similar technologies to provide, protect, and improve our
                  services. We use cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep you signed in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our platform</li>
                  <li>Improve our services based on usage patterns</li>
                  <li>Protect against security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  {COOKIE_TYPES.map((cookie, i) => (
                    <Card key={i} className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          cookie.canDisable
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}>
                          {cookie.canDisable ? "Optional" : "Required"}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] mb-3">{cookie.description}</p>
                      <div className="text-sm text-[var(--text-muted)]">
                        <strong>Examples:</strong> {cookie.examples.join(", ")}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p>
                  We may allow certain third-party service providers to place cookies on our website to
                  provide their services. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Google Analytics:</strong> Website analytics and usage tracking</li>
                  <li><strong className="text-white">Stripe:</strong> Secure payment processing</li>
                  <li><strong className="text-white">Intercom:</strong> Customer support chat</li>
                  <li><strong className="text-white">HubSpot:</strong> Marketing and CRM</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
                <p className="mb-4">
                  You can manage your cookie preferences at any time through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our cookie consent banner when you first visit</li>
                  <li>Your browser settings to block or delete cookies</li>
                  <li>Your account settings for personalization preferences</li>
                </ul>
                <p className="mt-4">
                  Note that disabling certain cookies may affect the functionality of our platform and
                  limit your ability to use some features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Browser Settings</h2>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can typically
                  find these settings in the &quot;Options&quot; or &quot;Preferences&quot; menu of your browser. The following
                  links provide information on how to modify cookie settings in popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Google Chrome</li>
                  <li>Mozilla Firefox</li>
                  <li>Apple Safari</li>
                  <li>Microsoft Edge</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices
                  or for legal, operational, or regulatory reasons. We will notify you of any material
                  changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-white">Email:</strong> privacy@sentinel-ai.com<br />
                  <strong className="text-white">Address:</strong> 123 Innovation Way, San Francisco, CA 94105
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
