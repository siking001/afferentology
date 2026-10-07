import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArticleCtaProps {
  slug: string
  ctaHeading?: string | null
  ctaBody?: string | null
  ctaLabel?: string | null
  ctaUrl?: string | null
  showPatientCta?: boolean | null
}

export function withUtmParams(url: string, slug: string) {
  const [base, hash] = url.split("#", 2)
  const separator = base.includes("?") ? "&" : "?"
  const params = new URLSearchParams({
    utm_source: "afferentology.org",
    utm_medium: "article",
    utm_campaign: slug,
  })
  return `${base}${separator}${params.toString()}${hash ? `#${hash}` : ""}`
}

export function ArticleCta({ slug, ctaHeading, ctaBody, ctaLabel, ctaUrl, showPatientCta }: ArticleCtaProps) {
  const hasPractitionerCta = Boolean(ctaUrl)
  if (!hasPractitionerCta && !showPatientCta) return null

  return (
    <aside aria-label="Next steps" className="my-12 flex flex-col gap-6">
      {hasPractitionerCta && ctaUrl && (
        <div className="flex flex-col gap-4 rounded-lg border-2 border-primary/20 bg-muted/30 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">For practitioners</p>
          {ctaHeading && (
            <h2 className="text-2xl font-bold leading-tight text-foreground text-balance md:text-3xl">{ctaHeading}</h2>
          )}
          {ctaBody && <p className="text-lg leading-relaxed text-foreground/80 text-pretty">{ctaBody}</p>}
          <div>
            <a
              href={withUtmParams(ctaUrl, slug)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {ctaLabel || "Learn more"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      {showPatientCta && (
        <p className="border-t border-border pt-6 text-base leading-relaxed text-muted-foreground">
          Are you a patient?{" "}
          <Link
            href="/find-practitioner"
            className="font-medium text-primary underline-offset-4 hover:text-secondary hover:underline"
          >
            Find an Afferentology practitioner near you <span aria-hidden="true">→</span>
          </Link>
        </p>
      )}
    </aside>
  )
}
