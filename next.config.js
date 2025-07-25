/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export to GitHub Pages
  output: 'export',
  distDir: 'docs',
  
  // Ensures trailing slashes for consistent routing
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Required for static image export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  
  // GitHub Pages deployment paths
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
    : '',
  basePath: process.env.NODE_ENV === 'production' && process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` 
    : '',
  
  // Static optimization for better performance
  experimental: {
    optimizeCss: true,
  },
  

}

module.exports = nextConfig