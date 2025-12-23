import { Metadata } from 'next';
import { Section } from '@/components/layout';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Terms of Service',
  description:
    'VATGenius Terms of Service. Read our terms and conditions for using our services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-gray-500">Last updated: December 2024</p>

        <div className="mt-8 space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Agreement to Terms
            </h2>
            <p className="mt-3">
              By accessing or using the VATGenius website and services, you
              agree to be bound by these Terms of Service. If you disagree with
              any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              2. Description of Service
            </h2>
            <p className="mt-3">
              VATGenius provides automated VAT refund solutions for neobanks and
              their business customers. Our platform enables the recovery of
              foreign input VAT through a fully digital, API-driven process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              3. User Responsibilities
            </h2>
            <p className="mt-3">You agree to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Intellectual Property
            </h2>
            <p className="mt-3">
              The VATGenius platform, including all content, features, and
              functionality, is owned by VATGenius and is protected by
              international copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Limitation of Liability
            </h2>
            <p className="mt-3">
              VATGenius shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Governing Law
            </h2>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with
              the laws of Germany, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              7. Changes to Terms
            </h2>
            <p className="mt-3">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by posting the updated terms
              on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              8. Contact Information
            </h2>
            <p className="mt-3">
              For questions about these Terms of Service, please contact us at:{' '}
              <a
                href="mailto:legal@vatgenius.com"
                className="text-brand hover:underline"
              >
                legal@vatgenius.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
