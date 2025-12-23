import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Section, Container } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'VATGenius | Automated VAT Refund Solutions for Neobanks',
  description:
    'Unlock Foreign VAT Refunds: A Frictionless Revenue Stream for Your Business Accounts. Empower your business customers to claim back foreign Input VAT automatically.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="transparent" className="relative overflow-hidden pt-20 md:pt-28">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-home.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Unlock Foreign VAT Refunds:{' '}
            <span className="text-brand">A Frictionless Revenue Stream</span>{' '}
            for Your Business Accounts
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Empower your business customers to claim back foreign Input VAT
            automatically and digitally (
            <Link href="/knowledge/vat-refund-basics" className="text-brand hover:underline">
              Basics of the VAT refund procedure
            </Link>
            ). Our solution integrates seamlessly into your platform, providing
            a zero-effort, end-to-end recovery service.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Boost customer loyalty, increase transaction volume, and offer a
            powerful new financial tool without administrative overhead for your
            bank.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/demo" size="lg">
              Request a Live Demo & Partnership Consultation
            </Button>
          </div>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            The VATGenius Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A modern graphic showing data seamlessly flowing from your Neobank
            App Interface into the VAT Reclaim Engine
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Bank API */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              VATGenius Bank API
            </h3>
            <p className="mt-3 text-gray-600">
              Easy integration with API for automated data transfer from your
              bank system. Captures, organizes, processes, and validates data
              from all the invoices and receipts of your business customers.
            </p>
          </div>

          {/* Engine */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              VATGenius Engine
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>AI-powered invoice compliance assessment</li>
              <li>Calculate potential foreign VAT refund amounts</li>
              <li>Request customer authorization automatically</li>
              <li>Handle inquiries from foreign tax authorities</li>
              <li>Real-time status display</li>
            </ul>
          </div>

          {/* Tax API */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              VATGenius TAX API
            </h3>
            <p className="mt-3 text-gray-600">
              Submits local and foreign VAT refund applications fully
              automatically and digitally to the tax portals of the relevant
              countries.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Your Advantages & Benefits at a Glance
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Revenue</h3>
            <p className="mt-2 text-gray-600">
              New, passive revenue stream via profit-share.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Retention</h3>
            <p className="mt-2 text-gray-600">
              Delivers tangible financial returns to your business customers,
              boosting loyalty.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Differentiation
            </h3>
            <p className="mt-2 text-gray-600">
              Offer a unique, premium service that competitors lack.
            </p>
          </div>
        </div>
      </Section>

      {/* Security Section */}
      <Section background="gray">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Security and Compliance
            </h2>
            <p className="mt-4 text-gray-600">
              At VATGenius, implementing effective cybersecurity measures is
              fundamental to ensuring the protection of sensitive data and
              thereby securing the trust of our customers.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  Encryption protocols and multi-factor authentication for
                  access controls
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  Careful review of every aspect of data processing
                </span>
              </li>
              <li className="flex gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">
                  GDPR compliant data storage and handling
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-white p-8 shadow-lg">
              <svg className="h-32 w-32 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Unlock New Revenue Streams?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Join leading neobanks in offering automated VAT refund services to
            your business customers.
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
