// next.config.js
const path = require("path");

module.exports = {
  webpack: (config : any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

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
  sassOptions: {
    quietDeps: true, // Suppresses deprecation warnings from dependencies
  },
};

module.exports = nextConfig;
