/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.1.7'],
  swcMinify: true, // Enforces the modern SWC compiler
  images: {
    qualities: [60, 75],
    formats: ['image/avif', 'image/webp'], // Modern formats boost LCP
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;