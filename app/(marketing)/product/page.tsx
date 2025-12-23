import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';

interface ProductContent {
  hero: {
    title: string;
    description: string;
    solutionText: string;
    heroImage: string;
  };
  howItWorks: {
    title: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    processImage?: string;
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

export const metadata: Metadata = generateSeoMetadata({
  title: 'Product',
  description:
    'Monetizing Foreign VAT Reclaim for Business Customers. A fully automated, compliance-assured platform for B2B VAT recovery.',
  path: '/product',
});

export default function ProductPage() {
  const content = getPageContent<ProductContent>('product');

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
            <Link href="/knowledge/vat-refund-basics" className="text-brand hover:underline">
              Basics of the VAT refund procedure
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
        <Section background="gray">
          <Image
            src={content.howItWorks.processImage}
            alt="VATGenius Process Flow"
            width={1200}
            height={400}
            className="mx-auto rounded-lg"
          />
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
      <Section background="gray">
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
              href={content.cta.buttonLink}
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
