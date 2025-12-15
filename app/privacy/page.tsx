"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge } from "@/app/components/ui"

export default function PrivacyPage() {
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
              Privacy Policy
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
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="space-y-8 text-[var(--text-secondary)]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                  SentinelAI Compliance Firewall (&quot;SentinelAI,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                  use our bias detection platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-white mb-2">2.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account registration information (name, email, company)</li>
                  <li>Payment and billing information</li>
                  <li>Documents and content submitted for bias scanning</li>
                  <li>Communications with our support team</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">2.2 Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and analytics</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide and maintain our bias detection services</li>
                  <li>Process transactions and send related information</li>
                  <li>Improve and optimize our platform</li>
                  <li>Respond to customer service requests</li>
                  <li>Send administrative and promotional communications</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes
                  outlined in this Privacy Policy. Document content submitted for scanning is processed in
                  real-time and is not permanently stored unless you explicitly enable audit logging features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing</h2>
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your consent</li>
                  <li>Affiliated companies for internal purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                <p>
                  We implement industry-standard security measures including encryption, access controls,
                  and regular security audits. We are committed to complying with GDPR, CCPA, and other
                  applicable data protection requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place, including Standard Contractual Clauses
                  for transfers outside the European Economic Area.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed to individuals under 18 years of age. We do not knowingly
                  collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our data practices, please contact us
                  through our <a href="/contact" className="text-[var(--primary)] hover:underline">contact form</a>.
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
