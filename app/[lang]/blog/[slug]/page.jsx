import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../../../constants/blogData";

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

  return {
    title: isEn ? `${post.en.title} | Broast Sara Blog` : `${post.ar.title} | مدونة بروست سارة`,
    description: isEn ? post.en.description : post.ar.description,
    keywords: isEn ? post.en.keywords : post.ar.keywords,
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/blog/${resolvedParams.slug}` }
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

  const now = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const displayDate = isEn ? `${monthNames[now.getMonth()]} ${now.getFullYear()}` : `${arabicMonths[now.getMonth()]} ${now.getFullYear()}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "datePublished": now.toISOString(),
    "author": { "@type": "Organization", "name": "Broast Sara" },
    "description": t.description
  };

  return (
    <main className="min-h-screen pt-40 pb-24 px-6 relative z-10 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto liquid-glass p-10 md:p-16 flex flex-col">
        <article className="animate-premium-in flex flex-col w-full text-center md:text-start">

          <header className="mb-12 border-b border-white/20 pb-8">
            <div className="text-[#FFD700] text-sm uppercase tracking-widest mb-4 font-bold font-helvetica">
              {displayDate}
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-instrument leading-tight">
              {t.title}
            </h1>

            {post.img && (
              <div className="w-full h-64 md:h-96 relative rounded-3xl overflow-hidden shadow-2xl mt-8">
                <Image
                  src={`/products/${post.img}`}
                  alt={t.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          <div className="w-full flex flex-col gap-6">
            {t.content ? (
              t.content.split('\n\n').map((paragraph, index) => {
                const isHeading = paragraph.length < 90 && !paragraph.endsWith('.') && !paragraph.startsWith('•');
                return (
                  <p
                    key={index}
                    className={`${isHeading ? 'text-2xl md:text-3xl text-[#FFD700] font-bold mt-6 font-instrument' : 'text-lg md:text-xl text-white'} leading-relaxed font-helvetica tracking-[-0.05em] whitespace-pre-line`}
                  >
                    {paragraph}
                  </p>
                );
              })
            ) : t.sections ? (
              t.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl md:text-3xl text-[#FFD700] font-bold mt-6 font-instrument">{section.h2}</h2>
                  <p className="text-lg md:text-xl text-white leading-relaxed font-helvetica tracking-[-0.05em] mt-2 whitespace-pre-line">{section.body}</p>
                </div>
              ))
            ) : null}
          </div>

          {t.faqs && (
            <section className="mt-16 pt-12 border-t border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 font-instrument text-center md:text-start">
                {t.faqTitle || (isEn ? "Frequently Asked Questions" : "الأسئلة الشائعة")}
              </h2>
              <div className="flex flex-col gap-6">
                {t.faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3 font-instrument">{faq.q}</h3>
                    <p className="text-lg text-white leading-relaxed font-helvetica tracking-[-0.05em]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 text-lg text-white italic border-t border-white/10 pt-8">
            {isEn ? (
              <p>Discover your nearest branch via the <Link href="/en/locations" className="text-[#FFD700] underline hover:text-white">Locations Guide</Link>, or browse our <Link href="/en/menu" className="text-[#FFD700] underline hover:text-white">Menu</Link> to order now.</p>
            ) : (
              <p>اكتشف أقرب فرع لك عبر <Link href="/locations" className="text-[#FFD700] underline hover:text-white">دليل الفروع</Link>، أو استعرض <Link href="/menu" className="text-[#FFD700] underline hover:text-white">قائمة الطعام</Link> لطلب وجبتك الآن.</p>
            )}
          </div>

        </article>

        <div className="mt-16 pt-8 border-t border-white/10 text-center w-full">
          <Link href={isEn ? "/en/blog" : "/blog"} className="text-[#FFD700] text-xl transition-colors font-instrument">
            {isEn ? "← Back to Blog" : "← العودة للمدونة"}
          </Link>
        </div>
      </div>
    </main>
  );
}