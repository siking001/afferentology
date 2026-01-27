"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { AdminAuth } from "@/components/admin-auth"

interface Article {
  id: string
  created_at: string
  title: string
  slug: string
  excerpt: string
  category?: string
  published: boolean
  published_at?: string
  views: number
}

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    loadArticles()
  }, [])

  async function loadArticles() {
    try {
      // Use the admin API route to fetch all articles (including drafts)
      // This bypasses RLS which only allows public to see published articles
      const response = await fetch("/api/articles/list")
      
      if (!response.ok) {
        throw new Error("Failed to fetch articles")
      }
      
      const data = await response.json()
      setArticles(data || [])
    } catch (error) {
      console.error("Error loading articles:", error)
      toast({
        title: "Error",
        description: "Failed to load articles.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function deleteArticle(id: string) {
    if (!confirm("Are you sure you want to delete this article?")) return

    try {
      const supabase = createClient()
      const { error } = await supabase.from("articles").delete().eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Article deleted successfully.",
      })

      loadArticles()
    } catch (error) {
      console.error("Error deleting article:", error)
      toast({
        title: "Error",
        description: "Failed to delete article.",
        variant: "destructive",
      })
    }
  }

  async function togglePublished(id: string, currentStatus: boolean) {
    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("articles")
        .update({
          published: !currentStatus,
          published_at: !currentStatus ? new Date().toISOString() : null,
        })
        .eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: `Article ${!currentStatus ? "published" : "unpublished"}.`,
      })

      loadArticles()
    } catch (error) {
      console.error("Error updating article:", error)
      toast({
        title: "Error",
        description: "Failed to update article.",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center">Loading...</p>
      </div>
    )
  }

  return (
    <AdminAuth>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Manage Articles</h1>
              <p className="text-muted-foreground">Create and manage science blog articles.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/admin/articles/new">
                <Plus className="mr-2 h-5 w-5" />
                New Article
              </Link>
            </Button>
          </div>

          {articles.length === 0 ? (
            <Card>
              <CardContent className="py-16 text-center">
                <p className="mb-4 text-muted-foreground">No articles yet. Create your first one!</p>
                <Button asChild>
                  <Link href="/admin/articles/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {articles.map((article) => (
                <Card key={article.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <CardTitle className="text-xl">{article.title}</CardTitle>
                          <Badge variant={article.published ? "default" : "secondary"}>
                            {article.published ? "Published" : "Draft"}
                          </Badge>
                          {article.category && <Badge variant="outline">{article.category}</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.created_at).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.views} views
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {article.published && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/science/${article.slug}`} target="_blank">
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </Link>
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePublished(article.id, article.published)}
                        >
                          {article.published ? (
                            <>
                              <EyeOff className="mr-2 h-4 w-4" />
                              Unpublish
                            </>
                          ) : (
                            <>
                              <Eye className="mr-2 h-4 w-4" />
                              Publish
                            </>
                          )}
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/admin/articles/${article.id}/edit`}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => deleteArticle(article.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </AdminAuth>
  )
}
