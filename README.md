# Encode Life - Sustainable Bioplastics Website

![Encode Life](public/logo.png)

**India's first industrial-scale PLA biopolymer plant**

Transforming sugarcane into sustainable bioplastics, powered by 100% renewable energy.

---

## 🌱 About

Encode Life is pioneering the bioplastics revolution in India with our state-of-the-art PLA (Polylactic Acid) production facility. We transform sugarcane into sustainable bioplastics, creating a circular economy that's better for the planet.

**Website**: [encodelife.in](https://encodelife.in)

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Email**: Resend
- **Theme**: Next Themes (Dark mode by default)
- **Icons**: Lucide React, Tabler Icons
- **Deployment**: Vercel

---

## 📦 Features

### 🎨 Design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark mode by default with theme toggle
- ✅ Smooth animations and transitions
- ✅ Modern, clean UI with custom fonts

### 📄 Pages
- ✅ Home page with hero section
- ✅ About Us section
- ✅ PLA Journey (4-step process)
- ✅ Features showcase
- ✅ Blog system with MDX
- ✅ Contact form

### 🔧 Functionality
- ✅ Contact form with email integration (Resend)
- ✅ Blog with markdown support
- ✅ Smooth scroll navigation
- ✅ Mobile-friendly menu
- ✅ Collaborator logos slider
- ✅ Image optimization

### 🤝 Collaborators
- DPIIT (Department for Promotion of Industry and Internal Trade)
- IIT Guwahati
- Make in India
- Manav Rachna
- Start in UP
- Startup India

---

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/encode-life.git
cd encode-life
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add:
```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=contact@encodelife.in
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📝 Scripts

```bash
# Development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 📁 Project Structure

```
encode-life/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── send-email/       # Contact form endpoint
│   ├── blog/                 # Blog pages
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── ui/                   # UI components
│   ├── hero-section-5.tsx    # Hero section
│   ├── feature-section.tsx   # PLA Journey
│   ├── contact-section.tsx   # Contact form
│   ├── footer.tsx            # Footer
│   └── ...                   # Other components
├── lib/                      # Utilities
│   ├── blog.ts               # Blog data
│   └── utils.ts              # Helper functions
├── public/                   # Static assets
│   ├── logos/                # Collaborator logos
│   ├── pla-journey-*.webp    # PLA Journey images
│   └── ...                   # Other images
├── fonts/                    # Custom fonts
├── .env.local.example        # Environment variables template
└── package.json              # Dependencies
```

---

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/encode-life)

1. Click the button above
2. Add environment variables:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
3. Deploy!

---

## 📧 Contact Form Setup

The contact form uses [Resend](https://resend.com) for email delivery.

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to environment variables
4. Verify your domain (optional but recommended)

---

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

---

## 🎨 Theme

- **Default**: Dark mode
- **Toggle**: Available in header
- **Colors**: Custom green/emerald palette for sustainability theme
- **Font**: Ozean (custom) + System fonts

---

## 🔄 Updates

To update the website:

1. Make changes
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Commit: `git commit -m "Your message"`
5. Push: `git push origin master`
6. Vercel auto-deploys

---

## 📄 License

© 2025 Encode Life. All rights reserved.

---

## 🤝 Contributing

This is a private project for Encode Life. For inquiries, contact us at contact@encodelife.in

---

## 📞 Support

- **Website**: [encodelife.in](https://encodelife.in)
- **Email**: contact@encodelife.in
- **Phone**: +91 84487 13902 / +91 70000 17005
- **LinkedIn**: [Encode Life](https://www.linkedin.com/company/encode-life/)

---

**Built with 💚 for a sustainable future**
