/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false, // Enforces strict URL resolution to prevent duplicate content
  poweredByHeader: false, // Security and header cleanliness
  async redirects() {
    return [
      // Future 301 redirects for any deprecated pages will be injected here
    ];
  },
};

export default nextConfig;
