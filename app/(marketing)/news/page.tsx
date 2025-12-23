import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { ArticleCard } from '@/components/content';
import { getAllNews } from '@/lib/content';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'News',
  description:
    'Stay up to date with the latest VAT news, regulatory updates, and insights from VATGenius.',
  path: '/news',
});

export const revalidate = 60; // ISR: revalidate every 60 seconds

export default function NewsPage() {
  const news = getAllNews();

  return (
    <Section background="transparent" className="relative overflow-hidden pt-20">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-knowledge.png"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          News & Updates
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Stay up to date with the latest VAT news, regulatory updates, and
          insights.
        </p>
      </div>

      {news.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <ArticleCard key={article.slug} article={article} basePath="/news" />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-gray-600">No news articles yet. Check back soon!</p>
        </div>
      )}
    </Section>
  );
}
