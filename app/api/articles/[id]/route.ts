import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = createAdminClient()
    
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("id", id)
      .single()

    if (error) {
      console.error("Error fetching article:", error)
      return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in article get API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
