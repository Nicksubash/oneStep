# EmailJS Setup Guide for Gmail Integration

This guide will help you set up EmailJS to send emails directly to Gmail from your contact forms.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. **Add Email Service:**
   - Go to EmailJS Dashboard → Email Services
   - Click "Add New Service"
   - Choose "Gmail" from the list
   - Connect your Gmail account (the email that will receive the form submissions)

2. **Get Service ID:**
   - After connecting, you'll get a Service ID (e.g., `service_abc123`)
   - Copy this ID

## Step 3: Create Email Templates

### For Company Contact Form:
1. Go to EmailJS Dashboard → Email Templates
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Company Inquiry from {{from_name}}

Hello,

You have received a new company inquiry:

**Company Details:**
- Company/Organization: {{company}}
- Department: {{department}}

**Contact Person:**
- Name (Kanji): {{from_name}}
- Email: {{from_email}}

**Message:**
{{message}}

---
This email was sent from your website contact form.
Reply to: {{reply_to}}
```

4. Save the template and copy the Template ID (e.g., `template_xyz789`)

### For Job Application Form:
1. Create another template for job applications
2. Use this template:

```html
Subject: New Job Application from {{from_name}}

Hello,

You have received a new job application:

**Personal Information:**
- Full Name: {{from_name}}
- Email: {{from_email}}
- Gender: {{gender}}
- Date of Birth: {{birth_date}}
- Nationality: {{nationality}}
- Phone: {{contact}}

**Visa & Language:**
- Visa Type: {{visa_type}}
- Japanese Level: {{japanese_level}}

**Professional Details:**
- Desired Job: {{desired_job}}
- Major Field: {{major_field}}

**Education & Experience:**
{{education_experience}}

**Self Introduction:**
{{self_intro}}

**Additional Consultation:**
{{consultation}}

---
This application was submitted through your website.
Reply to: {{reply_to}}
```

## Step 4: Get Your Public Key

1. Go to EmailJS Dashboard → Account → API Keys
2. Copy your Public Key

## Step 5: Update Configuration

Edit `src/config/emailjs.js` and replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  // Replace with your actual EmailJS public key
  PUBLIC_KEY: "your_actual_public_key_here",
  
  // Replace with your EmailJS service ID
  SERVICE_ID: "your_service_id_here",
  
  // Replace with your template IDs
  TEMPLATES: {
    COMPANY_CONTACT: "your_company_template_id_here",
    JOB_APPLICATION: "your_job_template_id_here",
  }
};
```

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Fill out and submit a contact form
3. Check your Gmail inbox for the email
4. Check the browser console for any errors

## Alternative Options

### Option 2: Formspree (Even Easier)
If EmailJS seems complex, you can use Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create an account and get your form endpoint
3. Replace the form action with your Formspree endpoint

### Option 3: Netlify Forms (If Deploying to Netlify)
If you're deploying to Netlify, you can use their built-in form handling:

1. Add `data-netlify="true"` to your form
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify will automatically handle form submissions

### Option 4: Backend API (Most Control)
For complete control, create a backend API:

1. Set up a Node.js/Express server
2. Use Nodemailer to send emails
3. Create API endpoints for form submissions
4. Update your forms to call these endpoints

## Troubleshooting

### Common Issues:

1. **"EmailJS is not defined"**
   - Make sure you've installed `@emailjs/browser`
   - Check that the import is correct

2. **"Service ID not found"**
   - Verify your Service ID in the EmailJS dashboard
   - Make sure you've connected your Gmail account

3. **"Template ID not found"**
   - Verify your Template ID in the EmailJS dashboard
   - Make sure the template is published

4. **Emails not received**
   - Check your Gmail spam folder
   - Verify the Gmail account connection in EmailJS
   - Check the EmailJS dashboard for delivery status

### Security Notes:

- Never commit your actual EmailJS keys to version control
- Consider using environment variables for production
- The public key is safe to expose in frontend code
- Service and template IDs are also safe to expose

## Environment Variables (Recommended for Production)

Create a `.env` file in your project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_COMPANY_TEMPLATE_ID=your_company_template_id_here
VITE_EMAILJS_JOB_TEMPLATE_ID=your_job_template_id_here
```

Then update `src/config/emailjs.js`:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATES: {
    COMPANY_CONTACT: import.meta.env.VITE_EMAILJS_COMPANY_TEMPLATE_ID,
    JOB_APPLICATION: import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
  }
};
```

Don't forget to add `.env` to your `.gitignore` file! 