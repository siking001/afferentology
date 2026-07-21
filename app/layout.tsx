import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingChatbot } from "@/components/floating-chatbot"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afferentology.org"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Afferentology - Transform Patient Care Through Nerve Science",
    template: "%s | Afferentology",
  },
  description:
    "Expert training for health professionals in diagnosing and treating nerve interference and muscle inhibition through evidence-based afferentology.",
  keywords: [
    "afferentology",
    "nerve interference",
    "afferent input",
    "muscle inhibition",
    "chronic pain treatment",
    "muscle tone",
    "nerve therapy",
    "pain management",
    "healthcare practitioner training",
    "sensory neuron therapy",
  ],
  authors: [{ name: "Simon King" }, { name: "The Association of Certified Afferentologists" }],
  creator: "The Association of Certified Afferentologists",
  publisher: "Afferentology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.afferentology.org",
    title: "Afferentology - Transform Patient Care Through Nerve Science",
    description:
      "Expert training for health professionals in diagnosing and treating nerve interference and muscle inhibition.",
    siteName: "Afferentology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afferentology - Healthcare Professional Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afferentology - Transform Patient Care",
    description: "Expert training in diagnosing and treating nerve interference for healthcare professionals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingChatbot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
