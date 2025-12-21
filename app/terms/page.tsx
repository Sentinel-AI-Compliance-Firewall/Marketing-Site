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
              Last updated: December 2025
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
                  By accessing or using Sentinel AI Compliance Firewall&apos;s services (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
                  If you do not agree to these Terms, you may not use our Services. These Terms apply to all
                  users, including individual users and organizations (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;).
                </p>
                <p className="mt-4">
                  These Terms constitute a legally binding agreement between you and Sentinel AI Compliance Firewall
                  (&quot;Sentinel AI,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). If you are accepting on behalf of an organization, you represent
                  that you have authority to bind that organization.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
                <p>
                  Sentinel AI Compliance Firewall provides an AI-powered bias detection platform that scans documents and
                  communications for potential discriminatory content across protected categories. Our
                  Services include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Real-time text scanning for bias detection</li>
                  <li>Batch document processing</li>
                  <li>API access for integration with third-party systems</li>
                  <li>Reporting and analytics dashboards</li>
                  <li>Remediation suggestions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration</h2>
                <p>To use our Services, you must:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Provide accurate, current, and complete registration information</li>
                  <li>Maintain the security and confidentiality of your account credentials</li>
                  <li>Promptly notify us of any unauthorized access or security breach</li>
                  <li>Be responsible for all activities that occur under your account</li>
                  <li>Not share account credentials or allow multiple users to access a single account</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate accounts that violate these requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Use our Services for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble the platform</li>
                  <li>Submit malicious content or attempt to compromise system security</li>
                  <li>Exceed rate limits or abuse API access beyond your subscription tier</li>
                  <li>Resell, redistribute, or sublicense our Services without authorization</li>
                  <li>Use automated systems to scrape, harvest, or extract data from our platform</li>
                  <li>Interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Attempt to gain unauthorized access to any systems or networks</li>
                  <li>Use our Services to harass, abuse, or harm others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p>
                  <strong className="text-white">Our Property:</strong> Sentinel AI retains all rights, title, and interest in the platform,
                  algorithms, models, software, documentation, and all proprietary technology. Nothing in these Terms
                  grants you any right to our intellectual property except the limited license to use the Services.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Your Content:</strong> You retain ownership of all content you submit for scanning (&quot;Customer Content&quot;).
                  By using our Services, you grant us a limited, non-exclusive license to process your Customer Content
                  solely for the purpose of providing the requested Services. We do not use Customer Content to train
                  our models.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Feedback:</strong> If you provide feedback or suggestions about our Services, you grant us
                  the right to use such feedback without restriction or compensation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Paid subscriptions are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law or specified in your service agreement</li>
                  <li>We reserve the right to modify pricing with 30 days advance notice</li>
                  <li>Failure to pay may result in suspension or termination of Services</li>
                  <li>You are responsible for all applicable taxes (excluding our income taxes)</li>
                  <li>Overdue amounts may accrue interest at 1.5% per month or the maximum legal rate</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Service Level Agreement</h2>
                <p>
                  Enterprise customers may be eligible for a Service Level Agreement (SLA) guaranteeing
                  99.9% uptime. SLA credits are available for qualifying downtime events as specified
                  in the Enterprise agreement.
                </p>
                <p className="mt-4">
                  Standard plans include best-effort availability without guaranteed uptime. Scheduled
                  maintenance will be communicated with reasonable advance notice when possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Compliance Disclaimer</h2>
                <p className="p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                  <strong className="text-white">IMPORTANT:</strong> Sentinel AI&apos;s bias detection is provided as a tool to assist
                  human decision-making and compliance efforts. Our Services do not constitute legal advice and
                  do not guarantee compliance with any specific laws or regulations. You remain solely responsible
                  for ensuring your organization&apos;s compliance with applicable employment, anti-discrimination,
                  and other laws. We recommend consulting with qualified legal counsel for compliance matters.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Sentinel AI shall not be liable for any indirect, incidental, special, consequential,
                    or punitive damages, including loss of profits, data, or business opportunities</li>
                  <li>Our total liability for any claims arising from these Terms or use of Services
                    shall not exceed the fees paid by you in the twelve (12) months preceding the claim</li>
                  <li>We are not liable for decisions made based on our analysis or any claims arising
                    from your reliance on our bias detection results</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimer of Warranties</h2>
                <p>
                  OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="mt-4">
                  We do not warrant that our Services will be uninterrupted, error-free, completely secure,
                  or that our bias detection will identify all potential issues. No advice or information
                  obtained from Sentinel AI shall create any warranty not expressly stated in these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Sentinel AI and its officers, directors,
                  employees, agents, and affiliates from and against any claims, damages, losses, liabilities,
                  costs, and expenses (including reasonable attorneys&apos; fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Your use of the Services or violation of these Terms</li>
                  <li>Your Customer Content or any data you submit to the platform</li>
                  <li>Your violation of any third-party rights, including intellectual property rights</li>
                  <li>Any employment or compliance decisions made based on our analysis</li>
                  <li>Your violation of applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Force Majeure</h2>
                <p>
                  Neither party shall be liable for any failure or delay in performance due to causes beyond
                  its reasonable control, including but not limited to: acts of God, natural disasters, war,
                  terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents,
                  pandemics, strikes, labor disputes, or shortages of transportation, facilities, fuel, energy,
                  labor, materials, or telecommunications failures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Termination</h2>
                <p>
                  <strong className="text-white">By You:</strong> You may terminate your account at any time by providing written notice.
                  Termination does not entitle you to a refund of prepaid fees.
                </p>
                <p className="mt-4">
                  <strong className="text-white">By Us:</strong> We may terminate or suspend your access immediately if you violate these Terms.
                  We may also terminate for convenience with 30 days written notice.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Effect of Termination:</strong> Upon termination, your right to use the Services ceases immediately.
                  We will delete your data within 30 days unless legally required to retain it or you request
                  an export. Sections that should survive termination (limitation of liability, indemnification,
                  governing law, etc.) will remain in effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. Dispute Resolution and Arbitration</h2>
                <p>
                  <strong className="text-white">Informal Resolution:</strong> Before initiating formal proceedings, you agree to contact us
                  to attempt to resolve any dispute informally for at least 30 days.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Binding Arbitration:</strong> Any dispute not resolved informally shall be resolved by binding
                  arbitration administered by JAMS under its Comprehensive Arbitration Rules. Arbitration
                  will be conducted in Los Angeles, California. The arbitrator&apos;s decision shall be final
                  and binding.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Class Action Waiver:</strong> YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE
                  CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Exceptions:</strong> Either party may seek injunctive relief in court for intellectual property
                  infringement or unauthorized access to Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of California, without regard to conflict
                  of law principles. For any matters not subject to arbitration, you consent to the exclusive
                  jurisdiction of the state and federal courts located in Los Angeles County, California.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">16. Changes to Terms</h2>
                <p>
                  We may update these Terms from time to time. Material changes will be communicated via email
                  or platform notification at least 30 days before taking effect. Continued use after changes
                  take effect constitutes acceptance of the new Terms. If you do not agree to the updated Terms,
                  you must stop using the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">17. General Provisions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Entire Agreement:</strong> These Terms, together with our Privacy Policy and any applicable
                    order forms, constitute the entire agreement between you and Sentinel AI</li>
                  <li><strong className="text-white">Severability:</strong> If any provision is found unenforceable, the remaining provisions
                    will continue in effect</li>
                  <li><strong className="text-white">Waiver:</strong> Our failure to enforce any right or provision shall not constitute a waiver</li>
                  <li><strong className="text-white">Assignment:</strong> You may not assign these Terms without our consent; we may assign freely</li>
                  <li><strong className="text-white">Notices:</strong> We may provide notices via email, platform notification, or posting on our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">18. Contact</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Contact Form:</strong> <a href="/contact" className="text-[var(--primary)] hover:underline">Contact Us</a></li>
                  <li><strong className="text-white">Address:</strong> Los Angeles, California, USA</li>
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
