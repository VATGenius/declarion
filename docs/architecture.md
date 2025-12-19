# VATGenius Website Architecture

## Overview

VATGenius is a Next.js 14 application built with TypeScript and Tailwind CSS. It uses the App Router for routing, MDX for content management, and Decap CMS for editorial workflows.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| MDX | Content with React components |
| Decap CMS | Git-based headless CMS |
| Zod | Schema validation |

## Project Structure

```
vatgenius/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── (pages)/           # Route groups for pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── consent/           # Cookie consent components
│   ├── content/           # Content display components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components
│   └── seo/               # SEO components
├── content/               # MDX content files
│   ├── news/              # News articles
│   ├── knowledge/         # Knowledge base articles
│   └── pages/             # Static page content
├── docs/                  # Documentation
├── lib/                   # Utility functions
├── public/                # Static assets
│   └── admin/             # Decap CMS config
└── styles/                # Global styles
```

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   - Native Next.js support
   - Automatic preview deployments
   - Edge functions support

2. **Netlify**
   - Good Decap CMS integration
   - Netlify Identity for CMS auth

### Environment Variables

Set these in your deployment platform:

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://vatgenius.com

# Analytics (optional - only loaded with consent)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Webhook for demo form submissions (optional)
DEMO_WEBHOOK_URL=https://your-crm.com/webhook
```

### Build Commands

```bash
npm run build    # Production build
npm run start    # Start production server
npm run dev      # Development server
```

## CMS Access

### Decap CMS Setup

1. **Configure Repository**
   Edit `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: YOUR_ORG/YOUR_REPO  # Update this
     branch: main
   ```

2. **GitHub OAuth App**
   - Go to GitHub Settings > Developer Settings > OAuth Apps
   - Create new OAuth App:
     - Application name: VATGenius CMS
     - Homepage URL: https://vatgenius.com
     - Authorization callback URL: https://vatgenius.com/admin/

3. **OAuth Gateway Options**

   **Option A: Netlify Identity (Recommended)**
   - Enable Netlify Identity in your Netlify dashboard
   - Update `config.yml`:
     ```yaml
     backend:
       name: git-gateway
       branch: main
     ```

   **Option B: External OAuth Provider**
   - Deploy an OAuth gateway (e.g., [netlify-cms-oauth-provider-go](https://github.com/igk1972/netlify-cms-oauth-provider-go))
   - Set the gateway URL in your config

4. **Access CMS**
   - Navigate to `https://yoursite.com/admin/`
   - Authenticate via GitHub

### Editorial Workflow

The CMS uses `editorial_workflow` mode:

1. **Draft** - Editor creates/edits content
2. **In Review** - Creates a Pull Request
3. **Ready** - Approved and ready to publish
4. **Published** - PR merged, content live

## Tracking & Analytics

### Consent-Based Loading

All tracking scripts are loaded only after user consent:

```tsx
// components/consent/AnalyticsProvider.tsx
// Scripts are injected only when analytics consent is given
```

### Google Tag Manager (Server-Side)

For GDPR compliance, use Server-Side GTM:

1. Set up a GTM Server Container
2. Configure your tracking tags in GTM
3. Update `NEXT_PUBLIC_GTM_ID` environment variable

### Consent Categories

| Category | Always On | Description |
|----------|-----------|-------------|
| necessary | Yes | Essential functionality |
| analytics | No | Traffic analysis, GTM |

## Security

### Spam Protection

The demo form implements multiple layers:

1. **Honeypot Field** - Hidden field that bots fill
2. **Rate Limiting** - IP-based request throttling
3. **Validation** - Zod schema validation

### Content Security

- All user input is validated with Zod
- MDX content is sanitized during compilation
- No inline scripts in content

## Performance

### Optimization Strategies

1. **Font Loading**
   - Currently uses Google Fonts via `next/font/google` (automatic optimization)
   - `font-display: swap` for fast rendering

   **Switching to Local Fonts (for privacy):**
   1. Download Inter font files (woff2 format) from [Google Fonts](https://fonts.google.com/specimen/Inter)
   2. Place files in `public/fonts/`:
      - `Inter-Regular.woff2`
      - `Inter-Medium.woff2`
      - `Inter-SemiBold.woff2`
      - `Inter-Bold.woff2`
   3. Update `app/layout.tsx`:
      ```tsx
      import localFont from 'next/font/local';

      const inter = localFont({
        src: [
          { path: '../public/fonts/Inter-Regular.woff2', weight: '400' },
          { path: '../public/fonts/Inter-Medium.woff2', weight: '500' },
          { path: '../public/fonts/Inter-SemiBold.woff2', weight: '600' },
          { path: '../public/fonts/Inter-Bold.woff2', weight: '700' },
        ],
        variable: '--font-inter',
        display: 'swap',
      });
      ```

2. **Images**
   - Use `next/image` for automatic optimization
   - WebP format with fallbacks

3. **Static Generation**
   - All content pages are statically generated
   - ISR with 60-second revalidation

4. **Code Splitting**
   - Automatic route-based splitting
   - Dynamic imports for heavy components

### Target Metrics

| Metric | Target |
|--------|--------|
| PageSpeed Desktop | > 90 |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

## API Routes

### POST /api/demo

Demo form submission endpoint.

**Request:**
```json
{
  "fullName": "string",
  "email": "string",
  "company": "string",
  "jobTitle": "string (optional)",
  "country": "string",
  "privacyConsent": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Demo request submitted successfully"
}
```

**Error Codes:**
- 400: Validation error
- 429: Rate limit exceeded
- 500: Server error
