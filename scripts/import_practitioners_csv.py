import csv
import os
from supabase import create_client, Client

# Initialize Supabase client with service role key (bypasses RLS)
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
supabase: Client = create_client(url, key)

def parse_name(full_name):
    """Split full name into first and last name"""
    parts = full_name.strip().strip('"').split()
    if len(parts) == 0:
        return "Unknown", "Unknown"
    elif len(parts) == 1:
        return parts[0], ""
    else:
        # First word is first name, rest is last name
        return parts[0], " ".join(parts[1:])

def import_practitioners():
    """Import practitioners from CSV file"""
    
    # Path to the CSV file
    csv_file = "user_read_only_context/text_attachments/stores-data-export-h5er9.csv"
    
    imported_count = 0
    skipped_count = 0
    errors = []
    
    with open(csv_file, 'r', encoding='utf-8') as file:
        csv_reader = csv.DictReader(file)
        
        for row in csv_reader:
            try:
                # Skip if no email
                if not row.get('email'):
                    skipped_count += 1
                    continue
                
                # Parse name from title field
                first_name, last_name = parse_name(row.get('title', ''))
                
                # Build practitioner data
                practitioner_data = {
                    'first_name': first_name,
                    'last_name': last_name or 'N/A',
                    'email': row.get('email', '').strip(),
                    'phone': row.get('phone', '').strip() or None,
                    'clinic_name': row.get('description', '').strip() or f"{first_name} {last_name} Practice",
                    'website': row.get('website', '').strip() or None,
                    'street_address': row.get('street', '').strip() or 'Not provided',
                    'city': row.get('city', '').strip() or 'Unknown',
                    'state': row.get('state', '').strip() or '',
                    'zip_code': row.get('postal_code', '').strip() or '',
                    'country': row.get('country', '').strip() or 'Unknown',
                    'latitude': float(row.get('lat')) if row.get('lat') else None,
                    'longitude': float(row.get('lng')) if row.get('lng') else None,
                    'certifications': [row.get('categories', 'Certified').strip()] if row.get('categories') else ['Certified'],
                    'bio': row.get('description_2', '').strip() or None,
                    'status': 'approved',  # Import all as approved
                    'approved_at': 'now()',
                    'approved_by': 'CSV Import'
                }
                
                # Insert into Supabase
                result = supabase.table('practitioners').insert(practitioner_data).execute()
                
                imported_count += 1
                print(f"✓ Imported: {first_name} {last_name} ({row.get('city', 'Unknown')})")
                
            except Exception as e:
                skipped_count += 1
                error_msg = f"Error importing {row.get('title', 'Unknown')}: {str(e)}"
                errors.append(error_msg)
                print(f"✗ {error_msg}")
    
    # Print summary
    print("\n" + "="*60)
    print(f"Import Complete!")
    print(f"Successfully imported: {imported_count}")
    print(f"Skipped: {skipped_count}")
    print("="*60)
    
    if errors:
        print("\nErrors encountered:")
        for error in errors[:10]:  # Show first 10 errors
            print(f"  - {error}")

if __name__ == "__main__":
    print("Starting practitioner import from CSV...")
    print("="*60)
    import_practitioners()
