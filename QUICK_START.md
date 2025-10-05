# 🚀 Quick Start: Contact Form Email Setup

## What You Need (5 minutes setup)

### 1️⃣ Get Resend API Key
1. Go to **[resend.com](https://resend.com)** and sign up (FREE)
2. Go to **[API Keys](https://resend.com/api-keys)**
3. Click **"Create API Key"**
4. Copy the key (starts with `re_`)

### 2️⃣ Configure Locally

Edit `.env.local` file:
```env
RESEND_API_KEY=re_your_actual_key_here
CONTACT_EMAIL=contact@encodelife.in
```

⚠️ **IMPORTANT:** For testing, `CONTACT_EMAIL` must be the same email you used to sign up for Resend!
To send to other emails, you need to verify your domain (see `RESEND_TESTING_GUIDE.md`)

### 3️⃣ Test Locally
```bash
npm run dev
```
- Open http://localhost:3000
- Scroll to contact form
- Submit a test message
- Check your email! 📧

---

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add contact form with Resend"
git push
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Before deploying, add **Environment Variables**:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_EMAIL` = your email address
4. Click **Deploy**

### Step 3: Test Production
- Visit your live site
- Submit the contact form
- Check your email!

---

## 📧 Email Preview

You'll receive emails formatted like this:

```
🌱 New Contact Form Submission
Encode Life Website

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +1 234 567 8900
🏢 Company: Acme Corp
💬 Message: Interested in PLA bioplastics...

Received at Monday, January 6, 2025 at 3:45 PM
```

---

## 💰 Pricing

**Resend Free Tier:**
- ✅ 100 emails/day
- ✅ 3,000 emails/month
- ✅ Perfect for most websites

---

## ⚡ Features Included

✅ No backend needed
✅ No database needed
✅ Serverless (runs on Vercel Edge)
✅ Beautiful HTML email template
✅ Form validation
✅ Loading states
✅ Success/error messages
✅ Reply-to user's email
✅ Mobile responsive

---

## 🔧 Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify `CONTACT_EMAIL` in Vercel settings
- Check Resend dashboard for logs

**"Failed to send" error?**
- Verify `RESEND_API_KEY` is correct
- Check Vercel function logs
- Ensure API key is active in Resend

---

## 📚 Full Documentation

See `SETUP_EMAIL.md` for detailed setup including custom domain configuration.
