"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingFramerComponent from "@/framer/loading";

interface PreloaderProps {
  imagesToPreload: string[];
  children: React.ReactNode;
  minDisplayTime?: number;
}

export default function Preloader({
  imagesToPreload,
  children,
  minDisplayTime = 2000,
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  // Disable scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imagesToPreload.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, [imagesToPreload]);

  // Minimum display time
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime]);

  // Hide preloader when both conditions are met
  useEffect(() => {
    if (imagesLoaded && minTimeElapsed) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  }, [imagesLoaded, minTimeElapsed]);

  return (
    <div className="relative">
      {/* Main content - always rendered but behind preloader initially */}
      <div className="relative z-0">{children}</div>

      {/* Preloader overlay that slides up */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6"
            style={{ backgroundColor: "rgb(251, 73, 48)" }}
          >
            {/* Loading animation */}
            <LoadingFramerComponent.Responsive
              style={{ width: 50, height: 50 }}
            />

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <span
                className="text-white text-sm font-medium tracking-[0.3em] uppercase"
                style={{ fontFamily: "'Mozilla Text', sans-serif" }}
              >
                Loading
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
