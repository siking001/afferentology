# Importing Practitioners from CSV

This guide explains how to import your existing practitioners from the CSV file into the Supabase database.

## Prerequisites

- Python 3.7 or higher installed
- Supabase service role key in your environment variables

## Installation

1. Install the required Python package:
   \`\`\`bash
   pip install supabase
   \`\`\`

2. Set your environment variables:
   \`\`\`bash
   export SUPABASE_URL="https://uhvecjdalejhfhubaixu.supabase.co"
   export SUPABASE_SERVICE_ROLE_KEY="your_service_role_key_here"
   \`\`\`
   
   Or on Windows:
   \`\`\`cmd
   set SUPABASE_URL=https://uhvecjdalejhfhubaixu.supabase.co
   set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   \`\`\`

## Running the Import

1. Navigate to the project directory in your terminal

2. Run the import script:
   \`\`\`bash
   python scripts/import_practitioners_csv.py
   \`\`\`

## What the Script Does

The script will:
1. Read the CSV file with all your existing practitioners
2. Map the CSV fields to match the Supabase practitioners table:
   - `title` → `first_name` + `last_name` (splits the full name)
   - `description` → `clinic_name` (practice name)
   - `street` → `street_address`
   - `lat` → `latitude`
   - `lng` → `longitude`
   - `categories` → `certifications` (e.g., "Certified")
   - `description_2` → `bio`
3. Import all practitioners with `status = 'approved'` (they'll appear immediately in the directory)
4. Skip any entries without email addresses
5. Print a summary of imported and skipped entries

## Field Mapping

| CSV Column | Supabase Field |
|------------|----------------|
| title | first_name, last_name |
| description | clinic_name |
| street | street_address |
| city | city |
| state | state |
| postal_code | zip_code |
| country | country |
| lat | latitude |
| lng | longitude |
| phone | phone |
| email | email |
| website | website |
| categories | certifications |
| description_2 | bio |

## After Import

Once imported, all practitioners will:
- Appear in the public directory at `/find-practitioner`
- Be searchable by location
- Have "approved" status
- Be visible in the admin panel at `/admin/practitioners`

## Troubleshooting

**Issue**: Import fails with authentication error
- **Solution**: Make sure your `SUPABASE_SERVICE_ROLE_KEY` is set correctly

**Issue**: Some practitioners are skipped
- **Solution**: Check the error messages. Common reasons:
  - Missing email address
  - Invalid latitude/longitude values
  - Missing required fields

**Issue**: Duplicate practitioners
- **Solution**: The script doesn't check for duplicates. If you run it multiple times, you'll get duplicate entries. You can delete duplicates from the admin panel or Supabase dashboard.
