"use client"

import { useState, useEffect, useRef, RefObject } from "react"

interface UseIntersectionOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
}

/**
 * Hook to detect when an element enters/leaves the viewport
 */
export function useIntersection<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionOptions = {}
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting

        if (isVisible) {
          setIsIntersecting(true)
          if (triggerOnce) {
            hasTriggered.current = true
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isIntersecting]
}

/**
 * Hook to animate elements when they enter the viewport
 */
export function useAnimateOnScroll<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionOptions = {}
): [RefObject<T>, boolean, boolean] {
  const [ref, isIntersecting] = useIntersection<T>({
    ...options,
    triggerOnce: true,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isIntersecting, hasAnimated])

  return [ref, isIntersecting, hasAnimated]
}
