// @ts-nocheck
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import StickyHeader from "@/components/StickyHeader";
import HeroSectionFramerComponent from "@/framer/hero-section";
import WelcomeSectionFramerComponent from "@/framer/welcome-section";
import HowItWorksSectionFramerComponent from "@/framer/how-it-works-section";
import ServicesSectionFramerComponent from "@/framer/services-section";
import OurStackSectionFramerComponent from "@/framer/our-stack-section";
import GenerationsImagesSectionFramerComponent from "@/framer/generations-images-section";
import ProcessSectionFramerComponent from "@/framer/process-section";
import LiveDemoSection from "@/components/LiveDemoSection";
import FaqSection from "@/components/FaqSection";
import TeamSlideRevealCardFramerComponent from "@/framer/team-slide-reveal-card";
import CtaContactSectionFramerComponent from "@/framer/cta-contact-section";
import FooterFramerComponent from "@/framer/footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import FallbackFooter from "@/components/FallbackFooter";
import FallbackWelcome from "@/components/FallbackWelcome";
import FallbackOurPillars from "@/components/FallbackOurPillars";
import FallbackHero from "@/components/FallbackHero";
import FallbackCta from "@/components/FallbackCta";
import ContactSection from "@/components/ContactSection";
import FallbackHowItWorks from "@/components/FallbackHowItWorks";
import FallbackServices from "@/components/FallbackServices";
import WaitlistModal from "@/components/WaitlistModal";
import { useShouldUseSimpleMode } from "@/hooks/useIsMobile";

