import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, AlertCircle, CheckCircle2, Activity } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why Are You Still In Pain? - Patient Information",
  description:
    "Discover how nerve interference and muscle inhibition could be causing your chronic pain. Learn about afferent input and how proper treatment can restore normal muscle tone for lasting relief.",
  keywords: [
    "chronic pain",
    "nerve interference",
    "muscle inhibition",
    "pain relief",
    "afferent input",
    "muscle tone",
    "pain treatment",
  ],
  openGraph: {
    title: "Why Are You Still In Pain? - Understanding Nerve Interference",
    description:
      "Learn how nerve interference and abnormal afferent input could be the missing piece in your pain recovery journey.",
    type: "article",
  },
}

export default function PatientsPage() {
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Understanding Chronic Pain and Nerve Interference",
    description: "Information about how nerve interference affects chronic pain and muscle function",
    about: {
      "@type": "MedicalCondition",
      name: "Nerve Interference and Muscle Inhibition",
      alternateName: "Abnormal Afferent Input",
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Afferentology Treatment",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
                Why Are You Still In Pain?
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                If you've tried everything and you're still suffering, the problem might not be where you think it is.
                Discover how nerve interference could be the missing piece of your recovery.
              </p>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/find-practitioner">
                  Find a Certified Practitioner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Understanding Pain Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Understanding Your Pain</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most chronic pain has a common underlying cause that traditional treatment often misses.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-2 border-primary/20">
                  <CardContent className="pt-8">
                    <AlertCircle className="mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-3 text-xl font-bold text-foreground">The Problem</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="mt-1 text-primary">•</span>
                        <span className="leading-relaxed">
                          Poor muscle tone leaves you vulnerable to sprains, strains, tears and other tissue damage
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 text-primary">•</span>
                        <span className="leading-relaxed">
                          Excessive muscle tone is often a sign of underlying inflammation the body is trying to avoid
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 text-primary">•</span>
                        <span className="leading-relaxed">
                          Inhibited muscles don't feel any different, so it's impossible to detect without proper
                          testing
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20">
                  <CardContent className="pt-8">
                    <CheckCircle2 className="mb-4 h-10 w-10 text-secondary" />
                    <h3 className="mb-3 text-xl font-bold text-foreground">The Solution</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="mt-1 text-secondary">✓</span>
                        <span className="leading-relaxed">
                          Proper treatment of the underlying problem will return normal muscle tone
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 text-secondary">✓</span>
                        <span className="leading-relaxed">
                          Restoring normal muscle tone improves the quality, quantity and enjoyment of life
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 text-secondary">✓</span>
                        <span className="leading-relaxed">
                          Eliminating muscle inhibition returns afferent input to normal
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Afferent Input Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <Activity className="mx-auto mb-6 h-16 w-16 text-primary" />
                <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                  What is Afferent Input?
                </h2>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  Understanding how your nervous system communicates is key to understanding your pain.
                </p>
              </div>

              <div className="mb-12 overflow-hidden rounded-lg border-2 border-primary/20 bg-white">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/medical-anatomical-diagram-showing-afferent-sensor.jpg"
                    alt="Afferent input pathway diagram"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="bg-muted/50 p-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Sensory neurons send afferent input from muscles to the brain and spinal cord
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      For the brain and spinal cord to work properly they have to receive nerve messages which are
                      produced by sensory neurons and arrive as{" "}
                      <strong className="text-foreground">AFFERENT INPUT</strong>.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Sensory neurons within muscles provide most of the input we need for body position sense,
                      co-ordination, movement and strength.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Inhibited muscles starve the brain and spinal cord of normal input, causing knock-on weaknesses
                      throughout the body.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Important:</strong> Inhibited muscles don't feel any different
                      to normal muscles, so it's impossible for us to know whether our muscles have the correct tone
                      without a skilled practitioner to test them for strength.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Life After Treatment</h2>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Our strength returns even without exercise",
                  "We feel younger and less prone to injury",
                  "Our joints stay flexible",
                  "Our organs and glands work better",
                  "We move fluently and with confidence",
                  "Joints keep their range of motion",
                  "We have far less pain",
                  "Injuries occur less frequently and they heal faster",
                ].map((benefit, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="flex items-start gap-3 pt-6">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-secondary to-accent py-16 text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Find Relief?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-secondary-foreground/90 leading-relaxed">
              Connect with a certified Afferentology practitioner who can help identify and treat your nerve
              interference.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/find-practitioner">
                  Find a Practitioner Near You
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
              >
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
