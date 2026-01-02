import { locales, type Locale } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export default async function LangLayout({ children }: Props) {
  return children;
}
