"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const FRAME_COUNT = 192
const URL_PREFIX = "/frames/"
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
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    if (showContent && !contentVisible) {
      setContentVisible(true)
      // Fade in navbar and hero content
      gsap.fromTo(
        navRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 },
      )
      gsap.fromTo(
        heroContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 },
      )
    }
  }, [showContent, contentVisible])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!canvas || !context) return

    context.imageSmoothingEnabled = true
    context.imageSmoothingQuality = "medium"

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

    const handleResize = () => {
      const progress = ScrollTrigger.getById("hero-scroll")?.progress || 0
      const frameIndex = Math.floor(progress * (FRAME_COUNT - 1))
      render(frameIndex)
    }

    window.addEventListener("resize", handleResize)
    loadImages()

    const playhead = { frame: 0 }

    // Total duration is 10 units. Each animation's duration/position is a fraction of scroll.
    // scrub: 1 ensures smooth reverse on scroll up
    const tl = gsap.timeline({
      scrollTrigger: {
        id: "hero-scroll",
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%",
        pin: true,
        scrub: 1, // smooth scrub with reverse
      },
    })

    tl.to(
      navRef.current,
      {
        opacity: 0,
        y: -40,
        ease: "none",
        duration: 2.5,
      },
      0, // start at beginning
    )

    tl.to(
      heroContentRef.current,
      {
        scale: 0.6,
        opacity: 0,
        y: -80,
        ease: "none",
        duration: 3,
      },
      0, // start at beginning
    )

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

    // Container zoom out in last 20% of scroll
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
      8, // starts at 80% (8 out of 10)
    )

    tl.to(
      wrapperRef.current,
      {
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        duration: 1.5,
        ease: "none",
      },
      8.5, // starts at 85%
    )

    return () => {
      window.removeEventListener("resize", handleResize)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [onFirstFrameReady])

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      <div
        ref={wrapperRef}
        className="w-full h-full relative origin-top will-change-transform overflow-hidden bg-blue-600"
      >
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} className="block object-cover" />

        <nav
          ref={navRef}
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 opacity-0"
        >
          {/* Left nav items */}
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-1 text-sm font-medium text-[#2d3b2d] uppercase tracking-wider hover:opacity-70 transition-opacity">
              Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-sm font-medium text-[#2d3b2d] uppercase tracking-wider hover:opacity-70 transition-opacity">
              Pricing
            </button>
            <button className="text-sm font-medium text-[#2d3b2d] uppercase tracking-wider hover:opacity-70 transition-opacity">
              Blog
            </button>
          </div>

          {/* Center logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <svg className="w-6 h-6 text-[#2d3b2d]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-semibold text-[#2d3b2d] text-center max-w-4xl leading-tight text-balance px-4">
              Adaline
            </span>
          </div>

          {/* Right CTA buttons */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2d3b2d] border border-[#2d3b2d]/30 rounded-full hover:bg-[#2d3b2d]/5 transition-colors">
              Watch Demo
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="px-5 py-2.5 text-sm font-medium text-white bg-[#2d3b2d] rounded-full uppercase tracking-wider hover:bg-[#1a2a1a] transition-colors">
              Start for Free
            </button>
          </div>
        </nav>

        <div ref={heroContentRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center opacity-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2d3b2d] text-center max-w-4xl leading-tight text-balance px-4">
            The single platform to iterate, evaluate, deploy, and monitor AI agents
          </h1>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-sm text-gray-400 pointer-events-none z-10">
        Frames loaded: {imagesLoaded}/{FRAME_COUNT}
      </div>
    </div>
  )
}

export default HeroScroll
