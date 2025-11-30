"use client"

import { Navbar, Footer } from "@/app/components/layout"
import { Badge, Card, Button } from "@/app/components/ui"
import { Download, Shield, Lock, FileCheck } from "lucide-react"

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
              Last updated: November 15, 2024
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                  Sentinel AI, Inc. (&quot;Processor&quot;) and the Customer (&quot;Controller&quot;) and governs the
                  processing of personal data by Sentinel in connection with providing bias detection services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person</li>
                  <li><strong className="text-white">&quot;Processing&quot;</strong> means any operation performed on Personal Data</li>
                  <li><strong className="text-white">&quot;Sub-processor&quot;</strong> means any third party engaged by Sentinel to process Personal Data</li>
                  <li><strong className="text-white">&quot;Data Subject&quot;</strong> means an identified or identifiable natural person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Processing Details</h2>
                <Card className="p-6 bg-[var(--bg-dark)]">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Nature of Processing</h4>
                      <p className="text-white">Automated bias detection analysis of text content</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Purpose</h4>
                      <p className="text-white">Identify potential discriminatory language across protected categories</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Categories of Data</h4>
                      <p className="text-white">Text content, document metadata, user identifiers</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] uppercase mb-1">Retention Period</h4>
                      <p className="text-white">Real-time processing; logs retained per customer configuration (default: 90 days)</p>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Processor Obligations</h2>
                <p>Sentinel agrees to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Process Personal Data only on documented instructions from the Controller</li>
                  <li>Ensure personnel are bound by confidentiality obligations</li>
                  <li>Implement appropriate technical and organizational security measures</li>
                  <li>Assist Controller with Data Subject rights requests</li>
                  <li>Delete or return Personal Data upon termination</li>
                  <li>Make available information necessary to demonstrate compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Security Measures</h2>
                <p>Sentinel implements the following security measures:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Incident response and breach notification procedures</li>
                  <li>Employee security awareness training</li>
                  <li>Physical security for data center facilities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Sub-processors</h2>
                <p>
                  Controller authorizes Sentinel to engage sub-processors for the processing of Personal Data.
                  Sentinel maintains a list of current sub-processors, available upon request. Sentinel will
                  notify Controller of any intended changes to sub-processors, allowing Controller to object.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. International Transfers</h2>
                <p>
                  For transfers of Personal Data outside the EEA, Sentinel relies on EU Standard Contractual
                  Clauses (SCCs) as approved by the European Commission. Additional supplementary measures
                  are implemented as necessary based on transfer impact assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Subject Rights</h2>
                <p>
                  Sentinel will assist Controller in responding to requests from Data Subjects exercising
                  their rights under GDPR, including rights of access, rectification, erasure, restriction,
                  portability, and objection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Breach Notification</h2>
                <p>
                  Sentinel will notify Controller without undue delay (and in any event within 72 hours)
                  after becoming aware of a Personal Data breach. Notification will include all information
                  reasonably required for Controller to meet its breach reporting obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Audit Rights</h2>
                <p>
                  Sentinel will make available to Controller all information necessary to demonstrate
                  compliance with this DPA and allow for audits. Controller may conduct audits upon
                  reasonable notice, subject to confidentiality obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p>
                  For questions about this DPA or to request a signed copy:
                </p>
                <p className="mt-2">
                  <strong className="text-white">Email:</strong> legal@sentinel-ai.com<br />
                  <strong className="text-white">DPO:</strong> dpo@sentinel-ai.com<br />
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
