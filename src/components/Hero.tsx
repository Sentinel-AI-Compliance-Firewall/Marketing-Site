"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  slogan?: string;
  image1: string;
  image2: string;
  links?: { label: string; href: string }[];
}

export default function Hero({
  slogan = "Catch Bias Before it Ships",
  image1,
  image2,
  links = [
    { label: "Home", href: "/#hero" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
    { label: "Company", href: "/cases" },
  ],
}: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Image with Morph Effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentImage]}
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Header Navigation */}
      <header className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="40"
              height="42"
              viewBox="0 0 75 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 37.575 78 C 30.507 78 24.091 76.334 18.336 73.002 C 12.678 69.569 8.183 64.924 4.849 59.068 C 1.619 53.111 0 46.447 0 39.076 C 0 31.604 1.619 24.94 4.849 19.084 C 8.183 13.126 12.678 8.482 18.336 5.15 C 24.091 1.717 30.507 0 37.575 0 C 44.747 0 51.11 1.717 56.668 5.15 C 62.322 8.482 66.768 13.126 69.998 19.084 C 73.333 24.94 75 31.604 75 39.076 C 75 46.447 73.333 53.111 69.998 59.068 C 66.768 64.924 62.322 69.569 56.668 73.002 C 51.11 76.334 44.747 78 37.575 78 Z M 43.486 59.22 L 36.817 41.196 L 46.515 39.985 L 54.545 59.22 Z M 37.575 70.73 C 46.567 70.73 53.736 67.953 59.088 62.4 C 64.545 56.746 67.272 49.223 67.272 39.833 L 67.272 38.016 C 67.272 28.625 64.545 21.153 59.088 15.6 C 53.736 10.047 46.567 7.27 37.575 7.27 C 28.586 7.27 21.365 10.047 15.912 15.6 C 10.555 21.153 7.881 28.625 7.881 38.016 L 7.881 39.833 C 7.881 49.223 10.555 56.746 15.912 62.4 C 21.365 67.953 28.586 70.73 37.575 70.73 Z M 22.577 59.22 L 22.577 18.781 L 39.242 18.781 C 43.889 18.781 47.474 19.942 49.999 22.264 C 52.625 24.485 53.937 27.666 53.937 31.806 C 53.937 35.744 52.677 38.824 50.152 41.045 C 47.627 43.165 44.091 44.225 39.544 44.225 L 32.879 44.225 L 32.879 59.22 Z M 32.73 37.258 L 38.94 37.258 C 42.069 37.258 43.636 35.794 43.636 32.866 L 43.636 31.049 C 43.636 28.019 42.069 26.505 38.94 26.505 L 32.73 26.505 Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-4xl leading-tight"
        >
          {slogan}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[rgb(251,73,48)] hover:bg-[rgb(220,60,40)] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            Get Started
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
