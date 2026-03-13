'use client';

import { useEffect, useState } from 'react';
import { hasConsent, type ConsentState } from './consentStore';

/**
 * AnalyticsProvider - Loads analytics scripts only after consent
 *
 * This component listens for consent changes and loads analytics scripts
 * when the user has given analytics consent.
 *
 * To integrate Server-Side GTM:
 * 1. Set up GTM server container on a subdomain (e.g., gtm.declarion.tech)
 * 2. Configure reverse proxy in Vercel/Cloudflare for first-party cookies
 * 3. Add GTM_SERVER_URL and ANALYTICS_ID to environment variables
 * 4. The script URL would be: ${GTM_SERVER_URL}/gtm.js?id=${ANALYTICS_ID}
 */
export function AnalyticsProvider() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Check initial consent
    if (hasConsent('analytics')) {
      setAnalyticsEnabled(true);
    }

    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent<ConsentState>) => {
      if (event.detail.analytics) {
        setAnalyticsEnabled(true);
      }
    };

    window.addEventListener(
      'consentChange',
      handleConsentChange as EventListener
    );

    return () => {
      window.removeEventListener(
        'consentChange',
        handleConsentChange as EventListener
      );
    };
  }, []);

  // Don't render anything if analytics not enabled or no ID configured
  if (!analyticsEnabled) {
    return null;
  }

  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const gtmServerUrl = process.env.NEXT_PUBLIC_GTM_SERVER_URL;

  if (!analyticsId) {
    return null;
  }

  // Example: Server-Side GTM implementation
  // Replace this with your actual analytics implementation
  return (
    <>
      {/* Placeholder for Server-Side GTM */}
      {/*
        When you have your GTM server set up, uncomment and modify:

        <Script
          id="gtm-script"
          strategy="afterInteractive"
          src={`${gtmServerUrl}/gtm.js?id=${analyticsId}`}
        />

        Or for standard Google Analytics:

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsId}');
          `}
        </Script>
      */}

      {/* Debug: Remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <script
          dangerouslySetInnerHTML={{
            __html: `console.log('[Analytics] Consent given, would load: ${gtmServerUrl || 'GTM'} with ID: ${analyticsId}');`,
          }}
        />
      )}
    </>
  );
}
