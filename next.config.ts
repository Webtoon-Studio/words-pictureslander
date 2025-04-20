import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? '/words-pictureslander' : '',
  assetPrefix: isProd ? '/words-pictureslander/' : '',
  images: {
    unoptimized: true, // required for static export
};

export default nextConfig;
