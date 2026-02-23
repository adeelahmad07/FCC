import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Falcon Chemical Construction | Waterproofing & Heat Proofing Experts",
  description:
    "Pakistan's premier waterproofing and heat proofing experts. Industrial-grade chemical solutions for residential, commercial, and industrial properties across Punjab, KPK, and Azad Kashmir.",
  keywords:
    "waterproofing, heat proofing, chemical construction, Pakistan, Islamabad, Lahore, roof waterproofing, heat insulation",
  openGraph: {
    title: "Falcon Chemical Construction",
    description:
      "Pakistan's Premier Waterproofing & Heat Proofing Experts - 25+ Years of Excellence",
    type: "website",
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
