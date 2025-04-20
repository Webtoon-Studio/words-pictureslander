import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/words-pictureslander' : '',
  assetPrefix: isProd ? '/words-pictureslander/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
