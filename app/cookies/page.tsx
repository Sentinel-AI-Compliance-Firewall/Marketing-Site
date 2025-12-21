"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge, Card } from "@/app/components/ui"

const COOKIE_TYPES = [
  {
    name: "Essential Cookies",
    description: "Required for the website to function properly. These cookies enable core functionality such as security, authentication, and accessibility. Cannot be disabled.",
    cookies: [
      { name: "session_id", purpose: "Maintains your login session", duration: "Session" },
      { name: "csrf_token", purpose: "Protects against cross-site request forgery", duration: "Session" },
      { name: "auth_token", purpose: "Authenticates your identity", duration: "7 days" },
      { name: "cookie_consent", purpose: "Stores your cookie preferences", duration: "1 year" },
    ],
    canDisable: false,
  },
  {
    name: "Functional Cookies",
    description: "Enable personalized features and remember your preferences to provide an enhanced user experience.",
    cookies: [
      { name: "locale", purpose: "Remembers your language preference", duration: "1 year" },
      { name: "theme", purpose: "Stores your dark/light mode preference", duration: "1 year" },
      { name: "dashboard_layout", purpose: "Saves your dashboard configuration", duration: "1 year" },
      { name: "timezone", purpose: "Stores your timezone preference", duration: "1 year" },
    ],
    canDisable: true,
  },
  {
    name: "Analytics Cookies",
    description: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    cookies: [
      { name: "_ga", purpose: "Google Analytics - distinguishes users", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics - distinguishes users", duration: "24 hours" },
      { name: "_gat", purpose: "Google Analytics - throttles request rate", duration: "1 minute" },
      { name: "amplitude_id", purpose: "Product analytics and user behavior", duration: "1 year" },
    ],
    canDisable: true,
  },
  {
    name: "Marketing Cookies",
    description: "Used to deliver relevant advertisements and track campaign effectiveness. We use these sparingly and only with your consent.",
    cookies: [
      { name: "_fbp", purpose: "Facebook - tracks visits across websites", duration: "3 months" },
      { name: "li_fat_id", purpose: "LinkedIn - advertising attribution", duration: "30 days" },
      { name: "_gcl_au", purpose: "Google Ads - conversion tracking", duration: "90 days" },
    ],
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
              Last updated: December 2025
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
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile)
                  when you visit a website. They help websites remember information about your visit,
                  making your next visit easier and the site more useful to you.
                </p>
                <p className="mt-4">
                  Cookies can be &quot;session&quot; cookies (deleted when you close your browser) or &quot;persistent&quot;
                  cookies (remain on your device for a set period or until you delete them).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
                <p className="mb-4">
                  Sentinel AI Compliance Firewall uses cookies and similar technologies to provide, protect, and improve our
                  services. We use cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep you signed in to your account securely</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our platform to improve user experience</li>
                  <li>Analyze traffic patterns and optimize performance</li>
                  <li>Protect against security threats and fraudulent activity</li>
                  <li>Measure the effectiveness of our marketing campaigns (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Cookie Choices</h2>
                <p className="mb-4 p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                  <strong className="text-white">You have the right to accept or reject cookies.</strong> When you first visit
                  our website, we will ask for your consent before placing any non-essential cookies on your device.
                  You can accept all cookies, reject non-essential cookies, or customize your preferences.
                </p>
                <p>
                  Essential cookies cannot be disabled as they are necessary for the website to function.
                  You can change your preferences at any time through our cookie settings or your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {COOKIE_TYPES.map((category, i) => (
                    <Card key={i} className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          category.canDisable
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}>
                          {category.canDisable ? "Optional" : "Required"}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] mb-4">{category.description}</p>

                      {/* Cookie Details Table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-[var(--border)]">
                              <th className="text-left py-2 text-[var(--text-muted)] font-medium">Cookie Name</th>
                              <th className="text-left py-2 text-[var(--text-muted)] font-medium">Purpose</th>
                              <th className="text-left py-2 text-[var(--text-muted)] font-medium">Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            {category.cookies.map((cookie, j) => (
                              <tr key={j} className="border-b border-[var(--border)]/50">
                                <td className="py-2 text-[var(--primary)] font-mono text-xs">{cookie.name}</td>
                                <td className="py-2 text-[var(--text-secondary)]">{cookie.purpose}</td>
                                <td className="py-2 text-[var(--text-muted)]">{cookie.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p>
                  We may allow certain third-party service providers to place cookies on our website to
                  provide their services. These third parties have their own privacy policies:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong className="text-white">Google Analytics:</strong> Website analytics and usage tracking.{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <strong className="text-white">Stripe:</strong> Secure payment processing.{" "}
                    <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <strong className="text-white">Intercom:</strong> Customer support chat.{" "}
                    <a href="https://www.intercom.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <strong className="text-white">HubSpot:</strong> Marketing and CRM.{" "}
                    <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Privacy Policy</a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
                <p className="mb-4">
                  You can manage your cookie preferences at any time through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Cookie Banner:</strong> Click &quot;Cookie Settings&quot; when you see our consent banner</li>
                  <li><strong className="text-white">Browser Settings:</strong> Configure your browser to block or delete cookies</li>
                  <li><strong className="text-white">Account Settings:</strong> Manage personalization preferences in your dashboard</li>
                </ul>
                <p className="mt-4 p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                  <strong className="text-white">Note:</strong> Disabling certain cookies may affect the functionality of our
                  platform. Essential cookies are required for the website to function properly and cannot be disabled.
                  If you disable functional cookies, some features may not work as expected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Browser Cookie Settings</h2>
                <p className="mb-4">
                  Most web browsers allow you to control cookies through their settings. Here are links to
                  cookie management instructions for popular browsers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Google Chrome</a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Mozilla Firefox</a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Apple Safari</a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Microsoft Edge</a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Do Not Track Signals</h2>
                <p>
                  Some browsers offer a &quot;Do Not Track&quot; (DNT) feature. We currently do not respond to DNT signals
                  as there is no industry standard for compliance. However, you can use the cookie management
                  options described above to control tracking on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices,
                  technology, or legal requirements. We will notify you of any material changes by posting
                  the new policy on this page with an updated &quot;Last updated&quot; date. We encourage you to
                  review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about our use of cookies or this Cookie Policy:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Contact Form:</strong> <a href="/contact" className="text-[var(--primary)] hover:underline">Contact Us</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
