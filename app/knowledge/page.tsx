import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { ArticleCard } from '@/components/content';
import { getAllKnowledge } from '@/lib/content';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Knowledge Hub',
  description:
    'Learn about VAT refunds, EU directives, compliance requirements, and best practices for international tax recovery.',
  path: '/knowledge',
});

export const revalidate = 60;

export default function KnowledgePage() {
  const articles = getAllKnowledge();

  return (
    <Section background="white" className="relative overflow-hidden pt-20">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-knowledge.png"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Knowledge Hub
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Learn about VAT refunds, EU directives, compliance requirements, and
          best practices for international tax recovery.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              basePath="/knowledge"
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            No knowledge articles yet. Check back soon!
          </p>
        </div>
      )}
    </Section>
  );
}
