import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "../../constants/blogData";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";

  const title = isEn 
    ? "Broast Sara | Best Broast in Madinah | Fresh Chicken Daily" 
    : "بروست سارة | أفضل بروست في المدينة المنورة | دجاج طازج يومياً";
  const description = isEn 
    ? "Madinah's most established broast chain. 100% fresh, never-frozen Saudi chicken, daily halal slaughter, 8 branches across Madinah and Yanbu." 
    : "أعرق سلسلة بروست في المدينة المنورة. دجاج سعودي طازج 100% غير مجمد، ذبح حلال يومي، 8 فروع في المدينة المنورة وينبع.";
  const url = `https://broastsara.com/${lang}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url }
  };
}

const dict = {
  ar: {
    order: "اطلب الآن", menu: "قائمة الطعام", call: "📞 اتصل بنا",
    title: "أفضل بروست في المدينة المنورة",
    desc: "أعرق سلسلة بروست في المدينة المنورة. دجاج سعودي محلي طازج 100% لم يتعرض للتجميد قط، يُذبح يدوياً يومياً بالطريقة الإسلامية الحلال، في 8 فروع بالمدينة المنورة وينبع.",
    ratingText: "4.1 من 5 — 1,639 تقييم على خرائط جوجل",
    pillars: [
      { t: "دجاج طازج يومياً", d: "لا نستخدم المجمد أبداً. دجاج عالي الجودة يُذبح يومياً." },
      { t: "حلال 100% معتمد", d: "نلتزم بدقة بالشريعة الإسلامية ومعايير HACCP." },
      { t: "خدمة سريعة", d: "وجبتك جاهزة في دقائق ساخنة ومقرمشة." },
      { t: "ثوم سارة الأسطوري", d: "خلطتنا الخاصة التي رسمت ملامح البروست." }
    ],
    sigs: [
      { img: "The Signature Broast.webp", n: "بروست سارة الأصلي", d: "وصفة المدينة الأصيلة. دجاج طازج محلي يُتبل لأكثر من 12 ساعة، مقلي بالضغط ليمنحك قشرة ذهبية مقرمشة من الخارج ولحماً طرياً عصارياً من الداخل." },
      { img: "The Spicy Broast.webp", n: "بروست حراق الحار", d: "نفس الدجاج الطازج وطريقة القلي بالضغط، مع تتبيلة حارة تتصاعد تدريجياً عبر الوجبة بدلاً من أن تُحس على السطح فقط." },
      { img: "The Legendary Shawarma.webp", n: "شاورما صاروخ", d: "تُصنع من نفس الدجاج الطازج المذبوح يومياً المستخدم في البروست. تُقدَّم في خبز ساج طازج محمص مع صلصة الثوم الأسطورية والمخللات." },
      { img: "The Golden Shrimp.webp", n: "الروبيان الذهبي", d: "روبيان مقلي بالضغط، 15 قطعة، يُقدَّم مع صلصة الثوم الأسطورية — خيار Broast Sara غير الدجاج للمجموعات المختلطة." }
    ],
    whyTitle: "لماذا Broast Sara؟",
    whyItems: [
      { t: "دجاج طازج لا مجمد", d: "على عكس معظم عمليات البروست في المدينة المنورة، لا يدخل أي دجاج مجمد إلى مطابخنا." },
      { t: "ذبح حلال يومي محلي", d: "وليس دجاجاً حلالاً مجمداً مستورداً قد يكون عمره أسابيع." },
      { t: "بروتوكولات HACCP موثقة", d: "سياسة سلامة غذاء منشورة علناً، وليست ادعاءً عاماً." }
    ],
    whyCta: "اقرأ المقارنة الكاملة",
    blogTitle: "المدونة",
    blog: blogPosts.slice(0, 3).map(post => ({
      title: post.ar.title,
      desc: post.ar.description,
      slug: post.slug
    })),
    readStory: "اقرأ المقال ←",
    branchesTitle: "فروعنا في خدمتك",
    branches: [
      { name: "الدعيثة", slug: "al-aziziyyah" }, { name: "الهجرة", slug: "al-hijrah" },
      { name: "الإمام البخاري", slug: "imam-bukhari" }, { name: "حي البحر", slug: "hil-bahr" },
      { name: "الجوازات", slug: "aljwazat" }, { name: "الجرف", slug: "al-juruf" },
      { name: "ينبع", slug: "yanbu" }, { name: "أبيار الماشي", slug: "abiar-al-mashi", badge: "24/7" }
    ],
    allBranches: "عرض جميع الفروع",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "هل دجاج بروست سارة حلال؟", a: "نعم، جميع دجاجنا محلي طازج ويُذبح يدوياً بالطريقة الإسلامية يومياً، مع شهادات مطابقة من مركز الحلال السعودي لكل دفعة. لا نستخدم الدجاج المجمد أبداً." },
      { q: "هل بروست سارة مفتوح الآن؟", a: "فرع أبيار الماشي مفتوح على مدار 24 ساعة، سبعة أيام في الأسبوع، على الرقم 0530957742. باقي الفروع لها ساعات عمل مختلفة حسب الفرع — راجع صفحة الفروع لمعرفة الساعات الدقيقة لأقرب فرع منك." },
      { q: "ما هي أوقات عمل فروع بروست سارة؟", a: "تختلف ساعات العمل حسب الفرع. فرع أبيار الماشي يعمل 24 ساعة. باقي الفروع تفتح بين الظهر والمساء وتغلق بين الساعة 3 و4 فجراً. راجع صفحة الفروع للساعات الدقيقة لكل فرع." },
      { q: "كيف أطلب للتوصيل؟", a: "يمكنك الطلب عبر منصة هنقرستيشن، أو بالتواصل مع أقرب فرع إليك عبر الواتساب أو الهاتف مباشرة." }
    ],
    allFaq: "عرض جميع الأسئلة",
    safetyTitle: "سياسة سلامة الغذاء",
    safetyDesc: "تُطبّق Broast Sara بروتوكولات HACCP (تحليل المخاطر ونقاط التحكم الحرجة) في جميع الفروع الثمانية، مع طهي الدجاج لدرجة حرارة داخلية لا تقل عن 74 درجة مئوية، واعتماد حلال من مركز الحلال السعودي لكل دفعة.",
    safetyBtn: "اقرأ سياسة سلامة الغذاء الكاملة"
  },
  en: {
    order: "Order Now", menu: "View Menu", call: "📞 Call Us",
    title: "The Best Broast in Madinah",
    desc: "Madinah's most established broast chain. 100% fresh, never-frozen local Saudi chicken, hand-slaughtered daily using the Islamic halal method, across 8 branches in Madinah and Yanbu.",
    ratingText: "4.1 out of 5 — 1,639 Google reviews",
    pillars: [
      { t: "Fresh Daily Chicken", d: "Never frozen. High-quality chicken slaughtered daily." },
      { t: "100% Certified Halal", d: "Following strict Islamic Sharia and global HACCP standards." },
      { t: "Express Service", d: "Your meal is ready in minutes, hot and crispy." },
      { t: "Legendary Garlic Sauce", d: "Our signature 'Thoum' that defined the Madinah broast." }
    ],
    sigs: [
      { img: "The Signature Broast.webp", n: "Original Broast", price: "19 SAR", d: "Authentic Madinah recipe. Fresh local chicken marinated for over 12 hours, pressure-fried to give you a golden, audibly crunchy crust and juicy, steam-releasing meat inside." },
      { img: "The Spicy Broast.webp", n: "Spicy Haraq Broast", price: "19 SAR", d: "The same fresh chicken and pressure-frying method, with a marinade that builds heat progressively through the meal rather than sitting only on the surface." },
      { img: "The Legendary Shawarma.webp", n: "Sarookh Shawarma", price: "9 SAR", d: "Made from the same fresh daily-slaughtered chicken as the broast. Served in toasted Saj bread with Legendary Garlic Thoum Sauce and pickles." },
      { img: "The Golden Shrimp.webp", n: "Golden Shrimp", price: "25 SAR (15 pieces)", d: "Golden Shrimp, 15 pieces, pressure-fried and served with Legendary Garlic Thoum Sauce — Broast Sara's non-chicken option for mixed groups." }
    ],
    whyTitle: "Why Broast Sara",
    whyItems: [
      { t: "Fresh chicken, never frozen", d: "Unlike most broast operations in Madinah, no frozen chicken enters our kitchens at any branch." },
      { t: "Daily local halal slaughter", d: "Not imported frozen halal chicken that may be weeks old by the time it's served." },
      { t: "Documented HACCP protocols", d: "A publicly published Food Safety Policy, not a vague claim." }
    ],
    whyCta: "Read the Full Comparison",
    blogTitle: "The Blog",
    blog: blogPosts.slice(0, 3).map(post => ({
      title: post.en.title,
      desc: post.en.description,
      slug: post.slug
    })),
    readStory: "Read the Full Post →",
    branchesTitle: "Our Branches at Your Service",
    branches: [
      { name: "Al Daheetha", slug: "al-aziziyyah" }, { name: "Al Hijrah", slug: "al-hijrah" },
      { name: "Imam Bukhari", slug: "imam-bukhari" }, { name: "Hil Bahr", slug: "hil-bahr" },
      { name: "Aljwazat", slug: "aljwazat" }, { name: "Al Juruf", slug: "al-juruf" },
      { name: "Yanbu", slug: "yanbu" }, { name: "Abiar Al Mashi", slug: "abiar-al-mashi", badge: "24/7" }
    ],
    allBranches: "View All Locations",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Broast Sara's chicken halal?", a: "Yes, all our chicken is local, fresh, and hand-slaughtered daily using the Islamic halal method, with official conformity certificates from the Saudi Halal Center for every batch. We never use frozen chicken." },
      { q: "Is Broast Sara open now?", a: "The Abiar Al Mashi branch is open 24 hours a day, seven days a week, reachable at 0530957742. Other branches have different hours by location — check the Locations page for your nearest branch's exact opening hours." },
      { q: "What are Broast Sara's opening hours?", a: "Hours vary by branch. The Abiar Al Mashi branch operates 24 hours a day. Most other branches open in the afternoon or evening and close between 3 AM and 4 AM. Check the Locations page for the exact hours of your nearest branch." },
      { q: "How do I order delivery?", a: "You can order via HungerStation, or by contacting your nearest branch directly via WhatsApp or phone." }
    ],
    allFaq: "View All FAQs",
    safetyTitle: "Food Safety Policy",
    safetyDesc: "Broast Sara applies HACCP (Hazard Analysis and Critical Control Points) protocols across all 8 branches, with chicken cooked to a minimum internal temperature of 74°C and certified halal by the Saudi Halal Center for every batch.",
    safetyBtn: "Read Full Food Safety Policy"
  }
};

export default async function HomePage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const t = dict[lang] ?? dict["ar"];
  const isAr = lang === 'ar';
  const isEn = !isAr;

  const tickIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] mx-auto">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );

  const shopIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-6 h-6 flex-shrink-0">
      <path d="M22 12.5V20a2 2 0 01-2 2H4a2 2 0 01-2-2v-7.5l-.31-2.46A2 2 0 011.67 8l.92-4.6A2 2 0 014.54 2h14.92a2 2 0 011.95 1.4l.92 4.6a2 2 0 01-.02 2.04l-.31 2.46zM4.54 4l-.92 4.6.48 3.4H19.9l.48-3.4-.92-4.6H4.54zM9 14v4h6v-4H9z" />
    </svg>
  );

  const starIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5 flex-shrink-0">
      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
    </svg>
  );

  const d = new Date();
  const monthNamesEn = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const monthNamesAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const displayDate = isAr ? `${monthNamesAr[d.getMonth()]} ${d.getFullYear()}` : `${monthNamesEn[d.getMonth()]} ${d.getFullYear()}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://broastsara.com/#restaurant",
    "name": "Broast Sara",
    "url": `https://broastsara.com/${lang}`,
    "image": "https://broastsara.com/broast-sara-logo.webp",
    "priceRange": "SAR 5 - SAR 25",
    "servesCuisine": ["Middle Eastern", "Fried Chicken", "Fast Food", "Shawarma"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.1",
      "reviewCount": "1639"
    },
    "areaServed": isAr ? "المدينة المنورة وينبع، المملكة العربية السعودية" : "Madinah and Yanbu, Saudi Arabia",
    "sameAs": ["https://maps.app.goo.gl/NaC1TNvGSqsYUtsT8"]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return (
    <main className="w-full pt-40 pb-20 relative" dir={isAr ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 mb-32 overflow-hidden">
        <div className="max-w-5xl z-10 text-center">
          <h1 className="mb-8 text-5xl md:text-8xl font-bold text-white font-instrument">{t.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6 text-white font-helvetica tracking-[-0.05em] leading-relaxed">{t.desc}</p>
          <div className="flex items-center justify-center gap-2 mb-12 text-white font-helvetica">
            <div className="flex gap-0.5">{starIcon}{starIcon}{starIcon}{starIcon}{starIcon}</div>
            <span className="text-base">{t.ratingText}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={isAr ? "/ar/order" : "/en/order"} className="btn-primary !bg-[#971111] font-helvetica tracking-[-0.05em]">{t.order}</Link>
            <Link href={isAr ? "/ar/menu" : "/en/menu"} className="btn-secondary liquid-glass font-helvetica tracking-[-0.05em]">{t.menu}</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: PILLARS */}
      <section className="w-full px-6 mb-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.pillars.map((p, i) => (
          <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-10 text-center flex flex-col items-center">
            <div className="mb-6">{tickIcon}</div>
            <h2 className="text-white text-2xl mb-4 font-bold font-instrument">{p.t}</h2>
            <p className="text-lg text-white font-helvetica tracking-[-0.05em] leading-relaxed lowercase">{p.d}</p>
          </div>
        ))}
      </section>

      {/* SECTION 3: SIGNATURES */}
