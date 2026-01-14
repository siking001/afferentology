"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">Afferentology</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/patients" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Patients
          </Link>
          <Link
            href="/practitioners"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Practitioners
          </Link>
          <Link href="/science" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            The Science
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
            Contact
          </Link>
          <Button asChild className="bg-secondary hover:bg-secondary/90">
            <Link href="/find-practitioner">Find a Practitioner</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/patients"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Patients
            </Link>
            <Link
              href="/practitioners"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Practitioners
            </Link>
            <Link
              href="/science"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Science
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link href="/find-practitioner" onClick={() => setMobileMenuOpen(false)}>
                Find a Practitioner
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
