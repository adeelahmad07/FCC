import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const siteUrl = "https://falconchemicals.ltd";

export const metadata: Metadata = {
  title: "Falcon Chemical Construction | Waterproofing & Heat Proofing Experts Pakistan",
  description:
    "Pakistan's #1 waterproofing & heat proofing company. Roof waterproofing, heat insulation, water tank treatment, termite control in Islamabad, Lahore, Punjab, Sindh, KPK & Azad Kashmir. 25+ years experience. Get free quote!",
  keywords:
    "waterproofing Pakistan, heat proofing Islamabad, roof waterproofing Lahore, water tank treatment, washroom leakage repair, termite control Pakistan, damp proofing, Falcon Chemical Construction, waterproofing company near me, heat proofing cost per sq ft, chemical construction Pakistan",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Falcon Chemical Construction | Waterproofing & Heat Proofing Experts",
    description:
      "Pakistan's Premier Waterproofing & Heat Proofing Company. 25+ years of excellence across Punjab, Sindh, KPK & Azad Kashmir. Industrial-grade solutions with 5-year warranty.",
    type: "website",
    url: siteUrl,
    siteName: "Falcon Chemical Construction",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falcon Chemical Construction | Waterproofing Experts Pakistan",
    description:
      "Pakistan's #1 waterproofing & heat proofing company. 25+ years experience. Get free quote today!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here after setup
    // google: "your-verification-code",
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Falcon Chemical Construction",
  alternateName: "FCC",
  description:
    "Pakistan's premier waterproofing and heat proofing company. Industrial-grade chemical solutions for residential, commercial, and industrial properties.",
  url: siteUrl,
  telephone: "+923206377227",
  email: "info@falconchemicals.com",
  foundingDate: "2001",
  areaServed: [
    { "@type": "State", name: "Punjab" },
    { "@type": "State", name: "Sindh" },
    { "@type": "State", name: "Khyber Pakhtunkhwa" },
    { "@type": "State", name: "Azad Kashmir" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Ghauri Town Phase 5",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Industrial Area Gajjumata",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  ],
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "PKR",
  sameAs: ["https://www.facebook.com/share/1E9KFmwcWk/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chemical Construction Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Heat Proofing",
          description: "Thermal insulation treatments that reflect sunlight and reduce indoor temperature.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Proofing",
          description: "Advanced polymer-based coatings for water leakage and seepage protection.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Water Tank Treatment",
          description: "Epoxy and cementitious waterproofing for underground and overhead water tanks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Washroom Treatment",
          description: "Complete leakage repair and waterproofing for bathrooms without demolition.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Walls Water & Heat Proofing",
          description: "Chemical sheets and coatings for exterior walls to prevent dampness and heat transfer.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Termite Control",
          description: "Professional chemical barrier treatments to protect property from termite damage.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1200",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Preload gallery images so they're ready before scrolling */}
        <link rel="preload" as="image" href="/images/gallery/heat-proofing.webp" />
        <link rel="preload" as="image" href="/images/gallery/water-proofing.webp" />
        <link rel="preload" as="image" href="/images/gallery/water-tank-treatment.webp" />
        <link rel="preload" as="image" href="/images/gallery/washroom-treatment.webp" />
        <link rel="preload" as="image" href="/images/gallery/walls-water-heat-proofing.webp" />
        <link rel="preload" as="image" href="/images/gallery/termite-control.webp" />
        {/* JSON-LD Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
