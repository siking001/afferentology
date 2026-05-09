"use client"

import { useState, useEffect, useCallback } from "react"
import { Search, X, FileText, Loader2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string | null
  category: string | null
  featured_image_url: string | null
  published_at: string | null
}

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    const timeoutId = setTimeout(async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/articles/search?q=${encodeURIComponent(query)}`)
        if (response.ok) {
          const data = await response.json()
          setResults(data)
        }
      } catch (error) {
        console.error("Search failed:", error)
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [query])

  // Keyboard shortcut to open search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setQuery("")
    setResults([])
  }, [])

  return (
    <>
      {/* Search Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Search articles"
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Search Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Dialog */}
          <div className="relative mx-auto mt-[10vh] w-full max-w-2xl px-4">
            <div className="overflow-hidden rounded-lg border border-border bg-background shadow-2xl">
              {/* Search Input */}
              <div className="flex items-center border-b border-border px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input
                  autoFocus
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent px-3 py-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.length < 2 ? (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    <Search className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">Type at least 2 characters to search</p>
                    <p className="mt-2 text-xs">
                      Press <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Esc</kbd> to close
                    </p>
                  </div>
                ) : results.length === 0 && !isLoading ? (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    <FileText className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">No articles found for &quot;{query}&quot;</p>
                    <p className="mt-1 text-xs">Try different keywords</p>
                  </div>
                ) : (
                  <ul className="divide-y divide-border">
                    {results.map((article) => (
                      <li key={article.id}>
                        <Link
                          href={`/science/${article.slug}`}
                          onClick={handleClose}
                          className="flex items-start gap-4 px-4 py-3 transition-colors hover:bg-muted/50"
                        >
                          {article.featured_image_url ? (
                            <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                              <Image
                                src={article.featured_image_url}
                                alt=""
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="flex h-16 w-24 flex-shrink-0 items-center justify-center rounded-md bg-muted">
                              <FileText className="h-6 w-6 text-muted-foreground" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            {article.category && (
                              <span className="text-xs font-medium uppercase tracking-wide text-primary">
                                {article.category}
                              </span>
                            )}
                            <h3 className="font-semibold text-foreground line-clamp-1">
                              {article.title}
                            </h3>
                            {article.excerpt && (
                              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                {article.excerpt}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer hint */}
              <div className="border-t border-border bg-muted/30 px-4 py-2">
                <p className="text-xs text-muted-foreground">
                  <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">Ctrl</kbd>
                  {" + "}
                  <kbd className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">K</kbd>
                  {" to search anywhere"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
