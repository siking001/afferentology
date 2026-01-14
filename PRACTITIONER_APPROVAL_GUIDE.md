# Practitioner Approval Guide

## How to Approve Practitioner Listings

### 1. Receive Email Notification
When a practitioner submits their application, you'll receive an email at **info@afferentology.org** with:
- Practitioner's name and contact information
- Clinic details and location
- Years of experience and certifications
- A direct link to the admin dashboard

### 2. Access the Admin Dashboard
Click the "Review Application" button in the email, or manually navigate to:
**https://afferentology.org/admin/practitioners**

### 3. Review the Application
The admin dashboard shows all practitioners organized by status:
- **Pending**: New applications awaiting your review
- **Approved**: Active listings visible to the public
- **Rejected**: Declined applications

For each pending application, you can see:
- Complete practitioner information
- Clinic location and contact details
- Professional credentials
- Years of experience

### 4. Approve or Reject
- Click the **green "Approve"** button to make the practitioner visible in the public directory
- Click the **red "Reject"** button to decline the application

Once approved, the practitioner will immediately appear in the "Find a Practitioner" search results for patients.

### 5. Manage Existing Practitioners
You can also:
- View all approved practitioners
- Change a practitioner's status if needed
- See the complete directory at a glance

## Setting Up Email Notifications

### Required: Resend API Key
1. Sign up for a free account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your Vercel environment variables as `RESEND_API_KEY`

### Domain Setup (Optional but Recommended)
For professional emails from `notifications@afferentology.org`:
1. Add your domain in Resend
2. Configure DNS records as shown in Resend dashboard
3. Verify domain ownership

Without domain setup, emails will come from a Resend default address but will still work.
