"use client"

import type React from "react"

import { useState } from "react"
import { upload } from "@vercel/blob/client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Video, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface VideoUploadProps {
  // Called with a ready-to-embed <video> HTML snippet once the upload finishes.
  onInsert: (embedHtml: string) => void
}

export function VideoUpload({ onInsert }: VideoUploadProps) {
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
      const blob = await upload(`articles/video/${safeName}`, file, {
        access: "public",
        handleUploadUrl: "/api/articles/upload-video",
        onUploadProgress: (event) => setProgress(Math.round(event.percentage)),
      })

      const embedHtml = `<video controls preload="none" playsinline style="width:100%;height:auto">\n  <source src="${blob.url}" type="${file.type || "video/mp4"}" />\n  Your browser does not support the video element.\n</video>`

      onInsert(embedHtml)

      toast({
        title: "Video uploaded",
        description: "A player has been inserted into your article content.",
      })
    } catch (error) {
      console.error("Video upload error:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload video.",
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
        <Video className="h-5 w-5 text-primary" />
        <Label className="text-base font-medium">Embed Video</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Upload a video file (up to 500MB). It uploads directly to storage and a player is inserted into the content
        above.
      </p>
      <div className="relative inline-block">
        <input
          type="file"
          accept="video/*"
          onChange={handleUpload}
          disabled={isUploading}
          className="absolute inset-0 opacity-0 cursor-pointer"
          id="video-upload"
        />
        <Button type="button" variant="outline" disabled={isUploading} className="bg-transparent" asChild>
          <label htmlFor="video-upload" className="cursor-pointer">
            <Upload className="mr-2 h-4 w-4" />
            {isUploading ? `Uploading... ${progress}%` : "Upload Video"}
          </label>
        </Button>
      </div>
    </div>
  )
}
