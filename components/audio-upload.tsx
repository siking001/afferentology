"use client"

import type React from "react"

import { useState } from "react"
import { upload } from "@vercel/blob/client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Music, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface AudioUploadProps {
  // Called with a ready-to-embed <audio> HTML snippet once the upload finishes.
  onInsert: (embedHtml: string) => void
}

export function AudioUpload({ onInsert }: AudioUploadProps) {
  const { toast } = useToast()
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setProgress(0)

    try {
      const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
      const blob = await upload(`articles/audio/${safeName}`, file, {
        access: "public",
        handleUploadUrl: "/api/articles/upload-audio",
        onUploadProgress: (event) => setProgress(Math.round(event.percentage)),
      })

      const embedHtml = `<audio controls preload="none" style="width:100%">\n  <source src="${blob.url}" type="${file.type || "audio/mpeg"}" />\n  Your browser does not support the audio element.\n</audio>`

      onInsert(embedHtml)

      toast({
        title: "Audio uploaded",
        description: "A player has been inserted into your article content.",
      })
    } catch (error) {
      console.error("Audio upload error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload audio.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
      setProgress(0)
      // Reset the input so the same file can be re-selected if needed.
      e.target.value = ""
    }
  }

  return (
    <div className="space-y-2 rounded-lg border p-4 bg-muted/20">
      <div className="flex items-center gap-2">
        <Music className="h-5 w-5 text-primary" />
        <Label className="text-base font-medium">Embed Audio</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Upload an audio file (up to 100MB). It uploads directly to storage and a player is inserted into the content
        above.
      </p>
      <div className="relative inline-block">
        <input
          type="file"
          accept="audio/*"
          onChange={handleUpload}
          disabled={isUploading}
          className="absolute inset-0 opacity-0 cursor-pointer"
          id="audio-upload"
        />
        <Button type="button" variant="outline" disabled={isUploading} className="bg-transparent" asChild>
          <label htmlFor="audio-upload" className="cursor-pointer">
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? `Uploading... ${progress}%` : "Upload Audio"}
          </label>
        </Button>
      </div>
    </div>
  )
}
