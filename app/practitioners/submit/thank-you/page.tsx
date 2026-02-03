import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Clock, Mail, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Application Submitted",
  description: "Thank you for submitting your practitioner application to the Afferentology directory.",
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-12 pb-12">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-secondary/10 p-4">
                    <CheckCircle2 className="h-16 w-16 text-secondary" />
                  </div>
                </div>
                
                <h1 className="mb-4 text-3xl font-bold text-foreground">
                  Thank You!
                </h1>
                
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  Your practitioner application has been successfully submitted.
                </p>
              </div>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Review Process</h3>
                    <p className="text-sm text-muted-foreground">
                      Your application will be reviewed by our team. Approval typically takes up to 24 hours, 
                      though it may take longer during busy periods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg bg-muted/50 p-4">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">What Happens Next</h3>
                    <p className="text-sm text-muted-foreground">
                      Once approved, you will receive an email confirmation and your practice will appear 
                      in our practitioner directory where patients can find you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-muted bg-background p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Have questions about your application? Contact us at{" "}
                  <a 
                    href="mailto:info@afferentology.org" 
                    className="font-medium text-primary hover:underline"
                  >
                    info@afferentology.org
                  </a>
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/find-practitioner">
                    View Practitioner Directory
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Return to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
