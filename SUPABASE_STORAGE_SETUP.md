# Supabase Storage Setup for Article Images

## Quick Setup

Run the SQL script `scripts/004_create_storage_bucket.sql` in your Supabase SQL Editor to create the storage bucket and policies.

**What it does:**
1. Creates a public storage bucket called `article-images`
2. Sets up RLS policies to:
   - Allow anyone to view images (public read access)
   - Allow the service role to upload/delete images (admin only)

## Using the Image Upload Feature

Once the storage bucket is created, you can:

1. **Upload images** - In the article form, click "Upload" to select an image from your computer
2. **Or paste URLs** - You can still paste image URLs from external sources
3. **Preview** - See the uploaded image preview with the option to remove it
4. **Auto-hosting** - Images are automatically hosted on Supabase Storage with public URLs

**File Requirements:**
- Accepted formats: JPEG, PNG, WebP, GIF
- Maximum size: 5MB per image
- Images are stored permanently in your Supabase project

## Manual Setup (if needed)

If you prefer to create the bucket manually in Supabase Dashboard:

1. Go to Storage → Create bucket
2. Name it: `article-images`
3. Make it public: ✅
4. Add policies for public read and authenticated upload (use the SQL script for exact policies)
