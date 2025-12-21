import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { WaitlistProvider } from "@/app/context/WaitlistContext"
import BackToTop from "@/app/components/BackToTop"

export const metadata: Metadata = {
  title: {
    default: "Sentinel AI | Enterprise Bias Detection & Compliance Platform",
    template: "%s | Sentinel AI",
  },
  description:
    "AI-powered compliance firewall that detects and remediates workplace bias across 9 protected categories. Prevent discrimination before it happens.",
  keywords: [
    "bias detection",
    "AI compliance",
    "workplace discrimination",
    "HR technology",
    "enterprise security",
    "EEOC compliance",
    "diversity and inclusion",
    "employment law",
    "machine learning",
    "NLP",
  ],
  authors: [{ name: "Sentinel AI" }],
  creator: "Sentinel AI",
  publisher: "Sentinel AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sentinel-ai.com"),
  openGraph: {
    title: "Sentinel AI - The Compliance Firewall for Enterprise",
    description:
      "Enterprise-grade AI that detects and remediates workplace bias across 9 protected categories.",
    url: "https://sentinel-ai.com",
    siteName: "Sentinel AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sentinel AI - Compliance Firewall",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel AI - The Compliance Firewall",
    description:
      "AI-powered bias detection protecting organizations from workplace discrimination.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className="font-sans antialiased bg-black text-white min-h-screen"
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="skip-to-content"
        >
          Skip to main content
        </a>
        <WaitlistProvider>
          {children}
          <BackToTop />
        </WaitlistProvider>
      </body>
    </html>
  )
}
