import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function GET() {
  try {
    const supabase = createAdminClient()

    const { data, error } = await supabase.from("practitioners").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching practitioners:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ practitioners: data || [] })
  } catch (error) {
    console.error("[v0] Error in admin practitioners fetch:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch practitioners" },
      { status: 500 },
    )
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json()

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 })
    }

    const supabase = createAdminClient()

    const { data, error } = await supabase
      .from("practitioners")
      .update({
        status,
        approved_at: status === "approved" ? new Date().toISOString() : null,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("[v0] Error updating practitioner:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ practitioner: data })
  } catch (error) {
    console.error("[v0] Error in admin practitioner update:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update practitioner" },
      { status: 500 },
    )
  }
}
