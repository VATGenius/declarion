import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Product',
  description:
    'Monetizing Foreign VAT Reclaim for Business Customers. A fully automated, compliance-assured platform for B2B VAT recovery.',
  path: '/product',
});

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="relative overflow-hidden pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-product.png"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Monetizing Foreign VAT Reclaim for Business Customers
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Foreign business expenses (travel, trade shows, services) of your
            business customers are increasing, but many recoverable foreign VAT
            amounts are not claimed due to complexity, varying country
            regulations, documentation requirements, compliance concerns, and
            manual processing (
            <Link href="/knowledge/vat-refund-basics" className="text-brand hover:underline">
              Basics of the VAT refund procedure
            </Link>
            ).
          </p>
          <p className="mt-4 text-lg font-medium text-gray-900">
            Our Solution: Elevating customer value and generating passive
            revenue through a fully automated, compliance-assured platform for
            B2B VAT recovery, requiring zero effort from your business customer.
          </p>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="gray">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          How it Works (The 4-Step Integration Flow)
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: '1',
              title: 'Data Acquisition',
              description:
                'Automated transaction data transfer via the VATGenius API.',
            },
            {
              step: '2',
              title: 'Processing',
              description:
                'The VATGenius Engine automatically checks documents, compiles them, calculates VAT refund amounts, and reports to business customers.',
            },
            {
              step: '3',
              title: 'Filing',
              description:
                'The VATGenius TAX API files the complex application to the relevant foreign tax authority.',
            },
            {
              step: '4',
              title: 'Pay-Out',
              description:
                'Funds are received and disbursed seamlessly, directly impacting your business customers results.',
            },
          ].map((item) => (
            <div key={item.step} className="relative rounded-lg bg-white p-6 shadow-sm">
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Customer Benefit Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Your Customer Benefit
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'No Effort',
              description: 'Fully automated identification of refundable VAT.',
            },
            {
              title: 'Maximum Amount',
              description:
                'AI-supported verification ensures the full potential of VAT refunds.',
            },
            {
              title: 'Complete Transparency',
              description:
                'Access the status of the application at any time via the banking dashboard.',
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance Section */}
      <Section background="gray">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Compliance & Security: Trust Built on Regulatory Excellence
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          As a partner in the financial sector, we understand that trust,
          security, and uncompromising regulatory adherence are non-negotiable.
          Our solution is engineered to mitigate risk, ensuring full compliance
          for both your institution and your business customers.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Global Tax Compliance-as-a-Service
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="font-semibold text-brand">Dedicated Expertise:</span>
                International tax specialists managing all relevant regulations
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-brand">Risk Transfer:</span>
                Offload the entire regulatory burden to us
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-brand">Audit Readiness:</span>
                Fully auditable and defensible claims
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Data Security and Privacy (GDPR Compliant)
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="font-semibold text-brand">Zero-Trust Architecture:</span>
                AES-256 encryption at rest and TLS 1.2+ in transit
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-brand">Data Minimization:</span>
                Only necessary data processed per GDPR
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-brand">Regular Audits:</span>
                Independent third-party security audits (SOC 2 readiness)
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Secure API Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Secure API and Infrastructure
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          Our integration is designed to integrate seamlessly without
          compromising your existing security posture.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="font-semibold text-gray-900">Token-Based Authentication</p>
            <p className="text-sm text-gray-600">Secure API interactions</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Cloud Infrastructure</p>
            <p className="text-sm text-gray-600">Certified environments with redundancy</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            See how VATGenius can help your business customers recover foreign VAT.
          </p>
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
