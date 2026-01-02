import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { Section } from '@/components/layout';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface LegalContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  title: string;
  lastUpdated?: string;
  subtitle?: string;
  body: string;
}

interface Props {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const content = getPageContent<LegalContent>('privacy', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: '/privacy',
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<LegalContent>('privacy', lang);

  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {content.title}
        </h1>
        {content.lastUpdated && (
          <p className="mt-4 text-gray-500">Last updated: {content.lastUpdated}</p>
        )}

        <div className="prose prose-gray mt-8 max-w-none prose-headings:text-gray-900 prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{content.body}</ReactMarkdown>
        </div>
      </div>
    </Section>
  );
}
