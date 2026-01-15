import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Microscope } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Afferentology - Transform Patient Care Through Nerve Science",
  description:
    "Expert training for health professionals in diagnosing and treating nerve interference. Discover how abnormal afferent input affects chronic pain, muscle tone, and patient outcomes.",
  openGraph: {
    title: "Afferentology - Transform Patient Care Through Nerve Science",
    description:
      "Expert training for health professionals in diagnosing and treating nerve interference and muscle inhibition.",
    type: "website",
    url: "https://afferentology.org",
  },
}

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Afferentology",
    alternateName: "The Association of Certified Afferentologists",
    url: "https://afferentology.org",
    logo: "https://afferentology.org/logo.png",
    description:
      "Expert training for health professionals in diagnosing and treating nerve interference through afferentology",
    founder: {
      "@type": "Person",
      name: "Simon King",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@afferentology.org",
      contactType: "Customer Service",
    },
    sameAs: ["https://learn.afferentology.org"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-primary-foreground md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/professional-healthcare-practitioner-testing-patie.jpg"
              alt="Healthcare professional treating patient"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
                Transform Your Patient Care with Afferentology
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl text-pretty leading-relaxed">
                Are you equipped to diagnose and treat <span className="font-semibold">nerve interference</span>{" "}
                effectively?
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="https://learn.afferentology.org/essentials">
                    Start with our FREE course
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/find-practitioner">Find a Practitioner</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Three Value Props */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src="/medical-icon-showing-nervous-system-nerve-pathways.jpg"
                      alt="Nerve pathways"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Make Sense of Pain & Injury</h3>
                  <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                    Almost all chronic aches, pains and injury are associated with poor muscle tone. Proper treatment of
                    the underlying problem will return normal muscle tone and improve quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src="/medical-icon-showing-brain-and-spinal-cord-connect.jpg"
                      alt="Brain and spine connection"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Heal Faster</h3>
                  <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                    For the brain and spinal cord to work properly they need afferent input from sensory neurons.
                    Inhibited muscles starve the brain of normal input, causing knock-on weaknesses throughout the body.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                    <Image
                      src="/medical-icon-showing-healthy-active-body-in-motion.jpg"
                      alt="Body in motion"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">And Suffer Less!</h3>
                  <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                    Our strength returns even without exercise. We feel younger, less prone to injury. Our joints stay
                    flexible, organs work better, and we have far less pain with injuries healing faster.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Two Column CTA Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/photodune-3821116-back-pain-s-1.jpg"
                    alt="Person experiencing back pain"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <Users className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-3 text-2xl font-bold text-foreground">In Pain?</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Are you a patient looking for answers? Use these pages to find out what you can do yourself, or find
                    a practitioner to help you.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/patients">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/img-7789-202.jpg"
                    alt="Practitioner demonstrating precision muscle testing during training"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <BookOpen className="mb-4 h-10 w-10 text-secondary" />
                  <h3 className="mb-3 text-2xl font-bold text-foreground">In Practice?</h3>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Are you a Health Professional wanting answers to difficult patients? Discover how abnormal afferent
                    input is sabotaging your results and hurting your patients.
                  </p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <Link href="/practitioners">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Science CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-primary to-secondary shadow-xl">
              <CardContent className="p-8 text-center text-primary-foreground md:p-12">
                <Microscope className="mx-auto mb-6 h-16 w-16" />
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Explore The Science</h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
                  Dive deep into the research and evidence behind Afferentology. Understand how sensory input and muscle
                  tone affect overall health and recovery.
                </p>
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/science">
                    View Scientific Resources
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
