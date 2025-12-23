import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Why Us',
  description:
    'The VATGenius Partner Benefits: Revenue, Retention, Differentiation. Discover why leading neobanks choose VATGenius.',
  path: '/why-us',
});

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="transparent" className="relative overflow-hidden pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-why-us.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The VATGenius Partner Benefits:{' '}
            <span className="text-brand">Revenue, Retention, Differentiation</span>
          </h1>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            'Fees are only incurred when VAT is actually refunded. No financial risk for the customer.',
            'You only incur costs for integration. Your income can exceed these costs many times over.',
            'The service justifies a higher price point for the business account.',
            'Increase customer loyalty. High-value service makes switching less attractive.',
            'Option to label VAT recovery as your own service or third-party service.',
            'Traditional accounts leave money on the table. You can improve your market position.',
            'Plug-and-Play Integration. Go Live in Weeks.',
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-gray-200 bg-white p-4"
            >
              <svg
                className="h-6 w-6 flex-shrink-0 text-brand"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Implementation Section */}
      <Section background="gray">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Partnership Implementation & Go-to-Market
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Integration
            </h3>
            <p className="mt-2 text-gray-600">
              Ready for Pilot in 4-8 Weeks. Very low technical debt and
              resources needed from your side.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Operational Support
            </h3>
            <p className="mt-2 text-gray-600">
              We handle all legal, compliance, and customer support related to
              the VAT process. Your workload is minimal.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Marketing & Sales Enablement
            </h3>
            <p className="mt-2 text-gray-600">
              We provide materials and training to help your sales team
              effectively promote the new service.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Partner Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Why Partner with Us?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Neobank Integration Expertise',
              description:
                'We are experts in handling transaction data, statements, and documentation formats from leading Neobanks, significantly reducing preparation time and errors.',
            },
            {
              title: 'Pan-European Service',
              description:
                'Full support for cross-border Input Tax Reimbursement Claims (8th and 13th Directive VAT Refunds). We handle submission to final payout.',
            },
            {
              title: 'Speed & Efficiency',
              description:
                'Our streamlined, digital-first approach means quicker claim filing and faster processing compared to manual, paper-based methods.',
            },
            {
              title: 'Success-Based Model',
              description:
                'We often operate on a "No Win, No Fee" basis, ensuring our success is directly tied to yours.',
            },
            {
              title: 'Compliance & Assurance',
              description:
                'We ensure every claim is 100% compliant with local and EU-wide regulations, protecting your business from future audits.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Partner with VATGenius?
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
