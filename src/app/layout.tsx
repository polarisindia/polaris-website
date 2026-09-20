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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${publicSans.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
