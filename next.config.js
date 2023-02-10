/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http://0.0.0.0:1337"],
  },
};

module.exports = nextConfig;
