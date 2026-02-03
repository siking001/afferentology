import { createClient as createSupabaseClient } from "@supabase/supabase-js"

const getSupabaseClient = () => {
  // Store client on globalThis to survive hot module replacement
  if (!(globalThis as any).__supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase environment variables")
    }

    ;(globalThis as any).__supabase = createSupabaseClient(supabaseUrl, supabaseKey)
  }

  return (globalThis as any).__supabase
}

export function createClient() {
  return getSupabaseClient()
}
