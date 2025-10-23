import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'oss-cf.cjdropshipping.com',
      'cf.cjdropshipping.com',
      'cbu01.alicdn.com',
      'cdn.shopify.com',
      'embed.figma.com'
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cdn.shopify.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
