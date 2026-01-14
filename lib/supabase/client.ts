import { createBrowserClient } from "@supabase/ssr"

const getSupabaseClient = () => {
  if (typeof window === "undefined") {
    throw new Error("createClient can only be used in browser context")
  }

  // Store client on globalThis to survive hot module replacement
  if (!(globalThis as any).__supabase) {
    ;(globalThis as any).__supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return document.cookie
              .split("; ")
              .find((row) => row.startsWith(`${name}=`))
              ?.split("=")[1]
          },
          set(name: string, value: string, options: any) {
            document.cookie = `${name}=${value}; path=/; ${options.maxAge ? `max-age=${options.maxAge}` : ""}`
          },
          remove(name: string, options: any) {
            document.cookie = `${name}=; path=/; max-age=0`
          },
        },
      },
    )
  }

  return (globalThis as any).__supabase
}

export function createClient() {
  return getSupabaseClient()
}
