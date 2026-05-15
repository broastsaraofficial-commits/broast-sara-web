import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "بروست سارة | أفضل بروست في المدينة المنورة | دجاج طازج يومياً",
  description: "استمتع بمذاق أفضل بروست ودجاج مقرمش في المدينة المنورة. دجاج محلي طازج 100٪ يُذبح يومياً. 8 فروع في خدمتك.",

};

const dict = {
  ar: {
    order: "اطلب الآن", menu: "قائمة الطعام", call: "📞 اتصل بنا",
    title: "أفضل بروست في المدينة المنورة",
    desc: "طعم المدينة الأصيل. دجاج محلي طازج 100%، يُحضر يومياً بخلطتنا السرية الأسطورية التي يعشقها الجميع.",
    pillars: [
      { t: "دجاج طازج يومياً", d: "لا نستخدم المجمد أبداً. دجاج عالي الجودة يُذبح يومياً." },
      { t: "حلال 100% معتمد", d: "نلتزم بدقة بالشريعة الإسلامية ومعايير HACCP." },
      { t: "خدمة سريعة", d: "وجبتك جاهزة في دقائق ساخنة ومقرمشة." },
      { t: "ثوم سارة الأسطوري", d: "خلطتنا الخاصة التي رسمت ملامح البروست." }
    ],
    sigs: [
      { img: "The Signature Broast.webp", n: "بروست سارة الأصلي", d: "وصفة المدينة الأصيلة. دجاج طازج محلي يُتبل بخلطتنا السرية لأكثر من 12 ساعة ليمنحك قرمشة ذهبية من الخارج وطراوة غنية بالعصارة من الداخل." },
      { img: "The Spicy Broast.webp", n: "البروست الحراق", d: "التوازن المثالي بين الحرارة والقرمشة بخلطتنا الخاصة. تم إعداد التتبيلة الحارة بعناية لتصل نكهة التوابل إلى العظم في كل قضمة." },
      { img: "The Legendary Shawarma.webp", n: "شاورما الصاروخ", d: "ثوم سارة الأسطوري يلتقي مع الدجاج المشوي ببطء على السيخ. تُلف في خبز الصاج الطازج وتُحمص لتمنحك وجبة لا تُنسى." },
      { img: "The Golden Shrimp.webp", n: "جمبري سارة الذهبي", d: "جمبري مقلي فاخر الحجم، متبل بخلطتنا السرية المقرمشة، يُقدم مع صوصنا الخاص لتجربة مأكولات بحرية استثنائية." }
    ],
    blogTitle: "المدونة",
    blog: [
      { title: "لماذا دجاج بروست سارة هو الأفضل في المدينة المنورة؟", desc: "اكتشف سر القرمشة المثالية والجودة التي ميزتنا لأكثر من عقد في المدينة المنورة.", slug: "why-choose-broast-sara" },
      { title: "معايير HACCP وجودة الغذاء", desc: "نطبق أعلى معايير السلامة العالمية لضمان وصول وجبتك بأمان وبأعلى جودة.", slug: "food-safety-haccp" },
      { title: "أسرار قرمشة الجمبري الذهبي", desc: "كيف نحافظ على القوام الطري للجمبري مع قشرة مقرمشة لا تقاوم.", slug: "secrets-of-crispy-broast" }
    ],
    readStory: "اقرأ القصة ←",
    branchesTitle: "فروعنا في خدمتك",
    branches: [
      { name: "العزيزية", slug: "al-aziziyyah" }, { name: "الهجرة", slug: "al-hijrah" },
      { name: "الإمام البخاري", slug: "imam-bukhari" }, { name: "حي البحر", slug: "hil-bahr" },
      { name: "الجوازات", slug: "aljwazat" }, { name: "الجرف", slug: "al-juruf" },
      { name: "ينبع", slug: "yanbu" }, { name: "أبيار الماشي", slug: "abiar-al-mashi" }
    ],
    allBranches: "عرض جميع الفروع",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "هل دجاج بروست سارة حلال؟", a: "نعم، جميع دجاجنا محلي وطازج ويُذبح يدوياً بالطريقة الإسلامية يومياً. لا نستخدم الدجاج المجمد أبداً." },
      { q: "ما هي أوقات عمل بروست سارة؟", a: "تعمل معظم فروعنا من الساعة 12:30 ظهراً حتى 2:30 فجراً. فرع أبيار الماشي مفتوح 24 ساعة." },
      { q: "كيف أطلب للتوصيل؟", a: "يمكنك الطلب عبر منصات هنقرستيشن ويانغو، أو بالتواصل مع أقرب فرع إليك عبر الواتساب." }
    ],
    allFaq: "عرض جميع الأسئلة",
    safetyTitle: "سياسة سلامة الغذاء",
    safetyDesc: "بروست سارة ملتزمة بأعلى معايير سلامة الغذاء في المملكة العربية السعودية. دجاجنا طازج ويُذبح يومياً، ونتبع بروتوكولات صارمة لضمان جودة وسلامة كل وجبة.",
    safetyBtn: "اقرأ سياسة سلامة الغذاء الكاملة"
  },
  en: {
    order: "Order Now", menu: "View Menu", call: "📞 Call Us",
    title: "The Best Broast in Madinah",
    desc: "The authentic taste of Madinah. 100% fresh local chicken, prepared daily with our legendary secret blend.",
    pillars: [
      { t: "Fresh Daily Chicken", d: "Never frozen. High-quality chicken slaughtered daily." },
      { t: "100% Certified Halal", d: "Following strict Islamic Sharia and global HACCP standards." },
      { t: "Express Service", d: "Your meal is ready in minutes, hot and crispy." },
      { t: "Legendary Garlic Sauce", d: "Our signature 'Thoum' that defined the Madinah broast." }
    ],
    sigs: [
      { img: "The Signature Broast.webp", n: "Original Broast", d: "Authentic Madinah recipe. Fresh local chicken marinated for over 12 hours in our secret blend, giving you a golden crunch on the outside and juicy tenderness inside." },
      { img: "The Spicy Broast.webp", n: "Spicy Broast", d: "The perfect balance of heat and crunch. Our custom spicy marinade is carefully crafted so the flavor reaches the bone with every single bite." },
      { img: "The Legendary Shawarma.webp", n: "Legendary Shawarma", d: "Legendary garlic sauce meets perfectly slow-roasted chicken. Wrapped in fresh saj bread and toasted to give you an unforgettable meal." },
      { img: "The Golden Shrimp.webp", n: "Golden Shrimp", d: "Premium large fried shrimp, seasoned with our secret crispy blend and served with our special sauce for an exceptional seafood experience." }
    ],
    blogTitle: "The Blog",
    blog: [
      { title: "Why Broast Sara is the best in Madinah?", desc: "Discover the secret of perfect crunch and quality that has defined us for over a decade in Madinah.", slug: "why-choose-broast-sara" },
      { title: "HACCP Standards and Food Quality", desc: "We apply the highest global safety standards to ensure your meal arrives safely and with the highest quality.", slug: "food-safety-haccp" },
      { title: "Secrets of the Golden Shrimp Crunch", desc: "How we maintain the tender texture of shrimp with an irresistible crispy crust.", slug: "secrets-of-crispy-broast" }
    ],
    readStory: "Read Story →",
    branchesTitle: "Our Branches at Your Service",
    branches: [
      { name: "Al Aziziyyah", slug: "al-aziziyyah" }, { name: "Al Hijrah", slug: "al-hijrah" },
      { name: "Imam Bukhari", slug: "imam-bukhari" }, { name: "Hil Bahr", slug: "hil-bahr" },
      { name: "Aljwazat", slug: "aljwazat" }, { name: "Al Juruf", slug: "al-juruf" },
      { name: "Yanbu", slug: "yanbu" }, { name: "Abiar Al Mashi", slug: "abiar-al-mashi" }
    ],
    allBranches: "View All Locations",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Broast Sara's chicken halal?", a: "Yes, all our chicken is local, fresh, and manually slaughtered the Islamic way daily. We never use frozen chicken." },
      { q: "What are the opening hours?", a: "Most branches operate from 12:30 PM until 2:30 AM. The Abiar Al Mashi branch is open 24/7." },
      { q: "How do I order delivery?", a: "You can order via HungerStation or by contacting your nearest branch via WhatsApp." }
    ],
    allFaq: "View All FAQs",
    safetyTitle: "Food Safety Policy",
    safetyDesc: "Broast Sara is committed to the highest food safety standards in Saudi Arabia. Our chicken is fresh and slaughtered daily, and we follow strict protocols.",
    safetyBtn: "Read Full Food Safety Policy"
  }
};

