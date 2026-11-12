const MIN_FILL_TIME_MS = 4000
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"

type SpamCheckInput = {
  honeypot: unknown
  formStartedAt: unknown
  turnstileToken: unknown
  remoteIp: string | null
}

type SpamCheckResult = { ok: true } | { ok: false; reason: string; userMessage: string }

const GENERIC_MESSAGE = "We couldn't verify your submission. Please refresh the page and try again."

export async function checkSubmissionForSpam(input: SpamCheckInput): Promise<SpamCheckResult> {
  if (typeof input.honeypot === "string" && input.honeypot.trim() !== "") {
    return { ok: false, reason: "honeypot", userMessage: GENERIC_MESSAGE }
  }

  const startedAt = Number(input.formStartedAt)
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { ok: false, reason: "too-fast", userMessage: GENERIC_MESSAGE }
  }

  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return { ok: true }
  }

  if (typeof input.turnstileToken !== "string" || input.turnstileToken === "") {
    return { ok: false, reason: "captcha-missing", userMessage: "Please complete the verification check." }
  }

  const body = new URLSearchParams({ secret, response: input.turnstileToken })
  if (input.remoteIp) body.set("remoteip", input.remoteIp)

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body })
    const result = (await res.json()) as { success: boolean; "error-codes"?: string[] }
    if (!result.success) {
      return {
        ok: false,
        reason: `captcha-failed:${(result["error-codes"] ?? []).join(",")}`,
        userMessage: "Verification failed. Please complete the check again.",
      }
    }
  } catch {
    return { ok: false, reason: "captcha-unreachable", userMessage: GENERIC_MESSAGE }
  }

  return { ok: true }
}

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
