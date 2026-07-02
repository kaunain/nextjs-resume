import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
import { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  turbopack: {},
};

export default withContentlayer(nextConfig);
