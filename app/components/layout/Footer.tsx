"use client"

import { useState } from "react"
import Link from "next/link"
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/app/constants/navigation"
import { Shield, Twitter, Linkedin, Github } from "lucide-react"
import { WaitlistForm } from "@/app/components/WaitlistForm"

export function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const currentYear = new Date().getFullYear()

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "twitter":
        return <Twitter className="w-5 h-5" />
      case "linkedin":
        return <Linkedin className="w-5 h-5" />
      case "github":
        return <Github className="w-5 h-5" />
      default:
        return null
    }
  }

  return (
    <footer className="bg-[var(--bg-dark)] border-t border-[var(--border)]">
      {/* Newsletter Section */}
      <div className="border-b border-[var(--border)]">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Get the latest updates on workplace compliance, AI ethics, and
              product news.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-[var(--success)]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <WaitlistForm
                source="footer-newsletter"
                buttonLabel="Subscribe"
                onSuccess={() => setSubscribed(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-[var(--primary)]" />
              <span className="text-xl font-bold text-white">SENTINEL</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-xs">
              Enterprise-grade AI that detects and remediates workplace bias
              across 9 protected categories.
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {FOOTER_LINKS.product.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {FOOTER_LINKS.company.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {FOOTER_LINKS.resources.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              {FOOTER_LINKS.legal.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border)]">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              &copy; {currentYear} Sentinel AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]" />
                </span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
