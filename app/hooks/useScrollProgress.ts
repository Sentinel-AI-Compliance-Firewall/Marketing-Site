"use client"

import { useState, useEffect, useCallback, useRef } from "react"

interface UseScrollProgressReturn {
  progress: number // 0 to 1
  scrollY: number
  direction: "up" | "down" | null
  isAtTop: boolean
  isAtBottom: boolean
}

/**
 * Hook to track scroll progress and direction
 */
export function useScrollProgress(): UseScrollProgressReturn {
  const [progress, setProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [direction, setDirection] = useState<"up" | "down" | null>(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const currentProgress = maxScroll > 0 ? currentScrollY / maxScroll : 0

    setScrollY(currentScrollY)
    setProgress(Math.min(1, Math.max(0, currentProgress)))
    setIsAtTop(currentScrollY < 10)
    setIsAtBottom(currentScrollY >= maxScroll - 10)

    // Determine direction
    if (currentScrollY > lastScrollY.current) {
      setDirection("down")
    } else if (currentScrollY < lastScrollY.current) {
      setDirection("up")
    }

    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { progress, scrollY, direction, isAtTop, isAtBottom }
}
