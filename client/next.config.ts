import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['s3-alpha-sig.figma.com'],
  },
};

export default nextConfig;
