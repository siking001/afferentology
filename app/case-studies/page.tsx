import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Chronic Shoulder Pain - 15 Years",
      patient: "Male, 52",
      problem: "Persistent shoulder pain despite physical therapy, cortisone injections, and anti-inflammatories.",
      treatment:
        "Identified muscle inhibition in rotator cuff and surrounding stabilizers. Treated underlying nerve interference.",
      outcome: "Full range of motion restored in 3 sessions. Pain-free after 6 weeks. Returned to tennis.",
    },
    {
      title: "Lower Back Pain After Car Accident",
      patient: "Female, 34",
      problem: "Debilitating lower back pain for 2 years following motor vehicle accident. Unable to work.",
      treatment:
        "Found widespread muscle inhibition in core and hip stabilizers. Addressed multiple areas of nerve interference.",
      outcome: "Returned to work after 4 weeks. 90% pain reduction within 8 weeks. Improved overall strength.",
    },
    {
      title: "Recurring Ankle Sprains",
      patient: "Male, 28, Athlete",
      problem: "Multiple ankle sprains over 3 years. Conventional treatment and bracing ineffective.",
      treatment: "Discovered muscle inhibition in lower leg and hip. Corrected afferent input from multiple sources.",
      outcome: "No sprains in 18 months. Improved athletic performance. Stronger and more stable.",
    },
    {
      title: "Chronic Headaches & Neck Pain",
      patient: "Female, 45",
      problem: "Daily headaches and neck pain for 5+ years. Tried medications, massage, and chiropractic care.",
      treatment: "Identified inhibited neck stabilizers and shoulder muscles. Treated nerve interference patterns.",
      outcome: "Headaches reduced by 80% in first month. Full resolution after 12 weeks. Improved posture.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
              Real Patient Success Stories
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              See how Afferentology has helped patients overcome chronic pain and injury when conventional treatments
              failed.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="mb-2 text-2xl font-bold text-foreground">{study.title}</h2>
                      <p className="text-sm font-medium text-muted-foreground">{study.patient}</p>
                    </div>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Problem</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">Treatment</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.treatment}</p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Outcome</h3>
                      <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Could This Work for You?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Every patient is unique, but these success stories show what's possible when nerve interference is properly
            identified and treated.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/find-practitioner">
              Find a Certified Practitioner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
