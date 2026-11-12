"use client"

import Script from "next/script"

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export function TurnstileWidget() {
  if (!siteKey) return null

  return (
    <div className="flex flex-col gap-2">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <p className="text-sm font-medium text-foreground">Verification *</p>
      <div className="cf-turnstile" data-sitekey={siteKey} data-theme="light" />
    </div>
  )
}
