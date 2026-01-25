"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CursorsFramerComponent from "@/framer/cursors";

type CursorVariant = "View Case" | "Join Waitlist" | "Next Case" | "Prev Case" | "View Eye" | null;

interface CustomCursorProps {
  children: React.ReactNode;
}

export default function CustomCursor({ children }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Expose setCursorVariant globally so components can change the cursor
  useEffect(() => {
    (window as any).setCursorVariant = setCursorVariant;
    return () => {
      delete (window as any).setCursorVariant;
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}

      {/* Custom Cursor */}
      <AnimatePresence>
        {isVisible && cursorVariant && (
          <motion.div
            className="fixed pointer-events-none z-[9999]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: mousePosition.x - 50,
              y: mousePosition.y - 50,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          >
            <CursorsFramerComponent
              variant={cursorVariant}
              style={{ width: 100, height: 100 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Hook for components to use to set cursor variant
export function useCursor() {
  const setCursorVariant = (variant: CursorVariant) => {
    if (typeof window !== "undefined" && (window as any).setCursorVariant) {
      (window as any).setCursorVariant(variant);
    }
  };

  return {
    showViewCase: () => setCursorVariant("View Case"),
    showRequestPricing: () => setCursorVariant("Join Waitlist"),
    showNextCase: () => setCursorVariant("Next Case"),
    showPrevCase: () => setCursorVariant("Prev Case"),
    showViewEye: () => setCursorVariant("View Eye"),
    hideCursor: () => setCursorVariant(null),
  };
}
