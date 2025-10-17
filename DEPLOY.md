# 🚀 Quick Deployment Commands

## Step 1: Add All Files to Git

```bash
git add .
```

## Step 2: Commit Changes

```bash
git commit -m "feat: Complete Encode Life website ready for production

- Responsive design for mobile, tablet, desktop
- Dark mode by default with theme toggle
- Contact form with Resend integration
- Blog system with MDX support
- PLA Journey section with custom images
- Collaborator logos (DPIIT, IIT Guwahati, Make in India, etc.)
- Smooth animations and scroll effects
- SEO optimized
- Performance optimized with Next.js 15 and Turbopack"
```

## Step 3: Check Remote Repository

```bash
git remote -v
```

If no remote exists, add GitHub repository:

```bash
# Replace YOUR_USERNAME with your GitHub username/organization
git remote add origin https://github.com/YOUR_USERNAME/encode-life.git
```

## Step 4: Push to GitHub

```bash
git push -u origin master
```

Or if your branch is named 'main':

```bash
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Add Environment Variables:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=contact@encodelife.in
   ```
6. Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? encode-life
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add RESEND_API_KEY
# Paste your Resend API key

vercel env add CONTACT_EMAIL
# Enter: contact@encodelife.in

# Deploy to production
vercel --prod
```

---

## 🌍 Connect Domain (encodelife.in)

### In Vercel Dashboard:

1. Go to your project
2. Settings → Domains
3. Add domain: `encodelife.in`
4. Add domain: `www.encodelife.in`

### Update DNS Records:

Go to your domain registrar and add:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Wait 5-30 minutes for DNS propagation**

---

## ✅ Verify Deployment

### Check these URLs:

1. **Vercel URL**: https://encode-life.vercel.app
2. **Custom Domain**: https://encodelife.in
3. **WWW Domain**: https://www.encodelife.in

### Test Features:

- [ ] Homepage loads
- [ ] Theme toggle works
- [ ] Mobile menu works
- [ ] All images load
- [ ] Contact form works
- [ ] Blog pages load
- [ ] All links work

---

## 🔧 Environment Variables Needed

### Get Resend API Key:

1. Go to https://resend.com
2. Sign up / Log in
3. Navigate to API Keys
4. Create new API key
5. Copy the key (starts with `re_`)

### Add to Vercel:

**Method 1: Dashboard**
- Project → Settings → Environment Variables
- Add `RESEND_API_KEY` and `CONTACT_EMAIL`
- Select all environments (Production, Preview, Development)

**Method 2: CLI**
```bash
vercel env add RESEND_API_KEY production
vercel env add CONTACT_EMAIL production
```

---

## 📊 Monitor Deployment

### Vercel Dashboard:
- Check deployment status
- View build logs
- Monitor analytics
- Check for errors

### Test Contact Form:
1. Go to https://encodelife.in
2. Scroll to contact section
3. Fill out form
4. Submit
5. Check email at contact@encodelife.in

---

## 🔄 Future Updates

To update the website:

```bash
# Make changes to code

# Test locally
npm run dev

# Build and test
npm run build
npm start

# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin master

# Vercel will automatically deploy
```

---

## 🐛 Troubleshooting

### Build Fails:
```bash
# Test build locally
npm run build

# Check for errors
# Fix issues
# Commit and push again
```

### Environment Variables Not Working:
```bash
# List environment variables
vercel env ls

# Pull environment variables locally
vercel env pull

# Re-add if needed
vercel env add RESEND_API_KEY
```

### Domain Not Working:
- Wait for DNS propagation (up to 48 hours)
- Check DNS records are correct
- Verify domain in Vercel dashboard
- Try clearing browser cache

---

## 📞 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Resend Docs**: https://resend.com/docs

---

## ✨ You're Ready!

Run the commands above in order, and your website will be live at **encodelife.in**! 🎉

**Good luck! 🚀🌱**
