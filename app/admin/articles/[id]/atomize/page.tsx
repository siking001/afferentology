"use client"

import { useState, useEffect, use } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sparkles, Link2, Copy, Check, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { AdminAuth } from "@/components/admin-auth"
import { Textarea } from "@/components/ui/textarea"

// Keywords mapped to internal article slugs
const KEYWORD_MAP: Record<string, { slug: string; title: string }> = {
  "withdrawal reflex": { slug: "withdrawal-reflex", title: "The Withdrawal Reflex" },
  "myotatic reflex": { slug: "myotatic-reflex", title: "The Myotatic Reflex" },
  "stretch reflex": { slug: "myotatic-reflex", title: "The Myotatic Reflex" },
  "50hz": { slug: "afferent-input-matters", title: "Why Afferent Input Matters" },
  "50 hz": { slug: "afferent-input-matters", title: "Why Afferent Input Matters" },
  "resting tone": { slug: "muscle-reflexes", title: "Muscle Reflexes" },
  "afferent input": { slug: "afferent-input-universal-treatment", title: "Afferent Input - Universal Treatment" },
  "muscle inhibition": { slug: "muscle-reflexes", title: "Muscle Reflexes" },
  "neurological inhibition": { slug: "afferent-input-matters", title: "Why Afferent Input Matters" },
  "muscle testing": { slug: "testing-the-adductors", title: "Testing the Adductors" },
  "precision muscle testing": { slug: "testing-the-adductors", title: "Testing the Adductors" },
  "dental": { slug: "slipped-disc-from-a-dental-crown", title: "Slipped Disc From A Dental Crown" },
  "filling": { slug: "touching-metal-filling-body-stronger", title: "Metal Fillings & Muscle Strength" },
  "earring": { slug: "earrings-hip-pain", title: "Earrings Causing Hip Pain" },
  "piercing": { slug: "muscle-weakness-caused-by-belly-piercing", title: "Muscle Weakness from Belly Piercing" },
  "low back pain": { slug: "acute-low-back-pain", title: "Acute Low Back Pain" },
  "back pain": { slug: "acute-low-back-pain", title: "Acute Low Back Pain" },
  "range of motion": { slug: "increased-range-motion-without-exercise", title: "Increased Range of Motion" },
}

interface LinkSuggestion {
  keyword: string
  slug: string
  title: string
  context: string
  alreadyLinked: boolean
}

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
}

