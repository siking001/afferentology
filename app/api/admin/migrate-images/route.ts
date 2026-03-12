import { put } from "@vercel/blob"
import { createClient } from "@/lib/supabase/admin"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Fetch all articles with base64 featured images
    const { data: articles, error } = await supabase
      .from("articles")
      .select("id, title, featured_image_url")
      .like("featured_image_url", "data:%")

    if (error) {
      return NextResponse.json({ error: "Failed to fetch articles", details: error.message }, { status: 500 })
    }

    if (!articles || articles.length === 0) {
      return NextResponse.json({ message: "No articles with base64 images found" })
    }

    const results = {
      total: articles.length,
      successful: 0,
      failed: 0,
      errors: [] as string[],
    }

    for (const article of articles) {
      try {
        const base64Data = article.featured_image_url

        // Parse the base64 data URL
        const matches = base64Data.match(/^data:([^;]+);base64,(.+)$/)
        if (!matches) {
          results.failed++
          results.errors.push(`Article ${article.id}: Invalid base64 format`)
          continue
        }

        const mimeType = matches[1]
        const base64Content = matches[2]

        // Convert base64 to Buffer
        const buffer = Buffer.from(base64Content, "base64")

        // Determine file extension from mime type
        const extMap: Record<string, string> = {
          "image/jpeg": "jpg",
          "image/jpg": "jpg",
          "image/png": "png",
          "image/webp": "webp",
          "image/gif": "gif",
        }
        const extension = extMap[mimeType] || "jpg"

        // Generate a unique filename
        const filename = `articles/migrated-${article.id}-${Date.now()}.${extension}`

        // Upload to Vercel Blob
        const blob = await put(filename, buffer, {
          access: "public",
          contentType: mimeType,
        })

        // Update the database with the new URL
        const { error: updateError } = await supabase
          .from("articles")
          .update({ featured_image_url: blob.url })
          .eq("id", article.id)

        if (updateError) {
          results.failed++
          results.errors.push(`Article ${article.id}: ${updateError.message}`)
          continue
        }

        results.successful++
      } catch (err: any) {
        results.failed++
        results.errors.push(`Article ${article.id}: ${err.message}`)
      }
    }

    return NextResponse.json(results)
  } catch (error: any) {
    console.error("Migration error:", error)
    return NextResponse.json({ error: "Migration failed", details: error.message }, { status: 500 })
  }
}
