const HEADING_PATTERN = /<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/gi
const REFERENCES_PATTERN = /references|sources|bibliography/i

export function splitAtReferences(html: string): { main: string; references: string } {
  for (const match of html.matchAll(HEADING_PATTERN)) {
    const headingText = match[2].replace(/<[^>]*>/g, "")
    if (REFERENCES_PATTERN.test(headingText) && match.index !== undefined) {
      return { main: html.slice(0, match.index), references: html.slice(match.index) }
    }
  }
  return { main: html, references: "" }
}
