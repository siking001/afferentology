import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")

    if (!query || query.trim().length < 2) {
      return NextResponse.json([])
    }

    const supabase = await createClient()
    const searchTerm = query.trim().toLowerCase()

    // Search articles using ilike for flexible matching on title, excerpt, and content
    const { data, error } = await supabase
      .from("articles")
      .select("id, title, slug, excerpt, category, featured_image_url, published_at")
      .eq("published", true)
      .or(`title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
      .order("published_at", { ascending: false })
      .limit(10)

    if (error) {
      console.error("Search error:", error)
      return NextResponse.json({ error: "Search failed" }, { status: 500 })
    }

    return NextResponse.json(data || [])
  } catch (error) {
    console.error("Search API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
