import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/shop", destination: "/services", permanent: true },
      { source: "/placement", destination: "/services", permanent: true },
      { source: "/study-abroad", destination: "/about", permanent: true },
      { source: "/pay", destination: "/contact", permanent: true },
      { source: "/cart", destination: "/contact", permanent: true },
      { source: "/checkout", destination: "/contact", permanent: true },
      { source: "/courses/:slug", destination: "/services", permanent: true },
      { source: "/refund-policy", destination: "/terms", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
