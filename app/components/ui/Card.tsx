"use client"

import { forwardRef } from "react"
import { cn } from "@/app/lib/utils"
import type { CardVariant } from "@/app/types"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  hover?: boolean
  padding?: "none" | "sm" | "md" | "lg"
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-[var(--bg-card)] border border-[var(--border)]",
  elevated:
    "bg-[var(--bg-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]",
  glass:
    "bg-[rgba(15,15,15,0.8)] backdrop-blur-xl border border-white/10",
  glow:
    "bg-[var(--bg-card)] border border-[var(--primary)] shadow-[var(--glow-primary)]",
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hover = true,
      padding = "md",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl transition-all duration-300",
          variantStyles[variant],
          paddingStyles[padding],
          hover &&
            "hover:border-[var(--primary)] hover:shadow-[var(--glow-primary)] hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

// Card subcomponents
const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-4", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-xl font-semibold text-white", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[var(--text-secondary)] text-sm mt-1", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4 pt-4 border-t border-[var(--border)]", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
export type { CardProps }
