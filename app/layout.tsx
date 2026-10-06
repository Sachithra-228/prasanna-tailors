import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prasanna Tailors | Tailoring & Wedding Suit Rentals in Pannipitiya",
  description:
    "Prasanna Tailors in Pannipitiya offers custom tailoring, wedding suits, formal wear and suit rental services. Contact us to check availability and plan your perfect outfit.",
  openGraph: {
    title: "Prasanna Tailors | Tailoring & Wedding Suit Rentals in Pannipitiya",
    description:
      "Custom tailoring, wedding suits, formal wear and suit rental services in Pannipitiya, Sri Lanka.",
    type: "website",
    locale: "en_LK",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Prasanna Tailors",
  address: {
    "@type": "PostalAddress",
    streetAddress: "298B Old Road",
    addressLocality: "Pannipitiya",
    postalCode: "10230",
    addressCountry: "LK",
  },
  telephone: "+94776120015",
  openingHours: "Mo-Su 08:00-20:00",
  sameAs: ["https://www.facebook.com/p/Prasanna-Tailors-100063952546464/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
