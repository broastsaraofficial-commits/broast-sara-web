"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationsIndexPage() {
  const { lang } = useLanguage();

  const branches = [
    { slug: "al-aziziyyah", ar: "العزيزية", en: "Al Aziziyyah", phone: "0596624929", addressAr: "طريق الأمير نايف بن عبدالعزيز، العزيزية، المدينة المنورة 42376", addressEn: "Prince Nayef Bin Abdul Aziz Rd, Al Aziziyyah, Madinah 42376" },
    { slug: "al-hijrah", ar: "الهجرة", en: "Al Hijrah", phone: "0553793829", addressAr: "شارع الأمير سلطان، الهجرة، حي الشيبية، المدينة المنورة 42392", addressEn: "Prince Sultan St, Al Hijrah, Madinah 42392" },
    { slug: "imam-bukhari", ar: "الإمام البخاري", en: "Imam Bukhari", phone: "0533107787", addressAr: "الضيافة، المدينة المنورة 42374", addressEn: "Al Imam Al Boukhari, Ad Difa, Madinah 42374" },
    { slug: "hil-bahr", ar: "حي البحر", en: "Hil Bahr", phone: "0533002270", addressAr: "الجمعة، المدينة المنورة 42316", addressEn: "Jaber Ibn Atik, Al Jumuah, Madinah 42316" },
    { slug: "aljwazat", ar: "الجوازات", en: "Aljwazat", phone: "0540414841", addressAr: "الروابي، المدينة المنورة 42381", addressEn: "Ar Rawabi, Madinah 42381" },
    { slug: "al-juruf", ar: "الجرف", en: "Al Juruf", phone: "0551624234", addressAr: "الزهراء، المدينة المنورة 42334", addressEn: "Az Zahrah, Madinah 42334" },
    { slug: "yanbu", ar: "ينبع", en: "Yanbu", phone: "0500978585", addressAr: "عمر بن الخطاب، العمارة، ينبع 46421", addressEn: "Omar Bin Al Khattab, Al Amarah, Yanbu 46421" },
    { slug: "abiar-al-mashi", ar: "أبيار الماشي", en: "Abiar Al Mashi", phone: "0530957742", addressAr: "حي أبيار الماشي، المدينة المنورة 42542", addressEn: "Abiar Al Mashi, Madinah 42542" }
  ];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-5xl md:text-7xl mb-16 text-center text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {lang === 'ar' ? "فروعنا" : "Our Locations"}
        </h1>
        
        {/* ENFORCED 1-COLUMN VERTICAL STACK */}
        <div className="flex flex-col gap-10">
          {branches.map((branch, i) => (
            <div key={i} className="premium-card p-10 flex flex-col justify-between items-center text-center">
              <div className="w-full">
                <h2 className={`text-4xl font-bold mb-4 ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                  {lang === 'ar' ? `بروست سارة ${branch.ar}` : `Broast Sara ${branch.en}`}
                </h2>
                <div className="flex items-center justify-center gap-2 text-[#FFD700] mb-6">
                  <span className="text-white font-bold text-xl">4.1</span>
                  <span className="text-2xl">★★★★☆</span>
                  <span className="text-white/70 text-base">(1,598 reviews)</span>
                </div>
                
                <div className="flex flex-col gap-4 text-white/90 mb-8">
                  <div className="flex justify-center gap-6 text-lg font-bold">
                    <span>SAR 1 - 20</span>
                    <span>•</span>
                    <span>{lang === 'ar' ? 'مطعم دجاج' : 'Chicken Restaurant'}</span>
                  </div>
                  <div className="flex justify-center gap-6 text-lg">
                    <span className="text-[#25D366] font-bold">{lang === 'ar' ? 'مفتوح الآن' : 'Open Now'}</span>
                    <span>•</span>
                    <span>{lang === 'ar' ? '12:30 م - 2:30 ص' : '12:30 PM - 2:30 AM'}</span>
                  </div>
                </div>
                
                <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                  {lang === 'ar' ? branch.addressAr : branch.addressEn}
                </p>
              </div>

              <div className="flex flex-col md:flex-row w-full gap-4 justify-center">
                <a href={`https://wa.me/966${branch.phone.substring(1)}`} target="_blank" className="btn-primary px-12 py-5 text-lg">
                  {lang === 'ar' ? 'اطلب الآن عبر الواتساب' : 'Order Now via WhatsApp'}
                </a>
                <Link href={`/locations/${branch.slug}`} className="btn-secondary liquid-glass px-12 py-5 text-lg border-none">
                  {lang === 'ar' ? 'صفحة الفرع والخريطة' : 'View Branch Page & Map'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
