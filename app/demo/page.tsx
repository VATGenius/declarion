import { Metadata } from 'next';
import { Section } from '@/components/layout';
import { DemoForm } from '@/components/forms';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Request a Demo',
  description:
    'Zero Integration Friction. Maximum Financial Upside. Request a live demo and partnership consultation.',
  path: '/demo',
});

export default function DemoPage() {
  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Zero Integration Friction. Maximum Financial Upside.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Speed and seamless experience are critical for your business
              customers. Our API solution guarantees smooth integration into your
              core banking platform.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex gap-3">
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
                <div>
                  <p className="font-semibold text-gray-900">
                    Zero Operational Overhead
                  </p>
                  <p className="text-gray-600">
                    We manage the entire end-to-end recovery process, from
                    receipt verification to final disbursement.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
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
                <div>
                  <p className="font-semibold text-gray-900">New Revenue Stream</p>
                  <p className="text-gray-600">
                    Generate a new, passive revenue share based on the recovered
                    VAT volume processed through your platform.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
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
                <div>
                  <p className="font-semibold text-gray-900">Competitive Edge</p>
                  <p className="text-gray-600">
                    Provide a powerful, innovative service that sets you apart
                    from traditional banks and competitors.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Book Your Demo
            </h2>
            <p className="mt-2 text-gray-600">
              Fill out the form below and we will be in touch within 24 hours.
            </p>
            <div className="mt-6">
              <DemoForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
