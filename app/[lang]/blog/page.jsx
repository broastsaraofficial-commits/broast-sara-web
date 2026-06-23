import BlogClient from "./BlogClient";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";

  const title = isEn ? "Broast Sara Blog | Recipes, News & Food Tips" : "مدونة بروست سارة | وصفات، أخبار المطعم، ونصائح الطعام في المدينة المنورة";
  const description = isEn ? "Follow Broast Sara's blog for crispy chicken recipes, branch news, seasonal offers, and food safety tips." : "تابع مدونة بروست سارة للحصول على وصفات الدجاج المقرمش، أخبار فروعنا في المدينة المنورة، عروض رمضان والمواسم، ونصائح سلامة الغذاء.";
  const url = `https://broastsara.com/${lang}/blog`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: '/broast-sara-logo.webp', width: 1080, height: 1350, alt: isEn ? 'Broast Sara Blog' : 'مدونة بروست سارة' }],
    }
  };
}

export default async function BlogPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": isEn ? "Home" : "الرئيسية", "item": `https://broastsara.com/${lang}` },
      { "@type": "ListItem", "position": 2, "name": isEn ? "Blog" : "المدونة", "item": `https://broastsara.com/${lang}/blog` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogClient lang={lang} />
    </>
  );
}