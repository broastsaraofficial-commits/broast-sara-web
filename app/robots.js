export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://broastsara.com/sitemap.xml', // Next.js automatically maps the .js output to .xml
  }
}
