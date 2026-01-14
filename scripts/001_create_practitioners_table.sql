-- Create practitioners table with geolocation support
CREATE TABLE IF NOT EXISTS practitioners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Practice Information
  clinic_name TEXT NOT NULL,
  website TEXT,
  
  -- Address
  street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  country TEXT DEFAULT 'United States' NOT NULL,
  
  -- Geolocation (for distance calculations)
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Qualifications
  certifications TEXT[],
  years_experience INTEGER,
  specialties TEXT[],
  bio TEXT,
  
  -- Approval Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')) NOT NULL,
  approved_at TIMESTAMP WITH TIME ZONE,
  approved_by TEXT,
  
  -- Metadata
  notes TEXT
);

-- Create index for geolocation queries
CREATE INDEX IF NOT EXISTS idx_practitioners_location ON practitioners(latitude, longitude);

-- Create index for status queries
CREATE INDEX IF NOT EXISTS idx_practitioners_status ON practitioners(status);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_practitioners_email ON practitioners(email);

-- Enable Row Level Security
ALTER TABLE practitioners ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read approved practitioners
CREATE POLICY "Public can view approved practitioners"
  ON practitioners
  FOR SELECT
  USING (status = 'approved');

-- Policy: Anyone can insert (submit application)
CREATE POLICY "Anyone can submit practitioner application"
  ON practitioners
  FOR INSERT
  WITH CHECK (true);

-- Note: Admin policies will need to be added after setting up authentication
-- For now, you'll need to manually approve practitioners in the Supabase dashboard
