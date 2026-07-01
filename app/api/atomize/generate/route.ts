import { generateText } from "ai"
import { NextResponse } from "next/server"

export const maxDuration = 30

type Format = "linkedin" | "facebook" | "substack" | "email"

const MODEL = "openai/gpt-4o-mini"

const BRAND_CONTEXT = `Afferentology is a neuromuscular assessment and treatment approach founded by Dr. Simon King. It focuses on identifying and removing "hidden irritants" (e.g. dental work, scar tissue, piercings) that cause the nervous system to trigger a protective Withdrawal Reflex, inhibiting muscle function. The core metaphor is the "nail in the foot": pain is a signal, not the problem. Afferentology distinguishes structural ("hardware") from neurological ("software") dysfunction and restores strength by neutralizing corrupted afferent (sensory) input.`

const VOICE = `Write in Simon King's voice. His style:
- Short paragraphs (often one or two sentences each). Plenty of white space.
- Direct and conversational. Talk to the reader as a peer, not an audience.
- Challenge the conventional medical view. Question assumptions others take for granted (e.g. that pain is the problem, that weak muscles need strengthening, that structure explains everything).
- Ground ideas in specific, concrete patient stories or clinical scenarios wherever the article content allows. A real example beats an abstract claim.
- Warm but authoritative. Confident, never arrogant. You've seen this work.
- Lead with a provocative clinical insight or a patient scenario, NOT with a description of the article.

STRICTLY AVOID generic marketing filler such as: "Our latest article dives deep", "Don't miss this enlightening read", "In this post we explore", "Check out our new blog", "a must-read", "unlock the secrets". Never announce the article as an article. Instead, open with the idea itself.

AUDIENCE AND EMPATHY:
- You are speaking to conscientious chiropractors, physiotherapists, osteopaths, and other manual therapists who are doing everything right by conventional standards — and still watching patients plateau, relapse, or never fully recover.
- These are skilled, caring, hard-working clinicians. They have not been given the full picture, but that is not their fault.
- NEVER talk down to them, and NEVER imply they have been doing it wrong, that they are missing something obvious, or that their training was inadequate. No blame, no "you've been making this mistake."
- Write like a trusted colleague opening a door they didn't know existed — sharing something that finally explains the cases that don't add up. Empathetic, respectful, and generous.
- Acknowledge the frustration of the plateau or relapse honestly, then offer the missing piece as a genuine "what if it were this?" rather than a correction.`

const HASHTAG_POOL = `Choose exactly 5 hashtags, selected from this list based on their relevance to THIS specific article's topic (always include #Afferentology): #Afferentology #AfferentInput #MuscleInhibition #NeurologicalHealth #ChronicPain #PainScience #ManualTherapy #Physiotherapy #Chiropractic #FunctionalMedicine #Osteopathy #Musclestrength. Do not invent new hashtags or use any outside this list.`

function buildPrompt(format: Format, article: { title: string; excerpt: string; content: string; url: string }) {
  const source = `ARTICLE TITLE: ${article.title}

ARTICLE SUMMARY: ${article.excerpt || "(no summary provided)"}

ARTICLE URL: ${article.url}

ARTICLE CONTENT:
${article.content}`

  switch (format) {
    case "linkedin":
      return {
        system: `You are Dr. Simon King, founder of Afferentology, posting on LinkedIn to an audience of healthcare practitioners. ${BRAND_CONTEXT}\n\n${VOICE}`,
        prompt: `Write a LinkedIn post based on the article below.

Requirements:
- Open with a provocative clinical insight or a specific patient scenario drawn from the article. Do NOT open by mentioning the article.
- Short paragraphs with white space between them.
- Challenge a conventional assumption relevant to the topic.
- Near the end, invite the reader to read the full piece with a natural line, followed by the article URL on its own line.
- Then end with exactly 5 hashtags. ${HASHTAG_POOL}
- Do not use markdown formatting or headers. Return only the post text.

${source}`,
      }
    case "facebook":
      return {
        system: `You are Dr. Simon King, founder of Afferentology, posting on Facebook. ${BRAND_CONTEXT}\n\n${VOICE}`,
        prompt: `Write a Facebook post based on the article below.

Requirements:
- Short and conversational: a few short sentences.
- Open with a hook drawn from a patient scenario or a surprising clinical claim from the article. Do NOT open by mentioning the article.
- Warm and direct, as if talking to a colleague or curious patient.
- Include the article URL.
- End with exactly 5 hashtags. ${HASHTAG_POOL}
- Do not use markdown formatting. Return only the post text.

${source}`,
      }
    case "substack":
      return {
        system: `You are Dr. Simon King, founder of Afferentology, writing your newsletter. ${BRAND_CONTEXT}\n\n${VOICE}`,
        prompt: `Write a Substack newsletter intro for the article below.

Requirements:
- 150-200 words.
- Open with a specific patient story or a provocative clinical claim from the article. Do NOT open by describing the article.
- Short paragraphs, conversational, challenging the conventional view. Build curiosity toward the full piece.
- End with the exact sentence: Read the full article at ${article.url}
- Do not use hashtags. Do not use markdown formatting or headers. Return only the intro text.

${source}`,
      }
    case "email":
      return {
        system: `You are Dr. Simon King, founder of Afferentology, writing directly to your email list of manual therapy practitioners. ${BRAND_CONTEXT}\n\n${VOICE}`,
        prompt: `Write a Podia email snippet based on the article below.

Requirements:
- 100-150 words.
- Open with a specific patient scenario or a clinical observation that challenges what most practitioners assume. Do NOT open by mentioning the article.
- Short paragraphs. Warm, personal, first person, peer to peer.
- Include a soft, non-pushy call to action toward the Clinical Residency at learn.afferentology.org.
- Do not use hashtags. Do not use markdown formatting or a subject line. Return only the email body text.

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
