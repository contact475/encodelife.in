# Encode Life - Sustainable Bioplastics Platform

> India's first industrial-scale PLA biopolymer plant website

## 🏗️ Project Structure

```
encode-life/
├── frontend/          # Next.js 15 Application
├── backend/           # Strapi CMS (Strapi Cloud)
└── README.md         # This file
```

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Framer Motion
- **Deployment**: Vercel

### Backend
- **CMS**: Strapi (Strapi Cloud)
- **Database**: Supabase PostgreSQL
- **Email**: Resend API

## 📦 Features

- ✅ Responsive website with dark/light mode
- ✅ Contact form with email notifications
- ✅ Certificate claim system with popup
- ✅ Blog system (ready for Strapi CMS)
- ✅ Dynamic content management
- ✅ Form submissions stored in database

## 🛠️ Setup

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Fill in environment variables
npm run dev
```

### Backend Setup

See `backend/README.md` for Strapi Cloud setup instructions.

## 🌐 Deployment

### Frontend (Vercel)
- Connected to GitHub
- Auto-deploys on push to main branch
- Environment variables configured in Vercel dashboard

### Backend (Strapi Cloud)
- Connected to GitHub
- Auto-deploys on push to main branch
- Base directory: `backend`

## 📚 Documentation

All setup guides and documentation are available locally (not in GitHub):
- Strapi setup guides
- Architecture diagrams
- Deployment checklists

## 🔒 Environment Variables

### Frontend (.env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRAPI_URL=
STRAPI_API_TOKEN=
RESEND_API_KEY=
```

### Backend (.env)
```env
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
```

## 🗄️ Database

**Supabase PostgreSQL** (shared by both frontend and backend)

### Direct Tables (Next.js API routes)
- `certificate_claims`
- `contact_form_submissions`
- `user_details`
- `certificate_numbers`

### Strapi Tables (CMS content)
- `blogs`
- `awards`
- `press_releases`
- `events`
- `news_articles`
- `gallery_images`
- `downloads`
- `careers`

## 📞 Contact

- **Website**: https://encodelife.in
- **Email**: contact@encodelife.in
- **LinkedIn**: [Encode Life](https://www.linkedin.com/company/encode-life/)

## 📄 License

© 2025 Encode Life. All rights reserved.
