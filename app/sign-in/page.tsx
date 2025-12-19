import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/forms';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Sign In',
  description: 'Log in to your VATGenius account.',
  path: '/sign-in',
});

export default function SignInPage() {
  return (
    <Section background="white" className="pt-20">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Log in to your VATGenius account
          </h1>
        </div>

        {/* Login Form (UI Stub) */}
        <form className="mt-8 space-y-6">
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="john@doe.com"
            required
          />
          <FormField
            label="Password"
            name="password"
            type="text"
            placeholder="Enter your password"
            required
          />
          <div className="text-right">
            <Link
              href="#"
              className="text-sm text-brand hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-500">or</span>
          </div>
        </div>

        {/* New to VATGenius */}
        <div className="rounded-lg border border-gray-200 p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            New to VATGenius?
          </h2>
          <p className="mt-2 text-gray-600">
            The VATGenius Platform is a fully integrated, API-based engine that
            enables 100% automated VAT recovery in real-time.
          </p>
          <div className="mt-6">
            <Button href="/demo" variant="outline">
              Request a Live Demo & Partnership Consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
