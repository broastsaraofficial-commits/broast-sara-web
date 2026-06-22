"use client";
import { useState } from "react";
import Link from "next/link";
import { blogPosts, CATEGORIES } from "../../../constants/blogData";

export default function BlogClient({ lang }) {
  const isEn = lang === "en";
  const [activeCategory, setActiveCategory] = useState("all");

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

  // Map posts into card format using the real category and publishDate fields
  const articles = blogPosts.map((post) => {
    const categoryData = CATEGORIES.find(c => c.id === post.category);
    const publishDate = post.publishDate ? new Date(post.publishDate + "T00:00:00Z") : new Date();
    const dateEn = `${monthNames[publishDate.getUTCMonth()]} ${publishDate.getUTCFullYear()}`.toUpperCase();
    const dateAr = `${arabicMonths[publishDate.getUTCMonth()]} ${publishDate.getUTCFullYear()}`;

    return {
      id: post.slug,
      category: post.category || "food-culture",
      catAr: categoryData?.ar || "ثقافة الطعام",
      catEn: categoryData?.en || "Food Culture",
      arTitle: post.ar.title,
      enTitle: post.en.title,
      arDesc: post.ar.description.substring(0, 140) + "...",
      enDesc: post.en.description.substring(0, 140) + "...",
      img: post.img,
      dateEn,
      dateAr,
      link: `/blog/${post.slug}`
    };
  });

  const filteredArticles = activeCategory === "all" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="w-full pt-40 pb-32 px-6 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl mb-6 text-white font-bold font-instrument">
            {isEn ? "Broast Sara Blog — Recipes, News, and Food Tips" : "مدونة بروست سارة — وصفات، أخبار، ونصائح الطعام"}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            {isEn ? "Follow the Broast Sara blog for the latest news, food safety tips, and Madinah food culture." : "تابع مدونة بروست سارة للحصول على أحدث الأخبار، ونصائح سلامة الغذاء، وثقافة الطعام في المدينة المنورة."}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full transition-all border font-normal ${activeCategory === cat.id ? 'bg-[#971111] text-white border-[#971111]' : 'liquid-glass border-white/30 text-white hover:bg-white/10'}`}
            >
              {isEn ? cat.en : cat.ar}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <Link key={article.id} href={isEn ? `/en${article.link}` : `/ar${article.link}`} className="liquid-glass flex flex-col overflow-hidden h-full text-center md:text-start transition-transform hover:scale-[1.02] cursor-pointer no-underline block">
              <div className="w-full h-60 bg-white/5 relative">
                <img src={`/products/${article.img}`} alt={isEn ? article.enTitle : article.arTitle} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = '/products/The Signature Broast.webp'; }} />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-[#FFD700] text-xs tracking-widest uppercase font-bold mb-4">
                    <span>{isEn ? article.dateEn : article.dateAr}</span>
                    <span className="w-1 h-1 bg-[#FFD700] rounded-full"></span>
                    <span>{isEn ? article.catEn : article.catAr}</span>
                  </div>

                  <h2 className="text-2xl mb-4 text-[#FFD700] font-instrument font-normal">
                    {isEn ? article.enTitle : article.arTitle}
                  </h2>
                  <p className="text-white leading-relaxed text-lg font-helvetica tracking-[-0.05em]">
                    {isEn ? article.enDesc : article.arDesc}
                  </p>
                </div>

                <div className="mt-4">
                  <span className="border border-white/30 bg-white/5 text-white w-full justify-center py-4 rounded-full font-normal text-lg pointer-events-none flex items-center font-instrument">
                    {isEn ? 'Read Story' : 'اقرأ القصة'}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}