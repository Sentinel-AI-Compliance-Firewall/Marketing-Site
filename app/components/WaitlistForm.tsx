"use client"

import { useState } from "react"
import { Button, Input } from "@/app/components/ui"
import { ArrowRight } from "lucide-react"

type WaitlistFormProps = {
  source: string
  onSuccess?: () => void
  buttonLabel?: string
}

export function WaitlistForm({ source, onSuccess, buttonLabel }: WaitlistFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !email) return

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          source,
        }),
      })

      if (!res.ok) throw new Error("Failed to submit")

      setName("")
      setEmail("")
      onSuccess?.()
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 items-stretch"
      >
        {/* Left column: stacked name + email */}
        <div className="flex flex-col gap-3 flex-1">
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Right: button spanning height of both inputs */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className="sm:self-stretch sm:px-8"
        >
          {isLoading ? "Submitting..." : (buttonLabel ?? "Request Demo")}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </form>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}
    </div>
  )
}
