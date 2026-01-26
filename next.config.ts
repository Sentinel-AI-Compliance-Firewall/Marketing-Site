import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable scroll restoration for better back/forward navigation
  experimental: {
    scrollRestoration: true,
  },
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
    ],
  },
};

export default nextConfig;
