"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge } from "@/app/components/ui"

export default function TermsPage() {
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
              Terms of Service
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
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Sentinel AI&apos;s services, you agree to be bound by these Terms of Service.
                  If you do not agree to these terms, you may not use our services. These terms apply to all
                  users, including individual users and organizations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                <p>
                  Sentinel AI provides an AI-powered bias detection platform that scans documents and
                  communications for potential discriminatory content across protected categories. Our
                  services include real-time scanning, batch processing, API access, and reporting tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
                <p>To use our services, you must:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly notify us of any unauthorized access</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Attempt to reverse engineer or exploit the platform</li>
                  <li>Submit malicious content or attempt to compromise security</li>
                  <li>Exceed rate limits or abuse API access</li>
                  <li>Resell or redistribute our services without authorization</li>
                  <li>Use automated systems to scrape or extract data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p>
                  Sentinel AI retains all rights to its platform, algorithms, and proprietary technology.
                  You retain ownership of content you submit for scanning. By using our services, you grant
                  us a limited license to process your content solely for providing the requested services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                <p>
                  Paid subscriptions are billed in advance on a monthly or annual basis. Fees are non-refundable
                  except as required by law or as specified in your service agreement. We reserve the right to
                  modify pricing with 30 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Service Level Agreement</h2>
                <p>
                  Enterprise customers may be eligible for a Service Level Agreement (SLA) guaranteeing
                  99.99% uptime. SLA credits are available for qualifying downtime events. Standard plans
                  include best-effort availability without guaranteed uptime.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p>
                  Sentinel AI&apos;s bias detection is provided as a tool to assist human decision-making and
                  does not guarantee the elimination of all bias. We are not liable for decisions made based
                  on our analysis. Our maximum liability is limited to fees paid in the preceding 12 months.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
                <p>
                  Our services are provided &quot;as is&quot; without warranties of any kind, express or implied.
                  We do not warrant that our services will be uninterrupted, error-free, or completely accurate
                  in all cases.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                <p>
                  Either party may terminate this agreement with 30 days written notice. We may immediately
                  terminate access for violations of these terms. Upon termination, your right to use the
                  services ceases and we may delete your data after a retention period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
                <p>
                  These terms are governed by the laws of the State of California, without regard to conflict
                  of law principles. Any disputes shall be resolved in the courts of San Francisco County, California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
                <p>
                  We may update these terms from time to time. Material changes will be communicated via email
                  or platform notification. Continued use after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Contact</h2>
                <p>
                  For questions about these Terms of Service, contact us at:
                </p>
                <p className="mt-2">
                  <strong className="text-white">Email:</strong> legal@sentinel-ai.com<br />
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
