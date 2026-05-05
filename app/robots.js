export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
      {
        // Verified explicit list from Section G2 Checklist
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'CCBot',
          'AmazonBot'
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://broastsara.com/sitemap.xml',
  };
}