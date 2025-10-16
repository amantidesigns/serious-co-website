import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  server: {
    port: 3000,
    host: 'localhost',
  },
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
};

export default nextConfig;
