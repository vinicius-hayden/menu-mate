// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s7d1.scene7.com",
        port: '',
        pathname: '/is/image/**',  // Match any path under /is/image/
      },
      {
        protocol: "https",
        hostname: "arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com",
        port: '',
        pathname: '/public/**',  // Allows images under /public/
      },
    ],
  },
  experimental: {
    // Increase timeout to handle slow-loading images
    images: {
      timeout: 10000,  // in milliseconds (10 seconds)
    },
  },
  sassOptions: {
    quietDeps: true, // Suppresses deprecation warnings from dependencies
  },
};

module.exports = nextConfig;
