import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RouteLoader from "./components/RouteLoader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Zero Waste",
  description: "Zero Waste circular ecosystem platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
      </head>
      <body className={`${inter.variable} ${nunitoSans.variable} antialiased`}>
        <RouteLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}