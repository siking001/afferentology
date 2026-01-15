import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    // Compare with environment variable
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ error: "Admin password not configured" }, { status: 500 })
    }

    const authenticated = password === adminPassword

    return NextResponse.json({ authenticated })
  } catch (error) {
    console.error("Admin verification error:", error)
    return NextResponse.json({ error: "Verification failed" }, { status: 500 })
  }
}
