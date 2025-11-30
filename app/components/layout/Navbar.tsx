"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/app/lib/utils"
import { Button } from "@/app/components/ui"
import { NAV_LINKS, CTA_CONFIG } from "@/app/constants/navigation"
import { Menu, X, ChevronDown, Shield } from "lucide-react"

interface NavbarProps {
  transparent?: boolean
}

export function Navbar({ transparent = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navBackground = transparent && !isScrolled
    ? "bg-transparent"
    : "bg-black/80 backdrop-blur-xl border-b border-[var(--border)]"

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          navBackground
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <Shield className="w-8 h-8 text-[var(--primary)]" />
              <span className="hidden sm:inline">SENTINEL</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-[var(--primary)]"
                        : "text-[var(--text-secondary)] hover:text-white"
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          activeDropdown === link.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-xl py-2 min-w-[240px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 hover:bg-[var(--bg-elevated)] transition-colors"
                          >
                            <span className="block text-sm font-medium text-white">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="block text-xs text-[var(--text-muted)] mt-0.5">
                                {child.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" as="a" href="/contact">
                {CTA_CONFIG.sales.label}
              </Button>
              <Button variant="primary" size="sm" as="a" href={CTA_CONFIG.primary.href}>
                {CTA_CONFIG.primary.label}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-[var(--bg-dark)] border-b border-[var(--border)] transition-all duration-300",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-[var(--primary)] bg-[var(--primary)]/10"
                        : "text-white hover:bg-[var(--bg-elevated)]"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-3">
              <Button variant="ghost" fullWidth as="a" href="/contact">
                {CTA_CONFIG.sales.label}
              </Button>
              <Button variant="primary" fullWidth as="a" href={CTA_CONFIG.primary.href}>
                {CTA_CONFIG.primary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
