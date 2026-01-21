import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, AlertCircle, CheckCircle2, Activity, Zap, Search, RefreshCw } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Pain is a Signal, Not the Problem | Afferentology",
  description:
    "Discover how hidden irritants trigger the Withdrawal Reflex, causing your brain to inhibit muscle function. Like a nail in your foot, the solution isn't stronger muscles—it's finding and removing the irritant.",
  keywords: [
    "chronic pain signal",
    "withdrawal reflex",
    "hidden irritants",
    "muscle inhibition",
    "50Hz resting tone",
    "afferent input",
    "nail in foot analogy",
    "neurological pain",
  ],
  openGraph: {
    title: "Your Pain is a Signal, Not the Problem",
    description:
      "What if your chronic pain isn't about weak muscles, but about hidden irritants corrupting your brain's signals?",
    type: "article",
  },
}

export default function PatientsPage() {
  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Understanding Pain as a Signal - The Nail in the Foot Analogy",
    description:
      "Information about how hidden afferent irritants trigger the Withdrawal Reflex and cause muscle inhibition",
    about: {
      "@type": "MedicalCondition",
      name: "Afferent Irritant-Induced Muscle Inhibition",
      alternateName: "Withdrawal Reflex Activation",
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Afferentology Treatment - 50Hz Resting Tone Protocol",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalConditionSchema) }} />
      <div className="flex flex-col">
        <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
                Your Pain is a Signal, Not the Problem
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Imagine walking with a nail in your foot. Your limp isn't weakness—it's your brain protecting you. Now
                imagine the nail is invisible. You'd keep treating the limp while the real problem remains hidden.
              </p>
              <p className="mb-8 text-xl font-semibold text-primary-foreground">
                That's what's happening in your body right now.
              </p>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/screener">
                  Discover Your Hidden Irritants
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">The Nail in Your Foot</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your muscle weakness isn't a hardware failure—it's a software corruption.
                </p>
              </div>

              <div className="mb-12 grid gap-8 md:grid-cols-3">
                <Card className="border-2 border-primary/20 text-center">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <AlertCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">The Hidden Irritant</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Active scar tissue, dental interference, or joint dysfunction sends a constant danger signal to
                      your brain—like a nail you can't see or feel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 text-center">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                      <Zap className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">The Withdrawal Reflex</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your brain responds by inhibiting muscles to protect you—just as you'd limp to protect a foot with
                      a nail in it. This is intelligent, not broken.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/20 text-center">
                  <CardContent className="pt-8">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                      <RefreshCw className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-foreground">The Real Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Remove the nail—neutralize the irritant—and your brain instantly restores normal muscle function.
                      No strengthening required.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <p className="text-center text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">The key insight:</strong> You can't strengthen your way out of a
                    protection response. You have to remove what's triggering it.
                  </p>
                </CardContent>
              </Card>

              <Card className="mt-8 border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    Could Hidden Irritants Be Causing Your Pain?
                  </h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Take our 2-minute Pain Signal Screener to discover if your nervous system might be stuck in a
                    Withdrawal Reflex.
                  </p>
                  <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/screener">
                      Take the Pain Screener
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <Activity className="mx-auto mb-6 h-16 w-16 text-primary" />
                <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                  The Signal Your Muscles Need
                </h2>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">
                  Your muscles require a specific neurological frequency to function properly.
                </p>
              </div>

              <div className="mb-12 overflow-hidden rounded-lg border-2 border-primary/20 bg-background">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/afferent-input-diagram.jpg"
                    alt="Afferent input pathway diagram showing how sensory signals travel to the brain"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="bg-muted/50 p-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Sensory neurons send afferent input that controls your muscle's resting tone
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-lg font-bold text-foreground">The 50Hz Resting Tone</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every muscle in your body requires a constant neurological signal—firing at approximately 50 times
                      per second—to maintain
                      <strong className="text-foreground"> resting tone</strong>. This tone is what gives you muscle
                      readiness and joint stability, even when you're not consciously using the muscle.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-lg font-bold text-foreground">When the Signal Gets Corrupted</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      When a hidden irritant triggers your Withdrawal Reflex, your brain deliberately down-regulates
                      this 50Hz signal. The muscle doesn't fail because it's weak—it fails because your brain has turned
                      down the volume to protect you from perceived threat.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-2 text-lg font-bold text-foreground">Software, Not Hardware</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This isn't a structural problem that needs building up. It's a software corruption that needs
                      debugging. Find the corrupted data (the irritant), neutralize it, and the signal is instantly
                      restored.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">The remarkable part:</strong> Once the irritant is
                      neutralized, muscle function returns
                      <em> immediately</em>—not after weeks of rehabilitation, but in the same treatment session. This
                      is how you know you've found the real cause.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <Search className="mx-auto mb-6 h-12 w-12 text-secondary" />
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Common Hidden Irritants</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These are the "nails" that may be triggering your pain and weakness.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Active Scar Tissue",
                    description:
                      "Old surgical scars, injury scars, or even stretch marks can send constant noxious input to your nervous system.",
                  },
                  {
                    title: "Dental Interference",
                    description:
                      "Bite misalignment, old fillings, root canals, or jaw tension can affect muscles throughout your entire body.",
                  },
                  {
                    title: "Joint Dysfunction",
                    description:
                      "Joints that aren't moving properly irritate surrounding receptors, triggering protective inhibition.",
                  },
                  {
                    title: "Visceral Referral",
                    description:
                      "Internal organ stress can refer pain and weakness to specific muscle groups via shared nerve pathways.",
                  },
                  {
                    title: "Fascial Adhesions",
                    description:
                      "Restrictions in connective tissue create abnormal tension patterns that the brain interprets as threat.",
                  },
                  {
                    title: "Receptor Sensitization",
                    description:
                      "Over-stimulated sensory receptors that continue firing even after the original injury has healed.",
                  },
                ].map((irritant, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="pt-6">
                      <h3 className="mb-2 font-bold text-foreground">{irritant.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{irritant.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                When the Signal is Restored
              </h2>
              <p className="mb-12 text-center text-lg text-muted-foreground">
                Remove the irritant, restore the signal, and experience immediate change.
              </p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Strength returns instantly—without exercise",
                  "Joints regain full range of motion",
                  "Chronic pain patterns finally resolve",
                  "Movement becomes fluid and confident",
                  "Injuries heal faster and recur less",
                  "You feel years younger in your body",
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

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Patient CTA */}
                <Card className="border-2 border-secondary/30 bg-gradient-to-br from-secondary/5 to-secondary/10">
                  <CardContent className="pt-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-foreground">For Patients</h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      Stop chasing symptoms. Find the hidden irritants that are corrupting your brain's signals and
                      finally get to the root cause of your pain.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href="/screener">
                        Discover Your Hidden Irritants
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Practitioner CTA */}
                <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="pt-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-foreground">For Practitioners</h3>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      Learn the 50Hz Resting Tone protocols. Use Precision Muscle Testing to identify noxious afferent
                      input and restore neurological function instantly.
                    </p>
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/practitioners">
                        Learn the 50Hz Protocols
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Find the Nail?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              A certified Afferentology practitioner can use Precision Muscle Testing to identify exactly what's
              triggering your Withdrawal Reflex—and neutralize it in the same session.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/screener">
                  Find a Practitioner Near You
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/case-studies">See Real Results</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
