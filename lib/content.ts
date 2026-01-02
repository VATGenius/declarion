import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { defaultLocale, type Locale } from './i18n/config';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ContentItem {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  heroImage?: string;
  tags?: string[];
  content: string;
}

export interface ContentMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  heroImage?: string;
  tags?: string[];
  type?: 'news' | 'knowledge';
}

function getContentFromDirectory(
  locale: Locale,
  directory: string
): ContentMeta[] {
  const fullPath = path.join(contentDirectory, locale, directory);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(fullPath);
  const allContent = fileNames
    .filter((name) => name.endsWith('.mdx') || name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const filePath = path.join(fullPath, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        heroImage: data.heroImage,
        tags: data.tags || [],
      };
    });

  return allContent.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

function getContentBySlug(
  locale: Locale,
  directory: string,
  slug: string
): ContentItem | null {
  const fullPath = path.join(contentDirectory, locale, directory);
  const mdxPath = path.join(fullPath, `${slug}.mdx`);
  const mdPath = path.join(fullPath, `${slug}.md`);

  let filePath: string;
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || '',
    heroImage: data.heroImage,
    tags: data.tags || [],
    content,
  };
}

// News functions
export function getAllNews(locale: Locale = defaultLocale): ContentMeta[] {
  return getContentFromDirectory(locale, 'news');
}

export function getNewsBySlug(
  slug: string,
  locale: Locale = defaultLocale
): ContentItem | null {
  return getContentBySlug(locale, 'news', slug);
}

export function getAllNewsSlugs(locale: Locale = defaultLocale): string[] {
  return getAllNews(locale).map((item) => item.slug);
}

// Knowledge functions
export function getAllKnowledge(locale: Locale = defaultLocale): ContentMeta[] {
  return getContentFromDirectory(locale, 'knowledge');
}

export function getKnowledgeBySlug(
  slug: string,
  locale: Locale = defaultLocale
): ContentItem | null {
  return getContentBySlug(locale, 'knowledge', slug);
}

export function getAllKnowledgeSlugs(locale: Locale = defaultLocale): string[] {
  return getAllKnowledge(locale).map((item) => item.slug);
}

// Pages functions (optional static pages)
export function getPageBySlug(
  slug: string,
  locale: Locale = defaultLocale
): ContentItem | null {
  return getContentBySlug(locale, 'pages', slug);
}

// Tag functions
export interface TagInfo {
  tag: string;
  slug: string;
  count: number;
}

function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function getAllTags(locale: Locale = defaultLocale): TagInfo[] {
  const news = getAllNews(locale);
  const knowledge = getAllKnowledge(locale);
  const allArticles = [...news, ...knowledge];

  const tagCounts = new Map<string, number>();

  allArticles.forEach((article) => {
    article.tags?.forEach((tag) => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({
      tag,
      slug: slugifyTag(tag),
      count,
    }))
    .sort((a, b) => b.count - a.count);
}

export function getAllTagSlugs(locale: Locale = defaultLocale): string[] {
  return getAllTags(locale).map((t) => t.slug);
}

export function getTagBySlug(
  slug: string,
  locale: Locale = defaultLocale
): string | null {
  const tags = getAllTags(locale);
  const found = tags.find((t) => t.slug === slug);
  return found?.tag || null;
}

export function getArticlesByTag(
  tag: string,
  locale: Locale = defaultLocale
): ContentMeta[] {
  const news = getAllNews(locale).map((a) => ({ ...a, type: 'news' as const }));
  const knowledge = getAllKnowledge(locale).map((a) => ({
    ...a,
    type: 'knowledge' as const,
  }));
  const allArticles = [...news, ...knowledge];

  return allArticles
    .filter((article) =>
      article.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticlesByTagSlug(
  slug: string,
  locale: Locale = defaultLocale
): ContentMeta[] {
  const tag = getTagBySlug(slug, locale);
  if (!tag) return [];
  return getArticlesByTag(tag, locale);
}

export { slugifyTag };

// JSON Page Content functions
export function getPageContent<T>(
  pageName: string,
  locale: Locale = defaultLocale
): T {
  const filePath = path.join(
    contentDirectory,
    locale,
    'pages',
    `${pageName}.json`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`Page content not found: ${pageName} for locale ${locale}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}

// UI Strings functions
export function getUIStrings<T>(
  category: string,
  locale: Locale = defaultLocale
): T {
  const filePath = path.join(
    contentDirectory,
    locale,
    'ui',
    `${category}.json`
  );

  if (!fs.existsSync(filePath)) {
    throw new Error(`UI strings not found: ${category} for locale ${locale}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}
