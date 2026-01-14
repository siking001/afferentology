"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, Clock, Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Practitioner {
  id: string
  created_at: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  clinic_name: string
  website?: string
  street_address: string
  city: string
  state: string
  zip_code: string
  country: string
  latitude?: number
  longitude?: number
  years_experience?: number
  bio?: string
  status: "pending" | "approved" | "rejected"
}

export default function AdminPractitionersPage() {
  const [practitioners, setPractitioners] = useState<Practitioner[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("pending")
  const { toast } = useToast()

  useEffect(() => {
    loadPractitioners()
  }, [])

  async function loadPractitioners() {
    try {
      const response = await fetch("/api/practitioners/admin")
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to load practitioners")
      }

      setPractitioners(result.practitioners || [])
    } catch (error) {
      console.error("Error loading practitioners:", error)
      toast({
        title: "Error",
        description: "Failed to load practitioners.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  async function updateStatus(id: string, status: "approved" | "rejected") {
    try {
      const response = await fetch("/api/practitioners/admin", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to update status")
      }

      toast({
        title: "Success",
        description: `Practitioner ${status === "approved" ? "approved" : "rejected"}.`,
      })

      loadPractitioners()
    } catch (error) {
      console.error("Error updating status:", error)
      toast({
        title: "Error",
        description: "Failed to update practitioner status.",
        variant: "destructive",
      })
    }
  }

  const filteredPractitioners = practitioners.filter((p) => p.status === activeTab)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-center">Loading...</p>
      </div>
    )
  }

  return (
    <div className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Practitioner Management</h1>
          <p className="text-muted-foreground">Review and approve practitioner directory submissions.</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="pending">
              Pending ({practitioners.filter((p) => p.status === "pending").length})
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved ({practitioners.filter((p) => p.status === "approved").length})
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Rejected ({practitioners.filter((p) => p.status === "rejected").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6 space-y-4">
            {filteredPractitioners.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No {activeTab} practitioners.</p>
                </CardContent>
              </Card>
            ) : (
              filteredPractitioners.map((practitioner) => (
                <Card key={practitioner.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">
                          {practitioner.first_name} {practitioner.last_name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{practitioner.clinic_name}</p>
                      </div>
                      <Badge
                        variant={
                          practitioner.status === "approved"
                            ? "default"
                            : practitioner.status === "rejected"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {practitioner.status === "pending" && <Clock className="mr-1 h-3 w-3" />}
                        {practitioner.status === "approved" && <CheckCircle2 className="mr-1 h-3 w-3" />}
                        {practitioner.status === "rejected" && <XCircle className="mr-1 h-3 w-3" />}
                        {practitioner.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${practitioner.email}`} className="text-primary hover:underline">
                            {practitioner.email}
                          </a>
                        </div>
                        {practitioner.phone && (
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{practitioner.phone}</span>
                          </div>
                        )}
                        {practitioner.years_experience && (
                          <p className="text-sm">
                            <span className="font-medium">Experience:</span> {practitioner.years_experience} years
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <div>
                            <p>{practitioner.street_address}</p>
                            <p>
                              {practitioner.city}, {practitioner.state} {practitioner.zip_code}
                            </p>
                            <p className="text-muted-foreground">{practitioner.country}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {practitioner.bio && (
                      <div>
                        <p className="mb-1 text-sm font-medium">Bio:</p>
                        <p className="text-sm text-muted-foreground">{practitioner.bio}</p>
                      </div>
                    )}

                    {practitioner.status === "pending" && (
                      <div className="flex gap-2 pt-4">
                        <Button
                          onClick={() => updateStatus(practitioner.id, "approved")}
                          className="flex-1 bg-secondary hover:bg-secondary/90"
                        >
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                        <Button
                          onClick={() => updateStatus(practitioner.id, "rejected")}
                          variant="destructive"
                          className="flex-1"
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground">
                      Submitted: {new Date(practitioner.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
