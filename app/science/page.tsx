import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ArrowRight, Calendar, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Science of Afferentology - Research & Articles",
  description:
    "Explore the neuroscience behind Afferentology. Read research articles about afferent input, muscle inhibition, and evidence-based approaches to pain relief.",
  keywords: ["afferent input science", "muscle inhibition research", "neuroscience articles", "pain science research"],
  openGraph: {
    title: "The Science of Afferentology - Research Articles",
    description: "Research articles and insights into the neuroscience of afferent input and muscle function.",
    type: "website",
  },
}

export const revalidate = 3600

export default async function SciencePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category: selectedCategory } = await searchParams
  
  let articles: any[] = []
  let categories: { category: string; count: number }[] = []

  try {
    const { createClient } = await import("@/lib/supabase/server")
    const supabase = await createClient()

    // Fetch categories with counts
    const { data: categoryData } = await supabase
      .from("articles")
      .select("category")
      .eq("published", true)
    
    if (categoryData) {
      const categoryCounts = categoryData.reduce((acc: Record<string, number>, item) => {
        if (item.category) {
          acc[item.category] = (acc[item.category] || 0) + 1
        }
        return acc
      }, {})
      categories = Object.entries(categoryCounts)
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count)
    }

    // Fetch articles with optional category filter
    let query = supabase
      .from("articles")
      .select("id, title, slug, excerpt, featured_image_url, category, published_at, views")
      .eq("published", true)
    
    if (selectedCategory) {
      query = query.eq("category", selectedCategory)
    }
    
    const { data } = await query.order("published_at", { ascending: false })

    articles = data || []
  } catch (error) {
    console.log("Database not yet set up for articles")
  }

  const featuredArticles = [
    {
      title: "Why Afferent Input Matters",
      slug: "afferent-input-matters",
      excerpt:
        "Understanding why paying attention to afferent input is crucial for examining and treating patients based on neurological input and output.",
      image: "/images/afferent-input-matters-header.webp",
    },
    {
      title: "The Myotatic Reflex",
      slug: "myotatic-reflex",
      excerpt:
        "Your body's most important defense mechanism for controlled movement, injury prevention, and maintaining proper muscle tone.",
      image: "/images/knee-jerk-reflex.jpg",
    },
    {
      title: "The Withdrawal Reflex",
      slug: "withdrawal-reflex",
      excerpt:
        "How sensory receptors have direct control over muscle tone to protect us from danger and respond to irritation.",
      image: "/images/withdrawal-reflex-diagram.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <BookOpen className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
              The Science of Afferentology
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Explore research articles, scientific insights, and the neuroscience behind afferent input and muscle
              function.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-3">Foundation Articles</h2>
              <p className="text-muted-foreground text-lg">Essential concepts for understanding Afferentology</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredArticles.map((article) => (
                <Link key={article.slug} href={`/science/${article.slug}`}>
                  <Card className="group h-full overflow-hidden border-2 border-primary/20 shadow-lg transition-all hover:shadow-xl hover:border-primary">
                    <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-primary">Foundation</span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                      <div className="mt-4 flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Latest Research & Articles</h2>
                <p className="text-muted-foreground">Recent insights and case studies</p>
              </div>
              <Button asChild variant="outline" className="bg-transparent w-fit">
                <Link href="/admin/articles">
                  Manage Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Category Filter */}
            {categories.length > 0 && (
              <div className="mb-10 flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2">Filter by:</span>
                <Link href="/science">
                  <Button
                    variant={!selectedCategory ? "default" : "outline"}
                    size="sm"
                    className={!selectedCategory ? "" : "bg-transparent"}
                  >
                    All
                  </Button>
                </Link>
                {categories.map(({ category, count }) => (
                  <Link key={category} href={`/science?category=${encodeURIComponent(category)}`}>
                    <Button
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className={selectedCategory === category ? "" : "bg-transparent"}
                    >
                      {category}
                      <span className="ml-1.5 rounded-full bg-muted/50 px-1.5 py-0.5 text-xs">
                        {count}
                      </span>
                    </Button>
                  </Link>
                ))}
              </div>
            )}

            {/* Show active filter indicator */}
            {selectedCategory && (
              <div className="mb-6 flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  Showing {articles.length} article{articles.length !== 1 ? 's' : ''} in "{selectedCategory}"
                </span>
                <Link href="/science" className="text-sm text-primary hover:underline">
                  Clear filter
                </Link>
              </div>
            )}

            {!articles || articles.length === 0 ? (
              <Card>
                <CardContent className="py-16 text-center">
                  <p className="text-muted-foreground mb-4">No articles published yet.</p>
                  <Button asChild>
                    <Link href="/admin/articles/seed-first">Publish Your First Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <Link key={article.id} href={`/science/${article.slug}`}>
                    <Card className="group h-full overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                      {article.featured_image_url && (
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={article.featured_image_url || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        {article.category && (
                          <div className="mb-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                              {article.category}
                            </span>
                          </div>
                        )}
                        <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(article.published_at).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views} views
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Learn More?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
            Dive deeper into Afferentology through our comprehensive training programs.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
              Explore Training Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
