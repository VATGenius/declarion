import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { RichText } from '@/components/content';
import { JsonLd } from '@/components/seo';
import { getKnowledgeBySlug, getAllKnowledgeSlugs, slugifyTag } from '@/lib/content';
import { generateSeoMetadata, generateArticleJsonLd } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { type Locale, locales } from '@/lib/i18n/config';

interface Props {
  params: Promise<{ lang: Locale; slug: string }>;
}

export async function generateStaticParams() {
  const params: { lang: Locale; slug: string }[] = [];
  for (const lang of locales) {
    const slugs = getAllKnowledgeSlugs(lang);
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = getKnowledgeBySlug(slug, lang);

  if (!article) {
    return {};
  }

  return generateSeoMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/knowledge/${slug}`,
    image: article.heroImage,
    type: 'article',
    publishedTime: article.date,
  });
}

export const revalidate = 60;

export default async function KnowledgeArticlePage({ params }: Props) {
  const { lang, slug } = await params;
  const article = getKnowledgeBySlug(slug, lang);

  if (!article) {
    notFound();
  }

  const jsonLd = generateArticleJsonLd({
    title: article.title,
    description: article.excerpt,
    path: `/knowledge/${slug}`,
    image: article.heroImage,
    publishedTime: article.date,
  });

  return (
    <>
      <JsonLd data={jsonLd} />

      <Section background="white" className="pt-20">
        <div className="mx-auto max-w-3xl">
          {/* Back Link */}
          <Link
            href={`/${lang}/knowledge`}
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Knowledge Hub
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <time className="text-sm text-gray-500">
              {formatDate(article.date)}
            </time>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="mt-4 text-lg text-gray-600">{article.excerpt}</p>
            )}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${lang}/news/tag/${slugifyTag(tag)}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-brand/10 hover:text-brand"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          {/* Hero Image */}
          {article.heroImage && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
              <Image
                src={article.heroImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <RichText content={article.content} />
          </article>
        </div>
      </Section>
    </>
  );
}
