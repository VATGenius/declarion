'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/forms';

interface SignInUI {
  title: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  forgotPassword: string;
  submitButton: string;
  or: string;
  newToVatgenius: string;
  newToVatgeniusDescription: string;
  requestDemo: string;
  errorNotRegistered: string;
  forgotPasswordTitle: string;
  forgotPasswordMessage: string;
  backToSignIn: string;
}

interface SignInFormProps {
  locale: string;
  ui: SignInUI;
}

export function SignInForm({ locale, ui }: SignInFormProps) {
  const [showError, setShowError] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordSubmitted, setForgotPasswordSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotPasswordSubmitted(true);
  };

  if (showForgotPassword) {
    return (
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {ui.forgotPasswordTitle}
          </h1>
        </div>

        {forgotPasswordSubmitted ? (
          <div className="mt-8 rounded-lg bg-green-50 p-6 text-center">
            <p className="text-green-800">{ui.forgotPasswordMessage}</p>
            <button
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setForgotPasswordSubmitted(false);
              }}
              className="mt-4 text-sm text-brand hover:underline"
            >
              {ui.backToSignIn}
            </button>
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleForgotPasswordSubmit}>
            <FormField
              label={ui.emailLabel}
              name="email"
              type="email"
              placeholder={ui.emailPlaceholder}
              required
            />
            <Button type="submit" className="w-full">
              {ui.forgotPasswordTitle}
            </Button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowForgotPassword(false)}
                className="text-sm text-brand hover:underline"
              >
                {ui.backToSignIn}
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {ui.title}
        </h1>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <FormField
          label={ui.emailLabel}
          name="email"
          type="email"
          placeholder={ui.emailPlaceholder}
          required
        />
        <FormField
          label={ui.passwordLabel}
          name="password"
          type="password"
          placeholder={ui.passwordPlaceholder}
          required
        />
        <div className="text-right">
          <button
            type="button"
            onClick={() => setShowForgotPassword(true)}
            className="text-sm text-brand hover:underline"
          >
            {ui.forgotPassword}
          </button>
        </div>

        {showError && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
            {ui.errorNotRegistered}
          </div>
        )}

        <Button type="submit" className="w-full">
          {ui.submitButton}
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-4 text-gray-500">{ui.or}</span>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 p-6 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          {ui.newToVatgenius}
        </h2>
        <p className="mt-2 text-gray-600">{ui.newToVatgeniusDescription}</p>
        <div className="mt-6">
          <Button href={`/${locale}/demo`} variant="outline">
            {ui.requestDemo}
          </Button>
        </div>
      </div>
    </div>
  );
}
