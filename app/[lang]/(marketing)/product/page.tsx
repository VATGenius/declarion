import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface ProductContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  hero: {
    title: string;
    description: string;
    solutionText: string;
    heroImage: string;
  };
  howItWorks: {
    title: string;
    processImage?: string;
    processSteps?: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
  customerBenefit: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  compliance: {
    title: string;
    description: string;
    sections: Array<{
      title: string;
      items: Array<{
        label: string;
        text: string;
      }>;
    }>;
  };
  secureApi: {
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
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
  const content = getPageContent<ProductContent>('product', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: '/product',
  });
}

export default async function ProductPage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<ProductContent>('product', lang);

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
            {content.hero.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            {content.hero.description.split('(')[0]}
            (
            <Link href={`/${lang}/knowledge/vat-refund-basics`} className="text-brand hover:underline">
              Navigating Foreign VAT Refunds
            </Link>
            ).
          </p>
          <p className="mt-4 text-lg font-medium text-gray-900">
            {content.hero.solutionText}
          </p>
        </div>
      </Section>

      {/* Process Image Section */}
      {content.howItWorks.processImage && (
        <Section background="soft-blue">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            {content.howItWorks.title}
          </h2>
          <Image
            src={content.howItWorks.processImage}
            alt="VATGenius Process Flow"
            width={1200}
            height={400}
            className="mx-auto rounded-lg"
          />
          {content.howItWorks.processSteps && (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.howItWorks.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          )}
        </Section>
      )}

      {/* Customer Benefit Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.customerBenefit.title}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.customerBenefit.items.map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance Section */}
      <Section background="soft-green">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.compliance.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          {content.compliance.description}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {content.compliance.sections.map((section) => (
            <div key={section.title} className="rounded-lg bg-white p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {section.items.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="font-semibold text-brand">{item.label}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Secure API Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.secureApi.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          {content.secureApi.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {content.secureApi.features.map((feature) => (
            <div key={feature.title} className="text-center">
              <p className="font-semibold text-gray-900">{feature.title}</p>
              <p className="text-sm text-gray-600">{feature.description}</p>
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
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
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
