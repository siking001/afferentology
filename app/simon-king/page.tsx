import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ExternalLink, BookOpen } from "lucide-react"
import Image from "next/image"

export default function SimonKingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[300px_1fr] md:gap-12 items-center">
              <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-primary-foreground/20 shadow-2xl">
                <Image
                  src="/images/simon-square.png"
                  alt="Simon King - Founder of Afferentology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl text-balance">Simon King</h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                  Founder of Afferentology and Director of The Association of Certified Afferentologists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 grid gap-12 md:grid-cols-[1fr_400px] md:gap-16 items-start">
              <Card className="border-none shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">The Journey</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Simon King has dedicated his career to understanding why some patients don't respond to
                      conventional treatment and developing solutions for those difficult cases.
                    </p>

                    <p className="leading-relaxed">
                      Through decades of clinical practice and observation, Simon developed the Afferentology
                      methodology—a systematic approach to identifying and treating nerve interference that affects
                      muscle tone and function. His work is grounded in neuroscience principles established by Sir
                      Charles Sherrington in 1906 and refined through thousands of patient interactions.
                    </p>

                    <p className="leading-relaxed">
                      What sets Simon's approach apart is the focus on afferent input—the sensory information flowing
                      from the body to the nervous system. By identifying and correcting disruptions in this input, he
                      has helped countless patients overcome chronic pain, injury, and dysfunction that persisted
                      despite other treatments.
                    </p>

                    <p className="leading-relaxed">
                      Today, Simon continues to refine the Afferentology methodology while teaching healthcare
                      professionals worldwide through The Association of Certified Afferentologists. His training
                      programs have helped practitioners in multiple countries achieve breakthrough results for their
                      patients.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-none shadow-xl">
                  <CardContent className="p-6">
                    <div className="relative mb-4 h-[300px] w-full overflow-hidden rounded-lg">
                      <Image
                        src="/images/book-small-cover.jpg"
                        alt="Live Without Pain book cover by Simon King"
                        fill
                        className="object-contain bg-slate-100"
                      />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">Live Without Pain</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Simon's book explores the relationship between afferent input and chronic pain, offering insights
                      into why conventional treatments often fail and what can be done about it.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <a href="mailto:info@afferentology.org">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Inquire About Book
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-xl bg-gradient-to-br from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-bold text-foreground">Connect with Simon</h3>
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-primary hover:bg-primary/90">
                        <a href="mailto:info@afferentology.org">
                          <Mail className="mr-2 h-4 w-4" />
                          Contact Simon
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <a href="https://learn.afferentology.org/courses" target="_blank" rel="noopener noreferrer">
                          View Training Programs
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Training Photos Section */}
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="mb-8 text-2xl font-bold text-foreground">Teaching Afferentology Worldwide</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/img-7670.jpg"
                      alt="Simon King teaching healthcare professionals in classroom training session"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/img-7782-201.jpg"
                      alt="Live demonstration of precision muscle testing at training seminar"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Simon conducts hands-on training seminars where healthcare professionals learn to apply the 50Hz
                  Resting Tone Protocols and identify hidden afferent irritants.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
