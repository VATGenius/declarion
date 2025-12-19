import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';

const footerLinks = {
  product: [
    { name: 'Product', href: '/product' },
    { name: 'Integration', href: '/integration' },
    { name: 'Why Us', href: '/why-us' },
  ],
  company: [
    { name: 'Team', href: '/team' },
    { name: 'News', href: '/news' },
    { name: 'Knowledge Hub', href: '/knowledge' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Imprint', href: '/imprint' },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-gray-100 bg-gray-50">
      {/* Brand Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/brand-footer.png"
          alt=""
          fill
          className="object-cover opacity-5"
        />
      </div>
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="text-brand"
                >
                  <rect width="32" height="32" rx="8" fill="currentColor" />
                  <path
                    d="M8 16L14 22L24 10"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-bold text-gray-900">
                  VATGenius
                </span>
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Automated VAT refund solutions for neobanks and their business
                customers.
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-900">Contact Us</p>
                <a
                  href="mailto:info@vatgenius.com"
                  className="mt-1 text-sm text-gray-600 hover:text-brand"
                >
                  info@vatgenius.com
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-brand"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-brand"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-brand"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} VATGenius. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
