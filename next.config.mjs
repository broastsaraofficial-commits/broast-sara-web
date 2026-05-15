/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.1.7'], // Correct placement: top-level key
  images: {
    qualities: [60, 75],
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;