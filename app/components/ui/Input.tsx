"use client"

import { forwardRef } from "react"
import { cn } from "@/app/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      error,
      hint,
      icon,
      iconPosition = "left",
      disabled,
      ...props
    },
    ref
  ) => {
    const hasIcon = !!icon

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {hasIcon && iconPosition === "left" && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {icon}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            disabled={disabled}
            className={cn(
              "w-full px-4 py-3 bg-[var(--bg-elevated)] border rounded-lg text-white placeholder:text-[var(--text-muted)] transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error
                ? "border-[var(--error)] focus:ring-[var(--error)]/30 focus:border-[var(--error)]"
                : "border-[var(--border)] hover:border-[var(--border-hover)]",
              hasIcon && iconPosition === "left" && "pl-10",
              hasIcon && iconPosition === "right" && "pr-10",
              className
            )}
            {...props}
          />
          {hasIcon && iconPosition === "right" && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {icon}
            </div>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-[var(--error)]">{error}</p>
        )}
        {hint && !error && (
          <p className="mt-1.5 text-sm text-[var(--text-muted)]">{hint}</p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

// Textarea variant
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, disabled, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-3 bg-[var(--bg-elevated)] border rounded-lg text-white placeholder:text-[var(--text-muted)] transition-all duration-200 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)]",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-[var(--error)] focus:ring-[var(--error)]/30 focus:border-[var(--error)]"
              : "border-[var(--border)] hover:border-[var(--border-hover)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-[var(--error)]">{error}</p>
        )}
        {hint && !error && (
          <p className="mt-1.5 text-sm text-[var(--text-muted)]">{hint}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Input, Textarea }
export type { InputProps, TextareaProps }
