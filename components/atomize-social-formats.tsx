"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Copy,
  Check,
  Loader2,
  RefreshCw,
  ExternalLink,
  Linkedin,
  Facebook,
  Mail,
  Newspaper,
  Save,
  AlertCircle,
  Share2,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type FormatKey = "linkedin" | "facebook" | "substack" | "email"

interface ArticleInput {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  linkedin_post?: string | null
  facebook_post?: string | null
  substack_intro?: string | null
  email_snippet?: string | null
}

interface FormatConfig {
  key: FormatKey
  label: string
  column: "linkedin_post" | "facebook_post" | "substack_intro" | "email_snippet"
  description: string
  icon: React.ComponentType<{ className?: string }>
  rows: number
}

const FORMATS: FormatConfig[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    column: "linkedin_post",
    description: "Professional thought-leadership post with a link and 5 hashtags.",
    icon: Linkedin,
    rows: 12,
  },
  {
    key: "facebook",
    label: "Facebook",
    column: "facebook_post",
    description: "Short, conversational post (2-3 sentences) with a link and 3 hashtags.",
    icon: Facebook,
    rows: 6,
  },
  {
    key: "substack",
    label: "Substack",
    column: "substack_intro",
    description: "Newsletter intro (150-200 words) ending with the article link.",
    icon: Newspaper,
    rows: 12,
  },
  {
    key: "email",
    label: "Podia Email",
    column: "email_snippet",
    description: "Warm, personal note (100-150 words) from Simon King with a soft CTA.",
    icon: Mail,
    rows: 10,
  },
]

interface FormatState {
  text: string
  loading: boolean
  error: string | null
}

export function AtomizeSocialFormats({ article }: { article: ArticleInput }) {
  const { toast } = useToast()

  const [states, setStates] = useState<Record<FormatKey, FormatState>>({
    linkedin: { text: "", loading: false, error: null },
    facebook: { text: "", loading: false, error: null },
    substack: { text: "", loading: false, error: null },
    email: { text: "", loading: false, error: null },
  })
  const [copied, setCopied] = useState<Record<string, boolean>>({})
  const [saving, setSaving] = useState(false)
  const initialized = useRef(false)

  const articleUrl = `https://www.afferentology.org/science/${article.slug}`

  function setFormat(key: FormatKey, patch: Partial<FormatState>) {
    setStates((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }))
  }

  async function generate(key: FormatKey) {
    setFormat(key, { loading: true, error: null })
    try {
      const res = await fetch("/api/atomize/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          format: key,
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          slug: article.slug,
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || "Generation failed")
      }

      const data = await res.json()
      setFormat(key, { text: data.text, loading: false, error: null })
    } catch (error) {
      setFormat(key, {
        loading: false,
        error: error instanceof Error ? error.message : "Failed to generate content.",
      })
    }
  }

  // On mount: use saved content when present, otherwise generate.
  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    const savedMap: Record<FormatKey, string | null | undefined> = {
      linkedin: article.linkedin_post,
      facebook: article.facebook_post,
      substack: article.substack_intro,
      email: article.email_snippet,
    }

    FORMATS.forEach(({ key }) => {
      const saved = savedMap[key]
      if (saved && saved.trim().length > 0) {
        setFormat(key, { text: saved, loading: false, error: null })
      } else {
        generate(key)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function copyToClipboard(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000)
      toast({ title: "Copied!", description: "Content copied to clipboard." })
    } catch {
      toast({ title: "Error", description: "Failed to copy to clipboard.", variant: "destructive" })
    }
  }

  async function saveAll() {
    setSaving(true)
    try {
      const res = await fetch("/api/articles/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: article.id,
          linkedin_post: states.linkedin.text,
          facebook_post: states.facebook.text,
          substack_intro: states.substack.text,
          email_snippet: states.email.text,
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || "Failed to save")
      }

      toast({ title: "Saved", description: "All four social formats were saved to this article." })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save formats.",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  function shareUrl(key: FormatKey): string | null {
    if (key === "linkedin") {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`
    }
    if (key === "facebook") {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`
    }
    return null
  }

  const anyLoading = FORMATS.some(({ key }) => states[key].loading)

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Social Formats
            </CardTitle>
            <CardDescription>
              AI-generated content for LinkedIn, Facebook, Substack, and your Podia email list.
            </CardDescription>
          </div>
          <Button onClick={saveAll} disabled={saving || anyLoading}>
            {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            Save All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="linkedin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
            {FORMATS.map(({ key, label, icon: Icon }) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {FORMATS.map(({ key, label, description, rows }) => {
            const state = states[key]
            const share = shareUrl(key)
            return (
              <TabsContent key={key} value={key} className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">{description}</p>

                {state.loading ? (
                  <div className="flex items-center justify-center gap-2 rounded-lg border bg-muted/40 py-16 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Generating {label} content...</span>
                  </div>
                ) : state.error ? (
                  <div className="flex flex-col items-center gap-3 rounded-lg border border-destructive/40 bg-destructive/10 py-10 px-4 text-center">
                    <div className="flex items-center gap-2 text-destructive">
                      <AlertCircle className="h-5 w-5" />
                      <span className="font-medium">Couldn&apos;t generate {label} content</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{state.error}</p>
                    <Button variant="outline" size="sm" onClick={() => generate(key)}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Try again
                    </Button>
                  </div>
                ) : (
                  <>
                    <Textarea
                      value={state.text}
                      onChange={(e) => setFormat(key, { text: e.target.value })}
                      rows={rows}
                      className="font-sans mb-4"
                      placeholder={`${label} content will appear here...`}
                    />
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        className="bg-transparent"
                        onClick={() => copyToClipboard(state.text, key)}
                        disabled={!state.text}
                      >
                        {copied[key] ? (
                          <>
                            <Check className="mr-2 h-4 w-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                          </>
                        )}
                      </Button>

                      <Button variant="outline" className="bg-transparent" onClick={() => generate(key)}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Regenerate
                      </Button>

                      {share && (
                        <Button asChild>
                          <a href={share} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Share on {label}
                          </a>
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </TabsContent>
            )
          })}
        </Tabs>
      </CardContent>
    </Card>
  )
}
