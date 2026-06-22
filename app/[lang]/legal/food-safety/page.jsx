import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  return {
    title: isEn ? "Food Safety Policy — Broast Sara" : "سياسة سلامة الغذاء — بروست سارة",
    description: isEn
      ? "Broast Sara's food safety policy explains the HACCP protocols, daily halal sourcing, and hygiene standards behind every meal served in Madinah."
      : "تشرح سياسة سلامة الغذاء في Broast Sara بروتوكولات HACCP والمصادر الحلال اليومية ومعايير النظافة خلف كل وجبة تُقدَّم في المدينة المنورة.",
    alternates: { canonical: `https://broastsara.com/${lang}/legal/food-safety` }
  };
}

const dict = {
  en: {
    backBtn: "← Back to Home",
    title: "Food Safety Policy",
    sections: [
      {
        h2: "Our Commitment to Food Safety in Madinah",
        p: "Broast Sara operates 8 branches, 7 in Madinah Al-Munawwarah and 1 in Yanbu, in a city that receives millions of Umrah and Hajj pilgrims annually. Every branch applies HACCP (Hazard Analysis and Critical Control Points) protocols across the full preparation chain, from receiving to serving. Every chicken served is certified halal in conformity with the standards of the Saudi Halal Center, with documentation issued for every batch. This policy sets out the specific, verifiable standards that govern food safety at every Broast Sara branch."
      },
      {
        h2: "Daily Fresh Halal Chicken: The Supply Chain Standard",
        p: "Every chicken served at Broast Sara is sourced from a local Saudi farm and hand-slaughtered daily using the Islamic halal method, with official Saudi Halal Center conformity certificates issued for every batch. The chicken is delivered fresh to the branch kitchen and cooked the same day. It is never frozen at any point in the supply chain. This matters technically because freezing ruptures muscle cell walls through ice crystal formation, causing the chicken to lose moisture during thawing. That lost moisture cannot be recovered, which weakens the internal steam pressure during pressure frying and produces a drier result. Fresh chicken retains its full cellular moisture, allowing the 12-hour marination and pressure-frying process to perform as designed. The [Is Broast Halal in Madinah post](/en/blog/is-broast-halal-madinah) documents the full halal compliance framework, and the [Fresh vs Frozen Chicken post](/en/blog/fresh-vs-frozen-chicken-broast-sara-madinah) covers the cellular science in further detail.",
        links: [
          { text: "Is Broast Halal in Madinah post", href: "/en/blog/is-broast-halal-madinah" },
          { text: "Fresh vs Frozen Chicken post", href: "/en/blog/fresh-vs-frozen-chicken-broast-sara-madinah" }
        ]
      },
      {
        h2: "HACCP Critical Control Points Applied at Every Branch",
        p: "HACCP, Hazard Analysis and Critical Control Points, is a preventive food safety framework that identifies every stage in food preparation where a hazard could occur and installs documented controls at each of those points. Broast Sara applies the following critical control points at all 8 branches:",
        bullets: [
          "Receiving: temperature verification of incoming fresh chicken",
          "Cold storage: refrigeration immediately on delivery, with no ambient holding between arrival and storage",
          "Marination: time and temperature controls during the 12-hour marination window",
          "Cooking: pressure frying to a minimum internal temperature of 74 degrees Celsius, eliminating Salmonella and Campylobacter",
          "Holding: cooked chicken held above 60 degrees Celsius before serving",
          "Cross-contamination prevention: separation of raw and cooked product handling, handwashing protocols, and branch sanitisation schedules"
        ]
      },
      {
        h2: "Staff Food Safety Training and Kitchen Hygiene Protocols",
        p: "All Broast Sara staff complete food safety training before working in any kitchen. Personal hygiene protocols, including handwashing procedures and sanitisation schedules, are enforced at every branch. During Hajj and Ramadan, when order volume at some branches multiplies several times over, the same documented protocols apply without modification. This is what ensures the kitchen standard does not degrade under peak demand."
      },
      {
        h2: "Allergen Information",
        p: "Broast Sara's menu contains gluten and shellfish allergens. It is the customer's responsibility to inform staff of any allergy before ordering. Branch staff can advise on which specific menu items contain which allergens. Inform branch staff directly when ordering in person, or add a note to your order on HungerStation or WhatsApp before confirming."
      },
      {
        h2: "Food Safety Complaints and Contact",
        p: "If a customer experiences a food quality or food safety issue with any order, contact Broast Sara immediately at broastsaraofficial@gmail.com or 0540230888, or speak directly with the management at the relevant branch. Every complaint is investigated and a response is provided. For more on Broast Sara's standards, visit the [About Broast Sara page](/en/about), or find your nearest branch on the [Broast Sara Locations page](/en/locations).",
        links: [
          { text: "About Broast Sara page", href: "/en/about" },
          { text: "Broast Sara Locations page", href: "/en/locations" }
        ]
      }
    ],
    footerLinks: {
      aboutText: "About Broast Sara",
      aboutHref: "/en/about",
      homeText: "Broast Sara Home",
      homeHref: "/en"
    }
  },
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "سياسة سلامة الغذاء",
    sections: [
      {
        h2: "التزامنا بسلامة الغذاء في المدينة المنورة",
        p: "تمتلك Broast Sara 8 فروع، 7 منها في المدينة المنورة وواحد في ينبع، في مدينة تستقبل ملايين معتمري العمرة والحج سنوياً. يُطبّق كل فرع بروتوكولات HACCP (تحليل المخاطر ونقاط التحكم الحرجة) على كامل سلسلة التحضير، من الاستلام إلى التقديم. كل دجاجة تُقدَّم معتمدة حلال وفق معايير مركز الحلال السعودي، مع توثيق يُصدر لكل دفعة. تُحدد هذه السياسة المعايير المحددة والقابلة للتحقق التي تحكم سلامة الغذاء في كل فرع من فروع Broast Sara."
      },
      {
        h2: "الدجاج الحلال الطازج اليومي: معيار سلسلة التوريد",
        p: "كل دجاجة تُقدَّم في Broast Sara مصدرها مزرعة سعودية محلية وتُذبح يدوياً يوميًا بالطريقة الإسلامية الحلال، مع شهادات مطابقة رسمية من مركز الحلال السعودي تُصدر لكل دفعة. يُسلَّم الدجاج طازجًا إلى مطبخ الفرع ويُطهى في نفس اليوم. ولم يتعرض للتجميد قط في أي نقطة من سلسلة التوريد. يهم هذا تقنيًا لأن التجميد يُمزق جدران خلايا العضلات عبر تكوين بلورات جليدية، مما يُسبب فقدان الدجاج للرطوبة أثناء الذوبان. تلك الرطوبة المفقودة لا يمكن استعادتها، مما يُضعف ضغط البخار الداخلي أثناء القلي بالضغط وينتج نتيجة أجف. يحتفظ الدجاج الطازج بكامل رطوبته الخلوية، مما يتيح لعملية التتبيل لـ12 ساعة والقلي بالضغط أن تؤديا وظيفتهما كما صُمِّمتا. يُوثّق [منشور هل البروست حلال في المدينة المنورة](/ar/blog/is-broast-halal-madinah) إطار الامتثال الحلال الكامل، ويتناول [منشور الدجاج الطازج مقابل المجمد](/ar/blog/fresh-vs-frozen-chicken-broast-sara-madinah) العلم الخلوي بمزيد من التفصيل.",
        links: [
          { text: "منشور هل البروست حلال في المدينة المنورة", href: "/ar/blog/is-broast-halal-madinah" },
          { text: "منشور الدجاج الطازج مقابل المجمد", href: "/ar/blog/fresh-vs-frozen-chicken-broast-sara-madinah" }
        ]
      },
      {
        h2: "نقاط التحكم الحرجة لـHACCP المُطبَّقة في كل فرع",
        p: "HACCP، تحليل المخاطر ونقاط التحكم الحرجة، إطار وقائي لسلامة الغذاء يُحدد كل مرحلة في إعداد الطعام يمكن أن تحدث فيها مخاطرة ويُرسّخ ضوابط موثقة عند كل من تلك النقاط. تُطبّق Broast Sara نقاط التحكم الحرجة التالية في جميع الفروع الثمانية:",
        bullets: [
          "الاستلام: التحقق من درجة حرارة الدجاج الطازج الوارد",
          "التخزين البارد: التبريد فور التسليم، دون أي احتجاز في درجة حرارة الغرفة بين الوصول والتخزين",
          "التتبيل: ضوابط الوقت ودرجة الحرارة خلال نافذة التتبيل لـ12 ساعة",
          "الطهي: القلي بالضغط إلى درجة حرارة داخلية لا تقل عن 74 درجة مئوية، مما يقضي على السالمونيلا والكامبيلوباكتر",
          "الحفظ: الدجاج المطهي يُحفظ فوق 60 درجة مئوية قبل التقديم",
          "منع التلوث المتقاطع: الفصل بين مناولة المنتج الخام والمطهي، وبروتوكولات غسل الأيدي، وجداول تعقيم الفرع"
        ]
      },
      {
        h2: "تدريب الموظفين على سلامة الغذاء وبروتوكولات نظافة المطبخ",
        p: "يُكمل جميع موظفي Broast Sara تدريب سلامة الغذاء قبل العمل في أي مطبخ. تُطبَّق بروتوكولات النظافة الشخصية، بما في ذلك إجراءات غسل الأيدي وجداول التعقيم، في كل فرع. خلال موسمي الحج ورمضان، حين يتضاعف حجم الطلبات في بعض الفروع عدة مرات، تُطبَّق البروتوكولات الموثقة ذاتها دون تعديل. هذا ما يضمن عدم تراجع معيار المطبخ في أوقات الذروة."
      },
      {
        h2: "معلومات المواد المسببة للحساسية",
        p: "تحتوي قائمة Broast Sara على مواد مسببة للحساسية من الجلوتين والمحار. تقع على عاتق الزبون مسؤولية إبلاغ الموظفين بأي حساسية قبل الطلب. يمكن لموظفي الفرع تقديم المشورة بشأن أصناف القائمة المحددة التي تحتوي على أي مواد مسببة للحساسية. أبلغ موظفي الفرع مباشرة عند الطلب شخصيًا، أو أضف ملاحظة إلى طلبك على HungerStation أو WhatsApp قبل التأكيد."
      },
      {
        h2: "شكاوى سلامة الغذاء والتواصل",
        p: "إذا واجه الزبون مشكلة في جودة الطعام أو سلامته في أي طلب، يُرجى التواصل مع Broast Sara فورًا على broastsaraofficial@gmail.com أو 0540230888، أو التحدث مباشرة مع إدارة الفرع المعني. كل شكوى تُحقَّق فيها وتُقدَّم ردّ عليها. لمزيد من المعلومات حول معايير Broast Sara، زُر [صفحة عن Broast Sara](/ar/about)، أو اعثر على أقرب فرع لك في [صفحة فروع Broast Sara](/ar/locations).",
        links: [
          { text: "صفحة عن Broast Sara", href: "/ar/about" },
          { text: "صفحة فروع Broast Sara", href: "/ar/locations" }
        ]
      }
    ],
    footerLinks: {
      aboutText: "عن Broast Sara",
      aboutHref: "/ar/about",
      homeText: "الصفحة الرئيسية",
      homeHref: "/ar"
    }
  }
};

