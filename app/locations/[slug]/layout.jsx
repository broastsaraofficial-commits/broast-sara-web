// File: app/locations/[slug]/layout.jsx

export async function generateMetadata({ params }) {
  // 1. Await the params object (CRITICAL Next.js 15 requirement)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 2. Branch Data Dictionary
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

  const branch = branches[slug];

  // 3. Failsafe for invalid slugs to prevent 500 errors
  if (!branch) {
    return {
      title: 'فرع غير موجود | بروست سارة',
      alternates: { canonical: 'https://broastsara.com/locations' }
    };
  }

  // 4. Exact mapping to the SEO Strategy Document requirements
  return {
    title: `بروست سارة فرع ${branch.ar} | رقم الهاتف، العنوان، أوقات العمل — Broast Sara ${branch.en}`,
    description: `بروست سارة فرع ${branch.ar} في المدينة المنورة — أفضل برست وشاورما قريباً منك. عنوان الفرع، رقم الهاتف، أوقات العمل وخدمة التوصيل المتاحة. اتصل الآن أو اطلب أون لاين.`,
    alternates: {
      canonical: `https://broastsara.com/locations/${slug}`,
    },
    openGraph: {
      title: `بروست سارة فرع ${branch.ar}`,
      url: `https://broastsara.com/locations/${slug}`,
    }
  };
}

export default function LocationLayout({ children }) {
  return <>{children}</>;
}