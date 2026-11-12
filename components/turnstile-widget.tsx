"use client"

import { useCallback, useEffect, useRef } from "react"
import Script from "next/script"

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAF-LaAviFuwyfKtF"

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string
  remove: (widgetId: string) => void
}

function getTurnstile() {
  return (window as unknown as { turnstile?: TurnstileApi }).turnstile
}

export function TurnstileWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  const renderWidget = useCallback(() => {
    const turnstile = getTurnstile()
    if (!turnstile || !containerRef.current || widgetIdRef.current) return
    widgetIdRef.current = turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "turnstile-spin-v2",
      theme: "light",
    })
  }, [])

  useEffect(() => {
    renderWidget()
    return () => {
      const turnstile = getTurnstile()
      if (turnstile && widgetIdRef.current) turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }
  }, [renderWidget])

  return (
    <div className="flex flex-col gap-2">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <p className="text-sm font-medium text-foreground">Verification *</p>
      <div ref={containerRef} data-action="turnstile-spin-v2" />
    </div>
  )
}
