import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { Resend } from "resend"

// Initialize Resend only if API key is available
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function GET() {
  try {
    const supabase = createAdminClient()

    const { data, error } = await supabase.from("practitioners").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching practitioners:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ practitioners: data || [] })
  } catch (error) {
    console.error("[v0] Error in admin practitioners fetch:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch practitioners" },
      { status: 500 },
    )
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json()

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 })
    }

    const supabase = createAdminClient()

    const { data, error } = await supabase
      .from("practitioners")
      .update({
        status,
        approved_at: status === "approved" ? new Date().toISOString() : null,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error("[v0] Error updating practitioner:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Send approval notification email to practitioner
    if (status === "approved" && data.email && resend) {
      try {
        console.log("[v0] Sending approval email to practitioner:", data.email)
        await resend.emails.send({
          from: "Afferentology Directory <onboarding@resend.dev>",
          to: data.email,
          subject: "Your Afferentology Practitioner Listing is Now Live!",
          html: `
            <h2>Congratulations, ${data.first_name}!</h2>
            <p>Great news! Your practitioner listing has been approved and is now live in the Afferentology directory.</p>
            
            <h3>Your Listing Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${data.first_name} ${data.last_name}</li>
              <li><strong>Clinic:</strong> ${data.clinic_name || "N/A"}</li>
              <li><strong>Location:</strong> ${data.city}, ${data.state}</li>
            </ul>

            <p>Potential clients can now find you through our practitioner search.</p>

            <p><a href="https://afferentology.org/practitioners" style="background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 16px;">View the Directory</a></p>

            <p style="margin-top: 24px; color: #666;">If you need to update your information at any time, you can resubmit your details using the same email address.</p>
            
            <p>Thank you for being part of the Afferentology community!</p>
          `,
        })
        console.log("[v0] Approval email sent successfully to:", data.email)
      } catch (emailError) {
        console.error("[v0] Error sending approval email:", emailError)
        // Don't fail the approval if email fails
      }
    }

    return NextResponse.json({ practitioner: data })
  } catch (error) {
    console.error("[v0] Error in admin practitioner update:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update practitioner" },
      { status: 500 },
    )
  }
}
