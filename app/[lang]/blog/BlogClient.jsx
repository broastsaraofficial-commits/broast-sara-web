"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { blogPosts } from "../../../constants/blogData";

export default function BlogClient({ lang }) {
  const isEn = lang === "en";
  const [activeCategory, setActiveCategory] = useState("all");
  const [dateEn, setDateEn] = useState("");
  const [dateAr, setDateAr] = useState("");

  useEffect(() => {
    const d = new Date();
    setDateEn(d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase());
    setDateAr(d.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' }));
  }, []);

  const categories = [
    { id: "all", ar: "الكل", en: "All" },
    { id: "recipes", ar: "وصفات", en: "Recipes" },
    { id: "news", ar: "أخبار الفروع", en: "Branch News" },
    { id: "offers", ar: "عروض وتخفيضات", en: "Offers" },
    { id: "culture", ar: "ثقافة الطعام", en: "Food Culture" },
    { id: "ramadan", ar: "رمضان", en: "Ramadan" }
  ];

  // Dynamically map the central posts into the UI card format
  const articles = blogPosts.map((post) => {
    let catId = "culture"; // Default category

    // Auto-categorize based on slug keywords
    if (post.slug.includes("menu") || post.slug.includes("burger")) catId = "offers";
    else if (post.slug.includes("ramadan")) catId = "ramadan";
    else if (post.slug.includes("safety") || post.slug.includes("branches") || post.slug.includes("delivery") || post.slug.includes("locations")) catId = "news";
    else if (post.slug.includes("recipe") || post.slug.includes("secret") || post.slug.includes("marinade") || post.slug.includes("vs")) catId = "recipes";

    const catObj = categories.find(c => c.id === catId);

    return {
      id: post.slug,
      category: catId,
      catAr: catObj?.ar || "ثقافة الطعام",
      catEn: catObj?.en || "Food Culture",
      arTitle: post.ar.title,
      enTitle: post.en.title,
      // Create a short preview snippet from the meta description
      arDesc: post.ar.description.substring(0, 140) + "...",
      enDesc: post.en.description.substring(0, 140) + "...",
      img: post.img, // Corrected: Now explicitly targets the database image property
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
          {categories.map((cat) => (
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
                {/* Built-in fallback to Signature Broast image if specific post image is missing */}
                <img src={`/products/${article.img}`} alt={isEn ? article.enTitle : article.arTitle} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = '/products/The Signature Broast.webp'; }} />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3 text-[#FFD700] text-xs tracking-widest uppercase font-bold mb-4">
                    <span suppressHydrationWarning>{isEn ? dateEn : dateAr}</span>
                    <span className="w-1 h-1 bg-[#FFD700] rounded-full"></span>
                    <span>{isEn ? article.catEn : article.catAr}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-white font-instrument">
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