import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { ArticleCard } from '@/components/content';
import { getAllNews, getUIStrings } from '@/lib/content';
import { generateSeoMetadata } from '@/lib/seo';
import { type Locale, locales } from '@/lib/i18n/config';

interface ArticlesUI {
  newsTitle: string;
  newsSubtitle: string;
  noNewsYet: string;
}

interface CommonUI {
  articles: ArticlesUI;
}

interface Props {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const ui = getUIStrings<CommonUI>('common', lang);
  return generateSeoMetadata({
    title: ui.articles.newsTitle,
    description: ui.articles.newsSubtitle,
    path: `/${lang}/news`,
    locale: lang,
  });
}

export const revalidate = 60;

export default async function NewsPage({ params }: Props) {
  const { lang } = await params;
  const news = getAllNews(lang);
  const ui = getUIStrings<CommonUI>('common', lang);

  return (
    <Section background="transparent" className="relative overflow-hidden pt-20">
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
          {ui.articles.newsTitle}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          {ui.articles.newsSubtitle}
        </p>
      </div>

      {news.length > 0 ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((article) => (
            <ArticleCard key={article.slug} article={article} basePath={`/${lang}/news`} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center">
          <p className="text-gray-600">{ui.articles.noNewsYet}</p>
        </div>
      )}
    </Section>
  );
}
