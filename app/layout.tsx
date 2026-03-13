import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConsentBanner, AnalyticsProvider } from '@/components/consent';
import { JsonLd } from '@/components/seo';
import {
  generateOrganizationJsonLd,
  generateWebsiteJsonLd,
} from '@/lib/seo';

// Load Inter font from Google Fonts with automatic optimization
// Note: For maximum privacy, replace with local fonts in public/fonts/
// See docs/architecture.md for local font setup instructions
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Declarion | Automated VAT Refund Solutions for Neobanks',
    template: '%s | Declarion',
  },
  description:
    'Declarion provides automated foreign VAT refund solutions for neobanks and their business customers. Unlock new revenue streams with zero operational overhead.',
  keywords: [
    'VAT refund',
    'neobank',
    'B2B',
    'fintech',
    'tax recovery',
    'input VAT',
    'EU VAT',
    'automated VAT',
  ],
  authors: [{ name: 'Declarion' }],
  creator: 'Declarion',
  metadataBase: new URL(process.env.SITE_URL || 'https://declarion.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Declarion',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={generateOrganizationJsonLd()} />
        <JsonLd data={generateWebsiteJsonLd()} />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
        {children}
        <ConsentBanner />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
