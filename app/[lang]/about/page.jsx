import Link from "next/link";

// 1. ADDED: Bilingual Metadata Generation (Section G2)[cite: 6]
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "About Us — The Broast Sara Story | Madinah" : "من نحن — قصة بروست سارة في المدينة المنورة | About Us",
    description: isEn ? "Discover the story of Broast Sara, from the heart of Madinah to excellence in serving fresh local chicken. Explore our values and commitment to quality." : "تعرف على قصة بروست سارة، من قلب المدينة المنورة إلى التميز في تقديم الدجاج المحلي الطازج. اكتشف قيمنا والتزامنا بالجودة والضيافة الأصيلة.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/about` }
  };
}

// 2. ADDED: Bilingual Dictionary
const dict = {
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "قصتنا — بروست سارة",
    sections: [
      {
        h2: "من قلب المدينة",
        p: "بدأت رحلتنا في قلب المدينة المنورة، حاملين سراً واحداً: تقديم البروست كما يجب أن يكون. لم نكن نبحث فقط عن وجبة سريعة؛ بل أردنا تأسيس ثقافة طعام تجمع بين الجودة المحلية الفائقة والطعم الأسطوري الذي يربط الأجيال. اليوم، بروست سارة ليس مجرد مطعم؛ إنه جزء من تراث المدينة."
      },
      {
        h2: "معايير الجودة",
        p: "التزامنا بالجودة يبدأ من المزرعة. نرفض رفضاً قاطعاً استخدام الدجاج المجمد؛ فكل قطعة دجاج في فروعنا الثمانية هي دجاج محلي طازج، يُورد ويُذبح يدوياً كل يوم وفقاً للشريعة الإسلامية. هذا الالتزام هو ما يمنح دجاجنا طراوته المميزة وقشرته الذهبية المقرمشة."
      },
      {
        h2: "نظرتنا للمستقبل",
        p: "في بروست سارة، نؤمن بأن الحفاظ على القمة يتطلب تطوراً مستمراً. نسعى لتوسيع فروعنا لخدمة عدد أكبر من محبي الدجاج المقرمش، مع الحفاظ الصارم على خلطتنا السرية ومعاييرنا العالية التي بنينا عليها اسمنا."
      }
    ],
    footerText: "اكتشف مذاقنا بنفسك في",
    branchLink: "أقرب فرع لك",
    orText: "، أو تصفح",
    menuLink: "قائمة الطعام",
    fullText: "الكاملة."
  },
  en: {
    backBtn: "← Back to Home",
    title: "Our Story — Broast Sara",
    sections: [
      {
        h2: "From the Heart of Madinah",
        p: "Our journey began in the heart of Madinah with a single goal: to serve broast exactly as it should be. We weren't just looking to offer a quick meal; we wanted to establish a food culture that combines superior local quality with a legendary taste that connects generations. Today, Broast Sara is more than just a restaurant; it is part of the city's heritage."
      },
      {
        h2: "Quality Standards",
        p: "Our commitment to quality starts at the farm. We strictly refuse the use of frozen chicken; every piece of chicken across our eight branches is fresh and local, sourced and manually slaughtered every day in accordance with Islamic Sharia. This dedication is what gives our chicken its distinct tenderness and crispy golden crust."
      },
      {
        h2: "Looking to the Future",
        p: "At Broast Sara, we believe that staying at the top requires continuous evolution. We aim to expand our branches to serve even more crispy chicken lovers, while strictly maintaining the secret blend and high standards upon which we built our name."
      }
    ],
    footerText: "Discover the taste yourself at your",
    branchLink: "nearest branch",
    orText: ", or browse the full",
    menuLink: "menu",
    fullText: "."
  }
};

export default async function AboutPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  // 3. ADDED: Organization & AboutPage Schema (Section G2)[cite: 6]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": isEn ? "Broast Sara" : "بروست سارة",
      "description": isEn ? "A leading broast chain in Madinah, relying on daily fresh local chicken." : "سلسلة مطاعم بروست رائدة في المدينة المنورة تعتمد على الدجاج المحلي الطازج يومياً.",
      "areaServed": "Madinah, Saudi Arabia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madinah",
        "addressCountry": "SA"
      }
    }
  };

  return (
    // 4. FIXED: Enforced dir="ltr" for English punctuation and applied helvetica tracking
    <div className="w-full pt-40 pb-32 px-6 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb / Back Link */}
        <Link href={isEn ? "/en" : "/"} className={`text-[#FFD700] hover:text-white transition-colors mb-8 inline-block font-bold no-underline ${isEn ? 'text-left' : 'text-right'}`}>
          {t.backBtn}
        </Link>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl mb-16 text-center text-white font-bold font-instrument">
          {t.title}
        </h1>

        <div className="flex flex-col gap-12">

          {/* 5. FIXED: Replaced premium-card with liquid-glass */}
          {t.sections.map((section, index) => (
            <section key={index} className="liquid-glass p-10 md:p-16 flex flex-col gap-6 text-center md:text-start">
              <h2 className="text-3xl md:text-4xl text-[#FFD700] font-bold font-instrument">
                {section.h2}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed font-helvetica tracking-[-0.05em]">
                {section.p}
              </p>
            </section>
          ))}

        </div>

        {/* Internal Links (Section C4)[cite: 6] */}
        <div className="mt-20 text-center border-t border-white/10 pt-10">
          <p className="text-white/80 text-lg font-helvetica tracking-[-0.05em]">
            {t.footerText} <Link href={isEn ? "/en/locations" : "/locations"} className="text-[#FFD700] underline hover:text-white transition-colors">{t.branchLink}</Link>{t.orText} <Link href={isEn ? "/en/menu" : "/menu"} className="text-[#FFD700] underline hover:text-white transition-colors">{t.menuLink}</Link> {t.fullText}
          </p>
        </div>

      </div>
    </div>
  );
}