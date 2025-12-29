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
                  href="mailto:info@vatgenius.tech"
                  className="block mt-1 text-sm text-gray-600 hover:text-brand"
                >
                  info@vatgenius.tech
                </a>
                <a
                  href="https://www.linkedin.com/company/vatgenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
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
