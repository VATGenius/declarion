import { Header, Footer } from '@/components/layout';
import { getUIStrings } from '@/lib/content';
import { type Locale } from '@/lib/i18n/config';

interface CommonUI {
  navigation: {
    product: string;
    whyUs: string;
    integration: string;
    team: string;
    newsKnowledge: string;
    signIn: string;
    requestDemo: string;
  };
  footer: {
    description: string;
    productTitle: string;
    companyTitle: string;
    legalTitle: string;
    contactUs: string;
    copyright: string;
    productLinks: Array<{ name: string; href: string }>;
    companyLinks: Array<{ name: string; href: string }>;
    legalLinks: Array<{ name: string; href: string }>;
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}

export default async function MarketingLayout({ children, params }: Props) {
  const { lang } = await params;
  const ui = getUIStrings<CommonUI>('common', lang);

  return (
    <>
      <Header locale={lang} ui={ui.navigation} />
      <main className="flex-1">{children}</main>
      <Footer locale={lang} ui={ui.footer} />
    </>
  );
}
