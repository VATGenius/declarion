import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { Section } from '@/components/layout';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';

interface LegalContent {
  title: string;
  lastUpdated?: string;
  subtitle?: string;
  body: string;
}

export const metadata: Metadata = generateSeoMetadata({
  title: 'Imprint',
  description: 'VATGenius legal information and imprint.',
  path: '/imprint',
});

export default function ImprintPage() {
  const content = getPageContent<LegalContent>('imprint');

  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {content.title}
        </h1>
        {content.subtitle && (
          <p className="mt-4 text-gray-500">{content.subtitle}</p>
        )}

        <div className="prose prose-gray mt-8 max-w-none prose-headings:text-gray-900 prose-a:text-brand prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown>{content.body}</ReactMarkdown>
        </div>
      </div>
    </Section>
  );
}
