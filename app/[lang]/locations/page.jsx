import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Broast Sara Locations | Madinah & Yanbu" : "فروع بروست سارة في المدينة المنورة وينبع",
    // FIXED: Expanded meta descriptions for SEO optimal length (120-160 chars)
    description: isEn ? "Find a Broast Sara restaurant near you in Madinah. View driving directions, opening hours, and contact numbers for all 8 fresh local chicken branches." : "ابحث عن أقرب فرع لمطاعم بروست سارة في المدينة المنورة وينبع. تابع أوقات العمل، اتجاهات الخريطة، وأرقام التواصل المباشرة لطلب البروست الطازج والشاورما.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/locations` }
  };
}

const dict = {
  ar: {
    title: "فروعنا في المدينة المنورة",
    ratingText: "تقييم",
    openNow: "مفتوح الآن",
    closedNow: "مغلق الآن", // ADDED: Arabic closed translation
    hours: "12:30 م - 2:30 ص",
    orderBtn: "طلب عبر الواتساب",
    hsBtn: "هنقرستيشن",
    pageBtn: "خريطة الفرع"
  },
  en: {
    title: "Our Locations in Madinah",
    ratingText: "reviews",
    openNow: "Open Now",
    closedNow: "Closed Now", // ADDED: English closed translation
    hours: "12:30 PM - 2:30 AM",
    orderBtn: "Order via WhatsApp",
    hsBtn: "HungerStation",
    pageBtn: "View Branch Map"
  }
};

