"use client";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function BranchPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const slug = params?.slug;

  const branches = {
    "al-aziziyyah": { ar: "العزيزية", en: "Al Aziziyyah", phone: "0596624929", addressAr: "حي العزيزية، المدينة المنورة", addressEn: "Al Aziziyyah, Madinah 42376" },
    "al-hijrah": { ar: "الهجرة", en: "Al Hijrah", phone: "0553793829", addressAr: "شارع الأمير سلطان، الهجرة، حي الشيبية", addressEn: "Prince Sultan Street, Al Hijrah, Madinah 42392" },
    "imam-bukhari": { ar: "الإمام البخاري", en: "Imam Bukhari", phone: "0533107787", addressAr: "الضيافة، المدينة المنورة", addressEn: "Al Imam Al Boukhari, Ad Difa, Madinah 42374" },
    "hil-bahr": { ar: "حي البحر", en: "Hil Bahr", phone: "0533002270", addressAr: "الجمعة، المدينة المنورة", addressEn: "Jaber Ibn Atik, Al Jumuah, Madinah 42316" },
    "aljwazat": { ar: "الجوازات", en: "Aljwazat", phone: "0540414841", addressAr: "الروابي، المدينة المنورة", addressEn: "Ar Rawabi, Madinah 42381" },
    "al-juruf": { ar: "الجرف", en: "Al Juruf", phone: "0551624234", addressAr: "الزهراء، المدينة المنورة", addressEn: "Az Zahrah, Madinah 42334" },
    "yanbu": { ar: "ينبع", en: "Yanbu", phone: "0500978585", addressAr: "عمر بن الخطاب، العمارة، ينبع", addressEn: "Omar Bin Al Khattab, Al Amarah, Yanbu 46421" },
    "abiar-al-mashi": { ar: "أبيار الماشي", en: "Abiar Al Mashi", phone: "0530957742", addressAr: "حي أبيار الماشي، المدينة المنورة", addressEn: "Abiar Al Mashi, Madinah 42542" }
  };

  const branch = branches[slug] || branches["al-aziziyyah"];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-5xl mx-auto premium-card p-12 md:p-16 text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
        <h1 className={`text-4xl md:text-6xl mb-8 text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {lang === 'ar' ? `بروست سارة — فرع ${branch.ar}` : `Broast Sara — ${branch.en} Branch`}
        </h1>
        
        <div className="flex flex-col gap-6 text-xl mb-12">
          <p className="text-white">📍 {lang === 'ar' ? branch.addressAr : branch.addressEn}</p>
          <p className="text-white">📞 +966 {branch.phone.substring(1)}</p>
          <p className="text-white">🕒 {lang === 'ar' ? 'يومياً: 12:30 م - 2:30 ص' : 'Daily: 12:30 PM - 2:30 AM'}</p>
        </div>

        <div className="w-full h-80 rounded-3xl overflow-hidden mb-12 border border-white/20">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${encodeURIComponent('Broast Sara ' + branch.addressEn)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start border-t border-white/20 pt-10">
          <a href={`https://wa.me/966${branch.phone.substring(1)}`} target="_blank" className="btn-primary">
             {lang === 'ar' ? 'اطلب عبر الواتساب' : 'Order via WhatsApp'}
          </a>
          <Link href="/menu" className="btn-secondary">
             {lang === 'ar' ? 'قائمة الطعام' : 'View Menu'}
          </Link>
        </div>
      </div>
    </div>
  );
}
