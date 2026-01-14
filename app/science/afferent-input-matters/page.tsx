import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Why Afferent Input Matters | Afferentology",
  description:
    "Understanding why paying attention to afferent input is crucial for healthcare professionals examining and treating patients based on neurological input and output.",
  keywords: ["afferent input", "nervous system", "healthcare", "diagnosis", "treatment", "patient strength"],
}

export default function AfferentInputMattersPage() {
  return (
    <div className="flex flex-col">
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
          alt="Healthcare professional examining patient's nervous system"
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl">
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
