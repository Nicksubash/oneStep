# Get Your EmailJS Public Key

## Step 1: Get Your Public Key

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click on **"Account"** in the left sidebar
3. Click on **"API Keys"** tab
4. Copy your **Public Key** (it looks like: `user_abc123def456ghi789`)

## Step 2: Update Your .env File

Replace `YOUR_PUBLIC_KEY_HERE` in your `.env` file with your actual public key:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=user_your_actual_public_key_here
VITE_EMAILJS_SERVICE_ID=service_o9xjwyn
VITE_EMAILJS_COMPANY_TEMPLATE_ID=template_271j4ug
VITE_EMAILJS_JOB_TEMPLATE_ID=template_271j4ug
```

## Step 3: Test Your Setup

1. Start your development server: `npm run dev`
2. Go to your contact form page
3. Fill out and submit the form
4. Check your Gmail inbox for the email
5. Check browser console for any errors

## Your Current Configuration:

- ✅ **Service ID**: `service_o9xjwyn`
- ✅ **Template ID**: `template_271j4ug`
- ⏳ **Public Key**: Need to add this to `.env` file

## Troubleshooting:

If you get errors, check:
1. Public key is correctly added to `.env` file
2. Service ID and Template ID are correct
3. Gmail account is connected in EmailJS dashboard
4. Template is published in EmailJS dashboard 