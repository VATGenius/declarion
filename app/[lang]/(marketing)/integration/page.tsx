import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface IntegrationContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  hero: {
    title: string;
    description: string;
    heroImage: string;
  };
  pillars: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  lowCode: {
    title: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  timeline: {
    title: string;
    description: string;
    phases: Array<{
      phase: string;
      description: string;
      duration: string;
      effort: string;
    }>;
    total: {
      label: string;
      description: string;
      duration: string;
      effort: string;
    };
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
  const content = getPageContent<IntegrationContent>('integration', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: '/integration',
  });
}

const iconMap: Record<string, React.ReactNode> = {
  userPlus: (
    <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  ),
  database: (
    <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
    </svg>
  ),
  checkCircle: (
    <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default async function IntegrationPage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<IntegrationContent>('integration', lang);

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
            {content.hero.description}
          </p>
        </div>
      </Section>

      {/* Three Pillars Section */}
      <Section background="soft-green">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.pillars.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          {content.pillars.description}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.pillars.items.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
                {iconMap[item.icon]}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Low Code Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.lowCode.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          {content.lowCode.description}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.lowCode.items.map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="soft-blue">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.timeline.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          {content.timeline.description}
        </p>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg border border-gray-200 bg-white">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Phase
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Duration
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Your Dev Effort
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {content.timeline.phases.map((phase) => (
                <tr key={phase.phase}>
                  <td className="px-6 py-4 text-sm font-medium text-brand">
                    {phase.phase}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {phase.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{phase.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {phase.effort}
                  </td>
                </tr>
              ))}
              <tr className="bg-brand/5">
                <td className="px-6 py-4 text-sm font-bold text-gray-900">
                  {content.timeline.total.label}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {content.timeline.total.description}
                </td>
                <td className="px-6 py-4 text-sm font-bold text-brand">
                  {content.timeline.total.duration}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {content.timeline.total.effort}
                </td>
              </tr>
            </tbody>
          </table>
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
