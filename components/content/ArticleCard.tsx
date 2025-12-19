import Link from 'next/link';
import Image from 'next/image';
import { formatDate, truncateText } from '@/lib/utils';
import type { ContentMeta } from '@/lib/content';

interface ArticleCardProps {
  article: ContentMeta;
  basePath: string;
}

export function ArticleCard({ article, basePath }: ArticleCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
      {article.heroImage && (
        <Link href={`${basePath}/${article.slug}`}>
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="p-6">
        <time className="text-sm text-gray-500">{formatDate(article.date)}</time>
        <Link href={`${basePath}/${article.slug}`}>
          <h3 className="mt-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand">
            {article.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-gray-600">
          {truncateText(article.excerpt, 150)}
        </p>
        {article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
