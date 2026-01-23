"use client";

import { useState, useEffect } from "react";

export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export function useHasWebGL(): boolean {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      setHasWebGL(!!gl);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  return hasWebGL;
}

export function useShouldUseSimpleMode(): boolean {
  // Start with simple mode to avoid WebGL issues during SSR/hydration
  const [shouldUseSimple, setShouldUseSimple] = useState(true);

  useEffect(() => {
    // Only check on client side after mount
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;

      // Check WebGL support
      let hasWebGL = false;
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        hasWebGL = !!gl;
      } catch {
        hasWebGL = false;
      }

      // Check for low-end device
      const cores = navigator.hardwareConcurrency || 4;
      const memory = (navigator as any).deviceMemory || 4;
      const isLowPower = cores <= 2 || memory <= 2;

      // Use simple mode on mobile, no WebGL, or low-power devices
      setShouldUseSimple(isMobile || !hasWebGL || isLowPower);
    };

    checkDevice();

    // Also listen for resize
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return shouldUseSimple;
}
