export default function sitemap() {
  const baseUrl = "https://broastsara.com";

  const corePages = ["", "/menu", "/locations", "/about", "/blog", "/faq", "/order", "/legal"];
  const legalPages = ["/legal/food-safety", "/legal/privacy", "/legal/terms", "/legal/refund"];

  const branches = [
    "al-aziziyyah", "al-hijrah", "imam-bukhari", "hil-bahr",
    "aljwazat", "al-juruf", "yanbu", "abiar-al-mashi"
  ];

  const articles = [
    "best-broast-madinah", "why-choose-broast-sara", "food-safety-haccp",
    "secrets-of-crispy-broast", "broast-vs-fried-chicken",
    "madinah-neighborhoods-branches", "madinah-foods-must-try",
    "ramadan-meals-iftar", "sarookh-shawarma-story", "fresh-vs-frozen-chicken"
  ];

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
    // FIXED: Explicit entry for the root URL, now with the trailing slash for exact Ahrefs matching
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: withAlternates(""),
    },
    ...corePages.map(route => ({
      url: `${baseUrl}${route === "" ? "/ar" : `/ar${route}`}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === "" ? 1.0 : 0.9,
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