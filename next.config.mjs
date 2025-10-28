/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ensures static HTML export
  basePath: '/myfinal-portfolio',
  assetPrefix: '/myfinal-portfolio/',
  images: { unoptimized: true },
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
