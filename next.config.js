/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["localhost", "behind.theblackpanda.de"],
  },
  output: "standalone",
};

module.exports = nextConfig;
