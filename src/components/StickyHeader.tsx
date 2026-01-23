"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderLogoMenuFramerComponent from "@/framer/header-logo-menu";

interface StickyHeaderProps {
  heroHeight?: number; // Height in vh units, default 100
}

export default function StickyHeader({ heroHeight = 100 }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeightPx = (heroHeight / 100) * window.innerHeight;

      // Show header when scrolled past hero section
      if (currentScrollY > heroHeightPx) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed top-0 left-0 right-0 z-[100]"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <HeaderLogoMenuFramerComponent.Responsive
            style={{ width: "100%", maxWidth: "100vw" }}
          />
        </motion.header>
      )}
    </AnimatePresence>
  );
}
