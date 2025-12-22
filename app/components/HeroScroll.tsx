"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown, ArrowRight, Sparkles, Menu, X } from "lucide-react"
import { useWaitlist } from "@/app/context/WaitlistContext"
import SentinelLogo from "./SentinelLogo"

const FRAME_COUNT = 192
const URL_PREFIX = "/Frames/"
const FILE_NAME = "frame"
const FILE_TYPE = "jpg"

interface HeroScrollProps {
  onFirstFrameReady?: () => void
  showContent?: boolean
}

const HeroScroll = ({ onFirstFrameReady, showContent = false }: HeroScrollProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const firstFrameReadyRef = useRef(false)
  const scrollTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const introAnimationComplete = useRef(false)
  const { openWaitlist } = useWaitlist()

  useEffect(() => {
    if (!showContent || introAnimationComplete.current) return
    if (!navRef.current || !heroContentRef.current) return

    introAnimationComplete.current = true

    // Animate navbar in
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 },
    )

    // Animate hero content in
    gsap.fromTo(
      heroContentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
        onComplete: () => {
          // Only setup scroll animations AFTER intro animation is fully complete
          setupScrollAnimations()
        },
      },
    )
  }, [showContent])

  const setupScrollAnimations = () => {
    if (scrollTimelineRef.current) return
    if (!containerRef.current || !navRef.current || !heroContentRef.current || !wrapperRef.current) return

    const playhead = { frame: 0 }
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")

    const render = (index: number) => {
      const img = imagesRef.current[index]
      if (!img || !canvas || !context) return

      const dpr = window.devicePixelRatio || 1
      const cssWidth = window.innerWidth
      const cssHeight = window.innerHeight

      if (canvas.width !== cssWidth * dpr) {
        canvas.width = cssWidth * dpr
        canvas.height = cssHeight * dpr
        context.scale(dpr, dpr)
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = "medium"
      }

      context.clearRect(0, 0, canvas.width, canvas.height)

      const imgRatio = img.width / img.height
      const screenRatio = cssWidth / cssHeight

      let drawWidth, drawHeight, offsetX, offsetY

      if (imgRatio > screenRatio) {
        drawHeight = cssHeight
        drawWidth = cssHeight * imgRatio
      } else {
        drawWidth = cssWidth
        drawHeight = cssWidth / imgRatio
      }

      const ZOOM_FIX = 1.25
      drawWidth = drawWidth * ZOOM_FIX
      drawHeight = drawHeight * ZOOM_FIX

      offsetX = (cssWidth - drawWidth) / 2
      offsetY = (cssHeight - drawHeight) / 2

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    }

    // Create scroll-driven timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        id: "hero-scroll",
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%",
        pin: true,
        scrub: 1.2, // Increased for smoother scrolling
        anticipatePin: 1, // Smoother pin/unpin transitions
      },
    })

    scrollTimelineRef.current = tl

    // Navbar stays visible - no fade out animation

    tl.to(heroContentRef.current, { opacity: 0, scale: 0.7, ease: "none", duration: 3 }, 1.5)

    // Frame animation runs through entire scroll
    tl.to(
      playhead,
      {
        frame: FRAME_COUNT - 1,
        ease: "none",
        duration: 10,
        onUpdate: () => render(Math.round(playhead.frame)),
      },
      0,
    )

    ScrollTrigger.refresh()
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = "medium"

    const render = (index: number) => {
      const img = imagesRef.current[index]
      if (!img || !canvas) return

      const dpr = window.devicePixelRatio || 1
      const cssWidth = window.innerWidth
      const cssHeight = window.innerHeight

      if (canvas.width !== cssWidth * dpr) {
        canvas.width = cssWidth * dpr
        canvas.height = cssHeight * dpr
        context.scale(dpr, dpr)
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = "medium"
      }

      context.clearRect(0, 0, canvas.width, canvas.height)

      const imgRatio = img.width / img.height
      const screenRatio = cssWidth / cssHeight

      let drawWidth, drawHeight, offsetX, offsetY

      if (imgRatio > screenRatio) {
        drawHeight = cssHeight
        drawWidth = cssHeight * imgRatio
      } else {
        drawWidth = cssWidth
        drawHeight = cssWidth / imgRatio
      }

      const ZOOM_FIX = 1.25
      drawWidth = drawWidth * ZOOM_FIX
      drawHeight = drawHeight * ZOOM_FIX

      offsetX = (cssWidth - drawWidth) / 2
      offsetY = (cssHeight - drawHeight) / 2

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
    }

    const loadImages = () => {
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image()
        const formattedIndex = i.toString().padStart(4, "0")
        img.src = `${URL_PREFIX}${FILE_NAME}${formattedIndex}.${FILE_TYPE}`
        img.crossOrigin = "anonymous"
        img.onload = () => {
          imagesRef.current[i - 1] = img
          setImagesLoaded((prev) => prev + 1)
          if (i === 1 && !firstFrameReadyRef.current) {
            firstFrameReadyRef.current = true
            render(0)
            onFirstFrameReady?.()
          }
        }
      }
    }

    const handleResize = () => {
      const progress = ScrollTrigger.getById("hero-scroll")?.progress || 0
      const frameIndex = Math.floor(progress * (FRAME_COUNT - 1))
      render(frameIndex)
    }

    window.addEventListener("resize", handleResize)
    loadImages()

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [onFirstFrameReady])

  return (
    <div ref={containerRef} className="relative w-full h-[85vh] md:h-screen bg-[#1a1a1a] overflow-hidden">
      <div ref={wrapperRef} className="w-full h-full relative origin-top will-change-transform overflow-hidden">
        <canvas ref={canvasRef} className="block object-cover canvas-fullscreen" />

        <nav
          ref={navRef}
          className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 will-change-transform opacity-hidden ${showContent ? "visibility-visible" : "visibility-hidden"}`}
        >
          {/* Logo and nav items - logo on left */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <SentinelLogo className="h-8 md:h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex items-center gap-6 ml-8">
              <div className="relative group">
                <button type="button" className="flex items-center gap-1 text-xs font-semibold text-white uppercase tracking-widest hover:text-[#FFD700] transition-colors">
                  Products
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                  <Link href="/product" className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FFD700] transition-colors">
                    Overview
                  </Link>
                  <Link href="/product#features" className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FFD700] transition-colors">
                    Features
                  </Link>
                  <Link href="/product#integrations" className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FFD700] transition-colors">
                    Integrations
                  </Link>
                </div>
              </div>
              <Link href="/pricing" className="text-xs font-semibold text-white uppercase tracking-widest hover:text-[#FFD700] transition-colors">
                Pricing
              </Link>
              <Link href="/security" className="text-xs font-semibold text-white uppercase tracking-widest hover:text-[#FFD700] transition-colors">
                Security
              </Link>
              <div className="relative group">
                <button type="button" className="flex items-center gap-1 text-xs font-semibold text-white uppercase tracking-widest hover:text-[#FFD700] transition-colors">
                  Company
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 shadow-xl">
                  <Link href="/about" className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FFD700] transition-colors">
                    About Us
                  </Link>
                  <Link href="/contact" className="block px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-[#FFD700] transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/contact?demo=true" className="hidden md:block px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full uppercase tracking-wider hover:from-[#FFE55C] hover:to-[#FFB733] transition-all">
              Request Demo
            </Link>
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Content */}
            <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10">
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-1">
                  <Link
                    href="/product"
                    className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-white hover:text-[#FFD700] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link
                    href="/pricing"
                    className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-white hover:text-[#FFD700] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/security"
                    className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-white hover:text-[#FFD700] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Security
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-white hover:text-[#FFD700] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-sm font-medium uppercase tracking-wider text-white hover:text-[#FFD700] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <button
                    type="button"
                    onClick={() => { setIsMobileMenuOpen(false); openWaitlist(); }}
                    className="w-full px-5 py-3 text-sm font-medium text-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full uppercase tracking-wider"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          ref={heroContentRef}
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center will-change-transform opacity-hidden ${showContent ? "visibility-visible" : "visibility-hidden"}`}
        >
          {/* Subtle radial gradient for text readability */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.3)_50%,_transparent_80%)]" />
          <div className="relative text-center max-w-3xl mx-auto px-4 md:px-6">
            {/* Warm gold accent harmonizing with golden hour cityscape */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
              <span className="text-white">AI-Powered Workplace</span>
              <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00]">Bias Detection</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-normal mb-6 md:mb-10 max-w-2xl mx-auto px-2">
              Enterprise-grade compliance firewall that detects and remediates bias across 9 protected categories in real-time.
            </p>

            {/* Waitlist CTA */}
            <div className="flex flex-col items-center gap-3 md:gap-4">
              <button
                type="button"
                onClick={openWaitlist}
                className="group flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold text-base md:text-lg hover:from-[#FFE55C] hover:to-[#FFB733] transition-all hover:scale-105 shadow-[0_4px_30px_rgba(255,165,0,0.4)]"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                Join Waitlist
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-white/80 text-xs md:text-sm">
                Be first to access. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroScroll
