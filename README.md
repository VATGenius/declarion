# VATGenius Website

Corporate website for VATGenius - Automated VAT Refund Solutions for Neobanks.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX with gray-matter
- **CMS:** Decap CMS (Git-based)
- **Validation:** Zod

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint check
npm run typecheck  # TypeScript check
```

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # React components
├── content/          # MDX content files
│   ├── news/        # News articles
│   └── knowledge/   # Knowledge base
├── docs/            # Documentation
├── lib/             # Utilities
├── public/          # Static assets
│   └── admin/       # Decap CMS
└── styles/          # Global styles
```

## Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Site URL (required for production)
NEXT_PUBLIC_SITE_URL=https://vatgenius.com

# Google Tag Manager (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Demo form webhook (optional)
DEMO_WEBHOOK_URL=https://your-webhook.com
```

### Decap CMS Setup

1. Edit `public/admin/config.yml`
2. Update the `repo` field with your GitHub repository
3. Set up GitHub OAuth for authentication

See [docs/architecture.md](docs/architecture.md) for detailed CMS setup instructions.

## Content Management

Access the CMS at `/admin/` after deployment. See [docs/editing-guide.md](docs/editing-guide.md) for content editing instructions.

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Documentation

- [Architecture Guide](docs/architecture.md) - Technical architecture, deployment, CMS setup
- [Editing Guide](docs/editing-guide.md) - Content management instructions

## License

Proprietary - All rights reserved.
