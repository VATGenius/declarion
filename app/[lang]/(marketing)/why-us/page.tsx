import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface WhyUsContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    heroImage: string;
    benefits: string[];
  };
  implementation: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  whyPartner: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
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
  const content = getPageContent<WhyUsContent>('why-us', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: '/why-us',
  });
}

const iconMap: Record<string, React.ReactNode> = {
  lightning: (
    <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  support: (
    <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  chart: (
    <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
};

export default async function WhyUsPage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<WhyUsContent>('why-us', lang);

  return (
    <>
      {/* Hero Section */}
      <Section background="transparent" className="relative overflow-hidden pt-20">
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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {content.hero.title}{' '}
            <span className="text-brand">{content.hero.titleHighlight}</span>
          </h1>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.hero.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4"
            >
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
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Implementation Section */}
      <Section background="soft-green">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.implementation.title}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.implementation.items.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                {iconMap[item.icon]}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Partner Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.whyPartner.title}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.whyPartner.items.map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {content.cta.title}
          </h2>
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
