import { Metadata } from 'next';
import { Section } from '@/components/layout';
import { SignInForm } from '@/components/forms';
import { generateSeoMetadata } from '@/lib/seo';
import { getUIStrings } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface SignInUI {
  title: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  submitButton: string;
  or: string;
  newToVatgenius: string;
  newToVatgeniusDescription: string;
  requestDemo: string;
  errorNotRegistered: string;
  forgotPasswordTitle: string;
  forgotPasswordMessage: string;
  backToSignIn: string;
}

interface FormsUI {
  signIn: SignInUI;
}

interface Props {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const ui = getUIStrings<FormsUI>('forms', lang);
  return generateSeoMetadata({
    title: ui.signIn.title,
    description: ui.signIn.newToVatgeniusDescription,
    path: `/${lang}/sign-in`,
    locale: lang,
  });
}

export default async function SignInPage({ params }: Props) {
  const { lang } = await params;
  const ui = getUIStrings<FormsUI>('forms', lang);

  return (
    <Section background="white" className="pt-20">
      <SignInForm locale={lang} ui={ui.signIn} />
    </Section>
  );
}
