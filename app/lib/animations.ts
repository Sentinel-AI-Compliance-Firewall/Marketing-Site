import gsap from "gsap"

/**
 * GSAP Animation Presets for Sentinel AI Marketing Site
 */

// Fade in from bottom
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
  ease: "power3.out",
}

// Fade in from top
export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
  ease: "power3.out",
}

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: "power3.out",
}

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: "power3.out",
}

// Scale in
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  duration: 0.6,
  ease: "power2.out",
}

// Stagger container
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

/**
 * GSAP utility functions
 */

// Animate element into view
export function animateIn(
  element: HTMLElement | null,
  options: {
    y?: number
    x?: number
    opacity?: number
    scale?: number
    duration?: number
    delay?: number
    ease?: string
  } = {}
) {
  if (!element) return

  const {
    y = 40,
    x = 0,
    opacity = 0,
    scale = 1,
    duration = 0.8,
    delay = 0,
    ease = "power3.out",
  } = options

  gsap.fromTo(
    element,
    { y, x, opacity, scale },
    { y: 0, x: 0, opacity: 1, scale: 1, duration, delay, ease }
  )
}

// Animate element out of view
export function animateOut(
  element: HTMLElement | null,
  options: {
    y?: number
    x?: number
    opacity?: number
    scale?: number
    duration?: number
    delay?: number
    ease?: string
  } = {}
) {
  if (!element) return

  const {
    y = -40,
    x = 0,
    opacity = 0,
    scale = 1,
    duration = 0.6,
    delay = 0,
    ease = "power2.in",
  } = options

  gsap.to(element, { y, x, opacity, scale, duration, delay, ease })
}

// Stagger animation for multiple elements
export function staggerIn(
  elements: HTMLElement[] | NodeListOf<Element> | null,
  options: {
    y?: number
    x?: number
    opacity?: number
    duration?: number
    stagger?: number
    delay?: number
    ease?: string
  } = {}
) {
  if (!elements) return

  const {
    y = 40,
    x = 0,
    opacity = 0,
    duration = 0.8,
    stagger = 0.1,
    delay = 0,
    ease = "power3.out",
  } = options

  gsap.fromTo(
    elements,
    { y, x, opacity },
    { y: 0, x: 0, opacity: 1, duration, stagger, delay, ease }
  )
}

// Counter animation for numbers
export function animateCounter(
  element: HTMLElement | null,
  endValue: number,
  options: {
    duration?: number
    delay?: number
    prefix?: string
    suffix?: string
    decimals?: number
  } = {}
) {
  if (!element) return

  const {
    duration = 2,
    delay = 0,
    prefix = "",
    suffix = "",
    decimals = 0,
  } = options

  const counter = { value: 0 }

  gsap.to(counter, {
    value: endValue,
    duration,
    delay,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`
    },
  })
}

// Magnetic effect for elements
export function createMagneticEffect(
  element: HTMLElement,
  options: { strength?: number; ease?: number } = {}
) {
  const { strength = 0.3, ease = 0.1 } = options

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0
  let animationId: number

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX = (e.clientX - centerX) * strength
    mouseY = (e.clientY - centerY) * strength
  }

  const handleMouseLeave = () => {
    mouseX = 0
    mouseY = 0
  }

  const animate = () => {
    currentX += (mouseX - currentX) * ease
    currentY += (mouseY - currentY) * ease
    element.style.transform = `translate(${currentX}px, ${currentY}px)`
    animationId = requestAnimationFrame(animate)
  }

  element.addEventListener("mousemove", handleMouseMove)
  element.addEventListener("mouseleave", handleMouseLeave)
  animate()

  // Return cleanup function
  return () => {
    element.removeEventListener("mousemove", handleMouseMove)
    element.removeEventListener("mouseleave", handleMouseLeave)
    cancelAnimationFrame(animationId)
  }
}

// Text reveal animation (character by character)
export function revealText(
  element: HTMLElement | null,
  options: {
    duration?: number
    stagger?: number
    delay?: number
    ease?: string
  } = {}
) {
  if (!element) return

  const { duration = 0.6, stagger = 0.03, delay = 0, ease = "power3.out" } = options

  const text = element.textContent || ""
  element.innerHTML = text
    .split("")
    .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
    .join("")

  const chars = element.querySelectorAll("span")

  gsap.fromTo(
    chars,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration, stagger, delay, ease }
  )
}

// Parallax effect
export function createParallax(
  element: HTMLElement,
  options: { speed?: number; direction?: "up" | "down" } = {}
) {
  const { speed = 0.5, direction = "up" } = options
  const multiplier = direction === "up" ? -1 : 1

  const handleScroll = () => {
    const rect = element.getBoundingClientRect()
    const scrollProgress = rect.top / window.innerHeight
    const translateY = scrollProgress * speed * 100 * multiplier
    element.style.transform = `translateY(${translateY}px)`
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}

// Glitch effect
export function triggerGlitch(
  element: HTMLElement | null,
  options: { duration?: number; intensity?: number } = {}
) {
  if (!element) return

  const { duration = 0.5, intensity = 5 } = options

  const timeline = gsap.timeline()

  for (let i = 0; i < 10; i++) {
    timeline.to(
      element,
      {
        x: (Math.random() - 0.5) * intensity,
        y: (Math.random() - 0.5) * intensity,
        duration: duration / 10,
        ease: "none",
      },
      i * (duration / 10)
    )
  }

  timeline.to(element, { x: 0, y: 0, duration: 0.1 })

  return timeline
}
