"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white hover:text-[rgb(251,73,48)] transition-colors">
            <svg className="w-14 h-12" viewBox="0 0 56 48" fill="currentColor">
              {/* Top parallelogram bar */}
              <path d="M 10 0 L 44 0 L 34 5.5 L 0 5.5 Z" />
              {/* Upper diagonal lines */}
              <path d="M 1 7 L 12 18 L 11.5 18.5 L 0.5 7.5 Z" />
              <path d="M 5 7 L 16 18 L 15.5 18.5 L 4.5 7.5 Z" />
              {/* Main diagonal with accent bar */}
              <path d="M 10 12 L 28 30 L 27 31 L 9 13 Z" />
              <path d="M 24 17 L 42 10 L 42 14 L 26 20 Z" />
              {/* Lower diagonal with accent bar - mirrored */}
              <path d="M 28 18 L 46 36 L 45 37 L 27 19 Z" />
              <path d="M 14 34 L 32 28 L 32 32 L 16 37 Z" />
              {/* Lower diagonal lines */}
              <path d="M 40 29 L 51 40 L 50.5 40.5 L 39.5 29.5 Z" />
              <path d="M 44 29 L 55 40 L 54.5 40.5 L 43.5 29.5 Z" />
              {/* Bottom parallelogram bar */}
              <path d="M 10 42.5 L 49 42.5 L 39 48 L 0 48 Z" />
            </svg>
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm mb-12" style={{ fontFamily: '"Inter", sans-serif' }}>
            Effective Date: January 25, 2025
          </p>

          <div className="space-y-10 text-white/80 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Sentinel AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered bias detection services (collectively, the &quot;Services&quot;).
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Account Information:</strong> When you create an account, we collect your name, email address, company name, job title, and password.</li>
                <li><strong className="text-white">Billing Information:</strong> For paid subscriptions, we collect payment card information, billing address, and transaction history. Payment processing is handled by secure third-party payment processors.</li>
                <li><strong className="text-white">Content for Analysis:</strong> Text content you submit to our Services for bias detection and analysis.</li>
                <li><strong className="text-white">Communications:</strong> Information you provide when you contact us for support, feedback, or inquiries, including email correspondence and support tickets.</li>
                <li><strong className="text-white">Survey Responses:</strong> Optional information you provide in response to surveys or feedback requests.</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Device Information:</strong> Browser type, operating system, device type, screen resolution, and unique device identifiers.</li>
                <li><strong className="text-white">Usage Data:</strong> Pages visited, features used, time spent on pages, click patterns, and navigation paths within our Services.</li>
                <li><strong className="text-white">Log Data:</strong> IP address, access times, referring URLs, and error logs.</li>
                <li><strong className="text-white">Location Data:</strong> General geographic location based on IP address (country/region level).</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">2.3 Cookies and Tracking Technologies</h3>
              <p className="mb-4">We use cookies, web beacons, and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Maintain your session and remember your preferences</li>
                <li>Understand how you interact with our Services</li>
                <li>Analyze and improve our Services</li>
                <li>Provide personalized content and recommendations</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">3.1 Providing and Improving Services</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Deliver, maintain, and improve our bias detection Services</li>
                <li>Process and analyze content you submit for bias detection</li>
                <li>Generate and deliver bias analysis reports and rewriting suggestions</li>
                <li>Develop new features and functionality</li>
                <li>Fix bugs and resolve technical issues</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">3.2 Account Management</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Create and manage your account</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send account-related notifications (password resets, security alerts)</li>
                <li>Provide customer support</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">3.3 Communications</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Respond to your inquiries and support requests</li>
                <li>Send service updates and important notices</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">3.4 AI Model Improvement</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Use anonymized and aggregated data to train and improve our AI models</li>
                <li>Conduct research to enhance bias detection accuracy</li>
                <li>Develop new bias detection capabilities</li>
              </ul>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">3.5 Legal and Security</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Detect, prevent, and address fraud and security threats</li>
                <li>Enforce our Terms of Service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Content Processing and Data Handling</h2>
              <p className="mb-4">
                When you submit content to our Services for bias analysis:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Processing:</strong> Your content is processed by our AI systems to detect potential bias and generate rewriting suggestions.</li>
                <li><strong className="text-white">Storage Duration:</strong> Content submitted for analysis is temporarily stored during processing and retained for a limited period (typically 30 days) to enable you to access results and audit trails.</li>
                <li><strong className="text-white">No Human Review:</strong> Your content is processed automatically by our AI systems. Human review only occurs if you request support or report an issue.</li>
                <li><strong className="text-white">Anonymization:</strong> Content may be anonymized and aggregated for AI model improvement. Anonymized data cannot be linked back to you or your organization.</li>
                <li><strong className="text-white">Your Rights:</strong> You retain all ownership rights to your original content. We do not claim ownership of content you submit.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Information Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following circumstances:</p>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.1 Service Providers</h3>
              <p className="text-white/70">
                We engage trusted third-party service providers to perform functions on our behalf, including cloud hosting, payment processing, email delivery, analytics, and customer support. These providers have access to your information only to perform these tasks and are obligated to protect it.
              </p>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.2 Legal Requirements</h3>
              <p className="text-white/70">
                We may disclose your information if required by law, subpoena, court order, or other legal process, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.3 Business Transfers</h3>
              <p className="text-white/70">
                In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.
              </p>

              <h3 className="text-xl font-semibold text-white/90 mb-3 mt-6">5.4 With Your Consent</h3>
              <p className="text-white/70">
                We may share your information with third parties when you explicitly consent to such sharing.
              </p>

              <div className="bg-[rgb(251,73,48)]/10 border border-[rgb(251,73,48)]/30 p-4 rounded-lg mt-6">
                <p className="text-white font-semibold">We do not sell your personal information to third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement robust security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Encryption:</strong> Data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong className="text-white">Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                <li><strong className="text-white">Infrastructure Security:</strong> Secure cloud infrastructure with regular security audits</li>
                <li><strong className="text-white">Monitoring:</strong> Continuous monitoring for security threats and anomalies</li>
                <li><strong className="text-white">Employee Training:</strong> Regular security awareness training for all team members</li>
                <li><strong className="text-white">Incident Response:</strong> Documented incident response procedures</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                <li><strong className="text-white">Portability:</strong> Request your data in a structured, machine-readable format</li>
                <li><strong className="text-white">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong className="text-white">Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong className="text-white">Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                <li><strong className="text-white">Opt-Out:</strong> Opt out of marketing communications at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">privacy@sentinelai.co</a>. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
              <p className="mb-4">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Provide our Services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain audit trails for compliance purposes</li>
              </ul>
              <p className="mt-4">
                When you close your account, we will delete or anonymize your personal information within 90 days, unless we are required to retain it for legal or regulatory purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. When we transfer data internationally, we implement appropriate safeguards, including Standard Contractual Clauses approved by relevant authorities, to ensure your information receives adequate protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Children&apos;s Privacy</h2>
              <p>
                Our Services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:privacy@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">privacy@sentinelai.co</a>. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Third-Party Links</h2>
              <p>
                Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of material changes by posting the updated policy on our website with a new effective date and, where appropriate, by email. Your continued use of our Services after the effective date of the revised policy constitutes your acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
              <p className="mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                <p className="font-bold text-white mb-2">Sentinel AI - Privacy Team</p>
                <p className="text-white/70 mb-1">Email: <a href="mailto:privacy@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">privacy@sentinelai.co</a></p>
                <p className="text-white/70">For general inquiries: <a href="mailto:hello@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">hello@sentinelai.co</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. California Privacy Rights (CCPA)</h2>
              <p className="mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Right to Know:</strong> You can request information about the categories and specific pieces of personal information we have collected about you.</li>
                <li><strong className="text-white">Right to Delete:</strong> You can request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong className="text-white">Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
                <li><strong className="text-white">Right to Opt-Out:</strong> You have the right to opt out of the sale of your personal information. Note: We do not sell personal information.</li>
              </ul>
              <p className="mt-4">
                To exercise your California privacy rights, contact us at <a href="mailto:privacy@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">privacy@sentinelai.co</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. European Privacy Rights (GDPR)</h2>
              <p className="mb-4">
                If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Legal Basis:</strong> We process your data based on consent, contractual necessity, legal obligations, or legitimate interests.</li>
                <li><strong className="text-white">Data Protection Officer:</strong> For GDPR-related inquiries, contact our privacy team at <a href="mailto:privacy@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">privacy@sentinelai.co</a>.</li>
                <li><strong className="text-white">Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection authority.</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8" style={{ fontFamily: '"Inter", sans-serif' }}>
            <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
              Home
            </Link>
            <Link href="/#services" className="text-white/60 hover:text-white text-sm transition-colors">
              Services
            </Link>
            <Link href="/#process" className="text-white/60 hover:text-white text-sm transition-colors">
              Process
            </Link>
            <Link href="/#team" className="text-white/60 hover:text-white text-sm transition-colors">
              Team
            </Link>
            <Link href="/#contact" className="text-white/60 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://x.com/sentinelai" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/sentinelai" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com/sentinelai" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
              © 2025 Sentinel AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: '"Inter", sans-serif' }}>
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-[rgb(251,73,48)] text-sm transition-colors" style={{ fontFamily: '"Inter", sans-serif' }}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
