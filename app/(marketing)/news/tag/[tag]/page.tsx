import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { ArticleCard } from '@/components/content';
import { generateSeoMetadata } from '@/lib/seo';
import {
  getAllTagSlugs,
  getTagBySlug,
  getArticlesByTagSlug,
} from '@/lib/content';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export function generateStaticParams() {
  const tagSlugs = getAllTagSlugs();
  return tagSlugs.map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    return generateSeoMetadata({
      title: 'Tag Not Found',
      description: 'The requested tag could not be found.',
      path: `/news/tag/${tagSlug}`,
    });
  }

  return generateSeoMetadata({
    title: `Articles tagged "${tag}"`,
    description: `Browse all news and knowledge articles tagged with "${tag}".`,
    path: `/news/tag/${tagSlug}`,
  });
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag: tagSlug } = await params;
  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    notFound();
  }

  const articles = getArticlesByTagSlug(tagSlug);

  return (
    <Section background="white" className="pt-20">
      <div className="mb-8">
        <Link
          href="/news"
          className="text-sm text-gray-500 hover:text-brand"
        >
          &larr; Back to News & Knowledge
        </Link>
      </div>

      <div className="text-center">
        <span className="inline-block rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
          {tag}
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Articles tagged &ldquo;{tag}&rdquo;
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {articles.length} {articles.length === 1 ? 'article' : 'articles'} found
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={`${article.type}-${article.slug}`}
              article={article}
              basePath={article.type === 'knowledge' ? '/knowledge' : '/news'}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-gray-500">No articles found with this tag.</p>
        </div>
      )}
    </Section>
  );
}
