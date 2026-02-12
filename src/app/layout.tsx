import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna - Premium Curated Products | Instant WhatsApp Checkout",
  description:
    "Shop premium curated gear for bold lifestyles. Explore hot sales, best sellers, popular picks, and more with instant WhatsApp checkout. Fast, secure, and convenient shopping experience.",
  keywords:
    "curated products, instant checkout, WhatsApp shopping, premium gear, best sellers",
  authors: [{ name: "Anna" }],
  creator: "Anna",
  publisher: "Anna",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chibuike07.github.io/anna_products",
    siteName: "Anna",
    title: "Anna - Premium Curated Products | Instant WhatsApp Checkout",
    description:
      "Shop premium curated gear for bold lifestyles with instant WhatsApp checkout.",
    images: [
      {
        url: "https://chibuike07.github.io/anna_products/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Anna Store - Premium Curated Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna - Premium Curated Products | Instant WhatsApp Checkout",
    description:
      "Shop premium curated gear for bold lifestyles with instant WhatsApp checkout.",
    images: ["https://chibuike07.github.io/anna_products/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chibuike07.github.io/anna_products",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
