import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Submit Your Practitioner Application",
  description:
    "Apply to join the Association of Certified Afferentologists. Submit your details to become a listed Afferentology practitioner.",
  alternates: {
    canonical: "/practitioners/submit",
  },
  openGraph: {
    title: "Submit Your Practitioner Application | Afferentology",
    description: "Apply to become a listed, certified Afferentology practitioner.",
    url: "https://www.afferentology.org/practitioners/submit",
    type: "website",
  },
}

export default function SubmitPractitionerLayout({ children }: { children: React.ReactNode }) {
  return children
}
