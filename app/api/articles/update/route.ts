import { createClient } from "@/lib/supabase/admin"
import { NextResponse } from "next/server"

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body
    const supabase = createClient()

    if (!id) {
      return NextResponse.json({ error: "Article ID is required" }, { status: 400 })
    }

    const { data, error } = await supabase.from("articles").update(updateData).eq("id", id).select().single()

    if (error) {
      console.error("[v0] Error updating article:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Error in update article API:", error)
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 })
  }
}
