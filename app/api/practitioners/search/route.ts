import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { calculateDistance } from "@/lib/geocoding"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const lat = Number.parseFloat(searchParams.get("lat") || "0")
    const lng = Number.parseFloat(searchParams.get("lng") || "0")
    const limit = Number.parseInt(searchParams.get("limit") || "3")

    const supabase = await createClient()

    // Get all approved practitioners
    const { data: practitioners, error } = await supabase
      .from("practitioners")
      .select("*")
      .eq("status", "approved")
      .not("latitude", "is", null)
      .not("longitude", "is", null)

    if (error) {
      console.error("Error fetching practitioners:", error)
      return NextResponse.json({ error: "Failed to fetch practitioners" }, { status: 500 })
    }

    // Calculate distances and sort
    const practitionersWithDistance = practitioners
      .map((p) => ({
        ...p,
        distance: calculateDistance(lat, lng, Number(p.latitude), Number(p.longitude)),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit)

    return NextResponse.json({ practitioners: practitionersWithDistance })
  } catch (error) {
    console.error("Error in practitioner search:", error)
    return NextResponse.json({ error: "Failed to search practitioners" }, { status: 500 })
  }
}
