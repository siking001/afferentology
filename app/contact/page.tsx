import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <MessageSquare className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Have questions about Afferentology? We're here to help patients, practitioners, and anyone interested in
              learning more.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-8 text-center">
                  <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">Email Us</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Send us an email and we'll respond as soon as possible.
                  </p>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="mailto:info@afferentology.org">info@afferentology.org</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-8 text-center">
                  <MessageSquare className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">Training Inquiries</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Questions about courses and certification?
                  </p>
                  <Button asChild className="bg-secondary hover:bg-secondary/90">
                    <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                      Visit Training Portal
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-primary/20 bg-muted/30">
              <CardContent className="p-8">
                <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Frequently Asked Questions</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">I'm a patient. How do I find a practitioner?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Visit our{" "}
                      <a href="/find-practitioner" className="text-primary hover:underline">
                        Find a Practitioner page
                      </a>{" "}
                      to access our directory of certified Afferentology practitioners.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      I'm a healthcare professional. How do I get trained?
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Start with our{" "}
                      <a
                        href="https://learn.afferentology.org/essentials"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        free introductory course
                      </a>
                      , then explore our comprehensive training programs at{" "}
                      <a
                        href="https://learn.afferentology.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        learn.afferentology.org
                      </a>
                      .
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Does Afferentology replace other treatments?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Afferentology complements existing healthcare approaches by addressing an often-overlooked cause
                      of dysfunction. It's not a replacement but an additional tool for achieving better outcomes.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">How long does treatment typically take?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This varies by individual and condition. Some patients experience significant improvement within a
                      few sessions, while others with complex or chronic conditions may require more time. Your
                      practitioner will assess your specific situation.
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">Is there research supporting Afferentology?</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Afferentology is based on well-established neuroscience principles. Visit our{" "}
                      <a href="/science" className="text-primary hover:underline">
                        Science page
                      </a>{" "}
                      to learn more about the research foundations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
