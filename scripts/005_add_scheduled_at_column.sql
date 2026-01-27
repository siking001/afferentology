-- Add scheduled_at column for future publication scheduling
ALTER TABLE articles ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMP WITH TIME ZONE;

-- Create index on scheduled_at for efficient querying of scheduled articles
CREATE INDEX IF NOT EXISTS idx_articles_scheduled_at ON articles(scheduled_at);

-- Update the RLS policy to also show articles where scheduled_at has passed
DROP POLICY IF EXISTS "Public can view published articles" ON articles;

CREATE POLICY "Public can view published articles"
  ON articles
  FOR SELECT
  USING (
    published = true 
    OR (scheduled_at IS NOT NULL AND scheduled_at <= NOW())
  );