export default async function HomePage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const t = dict[lang];
  const isAr = lang === 'ar';

  const tickIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] mx-auto">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );

  const shopIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-6 h-6 flex-shrink-0">
      <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 002.25 7.5v.188c0 .203.044.4.123.576a2.25 2.25 0 002.625 1.114 2.251 2.251 0 003-1.114c.08-.176.123-.373.123-.576V7.5a.75.75 0 00-1.5 0v.188a.75.75 0 01-.15.44.75.75 0 01-.6.28.75.75 0 01-.6-.28.75.75 0 01-.15-.44V7.5a.75.75 0 00-1.5 0v.188c0 .193-.053.376-.15.534A.75.75 0 013 7.5v-.188a.75.75 0 01.128-.415.75.75 0 01.442-.257.75.75 0 00.555-.22l1.3-1.298a.75.75 0 01.53-.222h12.09c.2 0 .391.079.53.222l1.3 1.298a.75.75 0 00.555.22.75.75 0 01.442.257.75.75 0 01.128.415v.188a.75.75 0 01-1.35.484.75.75 0 00-.15-.534V7.5a.75.75 0 00-1.5 0v.188a.75.75 0 01-.15.44.75.75 0 01-.6.28.75.75 0 01-.6-.28.75.75 0 01-.15-.44V7.5a.75.75 0 00-1.5 0v.188c0 .203.044.4.123.576a2.251 2.251 0 003 1.114 2.25 2.25 0 002.625-1.114c.079-.176.123-.373.123-.576V7.5a3.75 3.75 0 00-.348-1.552l-1.3-1.298a1.875 1.875 0 00-1.325-.55H5.223z" />
      <path d="M20.25 11.332v6.418a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-6.418a4.526 4.526 0 001.5.253 4.526 4.526 0 003-1.134 4.526 4.526 0 003 1.134 4.526 4.526 0 003-1.134 4.526 4.526 0 003 1.134 4.526 4.526 0 001.5-.253zM15 14.25a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h2.25a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H15z" />
    </svg>
  );

  const d = new Date();
  const monthNamesEn = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const monthNamesAr = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const displayDate = isAr ? `${monthNamesAr[d.getMonth()]} ${d.getFullYear()}` : `${monthNamesEn[d.getMonth()]} ${d.getFullYear()}`;

  return (
    <main className="w-full pt-40 pb-20 relative" dir={isAr ? "rtl" : "ltr"}>

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 mb-32 overflow-hidden">
        <div className="max-w-5xl z-10 text-center">
          <h1 className="mb-8 text-5xl md:text-8xl font-bold text-white font-instrument">{t.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white font-helvetica tracking-[-0.05em] leading-relaxed">{t.desc}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={isAr ? "/ar/order" : "/en/order"} className="btn-primary font-helvetica tracking-[-0.05em]">{t.order}</Link>
            <Link href={isAr ? "/ar/menu" : "/en/menu"} className="btn-secondary font-helvetica tracking-[-0.05em]">{t.menu}</Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: PILLARS */}
      <section className="w-full px-6 mb-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.pillars.map((p, i) => (
          <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] p-10 text-center flex flex-col items-center">
            <div className="mb-6">{tickIcon}</div>
            {/* FIXED: Changed from h3 to h2 for sequential hierarchy. ClassName unchanged. */}
            <h2 className="text-white text-2xl mb-4 font-bold font-instrument">{p.t}</h2>
            <p className="text-base text-white font-helvetica tracking-[-0.05em]">{p.d}</p>
          </div>
        ))}
      </section>

      {/* SECTION 3: SIGNATURES */}
      <section className="w-full px-6 mb-32 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-16 text-center font-bold text-white font-instrument">{isAr ? 'الأصناف المميزة' : 'Signature Products'}</h2>
        <div className="grid grid-cols-1 gap-16">
          {t.sigs.map((s, i) => (
            <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] flex flex-col overflow-hidden items-center text-center">
              <div className="w-full h-80 md:h-[450px] relative">
                {/* FIXED: Added 'priority' to resolve the Next.js LCP terminal warning */}
                <Image src={`/products/${s.img}`} alt={s.n} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" quality={60} priority />
              </div>
              <div className="p-10 w-full max-w-4xl mx-auto text-white">
                <h3 className="text-3xl md:text-4xl mb-4 font-bold font-instrument">{s.n}</h3>
                <p className="text-xl text-white font-helvetica tracking-[-0.05em] leading-relaxed">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ADDED SECTION: THE BLOG */}
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
                <p className="text-white/80 font-helvetica tracking-[-0.05em] leading-relaxed mb-8">{post.desc}</p>
              </div>
              <Link href={isAr ? `/ar/blog/${post.slug}` : `/en/blog/${post.slug}`} className="text-white font-bold font-helvetica tracking-[-0.05em] hover:text-[#FFD700] transition-colors flex items-center gap-2">
                {t.readStory}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: MAP & BRANCHES */}
      <section className="w-full px-6 mb-32 max-w-6xl mx-auto">
        <div className="bg-black/20 backdrop-blur-xl border border-white/30 rounded-[40px] flex flex-col overflow-hidden">
          <div className="p-10 md:p-16 w-full text-center">
            <h2 className="text-4xl md:text-5xl mb-12 text-[#FFD700] font-bold font-instrument">{t.branchesTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 mb-12 w-fit mx-auto">
              {t.branches.map((b, i) => (
                <Link key={i} href={isAr ? `/ar/locations/${b.slug}` : `/en/locations/${b.slug}`} className="text-white hover:text-[#E31837] text-lg font-bold no-underline flex items-center gap-3 justify-start">
                  {shopIcon}
                  <span className="font-helvetica tracking-[-0.05em]">{b.name}</span>
                </Link>
              ))}
            </div>
            <Link href={isAr ? "/ar/locations" : "/en/locations"} className="btn-secondary font-helvetica tracking-[-0.05em]">{t.allBranches}</Link>
          </div>
          <div className="w-full h-80 md:h-[450px] border-t border-white/20">
            {/* FIXED: Added title attribute to iframe */}
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