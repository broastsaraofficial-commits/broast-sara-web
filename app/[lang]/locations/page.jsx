import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Broast Sara Locations | Madinah & Yanbu" : "فروع بروست سارة في المدينة المنورة وينبع",
    description: isEn ? "Find a Broast Sara restaurant near you in Madinah. View driving directions, opening hours, and contact numbers for all 8 fresh local chicken branches." : "ابحث عن أقرب فرع لمطاعم بروست سارة في المدينة المنورة وينبع. تابع أوقات العمل، اتجاهات الخريطة، وأرقام التواصل المباشرة لطلب البروست الطازج والشاورما.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/locations` }
  };
}

const dict = {
  ar: {
    title: "فروعنا في المدينة المنورة",
    ratingText: "تقييم",
    openNow: "مفتوح الآن",
    closedNow: "مغلق الآن",
    orderBtn: "طلب عبر الواتساب",
    hsBtn: "هنقرستيشن",
    pageBtn: "خريطة الفرع"
  },
  en: {
    title: "Our Locations in Madinah",
    ratingText: "reviews",
    openNow: "Open Now",
    closedNow: "Closed Now",
    orderBtn: "Order via WhatsApp",
    hsBtn: "HungerStation",
    pageBtn: "View Branch Map"
  }
};

const branchData = [
  { slug: "al-aziziyyah", phone: "0596624929", hours: "12:30 PM - 3:30 PM, 6:30 PM - 3:30 AM", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370", ar: { name: "الدعيثة", address: "ساكمة بن ابي سلمة، العزيزية، المدينة المنورة 42376" }, en: { name: "Al Daheetha", address: "Sakmah Ibn Abi Salamah, Al Aziziyyah, Madinah 42376" } },
  { slug: "al-hijrah", phone: "0553793829", hours: "12:30 PM - 2:30 AM", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-jabirah/112366", ar: { name: "الهجرة", address: "شارع الأمير سلطان بن عبدالعزيز، الهجرة، المدينة المنورة 42392" }, en: { name: "Al Hijrah", address: "Prince Sultan Ibn Abd Al Aziz Rd, Al Hijrah, Madinah 42392" } },
  { slug: "imam-bukhari", phone: "0533107787", hours: "6:30 PM - 4:00 AM", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-defaa/112370", ar: { name: "الإمام البخاري", address: "الإمام البخاري، الضيافة، المدينة المنورة 42374" }, en: { name: "Imam Bukhari", address: "Al Imam Al Boukhari, Ad Difa, Madinah 42374" } },
  { slug: "hil-bahr", phone: "0533002270", hours: "12:30 PM - 3:00 AM", hsLink: null, ar: { name: "حي البحر", address: "الإمام أحمد بن حنبل، الجمعة، المدينة المنورة 42316" }, en: { name: "Hil Bahr", address: "Imam Ahmad ibn Hanbal, Al Jumuah, Madinah 42316" } },
  { slug: "aljwazat", phone: "0540414841", hours: "12:30 PM - 4:00 AM", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~ar-rawabi~112364", ar: { name: "الجوازات", address: "7759 محمد بن أحمد بن أبي الصقر، الروابي، المدينة المنورة 42381" }, en: { name: "Aljwazat", address: "7759 Muhammad Bin Ahmad Bin Abi Al Saqr, Ar Rawabi, Madinah 42381" } },
  { slug: "al-juruf", phone: "0551624234", hours: "7:30 PM - 3:00 AM", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~al-zahra~112366", ar: { name: "الجرف", address: "طريق الأمير نايف بن عبدالعزيز، الزهرة، المدينة المنورة 42334" }, en: { name: "Al Juruf", address: "Prince Naif Ibn Abdulaziz Rd, Az Zahrah, Madinah 42334" } },
  { slug: "yanbu", phone: "0500978585", hours: "11:00 AM - 4:00 AM", hsLink: "https://hungerstation.com/sa-en/restaurant/yanbu/al-hawra/112657", ar: { name: "ينبع", address: "عمر بن الخطاب، العمارة، ينبع 46421" }, en: { name: "Yanbu", address: "Omar Bin Al Khattab, Al Amarah, Yanbu 46421" } },
  { slug: "abiar-al-mashi", phone: "0530957742", hours: "24 Hours", hsLink: null, ar: { name: "أبيار الماشي", address: "DRJA6418، 5804، حي أبيار الماشي، المدينة المنورة 42542" }, en: { name: "Abiar Al Mashi", address: "DRJA6418, 5804, Abiar Al Mashi, Madinah 42542" } }
];

// Parses a single "h:mm AM/PM - h:mm AM/PM" range into minutes-from-midnight.
// Handles overnight ranges (end time earlier than start time, e.g. 6:30 PM - 4:00 AM)
// by treating the end time as falling on the next day.
const parseRange = (rangeStr) => {
  const [startStr, endStr] = rangeStr.split("-").map(s => s.trim());

  const toMinutes = (timeStr) => {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return null;
    let [, h, m, period] = match;
    h = parseInt(h, 10);
    m = parseInt(m, 10);
    if (period.toUpperCase() === "PM" && h !== 12) h += 12;
    if (period.toUpperCase() === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };

  const start = toMinutes(startStr);
  const end = toMinutes(endStr);
  if (start === null || end === null) return null;

  return { start, end };
};

// Splits an hours string on commas to support branches with multiple
// daily windows (e.g. Al Daheetha's "12:30 PM - 3:30 PM, 6:30 PM - 3:30 AM"),
// then checks the current Saudi time against every window.
const checkIsOpen = (hoursStr) => {
  if (!hoursStr) return false;
  if (hoursStr.trim().toLowerCase() === "24 hours") return true;

  const saudiTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" });
  const now = new Date(saudiTime);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const ranges = hoursStr.split(",").map(r => parseRange(r)).filter(Boolean);

  return ranges.some(({ start, end }) => {
    if (start <= end) {
      // Same-day window, e.g. 12:30 PM - 3:30 PM
      return currentMinutes >= start && currentMinutes < end;
    }
    // Overnight window, e.g. 6:30 PM - 4:00 AM
    return currentMinutes >= start || currentMinutes < end;
  });
};

export default async function LocationsIndexPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

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
    <div className="w-full pt-40 pb-32 px-0" dir={isEn ? "ltr" : "rtl"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-16 text-white font-bold font-instrument px-6 md:px-0">
          {t.title}
        </h1>

        <div className="flex flex-col gap-10">
          {branchData.map((branch, i) => {
            const b = isEn ? branch.en : branch.ar;
            const isOpen = checkIsOpen(branch.hours);

            return (
              <section key={i} className="liquid-glass p-10 flex flex-col justify-between items-start text-left">
                <div className="w-full">

                  <h2 className="text-4xl font-bold mb-4 text-white font-instrument text-start">
                    {isEn ? (
                      <>Broast Sara <br className="md:hidden" /> {b.name}</>
                    ) : (
                      <>بروست سارة <br className="md:hidden" /> {b.name}</>
                    )}
                  </h2>

                  <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6 text-lg text-white mb-8 font-helvetica tracking-[-0.05em]">
                    <span className={`${isOpen ? 'text-[#25D366]' : 'text-[#FFD700]'} font-bold`}>
                      {isOpen ? t.openNow : t.closedNow}
                    </span>
                    <span className="hidden md:inline">•</span>
                    <span dir="ltr">{branch.hours}</span>
                  </div>

                  <p className="text-xl text-white leading-relaxed mb-10 max-w-2xl font-helvetica tracking-[-0.05em] text-start">
                    {b.address}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-4 items-center">
                  <Link href={isEn ? `/en/locations/${branch.slug}` : `/ar/locations/${branch.slug}`} className="btn-secondary w-full md:w-auto px-8 py-4 text-lg no-underline text-white font-helvetica tracking-[-0.05em] font-normal flex-1 text-center">
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