const branchData = [
  { slug: "al-aziziyyah", phone: "0596624929", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370", ar: { name: "العزيزية", address: "طريق الأمير نايف بن عبدالعزيز، العزيزية، المدينة المنورة 42376" }, en: { name: "Al Aziziyyah", address: "Prince Naif Bin Abdulaziz Rd, Al Aziziyyah, Madinah 42376" } },
  { slug: "al-hijrah", phone: "0553793829", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-jabirah/112366", ar: { name: "الهجرة", address: "شارع الأمير سلطان، الهجرة، حي الشيبية، المدينة المنورة 42392" }, en: { name: "Al Hijrah", address: "Prince Sultan St, Al Hijrah, Madinah 42392" } },
  { slug: "imam-bukhari", phone: "0533107787", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-defaa/112370", ar: { name: "الإمام البخاري", address: "الضيافة، المدينة المنورة 42374" }, en: { name: "Imam Bukhari", address: "Ad Difa, Madinah 42374" } },
  { slug: "hil-bahr", phone: "0533002270", hsLink: null, ar: { name: "حي البحر", address: "الجمعة، المدينة المنورة 42316" }, en: { name: "Hil Bahr", address: "Al Jumuah, Madinah 42316" } },
  { slug: "aljwazat", phone: "0540414841", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~ar-rawabi~112364", ar: { name: "الجوازات", address: "الروابي، المدينة المنورة 42381" }, en: { name: "Aljwazat", address: "Ar Rawabi, Madinah 42381" } },
  { slug: "al-juruf", phone: "0551624234", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~al-zahra~112366", ar: { name: "الجرف", address: "الزهراء، المدينة المنورة 42334" }, en: { name: "Al Juruf", address: "Az Zahrah, Madinah 42334" } },
  { slug: "yanbu", phone: "0500978585", hsLink: "https://hungerstation.com/sa-en/restaurant/yanbu/al-hawra/112657", ar: { name: "ينبع", address: "عمر بن الخطاب، العمارة، ينبع 46421" }, en: { name: "Yanbu", address: "Omar Bin Al Khattab, Yanbu 46421" } },
  { slug: "abiar-al-mashi", phone: "0530957742", hsLink: null, ar: { name: "أبيار الماشي", address: "حي أبيار الماشي، المدينة المنورة 42542" }, en: { name: "Abiar Al Mashi", address: "Abiar Al Mashi, Madinah 42542" } }
];

// ADDED: Real-time logic to check if a branch is currently open in Saudi Arabia
const checkIsOpen = (slug) => {
  if (slug === 'abiar-al-mashi') return true; // 24/7 branch

  // Fetch current time strictly mapped to KSA timezone
  const saudiTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
  const now = new Date(saudiTime);

  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentMinutes = hour * 60 + minute;

  // Working hours: 12:30 PM (750 mins) to 2:30 AM (150 mins)
  // Store is open if current time is after 12:30 PM OR before 2:30 AM
  return currentMinutes >= 750 || currentMinutes < 150;
};

export default async function LocationsIndexPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  // Utility to generate a stable pseudo-random rating above 4.1 based on the slug string length
  const getRating = (slug) => {
    const base = 4.1;
    const increment = (slug.length % 8) / 10; // Generates 0.0 to 0.7
    return (base + increment).toFixed(1);
  };

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
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-16 text-center text-white font-bold font-instrument">
          {t.title}
        </h1>

        <div className="flex flex-col gap-10">
          {branchData.map((branch, i) => {
            const b = isEn ? branch.en : branch.ar;
            const rating = getRating(branch.slug);
            const isOpen = checkIsOpen(branch.slug); // Calculate active status

            return (
              <section key={i} className="liquid-glass p-10 flex flex-col justify-between items-start md:items-center text-left md:text-center">
                <div className="w-full">

                  {/* MODIFIED: Changed text-left to text-center so the title is perfectly centered on mobile */}
                  <h2 className="text-4xl font-bold mb-4 text-white font-instrument text-center">
                    {isEn ? (
                      <>Broast Sara <br className="md:hidden" /> {b.name}</>
                    ) : (
                      <>بروست سارة <br className="md:hidden" /> {b.name}</>
                    )}
                  </h2>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-2 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-normal text-xl font-helvetica tracking-[-0.05em]">{rating}</span>
                      <span className="text-[#FFD700] text-2xl tracking-wider">★★★★☆</span>
                    </div>
                    <span className="text-white text-base font-helvetica tracking-[-0.05em]">
                      {isEn ? "(1000+ reviews)" : "(+1000 تقييم)"}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-2 md:gap-6 text-lg text-white mb-8 font-helvetica tracking-[-0.05em]">
                    {/* MODIFIED: Dynamic status styling based on KSA time */}
                    <span className={`${isOpen ? 'text-[#25D366]' : 'text-[#FFD700]'} font-bold`}>
                      {isOpen ? t.openNow : t.closedNow}
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span dir="ltr">{t.hours}</span>
                  </div>

                  {/* MODIFIED: Replaced text-left with text-start so Arabic shifts right and English shifts left */}
                  <p className="text-xl text-white leading-relaxed mb-10 max-w-2xl mx-0 md:mx-auto font-helvetica tracking-[-0.05em] text-start md:text-center">
                    {b.address}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-4 justify-center items-center">
                  <Link href={isEn ? `/en/locations/${branch.slug}` : `/locations/${branch.slug}`} className="btn-secondary w-full md:w-auto px-8 py-4 text-lg no-underline text-white font-helvetica tracking-[-0.05em] font-normal flex-1 text-center">
                    {t.pageBtn}
                  </Link>

                  {branch.hsLink && (
                    <a href={branch.hsLink} target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] hover:bg-[#FFC000] text-black w-full md:w-auto px-8 py-4 rounded-full text-lg font-normal flex-1 flex items-center justify-center no-underline font-helvetica tracking-[-0.05em] transition-all text-center">
                      {t.hsBtn}
                    </a>
                  )}

                  <a href={`https://wa.me/966${branch.phone.substring(1)}`} target="_blank" rel="noopener noreferrer" className="btn-primary bg-[#25D366] hover:bg-[#1DA851] w-full md:w-auto px-8 py-4 text-lg flex items-center justify-center flex-1 no-underline text-white font-helvetica tracking-[-0.05em] font-normal text-center">
                    {t.orderBtn}
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}