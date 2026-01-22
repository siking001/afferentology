import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@/lib/supabase/admin"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Eye, Tag } from "lucide-react"
import type { Metadata } from "next"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author_name: string
  featured_image_url?: string
  category?: string
  tags?: string[]
  published_at: string
  views: number
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: article } = await supabase
    .from("articles")
    .select("title, excerpt, featured_image_url")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title} - Afferentology Science`,
    description: article.excerpt || "Research article from Afferentology",
    openGraph: {
      title: article.title,
      description: article.excerpt || "Research article from Afferentology",
      type: "article",
      images: article.featured_image_url ? [article.featured_image_url] : [],
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const supabase = await createClient()

  // Fetch article
  const { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single()

  if (error || !article) {
    notFound()
  }

  // Increment view count (using admin client to bypass RLS)
  const adminSupabase = createAdminClient()
  await adminSupabase
    .from("articles")
    .update({ views: (article.views || 0) + 1 })
    .eq("id", article.id)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/science">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                {article.views} views
              </div>
              <div>By {article.author_name}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featured_image_url && (
        <section className="bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={article.featured_image_url || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            {article.excerpt && (
              <p className="mb-8 text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                {article.excerpt}
              </p>
            )}

            <div
    className="prose prose-lg !max-w-none 
      prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
      prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-8
      prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:italic
      prose-li:text-foreground/90 prose-li:mb-4
      prose-strong:text-foreground prose-strong:font-bold"
    dangerouslySetInnerHTML={{ __html: article.content }}
  />
</div>
          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 border-t pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {article.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-secondary py-12 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold">Continue Learning</h2>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link href="/science">View More Articles</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                Explore Training
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
