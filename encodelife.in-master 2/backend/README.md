# Encode Life - Backend (Strapi CMS)

This directory contains the Strapi CMS backend for Encode Life website.

## 🏗️ Structure

```
backend/
├── strapi/              ← Strapi project (created by Strapi Cloud or locally)
├── .env                 ← Environment variables (DO NOT COMMIT)
├── .gitignore          ← Git ignore rules
├── supabase-setup.sql  ← Database schema for direct tables
└── README.md           ← This file
```

## 🚀 Setup

### Option 1: Strapi Cloud (Recommended)

1. Go to https://cloud.strapi.io
2. Import this GitHub repository
3. Set base directory to `backend`
4. Configure Supabase database connection
5. Deploy automatically

See `../STRAPI_SETUP_GUIDE.md` for detailed instructions.

### Option 2: Local Development

```bash
# Navigate to backend
cd backend

# Create Strapi project
npx create-strapi-app@latest strapi --quickstart --no-run

# Configure database (see below)
cd strapi
npm run develop
```

## 🗄️ Database Configuration

Strapi uses the same Supabase PostgreSQL database as the Next.js frontend.

### Connection Details

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=db.wlwixxoqpidobhvvwudj.supabase.co
DATABASE_PORT=5432
DATABASE_NAME=postgres
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=[Your Supabase DB Password]
DATABASE_SSL=true
```

### Database Tables

**Direct Tables (Next.js API routes):**
- `certificate_claims` - Certificate claim submissions
- `contact_form_submissions` - Contact form data
- `user_details` - Unified user interactions
- `certificate_numbers` - Auto-incrementing certificate IDs

**Strapi Tables (CMS content):**
- `blogs` - Blog posts
- `awards` - Company awards
- `press_releases` - Press releases
- `events` - Events and workshops
- `news_articles` - Media coverage
- `gallery_images` - Photo gallery
- `downloads` - Downloadable files
- `careers` - Job postings

## 📝 Content Types

### 1. Blogs
- Title, slug, content, author
- Thumbnail image
- Tags, publish date
- Draft/published status

### 2. Awards
- Title, description
- Award image
- Awarded by, date
- Display order

### 3. Press Releases
- Title, content
- PDF file
- Publish date

### 4. Events
- Name, description
- Event date, location
- Registration link
- Event image

### 5. News Articles
- Title, source
- External link
- Thumbnail
- Publish date

### 6. Gallery Images
- Image, thumbnail
- Category, description
- Display order

### 7. Downloads
- Title, description
- File, category
- Download count

### 8. Careers
- Job title, description
- Location, type
- Deadline, status
- Requirements, responsibilities

## 🔌 API Endpoints

All content is available via REST API:

```
GET /api/blogs
GET /api/blogs/:id
GET /api/awards
GET /api/press-releases
GET /api/events
GET /api/news-articles
GET /api/gallery-images
GET /api/downloads
GET /api/careers
```

## 🔒 Security

- Public read access for all content types
- Admin-only write access
- API tokens for server-side requests
- CORS configured for frontend domain

## 🚀 Deployment

### Strapi Cloud
- Automatic deployment on git push
- Environment variables in Cloud dashboard
- SSL/HTTPS included

### Self-Hosted
```bash
cd backend/strapi
npm run build
npm run start
```

## 📚 Documentation

- Full setup guide: `../STRAPI_SETUP_GUIDE.md`
- Strapi docs: https://docs.strapi.io
- Supabase docs: https://supabase.com/docs

## 🆘 Support

For issues or questions:
1. Check `../STRAPI_SETUP_GUIDE.md`
2. Review Strapi Cloud logs
3. Check Supabase database connection
4. Verify environment variables

---

**Status:** Ready for Strapi Cloud deployment
**Database:** Supabase PostgreSQL (shared with Next.js)
**Deployment:** Strapi Cloud (recommended)
