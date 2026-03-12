"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

export default function MigrateImagesPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleMigrate = async () => {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("/api/admin/migrate-images", {
        method: "POST",
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.details || data.error || "Migration failed")
      } else {
        setResult(data)
      }
    } catch (err: any) {
      setError(err.message || "Failed to start migration")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Migrate Base64 Images to Vercel Blob</CardTitle>
          <CardDescription>
            Convert all existing base64-encoded article images to Vercel Blob storage URLs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
            <p className="text-sm text-amber-800">
              This process will upload all base64 images to Vercel Blob storage and update the database with the new URLs.
              This cannot be undone.
            </p>
          </div>

          <Button onClick={handleMigrate} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Migrating...
              </>
            ) : (
              "Start Migration"
            )}
          </Button>

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-red-800">{error}</div>
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div className="rounded-lg bg-green-50 border border-green-200 p-4 flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-green-800">Migration completed!</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{result.total}</div>
                  <div className="text-xs text-muted-foreground">Total Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{result.successful}</div>
                  <div className="text-xs text-muted-foreground">Successful</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{result.failed}</div>
                  <div className="text-xs text-muted-foreground">Failed</div>
                </div>
              </div>

              {result.errors && result.errors.length > 0 && (
                <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Errors:</h4>
                  <ul className="space-y-1 text-sm text-yellow-800">
                    {result.errors.map((error: string, index: number) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.message && <div className="text-sm text-muted-foreground italic">{result.message}</div>}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
