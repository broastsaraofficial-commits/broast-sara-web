"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function OrderPage() {
  const { lang } = useLanguage();
  
  const hungerStationLink = "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370";
  const yangoLink = "https://yango.com";

  const t = {
    ar: {
      title: "اطلب الآن",
      subtitle: "اختر منصة التوصيل المفضلة لديك واستمتع بأفضل بروست في المدينة",
      hunger: "هنقرستيشن",
      hungerSub: "توصيل مباشر وسريع من فروعنا",
      yango: "يانغو ديليفري",
      yangoSub: "خدمة يانغو المتميزة في المدينة",
      orderBtn: "اطلب الآن أون لاين"
    },
    en: {
      title: "Order Now",
      subtitle: "Choose your favorite delivery platform and enjoy the best broast in town",
      hunger: "HungerStation",
      hungerSub: "Direct and fast delivery from our branches",
      yango: "Yango Delivery",
      yangoSub: "Premium Yango service in Madinah",
      orderBtn: "Order Online Now"
    }
  }[lang];

  return (
    <main className="min-h-screen pt-40 pb-24 px-6 relative z-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <header className="text-center mb-24 animate-premium-in">
          <h1 className={`mb-6 tracking-tighter ${lang === 'en' ? 'text-6xl md:text-9xl en-accent-heading' : 'text-6xl md:text-9xl'}`}>
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white font-normal opacity-80">
            {t.subtitle}
          </p>
        </header>

        <div className="w-full flex flex-col gap-12">
          {/* HungerStation Card */}
          <a 
            href={hungerStationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-12 flex flex-col items-center text-center group border-white/10 hover:bg-brand-yellow/5 transition-all duration-700"
          >
            <div className="w-[120px] h-[120px] max-w-[120px] bg-brand-yellow rounded-3xl flex items-center justify-center p-6 mb-10 shadow-2xl transition-transform duration-700 group-hover:scale-110">
              <img 
                src="/icons/hungerstation_logo.webp" 
                alt="HungerStation" 
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className={`text-4xl text-brand-yellow mb-4 ${lang === 'en' ? 'font-helvetica tracking-tighter uppercase' : ''}`}>
              {t.hunger}
            </h2>
            <p className="text-white text-xl mb-10 opacity-70">{t.hungerSub}</p>
            <span className="btn-primary text-xl px-12 py-5">
              {t.orderBtn}
            </span>
          </a>

          {/* Yango Card */}
          <a 
            href={yangoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-card p-12 flex flex-col items-center text-center group border-white/10 hover:bg-white/5 transition-all duration-700"
          >
            <div className="w-[120px] h-[120px] max-w-[120px] bg-white rounded-3xl flex items-center justify-center p-8 mb-10 shadow-2xl transition-transform duration-700 group-hover:scale-110">
               <div className="w-full h-full bg-black rounded-xl flex items-center justify-center text-white font-black text-3xl">YG</div>
            </div>
            <h2 className={`text-4xl text-white mb-4 ${lang === 'en' ? 'font-helvetica tracking-tighter uppercase' : ''}`}>
              {t.yango}
            </h2>
            <p className="text-white text-xl mb-10 opacity-70">{t.yangoSub}</p>
            <span className="btn-secondary text-xl px-12 py-5 bg-white text-black hover:bg-white/90 border-none">
              {t.orderBtn}
            </span>
          </a>
        </div>

        <div className="mt-24 text-center">
          <Link href="/locations" className="text-white hover:text-brand-yellow transition-colors text-xl font-normal border-b border-white hover:border-brand-yellow pb-2 opacity-60 hover:opacity-100">
            {lang === 'ar' ? "أو تواصل مع فروعنا مباشرة للحجز والاستلام" : "Or contact our branches directly for pickup"}
          </Link>
        </div>
      </div>
    </main>
  );
}
