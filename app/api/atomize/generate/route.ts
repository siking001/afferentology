import { generateText } from "ai"
import { NextResponse } from "next/server"

export const maxDuration = 30

type Format = "linkedin" | "facebook" | "substack" | "email"

const MODEL = "openai/gpt-4o-mini"

const BRAND_CONTEXT = `Afferentology is a neuromuscular assessment and treatment approach founded by Dr. Simon King. It focuses on identifying and removing "hidden irritants" (e.g. dental work, scar tissue, piercings) that cause the nervous system to trigger a protective Withdrawal Reflex, inhibiting muscle function. The core metaphor is the "nail in the foot": pain is a signal, not the problem. Afferentology distinguishes structural ("hardware") from neurological ("software") dysfunction and restores strength by neutralizing corrupted afferent (sensory) input.`

function buildPrompt(format: Format, article: { title: string; excerpt: string; content: string; url: string }) {
  const source = `ARTICLE TITLE: ${article.title}

ARTICLE SUMMARY: ${article.excerpt || "(no summary provided)"}

ARTICLE URL: ${article.url}

ARTICLE CONTENT:
${article.content}`

  switch (format) {
    case "linkedin":
      return {
        system: `You are a social media copywriter for Afferentology. ${BRAND_CONTEXT} Write in a professional, credible, thought-leadership tone aimed at healthcare practitioners.`,
        prompt: `Write a LinkedIn post promoting the article below.

Requirements:
- Professional, engaging, thought-leadership tone.
- Hook the reader in the first line.
- Include a clear call to read the full article, followed by the article URL on its own line.
- End with exactly 5 relevant hashtags (e.g. #Afferentology and 4 others relevant to the topic).
- Do not use markdown formatting or headers. Return only the post text.

${source}`,
      }
    case "facebook":
      return {
        system: `You are a social media copywriter for Afferentology. ${BRAND_CONTEXT} Write in a warm, friendly, conversational tone.`,
        prompt: `Write a Facebook post promoting the article below.

Requirements:
- Shorter and more conversational than LinkedIn: 2-3 sentences maximum.
- Friendly, approachable tone.
- Include the article URL.
- End with exactly 3 relevant hashtags.
- Do not use markdown formatting. Return only the post text.

${source}`,
      }
    case "substack":
      return {
        system: `You are a newsletter writer for Afferentology. ${BRAND_CONTEXT} Write compelling long-form newsletter prose.`,
        prompt: `Write a Substack newsletter intro paragraph for the article below.

Requirements:
- 150-200 words.
- Written as a compelling newsletter intro that hooks the reader and builds curiosity.
- End with the exact sentence: Read the full article at ${article.url}
- Do not use markdown formatting or headers. Return only the intro text.

${source}`,
      }
    case "email":
      return {
        system: `You are Dr. Simon King, founder of Afferentology, writing directly to your email list of manual therapy practitioners. Write warmly and personally in the first person. ${BRAND_CONTEXT}`,
        prompt: `Write a Podia email snippet about the article below.

Requirements:
- 100-150 words.
- Warm and personal, written as if from Simon King directly to his practitioner email list.
- Include a soft, non-pushy call to action toward the Clinical Residency at learn.afferentology.org.
- Do not use markdown formatting or a subject line. Return only the email body text.

${source}`,
      }
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { format, title, excerpt, content, slug } = body as {
      format: Format
      title: string
      excerpt?: string
      content: string
      slug: string
    }

    if (!format || !title || !content || !slug) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
    }

    const url = `https://www.afferentology.org/science/${slug}`
    const { system, prompt } = buildPrompt(format, {
      title,
      excerpt: excerpt || "",
      content,
      url,
    })

    const { text } = await generateText({
      model: MODEL,
      system,
      prompt,
    })

    return NextResponse.json({ text: text.trim() })
  } catch (error) {
    console.error("[v0] Error generating social format:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to generate content." },
      { status: 500 },
    )
  }
}
