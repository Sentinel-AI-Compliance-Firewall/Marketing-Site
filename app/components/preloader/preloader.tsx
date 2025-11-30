"use client"

import type React from "react"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

interface PreloaderProps {
  onComplete?: () => void
}

// Sentinel branding words
const words = ["SCAN", "DETECT", "PROTECT"]
const numberSteps = ["0%", "17%", "34%", "58%", "82%", "100%"]

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const comp = useRef<HTMLDivElement>(null)
  const topShutterRef = useRef<HTMLDivElement>(null)
  const bottomShutterRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete()
        },
      })

      gsap.set([topShutterRef.current, bottomShutterRef.current], {
        height: "50vh",
      })
      gsap.set(".word-container", { opacity: 1 })
      gsap.set(".number-container", { opacity: 1 })
      gsap.set(".meta-group", { opacity: 0, y: 20 })

      // Initial shutter movement
      tl.to([topShutterRef.current, bottomShutterRef.current], {
        height: "49.5vh",
        duration: 0.8,
        ease: "power3.out",
      })

      // Open shutters to reveal content
      tl.to(
        [topShutterRef.current, bottomShutterRef.current],
        {
          height: "35vh",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "open"
      )

      // Show meta info
      tl.to(
        ".meta-group",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "open+=1.0"
      )

      tl.add("start-flow")
      const totalAnimationTime = words.length * 2.5

      // Continue opening shutters
      tl.to(
        [topShutterRef.current, bottomShutterRef.current],
        {
          height: "10vh",
          duration: totalAnimationTime,
          ease: "linear",
        },
        "start-flow"
      )

      // Animate each word
      words.forEach((word, index) => {
        const letters = `.word-${index} .letter`
        const startTime = index * 2.3

        // Letters in
        tl.fromTo(
          letters,
          { y: "150%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1.4,
            stagger: 0.06,
            ease: "power3.out",
          },
          `start-flow+=${startTime}`
        )

        // Letters out
        tl.to(
          letters,
          {
            y: "-150%",
            opacity: 0,
            duration: 0.8,
            stagger: 0.04,
            ease: "power2.in",
          },
          `start-flow+=${startTime + 1.8}`
        )
      })

      // Animate number counter
      const stepDuration = totalAnimationTime / numberSteps.length
      numberSteps.forEach((num, index) => {
        const chars = `.num-${index} .num-char`
        const startTime = index * stepDuration
        const isLast = index === numberSteps.length - 1

        tl.fromTo(
          chars,
          { y: "150%" },
          { y: "0%", duration: 1.0, stagger: 0.05, ease: "power3.out" },
          `start-flow+=${startTime}`
        )

        if (!isLast) {
          tl.to(
            chars,
            {
              y: "-150%",
              duration: 0.6,
              stagger: 0.03,
              ease: "power2.in",
            },
            `start-flow+=${startTime + stepDuration * 0.7}`
          )
        }
      })

      // Final shutter close
      tl.to([topShutterRef.current, bottomShutterRef.current], {
        height: "0vh",
        duration: 1.2,
        ease: "expo.inOut",
      })
    }, comp)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div
      ref={comp}
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
    >
      {/* Top Shutter */}
      <div
        ref={topShutterRef}
        className="absolute top-0 left-0 w-full bg-black z-20"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 preloader-grid" />
      </div>

      {/* Bottom Shutter */}
      <div
        ref={bottomShutterRef}
        className="absolute bottom-0 left-0 w-full bg-black z-20"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-[80vw] max-w-4xl h-[200px] flex items-center justify-center">
          {/* Top right meta - Sentinel branding */}
          <div className="meta-group absolute -top-7 right-0 text-[#00FF88] text-xs md:text-sm font-mono font-medium opacity-0 tracking-wider">
            SENTINEL//INITIALIZING
          </div>

          {/* Words container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {words.map((word, wordIndex) => (
              <div
                key={wordIndex}
                className={`word-container word-${wordIndex} absolute flex items-center justify-center opacity-hidden`}
              >
                {word.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className={`letter inline-block text-5xl md:text-7xl lg:text-9xl font-bold text-white leading-none tracking-tight font-display ${wordIndex === 2 ? "text-glow-green" : "text-glow-none"}`}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom left counter */}
          <div className="meta-group absolute -bottom-6 left-0 text-white opacity-0 h-10 w-24 overflow-hidden font-mono">
            {numberSteps.map((num, i) => (
              <div
                key={i}
                className={`number-container num-${i} absolute top-0 left-0 w-full h-full flex items-center opacity-full`}
              >
                {num.split("").map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="num-char inline-block text-xl md:text-3xl font-bold tabular-nums leading-none translate-y-150 text-primary-green"
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom right status */}
          <div className="meta-group absolute -bottom-6 right-0 text-[#666666] text-xs md:text-sm font-mono opacity-0">
            BIAS DETECTION READY
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preloader
