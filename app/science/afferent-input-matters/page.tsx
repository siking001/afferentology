import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Why Afferent Input Matters - Understanding Neurological Assessment | Afferentology",
  description:
    "Discover why paying attention to afferent input is crucial for healthcare professionals. Learn how neurological assessment and the nervous system defense mechanism can prevent injuries and build stronger, more resilient patients.",
  keywords: [
    "afferent input",
    "nervous system assessment",
    "neurological diagnosis",
    "healthcare diagnosis",
    "patient strength testing",
    "injury prevention",
    "nervous system defense",
    "afferentology",
    "muscle testing",
    "wellness optimization",
  ],
  openGraph: {
    title: "Why Afferent Input Matters - Neurological Assessment for Healthcare",
    description:
      "Learn how afferent input assessment helps healthcare professionals identify weaknesses and build resilient patients through neurological testing.",
    type: "article",
    url: "https://afferentology.org/science/afferent-input-matters",
    images: [
      {
        url: "https://afferentology.org/images/afferent-input-matters-header.webp",
        width: 1200,
        height: 630,
        alt: "Healthcare professional examining patient's nervous system",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Afferent Input Matters - Neurological Assessment",
    description:
      "Discover how healthcare professionals use afferent input to diagnose, prevent injuries, and build stronger patients.",
  },
}

export default function AfferentInputMattersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why Afferent Input Matters",
    description:
      "Understanding why paying attention to afferent input is crucial for healthcare professionals examining and treating patients based on neurological input and output.",
    author: {
      "@type": "Person",
      name: "Simon King",
      jobTitle: "B.App.Sc.(Chiro)",
    },
    publisher: {
      "@type": "Organization",
      name: "Afferentology",
      url: "https://afferentology.org",
    },
    image: "https://afferentology.org/images/afferent-input-matters-header.webp",
    datePublished: "2024-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://afferentology.org/science/afferent-input-matters",
    },
  }

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-br from-primary to-secondary py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link
            href="/science"
            className="mb-4 inline-flex items-center text-sm text-primary-foreground/90 hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Science
          </Link>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">Foundation Article</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl text-balance">
              Why Afferent Input Matters
            </h1>
            <p className="text-lg text-primary-foreground/90">By Simon King B.App.Sc.(Chiro)</p>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/images/afferent-input-matters-header.webp"
          alt="Healthcare professional performing neurological examination and assessing patient's nervous system function to identify weaknesses"
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="py-16">
        <div className="container mx-auto px-4 flex justify-center"> {/* Added flex/justify-center */}
    <div className="max-w-4xl w-full [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-foreground [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:pb-2 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-foreground/80 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-muted/30 [&_blockquote]:p-6 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:rounded-r-lg [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:text-foreground/80 [&_strong]:text-foreground [&_strong]:font-bold [&_a]:text-primary [&_a]:underline hover:[&_a]:text-secondary">
            <h2>Why Paying Attention to Afferent Input is Important</h2>

            <p className="italic text-xl border-l-4 border-primary pl-6 mb-12">
        In a world focused on treating symptoms, Afferentology shifts the gaze toward the source: the neurological data that dictates every movement, reflex, and healing response in the human body.
      </p>

      <p>Afferentology provides doctors and healthcare professionals with a sophisticated framework to examine, diagnose, and treat patients based on the constant dialogue between neurological input and output. It isn't just anatomy; it is the study of how the body functions in real-time.</p>

      <blockquote>
        "Our health depends on how well our bodies handle outside forces. Afferentology identifies the weakest point in that defense, allowing us to repair the software before the hardware breaks."
      </blockquote>

      <h2>The Nervous System: Your Primary Defense</h2>
      <p>Afferentology allows qualified professionals to test the body's main defense system: the nervous system. By auditing the <strong>50Hz resting tone</strong>, clinicians can find the hidden weaknesses that make a patient susceptible to chronic injury or systemic decline.</p>

      <p>Once a neurological weakness is identified, the practitioner can work backward to find the <strong>Afferent Input</strong> responsible for the glitch—the "Nail in the Foot" that is sending threat data to the brain and triggering a <strong>Withdrawal Reflex</strong>.</p>

      <h2>Building Resilience, Not Just Strength</h2>
      <p>By eliminating these neurological blind spots, a patient becomes stronger in every dimension: physically, mentally, and chemically. This is not the "hardware" strength built in a gym; this is the natural, resilient strength of a high-functioning nervous system.</p>

      <ul>
        <li><strong>Software Restoration:</strong> Resetting the cortical drive to inhibited muscles.</li>
        <li><strong>Stress Response:</strong> Teaching the body to respond to external forces appropriately.</li>
        <li><strong>True Prevention:</strong> Identifying the weakest link before it manifests as a clinical diagnosis.</li>
      </ul>

      <h2>A New Standard for Prevention and Treatment</h2>
      <p>While the Afferent Input system is a powerful diagnostic tool for treatment, its greatest advantage lies in <strong>restoration</strong>. By returning the body to optimal function, we build resilient patients who don't just recover from injury—they prevent it.</p>

      <p>Patients who have no neurological weaknesses are fundamentally stronger, healthier, and more capable of handling the stresses of life. That is the goal of Afferentology.</p>

            <div className="mt-12 rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-2xl font-bold">Learn More About Afferentology</h3>
              <p className="mb-6 text-muted-foreground">
                Discover how to apply these principles in your practice through our comprehensive training programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/practitioners">Practitioner Training</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/science">More Science Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
