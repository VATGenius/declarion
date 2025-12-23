import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Team',
  description:
    'The VAT Refund Specialists for Your Business Customers. Meet the VATGenius team.',
  path: '/team',
});

const team = [
  {
    name: 'Dr. Philipp Tranacher',
    role: 'Tax & Legal',
    bio: 'PhD, CPA, CTA, Lawyer. 15+ years in international tax.',
    image: '/images/team/philipp.jpg',
  },
  {
    name: 'Charles Watkins',
    role: 'Product Dev. & Sales',
    bio: "Master's degree in Psychology. 10+ years in international sales.",
    image: '/images/team/charles.png',
  },
  {
    name: 'Nils Löwe',
    role: 'IT & Product Development',
    bio: "Master's degree in Computer & Electrical Engineering and Information Technology. 10+ years in software development.",
    image: '/images/team/nils.png',
  },
  {
    name: 'Dr. Juliane Tranacher',
    role: 'Marketing & Sales',
    bio: 'PhD in German literature. 15 years of experience in marketing, press, and public relations with a focus on the financial and real estate industries.',
    image: '/images/team/juliane.png',
  },
  {
    name: 'Helena Ziani',
    role: 'Business Operations',
    bio: 'Master in Business Informatics. 8 years of experience in scaling high-growth startups in the US, UK, France and Germany.',
    image: '/images/team/helena.png',
  },
];

const values = [
  {
    title: 'Precision',
    subtitle:
      'Ensuring absolute accuracy to maximize recoverable VAT and minimize audit risk.',
    description:
      'We guarantee absolute accuracy and compliance with international tax laws, minimizing risks and maximizing the refundable VAT amount for your customers. Our processes are designed to manage complex data from different jurisdictions with flawless precision.',
  },
  {
    title: 'Digital First',
    subtitle:
      'Transform complex processes into a seamless, scalable, API-driven digital experience.',
    description:
      'Using API-driven integrations and advanced automation, we transform the manual, paper-intensive process of VAT refunds into a seamless, fully digital experience. This ensures speed, scalability, and minimal operational overhead for your banking platform.',
  },
  {
    title: 'Customer Focus',
    subtitle:
      "Design a seamless service that enhances your customers' global banking experience.",
    description:
      'Our services are tailored to the needs of your business customers, offering a seamless service that is easy to understand and accessible directly through your banking interface, thereby increasing customer loyalty and satisfaction.',
  },
  {
    title: 'Transparency',
    subtitle:
      'Providing real-time transparency and clear communication throughout the entire reimbursement cycle.',
    description:
      'We provide a clear, real-time audit trail for every transaction and refund status. Our fees and process steps are clearly outlined from the outset to ensure complete trust and transparency between us, the neobank, and the end customer.',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="transparent" className="relative overflow-hidden pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-team.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The VAT Refund Specialists for Your Business Customers
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We empower companies that use innovative financial solutions,
            especially those that work with neobanks, to seamlessly reclaim
            their maximum refundable VAT through the input tax refund process (
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
          Our Niche & Expertise
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">The Challenge</h3>
            <p className="mt-3 text-gray-600">
              Traditional VAT refund processes are often difficult to integrate
              efficiently into the unique infrastructure and documentation of
              digital neobanks. This can lead to missed applications, delays, or
              administrative overhead.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Solution</h3>
            <p className="mt-3 text-gray-600">
              We have tailored our process to this reality. We specialize in
              handling the input tax refund process and have in-depth knowledge
              of neobank documentation, enabling us to ensure faster, more
              compliant, and more successful VAT refunds.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">Our Promise</h3>
            <p className="mt-3 text-gray-600">
              We maximize the liquidity of your business customers by ensuring
              that they successfully recover every euro of VAT to which they are
              entitled. Our proprietary technology bridges the gap between legal
              VAT requirements and the agility of digital banking.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          The Team
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((member) => (
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
          Our Values
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {values.map((value) => (
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
            Ready to Work with Us?
          </h2>
          <div className="mt-8">
            <Button
              href="/demo"
              variant="secondary"
              size="lg"
              className="bg-white text-brand hover:bg-gray-100"
            >
              Request a Live Demo & Partnership Consultation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
