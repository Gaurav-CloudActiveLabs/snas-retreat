import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import OGImage from "@/assets/ogimage.png";
import favicon from "@/assets/favicon.png";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["100", "900"], // You can specify different weights here
});

export const metadata: Metadata = {
  title:
    "SNAS RETREAT - Luxury Boutique Hotel in Manali | Breathtaking Mountain Views & Premium Stay",
  description:
    "Experience luxury at SNAS RETREAT, a boutique hotel in Manali offering stunning mountain views, spacious rooms, fine dining, and world-class amenities. Book your perfect getaway today!",
  openGraph: {
    title:
      "SNAS RETREAT - Luxury Boutique Hotel in Manali | Breathtaking Mountain Views & Premium Stay",
    description:
      "Experience luxury at SNAS RETREAT, a boutique hotel in Manali offering stunning mountain views, spacious rooms, fine dining, and world-class amenities. Book your perfect getaway today!",
    url: "https://snasretreat.com/",
    siteName: "SNAS RETREAT, Manali",
    images: [
      {
        url: OGImage.src, // Add the URL of your image here
        width: 800,
        height: 600,
        alt: "SNAS RETREAT Hotel View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@SNAS_RETREAT",
    title:
      "SNAS RETREAT - Luxury Boutique Hotel in Manali | Breathtaking Mountain Views & Premium Stay",
    description:
      "Experience luxury at SNAS RETREAT, a boutique hotel in Manali offering stunning mountain views, spacious rooms, fine dining, and world-class amenities. Book your perfect getaway today!",
    images: [
      {
        url: OGImage.src, // Add the URL of your image here
        alt: "SNAS RETREAT Hotel View",
      },
    ],
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
        <link rel="icon" href={favicon.src} sizes="16x16" type="image/png" />
      </head>
      <body className={`${jost.variable} antialiased`}>{children}</body>
    </html>
  );
}
