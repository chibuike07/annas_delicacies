/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  compiler: {
    styledComponents: true,
  },
  // Disable powered by Next.js header
  poweredByHeader: false,
  // Enable strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
