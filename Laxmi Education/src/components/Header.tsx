'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTestPrepOpen, setIsTestPrepOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Study Abroad', href: '/study-abroad' },
    { name: 'Test Preparation', href: '/test-preparation' },
    { name: 'Blog', href: '/blog' },
    { name: 'Institution', href: '/institution' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const testPrepItems = [
    { name: 'IELTS Preparation', href: '/test-preparation/ielts' },
    { name: 'PTE Preparation', href: '/test-preparation/pte' },
    { name: 'TOEFL Preparation', href: '/test-preparation/toefl' },
    { name: 'GRE Preparation', href: '/test-preparation/gre' },
    { name: 'GMAT Preparation', href: '/test-preparation/gmat' },
    { name: 'SAT Preparation', href: '/test-preparation/sat' },
  ];

  return (
    <header className="bg-white text-royal-blue shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Laxmi Educational Consultancy Logo"
                width={200}
                height={60}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigation
              .filter((item) => item.name !== 'Contact Us')
              .map((item) => (
                <div key={item.name} className="relative">
                  {item.name === 'Test Preparation' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsTestPrepOpen(true)}
                      onMouseLeave={() => setIsTestPrepOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="text-royal-blue hover:text-cta-red transition-colors duration-200 font-medium flex items-center group relative"
                        title="Hover to see test preparation options"
                      >
                        {item.name}
                        <svg
                          className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200 text-cta-red"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        {/* Subtle indicator dot */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-cta-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      </Link>
                      {/* Hover hint tooltip */}
                      <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-40">
                        Hover to see test preparation options
                      </div>
                      {isTestPrepOpen && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                          <div className="py-1">
                            {testPrepItems.map((testItem) => (
                              <Link
                                key={testItem.name}
                                href={testItem.href}
                                className="block px-4 py-2 text-sm text-royal-blue hover:bg-gray-100 hover:text-cta-red transition-colors duration-200"
                              >
                                {testItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-royal-blue hover:text-cta-red transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-md bg-deep-red px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-yellow hover:text-dark-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Consult Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-royal-blue hover:text-cta-red focus:outline-none focus:text-cta-red"
              aria-label="Toggle main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.name === 'Test Preparation' ? (
                    <div>
                      <button
                        onClick={() => setIsTestPrepOpen(!isTestPrepOpen)}
                        className="text-royal-blue hover:text-cta-red flex items-center justify-between w-full px-3 py-2 text-base font-medium transition-colors duration-200"
                      >
                        {item.name}
                        <svg
                          className={`h-4 w-4 transform transition-transform duration-200 ${
                            isTestPrepOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isTestPrepOpen && (
                        <div className="pl-4 space-y-1">
                          {testPrepItems.map((testItem) => (
                            <Link
                              key={testItem.name}
                              href={testItem.href}
                              className="text-royal-blue hover:text-cta-red block px-3 py-2 text-sm font-medium transition-colors duration-200"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsTestPrepOpen(false);
                              }}
                            >
                              {testItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-royal-blue hover:text-cta-red block px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 pt-2">
                <Link
                  href="/contact-us"
                  className="block w-full text-center rounded-md bg-deep-red px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-primary-yellow hover:text-dark-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Consult Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

