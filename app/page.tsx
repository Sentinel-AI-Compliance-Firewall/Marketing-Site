"use client";

import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/app/components/preloader/preloader";
import HeroScroll from "@/app/components/HeroScroll";
import SmoothScroll from "@/app/components/SmoothScroll";
import ScrollManager from "@/app/components/ScrollManager";

import MarqueeText from "@/app/components/MarqueeText";

export default function Home() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    if (preloaderFinished && firstFrameReady) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [preloaderFinished, firstFrameReady]);

  return (
    <SmoothScroll>
      <ScrollManager isLocked={!preloaderFinished} />

      <main className="bg-black min-h-screen w-full relative">
        {/* Hero with frame animation */}
        <div className="relative z-0">
          <HeroScroll
            onFirstFrameReady={() => setFirstFrameReady(true)}
            showContent={preloaderFinished}
          />
        </div>

        {/* Preloader */}
        {!preloaderFinished && (
          <Preloader onComplete={() => setPreloaderFinished(true)} />
        )}

        {/* Content sections with blue gradient */}

        {/* Horizontal scrolling marquee */}
        <MarqueeText />

        {/* Feature cards section */}

        {/* Extra spacing for scroll */}
        <div className="h-screen" />
      </main>
    </SmoothScroll>
  );
}
