import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { geocodeAddress } from "@/lib/geocoding"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log("[v0] Starting practitioner submission")

  try {
    const data = await request.json()
    console.log("[v0] Received data:", { email: data.email, clinic: data.clinic_name })

    // Geocode the address
    const fullAddress = `${data.street_address}, ${data.city}, ${data.state} ${data.zip_code}`
    console.log("[v0] Geocoding address:", fullAddress)
    const location = await geocodeAddress(fullAddress)
    console.log("[v0] Geocoded location:", location)

    const supabase = createAdminClient()

    console.log("[v0] Attempting to insert practitioner into database")
    const { data: practitioner, error } = await supabase
      .from("practitioners")
      .insert({
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
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Database error:", error.message)
      return NextResponse.json({ error: error.message || "Failed to submit application" }, { status: 500 })
    }

    console.log("[v0] Successfully inserted practitioner:", practitioner.id)

    try {
      console.log("[v0] Attempting to send email notification")
      await resend.emails.send({
        from: "Afferentology Directory <onboarding@resend.dev>",
        to: "info@afferentology.org",
        subject: `New Practitioner Application - ${data.clinic_name}`,
        html: `
          <h2>New Practitioner Application Submitted</h2>
          <p>A new practitioner has applied to join the directory:</p>
          
          <h3>Practitioner Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${data.first_name} ${data.last_name}</li>
            <li><strong>Clinic:</strong> ${data.clinic_name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone || "N/A"}</li>
            <li><strong>Location:</strong> ${data.city}, ${data.state}</li>
            <li><strong>Years Experience:</strong> ${data.years_experience || "N/A"}</li>
          </ul>

          <p><a href="https://afferentology.org/admin/practitioners" style="background-color: #1e40af; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 16px;">Review Application</a></p>
        `,
      })
      console.log("[v0] Email sent successfully")
    } catch (emailError) {
      console.error("[v0] Error sending notification email:", emailError)
      // Don't fail the submission if email fails
    }

    return NextResponse.json({ success: true, practitioner })
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
