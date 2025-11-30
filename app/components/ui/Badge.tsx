"use client"

import { forwardRef } from "react"
import { cn } from "@/app/lib/utils"

type BadgeVariant = "default" | "success" | "warning" | "error" | "info" | "outline"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: "sm" | "md" | "lg"
  dot?: boolean
  pulse?: boolean
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]",
  success: "bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30",
  warning: "bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/30",
  error: "bg-[var(--error)]/10 text-[var(--error)] border-[var(--error)]/30",
  info: "bg-[var(--info)]/10 text-[var(--info)] border-[var(--info)]/30",
  outline: "bg-transparent text-[var(--primary)] border-[var(--primary)]",
}

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
  lg: "px-3 py-1.5 text-sm",
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      dot = false,
      pulse = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium rounded-full border",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span className="relative flex h-2 w-2">
            {pulse && (
              <span
                className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  variant === "success" && "bg-[var(--success)]",
                  variant === "warning" && "bg-[var(--warning)]",
                  variant === "error" && "bg-[var(--error)]",
                  variant === "info" && "bg-[var(--info)]",
                  (variant === "default" || variant === "outline") &&
                    "bg-[var(--primary)]"
                )}
              />
            )}
            <span
              className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                variant === "success" && "bg-[var(--success)]",
                variant === "warning" && "bg-[var(--warning)]",
                variant === "error" && "bg-[var(--error)]",
                variant === "info" && "bg-[var(--info)]",
                (variant === "default" || variant === "outline") &&
                  "bg-[var(--primary)]"
              )}
            />
          </span>
        )}
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"

export { Badge }
export type { BadgeProps }
