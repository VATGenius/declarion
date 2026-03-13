import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface HomeContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    secondaryDescription: string;
    ctaText: string;
    ctaLink: string;
    heroImage: string;
  };
  platform: {
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  security: {
    title: string;
    description: string;
    features: string[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

interface Props {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const content = getPageContent<HomeContent>('home', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: `/${lang}`,
  });
}

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg
      className="h-6 w-6 text-brand"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  lightbulb: (
    <svg
      className="h-6 w-6 text-brand"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  document: (
    <svg
      className="h-6 w-6 text-brand"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  currency: (
    <svg
      className="h-8 w-8 text-brand"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  heart: (
    <svg
      className="h-8 w-8 text-brand"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
  lightning: (
    <svg
      className="h-8 w-8 text-brand"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<HomeContent>('home', lang);

  return (
    <>
      {/* Hero Section */}
      <Section
        background="transparent"
        className="relative overflow-hidden pt-20 md:pt-28"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={content.hero.heroImage}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {content.hero.title}{' '}
            <span className="text-brand">{content.hero.titleHighlight}</span>{' '}
            {content.hero.titleEnd}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            {content.hero.description.split('(')[0]}(
            <Link
              href={`/${lang}/knowledge/vat-refund-basics`}
              className="text-brand hover:underline"
            >
              Navigating Foreign VAT Refunds
            </Link>
            ). {content.hero.description.split(').')[1] || ''}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {content.hero.secondaryDescription}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={`/${lang}${content.hero.ctaLink}`} size="lg">
              {content.hero.ctaText}
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="soft-blue">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {content.platform.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {content.platform.description}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {content.platform.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
                {iconMap[feature.icon]}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              {feature.title === 'VATGenius Engine' ? (
                <ul className="mt-3 space-y-2 text-gray-600">
                  {feature.description.split(', ').map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {content.benefits.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.benefits.items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                {iconMap[item.icon]}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Security Section */}
      <Section background="soft-green">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {content.security.title}
            </h2>
            <p className="mt-4 text-gray-600">{content.security.description}</p>
            <ul className="mt-6 space-y-4">
              {content.security.features.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-white p-8 shadow-lg">
              <svg
                className="h-32 w-32 text-brand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {content.cta.description}
          </p>
          <div className="mt-8">
            <Button
              href={`/${lang}${content.cta.buttonLink}`}
              variant="secondary"
              size="lg"
              className="bg-white text-brand hover:bg-gray-100"
            >
              {content.cta.buttonText}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
