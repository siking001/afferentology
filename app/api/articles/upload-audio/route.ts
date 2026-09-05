import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { type NextRequest, NextResponse } from "next/server"

// Client-side uploads bypass the 4.5MB serverless request-body limit by sending
// the file directly from the browser to Vercel Blob. This route only signs the
// request and records the result, so large files (e.g. 32MB audio) work fine.
export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: [
            "audio/mpeg",
            "audio/mp3",
            "audio/wav",
            "audio/x-wav",
            "audio/ogg",
            "audio/webm",
            "audio/aac",
            "audio/mp4",
            "audio/x-m4a",
          ],
          maximumSizeInBytes: 100 * 1024 * 1024, // 100MB ceiling
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {
        // No-op: the client receives the blob URL directly from the upload call.
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error("Audio upload error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to upload audio" },
      { status: 400 },
    )
  }
}
