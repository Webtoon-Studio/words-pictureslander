import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/words-pictureslander' : '',
  assetPrefix: isProd ? '/words-pictureslander/' : '',
  images: {
    unoptimized: true, // required for static export
};

export default nextConfig;
