import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink } from "lucide-react"

export default function SimonKingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">Simon King</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Founder of Afferentology and Director of The Association of Certified Afferentologists
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Simon King has dedicated his career to understanding why some patients don't respond to conventional
                    treatment and developing solutions for those difficult cases.
                  </p>

                  <p className="leading-relaxed">
                    Through decades of clinical practice and observation, Simon developed the Afferentology methodology
                    - a systematic approach to identifying and treating nerve interference that affects muscle tone and
                    function. His work is grounded in neuroscience principles and refined through thousands of patient
                    interactions.
                  </p>

                  <p className="leading-relaxed">
                    What sets Simon's approach apart is the focus on afferent input - the sensory information flowing
                    from the body to the nervous system. By identifying and correcting disruptions in this input, he has
                    helped countless patients overcome chronic pain, injury, and dysfunction that persisted despite
                    other treatments.
                  </p>

                  <p className="leading-relaxed">
                    Today, Simon continues to refine the Afferentology methodology while teaching healthcare
                    professionals worldwide. His training programs have helped practitioners in multiple countries
                    achieve better outcomes for their patients.
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="mb-4 text-xl font-bold text-foreground">Connect</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href="mailto:info@afferentology.org">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Simon
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                        View Training Programs
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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
