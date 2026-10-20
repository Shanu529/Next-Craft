import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/seo/JsonLd";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} | Website Design Agency & Graphic Design Services`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: { index: true, follow: true },
  openGraph: { siteName: siteConfig.name, type: "website", images: [siteConfig.ogImage] },
  twitter: { card: "summary_large_image", images: [siteConfig.ogImage] },
};

export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-semibold focus:text-black">Skip to content</a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
