"use client"

import { useState, useEffect } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Preloader from "@/app/components/preloader/preloader"
import HeroScroll from "@/app/components/HeroScroll"
import SmoothScroll from "@/app/components/SmoothScroll"
import ScrollManager from "@/app/components/ScrollManager"

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false)
  const [firstFrameReady, setFirstFrameReady] = useState(false)

  useEffect(() => {
    if (preloaderFinished && firstFrameReady) {
      setTimeout(() => {
        ScrollTrigger.refresh()
      }, 100)
    }
  }, [preloaderFinished, firstFrameReady])

  return (
    <SmoothScroll>
      <ScrollManager isLocked={!preloaderFinished} />

      <main className="bg-[#1a1a1a] min-h-screen w-full relative">
        <div className="relative z-0">
          <HeroScroll onFirstFrameReady={() => setFirstFrameReady(true)} showContent={preloaderFinished} />
        </div>

        {!preloaderFinished && <Preloader onComplete={() => setPreloaderFinished(true)} />}

        <div className="relative z-10 bg-[#1a1a1a] w-full -mt-px">
          <div className="h-screen flex items-center justify-center">
            <h2 className="text-white text-4xl font-bold">The Next Section</h2>
          </div>
        </div>
      </main>
    </SmoothScroll>
  )
}