export default function Home() {
  const useSimpleMode = useShouldUseSimpleMode();
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Expose waitlist modal opener globally for Framer components
  useEffect(() => {
    (window as any).openWaitlistModal = () => setIsWaitlistOpen(true);

    // Intercept clicks on the "Get Early Access" button in process section
    const handleWaitlistClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if click is within the process section
      const processSection = document.getElementById("process");
      if (processSection && processSection.contains(target)) {
        // Only trigger on actual button clicks, not heading text
        const button = target.closest("a, button");
        if (button) {
          const text = button.textContent?.toUpperCase() || "";
          // Only catch "Get Early Access" button, not the "JOIN WAITLIST" heading
          if (text.includes("EARLY ACCESS") || text.includes("GET EARLY")) {
            e.preventDefault();
            e.stopPropagation();
            setIsWaitlistOpen(true);
          }
        }
      }
    };

    document.addEventListener("click", handleWaitlistClick, true);

    return () => {
      delete (window as any).openWaitlistModal;
      document.removeEventListener("click", handleWaitlistClick, true);
    };
  }, []);

  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Custom smooth scroll for anchor links (slower animation)
  useEffect(() => {
    const smoothScrollTo = (targetY: number, duration: number = 1500) => {
      const startY = window.scrollY;
      const difference = targetY - startY;
      const startTime = performance.now();

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, startY + difference * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="/#"]') || target.closest('a[href^="#"]');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href) {
          const hashIndex = href.indexOf('#');
          const hash = href.slice(hashIndex);
          const targetElement = document.querySelector(hash);

          if (targetElement) {
            e.preventDefault();
            const headerOffset = 100;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset;

            // Respect reduced motion preference
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (prefersReducedMotion) {
              window.scrollTo(0, targetPosition);
            } else {
              smoothScrollTo(targetPosition, 1200); // 1.2 second duration
            }
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Set up cursor events for interactive elements
  useEffect(() => {
    const setCursor = (variant: string | null) => {
      if (typeof window !== "undefined" && (window as any).setCursorVariant) {
        (window as any).setCursorVariant(variant);
      }
    };

    // Add cursor events to Services section link
    const servicesSection = document.querySelector(".framer-EzW10 a");
    if (servicesSection) {
      servicesSection.addEventListener("mouseenter", () =>
        setCursor("Join Waitlist"),
      );
      servicesSection.addEventListener("mouseleave", () => setCursor(null));
    }

    return () => {
      if (servicesSection) {
        servicesSection.removeEventListener("mouseenter", () =>
          setCursor("Join Waitlist"),
        );
        servicesSection.removeEventListener("mouseleave", () =>
          setCursor(null),
        );
      }
    };
  }, []);

  // Add scroll functionality to the scroll down indicator
  useEffect(() => {
    const handleScrollDown = () => {
      // Scroll down by one viewport height smoothly
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    };

    // Find the scroll down element by its data attribute or class
    const scrollDownElements = document.querySelectorAll('[data-framer-name="Scroll Down"], .framer-15g6onf');

    scrollDownElements.forEach(element => {
      element.style.cursor = 'pointer';
      element.addEventListener('click', handleScrollDown);
    });

    // Also add to fallback scroll indicator if present
    const fallbackScroll = document.querySelector('.scroll-indicator');
    if (fallbackScroll) {
      fallbackScroll.addEventListener('click', handleScrollDown);
    }

    return () => {
      scrollDownElements.forEach(element => {
        element.removeEventListener('click', handleScrollDown);
      });
      if (fallbackScroll) {
        fallbackScroll.removeEventListener('click', handleScrollDown);
      }
    };
  }, [useSimpleMode]);

  return (
    <CustomCursor>
      <StickyHeader heroHeight={100} />
      <Preloader imagesToPreload={["/images/hero-1.jpg"]} minDisplayTime={2000}>
        <main className="flex min-h-screen w-full flex-col items-center bg-black">
          {/* Hero Section */}
          <div id="hero" className="w-full relative">
            {/* Background image */}
            <img
              src="/images/hero-1.jpg"
              alt="Hero background"
              className="absolute inset-0 w-full h-full object-cover z-0"
              style={{ minHeight: "100vh" }}
            />

            {/* Hero content - use simple fallback on mobile */}
            <div className="relative z-10">
              {useSimpleMode ? (
                <FallbackHero tagline="Catch Bias Before it Ships" />
              ) : (
                <ErrorBoundary fallback={<FallbackHero tagline="Catch Bias Before it Ships" />}>
                  <HeroSectionFramerComponent.Responsive
                    style={{ width: "100%", maxWidth: "100vw" }}
                    F3wEFrLg7={"/"}
                    JYUO86ucP={"Company"}
                    R1kaDpBq8={"Process"}
                    UrY2rzAk2={"Contact"}
                    bLu9TnxH4={"Services"}
                    k3QcAoDID={"Catch Bias Before it Ships"}
                    kVptXE5dN={"/#process"}
                    mDSJnXF5t={"/#team"}
                    mRb3mP3Yg={"/#contact"}
                    tcqXAkE3f={"Home"}
                    wkNO7DvZM={"/#services"}
                  />
                </ErrorBoundary>
              )}
            </div>

            {/* Get Started Button - Positioned at bottom center of hero */}
            <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20">
              <Link
                href="/login"
                className="group relative inline-flex items-center"
              >
                {/* Background with border */}
                <div className="absolute inset-0 bg-[rgb(251,73,48)]/10 border border-[rgb(251,73,48)]/50 transition-all duration-300 group-hover:bg-[rgb(251,73,48)]/20 group-hover:border-[rgb(251,73,48)]" />

                {/* Corner bracket SVGs - matching process section style, larger */}
                <svg className="absolute -top-4 -left-4 w-7 h-7 transition-all duration-300 group-hover:-top-5 group-hover:-left-5" viewBox="0 0 20 20" fill="none">
                  <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                  <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                </svg>
                <svg className="absolute -bottom-4 -right-4 w-7 h-7 rotate-180 transition-all duration-300 group-hover:-bottom-5 group-hover:-right-5" viewBox="0 0 20 20" fill="none">
                  <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                  <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                </svg>

                {/* Button content */}
                <span className="relative px-12 py-6 text-white font-semibold tracking-[0.2em] text-base uppercase transition-all duration-300 group-hover:text-[rgb(251,73,48)]"
                  style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                >
                  Get Started
                </span>
              </Link>
            </div>
          </div>

          {/* Welcome Section */}
          {useSimpleMode ? (
            <FallbackWelcome />
          ) : (
            <ErrorBoundary fallback={<FallbackWelcome />}>
              <WelcomeSectionFramerComponent.Responsive
                style={{ width: "100%", maxWidth: "100vw" }}
                DbgqGvBLF={"Human Fairness"}
                LpLmvNhE6={"AI Precision"}
                MFFNNuZ0G={
                  "We help teams catch unintended bias before it reaches your audience. Real-time detection, intelligent rewriting suggestions, and comprehensive audit trails keep your content fair, compliant, and trustworthy."
                }
                davSvJI6v={false}
                k2Zi0Idch={"REAL-TIME BIAS DETECTION\n& SMART REWRITING AT SCALE"}
                n63APBDTH={true}
              />
            </ErrorBoundary>
          )}

          {/* How It Works Section */}
          {useSimpleMode ? (
            <FallbackHowItWorks />
          ) : (
            <ErrorBoundary fallback={<FallbackHowItWorks />}>
              <HowItWorksSectionFramerComponent.Responsive
                style={{ width: "100%", maxWidth: "100vw" }}
                T9FbsNFNh={"How it Works"}
              />
            </ErrorBoundary>
          )}

          {/* Services Section */}
          <div id="services" className="w-full">
            {useSimpleMode ? (
              <FallbackServices />
            ) : (
              <ErrorBoundary fallback={<FallbackServices />}>
                <ServicesSectionFramerComponent.Responsive
                  style={{ width: "100%", maxWidth: "100vw" }}
                  eEHxCQRfs={"/#contact"}
                  orI9Q0xAd={"Services"}
                />
              </ErrorBoundary>
            )}
          </div>

          {/* Our Pillars Section */}
          {useSimpleMode ? (
            <FallbackOurPillars />
          ) : (
            <ErrorBoundary fallback={<FallbackOurPillars />}>
              <OurStackSectionFramerComponent.Responsive
                style={{ width: "100%", maxWidth: "100vw" }}
                heading={"Our Pillars"}
              />
            </ErrorBoundary>
          )}

          {/* Generations Images Section - skip on mobile */}
          {!useSimpleMode && (
            <ErrorBoundary fallback={null}>
              <GenerationsImagesSectionFramerComponent.Responsive
                style={{ width: "100%", maxWidth: "100vw" }}
              />
            </ErrorBoundary>
          )}

          {/* Process Section - skip on mobile */}
          {!useSimpleMode && (
            <div id="process" className="w-full">
              <ErrorBoundary fallback={null}>
                <ProcessSectionFramerComponent.Responsive
                  style={{ width: "100%", maxWidth: "100vw" }}
                />
              </ErrorBoundary>
            </div>
          )}

          {/* Live Demo Section - works on all devices */}
          <LiveDemoSection />

          {/* FAQ Section */}
          <FaqSection />

          {/* Team Section */}
          <section id="team" className="w-full py-20 px-6 md:px-12 lg:px-20">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-16 uppercase tracking-tight"
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              Our Team
            </h2>
            {useSimpleMode ? (
              /* Simple team cards for mobile */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[
                  { name: "Parth Gosar", role: "Co-Founder", desc: "Machine learning engineer passionate about NLP and bias detection.", image: "/images/parth.jpeg", linkedin: "https://www.linkedin.com/in/parth-gosar-04042b1b1/" },
                  { name: "Purav Sanghavi", role: "Co-Founder", desc: "Full-stack developer and ML enthusiast driving technical architecture.", linkedin: "https://www.linkedin.com/in/purav-sanghavi-81a6a5208/" },
                  { name: "Ved Chadderwala", role: "Co-Founder", desc: "Software engineer focused on scalable systems and backend infrastructure.", image: "/images/ved.jpeg", linkedin: "https://www.linkedin.com/in/ved-chadderwala-196529223/" },
                ].map((member, i) => (
                  <div key={i} className="text-center p-6 border border-white/10">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 overflow-hidden">
                      {member.image && <img src={member.image} alt={member.name} className="w-full h-full object-cover" />}
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: '"Anton", sans-serif' }}>{member.name}</h3>
                    <p className="text-[rgb(251,73,48)] text-sm mb-2">{member.role}</p>
                    <p className="text-white/60 text-sm mb-3">{member.desc}</p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[rgb(251,73,48)]/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 max-w-7xl mx-auto">
                <ErrorBoundary fallback={null}>
                  <TeamSlideRevealCardFramerComponent
                    style={{ width: "405px", height: "443px" }}
                    name1="Parth Gosar"
                    image={{ src: "/images/parth.jpeg" }}
                    designation="(Co-Founder)"
                    reviewText="Machine learning engineer passionate about NLP and bias detection. Leading product vision and AI model optimization at Sentinel AI Compliance Firewall."
                    linkedinUrl="https://www.linkedin.com/in/parth-gosar-04042b1b1/"
                  />
                </ErrorBoundary>
                <ErrorBoundary fallback={null}>
                  <TeamSlideRevealCardFramerComponent
                    style={{ width: "405px", height: "443px" }}
                    name1="Purav Sanghavi"
                    designation="(Co-Founder)"
                    reviewText="Full-stack developer and ML enthusiast. Driving the technical architecture and platform development at Sentinel AI Compliance Firewall."
                    linkedinUrl="https://www.linkedin.com/in/purav-sanghavi-81a6a5208/"
                  />
                </ErrorBoundary>
                <ErrorBoundary fallback={null}>
                  <TeamSlideRevealCardFramerComponent
                    style={{ width: "405px", height: "443px" }}
                    name1="Ved Chadderwala"
                    image={{ src: "/images/ved.jpeg" }}
                    designation="(Co-Founder)"
                    reviewText="Software engineer focused on scalable systems. Leading backend infrastructure and API development at Sentinel AI Compliance Firewall."
                    linkedinUrl="https://www.linkedin.com/in/ved-chadderwala-196529223/"
                  />
                </ErrorBoundary>
              </div>
            )}
          </section>

          {/* CTA Contact Section */}
          <section id="contact" className="w-full">
            {useSimpleMode ? (
              <FallbackCta />
            ) : (
              <ErrorBoundary fallback={<FallbackCta />}>
                <CtaContactSectionFramerComponent.Responsive
                  style={{ width: "100%", maxWidth: "100vw" }}
                />
              </ErrorBoundary>
            )}
          </section>

          {/* Footer Get Started Section */}
          <section className="w-full py-12 px-6 border-t border-white/10 bg-black/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-2"
                  style={{ fontFamily: '"Anton", sans-serif' }}
                >
                  Ready to Detect Bias?
                </h3>
                <p className="text-white/60 text-sm md:text-base" style={{ fontFamily: '"Mozilla Text", sans-serif' }}>
                  Start catching unintended bias before it reaches your audience.
                </p>
              </div>
              <Link
                href="/login"
                className="group relative inline-flex items-center"
              >
                {/* Background with border */}
                <div className="absolute inset-0 bg-[rgb(251,73,48)]/10 border border-[rgb(251,73,48)]/50 transition-all duration-300 group-hover:bg-[rgb(251,73,48)]/20 group-hover:border-[rgb(251,73,48)]" />

                {/* Corner bracket SVGs */}
                <svg className="absolute -top-3 -left-3 w-6 h-6 transition-all duration-300 group-hover:-top-4 group-hover:-left-4" viewBox="0 0 20 20" fill="none">
                  <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                  <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                </svg>
                <svg className="absolute -bottom-3 -right-3 w-6 h-6 rotate-180 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" viewBox="0 0 20 20" fill="none">
                  <path d="M 1 20 L 1 6.842 L 2.316 5.526" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                  <path d="M 20 1 L 6.842 1 L 5.526 2.315" stroke="rgb(251, 73, 48)" strokeMiterlimit="10" strokeWidth="1.5" fill="transparent"/>
                </svg>

                {/* Button content */}
                <span
                  className="relative px-10 py-5 text-white font-semibold tracking-[0.2em] text-sm uppercase transition-all duration-300 group-hover:text-[rgb(251,73,48)]"
                  style={{ fontFamily: '"Mozilla Text", sans-serif' }}
                >
                  Get Started
                </span>
              </Link>
            </div>
          </section>

          {/* Footer */}
          {useSimpleMode ? (
            <FallbackFooter />
          ) : (
            <ErrorBoundary fallback={<FallbackFooter />}>
              <FooterFramerComponent.Responsive
                style={{ width: "100%", maxWidth: "100vw" }}
              />
            </ErrorBoundary>
          )}
        </main>

        {/* Waitlist Modal */}
        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </Preloader>
    </CustomCursor>
  );
}
