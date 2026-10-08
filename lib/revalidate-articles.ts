import { revalidatePath } from "next/cache"

export function revalidateArticlePages(...slugs: (string | null | undefined)[]) {
  revalidatePath("/science")
  for (const slug of new Set(slugs)) {
    if (slug) revalidatePath(`/science/${slug}`)
  }
  revalidatePath("/sitemap.xml")
}
