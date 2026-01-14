"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Globe, ExternalLink, Navigation, Loader2 } from "lucide-react"
import Link from "next/link"

interface Practitioner {
  id: string
  first_name: string
  last_name: string
  clinic_name: string
  email: string
  phone?: string
  website?: string
  street_address: string
  city: string
  state: string
  zip_code: string
  country: string
  latitude: number
  longitude: number
  bio?: string
  distance: number
}

export default function FindPractitionerPage() {
  const [location, setLocation] = useState("")
  const [userLat, setUserLat] = useState<number | null>(null)
  const [userLng, setUserLng] = useState<number | null>(null)
  const [practitioners, setPractitioners] = useState<Practitioner[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoadingLocation, setIsLoadingLocation] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  // Geocode address
  async function geocodeLocation(address: string) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`,
        {
          headers: { "User-Agent": "Afferentology Directory" },
        },
      )
      const data = await response.json()
      if (data && data.length > 0) {
        return { lat: Number.parseFloat(data[0].lat), lng: Number.parseFloat(data[0].lon) }
      }
      return null
    } catch (error) {
      console.error("Geocoding error:", error)
      return null
    }
  }

  // Use browser geolocation
  async function useCurrentLocation() {
    setIsLoadingLocation(true)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude
          setUserLat(lat)
          setUserLng(lng)
          setLocation("Your current location")
          setIsLoadingLocation(false)
          await searchPractitioners(lat, lng)
        },
        (error) => {
          console.error("Geolocation error:", error)
          setIsLoadingLocation(false)
          alert("Unable to get your location. Please enter your address manually.")
        },
      )
    } else {
      setIsLoadingLocation(false)
      alert("Geolocation is not supported by your browser.")
    }
  }

  // Search for practitioners
  async function searchPractitioners(lat: number, lng: number) {
    setIsSearching(true)
    setHasSearched(true)
    try {
      const response = await fetch(`/api/practitioners/search?lat=${lat}&lng=${lng}&limit=3`)
      const data = await response.json()
      setPractitioners(data.practitioners || [])
    } catch (error) {
      console.error("Search error:", error)
      setPractitioners([])
    } finally {
      setIsSearching(false)
    }
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!location.trim()) return

    const coords = await geocodeLocation(location)
    if (coords) {
      setUserLat(coords.lat)
      setUserLng(coords.lng)
      await searchPractitioners(coords.lat, coords.lng)
    } else {
      alert("Could not find that location. Please try a different address.")
    }
  }

  function getDirectionsUrl(practitioner: Practitioner) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${practitioner.street_address}, ${practitioner.city}, ${practitioner.state} ${practitioner.zip_code}, ${practitioner.country}`,
    )}`
  }

  function getMapUrl(practitioner: Practitioner) {
    return `https://www.google.com/maps/search/?api=1&query=${practitioner.latitude},${practitioner.longitude}`
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl text-balance">
              Find a Certified Practitioner
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Connect with a trained Afferentology practitioner who can help identify and treat your nerve interference.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Search by Location</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <Label htmlFor="location">Enter your address, city, or ZIP code</Label>
                    <div className="flex gap-2">
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., Seattle, WA or 98101"
                        className="flex-1"
                      />
                      <Button type="submit" disabled={isSearching || !location.trim()}>
                        {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
                      </Button>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={useCurrentLocation}
                    disabled={isLoadingLocation}
                    className="w-full bg-transparent"
                  >
                    {isLoadingLocation ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Navigation className="mr-2 h-4 w-4" />
                    )}
                    Use My Current Location
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results */}
            {hasSearched && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {practitioners.length > 0 ? "Nearest Practitioners" : "No Practitioners Found"}
                </h2>

                {practitioners.length === 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center text-muted-foreground">
                        No practitioners found in your area. Try expanding your search or{" "}
                        <Link href="/contact" className="text-primary hover:underline">
                          contact us
                        </Link>{" "}
                        for assistance.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {practitioners.map((practitioner, index) => (
                  <Card key={practitioner.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="text-xl font-bold text-foreground">
                              {practitioner.first_name} {practitioner.last_name}
                            </h3>
                            <span className="rounded-full bg-secondary/10 px-2 py-1 text-xs font-semibold text-secondary">
                              #{index + 1} Closest
                            </span>
                          </div>
                          <p className="text-lg font-medium text-primary">{practitioner.clinic_name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-secondary">{practitioner.distance.toFixed(1)} mi</p>
                          <p className="text-xs text-muted-foreground">away</p>
                        </div>
                      </div>

                      {practitioner.bio && (
                        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{practitioner.bio}</p>
                      )}

                      <div className="mb-4 space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                          <div>
                            <p>{practitioner.street_address}</p>
                            <p>
                              {practitioner.city}, {practitioner.state} {practitioner.zip_code}
                            </p>
                            <p className="text-muted-foreground">{practitioner.country}</p>
                          </div>
                        </div>
                        {practitioner.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <a href={`tel:${practitioner.phone}`} className="text-primary hover:underline">
                              {practitioner.phone}
                            </a>
                          </div>
                        )}
                        {practitioner.website && (
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-muted-foreground" />
                            <a
                              href={practitioner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              Visit Website
                              <ExternalLink className="ml-1 inline h-3 w-3" />
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row">
                        <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                          <a href={getDirectionsUrl(practitioner)} target="_blank" rel="noopener noreferrer">
                            <Navigation className="mr-2 h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                        <Button asChild variant="outline" className="flex-1 bg-transparent">
                          <a href={getMapUrl(practitioner)} target="_blank" rel="noopener noreferrer">
                            <MapPin className="mr-2 h-4 w-4" />
                            View on Map
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Add Practitioner CTA */}
            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="mb-2 text-xl font-bold text-foreground">Are you a certified practitioner?</h3>
                <p className="mb-4 text-muted-foreground">Join our directory to connect with patients seeking help.</p>
                <Button asChild variant="outline">
                  <Link href="/practitioners/submit">Submit Your Practice</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
