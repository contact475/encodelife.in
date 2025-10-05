# Email Setup Guide for Encode Life Contact Form

## Overview
The contact form uses **Resend** to send emails directly without a backend or database. When users submit the form, it triggers a Next.js API route that sends a formatted email to your inbox.

---

## Setup Steps

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

### 2. Get Your API Key
1. Go to [API Keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Encode Life Production")
4. Copy the API key (starts with `re_`)

### 3. Configure Environment Variables

#### Local Development:
1. Open `.env.local` file in the project root
2. Add your credentials:
```env
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=your-email@example.com
```

#### Vercel Deployment:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add two variables:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_EMAIL` = email where you want to receive submissions
4. Make sure to add them for **Production**, **Preview**, and **Development** environments

### 4. Domain Setup (Optional but Recommended)

By default, Resend uses `onboarding@resend.dev` as the sender. For production:

1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `encodelife.com`)
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually 5-10 minutes)
6. Update the API route:

```typescript
// In app/api/send-email/route.ts, change:
from: 'Encode Life Contact <onboarding@resend.dev>',
// To:
from: 'Encode Life Contact <contact@yourdomain.com>',
```

---

## Testing

### Local Testing:
```bash
npm run dev
```
1. Navigate to the contact section
2. Fill out the form
3. Click "Send message"
4. Check your email inbox

### Production Testing:
After deploying to Vercel, test the live form to ensure emails are being sent.

---

## Email Format

Users will receive a beautifully formatted email with:
- 🌱 Green theme matching your brand
- All form fields clearly labeled
- User's email as reply-to (you can reply directly)
- Timestamp of submission
- Responsive HTML design

---

## Troubleshooting

### "Failed to send email" error:
- Check that `RESEND_API_KEY` is set correctly in Vercel
- Verify the API key is active in Resend dashboard
- Check Vercel function logs for detailed errors

### Not receiving emails:
- Check spam/junk folder
- Verify `CONTACT_EMAIL` is set correctly
- Check Resend dashboard for delivery logs

### Rate limits:
- Free tier: 100 emails/day, 3,000/month
- If you need more, upgrade to a paid plan

---

## Cost

**Free Tier:**
- 100 emails/day
- 3,000 emails/month
- Perfect for most small to medium websites

**Paid Plans:**
- Start at $20/month for 50,000 emails
- See [pricing](https://resend.com/pricing)

---

## Security Notes

- Never commit `.env.local` to git (already in .gitignore)
- API keys are server-side only (not exposed to browser)
- Form includes basic validation
- Rate limiting handled by Vercel Edge Functions

---

## Support

- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
