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

  // FIXED: English alternates now correctly inject the "/en" prefix into the URL
  const withAlternates = (path) => {
    const englishPath = path === "" ? "/en" : `/en${path}`;
    return {
      languages: {
        'ar-SA': `${baseUrl}${path}`,
        'en-SA': `${baseUrl}${englishPath}`,
      },
    };
  };

  const sitemapEntries = [
    ...corePages.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === "" ? 1.0 : 0.9,
      alternates: withAlternates(route),
    })),
    ...branches.map(branch => ({
      url: `${baseUrl}/locations/${branch}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: withAlternates(`/locations/${branch}`),
    })),
    ...articles.map(article => ({
      url: `${baseUrl}/blog/${article}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: withAlternates(`/blog/${article}`),
    })),
    ...legalPages.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
      alternates: withAlternates(route),
    }))
  ];

  return sitemapEntries;
}