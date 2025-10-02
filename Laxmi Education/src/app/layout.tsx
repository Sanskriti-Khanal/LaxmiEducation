import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsultationBanner from '@/components/ConsultationBanner';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laxmi Education - Your Gateway to International Education",
  description: "Expert guidance for study abroad programs, test preparation (IELTS, TOEFL, GRE, GMAT), and university applications. Achieve your dreams of international education with Laxmi Education.",
  keywords: "study abroad, IELTS preparation, TOEFL preparation, GRE preparation, GMAT preparation, university applications, visa assistance, international education",
  authors: [{ name: "Laxmi Education" }],
  creator: "Laxmi Education",
  publisher: "Laxmi Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://laxmieducation.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Laxmi Education - Your Gateway to International Education",
    description: "Expert guidance for study abroad programs, test preparation, and university applications.",
    url: 'https://laxmieducation.com',
    siteName: 'Laxmi Education',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Laxmi Education - International Education Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laxmi Education - Your Gateway to International Education",
    description: "Expert guidance for study abroad programs, test preparation, and university applications.",
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Laxmi Education",
              "description": "Expert guidance for study abroad programs, test preparation, and university applications",
              "url": "https://laxmieducation.com",
              "logo": "https://laxmieducation.com/assets/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "info@laxmieducation.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Education Street",
                "addressLocality": "Learning City",
                "addressRegion": "LC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/laxmieducation",
                "https://www.twitter.com/laxmieducation",
                "https://www.linkedin.com/company/laxmieducation"
              ],
              "offers": {
                "@type": "Offer",
                "name": "Free Educational Consultation",
                "description": "Get expert guidance for study abroad programs, test preparation, and university applications",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2025-01-01",
                "seller": {
                  "@type": "EducationalOrganization",
                  "name": "Laxmi Education"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Free Educational Consultation",
              "description": "Expert guidance for study abroad programs, test preparation (IELTS, TOEFL, GRE, GMAT), and university applications",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Laxmi Education",
                "url": "https://laxmieducation.com"
              },
              "serviceType": "Educational Consulting",
              "areaServed": "Nepal",
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://laxmieducation.com",
                "serviceSmsNumber": "+977-1-5333088",
                "servicePhone": "+977-1-5333088"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Top Contact Bar */}
        <div className="bg-royal-blue text-white text-sm py-2 relative z-[60]" style={{color: 'white'}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            {/* Left side - Kathmandu Contact */}
            <div className="flex items-center mb-1 sm:mb-0" style={{color: 'white'}}>
              <span className="mr-2" style={{color: 'white'}}>📞</span>
              <span style={{color: 'white'}}>Contact No: Kathmandu 9816969646</span>
            </div>
            {/* Right side - Jhapa Contact & Email */}
            <div className="flex items-center space-x-4">
              <span className="flex items-center" style={{color: 'white'}}>
                <span className="mr-2" style={{color: 'white'}}>📞</span>
                <span style={{color: 'white'}}>Jhapa 9804904835</span>
              </span>
              <span className="flex items-center" style={{color: 'white'}}>
                <span className="mr-2" style={{color: 'white'}}>✉️</span>
                <span style={{color: 'white'}}>collegeadmissionnp@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ConsultationBanner />
      </body>
    </html>
  );
}
