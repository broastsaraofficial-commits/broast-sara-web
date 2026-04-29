"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { lang } = useLanguage();

  const tickIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] mx-auto">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    </svg>
  );

  const t = {
    ar: {
      heroTitle: "أفضل بروست في المدينة المنورة",
      heroDesc: "طعم المدينة الأصيل. دجاج محلي طازج 100%، يُحضر يومياً بخلطتنا السرية الأسطورية التي يعشقها الجميع.",
      orderNow: "اطلب الآن",
      viewMenu: "قائمة الطعام",
      pillars: [
        { title: "دجاج طازج يومياً", desc: "لا نستخدم المجمد أبداً. دجاج عالي الجودة يُذبح يومياً." },
        { title: "حلال 100% معتمد", desc: "نلتزم بدقة بالشريعة الإسلامية ومعايير HACCP." },
        { title: "خدمة سريعة", desc: "وجبتك جاهزة في دقائق ساخنة ومقرمشة." },
        { title: "ثوم سارة الأسطوري", desc: "خلطتنا الخاصة التي رسمت ملامح البروست." }
      ],
      signatures: [
        { img: "The Signature Broast.webp", name: "بروست سارة الأصلي", desc: "وصفة المدينة الأصيلة. دجاج طازج محلي يُتبل بخلطتنا السرية لأكثر من 12 ساعة ليمنحك قرمشة ذهبية من الخارج وطراوة غنية بالعصارة من الداخل." },
        { img: "The Spicy Broast.webp", name: "البروست الحراق", desc: "التوازن المثالي بين الحرارة والقرمشة بخلطتنا الخاصة. تم إعداد التتبيلة الحارة بعناية لتصل نكهة التوابل إلى العظم في كل قضمة." },
        { img: "The Legendary Shawarma.webp", name: "شاورما الصاروخ", desc: "ثوم سارة الأسطوري يلتقي مع الدجاج المشوي ببطء على السيخ. تُلف في خبز الصاج الطازج وتُحمص لتمنحك وجبة لا تُنسى." },
        { img: "The Golden Shrimp.webp", name: "جمبري سارة الذهبي", desc: "جمبري مقلي فاخر الحجم، متبل بخلطتنا السرية المقرمشة، يُقدم مع صوصنا الخاص لتجربة مأكولات بحرية استثنائية." }
      ],
      branches: [
        { name: "العزيزية", slug: "al-aziziyyah" }, { name: "الهجرة", slug: "al-hijrah" },
        { name: "الإمام البخاري", slug: "imam-bukhari" }, { name: "حي البحر", slug: "hil-bahr" },
        { name: "الجوازات", slug: "aljwazat" }, { name: "الجرف", slug: "al-juruf" },
        { name: "ينبع", slug: "yanbu" }, { name: "أبيار الماشي", slug: "abiar-al-mashi" }
      ],
      blogs: [
        { date: "APRIL 25, 2026", title: "لماذا بروست سارة هو الأفضل في المدينة؟", desc: "اكتشف سر القرمشة المثالية والجودة التي ميزتنا لأكثر من عقد في المدينة." },
        { date: "APRIL 24, 2026", title: "معايير الـ HACCP وجودة الغذاء", desc: "نحن نطبق أعلى معايير السلامة العالمية لضمان وصول وجبتك بأمان تام." },
        { date: "APRIL 19, 2026", title: "أسرار القرمشة الذهبية للجمبري", desc: "كيف نحافظ على قوام الجمبري الطري مع قشرة مقرمشة لا تقاوم." }
      ],
      blocks: {
        sigTitle: "الأصناف المميزة",
        mapTitle: "فروعنا في خدمتك",
        viewBranches: "عرض جميع الفروع",
        orderTitle: "اطلب أون لاين",
        faqTitle: "الأسئلة الشائعة",
        viewAllFaq: "عرض جميع الأسئلة",
        blogTitle: "المدونة",
        safetyTitle: "سياسة سلامة الغذاء",
        safetyDesc: "بروست سارة ملتزمة بأعلى معايير سلامة الغذاء في المملكة العربية السعودية. دجاجنا طازج ويُذبح يومياً، ونتبع بروتوكولات صارمة لضمان جودة وسلامة كل وجبة.",
        readMore: "اقرأ سياسة سلامة الغذاء الكاملة"
      },
      faqs: [
        { q: "هل دجاج بروست سارة حلال؟", a: "نعم، جميع دجاجنا محلي وطازج ويُذبح يدوياً بالطريقة الإسلامية يومياً. لا نستخدم الدجاج المجمد أبداً." },
        { q: "ما هي أوقات عمل بروست سارة؟", a: "تعمل معظم فروعنا من الساعة 12:30 ظهراً حتى 2:30 فجراً. فرع أبيار الماشي مفتوح 24 ساعة." },
        { q: "كيف أطلب للتوصيل؟", a: "يمكنك الطلب عبر منصات هنقرستيشن ويانغو، أو بالتواصل مع أقرب فرع إليك عبر الواتساب." }
      ]
    },
    en: {
      heroTitle: "The Best Broast in Madinah",
      heroDesc: "The authentic taste of Madinah. 100% fresh local chicken, prepared daily with our legendary secret blend.",
      orderNow: "Order Now",
      viewMenu: "View Menu",
      pillars: [
        { title: "Fresh Daily Chicken", desc: "Never frozen. High-quality chicken slaughtered daily." },
        { title: "100% Certified Halal", desc: "Following strict Islamic Sharia and global HACCP standards." },
        { title: "Express Service", desc: "Your meal is ready in minutes, hot and crispy." },
        { title: "Legendary Garlic Sauce", desc: "Our signature 'Thoum' that defined the Madinah broast." }
      ],
      signatures: [
        { img: "The Signature Broast.webp", name: "Original Broast", desc: "Authentic Madinah recipe. Fresh local chicken marinated for over 12 hours in our secret blend, giving you a golden crunch on the outside and juicy tenderness inside." },
        { img: "The Spicy Broast.webp", name: "Spicy Broast", desc: "The perfect balance of heat and crunch. Our custom spicy marinade is carefully crafted so the flavor reaches the bone with every single bite." },
        { img: "The Legendary Shawarma.webp", name: "Legendary Shawarma", desc: "Legendary garlic sauce meets perfectly slow-roasted chicken. Wrapped in fresh saj bread and toasted to give you an unforgettable meal." },
        { img: "The Golden Shrimp.webp", name: "Golden Shrimp", desc: "Premium large fried shrimp, seasoned with our secret crispy blend and served with our special sauce for an exceptional seafood experience." }
      ],
      branches: [
        { name: "Al Aziziyyah", slug: "al-aziziyyah" }, { name: "Al Hijrah", slug: "al-hijrah" },
        { name: "Imam Bukhari", slug: "imam-bukhari" }, { name: "Hil Bahr", slug: "hil-bahr" },
        { name: "Aljwazat", slug: "aljwazat" }, { name: "Al Juruf", slug: "al-juruf" },
        { name: "Yanbu", slug: "yanbu" }, { name: "Abiar Al Mashi", slug: "abiar-al-mashi" }
      ],
      blogs: [
        { date: "APRIL 25, 2026", title: "Why Broast Sara is the best in Madinah?", desc: "Discover the secret of perfect crunch and quality that has defined us for over a decade in Madinah." },
        { date: "APRIL 24, 2026", title: "HACCP Standards and Food Quality", desc: "We apply the highest global safety standards to ensure your meal arrives safely and with the highest quality." },
        { date: "APRIL 19, 2026", title: "Secrets of the Golden Shrimp Crunch", desc: "How we maintain the tender texture of shrimp with an irresistible crispy crust." }
      ],
      blocks: {
        sigTitle: "Signature Products",
        mapTitle: "Our Branches at Your Service",
        viewBranches: "View All Locations",
        orderTitle: "Order Online",
        faqTitle: "Frequently Asked Questions",
        viewAllFaq: "View All FAQs",
        blogTitle: "The Blog",
        safetyTitle: "Food Safety Policy",
        safetyDesc: "Broast Sara is committed to the highest food safety standards in Saudi Arabia. Our chicken is fresh and slaughtered daily, and we follow strict protocols.",
        readMore: "Read Full Food Safety Policy"
      },
      faqs: [
        { q: "Is Broast Sara's chicken halal?", a: "Yes, all our chicken is local, fresh, and manually slaughtered the Islamic way daily. We never use frozen chicken." },
        { q: "What are the opening hours?", a: "Most branches operate from 12:30 PM until 2:30 AM. The Abiar Al Mashi branch is open 24/7." },
        { q: "How do I order delivery?", a: "You can order via HungerStation and Yango, or by contacting your nearest branch via WhatsApp." }
      ]
    }
  }[lang];

  return (
    <div className="w-full pt-40 pb-20">
      {/* Block 1: Hero */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-6 mb-32">
        <div className="max-w-5xl w-full z-10">
          <h1 className={`mb-8 leading-tight text-5xl md:text-8xl ${lang === 'en' ? 'en-accent-heading' : ''}`}>
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-white/90">
            {t.heroDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#order-online" className="btn-primary text-xl px-12 py-5">{t.orderNow}</Link>
            <Link href="/menu" className="btn-secondary bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full text-xl px-12 py-5">{t.viewMenu}</Link>
          </div>
        </div>
      </section>

      {/* Block 2: Pillars */}
      <section className="w-full px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.pillars.map((item, i) => (
            <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] p-10 text-center flex flex-col items-center justify-start">
              <div className="mb-6">{tickIcon}</div>
              <h3 className="text-white text-2xl mb-4 font-bold">{item.title}</h3>
              <p className="text-base text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Block 3: Signatures */}
      <section className="w-full px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-6xl mb-16 text-center ${lang === 'en' ? 'en-accent-heading' : ''}`}>
            {t.blocks.sigTitle}
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {t.signatures.map((prod, i) => (
              <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] flex flex-col overflow-hidden p-0 items-center text-center w-full">
                <div className="w-full h-80 md:h-[450px]">
                  <img src={`/products/${prod.img}`} alt={prod.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-10 flex flex-col justify-center w-full max-w-4xl mx-auto">
                  <h3 className={`text-3xl md:text-4xl mb-4 text-[#E31837] font-bold ${lang === 'en' ? 'en-accent-heading' : ''}`}>{prod.name}</h3>
                  <p className="text-xl text-white/90 leading-relaxed">{prod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 4: Branch Map Strip */}
      <section className="w-full px-6 mb-32">
        <div className="max-w-6xl mx-auto bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
          <div className="w-full md:w-1/2">
            <h2 className={`text-4xl md:text-5xl mb-8 text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>{t.blocks.mapTitle}</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {t.branches.map((b, i) => (
                <Link key={i} href={`/locations/${b.slug}`} className="text-white hover:text-[#E31837] text-lg font-bold transition-colors no-underline">
                  {b.name}
                </Link>
              ))}
            </div>
            <Link href="/locations" className="btn-secondary bg-black/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-full w-full justify-center">{t.blocks.viewBranches}</Link>
          </div>
          <div className="w-full md:w-1/2 h-80 rounded-[40px] overflow-hidden border border-white/20">
            <iframe width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src="https://maps.google.com/maps?q=Madinah&t=&z=11&ie=UTF8&iwloc=&output=embed" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Block 5: Delivery */}
      <section id="order-online" className="w-full px-6 mb-32 scroll-mt-32">
        <div className="max-w-4xl mx-auto text-center bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] p-16">
          <h2 className={`text-4xl mb-8 ${lang === 'en' ? 'en-accent-heading' : ''}`}>{t.blocks.orderTitle}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="#" className="bg-[#E31837] text-white py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(227,24,55,0.4)] w-full md:w-64 text-center">HungerStation</a>
            <a href="#" className="bg-[#E31837] text-white py-4 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(227,24,55,0.4)] w-full md:w-64 text-center">Yango</a>
          </div>
        </div>
      </section>

      {/* Block 7: FAQ Teaser */}
      <section className="w-full px-6 mb-32">
        <div className="max-w-5xl mx-auto bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] p-12 md:p-16">
          <h2 className={`text-4xl md:text-5xl mb-12 text-center text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>{t.blocks.faqTitle}</h2>
          <div className="flex flex-col gap-8 text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
            {t.faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h3 className="text-2xl font-bold mb-3">{faq.q}</h3>
                <p className="text-lg text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/faq" className="btn-secondary bg-black/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-full text-lg px-10 py-4 font-bold">
              {t.blocks.viewAllFaq}
            </Link>
          </div>
        </div>
      </section>

      {/* Block 8: Blog Teaser */}
      <section className="w-full px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-6xl mb-16 text-center ${lang === 'en' ? 'en-accent-heading' : ''}`}>{t.blocks.blogTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.blogs.map((blog, i) => (
              <div key={i} className="bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] p-8 flex flex-col justify-between min-h-[300px]">
                <div className="flex flex-col gap-4">
                  <span className="text-[#FFD700] text-sm tracking-widest uppercase font-bold">{blog.date}</span>
                  <h3 className={`text-2xl font-bold ${lang === 'en' ? 'en-accent-heading' : ''}`}>{blog.title}</h3>
                  <p className="text-white/80">{blog.desc}</p>
                </div>
                <Link href="/blog" className="mt-8 text-white hover:text-[#FFD700] font-bold no-underline">
                  {lang === 'ar' ? 'اقرأ القصة →' : 'Read Story →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 6: Food Safety */}
      <section className="w-full px-6 mb-32">
        <div className="max-w-5xl mx-auto text-center bg-black/20 backdrop-blur-xl border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-[40px] p-12 md:p-16">
          <h2 className={`text-4xl md:text-6xl mb-8 ${lang === 'en' ? 'en-accent-heading' : ''}`}>{t.blocks.safetyTitle}</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">{t.blocks.safetyDesc}</p>
          <Link href="/legal/food-safety" className="btn-secondary bg-black/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-full text-lg px-10 py-4 font-bold">{t.blocks.readMore}</Link>
        </div>
      </section>
    </div>
  );
}