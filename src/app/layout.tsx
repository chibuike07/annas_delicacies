import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEPLOYED_ORIGIN, OG_IMAGE_URL } from "@/lib/utils/config";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DEPLOYED_ORIGIN),
  title:
    "Ann's SoleCraft Studio - Designer Shoes in Nigeria | Order on WhatsApp",
  description:
    "Shop handcrafted Nigerian designer shoes from Ann's SoleCraft Studio. Premium heels, loafers, sneakers and sandals with instant WhatsApp ordering and fast delivery within Nigeria.",
  keywords:
    "designer shoes Nigeria, Lagos shoes, Nigerian footwear, women's heels, men's loafers, Ann's SoleCraft Studio, WhatsApp shoe order",
  authors: [{ name: "Ann's SoleCraft Studio" }],
  creator: "Ann's SoleCraft Studio",
  publisher: "Ann's SoleCraft Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chibuike07.github.io/annas_solecraft_studio",
    siteName: "Ann's SoleCraft Studio",
    title: "Ann's SoleCraft Studio - Designer Shoes in Nigeria",
    description:
      "Discover Nigerian designer shoes handcrafted for Lagos streets, owambe nights and everyday comfort with instant WhatsApp checkout.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Ann's SoleCraft Studio - Nigerian Designer Shoes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ann's SoleCraft Studio - Designer Shoes in Nigeria",
    description:
      "Shop handcrafted Nigerian designer shoes from Ann's SoleCraft Studio with instant WhatsApp ordering.",
    images: [OG_IMAGE_URL],
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
    canonical: "https://chibuike07.github.io/annas_solecraft_studio",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
