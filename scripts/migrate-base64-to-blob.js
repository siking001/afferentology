const { put } = require("@vercel/blob");
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrateBase64ToBlob() {
  console.log("Starting migration of base64 images to Vercel Blob...\n");

  // Fetch all articles with base64 featured images
  const { data: articles, error } = await supabase
    .from("articles")
    .select("id, title, featured_image_url")
    .like("featured_image_url", "data:%");

  if (error) {
    console.error("Error fetching articles:", error);
    process.exit(1);
  }

  if (!articles || articles.length === 0) {
    console.log("No articles with base64 images found. Nothing to migrate.");
    return;
  }

  console.log(`Found ${articles.length} articles with base64 images to migrate.\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const article of articles) {
    try {
      console.log(`Processing: "${article.title}" (ID: ${article.id})`);

      const base64Data = article.featured_image_url;
      
      // Parse the base64 data URL
      const matches = base64Data.match(/^data:([^;]+);base64,(.+)$/);
      if (!matches) {
        console.log(`  - Skipping: Invalid base64 format`);
        errorCount++;
        continue;
      }

      const mimeType = matches[1];
      const base64Content = matches[2];

      // Convert base64 to Buffer
      const buffer = Buffer.from(base64Content, "base64");

      // Determine file extension from mime type
      const extMap = {
        "image/jpeg": "jpg",
        "image/jpg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
        "image/gif": "gif",
      };
      const extension = extMap[mimeType] || "jpg";

      // Generate a unique filename
      const filename = `articles/migrated-${article.id}-${Date.now()}.${extension}`;

      // Upload to Vercel Blob
      const blob = await put(filename, buffer, {
        access: "public",
        contentType: mimeType,
      });

      console.log(`  - Uploaded to Blob: ${blob.url}`);

      // Update the database with the new URL
      const { error: updateError } = await supabase
        .from("articles")
        .update({ featured_image_url: blob.url })
        .eq("id", article.id);

      if (updateError) {
        console.log(`  - Error updating database: ${updateError.message}`);
        errorCount++;
        continue;
      }

      console.log(`  - Database updated successfully\n`);
      successCount++;
    } catch (err) {
      console.error(`  - Error processing article ${article.id}:`, err.message);
      errorCount++;
    }
  }

  console.log("\n--- Migration Complete ---");
  console.log(`Successfully migrated: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
}

migrateBase64ToBlob().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
