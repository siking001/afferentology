// Geocoding utility to convert addresses to lat/lng
export async function geocodeAddress(
  street: string,
  city: string,
  state: string,
  postalCode: string,
  country: string,
): Promise<{ lat: number; lng: number } | null> {
  // Try multiple address formats for better success rate
  const addressFormats = [
    // Format 1: Full address with all components
    `${street}, ${city}, ${state} ${postalCode}, ${country}`,
    // Format 2: Without state (for UK addresses where state might be county)
    `${street}, ${city}, ${postalCode}, ${country}`,
    // Format 3: Just postcode and country (UK postcodes are very specific)
    `${postalCode}, ${country}`,
    // Format 4: City and postcode
    `${city}, ${postalCode}, ${country}`,
  ]

  for (let i = 0; i < addressFormats.length; i++) {
    const address = addressFormats[i]
    console.log(`[v0] Geocoding attempt ${i + 1}:`, address)

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1&addressdetails=1&countrycodes=${getCountryCode(country)}`,
        {
          headers: {
            "User-Agent": "Afferentology Directory (afferentology.org)",
          },
        },
      )

      if (!response.ok) {
        console.error("[v0] Geocoding API error:", response.status, response.statusText)
        continue
      }

      const data = await response.json()

      if (data && data.length > 0) {
        console.log("[v0] Geocoding succeeded on attempt", i + 1)
        return {
          lat: Number.parseFloat(data[0].lat),
          lng: Number.parseFloat(data[0].lon),
        }
      }

      // Small delay between attempts to respect API rate limits
      await new Promise((resolve) => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`[v0] Geocoding error on attempt ${i + 1}:`, error)
      continue
    }
  }

  console.error("[v0] All geocoding attempts failed for:", addressFormats[0])
  return null
}

function getCountryCode(country: string): string {
  const countryMap: { [key: string]: string } = {
    "United Kingdom": "gb",
    Ireland: "ie",
    "United States": "us",
    UK: "gb",
    USA: "us",
  }
  return countryMap[country] || ""
}

// Calculate distance between two points using Haversine formula (in miles)
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3959 // Earth's radius in miles
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180)
}
