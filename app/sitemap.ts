import type { MetadataRoute } from "next"
import { createAdminClient } from "@/lib/supabase/admin"

const baseUrl = "https://www.afferentology.org"

// Revalidate the sitemap periodically so newly published articles get picked up
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/patients`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/practitioners`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/science`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/find-practitioner`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/simon-king`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/screener`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practitioners/submit`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]

  // Dynamically include all published science articles
  let articleRoutes: MetadataRoute.Sitemap = []
  try {
    const supabase = createAdminClient()
    const { data: articles } = await supabase
      .from("articles")
      .select("slug, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })

    articleRoutes =
      articles?.map((article) => ({
        url: `${baseUrl}/science/${article.slug}`,
        lastModified: article.published_at ? new Date(article.published_at) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })) ?? []
  } catch (error) {
    // If the database is unreachable, still return the static routes rather than failing the build
    console.log("[v0] sitemap: failed to load articles", error)
  }

  return [...staticRoutes, ...articleRoutes]
}
