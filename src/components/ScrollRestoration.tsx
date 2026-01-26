"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Store scroll positions for each path
const scrollPositions: Record<string, number> = {};

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Restore scroll position when navigating back to a page
    const savedPosition = scrollPositions[pathname];
    if (savedPosition !== undefined) {
      // Use requestAnimationFrame for smoother restoration
      requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
    }

    // Save scroll position before leaving the page
    const handleScroll = () => {
      scrollPositions[pathname] = window.scrollY;
    };

    // Save position on scroll (debounced)
    let scrollTimeout: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });

    // Save position before navigation
    const handleBeforeUnload = () => {
      scrollPositions[pathname] = window.scrollY;
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Also store in sessionStorage for page refreshes
    const storedPositions = sessionStorage.getItem("scrollPositions");
    if (storedPositions) {
      Object.assign(scrollPositions, JSON.parse(storedPositions));
    }

    return () => {
      // Save current position before unmounting
      scrollPositions[pathname] = window.scrollY;
      sessionStorage.setItem("scrollPositions", JSON.stringify(scrollPositions));
      window.removeEventListener("scroll", debouncedScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(scrollTimeout);
    };
  }, [pathname]);

  return null;
}
