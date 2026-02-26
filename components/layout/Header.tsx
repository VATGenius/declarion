'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/Button';
import { type Locale } from '@/lib/i18n/config';

export interface NavigationUI {
  product: string;
  whyUs: string;
  integration: string;
  team: string;
  newsKnowledge: string;
  signIn: string;
  requestDemo: string;
}

interface HeaderProps {
  locale: Locale;
  ui: NavigationUI;
}

export function Header({ locale, ui }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: ui.product, href: `/${locale}/product` },
    { name: ui.whyUs, href: `/${locale}/why-us` },
    { name: ui.integration, href: `/${locale}/integration` },
    { name: ui.team, href: `/${locale}/team` },
    { name: ui.newsKnowledge, href: `/${locale}/news` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="VATGenius"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-xl font-bold text-gray-900">VATGenius</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand ${isActive(item.href)
                  ? 'border-b-2 border-brand pb-0.5 text-brand'
                  : 'text-gray-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden items-center gap-4 md:flex">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href="https://app.vatgenius.tech/"
              className="text-sm font-medium text-gray-600 hover:text-brand"
            >
              {ui.signIn}
            </Link>
            <Button href={`/${locale}/demo`} size="sm">
              {ui.requestDemo}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitcher currentLocale={locale} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-100 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium hover:text-brand ${isActive(item.href) ? 'text-brand' : 'text-gray-600'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2" />
              <Link
                href="https://app.vatgenius.tech/"
                className="text-base font-medium text-gray-600 hover:text-brand"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ui.signIn}
              </Link>
              <Button href={`/${locale}/demo`} size="sm">
                {ui.requestDemo}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
