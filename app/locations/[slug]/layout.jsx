export async function generateMetadata({ params }) {
  const { slug } = params;

  const branches = {
    "al-aziziyyah": { ar: "العزيزية", en: "Al Aziziyyah" },
    "al-hijrah": { ar: "الهجرة", en: "Al Hijrah" },
    "imam-bukhari": { ar: "الإمام البخاري", en: "Imam Bukhari" },
    "hil-bahr": { ar: "حي البحر", en: "Hil Bahr" },
    "aljwazat": { ar: "الجوازات", en: "Aljwazat" },
    "al-juruf": { ar: "الجرف", en: "Al Juruf" },
    "yanbu": { ar: "ينبع", en: "Yanbu" },
    "abiar-al-mashi": { ar: "أبيار الماشي", en: "Abiar Al Mashi" }
  };

  const branch = branches[slug] || { ar: "المدينة المنورة", en: "Madinah" };

  return {
    title: `فرع ${branch.ar} | بروست سارة`,
    description: `اطلب الآن من بروست سارة فرع ${branch.ar}. نقدم أفضل بروست طازج 100%، مسحب دجاج، وشاورما الصاروخ في ${branch.ar}، المدينة المنورة. خدمة سريعة وتوصيل متاح.`,
    alternates: {
      canonical: `https://broastsara.com/locations/${slug}`,
    },
  };
}

export default function BranchLayout({ children }) {
  return children;
}
