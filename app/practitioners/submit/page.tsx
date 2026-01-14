"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SubmitPractitionerPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      clinic_name: formData.get("clinic_name"),
      website: formData.get("website"),
      street_address: formData.get("street_address"),
      city: formData.get("city"),
      state: formData.get("state"),
      zip_code: formData.get("zip_code"),
      years_experience: formData.get("years_experience")
        ? Number.parseInt(formData.get("years_experience") as string)
        : null,
      certifications: formData.get("certifications"),
      specialties: formData.get("specialties"),
      bio: formData.get("bio"),
    }

    try {
      const response = await fetch("/api/practitioners/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit")
      }

      setIsSubmitted(true)
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and contact you soon.",
      })
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 py-16">
        <Card className="w-full max-w-md">
          <CardContent className="pt-12 pb-12 text-center">
            <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-secondary" />
            <h2 className="mb-4 text-2xl font-bold text-foreground">Thank You for Applying!</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Your application has been received and is pending approval. We will review your information and contact
              you at <strong>{}</strong> within 2-3 business days.
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              Once approved, your practice will appear in our practitioner directory for patients to find you.
            </p>
            <Button onClick={() => router.push("/")} className="bg-primary hover:bg-primary/90">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Join Our Practitioner Directory</CardTitle>
              <CardDescription className="text-base">
                Submit your information to be listed in our directory of certified Afferentology practitioners.
                Applications are reviewed for approval.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="first_name">First Name *</Label>
                      <Input id="first_name" name="first_name" required />
                    </div>
                    <div>
                      <Label htmlFor="last_name">Last Name *</Label>
                      <Input id="last_name" name="last_name" required />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" />
                    </div>
                  </div>
                </div>

                {/* Practice Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Practice Information</h3>
                  <div>
                    <Label htmlFor="clinic_name">Clinic Name *</Label>
                    <Input id="clinic_name" name="clinic_name" required />
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" name="website" type="url" placeholder="https://" />
                  </div>
                  <div>
                    <Label htmlFor="years_experience">Years of Experience</Label>
                    <Input id="years_experience" name="years_experience" type="number" min="0" />
                  </div>
                  <div>
                    <Label htmlFor="certifications">Certifications</Label>
                    <Input id="certifications" name="certifications" placeholder="e.g., Certified Afferentologist" />
                  </div>
                  <div>
                    <Label htmlFor="specialties">Specialties</Label>
                    <Input id="specialties" name="specialties" placeholder="e.g., Sports Injuries, Chronic Pain" />
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Practice Address</h3>
                  <div>
                    <Label htmlFor="street_address">Street Address *</Label>
                    <Input id="street_address" name="street_address" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" name="city" required />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" name="state" required />
                    </div>
                    <div>
                      <Label htmlFor="zip_code">ZIP Code *</Label>
                      <Input id="zip_code" name="zip_code" required />
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <Label htmlFor="bio">Professional Bio</Label>
                  <Textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell patients about your practice, approach, and experience with Afferentology..."
                    rows={5}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
