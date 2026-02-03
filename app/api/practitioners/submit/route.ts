import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { geocodeAddress } from "@/lib/geocoding"
import { Resend } from "resend"

// Initialize Resend only if API key is available
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(request: Request) {
  console.log("[v0] Starting practitioner submission")
  console.log("[v0] Resend configured:", !!resend)
  console.log("[v0] Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "Set" : "Missing")
  console.log("[v0] Supabase Service Role:", process.env.SUPABASE_SERVICE_ROLE_KEY ? "Set" : "Missing")

  try {
    const data = await request.json()
    console.log("[v0] Received data:", { email: data.email, clinic: data.clinic_name })

    const supabase = createAdminClient()

    const { data: existingPractitioner } = await supabase
      .from("practitioners")
      .select("id, status, first_name, last_name")
      .eq("email", data.email)
      .single()

    const isUpdate = !!existingPractitioner
    console.log("[v0] Existing practitioner found:", isUpdate)

    console.log("[v0] Geocoding address components:", {
      street: data.street_address,
      city: data.city,
      state: data.state,
      postal: data.zip_code,
      country: data.country,
    })
    const location = await geocodeAddress(
      data.street_address,
      data.city,
      data.state,
      data.zip_code,
      data.country || "United States",
    )
    console.log("[v0] Geocoded location:", location)

    if (!location) {
      console.warn("[v0] Geocoding failed for address components")
    }

    const practitionerData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      clinic_name: data.clinic_name,
      website: data.website,
      street_address: data.street_address,
      city: data.city,
      state: data.state,
      zip_code: data.zip_code,
      country: data.country || "United States",
      latitude: location?.lat,
      longitude: location?.lng,
      certifications: data.certifications ? [data.certifications] : [],
      years_experience: data.years_experience,
      specialties: data.specialties ? [data.specialties] : [],
      bio: data.bio,
    }

    let practitioner

    if (isUpdate) {
      console.log("[v0] Updating existing practitioner:", existingPractitioner.id)
      const { data: updated, error } = await supabase
        .from("practitioners")
        .update(practitionerData)
        .eq("id", existingPractitioner.id)
        .select()
        .single()

      if (error) {
        console.error("[v0] Database error:", error.message)
        return NextResponse.json({ error: error.message || "Failed to update information" }, { status: 500 })
      }

      practitioner = updated
      console.log("[v0] Successfully updated practitioner:", practitioner.id)
    } else {
      console.log("[v0] Creating new practitioner")
      const { data: created, error } = await supabase
        .from("practitioners")
        .insert({
          ...practitionerData,
          status: "pending",
        })
        .select()
        .single()

      if (error) {
        console.error("[v0] Database error:", error.message)
        return NextResponse.json({ error: error.message || "Failed to submit application" }, { status: 500 })
      }

      practitioner = created
      console.log("[v0] Successfully inserted practitioner:", practitioner.id)
    }

    // Send email notification
    if (resend) {
      try {
        console.log("[v0] Attempting to send email notification to info@afferentology.org")
        const emailResult = await resend.emails.send({
          from: "Afferentology Directory <onboarding@resend.dev>",
          to: "info@afferentology.org",
          subject: isUpdate
            ? `Practitioner Information Updated - ${data.clinic_name}`
            : `New Practitioner Application - ${data.clinic_name}`,
          html: `
            <h2>${isUpdate ? "Practitioner Information Updated" : "New Practitioner Application Submitted"}</h2>
            <p>${
              isUpdate
                ? `${data.first_name} ${data.last_name} has updated their practitioner information:`
                : "A new practitioner has applied to join the directory:"
            }</p>
            
            <h3>Practitioner Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${data.first_name} ${data.last_name}</li>
              <li><strong>Clinic:</strong> ${data.clinic_name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone || "N/A"}</li>
              <li><strong>Location:</strong> ${data.city}, ${data.state}, ${data.country}</li>
              <li><strong>Years Experience:</strong> ${data.years_experience || "N/A"}</li>
              ${isUpdate ? `<li><strong>Current Status:</strong> ${existingPractitioner.status}</li>` : ""}
            </ul>

            <p><a href="https://afferentology.org/admin/practitioners" style="background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 16px;">${
              isUpdate ? "View Updated Information" : "Review Application"
            }</a></p>
          `,
        })
        console.log("[v0] Email sent successfully:", emailResult)
      } catch (emailError) {
        console.error("[v0] Error sending notification email:", emailError)
        // Don't fail the submission if email fails
      }
    } else {
      console.warn("[v0] Resend not configured - RESEND_API_KEY missing, skipping email notification")
    }

    return NextResponse.json({ success: true, practitioner, isUpdate })
  } catch (error) {
    console.error("[v0] Error in practitioner submission:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to submit application",
      },
      { status: 500 },
    )
  }
}
