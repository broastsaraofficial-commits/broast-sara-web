import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, AUTHORS, CATEGORIES } from "../../../../constants/blogData";
import { renderInline, renderContentBlock } from "../../../../lib/renderContent";

export function generateStaticParams() {
  const params = [];
  blogPosts.forEach(post => {
    params.push({ lang: 'ar', slug: post.slug });
    params.push({ lang: 'en', slug: post.slug });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  const isEn = resolvedParams.lang === "en";

  if (!post) return { title: 'Post Not Found' };

  const title = isEn ? `${post.en.title} | Broast Sara Blog` : `${post.ar.title} | مدونة بروست سارة`;
  const description = isEn ? post.en.description : post.ar.description;
  const canonicalUrl = `https://broastsara.com/${resolvedParams.lang}/blog/${resolvedParams.slug}`;

  return {
    title,
    description,
    keywords: isEn ? post.en.keywords : post.ar.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: ['/broast-sara-logo.webp'],
    }
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();
  const t = isEn ? post.en : post.ar;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const relatedPosts = [
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
    blogPosts[(currentIndex + 3) % blogPosts.length],
  ];

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const publishDate = post.publishDate ? new Date(post.publishDate + "T00:00:00Z") : new Date();
  const displayDate = isEn
    ? `${monthNames[publishDate.getUTCMonth()]} ${publishDate.getUTCFullYear()}`
    : `${arabicMonths[publishDate.getUTCMonth()]} ${publishDate.getUTCFullYear()}`;

  const authorKey = post.author || "content-team";
  const authorData = AUTHORS[authorKey] ? AUTHORS[authorKey][lang] : AUTHORS["content-team"][lang];

  const categoryData = CATEGORIES.find(c => c.id === post.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "datePublished": post.publishDate ? `${post.publishDate}T00:00:00Z` : new Date().toISOString(),
    "author": authorKey === "shanu-faris"
      ? { "@type": "Person", "name": authorData.name }
      : { "@type": "Organization", "name": authorData.name },
    "publisher": {
      "@type": "Organization",
      "name": "Broast Sara",
      "logo": { "@type": "ImageObject", "url": "https://broastsara.com/broast-sara-logo.webp" }
    },
    "description": t.description,
    "image": `https://broastsara.com/products/${post.img}`
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://broastsara.com/#restaurant",
    "name": isEn ? "Broast Sara - Imam Bukhari Branch, Madinah" : "بروست سارة - فرع الإمام البخاري، المدينة المنورة",
    "image": "https://broastsara.com/broast-sara-logo.webp",
    "url": "https://broastsara.com",
    "telephone": "+966533107787",
    "priceRange": "SAR 5 - SAR 25",
    "servesCuisine": ["Middle Eastern", "Fried Chicken", "Fast Food", "Shawarma"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isEn ? "Al Imam Al Bukhari Street" : "شارع الإمام البخاري",
      "addressLocality": isEn ? "Ad Difa, Madinah" : "الدفاع، المدينة المنورة",
      "postalCode": "42374",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.4484062,
      "longitude": 39.5307454
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.1",
      "reviewCount": "1639"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "18:30",
      "closes": "04:00"
    },
    "hasMenu": isEn ? "https://broastsara.com/en/menu" : "https://broastsara.com/ar/menu",
    "sameAs": ["https://maps.app.goo.gl/NaC1TNvGSqsYUtsT8"]
  };

  return (
    <>
      <main className="min-h-screen pt-40 pb-32 px-0 md:px-6 relative z-10 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

        <div className="w-full max-w-4xl mx-auto liquid-glass overflow-hidden flex flex-col rounded-[40px] md:rounded-[40px]">

          <article className="animate-premium-in flex flex-col w-full text-start p-6 md:p-16">

            <header className="mb-12 border-b border-white/20 pb-8">
              <div className="flex items-center gap-3 text-[#FFD700] text-sm uppercase tracking-widest mb-4 font-helvetica">
                <span suppressHydrationWarning>{displayDate}</span>
                {categoryData && (
                  <>
                    <span className="w-1 h-1 bg-[#FFD700] rounded-full"></span>
                    <span>{isEn ? categoryData.en : categoryData.ar}</span>
                  </>
                )}
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-instrument tracking-normal leading-tight">
                {t.title}
              </h1>

              {post.img && (
                <div className="w-full h-64 md:h-96 relative rounded-3xl overflow-hidden shadow-2xl mt-8">
                  <Image
                    src={`/products/${post.img}`}
                    alt={t.alt || t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>

            {t.snippet && (
              <div className="mb-10 p-6 bg-white/5 border border-[#FFD700]/30 rounded-2xl italic text-white/90 text-lg md:text-xl leading-relaxed font-helvetica tracking-[-0.05em]">
                {t.snippet}
              </div>
            )}

            <div className="w-full flex flex-col gap-6">
              {t.content
                ? t.content.split('\n\n').map((block, index) => renderContentBlock(block, index))
                : t.sections
                ? t.sections.map((section, index) => (
                    <div key={index}>
                      <h2 className="text-2xl md:text-3xl text-[#FFD700] mt-6 font-instrument tracking-normal">{section.h2}</h2>
                      <p className="text-lg md:text-xl text-white leading-relaxed font-helvetica tracking-[-0.05em] mt-2 whitespace-pre-line">{section.body}</p>
                    </div>
                  ))
                : null}
            </div>

            {authorData && (
              <div className="mt-12 pt-10 border-t border-white/10">
                <h2 className="text-xl text-[#FFD700] mb-3 font-instrument tracking-normal">
                  {isEn ? `About the Author: ${authorData.name}` : `عن الكاتب: ${authorData.name}`}
                </h2>
                <p className="text-base md:text-lg text-white leading-relaxed font-helvetica tracking-[-0.05em]">
                  {authorData.bio}
                </p>
              </div>
            )}

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full border-t border-white/10 pt-10">
              <Link href={isEn ? "/en/order" : "/ar/order"} className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                <span className="font-instrument tracking-normal text-xl">{isEn ? "Order Now" : "اطلب الآن"}</span>
              </Link>
              <Link href={isEn ? "/en/locations" : "/ar/locations"} className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="font-instrument tracking-normal text-xl">{isEn ? "View Branches" : "عرض الفروع"}</span>
              </Link>
            </div>

            {t.faqs && (
              <section className="mt-16 pt-12 border-t border-white/20">
                <h2 className="text-3xl text-white mb-8 font-instrument tracking-normal text-start">
                  {isEn ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
                </h2>
                <div className="flex flex-col gap-6">
                  {t.faqs.map((faq, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-start">
                      <h3 className="text-xl text-white mb-3 font-instrument tracking-normal">{faq.q}</h3>
                      <p className="text-lg text-white leading-relaxed font-helvetica tracking-[-0.05em]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-16 pt-12 border-t border-white/20">
              <h2 className="text-3xl text-white mb-8 font-instrument tracking-normal text-start">
                {isEn ? "Related Articles" : "مقالات ذات صلة"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} href={isEn ? `/en/blog/${rp.slug}` : `/ar/blog/${rp.slug}`} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#FFD700] transition-colors no-underline group flex flex-col gap-3 text-start">
                    <h3 className="text-xl text-white group-hover:text-[#FFD700] font-instrument tracking-normal line-clamp-2">
                      {isEn ? rp.en.title : rp.ar.title}
                    </h3>
                    <p className="text-white text-sm font-helvetica tracking-[-0.05em] line-clamp-3">
                      {isEn ? rp.en.description : rp.ar.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

          </article>

          <div className="mb-12 text-center w-full">
            <Link href={isEn ? "/en/blog" : "/ar/blog"} className="text-[#FFD700] text-xl transition-colors font-instrument tracking-normal">
              {isEn ? "← Back to Blog" : "← العودة للمدونة"}
            </Link>
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 left-0 w-full z-[100] px-4 flex gap-3 md:hidden pointer-events-none" dir={isEn ? "ltr" : "rtl"}>
        <Link href={isEn ? "/en/order" : "/ar/order"} className="flex-1 bg-[#E31837] text-white py-4 rounded-full flex items-center justify-center gap-2 font-instrument text-lg shadow-[0_4px_20px_rgba(227,24,55,0.5)] pointer-events-auto no-underline">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          {isEn ? "Order Now" : "اطلب الآن"}
        </Link>
        <Link href={isEn ? "/en/locations" : "/ar/locations"} className="flex-1 bg-black/40 border border-white/20 text-white py-4 rounded-full flex items-center justify-center gap-2 font-instrument text-lg backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto no-underline">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 116 0z" /></svg>
          {isEn ? "Branches" : "الفروع"}
        </Link>
      </div>
    </>
  );
}