import { Metadata } from 'next';
import { locales, type Locale } from './i18n/config';

const SITE_URL = process.env.SITE_URL || 'https://vatgenius.com';
const SITE_NAME = 'VATGenius';

const localeToOgLocale: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
};

interface SeoParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  locale?: Locale;
}

export function generateSeoMetadata({
  title,
  description,
  path = '',
  image = '/images/og-default.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  locale = 'en',
}: SeoParams): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  // Generate path without locale for alternate URLs
  const pathWithoutLocale = path.replace(/^\/(en|de|fr|es)/, '') || '/';

  // Generate alternate URLs for all locales
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${SITE_URL}/${loc}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  });
  languages['x-default'] = `${SITE_URL}/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

  return {
    title: title === SITE_NAME ? title : `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: localeToOgLocale[locale],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      'VATGenius provides automated VAT refund solutions for neobanks and their business customers.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@vatgenius.tech',
    },
    sameAs: [],
  };
}

export function generateWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function generateArticleJsonLd({
  title,
  description,
  path,
  image,
  publishedTime,
  modifiedTime,
  authors = ['VATGenius Team'],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  authors?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    image: image ? `${SITE_URL}${image}` : `${SITE_URL}/images/og-default.png`,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authors.map((name) => ({
      '@type': 'Person',
      name,
    })),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
  };
}
