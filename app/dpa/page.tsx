"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge, Card, Button } from "@/app/components/ui"
import { Download, Shield, Lock, FileCheck, Users, Database, Globe, Clock } from "lucide-react"

const SUB_PROCESSORS = [
  {
    name: "Amazon Web Services (AWS)",
    location: "United States (with EU regions available)",
    purpose: "Cloud infrastructure and hosting",
    dataProcessed: "All customer data",
  },
  {
    name: "Stripe",
    location: "United States",
    purpose: "Payment processing",
    dataProcessed: "Billing information only",
  },
  {
    name: "Intercom",
    location: "United States",
    purpose: "Customer support",
    dataProcessed: "Support communications",
  },
  {
    name: "Google Analytics",
    location: "United States",
    purpose: "Website analytics",
    dataProcessed: "Anonymized usage data",
  },
]

export default function DpaPage() {
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
              Data Processing Agreement
            </h1>
            <p className="text-[var(--text-secondary)] mb-8">
              Last updated: December 2025
            </p>
            <Button variant="primary" size="lg">
              <Download className="w-5 h-5" />
              Download DPA (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <Shield className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">GDPR Compliant</h3>
              <p className="text-sm text-[var(--text-muted)]">Meets all EU data protection requirements</p>
            </Card>
            <Card className="p-6 text-center">
              <Lock className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Standard Clauses</h3>
              <p className="text-sm text-[var(--text-muted)]">Includes EU Standard Contractual Clauses</p>
            </Card>
            <Card className="p-6 text-center">
              <FileCheck className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Pre-Signed</h3>
              <p className="text-sm text-[var(--text-muted)]">Ready for immediate use</p>
            </Card>
            <Card className="p-6 text-center">
              <Globe className="w-10 h-10 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">UK Addendum</h3>
              <p className="text-sm text-[var(--text-muted)]">Includes UK IDTA provisions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-[var(--text-secondary)]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Purpose and Scope</h2>
                <p>
                  This Data Processing Agreement (&quot;DPA&quot;) forms part of the Terms of Service between
                  Sentinel AI Compliance Firewall (&quot;Processor&quot;, &quot;we&quot;, &quot;us&quot;) and the Customer (&quot;Controller&quot;, &quot;you&quot;)
                  and governs the processing of personal data by Sentinel AI in connection with providing bias
                  detection services.
                </p>
                <p className="mt-4">
                  This DPA applies to the extent that we process personal data on your behalf as a data processor
                  under the General Data Protection Regulation (GDPR), UK GDPR, and other applicable data protection laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person as defined by applicable Data Protection Laws</li>
                  <li><strong className="text-white">&quot;Processing&quot;</strong> means any operation or set of operations performed on Personal Data, whether by automated means</li>
                  <li><strong className="text-white">&quot;Sub-processor&quot;</strong> means any third party engaged by Sentinel AI to process Personal Data on behalf of the Controller</li>
                  <li><strong className="text-white">&quot;Data Subject&quot;</strong> means an identified or identifiable natural person whose Personal Data is processed</li>
                  <li><strong className="text-white">&quot;Data Protection Laws&quot;</strong> means GDPR, UK GDPR, CCPA, and other applicable privacy laws</li>
                  <li><strong className="text-white">&quot;SCCs&quot;</strong> means the EU Standard Contractual Clauses for international data transfers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Processing Details</h2>
                <Card className="p-6 bg-[var(--bg-dark)]">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-[var(--primary)] mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Nature of Processing</h4>
                        <p className="text-white">Automated bias detection analysis of text content using AI/ML models</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileCheck className="w-5 h-5 text-[var(--primary)] mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Purpose</h4>
                        <p className="text-white">Identify potential discriminatory language across protected categories to assist compliance efforts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-[var(--primary)] mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Categories of Data Subjects</h4>
                        <p className="text-white">Authors and subjects of scanned documents, employees, job applicants, customers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-[var(--primary)] mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Categories of Personal Data</h4>
                        <p className="text-white">Text content, document metadata, user identifiers, email addresses, names (as may appear in scanned content)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[var(--primary)] mt-1" />
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Retention Period</h4>
                        <p className="text-white">Real-time processing; audit logs retained per customer configuration (default: 90 days, max: 1 year)</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Processor Obligations</h2>
                <p>Sentinel AI agrees to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Process Personal Data only on documented instructions from the Controller, unless required by law</li>
                  <li>Ensure that persons authorized to process Personal Data have committed to confidentiality</li>
                  <li>Implement appropriate technical and organizational security measures as described in Annex II</li>
                  <li>Engage sub-processors only with prior authorization and under written agreements imposing equivalent obligations</li>
                  <li>Assist Controller with Data Subject rights requests within the timeframes required by law</li>
                  <li>Assist Controller in ensuring compliance with security, breach notification, and DPIA obligations</li>
                  <li>Delete or return all Personal Data upon termination, unless retention is required by law</li>
                  <li>Make available all information necessary to demonstrate compliance, including supporting audits</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Controller Obligations</h2>
                <p>The Controller agrees to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Ensure it has a lawful basis for the processing activities covered by this DPA</li>
                  <li>Provide documented instructions for processing that comply with applicable laws</li>
                  <li>Ensure Data Subjects have been informed of the processing as required by applicable laws</li>
                  <li>Comply with all applicable data protection obligations as a controller</li>
                  <li>Notify Sentinel AI promptly of any data protection inquiries or complaints that may affect the processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Security Measures (Annex II)</h2>
                <p>Sentinel AI implements the following technical and organizational measures:</p>

                <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.1 Technical Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Multi-factor authentication for all administrative access</li>
                  <li>Role-based access controls with least-privilege principles</li>
                  <li>Automated vulnerability scanning and patch management</li>
                  <li>Network segmentation and firewall protection</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Secure development lifecycle practices</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-4 mb-2">6.2 Organizational Measures</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Employee background checks and confidentiality agreements</li>
                  <li>Regular security awareness training</li>
                  <li>Documented incident response procedures</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Business continuity and disaster recovery planning</li>
                  <li>Vendor risk management program</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Sub-processors (Annex III)</h2>
                <p className="mb-4">
                  Controller authorizes Sentinel AI to engage the following sub-processors for the processing of Personal Data.
                  Sentinel AI will notify Controller at least 30 days before adding or replacing sub-processors, allowing
                  Controller to object.
                </p>

                <Card className="p-0 bg-[var(--bg-dark)] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium">Sub-processor</th>
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium">Location</th>
                        <th className="text-left py-3 px-4 text-[var(--text-muted)] font-medium">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SUB_PROCESSORS.map((processor, i) => (
                        <tr key={i} className="border-b border-[var(--border)]/50">
                          <td className="py-3 px-4 text-white font-medium">{processor.name}</td>
                          <td className="py-3 px-4 text-[var(--text-secondary)]">{processor.location}</td>
                          <td className="py-3 px-4 text-[var(--text-secondary)]">{processor.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>

                <p className="mt-4 text-sm">
                  An up-to-date list of sub-processors is available upon request at privacy@sentinelai-firewall.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
                <p>
                  For transfers of Personal Data outside the EEA or UK to countries not recognized as providing
                  adequate protection, Sentinel AI relies on:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">EU Standard Contractual Clauses (SCCs):</strong> Module 2 (Controller to Processor) as adopted by the European Commission Decision 2021/914</li>
                  <li><strong className="text-white">UK International Data Transfer Agreement (IDTA):</strong> For transfers from the UK</li>
                  <li><strong className="text-white">Swiss Addendum:</strong> For transfers from Switzerland</li>
                </ul>
                <p className="mt-4">
                  We conduct transfer impact assessments and implement supplementary measures where necessary,
                  including encryption and access controls that prevent unauthorized access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Data Subject Rights</h2>
                <p>
                  Sentinel AI will assist Controller in responding to requests from Data Subjects exercising
                  their rights under applicable law, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Right of access (GDPR Art. 15)</li>
                  <li>Right to rectification (GDPR Art. 16)</li>
                  <li>Right to erasure / right to be forgotten (GDPR Art. 17)</li>
                  <li>Right to restriction of processing (GDPR Art. 18)</li>
                  <li>Right to data portability (GDPR Art. 20)</li>
                  <li>Right to object (GDPR Art. 21)</li>
                  <li>Rights related to automated decision-making (GDPR Art. 22)</li>
                </ul>
                <p className="mt-4">
                  We will respond to assistance requests within 10 business days and at no additional charge for
                  reasonable requests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Data Protection Impact Assessments</h2>
                <p>
                  Where required by applicable law, Sentinel AI will provide reasonable assistance to the Controller
                  in conducting data protection impact assessments (DPIAs) related to the Services, including
                  providing information about our processing activities and security measures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Breach Notification</h2>
                <p>
                  Sentinel AI will notify Controller without undue delay (and in any event within 48 hours)
                  after becoming aware of a Personal Data breach affecting Controller data. Notification will include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Description of the nature of the breach including categories and approximate number of Data Subjects and records concerned</li>
                  <li>Name and contact details of our data protection point of contact</li>
                  <li>Likely consequences of the breach</li>
                  <li>Measures taken or proposed to address the breach and mitigate adverse effects</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Audit Rights</h2>
                <p>
                  Controller may audit Sentinel AI&apos;s compliance with this DPA subject to the following conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Audits shall be conducted during regular business hours with reasonable advance notice (at least 30 days)</li>
                  <li>Auditors must execute appropriate confidentiality agreements</li>
                  <li>Controller shall bear its own audit costs; Sentinel AI may charge reasonable fees for staff time exceeding 8 hours</li>
                  <li>Sentinel AI may satisfy audit requirements by providing third-party audit reports (e.g., SOC 2 when available)</li>
                  <li>Audits shall not unreasonably disrupt Sentinel AI&apos;s business operations</li>
                  <li>Findings shall be treated as confidential information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">13. Liability</h2>
                <p>
                  Each party&apos;s liability under this DPA is subject to the limitations of liability set forth in
                  the Terms of Service, except that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Neither party limits its liability for fraud, gross negligence, or willful misconduct</li>
                  <li>Neither party limits its liability for damages caused by failure to comply with applicable Data Protection Laws</li>
                  <li>Liability caps shall apply in the aggregate across all claims arising under this DPA</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">14. Term and Termination</h2>
                <p>
                  This DPA shall remain in effect for the duration of the Agreement. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Sentinel AI will, at Controller&apos;s choice, delete or return all Personal Data within 30 days</li>
                  <li>Controller may request a certificate of deletion</li>
                  <li>Sentinel AI may retain Personal Data to the extent required by applicable law, subject to ongoing confidentiality obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law</h2>
                <p>
                  This DPA shall be governed by the laws specified in the Terms of Service. For matters
                  specifically relating to EU data protection, the laws of the EU Member State where the
                  Controller is established shall apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p>
                  For questions about this DPA, to request a signed copy, or to notify us of data protection matters:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong className="text-white">Email:</strong> privacy@sentinelai-firewall.com</li>
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
