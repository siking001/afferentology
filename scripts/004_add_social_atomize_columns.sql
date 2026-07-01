-- Adds storage columns for the four generated social/atomize formats.
-- Safe to run multiple times.
ALTER TABLE articles
ADD COLUMN IF NOT EXISTS linkedin_post TEXT,
ADD COLUMN IF NOT EXISTS facebook_post TEXT,
ADD COLUMN IF NOT EXISTS substack_intro TEXT,
ADD COLUMN IF NOT EXISTS email_snippet TEXT;
