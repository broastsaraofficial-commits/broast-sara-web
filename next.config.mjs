/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.1.7'], // Correct placement: top-level key
  async redirects() {
    return [];
  },
};

export default nextConfig;