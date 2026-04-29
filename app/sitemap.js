export default function sitemap() {
  const baseUrl = "https://broastsara.com";

  const corePages = ["", "/menu", "/locations", "/about", "/blog", "/faq", "/order"];
  const legalPages = ["/legal/food-safety", "/legal/privacy", "/legal/terms", "/legal/refund"];
  
  // 8 Strategic Branches
  const branches = [
    "al-aziziyyah", "al-hijrah", "imam-bukhari", "hil-bahr",
    "aljwazat", "al-juruf", "yanbu", "abiar-al-mashi"
  ];

  // 10 Cornerstone Articles
  const articles = [
    "best-broast-madinah", 
    "why-choose-broast-sara", 
    "food-safety-haccp",
    "secrets-of-crispy-broast", 
    "broast-vs-fried-chicken",
    "madinah-neighborhoods-branches", 
    "madinah-foods-must-try",
    "ramadan-meals-iftar", 
    "sarookh-shawarma-story", 
    "fresh-vs-frozen-chicken"
  ];

  const sitemapEntries = [
    ...corePages.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === "" ? 1.0 : 0.9,
    })),
    ...branches.map(branch => ({
      url: `${baseUrl}/locations/${branch}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...articles.map(article => ({
      url: `${baseUrl}/blog/${article}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...legalPages.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    }))
  ];

  return sitemapEntries;
}
