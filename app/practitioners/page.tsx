import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap, Brain, Zap, Search } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"
import { AfferentLoopAnimation } from "@/components/afferent-loop-animation"
import { PrecisionTestingDashboard } from "@/components/precision-testing-dashboard"

export const metadata: Metadata = {
  title: "50Hz Resting Tone Protocols - Practitioner Training | Afferentology",
  description:
    "Master the clinical application of neuromuscular reflexes. Train to regard muscles as the beginning and ending of the nervous system. Learn to restore strength by removing afferent irritants.",
  keywords: [
    "50Hz resting tone",
    "neuromuscular reflexes",
    "Sherrington",
    "afferent input",
    "muscle testing",
    "practitioner training",
    "precision muscle testing",
    "withdrawal reflex",
  ],
  openGraph: {
    title: "50Hz Resting Tone Protocols - Practitioner Training",
    description:
      "Clinical application of neuromuscular reflexes. Learn to restore strength by removing irritants to afferent input.",
    type: "website",
  },
}

export default function PractitionersPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "50Hz Resting Tone Protocols",
    description: "Clinical application of neuromuscular reflexes for healthcare professionals",
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
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                Building on Sir Charles Sherrington's 1906 Nobel Prize-Winning Research
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
                The 50Hz Resting Tone Protocols
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                We train physical health practitioners to regard muscles as the beginning and ending of the nervous
                system—and to restore strength to physiology by removing irritants to afferent input.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <a href="https://learn.afferentology.org/essentials" target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Learn the 50Hz Protocols
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

        <section className="bg-[#0a1a1a] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-3">
                  The Neurological Foundation
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">The Afferent Loop</h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Muscles are not isolated mechanical units—they are the beginning and ending of the nervous system.
                  Every muscle is in continuous dialogue with the spinal cord.
                </p>
              </div>

              <AfferentLoopAnimation />

              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <span className="text-blue-400 font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Afferent Input</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sensory receptors detect irritants (scars, dental interference, joint dysfunction) and send signals
                    to the spinal cord via afferent neurons.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-purple-400 font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Spinal Processing</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The spinal cord processes the input. If it detects a threat, it triggers the Withdrawal Reflex and
                    down-regulates the motor signal to protect the system.
                  </p>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                    <span className="text-emerald-400 font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Efferent Output</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The efferent signal—the 50Hz resting tone—determines muscle readiness and stability. Remove the
                    irritant, restore the signal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        <section className="bg-[#0d1f1f] py-16 md:py-24 border-y border-teal-900/50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-3">
                  Clinical Application
                </p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Precision Muscle Testing</h2>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Learn to challenge the muscle's ability to maintain its 50Hz resting tone. When a muscle fails to
                  "lock," you've found a window into the nervous system's protective response.
                </p>
              </div>

              <PrecisionTestingDashboard />

              <div className="mt-12 bg-[#071414] border border-teal-900/50 rounded-xl p-6 md:p-8">
                <h3 className="text-white font-bold text-xl mb-4">The Protocol</h3>
                <div className="prose prose-invert max-w-none">
                  <ol className="space-y-4 text-slate-300">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
                        1
                      </span>
                      <div>
                        <strong className="text-white">Challenge the Muscle</strong>
                        <p className="text-slate-400 mt-1 text-sm">
                          Use Precision Muscle Testing to challenge the muscle's ability to maintain its 50Hz resting
                          tone. A healthy muscle will "lock" and resist—a compromised muscle will fail.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-sm">
                        2
                      </span>
                      <div>
                        <strong className="text-white">Identify the Irritant</strong>
                        <p className="text-slate-400 mt-1 text-sm">
                          If the muscle fails to lock, the practitioner identifies and "negates" the noxious afferent
                          input—the metaphorical "nail in the foot" triggering the Withdrawal Reflex.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                        3
                      </span>
                      <div>
                        <strong className="text-white">Restore the Signal</strong>
                        <p className="text-slate-400 mt-1 text-sm">
                          By neutralizing the corrupted data, you restore the neurological signal, allowing the brain to
                          re-establish the resting tone and instantly regain functional stability.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </CHANGE> */}

        {/* Software Not Hardware section - updated styling */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Software, Not Hardware</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  The 50Hz resting tone represents the foundational neurological frequency required for muscle readiness
                  and joint stability.
                </p>
              </div>

              <Card className="border-2 border-primary/20 shadow-xl mb-12">
                <CardContent className="p-8 md:p-12">
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-lg leading-relaxed mb-6">
                      Rather than viewing muscle weakness as a structural{" "}
                      <strong className="text-foreground">"hardware" failure</strong>, Afferentology treats it as a{" "}
                      <strong className="text-foreground">software corruption</strong>—where the brain has
                      down-regulated the resting tone of specific motor units in response to perceived threat.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                      When a hidden afferent irritant—such as active scar tissue or dental interference—triggers the{" "}
                      <strong className="text-foreground">Withdrawal Reflex</strong>, the brain inhibits the 50Hz signal
                      to the associated musculature to protect the system.
                    </p>
                    <p className="text-lg leading-relaxed mb-0">
                      By identifying and neutralizing the corrupted data, you restore the neurological signal, allowing
                      the brain to re-establish the resting tone and{" "}
                      <strong className="text-foreground">instantly regain functional stability</strong>.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-none shadow-lg text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">The Signal</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Focus on the <strong>input</strong> (afferent) rather than just the <strong>output</strong>{" "}
                      (strength). The muscle is a window into the nervous system.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                      <Search className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">The Irritant</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Use the resting tone as a <strong>diagnostic window</strong> to find hidden stressors—scars,
                      receptors, dental interference, and more.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">The Correction</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Restoring the signal <strong>immediately resets</strong> the muscle's ability to fire at the
                      required frequency.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
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
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-foreground">Essentials of Musculospinal Reflexes</h3>
                          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                            FREE
                          </span>
                        </div>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                          Start with Sherrington's foundational principles of neuromuscular reflexes. Learn to see
                          muscles as the beginning and ending of the nervous system, and understand how afferent input
                          controls muscle tone.
                        </p>
                        <Button asChild className="bg-primary hover:bg-primary/90">
                          <a
                            href="https://learn.afferentology.org/essentials"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Start the 50Hz Protocols - FREE
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
                        <h3 className="mb-2 text-2xl font-bold text-foreground">Advanced Clinical Protocols</h3>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                          Deep dive into specific irritant categories: active scars, dental interference, joint receptor
                          dysfunction, and visceral reflexes. Master complex case management and become a certified
                          Afferentology practitioner.
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

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Master the 50Hz Resting Tone Protocols</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 leading-relaxed">
              Join the growing community of practitioners who understand that muscles are the beginning and ending of
              the nervous system. Start your free training today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <a href="https://learn.afferentology.org/essentials" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Learn the 50Hz Protocols - FREE
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <a href="/find-practitioner">Find a Practitioner</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
