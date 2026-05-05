import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Broast Sara Locations | Madinah & Yanbu" : "فروع بروست سارة في المدينة المنورة وينبع",
    description: isEn ? "Discover all 8 Broast Sara locations in Madinah and Yanbu." : "اكتشف جميع فروع بروست سارة الثمانية في المدينة المنورة وينبع.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/locations` }
  };
}

const dict = {
  ar: {
    title: "فروعنا في المدينة المنورة",
    ratingText: "تقييم",
    openNow: "مفتوح الآن",
    hours: "12:30 م - 2:30 ص",
    orderBtn: "اطلب الآن عبر الواتساب",
    pageBtn: "صفحة الفرع والخريطة"
  },
  en: {
    title: "Our Locations in Madinah",
    ratingText: "reviews",
    openNow: "Open Now",
    hours: "12:30 PM - 2:30 AM",
    orderBtn: "Order Now via WhatsApp",
    pageBtn: "View Branch Map"
  }
};

const branchData = [
  { slug: "al-aziziyyah", phone: "0596624929", ar: { name: "العزيزية", address: "طريق الأمير نايف بن عبدالعزيز، العزيزية، المدينة المنورة 42376" }, en: { name: "Al Aziziyyah", address: "Prince Naif Bin Abdulaziz Rd, Al Aziziyyah, Madinah 42376" } },
  { slug: "al-hijrah", phone: "0553793829", ar: { name: "الهجرة", address: "شارع الأمير سلطان، الهجرة، حي الشيبية، المدينة المنورة 42392" }, en: { name: "Al Hijrah", address: "Prince Sultan St, Al Hijrah, Madinah 42392" } },
  { slug: "imam-bukhari", phone: "0533107787", ar: { name: "الإمام البخاري", address: "الضيافة، المدينة المنورة 42374" }, en: { name: "Imam Bukhari", address: "Ad Difa, Madinah 42374" } },
  { slug: "hil-bahr", phone: "0533002270", ar: { name: "حي البحر", address: "الجمعة، المدينة المنورة 42316" }, en: { name: "Hil Bahr", address: "Al Jumuah, Madinah 42316" } },
  { slug: "aljwazat", phone: "0540414841", ar: { name: "الجوازات", address: "الروابي، المدينة المنورة 42381" }, en: { name: "Aljwazat", address: "Ar Rawabi, Madinah 42381" } },
  { slug: "al-juruf", phone: "0551624234", ar: { name: "الجرف", address: "الزهراء، المدينة المنورة 42334" }, en: { name: "Al Juruf", address: "Az Zahrah, Madinah 42334" } },
  { slug: "yanbu", phone: "0500978585", ar: { name: "ينبع", address: "عمر بن الخطاب، العمارة، ينبع 46421" }, en: { name: "Yanbu", address: "Omar Bin Al Khattab, Yanbu 46421" } },
  { slug: "abiar-al-mashi", phone: "0530957742", ar: { name: "أبيار الماشي", address: "حي أبيار الماشي، المدينة المنورة 42542" }, en: { name: "Abiar Al Mashi", address: "Abiar Al Mashi, Madinah 42542" } }
];

export default async function LocationsIndexPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  // AI & Local Search Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": branchData.map((branch, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Restaurant",
        "name": isEn ? `Broast Sara ${branch.en.name}` : `بروست سارة فرع ${branch.ar.name}`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": isEn ? branch.en.address : branch.ar.address,
          "addressLocality": "Madinah",
          "addressCountry": "SA"
        },
        "telephone": branch.phone,
        "url": `https://broastsara.com/${lang}/locations/${branch.slug}`
      }
    }))
  };

  return (
    <div className="w-full pt-40 pb-32 px-6" dir={isEn ? "ltr" : "rtl"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-16 text-center text-white font-bold font-instrument">
          {t.title}
        </h1>

        <div className="flex flex-col gap-10">
          {branchData.map((branch, i) => {
            const b = isEn ? branch.en : branch.ar;
            return (
              <section key={i} className="liquid-glass p-10 flex flex-col justify-between items-center text-center">
                <div className="w-full">
                  <h2 className="text-4xl font-bold mb-4 text-white font-instrument">
                    {isEn ? `Broast Sara ${b.name}` : `بروست سارة ${b.name}`}
                  </h2>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-white font-bold text-xl font-helvetica tracking-[-0.05em]">4.1</span>
                    <span className="text-[#FFD700] text-2xl tracking-wider">★★★★☆</span>
                    <span className="text-white/70 text-base font-helvetica tracking-[-0.05em]">(1,598 {t.ratingText})</span>
                  </div>

                  <div className="flex justify-center gap-6 text-lg text-white mb-8 font-helvetica tracking-[-0.05em]">
                    <span className="text-[#25D366] font-bold">{t.openNow}</span>
                    <span>•</span>
                    <span dir="ltr">{t.hours}</span>
                  </div>

                  <p className="text-xl text-white leading-relaxed mb-10 max-w-2xl mx-auto font-helvetica tracking-[-0.05em]">
                    {b.address}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-4 justify-center">
                  <a href={`https://wa.me/966${branch.phone.substring(1)}`} target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#971111] hover:bg-[#971111]/80 px-8 py-5 text-lg flex items-center justify-center gap-3 no-underline text-white font-helvetica tracking-[-0.05em] font-normal">
                    {t.orderBtn}
                  </a>
                  <Link href={isEn ? `/en/locations/${branch.slug}` : `/locations/${branch.slug}`} className="btn-secondary px-8 py-5 text-lg no-underline text-white font-helvetica tracking-[-0.05em] font-normal">
                    {t.pageBtn}
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}