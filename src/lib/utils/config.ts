/**
 * Application configuration constants
 */

// Production deployment URL
export const DEPLOYED_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL || "https://chibuike07.github.io";

// Open Graph image URL (must be a publicly accessible PNG/JPG for WhatsApp previews)
export const OG_IMAGE_URL =
  process.env.NEXT_PUBLIC_OG_IMAGE_URL ||
  "https://dummyimage.com/1200x630/0f172a/ffffff.png&text=Anna%27s+Kitchen";

// Logo URL (optional, must be a publicly accessible image)
export const LOGO_URL = process.env.NEXT_PUBLIC_LOGO_URL || OG_IMAGE_URL;

// Base path for the application
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Full application URL (origin + base path)
export const APP_URL = `${DEPLOYED_ORIGIN}${BASE_PATH}`;

/**
 * Build public asset path for in-app usage
 * Ensures basePath is respected for GitHub Pages
 */
export const getPublicAssetPath = (assetPath: string): string => {
  if (typeof assetPath !== "string" || !assetPath.startsWith("/")) {
    return "";
  }

  return `${BASE_PATH}${assetPath}`;
};

/**
 * Build absolute image URL for external usage (WhatsApp, emails, etc.)
 * Ensures images are accessible from any external source
 */
export const getAbsoluteImageUrl = (imagePath: string): string => {
  if (typeof imagePath !== "string" || !imagePath.startsWith("/")) {
    return "";
  }
  return `${APP_URL}${imagePath}`;
};

/**
 * Get a WhatsApp-friendly og:image URL.
 * WhatsApp previews do not reliably render SVGs, so fallback to OG_IMAGE_URL.
 */
export const getOgImageUrl = (imagePath: string): string => {
  if (typeof imagePath !== "string" || !imagePath.startsWith("/")) {
    return OG_IMAGE_URL;
  }

  return imagePath.toLowerCase().endsWith(".svg")
    ? OG_IMAGE_URL
    : getAbsoluteImageUrl(imagePath);
};

/**
 * Build product detail URL for external sharing
 * Used in WhatsApp messages and social sharing
 */
export const getProductDetailUrl = (productId: string): string => {
  if (typeof productId !== "string" || !productId.trim()) {
    return APP_URL;
  }
  return `${APP_URL}/product/${encodeURIComponent(productId.trim())}/`;
};

/**
 * Build product image URL with absolute path
 * Used in og:image and WhatsApp preview
 */
export const getProductImageUrl = (imagePath: string): string => {
  return getAbsoluteImageUrl(imagePath);
};
