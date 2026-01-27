import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function GET() {
  try {
    const supabase = createAdminClient()
    
    const { data, error } = await supabase
      .from("articles")
      .select("id, created_at, title, slug, excerpt, category, published, published_at, views")
      .order("updated_at", { ascending: false })

    if (error) {
      console.error("Error fetching articles:", error)
      return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
    }

    return NextResponse.json(data || [])
  } catch (error) {
    console.error("Error in articles list API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
