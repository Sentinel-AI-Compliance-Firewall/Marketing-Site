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
import FaqSectionFramerComponent from "@/framer/faq-section";
import TeamSlideRevealCardFramerComponent from "@/framer/team-slide-reveal-card";
import CtaContactSectionFramerComponent from "@/framer/cta-contact-section";
import FooterFramerComponent from "@/framer/footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import FallbackFooter from "@/components/FallbackFooter";
import FallbackWelcome from "@/components/FallbackWelcome";
import FallbackOurPillars from "@/components/FallbackOurPillars";
import FallbackHero from "@/components/FallbackHero";
import FallbackCta from "@/components/FallbackCta";
import FallbackHowItWorks from "@/components/FallbackHowItWorks";
import FallbackServices from "@/components/FallbackServices";
import { useShouldUseSimpleMode } from "@/hooks/useIsMobile";

export default function Home() {
  const useSimpleMode = useShouldUseSimpleMode();

  // Scroll to top on page load/reload
  useEffect(() => {
    window.scrollTo(0, 0);
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
        setCursor("Request Pricing"),
      );
      servicesSection.addEventListener("mouseleave", () => setCursor(null));
    }

    return () => {
      if (servicesSection) {
        servicesSection.removeEventListener("mouseenter", () =>
          setCursor("Request Pricing"),
        );
        servicesSection.removeEventListener("mouseleave", () =>
          setCursor(null),
        );
      }
    };
  }, []);

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
                    F3wEFrLg7={"/#hero"}
                    JYUO86ucP={"Company"}
                    R1kaDpBq8={"Process"}
                    UrY2rzAk2={"Contact"}
                    bLu9TnxH4={"Services"}
                    k3QcAoDID={"Catch Bias Before it Ships"}
                    kVptXE5dN={"/#process"}
                    mDSJnXF5t={"/cases"}
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

          {/* FAQ Section - skip on mobile (can add fallback later) */}
          {!useSimpleMode && (
            <ErrorBoundary fallback={null}>
              <FaqSectionFramerComponent.Responsive
                style={{ width: "100%", maxWidth: "100vw" }}
              />
            </ErrorBoundary>
          )}

          {/* Team Section */}
          <section className="w-full py-20 px-6 md:px-12 lg:px-20">
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
                  { name: "Parth Gosar", role: "Co-Founder", desc: "Machine learning engineer passionate about NLP and bias detection.", image: "/images/parth.jpeg" },
                  { name: "Purav Sanghavi", role: "Co-Founder", desc: "Full-stack developer and ML enthusiast driving technical architecture." },
                  { name: "Ved Chadderwala", role: "Co-Founder", desc: "Software engineer focused on scalable systems and backend infrastructure.", image: "/images/ved.jpeg" },
                ].map((member, i) => (
                  <div key={i} className="text-center p-6 border border-white/10">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 overflow-hidden">
                      {member.image && <img src={member.image} alt={member.name} className="w-full h-full object-cover" />}
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase" style={{ fontFamily: '"Anton", sans-serif' }}>{member.name}</h3>
                    <p className="text-[rgb(251,73,48)] text-sm mb-2">{member.role}</p>
                    <p className="text-white/60 text-sm">{member.desc}</p>
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
                  />
                </ErrorBoundary>
                <ErrorBoundary fallback={null}>
                  <TeamSlideRevealCardFramerComponent
                    style={{ width: "405px", height: "443px" }}
                    name1="Purav Sanghavi"
                    designation="(Co-Founder)"
                    reviewText="Full-stack developer and ML enthusiast. Driving the technical architecture and platform development at Sentinel AI Compliance Firewall."
                  />
                </ErrorBoundary>
                <ErrorBoundary fallback={null}>
                  <TeamSlideRevealCardFramerComponent
                    style={{ width: "405px", height: "443px" }}
                    name1="Ved Chadderwala"
                    image={{ src: "/images/ved.jpeg" }}
                    designation="(Co-Founder)"
                    reviewText="Software engineer focused on scalable systems. Leading backend infrastructure and API development at Sentinel AI Compliance Firewall."
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
      </Preloader>
    </CustomCursor>
  );
}
