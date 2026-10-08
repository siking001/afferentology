import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function POST(request: Request) {
  let id: unknown
  try {
    ;({ id } = await request.json())
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 })
  }

  if (typeof id !== "string" || !UUID_PATTERN.test(id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 })
  }

  const supabase = createAdminClient()
  const { data: article } = await supabase
    .from("articles")
    .select("views")
    .eq("id", id)
    .eq("published", true)
    .single()

  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  await supabase
    .from("articles")
    .update({ views: (article.views || 0) + 1 })
    .eq("id", id)

  return new NextResponse(null, { status: 204 })
}
