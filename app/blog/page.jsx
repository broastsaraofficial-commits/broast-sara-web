"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogIndexPage() {
  const { lang } = useLanguage();
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

  const articles = [
    {
      id: 1,
      category: "culture",
      catAr: "ثقافة الطعام",
      catEn: "Food Culture",
      arTitle: "أفضل مطاعم البروست في المدينة المنورة 2026",
      enTitle: "Best Broast Restaurants in Madinah 2026",
      arDesc: "البروست في المدينة المنورة ليس مجرد وجبة — إنه تجربة. من الأحياء الشعبية مثل العزيزية والهجرة، أصبح الدجاج المقرمش جزءاً أصيلاً من ثقافة الطعام. اكتشف دليلنا لعام 2026.",
      enDesc: "Broast in Madinah is more than just a meal — it is an experience. From popular neighborhoods to daily life, crispy chicken is authentic food culture. Discover our 2026 guide.",
      img: "The Signature Broast.webp",
      link: "/blog/best-broast-madinah"
    },
    {
      id: 2,
      category: "culture",
      catAr: "ثقافة الطعام",
      catEn: "Food Culture",
      arTitle: "لماذا يختار أهل المدينة بروست سارة؟",
      enTitle: "Why Do Madinah Locals Choose Broast Sara?",
      arDesc: "اكتشف سر القرمشة المثالية والجودة التي ميزتنا لأكثر من عقد في المدينة المنورة، وكيف نحافظ على تقديم دجاج طازج يومياً لعملائنا.",
      enDesc: "Discover the secret of perfect crunch and quality that has defined us for over a decade in Madinah, and how we maintain daily fresh chicken.",
      img: "fried-chicken.webp",
      link: "/blog/why-choose-broast-sara"
    },
    {
      id: 3,
      category: "news",
      catAr: "أخبار الفروع",
      catEn: "Branch News",
      arTitle: "سلامة الغذاء في مطاعمنا — ما الذي يجب أن تعرفه؟",
      enTitle: "Food Safety at Our Restaurants — What You Should Know",
      arDesc: "نحن نطبق أعلى معايير السلامة العالمية (HACCP) لضمان وصول وجبتك بأمان تام. تعرف على بروتوكولات النظافة والتعقيم في مطابخ بروست سارة.",
      enDesc: "We apply the highest global safety standards (HACCP) to ensure your meal arrives safely. Learn about the hygiene and sterilization protocols in our kitchens.",
      img: "raw-chicken.webp",
      link: "/blog/food-safety-haccp"
    },
    {
      id: 4,
      category: "recipes",
      catAr: "وصفات",
      catEn: "Recipes",
      arTitle: "أسرار البروست المقرمش — كيف تحضره في المنزل؟",
      enTitle: "Secrets of Crispy Broast — How to Make It at Home?",
      arDesc: "الكثير يحاول تقليد طعم البروست المثالي في المنزل، لكن النتيجة غالباً ما تكون دجاجاً مقلياً عادياً. السر لا يكمن فقط في المكونات، بل في التقنية الخاصة.",
      enDesc: "Many try to replicate the perfect broast taste at home, but the result is often just regular fried chicken. The secret lies not just in the ingredients, but in the technique.",
      img: "Golden Chicken Nuggets.webp",
      link: "/blog/secrets-of-crispy-broast"
    },
    {
      id: 5,
      category: "culture",
      catAr: "ثقافة الطعام",
      catEn: "Food Culture",
      arTitle: "الفرق بين البروست والدجاج المقلي العادي",
      enTitle: "The Difference Between Broast and Regular Fried Chicken",
      arDesc: "هل تساءلت يوماً لماذا يختلف طعم وقرمشة البروست عن الدجاج المقلي العادي؟ اكتشف السر التكنولوجي والمكونات وراء هذا الاختلاف الجوهري.",
      enDesc: "Ever wondered why the taste and crunch of broast differ from regular fried chicken? Discover the technological and ingredient secrets behind this core difference.",
      img: "4-Piece-Chicken-Meal.webp",
      link: "/blog/broast-vs-fried-chicken"
    },
    {
      id: 6,
      category: "news",
      catAr: "أخبار الفروع",
      catEn: "Branch News",
      arTitle: "دليلك الشامل لفروع بروست سارة في أحياء المدينة المنورة",
      enTitle: "Your Complete Guide to Madinah Neighborhoods and Branches",
      arDesc: "تغطي فروعنا أهم أحياء المدينة المنورة لتكون دائماً بالقرب منك. تعرف على خريطة فروعنا من العزيزية إلى ينبع، وأي فرع يخدمك على مدار 24 ساعة.",
      enDesc: "Our branches cover the most important neighborhoods of Madinah to always be near you. Discover our branch map from Al Aziziyyah to Yanbu, and which branch serves you 24/7.",
      img: "Arabic-Plate.webp",
      link: "/blog/madinah-neighborhoods-branches"
    },
    {
      id: 7,
      category: "culture",
      catAr: "ثقافة الطعام",
      catEn: "Food Culture",
      arTitle: "أشهر المأكولات التي يجب تجربتها في المدينة المنورة",
      enTitle: "Madinah Foods You Must Try",
      arDesc: "اكتشف تراث المدينة المنورة في الطهي، من الأطباق التقليدية والتمور إلى ثقافة الدجاج المقرمش (البروست) التي يعشقها الجميع.",
      enDesc: "Discover Madinah's culinary heritage, from traditional dishes and dates to the crispy broast culture loved by everyone.",
      img: "Shami-Shawarma.webp",
      link: "/blog/madinah-foods-must-try"
    },
    {
      id: 8,
      category: "ramadan",
      catAr: "رمضان",
      catEn: "Ramadan",
      arTitle: "وجبات رمضان — أفضل خيارات الإفطار والسحور في المدينة",
      enTitle: "Ramadan Meals — Best Options for Iftar and Suhoor",
      arDesc: "شهر رمضان في المدينة المنورة يجمع العائلات على موائد الإفطار. اكتشف أفضل وجبات التوفير العائلية وخيارات السحور السريعة في بروست سارة.",
      enDesc: "Ramadan in Madinah brings families together for Iftar. Discover the best family value meals and quick Suhoor options at Broast Sara.",
      img: "Arabic-Plate.webp",
      link: "/blog/ramadan-meals-iftar"
    },
    {
      id: 9,
      category: "culture",
      catAr: "ثقافة الطعام",
      catEn: "Food Culture",
      arTitle: "شاورما الصاروخ — قصة طبق أسطوري من بروست سارة",
      enTitle: "Sarookh Shawarma — The Story of a Legendary Dish",
      arDesc: "ليس البروست وحده نجم القائمة. اكتشف قصة شاورما الصاروخ، سر خبز الصاج الرقيق، ولماذا تعتبر الوجبة المفضلة لجلسات الشباب في المدينة.",
      enDesc: "Broast isn't the only star on the menu. Discover the story of the Sarookh Shawarma, the secret of thin Saj bread, and why it's a local favorite.",
      img: "Sarookh-Shawarma.webp",
      link: "/blog/sarookh-shawarma-story"
    },
    {
      id: 10,
      category: "culture",
      catAr: "ثقافة الطعام",
      catEn: "Food Culture",
      arTitle: "الدجاج الطازج مقابل المجمد — لماذا يهم هذا الاختلاف؟",
      enTitle: "Fresh vs Frozen Chicken — Why the Difference Matters?",
      arDesc: "لماذا نصر على عدم استخدام الدجاج المجمد أبداً؟ اكتشف الفارق الجذري الذي يصنعه الدجاج المحلي الطازج في المذاق، القرمشة، والجودة.",
      enDesc: "Why do we insist on never using frozen chicken? Discover the radical difference fresh local chicken makes in taste, crunch, and quality.",
      img: "raw-chicken.webp",
      link: "/blog/fresh-vs-frozen-chicken"
    }
  ];

  const filteredArticles = activeCategory === "all" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-7xl mb-6 text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>
            {lang === 'ar' ? "مدونة بروست سارة — وصفات، أخبار، ونصائح الطعام" : "Broast Sara Blog — Recipes, News, and Food Tips"}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {lang === 'ar' ? "تابع مدونة بروست سارة للحصول على أحدث الأخبار، ونصائح سلامة الغذاء، وثقافة الطعام في المدينة المنورة." : "Follow the Broast Sara blog for the latest news, food safety tips, and Madinah food culture."}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-8 py-3 rounded-full transition-all border ${activeCategory === cat.id ? 'bg-[#FFD700] text-black border-[#FFD700] font-bold' : 'bg-white/5 border-white/20 text-white hover:bg-white/10'}`}
            >
              {lang === 'ar' ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <div key={article.id} className="premium-card flex flex-col overflow-hidden h-full text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <div className="w-full h-60 bg-white/5 relative">
                <img src={`/products/${article.img}`} alt={article.enTitle} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = '/menu/4-Piece-Chicken-Meal.webp'; }} />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#FFD700] text-xs font-bold px-4 py-2 rounded-full border border-white/10 uppercase tracking-widest">
                  {lang === 'ar' ? article.catAr : article.catEn}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow justify-between gap-6">
                <div>
                  <span className="text-white/60 text-xs tracking-widest uppercase font-bold mb-3 block" suppressHydrationWarning>
                    {lang === 'ar' ? dateAr : dateEn}
                  </span>
                  <h2 className={`text-2xl font-bold mb-4 text-white ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                    {lang === 'ar' ? article.arTitle : article.enTitle}
                  </h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {lang === 'ar' ? article.arDesc : article.enDesc}
                  </p>
                </div>
                
                <div className="mt-4">
                  <Link href={article.link} className="btn-secondary liquid-glass border-white/20 w-full justify-center py-4 font-bold text-lg hover:bg-white/10 transition-colors no-underline">
                    {lang === 'ar' ? 'اقرأ القصة' : 'Read Story'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
