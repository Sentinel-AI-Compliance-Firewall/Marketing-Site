"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, ChevronDown, Play, ArrowRight, Sparkles } from "lucide-react"
import { useWaitlist } from "@/app/context/WaitlistContext"

const FRAME_COUNT = 195
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
        scrub: 0.8,
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

    // Container zoom out in last portion of scroll
    tl.to(
      wrapperRef.current,
      {
        scale: 0.95,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        border: "1px solid rgba(255, 255, 255, 0.2)",
        ease: "none",
        duration: 2,
      },
      8,
    )

    tl.to(
      wrapperRef.current,
      {
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        duration: 1.5,
        ease: "none",
      },
      8.5,
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
    <div ref={containerRef} className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      <div ref={wrapperRef} className="w-full h-full relative origin-top will-change-transform overflow-hidden">
        <canvas ref={canvasRef} className="block object-cover canvas-fullscreen" />

        <nav
          ref={navRef}
          className={`absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 will-change-transform opacity-hidden ${showContent ? "visibility-visible" : "visibility-hidden"}`}
        >
          {/* Left nav items */}
          <div className="flex items-center gap-8">
            <Link href="/product" className="flex items-center gap-1 text-sm font-medium text-white uppercase tracking-wider hover:text-[#00FF88] transition-colors">
              Products
              <ChevronDown className="w-4 h-4" />
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-white uppercase tracking-wider hover:text-[#00FF88] transition-colors">
              Pricing
            </Link>
            <Link href="/security" className="text-sm font-medium text-white uppercase tracking-wider hover:text-[#00FF88] transition-colors">
              Security
            </Link>
          </div>

          {/* Center logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Shield className="w-8 h-8 text-[#00FF88]" />
            <span className="text-xl font-bold text-white tracking-wide">
              SENTINEL
            </span>
          </Link>

          {/* Right CTA buttons */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors">
              Watch Demo
              <Play className="w-4 h-4" />
            </Link>
            <Link href="/contact?demo=true" className="px-5 py-2.5 text-sm font-medium text-black bg-[#00FF88] rounded-full uppercase tracking-wider hover:bg-[#00CC6A] transition-colors">
              Request Demo
            </Link>
          </div>
        </nav>

        <div
          ref={heroContentRef}
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center will-change-transform opacity-hidden ${showContent ? "visibility-visible" : "visibility-hidden"}`}
        >
          <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered Workplace
              <span className="block text-[#00FF88]">Bias Detection</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Enterprise-grade compliance firewall that detects and remediates bias across 9 protected categories in real-time.
            </p>

            {/* Waitlist CTA */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="button"
                onClick={openWaitlist}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#00FF88] text-black font-semibold text-lg hover:bg-[#00CC6A] transition-all hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-white/50 text-sm">
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
