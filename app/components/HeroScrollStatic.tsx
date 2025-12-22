"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { useWaitlist } from "@/app/context/WaitlistContext"
import { Navbar } from "@/app/components/layout"

const HeroScrollStatic = () => {
  const { openWaitlist } = useWaitlist()

  return (
    <div className="relative w-full h-[85vh] md:min-h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Static background image - frame 120 for best visual */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Frames/frame0120.jpg"
          alt="Sentinel AI Background"
          fill
          className="object-cover"
          style={{ transform: 'scale(1.25)' }}
          priority
        />
      </div>

      {/* Navigation - using shared Navbar component */}
      <Navbar transparent={true} />

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
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
  )
}

export default HeroScrollStatic
