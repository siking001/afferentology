"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function SeedFirstArticlePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    title: "The Unseen Foundation of Health: Why Muscle Reflexes Matter More Than You Think",
    slug: "muscle-reflexes-neurological-foundation-health",
    excerpt:
      "Discover why muscle reflexes are the foundation of health and how Afferentology addresses chronic pain by fixing neurological inhibition, not just symptoms.",
    content: `<h2>Introduction: Your Body's Hidden Control System</h2>

<p>Your conscious thought is actually quite slow. When you catch a falling glass, you don't calculate its speed and trajectory—you simply react. This lightning-fast protection and coordination is managed entirely by your reflexes, particularly the <strong>myotatic reflex</strong> (stretch reflex), which constantly governs muscle tone and strength throughout your body.</p>

<p>Understanding this reflex is crucial because it represents the nervous system's instant feedback mechanism that keeps you stable, strong, and injury-free. When this system fails, no amount of stretching, strengthening, or adjusting will provide lasting relief—because you're treating the symptom, not the cause.</p>

<h2>What Are Muscle Reflexes and Why Do They Matter?</h2>

<h3>The Myotatic Reflex: Your Body's Autopilot</h3>

<p>Muscles are far more than just engines for movement—they're the primary <strong>sensory organs of the musculoskeletal system</strong>. Every muscle constantly sends streams of afferent input (sensory information) to your spinal cord and brain about:</p>

<ul>
  <li>Muscle length and position</li>
  <li>Tension and force</li>
  <li>Rate of change during movement</li>
</ul>

<p>Your nervous system processes this continuous feedback and instantly adjusts muscle tone (motor output) to maintain stability, posture, and coordinated movement. This happens automatically, thousands of times per second, without conscious thought.</p>

<h3>When Reflexes Work: Functional Strength</h3>

<p>When this feedback loop functions perfectly, you possess true functional strength and resilience. You can:</p>

<ul>
  <li>Lift heavy objects safely</li>
  <li>Run and change direction quickly</li>
  <li>Twist and bend without hesitation</li>
  <li>Absorb unexpected forces (trips, slips, impacts) without injury</li>
</ul>

<h3>When Reflexes Fail: Neurological Inhibition</h3>

<p>When the myotatic reflex is compromised, the nervous system becomes <strong>inhibited</strong>, leading to a state of neurological weakness that your conscious mind cannot override. No matter how hard you try to "activate" or strengthen an inhibited muscle, it remains partially "offline" as a protective mechanism.</p>

<p>This is where traditional approaches often fail—they focus on strengthening the muscle (motor output) without addressing the faulty sensory input causing the inhibition.</p>

<h2>Real-World Case Study: Sarah's Chronic Back Pain</h2>

<p>Let's examine how Afferentology differs from traditional care through a common scenario.</p>

<h3>The Patient: Sarah</h3>

<p>Sarah is a 45-year-old active mother who enjoys running and tennis. She's developed chronic, non-specific lower back pain that consistently flares up when she serves or runs more than a few miles. Despite being otherwise healthy and fit, this pain limits her activities and refuses to resolve.</p>

<h3>Traditional Biomechanical Approach</h3>

<p>Sarah sees multiple practitioners who tell her the pain stems from:</p>

<ul>
  <li>Tight hamstrings</li>
  <li>Weak core muscles</li>
  <li>Minor joint "fixation" in her lumbar spine</li>
</ul>

<p>She receives adjustments, massage therapy, and core strengthening exercises. She experiences temporary relief, but <strong>the pain always returns</strong>. Why? Because her care focuses on the symptoms and implications of the problem, not the underlying neurological malfunction.</p>

<h3>The Afferentology Approach</h3>

<p>An Afferentologist uses precise muscle testing to check the integrity of Sarah's muscle reflexes. They don't just assess whether muscles are strong enough to lift weight—they test the <strong>speed and reliability of the myotatic reflex</strong>, the foundation of stability.</p>

<h4>Finding the Root Cause</h4>

<p>The examination reveals that Sarah's right psoas muscle (a deep core hip flexor) is <strong>neurologically inhibited</strong>. This means:</p>

<ol>
  <li><strong>The Problem:</strong> The sensory input from her psoas is faulty, causing her nervous system to keep the muscle partially "offline" as a defense mechanism</li>
  <li><strong>The Source:</strong> This inhibition isn't from a compressed nerve root, but from subtle, chronic aberrant sensory input—perhaps an old ankle sprain she forgot about or a jaw imbalance</li>
  <li><strong>The Cascade Effect:</strong> Because the psoas fails to stabilize her lumbar spine during complex movements (like a tennis serve), other muscles must compensate</li>
</ol>

<h4>The Compensation Cycle</h4>

<p>With her psoas inhibited, Sarah's body recruits:</p>

<ul>
  <li>Hamstrings (working overtime)</li>
  <li>Superficial back muscles (overloaded)</li>
  <li>Other core muscles (compensating inefficiently)</li>
</ul>

<p>Over time, these compensating muscles become tight, strained, and painful. They create the recurrent "fixations" and trigger points that practitioners keep treating—but these are <strong>effects, not causes</strong>.</p>

<h4>The Solution: Restoring Afferent Input</h4>

<p>The Afferentologist identifies the specific aberrant sensory input (the afferent problem) and provides a targeted neurological correction. The results are immediate:</p>

<ul>
  <li>The psoas reflex is instantly restored</li>
  <li>Sarah feels profound strength return to her core</li>
  <li>Her adjustments finally hold</li>
  <li>Core exercises now engage the correct muscles</li>
  <li>Chronic low back pain resolves because the <strong>cause</strong> of her instability has been eliminated</li>
</ul>

<h2>Why Traditional Approaches Miss the Mark</h2>

<p>Most musculoskeletal care focuses on three areas:</p>

<ol>
  <li><strong>Structural alignment</strong> (adjustments, mobilization)</li>
  <li><strong>Tissue quality</strong> (massage, stretching)</li>
  <li><strong>Motor strength</strong> (exercise, rehabilitation)</li>
</ol>

<p>While these approaches have value, they miss a critical component: <strong>the quality of sensory input</strong> (afferent information) that controls the reflexes governing all movement and stability.</p>

<p>You can adjust a joint perfectly, stretch a muscle thoroughly, and strengthen a muscle group extensively—but if the neurological reflex controlling that muscle is inhibited due to faulty sensory input, the problem will return.</p>

<h2>The Afferentology Difference</h2>

<p>Afferentology addresses health at its neurological foundation by:</p>

<ul>
  <li><strong>Testing reflex integrity</strong> rather than just muscle strength</li>
  <li><strong>Identifying aberrant sensory input</strong> that creates inhibition</li>
  <li><strong>Correcting the afferent problem</strong> at its source</li>
  <li><strong>Restoring normal neurological function</strong> so the body can heal itself</li>
</ul>

<p>This approach doesn't replace good structural care, soft tissue work, or rehabilitation—it makes them all more effective by addressing the neurological foundation first.</p>

<h2>Why an Afferentology Check is Essential</h2>

<p>An Afferentology assessment is vital because it reveals and corrects hidden neurological errors that keep you:</p>

<ul>
  <li>Weak when you should be strong</li>
  <li>Unstable when you should be balanced</li>
  <li>In pain when you should be comfortable</li>
  <li>Compensating when you should be coordinated</li>
</ul>

<p>By restoring correct afferent input, your nervous system resets, protective inhibitions are removed, and your foundational strength returns. This allows your body to finally build genuine, lasting health rather than constantly managing symptoms.</p>

<h2>Conclusion: Building Health from the Foundation Up</h2>

<p>Your muscle reflexes are the unseen foundation of all movement, stability, and functional strength. When this foundation is compromised by faulty sensory input, no amount of symptomatic treatment will provide lasting relief.</p>

<p>Afferentology offers a different paradigm—one that addresses the neurological root cause of dysfunction rather than endlessly treating its effects. By restoring the integrity of your muscle reflexes, you unlock your body's innate capacity for strength, stability, and pain-free movement.</p>

<p>If you're struggling with chronic pain, recurring injuries, or mysterious weakness that won't respond to traditional care, the problem may not be in your muscles, joints, or structure—it may be in the neurological reflexes that control them all.</p>

<hr />

<p><strong>Ready to discover if neurological inhibition is limiting your health?</strong> <a href="/find-practitioner">Find a certified Afferentologist near you</a> to experience the difference that restoring your muscle reflexes can make.</p>`,
    author_name: "Simon King",
    featured_image_url: "/medical-anatomical-diagram-showing-afferent-sensor.jpg",
    category: "Science",
    tags: "muscle reflexes, myotatic reflex, chronic pain, neurological weakness, afferentology, muscle inhibition, core stability",
  })

  async function handleSubmit(e: React.FormEvent, publish = false) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/articles/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          published: publish,
          published_at: publish ? new Date().toISOString() : null,
        }),
      })

      if (!response.ok) throw new Error("Failed to create article")

      toast({
        title: "Success",
        description: `Article ${publish ? "published" : "saved as draft"} successfully.`,
      })

      router.push("/admin/articles")
    } catch (error) {
      console.error("Error creating article:", error)
      toast({
        title: "Error",
        description: "Failed to create article.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-muted/30 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/admin/articles">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Your First Article - Ready to Publish!</CardTitle>
            <CardDescription>
              This form is pre-filled with your SEO-optimized article about muscle reflexes. Review it, make any edits
              you'd like, then click "Publish Now" to make it live on your Science page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter article title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="article-url-slug"
                  required
                />
                <p className="text-xs text-muted-foreground">This will be the URL: /science/{formData.slug}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief summary of the article (1-2 sentences)"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content * (HTML formatted)</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your article content here"
                  rows={20}
                  required
                  className="font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground">
                  The content is already formatted with HTML. You can edit directly or use a WYSIWYG editor later.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g., Research, Case Study"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author Name</Label>
                  <Input
                    id="author"
                    value={formData.author_name}
                    onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                    placeholder="Author name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Featured Image URL</Label>
                <Input
                  id="image"
                  value={formData.featured_image_url}
                  onChange={(e) => setFormData({ ...formData, featured_image_url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                  type="url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="neuroscience, research, pain science"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={(e) => handleSubmit(e, false)}
                  disabled={isSubmitting}
                  variant="outline"
                  className="flex-1"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save as Draft
                </Button>
                <Button type="button" onClick={(e) => handleSubmit(e, true)} disabled={isSubmitting} className="flex-1">
                  <Save className="mr-2 h-4 w-4" />
                  Publish Now
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
