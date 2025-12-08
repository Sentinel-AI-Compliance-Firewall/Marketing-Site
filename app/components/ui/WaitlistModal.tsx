"use client"

import { useState } from "react"
import { Modal } from "./Modal"
import { Input } from "./Input"
import { Button } from "./Button"
import { CheckCircle, Mail, Building2 } from "lucide-react"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  email: string
  companyName: string
}

type FormStatus = "idle" | "submitting" | "success" | "error"

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    companyName: "",
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic email validation
    if (!formData.email || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address")
      return
    }

    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          companyName: formData.companyName || "Not provided",
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to join waitlist")
      }

      setStatus("success")
    } catch (error) {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    }
  }

  const handleClose = () => {
    // Reset form state when closing
    setFormData({ email: "", companyName: "" })
    setStatus("idle")
    setErrorMessage("")
    onClose()
  }

  // Success state
  if (status === "success") {
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="text-center py-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[var(--primary)]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            You&apos;re on the list!
          </h3>
          <p className="text-[var(--text-secondary)] mb-6">
            We&apos;ll notify you when Sentinel AI is ready. Get ready to
            transform your AI compliance.
          </p>
          <Button variant="primary" onClick={handleClose}>
            Got it
          </Button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Join the Waitlist"
      subtitle="Be the first to know when Sentinel AI launches. Get early access and exclusive updates."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Email Address"
          placeholder="you@company.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          icon={<Mail className="w-5 h-5" />}
          iconPosition="left"
          required
          error={errorMessage && !formData.email ? errorMessage : undefined}
        />

        <Input
          type="text"
          label="Company Name (Optional)"
          placeholder="Your company"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          icon={<Building2 className="w-5 h-5" />}
          iconPosition="left"
        />

        {errorMessage && formData.email && (
          <p className="text-sm text-[var(--error)]">{errorMessage}</p>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            variant="accent"
            fullWidth
            loading={status === "submitting"}
          >
            {status === "submitting" ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>

        <p className="text-xs text-center text-[var(--text-muted)] pt-2">
          We respect your privacy. No spam, ever.
        </p>
      </form>
    </Modal>
  )
}

export type { WaitlistModalProps }
