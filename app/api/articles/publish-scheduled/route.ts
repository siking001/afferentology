import { createClient } from "@/lib/supabase/admin"
import { NextResponse } from "next/server"

// This endpoint publishes articles that have a scheduled_at time in the past
// It can be called by a Vercel Cron job or triggered manually

export async function POST(request: Request) {
  try {
    // Optional: Verify cron secret for security
    const authHeader = request.headers.get("authorization")
    const cronSecret = process.env.CRON_SECRET

    // If CRON_SECRET is set, require it for automated calls
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      // Allow manual calls from admin without the secret
      const isManualCall = request.headers.get("x-manual-trigger") === "true"
      if (!isManualCall) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
    }

    const supabase = createClient()
    const now = new Date().toISOString()

    // Find all articles that are scheduled and past their scheduled_at time
    const { data: scheduledArticles, error: fetchError } = await supabase
      .from("articles")
      .select("id, title, slug, scheduled_at")
      .eq("published", false)
      .not("scheduled_at", "is", null)
      .lte("scheduled_at", now)

    if (fetchError) {
      console.error("[v0] Error fetching scheduled articles:", fetchError)
      return NextResponse.json({ error: fetchError.message }, { status: 500 })
    }

    if (!scheduledArticles || scheduledArticles.length === 0) {
      return NextResponse.json({
        message: "No articles to publish",
        published: [],
      })
    }

    // Publish each scheduled article
    const publishedArticles = []
    const errors = []

    for (const article of scheduledArticles) {
      const { error: updateError } = await supabase
        .from("articles")
        .update({
          published: true,
          published_at: now,
          scheduled_at: null, // Clear the scheduled_at after publishing
        })
        .eq("id", article.id)

      if (updateError) {
        console.error(`[v0] Error publishing article ${article.id}:`, updateError)
        errors.push({ id: article.id, title: article.title, error: updateError.message })
      } else {
        publishedArticles.push({
          id: article.id,
          title: article.title,
          slug: article.slug,
        })
      }
    }

    return NextResponse.json({
      message: `Published ${publishedArticles.length} article(s)`,
      published: publishedArticles,
      errors: errors.length > 0 ? errors : undefined,
    })
  } catch (error) {
    console.error("[v0] Error in publish-scheduled API:", error)
    return NextResponse.json({ error: "Failed to publish scheduled articles" }, { status: 500 })
  }
}

// GET endpoint to check scheduled articles status
export async function GET() {
  try {
    const supabase = createClient()

    const { data: scheduledArticles, error } = await supabase
      .from("articles")
      .select("id, title, slug, scheduled_at, created_at")
      .eq("published", false)
      .not("scheduled_at", "is", null)
      .order("scheduled_at", { ascending: true })

    if (error) {
      console.error("[v0] Error fetching scheduled articles:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      count: scheduledArticles?.length || 0,
      articles: scheduledArticles || [],
    })
  } catch (error) {
    console.error("[v0] Error in get scheduled articles API:", error)
    return NextResponse.json({ error: "Failed to fetch scheduled articles" }, { status: 500 })
  }
}
