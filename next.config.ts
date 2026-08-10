import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.84mahadevtravels.com",
      },
    ],
  },
};

export default nextConfig;
