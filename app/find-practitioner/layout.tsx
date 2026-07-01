import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Find a Practitioner",
  description:
    "Search for certified Afferentology practitioners near you. Find qualified professionals trained to diagnose and treat nerve interference and muscle inhibition.",
  alternates: {
    canonical: "/find-practitioner",
  },
  openGraph: {
    title: "Find a Certified Afferentology Practitioner",
    description: "Locate qualified Afferentology practitioners near you.",
    url: "https://www.afferentology.org/find-practitioner",
    type: "website",
  },
}

export default function FindPractitionerLayout({ children }: { children: React.ReactNode }) {
  return children
}
