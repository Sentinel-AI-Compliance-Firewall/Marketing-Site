"use client"

import { forwardRef } from "react"
import { cn } from "@/app/lib/utils"
import type { ButtonVariant, ButtonSize } from "@/app/types"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  fullWidth?: boolean
  as?: "button" | "a"
  href?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--secondary)] text-white hover:bg-[var(--secondary-dark)] hover:shadow-[var(--glow-secondary)]",
  secondary:
    "bg-[var(--bg-elevated)] text-white border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
  accent:
    "bg-[var(--primary)] text-black hover:bg-[var(--primary-dark)] hover:shadow-[var(--glow-primary)]",
  outline:
    "bg-transparent text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-black",
  ghost:
    "bg-transparent text-[var(--text-secondary)] hover:text-white hover:bg-white/5",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      children,
      as = "button",
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/50 disabled:opacity-50 disabled:cursor-not-allowed",
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    )

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === "left" && icon}
        {children}
        {!loading && icon && iconPosition === "right" && icon}
      </>
    )

    if (as === "a" && href) {
      return (
        <a href={href} className={baseStyles} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
export type { ButtonProps }
