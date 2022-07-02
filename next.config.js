/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["blog.monocreators.com", "cdn.shopify.com"],
  },
};

module.exports = nextConfig;
