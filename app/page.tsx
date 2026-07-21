import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Microscope } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Afferentology - Removing Nerve Interference for Chiropractors",
description: "Chiropractic training in identifying nerve interference and muscle inhibition. Learn how abnormal afferent input drives chronic pain and poor patient outcomes.",
  openGraph: {
    title: "Afferentology - Removing Nerve Interference for Chiropractors",
    description:
      "Expert training for health professionals in diagnosing and treating nerve interference and muscle inhibition.",
    type: "website",
    url: "https://www.afferentology.org",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afferentology - Healthcare Professional Training",
      },
    ],
  },
}

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "The Association of Afferentology",
    alternateName: "Afferentology",
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
    sameAs: [
  "https://learn.afferentology.org",
  "https://www.linkedin.com/company/7790996/",
  "https://www.youtube.com/@theafferentinputsolution4614",
],
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
                Restore True Function. Protect Every Body.
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl text-pretty leading-relaxed">
                Move beyond treating stuck joints and tight muscles. Discover the neurological reflexes that
                control power, posture, protection and performance &mdash; and learn how to facilitate immediate
                functional changes that last.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link href="https://learn.afferentology.org/essentials">
                    Explore Our Training Programs
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

        {/* Neurological Control of Structural Movement */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl text-balance">
                The Neurological Control of Movement
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                <p>
                  You&apos;ve adjusted the joint. You&apos;ve stretched the tight tissue. You&apos;ve built a rehab
                  program to restore strength and range of motion. And the correction still won&apos;t hold.
                </p>
                <p>
                  That&apos;s not a compliance problem, and it&apos;s not a strength problem in the way we usually think
                  about it. If a muscle is neurologically inhibited, no amount of exercise, stretching, or manual
                  treatment will restore its ability to support the skeleton or generate power &mdash; because the
                  limiting factor was never the tissue. It was the signal telling that tissue what to do.
                </p>
                <p>
                  Most muscle contraction isn&apos;t voluntary. It&apos;s automatic &mdash; a continuous, reflexive
                  response to position, movement, posture, and load, driven by feedback circuits that monitor the body
                  and its environment in real time. These circuits are what let a muscle brace before you consciously
                  register a threat, and what set baseline tone even when you&apos;re standing still. When the sensory
                  input feeding those circuits is abnormal or corrupted, the reflex doesn&apos;t fail loudly &mdash; it
                  fails quietly. The muscle goes weak, or it locks up tight and guarded, and the joint you&apos;ve
                  correctly adjusted has no reliable support either way.
                </p>
                <p>
                  This is the layer conventional treatment doesn&apos;t reach, because it isn&apos;t a structural layer.
                  It&apos;s a neurological one &mdash; and it&apos;s exactly what Afferentology is built to identify and
                  correct.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="https://learn.afferentology.org/essentials" target="_blank" rel="noopener noreferrer">
                    Enrol in Our Free Training
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Three Value Props */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="group border-none shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/icon-nerve-pathways.jpg"
                    alt="Person experiencing lower back pain with highlighted lumbar spine"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 pt-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">Make Sense of Pain & Injury</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Almost all chronic aches, pains and injury are associated with poor muscle tone. Proper treatment of
                    the underlying problem will return normal muscle tone and improve quality of life.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/icon-brain-spine.jpg"
                    alt="Full human nervous system with brain, spinal cord, and peripheral nerves"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 pt-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">Heal Faster</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For the brain and spinal cord to work properly they need afferent input from sensory neurons.
                    Inhibited muscles starve the brain of normal input, causing knock-on weaknesses throughout the body.
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-none shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/icon-active-body.jpg"
                    alt="Happy person enjoying outdoor physical activity and running"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 pt-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">Deliver Lasting Results!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Patients regain strength without added exercise, report less pain, and heal faster — building the kind of outcomes that keep them coming back and referring others.
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
                    alt="Practitioner demonstrating protective reflex testing during training"
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
