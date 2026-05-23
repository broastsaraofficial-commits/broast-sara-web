import Link from "next/link";

// 1. UNIQUE METADATA: Fully bilingual
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
    subtitle: "اختر الفرع الأقرب إليك للطلب والاستلام أو التوصيل",
    menuBtn: "عرض قائمة الطعام",
    hsBtn: "هنقرستيشن",
    waBtn: "طلب واتساب"
  },
  en: {
    title: "Order Now",
    subtitle: "Choose your nearest branch for delivery or pickup",
    menuBtn: "View Menu",
    hsBtn: "HungerStation",
    waBtn: "WhatsApp Order"
  }
};

const branchData = [
  { slug: "al-aziziyyah", phone: "0596624929", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370", ar: { name: "العزيزية" }, en: { name: "Al Aziziyyah" } },
  { slug: "al-hijrah", phone: "0553793829", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-jabirah/112366", ar: { name: "الهجرة" }, en: { name: "Al Hijrah" } },
  { slug: "imam-bukhari", phone: "0533107787", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-defaa/112370", ar: { name: "الإمام البخاري" }, en: { name: "Imam Bukhari" } },
  { slug: "hil-bahr", phone: "0533002270", hsLink: null, ar: { name: "حي البحر" }, en: { name: "Hil Bahr" } },
  { slug: "aljwazat", phone: "0540414841", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~ar-rawabi~112364", ar: { name: "الجوازات" }, en: { name: "Aljwazat" } },
  { slug: "al-juruf", phone: "0551624234", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~al-zahra~112366", ar: { name: "الجرف" }, en: { name: "Al Juruf" } },
  { slug: "yanbu", phone: "0500978585", hsLink: "https://hungerstation.com/sa-en/restaurant/yanbu/al-hawra/112657", ar: { name: "ينبع" }, en: { name: "Yanbu" } },
  { slug: "abiar-al-mashi", phone: "0530957742", hsLink: null, ar: { name: "أبيار الماشي" }, en: { name: "Abiar Al Mashi" } }
];

export default async function OrderPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  // 3. STRUCTURED DATA FOR AI SEARCH (Section G2)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isEn ? "Order Broast Sara" : "اطلب بروست سارة",
    "description": isEn ? "Ordering and delivery platform for Broast Sara in Madinah." : "منصة الطلب والتوصيل لبروست سارة في المدينة المنورة."
  };

  return (
    // 4. LTR/RTL & TYPOGRAPHY STACK
    <main className="min-h-screen pt-40 pb-24 px-6 relative z-10 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl mb-6 font-bold text-white font-instrument">
            {t.title}
          </h1>
          {/* MODIFIED: Removed opacity-80 to make it pure white */}
          <p className="text-xl md:text-2xl text-white font-normal font-helvetica tracking-[-0.05em]">
            {t.subtitle}
          </p>
        </header>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {branchData.map((branch) => {
            const b = isEn ? branch.en : branch.ar;
            return (
              <div key={branch.slug} className="liquid-glass p-8 flex flex-col items-center text-center gap-6">
                <h2 className="text-2xl font-bold text-white font-instrument">
                  {isEn ? `Broast Sara ${b.name}` : `بروست سارة ${b.name}`}
                </h2>

                <div className="flex flex-col w-full gap-3 mt-auto">
                  {/* 1. VIEW MENU */}
                  <Link href={`/${lang}/menu`} className="w-full py-3 rounded-full bg-white/10 text-white font-normal hover:bg-white/20 transition-all border border-white/20 font-helvetica tracking-[-0.05em] no-underline">
                    {t.menuBtn}
                  </Link>

                  {/* 2. HUNGERSTATION (Conditional) */}
                  {/* MODIFIED: Changed font-bold to font-normal */}
                  {branch.hsLink && (
                    <a href={branch.hsLink} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full bg-[#FFD700] text-black font-normal hover:scale-105 transition-all flex items-center justify-center gap-2 font-helvetica tracking-[-0.05em] no-underline">
                      {t.hsBtn}
                    </a>
                  )}

                  {/* 3. WHATSAPP */}
                  <a href={`https://wa.me/966${branch.phone.substring(1)}`} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-full bg-[#25D366] text-white font-normal hover:scale-105 transition-all font-helvetica tracking-[-0.05em] no-underline">
                    {t.waBtn}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}