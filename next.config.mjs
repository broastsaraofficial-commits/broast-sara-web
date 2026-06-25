/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.1.7', '192.168.1.4', '192.168.1.4:3000'],
  images: {
    qualities: [60, 75],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // ── Arabic default: redirect no-lang URLs to /ar ──
      { source: '/', destination: '/ar', permanent: false },
      { source: '/about', destination: '/ar/about', permanent: true },
      { source: '/menu', destination: '/ar/menu', permanent: true },
      { source: '/locations', destination: '/ar/locations', permanent: true },
      { source: '/faq', destination: '/ar/faq', permanent: true },
      { source: '/order', destination: '/ar/order', permanent: true },
      { source: '/blog', destination: '/ar/blog', permanent: true },
      { source: '/legal', destination: '/ar/legal', permanent: true },
      { source: '/legal/food-safety', destination: '/ar/legal/food-safety', permanent: true },
      { source: '/legal/privacy', destination: '/ar/legal/privacy', permanent: true },
      { source: '/legal/terms', destination: '/ar/legal/terms', permanent: true },
      { source: '/legal/refund', destination: '/ar/legal/refund', permanent: true },
      { source: '/locations/:slug*', destination: '/ar/locations/:slug*', permanent: true },

      // ── Consolidated posts (old slug → surviving post) ──
      { source: '/en/blog/halal-safe-food-madinah', destination: '/en/blog/is-broast-halal-madinah', permanent: true },
      { source: '/ar/blog/halal-safe-food-madinah', destination: '/ar/blog/is-broast-halal-madinah', permanent: true },

      { source: '/en/blog/real-difference-broast-vs-fried-chicken', destination: '/en/blog/broast-vs-fried-chicken', permanent: true },
      { source: '/ar/blog/real-difference-broast-vs-fried-chicken', destination: '/ar/blog/broast-vs-fried-chicken', permanent: true },

      { source: '/en/blog/broast-sara-menu-items', destination: '/en/blog/broast-sara-menu-guide', permanent: true },
      { source: '/ar/blog/broast-sara-menu-items', destination: '/ar/blog/broast-sara-menu-guide', permanent: true },

      { source: '/en/blog/broast-sara-locations', destination: '/en/blog/madinah-neighborhoods-branches', permanent: true },
      { source: '/ar/blog/broast-sara-locations', destination: '/ar/blog/madinah-neighborhoods-branches', permanent: true },

      { source: '/en/blog/broast-sara-branches-madinah', destination: '/en/blog/madinah-neighborhoods-branches', permanent: true },
      { source: '/ar/blog/broast-sara-branches-madinah', destination: '/ar/blog/madinah-neighborhoods-branches', permanent: true },

      // ── Orphaned URLs ──
      { source: '/blog/why-choose-broast-sara', destination: '/ar/blog/best-broast-in-madinah-broast-sara', permanent: true },
      { source: '/en/blog/why-choose-broast-sara', destination: '/en/blog/best-broast-in-madinah-broast-sara', permanent: true },
      { source: '/ar/blog/why-choose-broast-sara', destination: '/ar/blog/best-broast-in-madinah-broast-sara', permanent: true },

      { source: '/en/blog/best-halal-food-near-masjid-al-nabawi-madinah', destination: '/en/blog/restaurants-near-masjid-al-nabawi', permanent: true },
      { source: '/ar/blog/best-halal-food-near-masjid-al-nabawi-madinah', destination: '/ar/blog/restaurants-near-masjid-al-nabawi', permanent: true },
      { source: '/blog/best-halal-food-near-masjid-al-nabawi-madinah', destination: '/ar/blog/restaurants-near-masjid-al-nabawi', permanent: true },

      { source: '/blog/madinah-foods-must-try', destination: '/ar/blog/madinah-neighborhoods-branches', permanent: true },
      { source: '/en/blog/madinah-foods-must-try', destination: '/en/blog/madinah-neighborhoods-branches', permanent: true },
      { source: '/ar/blog/madinah-foods-must-try', destination: '/ar/blog/madinah-neighborhoods-branches', permanent: true },

      { source: '/blog/sarookh-shawarma-story', destination: '/en/blog/premium-shawarma-seafood', permanent: true },
      { source: '/ar/blog/sarookh-shawarma-story', destination: '/ar/blog/premium-shawarma-seafood', permanent: true },
      { source: '/en/blog/sarookh-shawarma-story', destination: '/en/blog/premium-shawarma-seafood', permanent: true },

      { source: '/blog/best-broast-madinah', destination: '/ar/blog/best-broast-in-madinah-broast-sara', permanent: true },
      { source: '/en/blog/best-broast-madinah', destination: '/en/blog/best-broast-in-madinah-broast-sara', permanent: true },
      { source: '/ar/blog/best-broast-madinah', destination: '/ar/blog/best-broast-in-madinah-broast-sara', permanent: true },

      { source: '/blog/best-broast-madinah-2026', destination: '/ar/blog/best-broast-madinah-2026', permanent: true },

      { source: '/blog/fresh-vs-frozen-chicken', destination: '/ar/blog/fresh-vs-frozen-chicken-broast-sara-madinah', permanent: true },
      { source: '/ar/blog/fresh-vs-frozen-chicken', destination: '/ar/blog/fresh-vs-frozen-chicken-broast-sara-madinah', permanent: true },
      { source: '/en/blog/fresh-vs-frozen-chicken', destination: '/en/blog/fresh-vs-frozen-chicken-broast-sara-madinah', permanent: true },

      { source: '/blog/secrets-of-crispy-broast', destination: '/ar/blog/secrets-of-crispy-broast', permanent: true },
      { source: '/blog/food-safety-haccp', destination: '/ar/blog/food-safety-haccp', permanent: true },
      { source: '/blog/madinah-neighborhoods-branches', destination: '/ar/blog/madinah-neighborhoods-branches', permanent: true },
      { source: '/blog/ramadan-meals-iftar', destination: '/ar/blog/ramadan-meals-iftar', permanent: true },

      // ── Generic catch-all: must stay LAST ──
      { source: '/blog/:slug*', destination: '/ar/blog/:slug*', permanent: true },
    ];
  },
};

export default nextConfig;