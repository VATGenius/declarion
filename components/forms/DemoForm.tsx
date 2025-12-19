'use client';

import { useState } from 'react';
import { FormField } from './FormField';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const countries = [
  { value: 'germany', label: 'Germany' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'france', label: 'France' },
  { value: 'spain', label: 'Spain' },
  { value: 'netherlands', label: 'Netherlands' },
  { value: 'italy', label: 'Italy' },
  { value: 'other-eu', label: 'Other EU Country' },
  { value: 'global', label: 'Global' },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function DemoForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [consent, setConsent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.get('fullName'),
          email: formData.get('email'),
          company: formData.get('company'),
          jobTitle: formData.get('jobTitle'),
          country: formData.get('country'),
          honeypot: formData.get('website'), // Honeypot field
          consent: consent,
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus('success');
        form.reset();
        setConsent(false);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-gray-900">Thank you!</h3>
        <p className="mt-2 text-gray-600">
          We will contact you within 24 hours to schedule your personalized demo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Full Name"
          name="fullName"
          placeholder="Jane Doe"
          required
        />
        <FormField
          label="Work Email"
          name="email"
          type="email"
          placeholder="jane.doe@neobank.com"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Company Name"
          name="company"
          placeholder="Name of your company"
          required
        />
        <FormField
          label="Job Title"
          name="jobTitle"
          placeholder="CEO / CPO / Manager of Business Development"
          required
        />
      </div>

      <FormField
        label="Country of Operation"
        name="country"
        type="select"
        options={countries}
        required
      />

      {/* Privacy Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I agree to the{' '}
          <Link href="/privacy" className="text-brand hover:underline">
            Privacy Policy
          </Link>{' '}
          and consent to receiving marketing communications.
        </label>
      </div>

      {/* Error Message */}
      {status === 'error' && errorMessage && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Book My Demo & Consultation Now'}
      </Button>

      {/* Privacy Note */}
      <p className="text-center text-xs text-gray-500">
        We respect your privacy. The information will only be used to schedule
        your tailored demo & consultation.
      </p>
    </form>
  );
}
