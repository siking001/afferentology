"use client"

import { useEffect } from "react"

export function ArticleViewTracker({ articleId }: { articleId: string }) {
  useEffect(() => {
    const body = JSON.stringify({ id: articleId })
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/articles/view", new Blob([body], { type: "application/json" }))
    if (!sent) {
      fetch("/api/articles/view", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {})
    }
  }, [articleId])

  return null
}
