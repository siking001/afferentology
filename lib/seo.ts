const TITLE_SUFFIX = " | Afferentology"
const MAX_TITLE_LENGTH = 60
const MAX_DESCRIPTION_LENGTH = 155

/**
 * Truncates a string at the nearest word boundary so the result never exceeds
 * `max` characters and never cuts a word in half. A trailing ellipsis is added
 * when the text was actually shortened.
 */
function truncateAtWord(text: string, max: number, ellipsis = "…"): string {
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= max) return clean

  const budget = max - ellipsis.length
  const slice = clean.slice(0, budget)
  const lastSpace = slice.lastIndexOf(" ")
  const truncated = (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).replace(/[\s.,;:!?-]+$/, "")
  return `${truncated}${ellipsis}`
}

/**
 * Builds an SEO <title> that stays within Google's ~60 character display limit,
 * including the " | Afferentology" suffix. Returns an absolute title so Next.js
 * does not append the layout template a second time.
 */
export function buildSeoTitle(articleTitle: string): string {
  const full = `${articleTitle}${TITLE_SUFFIX}`
  if (full.length <= MAX_TITLE_LENGTH) return full

  const budgetForTitle = MAX_TITLE_LENGTH - TITLE_SUFFIX.length
  const truncatedTitle = truncateAtWord(articleTitle, budgetForTitle)
  return `${truncatedTitle}${TITLE_SUFFIX}`
}

/**
 * Caps a meta description at 155 characters, cutting at a word boundary.
 */
export function buildSeoDescription(text: string | null | undefined, fallback: string): string {
  const source = (text && text.trim()) || fallback
  return truncateAtWord(source, MAX_DESCRIPTION_LENGTH)
}
