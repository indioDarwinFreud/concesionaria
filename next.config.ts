import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint configuration moved to .eslintrc or package.json in Next.js 16
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
      },
    ],
  },
};

export default nextConfig;
