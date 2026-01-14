import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Myotatic Reflex | Afferentology",
  description:
    "Understanding the myotatic reflex - your body's most important defense mechanism for controlled movement, injury prevention, and maintaining muscle tone.",
  keywords: [
    "myotatic reflex",
    "stretch reflex",
    "muscle spindle",
    "muscle tone",
    "injury prevention",
    "knee jerk reflex",
  ],
}

export default function MyotaticReflexPage() {
  return (
    <div className="flex flex-col">
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

      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="lead">
              The Myotatic Reflex (sometimes myotactic reflex) is probably our body's most important and unrecognised
              defence mechanism. When it comes to making it safely through the day, nothing comes close to the myotatic
              reflex.
            </p>

            <h2>How the Myotatic Reflex Works</h2>

            <p>
              Muscles constantly monitor their own length and tension, and feed back changes in length or tension to the
              spinal cord. Without the myotatic reflex, controlled movement would be impossible.
            </p>

            <p>
              The myotatic reflex starts in the muscle spindle, which constantly and spontaneously produces afferent
              impulses to the spine (and therefore the brain) – at rates between 5 and 50 times per second.
            </p>

            <p>
              Any change in tension or stretch in the muscle will increase this feedback to spine and produce a rapid
              increase in muscle tone.
            </p>

            <h3>The Reflex Pathway</h3>

            <p>
              When a muscle is stretched, the muscle spindles are activated, which sends a signal through afferent
              sensory neurons to the spinal cord. The spinal cord then sends a signal back to the muscle through motor
              neurons, which causes the muscle to contract. This reflex contraction helps to resist the stretch and
              maintain appropriate muscle tone and contraction.
            </p>

            <h3>Protection and Function</h3>

            <p>
              The myotatic (or stretch) reflex helps to protect the muscle from being overstretched, and also helps to
              maintain muscle length, which is important for proper muscle function and movement. The reflex works in
              conjunction with the opposing muscle group, the antagonist, to create balance and stability in muscle tone
              and movement.
            </p>

            <p>
              By limiting the stretch of muscles, the myotatic reflex protects ligaments and joints from overstretching
              which prevents sprain, strain, tearing and dislocation.
            </p>

            <h2>Real-World Example: Walking Down Stairs</h2>

            <p>
              The myotatic reflex helps us walk down stairs safely. As you step down on a stair, the quadriceps muscle,
              which is located in the front of the thigh, has to lengthen or "eccentrically contract" to control the
              descent of the body.
            </p>

            <p>
              As the quadriceps muscle is stretched, the muscle spindles are activated, which sends a signal to the
              spinal cord, triggering a reflex contraction in the muscle, to help resist the stretch and maintain muscle
              tone. The amount of contraction will be proportional to the input so that the same result can be achieved
              whatever load the person is carrying.
            </p>

            <div className="my-8 rounded-lg bg-accent/10 p-6">
              <h3 className="mb-3 text-xl font-bold">The Knee-Jerk Reflex</h3>
              <p>
                The myotatic reflex is what causes the knee-jerk reflex. A sudden increase in quadriceps length induces
                a quick firing at the anterior motor neuron.
              </p>
            </div>

            <h2>Joint Protection and Long-Term Health</h2>

            <p>
              The myotatic reflex prevents damage to joints. When it is working properly, joints are protected from
              excessive movement or strain.
            </p>

            <p className="font-semibold text-primary">
              If the myotatic reflex is inhibited, the joint will be damaged – causing pain initially, and
              osteoarthritis in the long term.
            </p>

            <h2>The Goal of Afferentology</h2>

            <p className="text-lg font-semibold text-primary">
              Eliminating abnormal inhibition of the myotatic reflex is the ultimate aim of afferentology.
            </p>

            <p>
              Only when muscles have their full nerve supply are they able to provide the support and feedback the body
              needs for repair and healing.
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
                <Button asChild variant="outline">
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
