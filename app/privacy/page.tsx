import { Metadata } from 'next';
import { Section } from '@/components/layout';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Privacy Policy',
  description:
    'VATGenius Privacy Policy. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-gray-500">Last updated: December 2024</p>

        <div className="mt-8 space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Introduction
            </h2>
            <p className="mt-3">
              VATGenius (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              2. Information We Collect
            </h2>
            <p className="mt-3">We collect information that you provide directly to us, including:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Name and contact information</li>
              <li>Company information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Provide and maintain our services</li>
              <li>Process and complete transactions</li>
              <li>Respond to your comments and questions</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Data Security
            </h2>
            <p className="mt-3">
              We implement appropriate technical and organizational measures to
              protect your personal data against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Your Rights (GDPR)
            </h2>
            <p className="mt-3">Under the GDPR, you have the following rights:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              6. Cookies
            </h2>
            <p className="mt-3">
              We use cookies and similar tracking technologies to track activity
              on our website. You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being sent. Please see our
              cookie consent banner for more options.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              7. Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us
              at:{' '}
              <a
                href="mailto:privacy@vatgenius.com"
                className="text-brand hover:underline"
              >
                privacy@vatgenius.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
