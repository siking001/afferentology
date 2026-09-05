import { handleUpload, type HandleUploadBody } from "@vercel/blob/client"
import { type NextRequest, NextResponse } from "next/server"

// Client-side uploads bypass the 4.5MB serverless request-body limit by sending
// the file directly from the browser to Vercel Blob. This route only signs the
// request and records the result, so large video files work fine.
export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: [
            "video/mp4",
            "video/webm",
            "video/ogg",
            "video/quicktime",
            "video/x-m4v",
          ],
          maximumSizeInBytes: 500 * 1024 * 1024, // 500MB ceiling
          addRandomSuffix: true,
        }
      },
      onUploadCompleted: async () => {
        // No-op: the client receives the blob URL directly from the upload call.
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error("Video upload error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to upload video" },
      { status: 400 },
    )
  }
}
