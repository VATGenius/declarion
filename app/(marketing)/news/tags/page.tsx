import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllTags } from '@/lib/content';

export const metadata: Metadata = generateSeoMetadata({
  title: 'All Tags',
  description: 'Browse all tags used in our news and knowledge articles.',
  path: '/news/tags',
});

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <Section background="white" className="pt-20">
      <div className="mb-8">
        <Link href="/news" className="text-sm text-gray-500 hover:text-brand">
          &larr; Back to News & Knowledge
        </Link>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          All Tags
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Browse articles by topic
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {tags.map((tagInfo) => (
          <Link
            key={tagInfo.slug}
            href={`/news/tag/${tagInfo.slug}`}
            className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 transition-all hover:border-brand hover:shadow-md"
          >
            <span className="font-medium text-gray-900 group-hover:text-brand">
              {tagInfo.tag}
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-sm text-gray-500 group-hover:bg-brand/10 group-hover:text-brand">
              {tagInfo.count}
            </span>
          </Link>
        ))}
      </div>

      {tags.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-gray-500">No tags found.</p>
        </div>
      )}
    </Section>
  );
}
