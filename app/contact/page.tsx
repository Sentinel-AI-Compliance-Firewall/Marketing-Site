"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar, Footer } from "@/app/components/layout"
import { Card, Button, Badge, Input, Textarea } from "@/app/components/ui"
import {
  MapPin,
  MessageSquare,
  Building2,
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  HelpCircle,
} from "lucide-react"
import { cn } from "@/app/lib/utils"

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: "#",
  },
]

const INQUIRY_TYPES = [
  { id: "demo", label: "Request Early Demo", icon: MessageSquare },
  { id: "api", label: "Early API Access", icon: Mail },
  { id: "sales", label: "Sales Inquiry", icon: Building2 },
  { id: "security", label: "Security Inquiry", icon: Building2 },
  { id: "other", label: "Other", icon: HelpCircle },
]

type FormStatus = "idle" | "submitting" | "success" | "error"

interface FormData {
  name: string
  email: string
  company: string
  role: string
  inquiryType: string
  message: string
}

function ContactForm() {
  const searchParams = useSearchParams()
  const inquiryParam = searchParams.get("inquiry")
  const defaultInquiry = searchParams.get("demo")
    ? "demo"
    : searchParams.get("sales")
    ? "sales"
    : inquiryParam === "api"
    ? "api"
    : inquiryParam === "security"
    ? "security"
    : "demo"

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    inquiryType: defaultInquiry,
    message: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        inquiryType: defaultInquiry,
        message: "",
      })
    } catch {
      setStatus("error")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="p-6 md:p-8">
      <h3 className="text-xl font-semibold text-white mb-6">
        Send us a message
      </h3>

      {status === "success" ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[var(--primary)]" />
          </div>
          <h4 className="text-lg font-semibold text-white mb-2">
            Message Sent!
          </h4>
          <p className="text-[var(--text-secondary)] mb-6">
            Thank you for reaching out. We&apos;ll get back to you soon.
          </p>
          <Button
            variant="outline"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inquiry Type */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">
              What can we help you with?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {INQUIRY_TYPES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      inquiryType: type.id,
                    }))
                  }
                  className={cn(
                    "p-3 rounded-lg border text-left transition-all",
                    formData.inquiryType === type.id
                      ? "border-[var(--primary)] bg-[var(--primary)]/10"
                      : "border-[var(--border)] hover:border-[var(--primary)]/50"
                  )}
                >
                  <type.icon
                    className={cn(
                      "w-5 h-5 mb-2",
                      formData.inquiryType === type.id
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-muted)]"
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium",
                      formData.inquiryType === type.id
                        ? "text-white"
                        : "text-[var(--text-secondary)]"
                    )}
                  >
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
            <Input
              label="Work Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
            />
          </div>

          {/* Company & Role Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Corp"
              required
            />
            <Input
              label="Job Title"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="HR Director"
            />
          </div>

          {/* Message */}
          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your needs..."
            rows={5}
            required
          />

          {/* Error State */}
          {status === "error" && (
            <div className="flex items-center gap-2 text-[var(--accent)] text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>
                Something went wrong. Please try again or email us
                directly.
              </span>
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-[var(--text-muted)] text-center">
            By submitting this form, you agree to our{" "}
            <a
              href="/privacy"
              className="text-[var(--primary)] hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </form>
      )}
    </Card>
  )
}

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary)]/5 to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Ready to make your workplace fairer? Our team is here to help you
              get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {CONTACT_INFO.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--bg-dark)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--text-muted)] mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-white group-hover:text-[var(--primary)] transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--primary)]/10 to-transparent">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Enterprise Inquiries
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Looking for custom pricing or enterprise features? Fill out the
                  form and select &quot;Sales Inquiry&quot; to connect with our team.
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<Card className="p-6 md:p-8"><div className="animate-pulse h-96 bg-[var(--bg-elevated)] rounded-lg" /></Card>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section bg-[var(--bg-dark)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Have Questions?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Check out our frequently asked questions or browse our
              documentation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" as="a" href="/pricing#faq">
                View FAQ
              </Button>
              <Button variant="ghost" as="a" href="/docs">
                Browse Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
