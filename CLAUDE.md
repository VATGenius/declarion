# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint check
npm run typecheck    # TypeScript type check
npm run format       # Prettier format all files
npm run format:check # Check formatting without changes
```

CI runs lint, typecheck, and build on all PRs to main.

## Architecture Overview

This is a Next.js 14 corporate website using the App Router pattern with TypeScript and Tailwind CSS.

### Content System

MDX content lives in `content/` with three collections:
- `content/news/` - News articles
- `content/knowledge/` - Knowledge base articles
- `content/pages/` - Static page content

Content is loaded via `lib/content.ts` which uses gray-matter for frontmatter parsing. Each MDX file requires:
- `title`: Article title
- `date`: ISO date string
- `excerpt`: Short description
- Optional: `heroImage`, `tags`

### Component Organization

Components are organized by domain in `components/`:
- `layout/` - Header, Footer, Container, Section
- `consent/` - GDPR cookie consent (ConsentBanner, AnalyticsProvider)
- `content/` - MDX rendering components
- `forms/` - Form components with Zod validation
- `seo/` - SEO/meta components (JsonLd)

Each subdirectory exports via barrel file (`index.ts`). Import using path alias: `@/components/layout`

### Key Files

- `app/layout.tsx` - Root layout with global providers (consent, analytics, SEO)
- `lib/content.ts` - Content loading functions (getAllNews, getNewsBySlug, etc.)
- `lib/seo.ts` - JSON-LD structured data generators
- `lib/rateLimit.ts` - IP-based rate limiting for API routes
- `next.config.js` - Security headers configured, redirects loaded from `lib/redirects.js`

### API Routes

- `POST /api/demo` - Demo form submission with honeypot, rate limiting, and Zod validation

### CMS

Decap CMS config at `public/admin/config.yml`. Uses GitHub as backend with editorial workflow (Draft → In Review → Published).

## Path Alias

`@/*` maps to project root (e.g., `@/lib/content`, `@/components/layout`)
