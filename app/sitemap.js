import { blogPosts } from '../constants/blogData';

export default function sitemap() {
  const baseUrl = "https://broastsara.com";

  const corePages = ["/menu", "/locations", "/about", "/blog", "/faq", "/order", "/legal"];
  const legalPages = ["/legal/food-safety", "/legal/privacy", "/legal/terms", "/legal/refund"];
  const branches = [
    "al-aziziyyah", "al-hijrah", "imam-bukhari", "hil-bahr",
    "aljwazat", "al-juruf", "yanbu", "abiar-al-mashi"
  ];
  const articles = blogPosts.map(post => post.slug);

  const getAlternates = (path) => ({
    languages: {
      'ar-SA': `${baseUrl}/ar${path}`,
      'en-SA': `${baseUrl}/en${path}`,
    },
  });

  const sitemapEntries = [
    // 1. Explicit Homepages
    { url: `${baseUrl}/ar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0, alternates: getAlternates("") },
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0, alternates: getAlternates("") },

    // 2. Core Pages
    ...corePages.flatMap(route => [
      { url: `${baseUrl}/ar${route}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9, alternates: getAlternates(route) },
      { url: `${baseUrl}/en${route}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9, alternates: getAlternates(route) }
    ]),

    // 3. Branches
    ...branches.flatMap(branch => [
      { url: `${baseUrl}/ar/locations/${branch}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8, alternates: getAlternates(`/locations/${branch}`) },
      { url: `${baseUrl}/en/locations/${branch}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8, alternates: getAlternates(`/locations/${branch}`) }
    ]),

    // 4. Blog Articles
    ...articles.flatMap(article => [
      { url: `${baseUrl}/ar/blog/${article}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, alternates: getAlternates(`/blog/${article}`) },
      { url: `${baseUrl}/en/blog/${article}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7, alternates: getAlternates(`/blog/${article}`) }
    ]),

    // 5. Legal Pages
    ...legalPages.flatMap(route => [
      { url: `${baseUrl}/ar${route}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5, alternates: getAlternates(route) },
      { url: `${baseUrl}/en${route}`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5, alternates: getAlternates(route) }
    ])
  ];

  return sitemapEntries;
}