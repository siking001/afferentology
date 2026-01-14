import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - The Association of Certified Afferentologists",
  description:
    "Learn about the Association of Certified Afferentologists. Our mission is to advance understanding and treatment of nerve interference through education, research, and professional development.",
  keywords: ["afferentology association", "certified afferentologists", "Simon King", "healthcare organization"],
  openGraph: {
    title: "About The Association of Certified Afferentologists",
    description: "Advancing nerve interference treatment through education, certification, and professional community.",
    type: "website",
  },
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "The Association of Certified Afferentologists",
    description:
      "Professional organization advancing understanding and treatment of nerve interference through education and certification",
    founder: {
      "@type": "Person",
      name: "Simon King",
      url: "https://afferentology.org/simon-king",
    },
    url: "https://afferentology.org/about",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
                The Association of Certified Afferentologists
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Advancing the understanding and treatment of nerve interference through education, research, and
                professional development.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-16 text-center">
                <Target className="mx-auto mb-6 h-16 w-16 text-primary" />
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Mission</h2>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  To improve patient outcomes worldwide by training healthcare professionals to identify and treat nerve
                  interference and its effects on muscle tone, movement, and pain.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8 text-center">
                    <Users className="mx-auto mb-4 h-10 w-10 text-primary" />
                    <h3 className="mb-3 text-lg font-bold text-foreground">Education</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Providing comprehensive training programs for healthcare professionals seeking to expand their
                      clinical skills.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8 text-center">
                    <Award className="mx-auto mb-4 h-10 w-10 text-secondary" />
                    <h3 className="mb-3 text-lg font-bold text-foreground">Certification</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Maintaining high standards through rigorous certification processes and continuing education
                      requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="pt-8 text-center">
                    <div className="mx-auto mb-4 h-10 w-10 text-accent">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">Community</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Building a network of practitioners dedicated to advancing Afferentology and supporting each
                      other's growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">What We Do</h2>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-foreground">Professional Training</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We develop and deliver comprehensive educational programs that teach healthcare professionals how
                      to identify and treat nerve interference. Our courses range from introductory material to advanced
                      clinical protocols.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-foreground">Research & Development</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We continuously refine our understanding of afferent input and muscle inhibition through clinical
                      observation, practitioner feedback, and integration of relevant neuroscience research.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-foreground">Patient Education</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We provide resources to help patients understand their conditions and make informed decisions
                      about their care. Our goal is to bridge the gap between scientific understanding and practical
                      application.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-xl font-bold text-foreground">Practitioner Support</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain a directory of certified practitioners and provide ongoing support through continuing
                      education, case discussions, and professional networking opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Leadership</h2>

              <Card className="overflow-hidden border-none shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Simon King</h3>
                    <p className="text-lg text-muted-foreground">Founder & Director</p>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Simon King is the founder of Afferentology and has dedicated his career to understanding and
                      treating nerve interference. His work has helped countless patients overcome chronic pain and
                      injury when conventional treatments failed.
                    </p>
                    <p className="leading-relaxed">
                      Through years of clinical practice and continuous refinement of assessment and treatment
                      techniques, Simon developed the Afferentology methodology that is now taught to healthcare
                      professionals worldwide.
                    </p>
                  </div>
                  <div className="mt-8 text-center">
                    <Button asChild variant="outline">
                      <Link href="/simon-king">
                        Learn More About Simon
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join the Afferentology Community</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              Whether you're a patient seeking help or a practitioner wanting to expand your skills, we're here to
              support you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/find-practitioner">
                  Find a Practitioner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                  Explore Training
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
