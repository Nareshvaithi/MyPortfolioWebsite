import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MyPortfolioWebsite",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;