/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isGhPages = process.env.GH_PAGES === "true"; // set this when exporting for GitHub Pages

const nextConfig = {
  // Only export static HTML when targeting GitHub Pages
  output: isGhPages ? "export" : undefined,
  reactStrictMode: true,
  images: {
    // Disable image optimization only on GitHub Pages
    unoptimized: isGhPages,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use basePath/assetPrefix only for GitHub Pages
  basePath: isProd && isGhPages ? "/myfinal-portfolio" : undefined,
  assetPrefix: isProd && isGhPages ? "/myfinal-portfolio/" : undefined,
  // Trailing slash recommended on GitHub Pages
  trailingSlash: isGhPages,
};

export default nextConfig;
