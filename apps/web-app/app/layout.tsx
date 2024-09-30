import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["100", "900"], // You can specify different weights here
});

export const metadata: Metadata = {
  title: "SNAS RETREAT - Luxury Wellness Redefined",
  description: "SNAS RETREAT - Luxury Wellness Redefined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>{children}</body>
    </html>
  );
}
