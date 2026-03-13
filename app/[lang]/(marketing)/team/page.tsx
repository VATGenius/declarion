import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';
import { type Locale, locales } from '@/lib/i18n/config';

interface TeamContent {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  hero: {
    title: string;
    description: string;
    heroImage: string;
  };
  niche: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
      linkedin?: string;
    }>;
  };
  values: {
    title: string;
    items: Array<{
      title: string;
      subtitle: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    buttonText: string;
    buttonLink: string;
  };
}

interface Props {
  params: Promise<{ lang: Locale }>;
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const content = getPageContent<TeamContent>('team', lang);
  return generateSeoMetadata({
    title: content.seo.metaTitle,
    description: content.seo.metaDescription,
    path: '/team',
  });
}

export default async function TeamPage({ params }: Props) {
  const { lang } = await params;
  const content = getPageContent<TeamContent>('team', lang);

  return (
    <>
      {/* Hero Section */}
      <Section background="transparent" className="relative overflow-hidden pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={content.hero.heroImage}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            {content.hero.description.split('(')[0]}
            (
            <Link href={`/${lang}/knowledge/vat-refund-basics`} className="text-brand hover:underline">
              Navigating Foreign VAT Refunds
            </Link>
            ).
          </p>
        </div>
      </Section>

      {/* Our Niche Section */}
      <Section background="soft-blue">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.niche.title}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {content.niche.items.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-8">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.team.title}
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-12">
          {content.team.members.map((member) => (
            <div key={member.name} className="flex w-64 flex-col text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-brand">{member.role}</p>
              <p className="mt-2 flex-grow text-sm text-gray-600">{member.bio}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 text-sm text-gray-500 transition-colors hover:text-brand"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section background="soft-blue">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          {content.values.title}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {content.values.items.map((value) => (
            <div key={value.title} className="rounded-lg bg-white p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-2 font-medium text-brand">{value.subtitle}</p>
              <p className="mt-3 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {content.cta.title}
          </h2>
          <div className="mt-8">
            <Button
              href={`/${lang}${content.cta.buttonLink}`}
              variant="secondary"
              size="lg"
              className="bg-white text-brand hover:bg-gray-100"
            >
              {content.cta.buttonText}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
