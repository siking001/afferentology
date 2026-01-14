import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Video, ExternalLink } from "lucide-react"

export default function TutorialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Video className="mx-auto mb-6 h-16 w-16" />
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
              Video Tutorials & Resources
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Access practical demonstrations and educational content to enhance your understanding of Afferentology
              techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Access Full Tutorial Library</h2>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Our comprehensive video tutorials are available through the Afferentology training platform. Watch
                  demonstrations of muscle testing, treatment techniques, and case studies.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="https://learn.afferentology.org" target="_blank" rel="noopener noreferrer">
                    View Tutorial Library
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Tutorial Categories</h3>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold text-foreground">Muscle Testing Fundamentals</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Step-by-step demonstrations of proper muscle testing technique for major muscle groups and how to
                    identify inhibition patterns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold text-foreground">Assessment Protocols</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Learn systematic approaches for evaluating patients with chronic pain, injury, or movement
                    dysfunction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold text-foreground">Treatment Demonstrations</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Watch experienced practitioners demonstrate treatment techniques for various patterns of nerve
                    interference.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h4 className="mb-2 font-semibold text-foreground">Clinical Case Studies</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Follow real patient cases from initial assessment through treatment and resolution, with detailed
                    explanations of clinical reasoning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
