'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  getConsent,
  setConsent,
  hasConsentDecision,
  type ConsentState,
} from './consentStore';
import { Button } from '@/components/ui/Button';

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);

  useEffect(() => {
    // Only show banner if no consent decision has been made
    if (!hasConsentDecision()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent: ConsentState = {
      necessary: true,
      analytics: true,
    };
    setConsent(consent);
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const consent: ConsentState = {
      necessary: true,
      analytics: false,
    };
    setConsent(consent);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    const consent: ConsentState = {
      necessary: true,
      analytics: analyticsConsent,
    };
    setConsent(consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {showSettings ? (
          // Settings View
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Cookie Settings
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Manage your cookie preferences. Necessary cookies are required for
              the website to function and cannot be disabled.
            </p>

            <div className="mt-4 space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div>
                  <p className="font-medium text-gray-900">
                    Necessary Cookies
                  </p>
                  <p className="text-sm text-gray-500">
                    Required for basic website functionality.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="h-5 w-5 rounded border-gray-300 text-brand"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div>
                  <p className="font-medium text-gray-900">
                    Analytics Cookies
                  </p>
                  <p className="text-sm text-gray-500">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsConsent}
                  onChange={(e) => setAnalyticsConsent(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-brand focus:ring-brand"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowSettings(false)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Back
              </button>
              <Button onClick={handleSaveSettings} size="sm">
                Save Settings
              </Button>
            </div>
          </div>
        ) : (
          // Initial Banner View
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience and analyze
                site traffic. By clicking &quot;Accept All&quot;, you consent to our use
                of cookies. Read our{' '}
                <Link href="/privacy" className="text-brand hover:underline">
                  Privacy Policy
                </Link>{' '}
                for more information.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Manage Settings
              </button>
              <Button
                onClick={handleAcceptNecessary}
                variant="outline"
                size="sm"
              >
                Necessary Only
              </Button>
              <Button onClick={handleAcceptAll} size="sm">
                Accept All
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
