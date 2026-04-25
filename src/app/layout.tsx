import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/osimah/scroll-progress";
import { SectionRail } from "@/components/osimah/section-rail";
import { Cursor } from "@/components/osimah/cursor";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0FA39C",
};

const SITE_URL = "https://osimah.com";
const SITE_TITLE = "Osimah Digital — Enabling the Kingdom's digital future";
const SITE_DESC =
  "A Saudi technology house representing global brands in the Middle East — headquartered in Riyadh since 2017. End-to-end digital experiences for ministries, giga-projects and enterprises.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s · Osimah Digital" },
  description: SITE_DESC,
  keywords: [
    "Saudi technology house",
    "DXP",
    "Liferay",
    "Sitecore",
    "Riyadh",
    "Vision 2030",
    "DGA",
    "Digital transformation KSA",
  ],
  authors: [{ name: "Osimah Digital" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo.PNG" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: "Osimah Digital",
    locale: "en_US",
    images: [{ url: "/logo.PNG", width: 1200, height: 630, alt: "Osimah Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/logo.PNG"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <ScrollProgress />
        <SectionRail />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
