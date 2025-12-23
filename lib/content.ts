import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
}

function getContentFromDirectory(directory: string): ContentMeta[] {
  const fullPath = path.join(contentDirectory, directory);

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
  directory: string,
  slug: string
): ContentItem | null {
  const fullPath = path.join(contentDirectory, directory);
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
export function getAllNews(): ContentMeta[] {
  return getContentFromDirectory('news');
}

export function getNewsBySlug(slug: string): ContentItem | null {
  return getContentBySlug('news', slug);
}

export function getAllNewsSlugs(): string[] {
  return getAllNews().map((item) => item.slug);
}

// Knowledge functions
export function getAllKnowledge(): ContentMeta[] {
  return getContentFromDirectory('knowledge');
}

export function getKnowledgeBySlug(slug: string): ContentItem | null {
  return getContentBySlug('knowledge', slug);
}

export function getAllKnowledgeSlugs(): string[] {
  return getAllKnowledge().map((item) => item.slug);
}

// Pages functions (optional static pages)
export function getPageBySlug(slug: string): ContentItem | null {
  return getContentBySlug('pages', slug);
}

// JSON Page Content functions
export function getPageContent<T>(pageName: string): T {
  const filePath = path.join(contentDirectory, 'pages', `${pageName}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Page content not found: ${pageName}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents) as T;
}
