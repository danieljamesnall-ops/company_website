import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "business solutions",
    "technology consulting",
    "website development",
    "IT support",
    "digital solutions",
    "process improvement",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.url
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable} h-full`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-200 antialiased">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  );
}
