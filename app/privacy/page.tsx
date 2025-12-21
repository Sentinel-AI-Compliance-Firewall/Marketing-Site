"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge, Card } from "@/app/components/ui"

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
              Last updated: December 2025
            </p>
            <p className="text-sm text-[var(--text-muted)] mt-2">
              Effective Date: December 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <div className="space-y-8 text-[var(--text-secondary)]">

              {/* Data Controller Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Data Controller Information</h2>
                <p>
                  Sentinel AI Compliance Firewall, Inc. (&quot;Sentinel AI,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is the data controller
                  responsible for your personal data. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our AI-powered bias detection platform and related services.
                </p>
              </section>

              {/* Introduction and Scope */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Introduction and Scope</h2>
                <p>
                  This Privacy Policy applies to personal data we collect through our website (sentinelai-firewall.com),
                  our bias detection platform, APIs, mobile applications, and any other services we provide (collectively,
                  the &quot;Services&quot;).
                </p>
                <p className="mt-4">
                  By using our Services, you acknowledge that you have read and understood this Privacy Policy. If you
                  do not agree with our practices, please do not use our Services.
                </p>
                <p className="mt-4 p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                  <strong className="text-white">Important Notice:</strong> This policy does not apply when we process
                  personal data on behalf of our customers as a data processor. In those cases, our customers&apos; privacy
                  policies govern. For information about how a Sentinel AI customer handles your data, please contact
                  that customer directly.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect</h2>

                <h3 className="text-lg font-semibold text-white mb-2">3.1 Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Account Information:</strong> Name, email address, company name, job title, phone number</li>
                  <li><strong className="text-white">Payment Information:</strong> Billing address, payment card details (processed securely via Stripe—we do not store full card numbers)</li>
                  <li><strong className="text-white">Content for Scanning:</strong> Documents, text, and communications submitted for bias detection analysis</li>
                  <li><strong className="text-white">Communications:</strong> Messages sent to our support team, feedback, and survey responses</li>
                  <li><strong className="text-white">Professional Information:</strong> Job title, company size, industry sector</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">3.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Device Information:</strong> Browser type and version, operating system, device type, unique device identifiers</li>
                  <li><strong className="text-white">Network Information:</strong> IP address, approximate geolocation (city/country level)</li>
                  <li><strong className="text-white">Usage Data:</strong> Pages visited, features used, clickstream data, session duration, referring URLs</li>
                  <li><strong className="text-white">Cookies and Tracking:</strong> See our <a href="/cookies" className="text-[var(--primary)] hover:underline">Cookie Policy</a> for details</li>
                  <li><strong className="text-white">Log Data:</strong> Server logs including access times, errors, and system activity</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">3.3 Information from Third Parties</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Single Sign-On Providers:</strong> If you authenticate via Google, Microsoft, or Okta, we receive basic profile information</li>
                  <li><strong className="text-white">Payment Processors:</strong> Transaction confirmations and fraud signals from Stripe</li>
                  <li><strong className="text-white">Business Partners:</strong> Referral information from integration partners</li>
                  <li><strong className="text-white">Public Sources:</strong> Publicly available business information for enterprise sales</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">3.4 Sensitive and Special Category Data</h3>
                <p className="p-4 bg-[var(--bg-dark)] border border-orange-500/30 rounded-lg">
                  <strong className="text-orange-400">Important:</strong> Our bias detection service analyzes text that may
                  contain or reveal special category data under GDPR Article 9, including references to racial or ethnic
                  origin, political opinions, religious beliefs, trade union membership, health conditions, sexual orientation,
                  or other protected characteristics.
                </p>
                <p className="mt-4">
                  We process this data solely to identify potential discriminatory language and provide remediation suggestions.
                  We do not use this data to make decisions about individuals, build profiles, or train our models. Our customers
                  are responsible for ensuring they have appropriate legal basis (such as explicit consent or substantial public
                  interest) before submitting content containing special category data.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Biometric Data:</strong> We do not collect biometric data (fingerprints,
                  facial recognition, voiceprints, or similar identifiers).
                </p>
              </section>

              {/* Legal Basis for Processing */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
                <p>We process your personal data under the following legal bases as required by GDPR Article 6:</p>

                <div className="mt-4 space-y-4">
                  <div className="p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                    <h4 className="text-white font-medium mb-2">Contract Performance (Article 6(1)(b))</h4>
                    <p className="text-sm">Processing necessary to provide our bias detection services, manage your account, process payments, and fulfill our contractual obligations to you.</p>
                  </div>
                  <div className="p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                    <h4 className="text-white font-medium mb-2">Legitimate Interests (Article 6(1)(f))</h4>
                    <p className="text-sm">Processing for our legitimate business interests including: improving and securing our services, fraud prevention, analytics, direct marketing to existing customers (where permitted), and enforcing our terms. We balance these interests against your rights and freedoms.</p>
                  </div>
                  <div className="p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                    <h4 className="text-white font-medium mb-2">Consent (Article 6(1)(a))</h4>
                    <p className="text-sm">Where you have given explicit consent, such as for marketing communications, non-essential cookies, or processing of special category data. You may withdraw consent at any time without affecting the lawfulness of prior processing.</p>
                  </div>
                  <div className="p-4 bg-[var(--bg-dark)] border border-[var(--border)] rounded-lg">
                    <h4 className="text-white font-medium mb-2">Legal Obligation (Article 6(1)(c))</h4>
                    <p className="text-sm">Processing required to comply with applicable laws, such as tax reporting, responding to valid legal requests, or maintaining required records.</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">4.1 Special Category Data Processing</h3>
                <p>
                  For special category data that may be present in scanned content, processing is justified under
                  GDPR Article 9(2)(g) (substantial public interest in ensuring equal treatment and preventing discrimination)
                  and/or Article 9(2)(a) (explicit consent obtained by our customers from their data subjects).
                </p>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. How We Use Your Information</h2>
                <p>We use your personal data for the following purposes:</p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.1 Service Delivery</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and maintain our bias detection platform</li>
                  <li>Process and analyze content for potential discriminatory language</li>
                  <li>Generate bias reports and remediation suggestions</li>
                  <li>Process payments and manage billing</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.2 Service Improvement</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyze usage patterns to improve user experience</li>
                  <li>Develop new features and services</li>
                  <li>Conduct research and analytics (using aggregated/anonymized data)</li>
                  <li>Debug and fix technical issues</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.3 Communications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Send transactional messages (account confirmations, receipts, security alerts)</li>
                  <li>Provide service updates and important notices</li>
                  <li>Send marketing communications (with consent, where required)</li>
                  <li>Respond to your requests and feedback</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.4 Security and Compliance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Detect, prevent, and respond to fraud and security incidents</li>
                  <li>Enforce our Terms of Service and acceptable use policies</li>
                  <li>Comply with legal obligations and respond to lawful requests</li>
                  <li>Protect our rights, property, and safety</li>
                </ul>
              </section>

              {/* Automated Decision-Making and AI */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Automated Decision-Making and AI Processing</h2>
                <p>
                  Our platform uses artificial intelligence and machine learning to analyze text content for potential bias.
                  We are committed to transparency about how our AI works:
                </p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">6.1 How Our AI Works</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Analyzes text patterns using natural language processing (NLP) models</li>
                  <li>Identifies language that may indicate bias across 9 protected categories</li>
                  <li>Generates bias scores and confidence levels</li>
                  <li>Provides remediation suggestions and alternative phrasings</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">6.2 Safeguards and Limitations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Human Review:</strong> Our AI provides recommendations only—final decisions remain with humans</li>
                  <li><strong className="text-white">No Profiling:</strong> We do not create profiles of individuals or make automated decisions affecting individuals&apos; rights</li>
                  <li><strong className="text-white">No Training on Your Data:</strong> Your content is never used to train or improve our models</li>
                  <li><strong className="text-white">Transparency:</strong> We explain why content was flagged and provide confidence scores</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">6.3 Your Rights Regarding AI Processing</h3>
                <p>
                  Under GDPR Article 22, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Request human review of any automated analysis</li>
                  <li>Express your point of view and contest outcomes</li>
                  <li>Obtain an explanation of how our AI reached its conclusions</li>
                  <li>Opt out of certain automated processing where feasible</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p>We retain personal data only as long as necessary for the purposes outlined in this policy:</p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-2 text-white font-medium">Data Type</th>
                        <th className="text-left py-2 text-white font-medium">Retention Period</th>
                        <th className="text-left py-2 text-white font-medium">Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="text-[var(--text-secondary)]">
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Account Information</td>
                        <td className="py-2">Duration of account + 30 days</td>
                        <td className="py-2">Service provision</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Scanned Content</td>
                        <td className="py-2">Real-time processing only</td>
                        <td className="py-2">Not stored unless audit enabled</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Audit Logs</td>
                        <td className="py-2">90 days (default) to 1 year</td>
                        <td className="py-2">Customer configurable</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Billing Records</td>
                        <td className="py-2">7 years</td>
                        <td className="py-2">Tax/legal requirements</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Support Tickets</td>
                        <td className="py-2">3 years after resolution</td>
                        <td className="py-2">Service improvement</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Analytics Data</td>
                        <td className="py-2">24 months, then anonymized</td>
                        <td className="py-2">Product improvement</td>
                      </tr>
                      <tr className="border-b border-[var(--border)]/50">
                        <td className="py-2">Marketing Consent Records</td>
                        <td className="py-2">Duration of consent + 3 years</td>
                        <td className="py-2">Compliance evidence</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  When data is no longer needed, we securely delete or anonymize it. You may request earlier deletion
                  subject to legal retention requirements.
                </p>
              </section>

              {/* Data Sharing and Disclosure */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Sharing and Disclosure</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Legal Requirements:</strong> When required by law, court order, subpoena, or valid governmental request
                  </li>
                  <li>
                    <strong className="text-white">Safety and Rights:</strong> To protect safety, prevent fraud, or enforce our terms
                  </li>
                  <li>
                    <strong className="text-white">Business Transfers:</strong> In connection with merger, acquisition, bankruptcy, or sale of assets (you will be notified)
                  </li>
                  <li>
                    <strong className="text-white">With Your Consent:</strong> When you have explicitly authorized sharing
                  </li>
                </ul>

                <p className="mt-4">
                  All service providers are bound by data processing agreements requiring them to protect your data
                  and use it only for specified purposes.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Data Security</h2>
                <p>We implement comprehensive security measures to protect your data:</p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">9.1 Technical Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Multi-factor authentication for all accounts</li>
                  <li>Role-based access controls with least-privilege principles</li>
                  <li>Regular vulnerability scanning and penetration testing</li>
                  <li>Web application firewall and DDoS protection</li>
                  <li>Secure development lifecycle (SDLC) practices</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">9.2 Organizational Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Employee background checks and confidentiality agreements</li>
                  <li>Regular security awareness training</li>
                  <li>Documented incident response procedures</li>
                  <li>SOC 2 Type II certification (planned for 2026)</li>
                  <li>24/7 security monitoring</li>
                </ul>

                <p className="mt-4">
                  While we implement industry-standard security measures, no system is completely secure. We encourage
                  you to use strong passwords and protect your account credentials.
                </p>
              </section>

              {/* California Privacy Rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. California Privacy Rights (CCPA/CPRA)</h2>
                <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):</p>

                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong className="text-white">Right to Know:</strong> Request disclosure of personal information collected, sources, purposes, and third parties with whom it is shared</li>
                  <li><strong className="text-white">Right to Delete:</strong> Request deletion of your personal information</li>
                  <li><strong className="text-white">Right to Correct:</strong> Request correction of inaccurate personal information</li>
                  <li><strong className="text-white">Right to Limit Use of Sensitive Information:</strong> Limit use of sensitive personal information to necessary purposes</li>
                  <li><strong className="text-white">Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">10.1 Categories of Personal Information</h3>
                <p>In the past 12 months, we have collected the following categories of personal information:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li>Identifiers (name, email, IP address)</li>
                  <li>Commercial information (transaction history, subscription data)</li>
                  <li>Internet activity (browsing history, interactions with our Services)</li>
                  <li>Professional information (job title, company)</li>
                  <li>Inferences drawn from the above</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">10.2 Authorized Agent</h3>
                <p>
                  You may designate an authorized agent to submit requests on your behalf. We may require proof of
                  authorization and verify your identity directly.
                </p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">10.3 Financial Incentive Programs</h3>
                <p>
                  We do not offer financial incentives or price differences in exchange for retention of
                  personal information.
                </p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-6">10.4 Shine the Light (Civil Code § 1798.83)</h3>
                <p>
                  California residents may request information about disclosure of personal information to third parties
                  for direct marketing purposes. We do not disclose personal information to third parties for their
                  direct marketing purposes.
                </p>
              </section>

              {/* Other US State Privacy Rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Other US State Privacy Rights</h2>

                <h3 className="text-lg font-semibold text-white mb-2">11.1 Virginia (VCDPA)</h3>
                <p>Virginia residents have rights to access, correct, delete, obtain a copy of, and opt out of targeted advertising and profiling. To exercise these rights, contact us. We will respond within 45 days.</p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">11.2 Colorado (CPA)</h3>
                <p>Colorado residents have similar rights to access, correct, delete, and obtain data portability. To exercise these rights, contact us.</p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">11.3 Connecticut (CTDPA)</h3>
                <p>Connecticut residents have rights to access, correct, delete, and obtain a copy of their personal data. We respond within 45 days.</p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">11.4 Utah (UCPA)</h3>
                <p>Utah residents have rights to access, delete, and obtain data portability.</p>

                <h3 className="text-lg font-semibold text-white mb-2 mt-4">11.5 Nevada (SB 220)</h3>
                <p>
                  Nevada residents may submit privacy requests through our <a href="/contact" className="text-[var(--primary)] hover:underline">contact form</a>. We will respond
                  within 60 days.
                </p>

              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Children&apos;s Privacy</h2>
                <p>
                  Our Services are not directed to individuals under 18 years of age (or the applicable age of majority
                  in your jurisdiction). We do not knowingly collect personal information from children.
                </p>
                <p className="mt-4">
                  If you are a parent or guardian and believe we have collected information from your child, please
                  contact us immediately through our <a href="/contact" className="text-[var(--primary)] hover:underline">contact form</a>.
                  We will promptly delete such information.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Posting the updated policy with a new &quot;Last Updated&quot; date</li>
                  <li>Sending email notification to registered users at least 30 days before changes take effect</li>
                  <li>Displaying a prominent notice on our platform</li>
                </ul>
                <p className="mt-4">
                  Continued use of our Services after changes take effect constitutes acceptance of the updated policy.
                  If you do not agree, you should stop using the Services and may request deletion of your data.
                </p>
              </section>

              {/* Accessibility */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. Accessibility</h2>
                <p>
                  We are committed to making our privacy information accessible to all users. If you have difficulty
                  accessing this Privacy Policy or need it in an alternative format, please contact us through our{" "}
                  <a href="/contact" className="text-[var(--primary)] hover:underline">contact form</a> and we will work with you to
                  provide the information in an accessible format.
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