function renderP(text) {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (match) {
      return (
        <Link key={i} href={match[2]} className="text-[#FFD700] underline hover:text-white transition-colors">
          {match[1]}
        </Link>
      );
    }
    return part;
  });
}

export default async function FoodSafetyPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.title,
    "url": `https://broastsara.com/${lang}/legal/food-safety`,
    "description": isEn
      ? "Broast Sara's food safety policy explains the HACCP protocols, daily halal sourcing, and hygiene standards behind every meal served in Madinah."
      : "تشرح سياسة سلامة الغذاء في Broast Sara بروتوكولات HACCP والمصادر الحلال اليومية ومعايير النظافة خلف كل وجبة تُقدَّم في المدينة المنورة.",
    "about": { "@id": "https://broastsara.com/#restaurant" },
    "publisher": {
      "@type": "Organization",
      "name": "Broast Sara",
      "url": "https://broastsara.com"
    }
  };

  return (
    <div className="w-full pt-40 pb-32 px-0 md:px-6 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="w-full max-w-4xl mx-auto liquid-glass p-12 md:p-16">
        <Link
          href={isEn ? "/en" : "/"}
          className="text-[#FFD700] hover:text-white transition-colors mb-8 inline-block font-normal no-underline"
        >
          {t.backBtn}
        </Link>

        <h1 className="text-4xl md:text-5xl mb-12 text-[#FFD700] border-b border-white/20 pb-8 font-instrument text-start">
          {t.title}
        </h1>

        <div className="flex flex-col gap-10 text-start">
          {t.sections.map((section, i) => (
            <section key={i} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-white font-instrument">{section.h2}</h2>
              <p className="text-lg text-white leading-relaxed font-helvetica tracking-[-0.05em]">
                {renderP(section.p)}
              </p>
              {section.bullets && (
                <ul className="list-disc pl-6 rtl:pr-6 rtl:pl-0 flex flex-col gap-2 text-lg text-white font-helvetica tracking-[-0.05em] leading-relaxed mt-2">
                  {section.bullets.map((bullet, bi) => (
                    <li key={bi}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-white text-start">
          <p className="text-lg font-helvetica tracking-[-0.05em]">
            {isEn ? "Learn more about Broast Sara: " : "اعرف المزيد عن Broast Sara: "}
            <Link href={t.footerLinks.aboutHref} className="text-[#FFD700] hover:underline hover:text-white transition-colors">
              {t.footerLinks.aboutText}
            </Link>
            {isEn ? " — or return to the " : " — أو عُد إلى "}
            <Link href={t.footerLinks.homeHref} className="text-[#FFD700] hover:underline hover:text-white transition-colors">
              {t.footerLinks.homeText}
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}