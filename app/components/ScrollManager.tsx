"use client"

import { useEffect } from "react"
import { useLenis } from "lenis/react"

interface ScrollManagerProps {
  isLocked: boolean
}

const ScrollManager = ({ isLocked }: ScrollManagerProps) => {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    if (isLocked) {
      lenis.stop()
      document.body.style.overflow = "hidden"
      window.scrollTo(0, 0)
    } else {
      lenis.start()
      document.body.style.overflow = ""
    }
  }, [isLocked, lenis])

  return null
}

export default ScrollManager
