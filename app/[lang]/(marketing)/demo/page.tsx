import { Metadata } from 'next';
import { Section } from '@/components/layout';
import { DemoForm } from '@/components/forms';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface DemoContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  hero: {
    title: string;
    description: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  form: {
    title: string;
    subtitle: string;
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
  const content = getPageContent<DemoContent>('demo', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: '/demo',
  });
}

export default async function DemoPage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<DemoContent>('demo', lang);

  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {content.hero.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              {content.hero.description}
            </p>

            <ul className="mt-8 space-y-4">
              {content.features.map((feature) => (
                <li key={feature.title} className="flex gap-3">
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
                  <div>
                    <p className="font-semibold text-gray-900">
                      {feature.title}
                    </p>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              {content.form.title}
            </h2>
            <p className="mt-2 text-gray-600">{content.form.subtitle}</p>
            <div className="mt-6">
              <DemoForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
