/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "89.163.209.153"],
  },
};

module.exports = nextConfig;
