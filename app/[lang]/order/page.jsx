import Link from "next/link";

// 1. UNIQUE METADATA: Fully bilingual[cite: 3]
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Order Broast Sara Online — Delivery in Madinah" : "اطلب بروست سارة أون لاين — توصيل في المدينة المنورة وينبع",
    description: isEn ? "Order now from Broast Sara via HungerStation. Fast delivery for crispy chicken and shawarma to all Madinah neighborhoods." : "اطلب الآن من بروست سارة عبر هنقرستيشن. نوفر توصيل سريع للدجاج المقرمش والشاورما لجميع أحياء المدينة المنورة. اطلب وجبتك الساخنة الآن!",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/order` }
  };
}

// 2. BILINGUAL DICTIONARY
const dict = {
  ar: {
    title: "اطلب الآن",
    subtitle: "اختر منصة التوصيل المفضلة لديك واستمتع بأفضل بروست في المدينة",
    hungerStation: {
      name: "هنقرستيشن",
      sub: "توصيل مباشر وسريع من فروعنا",
      btn: "اطلب الآن أون لاين"
    },
    whatsapp: {
      name: "طلب مباشر عبر الواتساب",
      sub: "للحجز المسبق والاستلام من الفرع",
      linkText: "عرض جميع أرقام الفروع ←"
    }
  },
  en: {
    title: "Order Now",
    subtitle: "Choose your preferred delivery platform and enjoy the best broast in the city",
    hungerStation: {
      name: "HungerStation",
      sub: "Direct and fast delivery from our branches",
      btn: "Order Now Online"
    },
    whatsapp: {
      name: "Direct Order via WhatsApp",
      sub: "For pre-booking and branch pickup",
      linkText: "View all branch numbers →"
    }
  }
};

export default async function OrderPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  // 3. STRUCTURED DATA FOR AI SEARCH (Section G2)[cite: 3]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isEn ? "Order Broast Sara" : "اطلب بروست سارة",
    "description": isEn ? "Ordering and delivery platform for Broast Sara in Madinah." : "منصة الطلب والتوصيل لبروست سارة في المدينة المنورة.",
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
      }
    }
  };

  return (
    // 4. LTR/RTL & TYPOGRAPHY STACK
    <main className="min-h-screen pt-40 pb-24 px-6 relative z-10 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <header className="text-center mb-24">
          <h1 className="text-6xl md:text-9xl mb-6 font-bold text-white font-instrument">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white font-normal opacity-80 font-helvetica tracking-[-0.05em]">
            {t.subtitle}
          </p>
        </header>

        <div className="w-full flex flex-col gap-12">

          {/* HungerStation Option (Liquid Glass Applied) */}
          <a
            href="https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass p-12 flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-700 no-underline"
          >
            <div className="w-[120px] h-[120px] bg-[#FFD700] rounded-3xl flex items-center justify-center p-6 mb-10 shadow-2xl transition-transform duration-700 group-hover:scale-110">
              <img src="/icons/hungerstation_logo.webp" alt="HungerStation" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-4xl text-[#FFD700] mb-4 font-bold font-instrument">
              {t.hungerStation.name}
            </h2>
            <p className="text-white text-xl mb-10 opacity-80">{t.hungerStation.sub}</p>
            <span className="bg-[#E31837] text-white font-normal text-xl py-4 px-12 rounded-full shadow-[0_0_20px_rgba(227,24,55,0.5)] transition-transform group-hover:scale-105">
              {t.hungerStation.btn}
            </span>
          </a>

          {/* Direct WhatsApp Section (Replaced generic phone with iOS WhatsApp SVG) */}
          <Link
            href={isEn ? "/en/locations" : "/locations"}
            className="liquid-glass p-12 flex flex-col items-center text-center group hover:bg-[#25D366]/10 transition-all duration-700 no-underline"
          >
            <div className="w-[100px] h-[100px] bg-[#25D366] rounded-full flex items-center justify-center mb-8 shadow-lg transition-transform duration-700 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-5.504-4.484-9.985-9.993-9.985zm0 18.33h-.003a8.318 8.318 0 01-4.238-1.157l-.304-.18-3.147.825.84-3.07-.197-.314a8.335 8.335 0 01-1.272-4.422c0-4.582 3.73-8.314 8.324-8.314 4.588 0 8.315 3.732 8.315 8.314-.004 4.59-3.733 8.318-8.318 8.318zm4.561-6.233c-.25-.125-1.477-.728-1.706-.811-.23-.083-.396-.125-.563.125-.167.25-.646-.811-.792.977-.146.166-.293.187-.543.063-.25-.125-1.054-.388-2.008-1.242-.743-.665-1.243-1.488-1.39-1.738-.146-.25-.015-.385.11-.51.112-.112.25-.292.375-.438.126-.146.167-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.563-1.354-.771-1.854-.203-.49-.408-.424-.563-.432-.146-.008-.312-.008-.479-.008a.916.916 0 00-.667.312c-.23.25-.875.854-.875 2.083 0 1.23.896 2.417 1.021 2.583.125.167 1.76 2.688 4.267 3.771.597.258 1.062.412 1.425.527.599.192 1.144.164 1.573.1.482-.073 1.477-.604 1.686-1.188.208-.583.208-1.083.146-1.188-.063-.105-.23-.167-.48-.292z" />
              </svg>
            </div>
            <h2 className="text-3xl text-[#25D366] mb-4 font-bold font-instrument">{t.whatsapp.name}</h2>
            <p className="text-white/80 text-lg mb-8">{t.whatsapp.sub}</p>
            <span className="text-[#FFD700] font-bold text-xl hover:text-white transition-colors">
              {t.whatsapp.linkText}
            </span>
          </Link>

        </div>
      </div>
    </main>
  );
}