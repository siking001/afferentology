import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Video } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Professional Training - Afferentology Courses",
  description:
    "Transform your practice with Afferentology training. Learn to diagnose and treat nerve interference, helping patients others can't. Start with our FREE course today.",
  keywords: [
    "healthcare professional training",
    "afferentology training",
    "nerve interference diagnosis",
    "muscle testing certification",
    "continuing education",
    "healthcare CE",
    "professional development",
  ],
  openGraph: {
    title: "Healthcare Professional Training in Afferentology",
    description:
      "Comprehensive training for healthcare professionals. Learn to identify and treat nerve interference effectively.",
    type: "website",
  },
}

export default function PractitionersPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Essentials of Musculospinal Reflexes",
    description: "Foundational course on afferent input and muscle inhibition for healthcare professionals",
    provider: {
      "@type": "Organization",
      name: "Afferentology",
      url: "https://afferentology.org",
    },
    isAccessibleForFree: true,
    educationalLevel: "Professional",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/healthcare-professional-teaching-muscle-testing-t.jpg"
              alt="Professional training session"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
                Transform Your Practice with Afferentology
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Are you a health professional seeking answers for difficult patients? Discover how abnormal afferent
                input is sabotaging your results and learn the skills to help patients others can't.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <a href="https://learn.afferentology.org/essentials" target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Start FREE Course
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                    View All Courses
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Afferentology Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Learn Afferentology?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Help the patients who don't respond to standard care and make your practice more successful.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8">
                    <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src="/icon-showing-upward-trending-success-graph-for-p.jpg"
                        alt="Better outcomes"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Better Patient Outcomes</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Successfully treat patients who haven't responded to conventional therapies. Identify and resolve
                      the underlying nerve interference that's been holding them back.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8">
                    <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src="/icon-showing-growing-group-of-satisfied-patients.jpg"
                        alt="Expand practice"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Expand Your Practice</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attract more patients through better results and word-of-mouth referrals. Stand out by offering
                      solutions that address problems other practitioners miss.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8">
                    <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src="/icon-showing-certification-award-badge-for-profe.jpg"
                        alt="Professional development"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Professional Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Gain advanced skills in neuromuscular assessment and treatment. Join a community of practitioners
                      committed to evidence-based, effective care.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8">
                    <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-lg">
                      <Image
                        src="/icon-showing-scientific-research-textbook-with-br.jpg"
                        alt="Science-based"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Science-Based Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Learn methods grounded in neuroscience and proven through clinical practice. Understand the
                      mechanisms behind muscle inhibition and afferent input dysfunction.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Training Options Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Training Programs</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive online courses designed for busy healthcare professionals.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="overflow-hidden border-2 border-primary/20">
                  <div className="relative aspect-video w-full md:hidden">
                    <Image
                      src="/online-course-video-thumbnail-showing-instructor.jpg"
                      alt="Essentials course"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="relative hidden h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg md:block">
                        <Image
                          src="/online-course-video-thumbnail-showing-instructor.jpg"
                          alt="Essentials course"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-foreground">Essentials of Musculospinal Reflexes</h3>
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                            FREE
                          </span>
                        </div>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                          Start with our foundational course covering the basics of afferent input and muscle
                          inhibition. Perfect for practitioners new to Afferentology.
                        </p>
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <a
                            href="https://learn.afferentology.org/essentials"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Enroll Now - FREE
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                        <BookOpen className="h-8 w-8 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-2xl font-bold text-foreground">Advanced Training Programs</h3>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                          Comprehensive courses covering advanced assessment techniques, treatment protocols, and
                          complex case management. Become a certified Afferentology practitioner.
                        </p>
                        <Button asChild variant="outline">
                          <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                            Browse All Courses
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">What You'll Learn</h2>

              <div className="mb-12 overflow-hidden rounded-lg border-2 border-primary/20 bg-white shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/infographic-showing-afferentology-training-pathway.jpg"
                    alt="Afferentology training pathway"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Muscle Testing Techniques",
                    description:
                      "Learn precise methods for identifying muscle inhibition and assessing afferent input dysfunction.",
                  },
                  {
                    title: "Neurological Assessment",
                    description:
                      "Understand how to evaluate the nervous system's role in chronic pain and movement dysfunction.",
                  },
                  {
                    title: "Treatment Protocols",
                    description:
                      "Master evidence-based interventions for restoring normal muscle tone and afferent input.",
                  },
                  {
                    title: "Clinical Reasoning",
                    description:
                      "Develop the ability to identify patterns of nerve interference and create effective treatment plans.",
                  },
                  {
                    title: "Case Management",
                    description:
                      "Learn how to handle complex cases and achieve results with patients who haven't responded to other treatments.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="flex gap-4 pt-6">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Video className="mx-auto mb-6 h-16 w-16" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Transform Your Practice?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              Start with our free introductory course and discover how Afferentology can help you achieve better
              outcomes for your patients.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="https://learn.afferentology.org/essentials" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Free Course Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
