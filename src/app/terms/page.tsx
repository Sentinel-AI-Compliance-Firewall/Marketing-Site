"use client";

import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-white/40 text-sm mb-12" style={{ fontFamily: '"Inter", sans-serif' }}>
            Effective Date: January 25, 2025
          </p>

          <div className="space-y-10 text-white/80 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                Welcome to Sentinel AI. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, products, services, and applications (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p>
                If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms. In that case, &quot;you&quot; and &quot;your&quot; will refer to that organization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="mb-4">
                Sentinel AI provides artificial intelligence-powered bias detection and content analysis tools. Our Services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li><strong className="text-white">Real-Time Bias Detection:</strong> Automated scanning of text content to identify potential instances of gender, racial, age, disability, and other forms of bias.</li>
                <li><strong className="text-white">Smart Rewriting Suggestions:</strong> AI-generated alternative text recommendations that maintain the original meaning while reducing or eliminating detected bias.</li>
                <li><strong className="text-white">Compliance Audit Trails:</strong> Comprehensive logging and reporting of all bias detection activities for regulatory compliance and internal review purposes.</li>
                <li><strong className="text-white">API Access:</strong> Programmatic integration capabilities allowing you to incorporate our bias detection technology into your existing workflows and applications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration and Security</h2>
              <p className="mb-4">
                To access certain features of our Services, you must create an account. When registering, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Provide accurate, current, and complete information during the registration process</li>
                <li>Maintain and promptly update your account information to keep it accurate and current</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Immediately notify us of any unauthorized use of your account or any other security breach</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe pose a security risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
              <p className="mb-4">You agree not to use our Services to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Violate any applicable local, state, national, or international law or regulation</li>
                <li>Infringe upon or violate the intellectual property rights or privacy rights of any third party</li>
                <li>Transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to our systems, networks, or other users&apos; accounts</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Use automated scripts, bots, or other means to access our Services without our express written permission</li>
                <li>Reverse engineer, decompile, or disassemble any portion of our Services</li>
                <li>Use our Services to develop a competing product or service</li>
                <li>Resell or redistribute our Services without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              <p className="mb-4">
                <strong className="text-white">Our Intellectual Property:</strong> The Services and all content, features, and functionality thereof, including but not limited to all information, software, code, text, displays, graphics, photographs, video, audio, design, presentation, selection, and arrangement, are owned by Sentinel AI, its licensors, or other providers and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="mb-4">
                <strong className="text-white">Your Content:</strong> You retain all rights to the content you submit to our Services for analysis. By submitting content, you grant us a limited, non-exclusive, royalty-free license to process, analyze, and store your content solely for the purpose of providing our Services to you.
              </p>
              <p>
                <strong className="text-white">Feedback:</strong> If you provide us with feedback, suggestions, or ideas regarding our Services, you grant us an unlimited, irrevocable, perpetual, royalty-free license to use such feedback for any purpose without any obligation to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Subscription and Payment Terms</h2>
              <p className="mb-4">
                Certain features of our Services may require a paid subscription. If you choose to subscribe:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>You agree to pay all fees associated with your subscription plan</li>
                <li>Subscriptions will automatically renew unless you cancel before the renewal date</li>
                <li>All fees are non-refundable except as expressly stated in these Terms or required by law</li>
                <li>We reserve the right to change our pricing with 30 days&apos; notice to you</li>
                <li>You are responsible for all taxes associated with your use of the Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p className="mb-4">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from the Services will be accurate or reliable</li>
                <li>The quality of any products, services, information, or other material obtained through the Services will meet your expectations</li>
                <li>Any errors in the Services will be corrected</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Important:</strong> The bias detection results provided by our AI are suggestions intended to assist human review. They should not be relied upon as the sole basis for any decision and should always be reviewed by qualified personnel before implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-4">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SENTINEL AI, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
                <li>Your access to or use of or inability to access or use the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any content obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="mt-4">
                Our total liability to you for all claims arising out of or relating to these Terms or the Services shall not exceed the amount you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Sentinel AI and its officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the Services, including but not limited to any content you submit or transmit through the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.
              </p>
              <p>
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in Delaware, and the language of the arbitration shall be English.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website at least 30 days before the changes take effect. Your continued use of the Services after the effective date of the revised Terms constitutes your acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Miscellaneous</h2>
              <p className="mb-4">
                <strong className="text-white">Entire Agreement:</strong> These Terms constitute the entire agreement between you and Sentinel AI regarding the Services and supersede all prior agreements and understandings.
              </p>
              <p className="mb-4">
                <strong className="text-white">Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
              </p>
              <p className="mb-4">
                <strong className="text-white">Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              <p>
                <strong className="text-white">Assignment:</strong> You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                <p className="font-bold text-white mb-2">Sentinel AI</p>
                <p className="text-white/70">Email: <a href="mailto:legal@sentinelai.co" className="text-[rgb(251,73,48)] hover:underline">legal@sentinelai.co</a></p>
              </div>
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
            <a href="https://x.com/SentinelAICF" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/sentinel-ai-compliance-firewall/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm" style={{ fontFamily: '"Inter", sans-serif' }}>
              © 2025 Sentinel AI. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-[rgb(251,73,48)] text-sm transition-colors" style={{ fontFamily: '"Inter", sans-serif' }}>
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: '"Inter", sans-serif' }}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
