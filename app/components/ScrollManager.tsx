"use client"

import { useEffect, useRef } from "react"
import { useLenis } from "lenis/react"

interface ScrollManagerProps {
  isLocked: boolean
}

const ScrollManager = ({ isLocked }: ScrollManagerProps) => {
  const lenis = useLenis()
  const prevLocked = useRef(isLocked)

  // Handle initial scroll lock immediately via CSS
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden"
      window.scrollTo(0, 0)
    } else {
      document.body.style.overflow = ""
    }
  }, [isLocked])

  // Handle Lenis scroll control when it becomes available
  useEffect(() => {
    if (!lenis) return

    // Apply current lock state when lenis becomes available
    if (isLocked) {
      lenis.stop()
    } else {
      lenis.start()
    }

    prevLocked.current = isLocked
  }, [isLocked, lenis])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  return null
}

export default ScrollManager
