# Supabase Setup Instructions

## Step 1: Run the Database Script

You need to run the SQL script to create the practitioners table and set up permissions.

### Option A: Run in Supabase SQL Editor (Recommended)
1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/uhvecjdalejhfhubaixu
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the contents of `scripts/001_create_practitioners_table.sql`
5. Click "Run" to execute
6. Then copy and paste the contents of `scripts/002_fix_rls_policies.sql`
7. Click "Run" again

### Option B: Check if Table Already Exists
1. Go to "Table Editor" in your Supabase dashboard
2. Look for a table called "practitioners"
3. If it exists, you only need to run `scripts/002_fix_rls_policies.sql` to fix the permissions

## Step 2: Verify the Setup

After running the scripts, test the form again at `/practitioners/submit`

## Common Issues

**"row-level security policy" error**: The RLS policies aren't set up correctly. Run `scripts/002_fix_rls_policies.sql`

**"relation 'practitioners' does not exist"**: The table hasn't been created. Run `scripts/001_create_practitioners_table.sql`

**No email received**: Check that `RESEND_API_KEY` is set in your environment variables
