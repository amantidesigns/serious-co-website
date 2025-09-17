import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Disable turbopack in production for better Vercel compatibility
  experimental: {
    turbo: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: ['babel-loader'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