<section className="w-full px-0 md:px-6 mb-32 max-w-5xl mx-auto">
  <h2 className="text-4xl md:text-6xl mb-16 text-center font-bold text-white font-instrument px-6">
    {isAr ? 'الأصناف المميزة' : 'Signature Products'}
  </h2>
  <div className="grid grid-cols-1 gap-16">
    {t.sigs.map((s, i) => (
      <Link 
        key={i} 
        href={isAr ? "/ar/menu" : "/en/menu"} 
        className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] flex flex-col overflow-hidden items-center text-center no-underline cursor-pointer hover:border-[#FFD700]/50 transition-colors"
      >
        <div className="w-full h-80 md:h-[450px] relative">
          <Image 
            src={`/products/${s.img}`} 
            alt={s.n} 
            fill 
            className="object-cover" 
            sizes="(max-width: 768px) 100vw, 800px" 
            quality={60} 
            priority={i < 2} 
          />
        </div>
        <div className="p-10 w-full max-w-4xl mx-auto text-white">
          <h3 className="text-3xl md:text-4xl font-bold font-instrument mb-4">{s.n}</h3>
          <p className="text-xl text-white font-helvetica tracking-[-0.05em] leading-relaxed">{s.d}</p>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* SECTION 3.5: WHY BROAST SARA */}
      <section className="w-full px-6 mb-32 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-12 text-center font-bold text-white font-instrument">{t.whyTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {t.whyItems.map((item, i) => (
            <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-8 text-center">
              <h3 className="text-white text-xl mb-3 font-bold font-instrument">{item.t}</h3>
              <p className="text-white font-helvetica tracking-[-0.05em] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={isAr ? "/ar/blog/best-broast-restaurants-madinah" : "/en/blog/best-broast-restaurants-madinah"} className="btn-secondary font-helvetica tracking-[-0.05em]">{t.whyCta}</Link>
        </div>
      </section>

      {/* SECTION: THE BLOG */}
      <section className="w-full px-6 mb-32 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-12 text-center font-bold text-white font-instrument">{t.blogTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.blog.map((post, i) => (
            <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-8 flex flex-col justify-between text-left" dir={isAr ? "rtl" : "ltr"}>
              <div>
                <div className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-4 font-helvetica">
                  {displayDate}
                </div>
                <h3 className="text-2xl text-white font-bold mb-4 font-instrument">{post.title}</h3>
                <p className="text-white font-helvetica tracking-[-0.05em] leading-relaxed mb-8">{post.desc}</p>
              </div>
               <Link href={isAr ? `/ar/blog/${post.slug}` : `/en/blog/${post.slug}`} className="text-[#FFD700] font-normal font-helvetica tracking-[-0.05em] hover:text-white transition-colors flex items-center gap-2">
                {t.readStory}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: MAP & BRANCHES */}
      <section className="w-full px-0 md:px-6 mb-32 max-w-6xl mx-auto">
        <div className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] flex flex-col overflow-hidden">
          <div className="p-10 md:p-16 w-full text-center px-6">
            <h2 className="text-4xl md:text-5xl mb-12 text-[#FFD700] font-bold font-instrument">{t.branchesTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 mb-12 w-fit mx-auto">
              {t.branches.map((b, i) => (
                <Link key={i} href={isAr ? `/ar/locations/${b.slug}` : `/en/locations/${b.slug}`} className="text-white hover:text-[#E31837] text-lg font-bold no-underline flex items-center gap-3 justify-start">
                  {shopIcon}
                  <span className="font-helvetica tracking-[-0.05em] flex items-center gap-2">
                    {b.name}
                    {b.badge && (
                      <span className="text-xs bg-[#971111] text-white px-2 py-0.5 rounded-full font-bold">{b.badge}</span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
            <Link href={isAr ? "/ar/locations" : "/en/locations"} className="btn-secondary font-helvetica tracking-[-0.05em]">{t.allBranches}</Link>
          </div>
          <div className="w-full h-80 md:h-[450px] border-t border-white/20">
            <iframe title={isAr ? "خريطة فروع بروست سارة" : "Broast Sara Locations Map"} width="100%" height="100%" src="https://maps.google.com/maps?q=Broast+Sara+Madinah&t=&z=12&ie=UTF8&iwloc=&output=embed" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section className="w-full px-6 mb-32 max-w-5xl mx-auto bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-12 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl mb-12 text-[#FFD700] font-bold font-instrument">{t.faqTitle}</h2>
        <div className="flex flex-col gap-8">
          {t.faqs.map((f, i) => (
            <div key={i} className="border-b border-white/10 pb-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-3 font-instrument">{f.q}</h3>
              <p className="text-lg text-white font-helvetica tracking-[-0.05em] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href={isAr ? "/ar/faq" : "/en/faq"} className="btn-secondary font-helvetica tracking-[-0.05em]">{t.allFaq}</Link>
        </div>
      </section>

      {/* SECTION 6: SAFETY */}
      <section className="w-full px-6 mb-32 max-w-5xl mx-auto bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-12 md:p-16 text-center text-white">
        <h2 className="text-4xl md:text-6xl mb-8 text-[#FFD700] font-bold font-instrument">{t.safetyTitle}</h2>
        <p className="text-xl text-white font-helvetica tracking-[-0.05em] max-w-3xl mx-auto mb-10 leading-relaxed">{t.safetyDesc}</p>
        <Link href={isAr ? "/ar/legal/food-safety" : "/en/legal/food-safety"} className="btn-secondary font-helvetica tracking-[-0.05em]">{t.safetyBtn}</Link>
      </section>
    </main>
  );
}