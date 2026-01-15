import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl text-balance">About Afferentology</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">
              Pioneering a neurological approach to restore muscle function and eliminate chronic pain
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Origin</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Afferentology began with a simple observation: some patients don't respond to conventional treatment
                    not because their condition is untreatable, but because the underlying cause has been misidentified.
                  </p>
                  <p className="leading-relaxed">
                    Through decades of clinical practice, Simon King developed a methodology that identifies hidden
                    sources of nerve interference—dental work, scar tissue, joint dysfunction—that trigger the body's
                    protective Withdrawal Reflex and inhibit muscle strength.
                  </p>
                  <p className="leading-relaxed">
                    What started as clinical curiosity evolved into Afferentology: a systematic, reproducible approach
                    based on Sir Charles Sherrington's neuromuscular reflex research from 1906.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/img-0233-201.jpg"
                  alt="Simon King demonstrating precision muscle testing during live training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">Our Methodology</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Precision Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    We use Precision Muscle Testing to identify which muscles have lost their ability to maintain the
                    50Hz resting tone—the neurological signal required for strength and stability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Finding Irritants</h3>
                  <p className="text-sm text-muted-foreground">
                    We identify the hidden irritants—scar tissue, dental interference, joint restrictions—that trigger
                    the Withdrawal Reflex and inhibit muscle function.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">Restoring Function</h3>
                  <p className="text-sm text-muted-foreground">
                    By neutralizing the corrupted afferent input, we allow the nervous system to restore normal muscle
                    tone and strength immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Community */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Training Healthcare Professionals
            </h2>
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/img-7646.jpg"
                  alt="Classroom training session with healthcare professionals"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/img-7659.jpg"
                  alt="Hands-on training demonstration with multiple practitioners"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 md:p-12">
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  Since founding The Association of Certified Afferentologists, Simon King has trained healthcare
                  professionals across multiple countries in the Afferentology methodology. Our training programs
                  combine theoretical understanding with extensive hands-on practice.
                </p>
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  Practitioners learn to see muscles as the beginning and ending of the nervous system—to diagnose by
                  testing muscle tone, identify hidden irritants, and restore function by removing barriers to optimal
                  afferent input.
                </p>
                <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/seminars-202020.jpg"
                    alt="Collage of training seminars from 2020 showing group photos and demonstrations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href="/practitioners">Learn About Training Programs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Committed to Excellence</h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                Initially skeptical, these are just a few of the thousands of practitioners who have experienced the
                transformative impact of Afferentology on their practice. They now wholeheartedly embrace its methods,
                finding greater satisfaction and reduced stress in their work.
              </p>
            </div>

            {/* Video Testimonials */}
            <div className="mb-16 space-y-8">
              {/* Simon Billings - Chiropractor */}
              <Card>
                <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:gap-12">
                  <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                    <div id="llo_5lip74y9gsvnzrl3n7hdh4h1" style={{ position: "relative", width: "100%" }}>
                      <iframe
                        src="https://d1ddrv8boso99h.cloudfront.net/videos/static/player/index.html?videoId=5lip74y9gsvnzrl3n7hdh4h1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                      <div style={{ paddingTop: "56.250%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Simon Billings</h3>
                    <p className="mb-4 text-sm text-primary">Chiropractor - Chiropractic Nutrition</p>
                    <blockquote className="text-lg italic text-muted-foreground">
                      "I use it every day... I would never be without it"
                    </blockquote>
                  </div>
                </CardContent>
              </Card>

              {/* Rob Scott - Chiropractor */}
              <Card>
                <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:gap-12">
                  <div className="relative w-full overflow-hidden rounded-lg bg-muted md:order-2">
                    <div id="llo_j5afciy1735vamx3phakrafe" style={{ position: "relative", width: "100%" }}>
                      <iframe
                        src="https://d1ddrv8boso99h.cloudfront.net/videos/static/player/index.html?videoId=j5afciy1735vamx3phakrafe"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                      <div style={{ paddingTop: "56.338%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center md:order-1">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Rob Scott</h3>
                    <p className="mb-4 text-sm text-primary">Chiropractor</p>
                    <blockquote className="text-lg italic text-muted-foreground">
                      "Making people better, who wouldn't with ordinary chiropractic techniques... I love it and it
                      works."
                    </blockquote>
                  </div>
                </CardContent>
              </Card>

              {/* Mike Cassidy-Hogg - Chiropractor */}
              <Card>
                <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:gap-12">
                  <div className="relative w-full overflow-hidden rounded-lg bg-muted">
                    <div id="llo_8r8hl4o48g3dltk067g5l1nw" style={{ position: "relative", width: "100%" }}>
                      <iframe
                        src="https://d1ddrv8boso99h.cloudfront.net/videos/static/player/index.html?videoId=8r8hl4o48g3dltk067g5l1nw"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                      <div style={{ paddingTop: "56.338%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Mike Cassidy-Hogg</h3>
                    <p className="mb-4 text-sm text-primary">Chiropractor</p>
                    <blockquote className="text-lg italic text-muted-foreground">
                      "That gives me a degree of certainty and it also really helps the patient understand ... that we
                      really need to get them stronger to resolve the issue and to stop it coming back."
                    </blockquote>
                  </div>
                </CardContent>
              </Card>

              {/* Grant Pretorius */}
              <Card>
                <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:gap-12">
                  <div className="relative w-full overflow-hidden rounded-lg bg-muted md:order-2">
                    <div id="llo_i9ip2jcru39zl0au6dp7u4o8" style={{ position: "relative", width: "100%" }}>
                      <iframe
                        src="https://d1ddrv8boso99h.cloudfront.net/videos/static/player/index.html?videoId=i9ip2jcru39zl0au6dp7u4o8"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                      <div style={{ paddingTop: "66.667%" }}></div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center md:order-1">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Grant Pretorius</h3>
                    <p className="mb-4 text-sm text-primary">Chiropractor</p>
                    <blockquote className="text-lg italic text-muted-foreground">
                      "The results speak for themselves. This methodology has transformed how I practice."
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Text Testimonials */}
            <div>
              <h3 className="mb-8 text-center text-2xl font-bold text-foreground">Practitioner Feedback</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6">
                    <blockquote className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      "This has been the best quality, price ratio course I have taken so far in my doubts! Very useful
                      and versatile with instant results. Will keep on integrating all the info its shared in my
                      everyday practice!"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image src="/images/kepa-photo.jpg" alt="Repps Chapatigul" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Repps Chapatigul</p>
                        <p className="text-xs text-muted-foreground">Chiropractor - Spain</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <blockquote className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      "The clear description of a system that gives clear cause to adjust distinct from palpation. The
                      simple reinforcement of the main themes so as not to confuse a newbie like me."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image src="/images/nick-parry2.jpg" alt="Rick Perry" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Rick Perry</p>
                        <p className="text-xs text-muted-foreground">Chiropractor</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <blockquote className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      "Life changing is all I can say, phenomenal results and happy patients. Never been so content as a
                      practitioner as I have been since learning these skills, thank you."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image src="/images/mark-tucker.jpeg" alt="Mark Tucker" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Mark Tucker</p>
                        <p className="text-xs text-muted-foreground">Chiropractor</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Our Mission</h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              To provide patients suffering from chronic pain and dysfunction with access to practitioners who
              understand the neurological basis of their symptoms. To train healthcare professionals in a methodology
              that delivers results where conventional treatment has failed. To advance the science of afferent input
              and its role in human performance and recovery.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
