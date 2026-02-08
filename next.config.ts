import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "github-readme-stats-seven-pi-75.vercel.app",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