export default function AtomizePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { toast } = useToast()
  const [article, setArticle] = useState<Article | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [suggestions, setSuggestions] = useState<LinkSuggestion[]>([])
  const [linkedinPost, setLinkedinPost] = useState("")
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  useEffect(() => {
    loadArticle()
  }, [id])

  async function loadArticle() {
    try {
      // Use API route with admin client to bypass RLS for unpublished articles
      const response = await fetch(`/api/articles/${id}`)
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || "Failed to fetch article")
      }

      const data = await response.json()

      if (data) {
        setArticle(data)
        analyzeContent(data)
        generateLinkedInPost(data)
      }
    } catch (error) {
      console.error("Error loading article:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load article.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  function analyzeContent(article: Article) {
    const content = (article.content + " " + article.title + " " + article.excerpt).toLowerCase()
    const foundSuggestions: LinkSuggestion[] = []

    for (const [keyword, target] of Object.entries(KEYWORD_MAP)) {
      // Skip if linking to itself
      if (target.slug === article.slug) continue

      const keywordLower = keyword.toLowerCase()
      const index = content.indexOf(keywordLower)
      
      if (index !== -1) {
        // Check if already linked in content
        const alreadyLinked = article.content.toLowerCase().includes(`href="/science/${target.slug}"`) ||
                             article.content.toLowerCase().includes(`href='/science/${target.slug}'`)
        
        // Get context around the keyword
        const start = Math.max(0, index - 40)
        const end = Math.min(content.length, index + keyword.length + 40)
        const context = "..." + content.slice(start, end).replace(keywordLower, `**${keyword.toUpperCase()}**`) + "..."

        foundSuggestions.push({
          keyword,
          slug: target.slug,
          title: target.title,
          context,
          alreadyLinked,
        })
      }
    }

    // Remove duplicates by slug
    const uniqueSuggestions = foundSuggestions.filter(
      (suggestion, index, self) =>
        index === self.findIndex((s) => s.slug === suggestion.slug)
    )

    setSuggestions(uniqueSuggestions)
  }

  function generateLinkedInPost(article: Article) {
    const hashtags = "#Afferentology #PainRelief #ManualTherapy #HealthcareProfessionals #ChronicPain #NeurologicalHealth"
    
    const post = `${article.title}

${article.excerpt || "Discover how understanding afferent input can transform your approach to patient care."}

Read the full article: https://afferentology.org/science/${article.slug}

${hashtags}`

    setLinkedinPost(post)
  }

  async function copyToClipboard(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates({ ...copiedStates, [key]: true })
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [key]: false })
      }, 2000)
      toast({
        title: "Copied!",
        description: "Content copied to clipboard.",
      })
    } catch {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      })
    }
  }

  function generateLinkHtml(suggestion: LinkSuggestion) {
    return `<a href="/science/${suggestion.slug}">${suggestion.keyword}</a>`
  }

  if (isLoading) {
    return (
      <AdminAuth>
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-center">Analyzing article...</p>
          </div>
        </div>
      </AdminAuth>
    )
  }

  if (!article) {
    return (
      <AdminAuth>
        <div className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="text-center">Article not found.</p>
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
            <Link href={`/admin/articles/${id}/edit`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Edit
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              Atomize Article
            </h1>
            <p className="text-muted-foreground mt-2">
              Internal linking suggestions and social media content for "{article.title}"
            </p>
          </div>

          {/* Internal Link Suggestions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                Internal Link Suggestions
              </CardTitle>
              <CardDescription>
                Keywords found that could link to other articles on your site
              </CardDescription>
            </CardHeader>
            <CardContent>
              {suggestions.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No internal linking opportunities found. The article may already be well-linked or uses unique terminology.
                </p>
              ) : (
                <div className="space-y-4">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        suggestion.alreadyLinked ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800" : "bg-background"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={suggestion.alreadyLinked ? "default" : "secondary"}>
                              {suggestion.keyword}
                            </Badge>
                            {suggestion.alreadyLinked && (
                              <Badge variant="outline" className="text-green-600 border-green-600">
                                <Check className="h-3 w-3 mr-1" />
                                Already Linked
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Links to: <strong>{suggestion.title}</strong>
                          </p>
                          <p className="text-xs text-muted-foreground font-mono bg-muted p-2 rounded">
                            {suggestion.context}
                          </p>
                        </div>
                        {!suggestion.alreadyLinked && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-transparent shrink-0"
                            onClick={() => copyToClipboard(generateLinkHtml(suggestion), `link-${index}`)}
                          >
                            {copiedStates[`link-${index}`] ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">Summary</p>
                <p className="text-sm text-muted-foreground">
                  Found {suggestions.length} linking opportunities. {suggestions.filter(s => s.alreadyLinked).length} already implemented, {suggestions.filter(s => !s.alreadyLinked).length} new suggestions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* LinkedIn Post Generator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn Post
              </CardTitle>
              <CardDescription>
                Ready-to-post content for promoting this article on LinkedIn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={linkedinPost}
                onChange={(e) => setLinkedinPost(e.target.value)}
                rows={10}
                className="font-sans mb-4"
              />
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="bg-transparent"
                  onClick={() => copyToClipboard(linkedinPost, "linkedin")}
                >
                  {copiedStates.linkedin ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy to Clipboard
                    </>
                  )}
                </Button>
                <Button asChild>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://afferentology.org/science/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Share on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminAuth>
  )
}
