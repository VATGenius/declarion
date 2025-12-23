import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';
import { getPageContent } from '@/lib/content';

interface TeamContent {
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

export const metadata: Metadata = generateSeoMetadata({
  title: 'Team',
  description:
    'The VAT Refund Specialists for Your Business Customers. Meet the VATGenius team.',
  path: '/team',
});

export default function TeamPage() {
  const content = getPageContent<TeamContent>('team');

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
            <Link href="/knowledge/vat-refund-basics" className="text-brand hover:underline">
              Basics of the VAT refund procedure
            </Link>
            ).
          </p>
        </div>
      </Section>

      {/* Our Niche Section */}
      <Section background="gray">
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

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {content.team.members.map((member) => (
            <div key={member.name} className="text-center">
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
              <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray">
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
              href={content.cta.buttonLink}
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
