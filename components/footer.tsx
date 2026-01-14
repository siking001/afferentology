import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Afferentology</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming patient care through advanced understanding of nerve interference and afferent input.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">For Patients</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/patients" className="text-muted-foreground transition-colors hover:text-primary">
                  Why Are You Still In Pain?
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-muted-foreground transition-colors hover:text-primary">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/find-practitioner" className="text-muted-foreground transition-colors hover:text-primary">
                  Find a Practitioner
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">For Practitioners</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/practitioners" className="text-muted-foreground transition-colors hover:text-primary">
                  Online Training
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-muted-foreground transition-colors hover:text-primary">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-muted-foreground transition-colors hover:text-primary">
                  The Science
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Organization</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/simon-king" className="text-muted-foreground transition-colors hover:text-primary">
                  Simon King
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Afferentology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
