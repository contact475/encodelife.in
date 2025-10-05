# Encode Life - Deployment Guide

## 🚀 Deployment to Vercel (encodelife.in)

This guide will help you deploy the Encode Life website to Vercel and connect it to your domain encodelife.in.

---

## 📋 Pre-Deployment Checklist

### ✅ What's Ready:
- ✅ Next.js 15 application with Turbopack
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark mode by default with theme toggle
- ✅ Contact form with Resend email integration
- ✅ Blog system with MDX support
- ✅ All images optimized and in public folder
- ✅ Collaborator logos (DPIIT, IIT Guwahati, Make in India, etc.)
- ✅ PLA Journey section with custom images
- ✅ Smooth animations and scroll effects

### 🔧 Environment Variables Needed:
You'll need to set these in Vercel:
```
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=contact@encodelife.in
```

---

## 📝 Step-by-Step Deployment

### Step 1: Clean Up Repository
Remove unnecessary files before pushing:
```bash
# Remove documentation files (optional - keep if you want them in repo)
rm -rf blog-template-main
rm userinput.py
rm improvments
```

### Step 2: Initialize Git (if needed)
```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Encode Life website ready for deployment"
```

### Step 3: Create GitHub Repository
1. Go to https://github.com/new
2. Create a new repository named `encode-life` or `encodelife-website`
3. Don't initialize with README (we already have one)

### Step 4: Push to GitHub
```bash
# Add remote origin (replace with your GitHub username/org)
git remote add origin https://github.com/YOUR_USERNAME/encode-life.git

# Push to GitHub
git push -u origin master
```

### Step 5: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   
5. Add Environment Variables:
   - Click "Environment Variables"
   - Add `RESEND_API_KEY` with your Resend API key
   - Add `CONTACT_EMAIL` with `contact@encodelife.in`

6. Click "Deploy"

#### Option B: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts and add environment variables when asked
```

### Step 6: Connect Custom Domain (encodelife.in)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `encodelife.in`
4. Add domain: `www.encodelife.in`
5. Vercel will provide DNS records

6. Update your domain DNS settings:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`

7. Wait for DNS propagation (5-30 minutes)

---

## 🔐 Environment Variables Setup

### Get Resend API Key:
1. Go to https://resend.com
2. Sign up / Log in
3. Go to API Keys section
4. Create new API key
5. Copy the key (starts with `re_`)

### Add to Vercel:
1. Project Settings → Environment Variables
2. Add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key
   - **Environment**: Production, Preview, Development
   
3. Add:
   - **Name**: `CONTACT_EMAIL`
   - **Value**: `contact@encodelife.in`
   - **Environment**: Production, Preview, Development

---

## 🧪 Testing After Deployment

### Test these features:
- ✅ Homepage loads correctly
- ✅ Dark/Light theme toggle works
- ✅ Mobile menu works
- ✅ All images load (logos, PLA journey, etc.)
- ✅ Smooth scroll to sections works
- ✅ Contact form submits successfully
- ✅ Blog pages load correctly
- ✅ All links work (About, Blog, Contact)

### Test Contact Form:
1. Go to contact section
2. Fill out form
3. Submit
4. Check email at `contact@encodelife.in`

---

## 📊 Performance Optimization

Already implemented:
- ✅ Next.js Image optimization
- ✅ WebP images for better compression
- ✅ Code splitting and lazy loading
- ✅ Turbopack for faster builds
- ✅ CSS optimization with Tailwind

---

## 🔄 Future Updates

To update the website:
```bash
# Make changes to code
# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin master

# Vercel will auto-deploy
```

---

## 🐛 Troubleshooting

### Build Fails:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check for TypeScript errors

### Contact Form Not Working:
- Verify RESEND_API_KEY is set correctly
- Check Resend dashboard for API usage
- Verify email domain is verified in Resend

### Images Not Loading:
- Ensure images are in `/public` folder
- Check image paths start with `/`
- Verify images are committed to git

### Domain Not Working:
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check domain status in Vercel

---

## 📞 Support

For issues:
- Check Vercel documentation: https://vercel.com/docs
- Check Next.js documentation: https://nextjs.org/docs
- Check Resend documentation: https://resend.com/docs

---

## ✨ Features Summary

### Pages:
- **Home**: Hero, About, Features, PLA Journey, Blog preview, Contact
- **Blog**: List of articles with MDX support
- **Blog Posts**: Individual article pages

### Components:
- Responsive navigation with mobile menu
- Theme toggle (dark/light mode)
- Contact form with email integration
- Collaborator logos slider
- PLA Journey steps
- Zoom parallax effect
- Feature sections with hover effects
- Footer with social links

### Integrations:
- Resend for email
- Next Themes for dark mode
- Framer Motion for animations
- Tailwind CSS for styling

---

**Ready to deploy! 🚀**
