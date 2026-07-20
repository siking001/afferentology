import { Info } from "lucide-react"

export function ArticleDisclaimer() {
  return (
    <aside
      role="note"
      aria-label="Medical disclaimer"
      className="mt-12 rounded-lg border border-border bg-muted/40 p-6"
    >
      <div className="mb-2 flex items-center gap-2">
        <Info className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Disclaimer</span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        This article presents a clinical framework grounded in neuroanatomy and physiology, including established reflex
        mechanisms and mechanisms observed in animal and human research. It reflects clinical reasoning and experience
        within the Afferentology model rather than findings from randomized controlled trials specific to this exact
        approach. It is intended for educational purposes and does not constitute medical advice. It is not a substitute
        for diagnosis, treatment, or the professional judgment of a qualified physician or healthcare provider. If you
        have persistent symptoms, chronic pain, or a diagnosed medical condition, please consult your doctor before
        making changes to your care.
      </p>
    </aside>
  )
}
