/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  eslint: {
    ignoreDuringBuilds: true, // ✅ ignore ESLint issues
  },

  typescript: {
    ignoreBuildErrors: true, // ✅ ignore TypeScript build issues
  },

  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },

  experimental: {
    appDir: true,
    runtime: 'edge',
  },

  output: 'standalone',
};

// ✅ this hides build messages like "Collecting page data", "Optimizing" etc.
const originalConsole = console.log;
console.log = (...args) => {
  const msg = args.join(' ');
  if (
    msg.includes('Static') ||
    msg.includes('Collecting page data') ||
    msg.includes('Optimizing') ||
    msg.includes('Generating static pages') ||
    msg.includes('Linting') ||
    msg.includes('Type checking') ||
    msg.includes('Finalizing')
  ) {
    return; // skip these logs
  }
  originalConsole(...args);
};

module.exports = nextConfig;
