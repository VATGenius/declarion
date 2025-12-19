'use client';

const CONSENT_KEY = 'vatgenius_consent';

export type ConsentCategory = 'necessary' | 'analytics';

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  timestamp?: number;
}

const defaultConsent: ConsentState = {
  necessary: true, // Always enabled
  analytics: false,
};

export function getConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Invalid JSON or localStorage error
  }
  return null;
}

export function setConsent(consent: ConsentState): void {
  if (typeof window === 'undefined') return;

  const consentWithTimestamp = {
    ...consent,
    necessary: true, // Always true
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentWithTimestamp));

    // Dispatch custom event for components listening to consent changes
    window.dispatchEvent(
      new CustomEvent('consentChange', { detail: consentWithTimestamp })
    );
  } catch {
    // localStorage error
  }
}

export function hasConsent(category: ConsentCategory): boolean {
  if (category === 'necessary') return true;

  const consent = getConsent();
  if (!consent) return false;

  return consent[category] === true;
}

export function hasConsentDecision(): boolean {
  return getConsent() !== null;
}

export function resetConsent(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CONSENT_KEY);
}

export { defaultConsent };
