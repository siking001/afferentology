-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view approved practitioners" ON practitioners;
DROP POLICY IF EXISTS "Anyone can submit practitioner application" ON practitioners;

-- Recreate policies with explicit permissions
-- Policy: Anyone can read approved practitioners
CREATE POLICY "Public can view approved practitioners"
  ON practitioners
  FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

-- Policy: Anonymous users can insert (submit application)  
CREATE POLICY "Anyone can submit practitioner application"
  ON practitioners
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (status = 'pending');

-- Policy: Service role can do everything (for admin operations)
CREATE POLICY "Service role has full access"
  ON practitioners
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
