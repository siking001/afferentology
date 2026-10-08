"use server"

import { createClient } from "@/lib/supabase/admin"
import { revalidateArticlePages } from "@/lib/revalidate-articles"

export async function deleteArticleAction(id: string) {
  const supabase = createClient()
  const { data, error } = await supabase.from("articles").delete().eq("id", id).select("slug").single()
  if (error) throw new Error(error.message)
  revalidateArticlePages(data?.slug)
}

export async function setArticlePublishedAction(id: string, published: boolean) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from("articles")
    .update({ published, published_at: published ? new Date().toISOString() : null })
    .eq("id", id)
    .select("slug")
    .single()
  if (error) throw new Error(error.message)
  revalidateArticlePages(data?.slug)
}
