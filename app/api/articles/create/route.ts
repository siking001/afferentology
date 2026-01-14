import { createClient } from "@/lib/supabase/admin"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const supabase = createClient()

    const { data, error } = await supabase.from("articles").insert([body]).select().single()

    if (error) {
      console.error("[v0] Error creating article:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Error in create article API:", error)
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 })
  }
}
