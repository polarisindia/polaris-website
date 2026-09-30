import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { company } from "@/lib/content";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Body / paragraph typeface
const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.polarisenergy.in"),
  title: {
    default: `${company.name} | Engineering the Bottom Line`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  openGraph: {
    title: company.name,
    description: company.description,
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: company.shortName,
  url: "https://www.polarisenergy.in",
  logo: "https://www.polarisenergy.in/logo-polaris.png",
  description: company.description,
  foundingDate: String(company.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "6, Sankalp Bungalow, Shankar Nagar, Savarkar Nagar, Gangapur Road",
    addressLocality: "Nashik",
    postalCode: "422013",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    email: company.email,
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/Polarisenergysolutions/",
    "https://x.com/polaris_nashik",
    "https://in.linkedin.com/company/polaris-renewable-solutions-pvt-ltd",
    "https://www.instagram.com/polaris_solar_solutions/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
