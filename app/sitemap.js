import { blogPosts } from '../constants/blogData';

export default function sitemap() {
  const baseUrl = "https://broastsara.com";

  // FIXED: Removed "" to prevent duplicating the root node defined manually below
  const corePages = ["/menu", "/locations", "/about", "/blog", "/faq", "/order", "/legal"];
  const legalPages = ["/legal/food-safety", "/legal/privacy", "/legal/terms", "/legal/refund"];

  // Retained your exact working routing slugs
  const branches = [
    "al-aziziyyah", "al-hijrah", "imam-bukhari", "hil-bahr",
    "aljwazat", "al-juruf", "yanbu", "abiar-al-mashi"
  ];

  // Extracts all dynamic slugs directly from the database to ensure 100% indexing accuracy
  const articles = blogPosts.map(post => post.slug);

  const withAlternates = (path) => {
    const arPath = path === "" ? "/ar" : `/ar${path}`;
    const enPath = path === "" ? "/en" : `/en${path}`;
    return {
      languages: {
        'ar-SA': `${baseUrl}${arPath}`,
        'en-SA': `${baseUrl}${enPath}`,
      },
    };
  };

  const sitemapEntries = [
    // The manual root entry
    {
      url: baseUrl, // FIXED: Removed trailing slash
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: withAlternates(""),
    },
    ...corePages.map(route => ({
      url: `${baseUrl}${route === "" ? "/ar" : `/ar${route}`}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9, // Priority adjusted since root handles 1.0
      alternates: withAlternates(route),
    })),
    ...branches.map(branch => ({
      url: `${baseUrl}/ar/locations/${branch}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: withAlternates(`/locations/${branch}`),
    })),
    ...articles.map(article => ({
      url: `${baseUrl}/ar/blog/${article}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: withAlternates(`/blog/${article}`),
    })),
    ...legalPages.map(route => ({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: withAlternates(route),
    }))
  ];

  return sitemapEntries;
}