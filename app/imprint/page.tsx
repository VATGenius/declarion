import { Metadata } from 'next';
import { Section } from '@/components/layout';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Imprint',
  description: 'VATGenius legal information and imprint.',
  path: '/imprint',
});

export default function ImprintPage() {
  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Imprint
        </h1>
        <p className="mt-4 text-gray-500">
          Information pursuant to Section 5 TMG (German Telemedia Act)
        </p>

        <div className="mt-8 space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Company</h2>
            <div className="mt-3 space-y-1">
              <p>VATGenius GmbH</p>
              <p>[Street Address]</p>
              <p>[Postal Code] [City]</p>
              <p>Germany</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <div className="mt-3 space-y-1">
              <p>
                Email:{' '}
                <a
                  href="mailto:info@vatgenius.com"
                  className="text-brand hover:underline"
                >
                  info@vatgenius.com
                </a>
              </p>
              <p>Phone: [Phone Number]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Registration
            </h2>
            <div className="mt-3 space-y-1">
              <p>Commercial Register: [Amtsgericht]</p>
              <p>Registration Number: HRB [Number]</p>
              <p>VAT ID: DE[Number]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Managing Directors
            </h2>
            <div className="mt-3 space-y-1">
              <p>Dr. Philipp Tranacher</p>
              <p>Charles Watkins</p>
              <p>Nils Lowe</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Responsible for Content
            </h2>
            <p className="mt-3">
              Responsible for content pursuant to Section 55(2) RStV (German
              Interstate Broadcasting Agreement):
            </p>
            <div className="mt-2 space-y-1">
              <p>Dr. Philipp Tranacher</p>
              <p>[Address as above]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Dispute Resolution
            </h2>
            <p className="mt-3">
              The European Commission provides a platform for online dispute
              resolution (ODR):{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              We are neither willing nor obliged to participate in dispute
              resolution proceedings before a consumer arbitration board.
            </p>
          </section>
        </div>
      </div>
    </Section>
  );
}
