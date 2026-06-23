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
      'en-US': `${baseUrl}/en${path}`,
      'x-default': `${baseUrl}/ar${path}`,
    },
  });

  const now = new Date();

  const sitemapEntries = [
    // 1. Explicit Homepages
    { url: `${baseUrl}/ar`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: getAlternates("") },
    { url: `${baseUrl}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: getAlternates("") },

    // 2. Core Pages
    ...corePages.flatMap(route => [
      { url: `${baseUrl}/ar${route}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: getAlternates(route) },
      { url: `${baseUrl}/en${route}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: getAlternates(route) }
    ]),

    // 3. Branches
    ...branches.flatMap(branch => [
      { url: `${baseUrl}/ar/locations/${branch}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: getAlternates(`/locations/${branch}`) },
      { url: `${baseUrl}/en/locations/${branch}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8, alternates: getAlternates(`/locations/${branch}`) }
    ]),

    // 4. Blog Articles — use each post's real publishDate, not build time
    ...blogPosts.flatMap(post => [
      { url: `${baseUrl}/ar/blog/${post.slug}`, lastModified: post.publishDate ? new Date(post.publishDate) : now, changeFrequency: 'monthly', priority: 0.7, alternates: getAlternates(`/blog/${post.slug}`) },
      { url: `${baseUrl}/en/blog/${post.slug}`, lastModified: post.publishDate ? new Date(post.publishDate) : now, changeFrequency: 'monthly', priority: 0.7, alternates: getAlternates(`/blog/${post.slug}`) }
    ]),

    // 5. Legal Pages
    ...legalPages.flatMap(route => [
      { url: `${baseUrl}/ar${route}`, lastModified: now, changeFrequency: 'yearly', priority: 0.5, alternates: getAlternates(route) },
      { url: `${baseUrl}/en${route}`, lastModified: now, changeFrequency: 'yearly', priority: 0.5, alternates: getAlternates(route) }
    ])
  ];

  return sitemapEntries;
}