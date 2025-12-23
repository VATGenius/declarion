import { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Integration',
  description:
    'Seamless API Integration. Low-code, plug-and-play service with minimal strain on your development resources.',
  path: '/integration',
});

export default function IntegrationPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="transparent" className="relative overflow-hidden pt-20">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero-integration.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Seamless API Integration
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The success of our partnership hinges on the speed of
            implementation. Our solution is designed as a low-code, plug-and-play
            service, ensuring minimal strain on your internal development
            resources and a rapid time-to-market.
          </p>
        </div>
      </Section>

      {/* Three Pillars Section */}
      <Section background="gray">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          The Three Integration Pillars
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
          Our service connects to your platform via a secure RESTful API,
          enabling automatic data flow and minimizing manual intervention. The
          integration requires focusing only on three core data exchange points:
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Customer Onboarding Hook
            </h3>
            <p className="mt-3 text-gray-600">
              A simple click to activate the VAT reclaim service for a specific
              business customer.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Transaction Data Feed
            </h3>
            <p className="mt-3 text-gray-600">
              A secure feed of relevant foreign expense transactions.
            </p>
          </div>

          <div className="rounded-lg bg-white p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10">
              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              Approval, Status & Payout
            </h3>
            <p className="mt-3 text-gray-600">
              A webhook to receive notifications on approvals, real-time updates
              on claim status and final refund payments.
            </p>
          </div>
        </div>
      </Section>

      {/* Low Code Section */}
      <Section background="white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Low Code, High Value
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          We understand that speed and efficiency are paramount. We deliver:
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Robust Documentation
            </h3>
            <p className="mt-2 text-gray-600">
              Comprehensive, easy-to-follow API documentation and SDKs for
              popular languages to accelerate your development cycle.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Dedicated Sandbox Environment
            </h3>
            <p className="mt-2 text-gray-600">
              A fully functional testing environment allows your team to
              prototype and validate the integration without affecting live
              production.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Minimal Maintenance
            </h3>
            <p className="mt-2 text-gray-600">
              We handle all ongoing compliance updates, foreign tax authority
              changes, and system maintenance. Zero technical debt for your
              platform.
            </p>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section background="gray">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Time-to-Market Estimate
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          We project a rapid implementation timeline, allowing you to launch
          this new premium feature quickly:
        </p>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-lg border border-gray-200 bg-white">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Phase
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Description
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Duration
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Your Dev Effort
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-brand">
                  Phase 1
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  API Access & Sandbox Testing
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">2 Week</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  Minimal (1 Developer)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-brand">
                  Phase 2
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  Data Flow Integration & Validation
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">4-6 Weeks</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  Low to Moderate
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-brand">
                  Phase 3
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  Compliance Review & Pilot Launch
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">1 Week</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  None (Internal Review)
                </td>
              </tr>
              <tr className="bg-brand/5">
                <td className="px-6 py-4 text-sm font-bold text-gray-900">
                  Total
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  Time to Pilot
                </td>
                <td className="px-6 py-4 text-sm font-bold text-brand">
                  ~6-8 Weeks
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  Limited
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Start Integration?
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
