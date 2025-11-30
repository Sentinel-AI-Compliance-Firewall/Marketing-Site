"use client"

import { useState, useEffect } from "react"

/**
 * Breakpoint values matching Tailwind defaults
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const

type Breakpoint = keyof typeof BREAKPOINTS

/**
 * Hook to check if a media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [query])

  return matches
}

/**
 * Hook to check if viewport is at least a certain breakpoint
 */
export function useBreakpoint(breakpoint: Breakpoint): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS[breakpoint]}px)`)
}

/**
 * Hook to check if viewport is below a certain breakpoint
 */
export function useBreakpointMax(breakpoint: Breakpoint): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`)
}

/**
 * Hook to get current breakpoint
 */
export function useCurrentBreakpoint(): Breakpoint | "xs" {
  const sm = useBreakpoint("sm")
  const md = useBreakpoint("md")
  const lg = useBreakpoint("lg")
  const xl = useBreakpoint("xl")
  const xxl = useBreakpoint("2xl")

  if (xxl) return "2xl"
  if (xl) return "xl"
  if (lg) return "lg"
  if (md) return "md"
  if (sm) return "sm"
  return "xs"
}

/**
 * Hook to check if user prefers reduced motion
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}

/**
 * Hook to check if user prefers dark mode
 */
export function usePrefersDarkMode(): boolean {
  return useMediaQuery("(prefers-color-scheme: dark)")
}

/**
 * Hook to check if device is touch-enabled
 */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  return isTouch
}

/**
 * Hook to check if device is mobile
 */
export function useIsMobile(): boolean {
  return useBreakpointMax("md")
}

/**
 * Hook to check if device is tablet
 */
export function useIsTablet(): boolean {
  const isAboveSm = useBreakpoint("md")
  const isBelowLg = useBreakpointMax("lg")
  return isAboveSm && isBelowLg
}

/**
 * Hook to check if device is desktop
 */
export function useIsDesktop(): boolean {
  return useBreakpoint("lg")
}
