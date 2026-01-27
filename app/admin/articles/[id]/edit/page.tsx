"use client"

import type React from "react"

import { useState, useEffect, use } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Upload, X, Sparkles, Link2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { slugify } from "@/lib/utils/slugify"
import Image from "next/image"
import { createClient } from "@/lib/supabase/client"
import { AdminAuth } from "@/components/admin-auth"

export default function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [linkSuggestions, setLinkSuggestions] = useState<Array<{ keyword: string; slug: string; title: string }>>([])

  // Keywords mapped to internal article slugs for auto-suggestions
  const KEYWORD_MAP: Record<string, { slug: string; title: string }> = {
    "withdrawal reflex": { slug: "withdrawal-reflex", title: "The Withdrawal Reflex" },
    "myotatic reflex": { slug: "myotatic-reflex", title: "The Myotatic Reflex" },
    "stretch reflex": { slug: "myotatic-reflex", title: "The Myotatic Reflex" },
    "50hz": { slug: "afferent-input-matters", title: "Why Afferent Input Matters" },
    "resting tone": { slug: "muscle-reflexes", title: "Muscle Reflexes" },
    "afferent input": { slug: "afferent-input-universal-treatment", title: "Afferent Input - Universal Treatment" },
    "muscle inhibition": { slug: "muscle-reflexes", title: "Muscle Reflexes" },
    "muscle testing": { slug: "testing-the-adductors", title: "Testing the Adductors" },
    "dental": { slug: "slipped-disc-from-a-dental-crown", title: "Slipped Disc From A Dental Crown" },
    "low back pain": { slug: "acute-low-back-pain", title: "Acute Low Back Pain" },
  }

  function checkForLinkSuggestions(content: string) {
    const suggestions: Array<{ keyword: string; slug: string; title: string }> = []
    const contentLower = content.toLowerCase()
    
    for (const [keyword, target] of Object.entries(KEYWORD_MAP)) {
      if (contentLower.includes(keyword) && 
          !contentLower.includes(`href="/science/${target.slug}"`) &&
          !contentLower.includes(`href='/science/${target.slug}'`)) {
        suggestions.push({ keyword, ...target })
      }
    }
    
    // Dedupe by slug
    const unique = suggestions.filter((s, i, arr) => arr.findIndex(x => x.slug === s.slug) === i)
    setLinkSuggestions(unique.slice(0, 5)) // Limit to 5 suggestions
  }
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author_name: "Simon King",
    featured_image_url: "",
    category: "",
    tags: "",
    published: false,
  })

  useEffect(() => {
    loadArticle()
  }, [id])

  async function loadArticle() {
    try {
      const supabase = createClient()
      const { data, error } = await supabase.from("articles").select("*").eq("id", id).single()

      if (error) throw error

      if (data) {
        setFormData({
          title: data.title || "",
          slug: data.slug || "",
          excerpt: data.excerpt || "",
          content: data.content || "",
          author_name: data.author_name || "Simon King",
          featured_image_url: data.featured_image_url || "",
          category: data.category || "",
          tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
          published: data.published || false,
        })
      }
    } catch (error) {
      console.error("Error loading article:", error)
      toast({
        title: "Error",
        description: "Failed to load article.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  function handleTitleChange(title: string) {
    setFormData({
      ...formData,
      title,
      slug: slugify(title),
    })
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    try {
      const formDataObj = new FormData()
      formDataObj.append("file", file)

      const response = await fetch("/api/articles/upload-image", {
        method: "POST",
        body: formDataObj,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Upload failed")
      }

      const { url } = await response.json()
      setFormData((prev) => ({ ...prev, featured_image_url: url }))

      toast({
        title: "Success",
        description: "Image uploaded successfully.",
      })
    } catch (error) {
      console.error("Image upload error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload image.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent, publish?: boolean) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const updateData = {
        id: id,
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        author_name: formData.author_name,
        featured_image_url: formData.featured_image_url,
        category: formData.category,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        published: publish !== undefined ? publish : formData.published,
        published_at: publish ? new Date().toISOString() : formData.published ? undefined : null,
      }

      const response = await fetch("/api/articles/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to update article")
      }

      toast({
        title: "Success",
        description: "Article updated successfully.",
      })

      router.push("/admin/articles")
      router.refresh()
    } catch (error) {
      console.error("Error updating article:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update article.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <AdminAuth>
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-center">Loading article...</p>
          </div>
        </div>
      </AdminAuth>
    )
  }

  return (
    <AdminAuth>
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/admin/articles">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Link>
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>Edit Article</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="Enter article title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    placeholder="article-url-slug"
                    required
                  />
                  <p className="text-xs text-muted-foreground">This will be the URL: /science/{formData.slug}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Brief summary of the article (1-2 sentences)"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content * (HTML supported)</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => {
                      setFormData({ ...formData, content: e.target.value })
                      checkForLinkSuggestions(e.target.value)
                    }}
                    placeholder="Write your article content here. HTML tags are supported for formatting."
                    rows={15}
                    required
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground">
                    You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, &lt;em&gt;, &lt;ul&gt;,
                    &lt;ol&gt;, etc.
                  </p>
                  
                  {/* Link Suggestions */}
                  {linkSuggestions.length > 0 && (
                    <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
                      <p className="text-sm font-medium flex items-center gap-2 mb-2">
                        <Link2 className="h-4 w-4 text-primary" />
                        Internal Link Suggestions
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {linkSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              const linkHtml = `<a href="/science/${suggestion.slug}">${suggestion.keyword}</a>`
                              navigator.clipboard.writeText(linkHtml)
                              toast({
                                title: "Link HTML Copied",
                                description: `Replace "${suggestion.keyword}" with the copied link.`,
                              })
                            }}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                          >
                            {suggestion.keyword} → {suggestion.title}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Click to copy link HTML. For full analysis, use the Atomize tool below.
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g., Research, Case Study"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="author">Author Name</Label>
                    <Input
                      id="author"
                      value={formData.author_name}
                      onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                      placeholder="Author name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="image">Featured Image</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image"
                      value={formData.featured_image_url}
                      onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                      placeholder="Or paste image URL"
                      type="url"
                      className="flex-1"
                    />
                    <div className="relative">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        id="file-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        disabled={isUploading}
                        className="w-full bg-transparent"
                        asChild
                      >
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <Upload className="mr-2 h-4 w-4" />
                          {isUploading ? "Uploading..." : "Upload"}
                        </label>
                      </Button>
                    </div>
                  </div>
                  {formData.featured_image_url && (
                    <div className="relative mt-2 rounded-lg border overflow-hidden">
                      <Image
                        src={formData.featured_image_url || "/placeholder.svg"}
                        alt="Featured image preview"
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => setFormData({ ...formData, featured_image_url: "" })}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={(e) => handleSubmit(e, false)}
                    disabled={isSubmitting}
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save as Draft
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => handleSubmit(e, true)}
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {formData.published ? "Update & Keep Published" : "Publish Now"}
                  </Button>
                </div>

                {/* Atomize Tool Link */}
                <div className="pt-4 border-t">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/admin/articles/${id}/atomize`}>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Atomize: Get Link Suggestions & Social Posts
                    </Link>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminAuth>
  )
}
