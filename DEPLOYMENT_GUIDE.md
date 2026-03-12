# 🚀 Arcadia Homes Las Vegas - Deployment Guide

## Step 1: GitHub Backup

1. **Create a new GitHub repository:**
   - Go to https://github.com and create a new repository
   - Name it: `arcadia-homes-las-vegas-website`
   - Make it private for security

2. **Upload your project files:**
   - Download all files from this Replit project
   - Upload to your GitHub repository
   - Include all folders: `client/`, `server/`, `shared/`
   - Include configuration files: `vercel.json`, `README.md`, `.env.example`

## Step 2: Vercel Deployment

1. **Connect to Vercel:**
   - Go to https://vercel.com
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your `arcadia-homes-las-vegas-website` repository

2. **Configure Build Settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist/public` (Vite outputs here per vite.config.ts; contains index.html and assets)
   - Install Command: `npm install`

   The root `vercel.json` rewrites all non-file requests to `/index.html` so SPA routes (e.g. `/home-value`, `/about`) return 200 and are indexable by Google.

3. **Set Environment Variables:**
   ```
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=production
   ```
   Optional (for AI chat on the site):
   - `OPENROUTER_API_KEY` – When set, the floating chat uses OpenRouter (e.g. Claude) for replies; when unset, chat returns a friendly message with Dr. Duffy’s contact info.

## Step 3: Domain Setup

1. **Custom Domain (arcadiahomeslasvegas.com):**
   - In Vercel dashboard, go to your project
   - Click "Domains" tab
   - Add your custom domain: `arcadiahomeslasvegas.com`
   - Follow DNS configuration instructions

2. **SSL Certificate:**
   - Vercel automatically provides SSL
   - Your site will be secure with HTTPS

## Step 4: Database Configuration

You'll need a PostgreSQL database. Options:

1. **Neon (Recommended for ease):**
   - Go to https://neon.tech
   - Create a free PostgreSQL database
   - Copy the connection string to Vercel environment variables

2. **Vercel Postgres:**
   - In your Vercel project dashboard
   - Go to "Storage" tab
   - Create a new Postgres database
   - Use the provided connection string

## Step 5: Testing & Launch

1. **Test the deployment:**
   - Check all forms work correctly
   - Verify contact information displays properly
   - Test home valuation widgets
   - Ensure mobile responsiveness

2. **Go Live:**
   - Point your domain DNS to Vercel
   - Monitor lead capture functionality
   - Set up email notifications for new leads

## GSC: Duplicate unique property (structured data)

If Google Search Console reports **Unparsable structured data → Duplicate unique property** on the homepage:

1. **Confirm production is on the latest commit**  
   The fix (single `hasCredential` in the first JSON-LD block) is in commit `a041ebf` or later. Ensure the live site is built from current `main`. If not, trigger a redeploy (e.g. Vercel: Project → Deployments → … on latest → Redeploy).

2. **Validate fix in Search Console**  
   In GSC: **Enhancements → Unparsable structured data → Duplicate unique property**. Open the issue, then use **Validate fix** so Google recrawls the affected URL and re-evaluates the structured data.

3. **Optional: Sanity-check live markup**  
   After deploy, open `https://www.arcadiahomeslasvegas.com/`, view source, and confirm the first `application/ld+json` block has only one `hasCredential` (the array). Or paste the URL into [validator.schema.org](https://validator.schema.org/) to confirm no duplicate property errors.

## 🔧 Production Checklist

- ✅ All contact forms capture leads
- ✅ Phone number (702) 500-0337 works correctly
- ✅ Home valuation widgets load properly
- ✅ Market data displays accurately
- ✅ SSL certificate is active
- ✅ Domain points to Vercel hosting
- ✅ Database connections are secure

## 📧 Lead Notifications

Configure email notifications in your CRM system to receive immediate alerts when prospects submit inquiries through:
- Contact forms
- Home valuation requests
- Market Insider Alert signups
- Property alert subscriptions

## 🎯 Success Metrics to Track

- Lead conversion rate from website visitors
- Form completion rates
- Exit-intent popup effectiveness
- Mobile vs desktop traffic
- Most popular property searches

---

**Your luxury real estate website is ready to capture qualified Arcadia Homes Las Vegas buyers!**