import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "The Myotatic Reflex - Your Body's Defense Mechanism | Afferentology",
  description:
    "Learn about the myotatic reflex (stretch reflex), your body's most important defense mechanism for controlled movement, injury prevention, and maintaining proper muscle tone. Discover how muscle spindles protect joints from damage.",
  keywords: [
    "myotatic reflex",
    "stretch reflex",
    "muscle spindle",
    "muscle tone",
    "injury prevention",
    "knee jerk reflex",
    "joint protection",
    "controlled movement",
    "muscle length",
    "osteoarthritis prevention",
    "afferentology",
    "spinal cord reflex",
  ],
  openGraph: {
    title: "The Myotatic Reflex - Understanding Your Body's Defense Mechanism",
    description:
      "Discover how the myotatic reflex protects your joints, controls movement, and prevents injuries through automatic muscle responses.",
    type: "article",
    url: "https://afferentology.org/science/myotatic-reflex",
    images: [
      {
        url: "https://afferentology.org/images/knee-jerk-reflex.jpg",
        width: 1200,
        height: 630,
        alt: "Healthcare professional testing patient's myotatic reflex with reflex hammer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Myotatic Reflex - Your Body's Defense System",
    description:
      "Learn how the stretch reflex protects joints, controls movement, and prevents injuries through muscle spindle activation.",
  },
}

export default function MyotaticReflexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Myotatic Reflex",
    description:
      "Understanding the myotatic reflex - your body's most important defense mechanism for controlled movement, injury prevention, and maintaining muscle tone.",
    author: {
      "@type": "Person",
      name: "Simon King",
      jobTitle: "B.App.Sc.(Chiro)",
    },
    publisher: {
      "@type": "Organization",
      name: "Afferentology",
      url: "https://afferentology.org",
    },
    image: "https://afferentology.org/images/knee-jerk-reflex.jpg",
    datePublished: "2024-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://afferentology.org/science/myotatic-reflex",
    },
  }

  return (
    <div className="flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-gradient-to-br from-primary to-secondary py-12 text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link
            href="/science"
            className="mb-4 inline-flex items-center text-sm text-primary-foreground/90 hover:text-primary-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Science
          </Link>
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-wide">Foundation Article</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl text-balance">The Myotatic Reflex</h1>
            <p className="text-lg text-primary-foreground/90">By Simon King B.App.Sc.(Chiro)</p>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src="/images/knee-jerk-reflex.jpg"
          alt="Medical professional demonstrating myotatic reflex test - using reflex hammer to test patient's knee-jerk stretch reflex response for neurological assessment"
          fill
          className="object-cover"
          priority
        />
      </div>

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-foreground [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:pb-2 [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-foreground/80 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-muted/30 [&_blockquote]:p-6 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:rounded-r-lg [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_li]:text-foreground/80 [&_strong]:text-foreground [&_strong]:font-bold [&_a]:text-primary [&_a]:underline hover:[&_a]:text-secondary">
      
            <p className="italic text-xl border-l-4 border-primary pl-6 mb-12">
        The Myotatic Reflex is the body's primary defense against structural collapse. While traditional therapy focuses on muscle bulk, Afferentology focuses on the speed and integrity of this vital neurological circuit.
      </p>

      <p>The Myotatic Reflex (or stretch reflex) is likely our body's most important and unrecognized defense mechanism. When it comes to navigating the physical world safely, nothing is more critical to joint stability and injury prevention.</p>

      

      <h2>The Mechanics of the 50Hz Signal</h2>
      <p>Muscles constantly monitor their own length and tension via the muscle spindle. These spindles spontaneously produce afferent impulses—the <strong>50Hz resting tone</strong>—sent directly to the spinal cord. Without this constant "hum" of data, controlled movement would be impossible.</p>

      <blockquote>
        "Any sudden change in tension or stretch increases this feedback. If the software is clear, the spinal cord produces an instantaneous increase in muscle tone to protect the joint."
      </blockquote>

      <h2>The Reflex Pathway: The Body's Software Loop</h2>
      <p>When a muscle is stretched, the spindle is activated, sending a signal through afferent sensory neurons to the spinal cord. The cord then sends a return signal through motor neurons, causing the muscle to contract. This loop resists the stretch and maintains the <strong>cortical drive</strong> necessary for movement.</p>

      <p>This reflex doesn't work in isolation. It coordinates with the opposing muscle group (the antagonist) to create balance. By limiting excessive stretch, it protects ligaments and joints from the sprains, tears, and dislocations that occur when the hardware is left undefended.</p>

      <h2>The Walking Paradox: Eccentric Control</h2>
      <p>Consider walking down stairs. As you step down, your quadriceps must lengthen under load—an eccentric contraction. As the muscle stretches, the myotatic reflex triggers a proportional contraction to control your descent. If this reflex is delayed by even a millisecond due to a <strong>Withdrawal Reflex</strong> elsewhere in the body, the knee joint takes the full force of the impact.</p>

      <div className="my-10 rounded-lg bg-primary/5 p-8 border-l-4 border-primary">
        <h3 className="text-2xl font-bold mb-4 text-foreground">The Knee-Jerk Phenomenon</h3>
        <p className="mb-0">The famous "knee-jerk" test is a clinical audit of the myotatic reflex. A sudden tap on the tendon induces a quick firing at the anterior motor neuron. In Afferentology, we don't just look for the presence of the jerk; we look for the <em>quality</em> and <em>symmetry</em> of the neurological response.</p>
      </div>

      <h2>Joint Damage and the "Silent" Inhibition</h2>
      <p>The myotatic reflex is the primary guardian of your joints. When it is working properly, joints are shielded from excessive movement. However, when the system is plagued by "software glitches"—abnormal afferent inputs—the reflex becomes inhibited.</p>

      <p className="text-primary font-bold text-xl">
        Inhibition of the myotatic reflex is the hidden precursor to osteoarthritis. When the muscle cannot protect the joint, the "hardware" (cartilage and bone) begins to degrade.
      </p>

      <h2>The Clinical Goal of Afferentology</h2>
      <p>The ultimate aim of Afferentology is the <strong>elimination of abnormal inhibition</strong> within the myotatic reflex. By removing the "Nail in the Foot" and neutralizing aberrant afferent signals, we restore the full nerve supply to the muscles.</p>

      <p>Only when the reflex loop is fully operational can the body provide the support and feedback required for true repair and long-term healing.</p>

      <hr className="my-12 border-border" />
      
      <p className="text-center">
        <a href="https://learn.afferentology.org" className="text-2xl font-bold">
          Master the Audit of the Myotatic Reflex →
        </a>
      </p>

            <div className="mt-12 rounded-lg bg-muted p-8">
              <h3 className="mb-4 text-2xl font-bold">Learn to Work With the Myotatic Reflex</h3>
              <p className="mb-6 text-muted-foreground">
                Discover techniques to assess and restore proper myotatic reflex function in your patients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/practitioners">Practitioner Training</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent">
                  <Link href="/science">More Science Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
