// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  sassOptions: {
    quietDeps: true, // Suppresses deprecation warnings from dependencies
  },
};

module.exports = nextConfig;
