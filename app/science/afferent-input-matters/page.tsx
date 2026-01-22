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
        <div className="container mx-auto px-4">
          <div className="max-w-none [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-foreground [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:pb-2 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-foreground/80 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-muted/30 [&_blockquote]:p-6 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:rounded-r-lg [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:text-foreground/80 [&_strong]:text-foreground [&_strong]:font-bold [&_a]:text-primary [&_a]:underline hover:[&_a]:text-secondary">
            <h2>Why Paying Attention to Afferent Input is Important</h2>

            <p>
              Afferentology is a way for doctors and other healthcare professionals to examine, diagnose and treat
              patients based on neurological input and output. It uses knowledge about the body's anatomy, nerves, and
              how the body works in new and helpful ways.
            </p>

            <p>
              Afferentology helps qualified healthcare professionals examine and test their patients' main defense
              system, which is the nervous system. By doing this, they can find any weaknesses that could make the
              patients more likely to get sick or injured. This analysis helps them find the best solution for each
              patient.
            </p>

            <p>
              Our health depends on how well our bodies can handle outside forces. The Afferent Input Solution gives
              healthcare professionals the tools to assess a patient's ability to handle these forces by looking for
              their biggest weakness or weakest point.
            </p>

            <p>
              Once the weakness is found, the healthcare professional can work backwards to find a solution to the
              problem.
            </p>

            <p>Patients who have no weaknesses are generally very strong and healthy, which is how it should be.</p>

            <h3>Building Stronger, More Resilient Patients</h3>

            <p>
              By eliminating weaknesses in any patient, they become stronger in every way – physically, mentally,
              emotionally, and chemically. Being stronger helps patients handle the stresses of life, no matter what
              they are doing or what condition they have.
            </p>

            <p>
              No other diagnostic system allows healthcare professionals to test for the normal, natural strength that
              comes from having a well-functioning nervous system. This strength is different from the strength that
              comes from exercise.
            </p>

            <h3>Prevention and Treatment</h3>

            <p>
              The Afferent Input system is always helpful in diagnosing and planning treatment. It builds strong and
              resilient patients who can overcome any health challenge. It helps them respond to stress appropriately
              and heal quickly. While it's very effective for treatment, its main advantage is in restoring optimal
              function to prevent future injuries and illness.
            </p>

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
