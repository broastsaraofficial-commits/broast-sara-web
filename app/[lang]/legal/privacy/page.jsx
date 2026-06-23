import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  return {
    title: isEn ? "Privacy Policy — Broast Sara" : "سياسة الخصوصية — بروست سارة",
    description: isEn
      ? "Broast Sara's privacy policy explains how we handle personal data in compliance with Saudi Arabia's PDPL (Royal Decree M/19, 1443H)."
      : "تشرح سياسة خصوصية Broast Sara كيفية تعاملنا مع البيانات الشخصية وفقًا لنظام حماية البيانات الشخصية PDPL في المملكة العربية السعودية (المرسوم الملكي م/19، 1443هـ).",
    alternates: { canonical: `https://broastsara.com/${lang}/legal/privacy` },
       openGraph: {
     title: isEn ? "Food Safety Policy — Broast Sara" : "سياسة سلامة الغذاء — بروست سارة",
     description: isEn ? "Broast Sara's food safety policy explains the HACCP protocols, daily halal sourcing, and hygiene standards behind every meal served in Madinah." : "تشرح سياسة سلامة الغذاء في Broast Sara بروتوكولات HACCP والمصادر الحلال اليومية ومعايير النظافة.",
    url: `https://broastsara.com/${lang}/legal/food-safety`,
     type: 'website',
     images: [{ url: '/broast-sara-logo.webp', width: 1080, height: 1350, alt: isEn ? 'Broast Sara Food Safety' : 'سلامة غذاء بروست سارة' }],
   },
  };
}

const dict = {
  en: {
    backBtn: "← Back to Home",
    title: "Privacy Policy",
    sections: [
      {
        h2: "Data We Collect and Why",
        p: "Broast Sara collects only the personal data necessary to process and deliver your order: your name, phone number, and delivery address. This data is collected solely for the purposes of order fulfilment, delivery management, and improving the quality of our customer service. We do not collect personal data beyond what is required for these specific purposes. All data collection and processing is carried out in compliance with Saudi Arabia's Personal Data Protection Law (PDPL), issued by Royal Decree M/19, dated 1443H."
      },
      {
        h2: "How We Store and Protect Your Data",
        p: "Personal data collected by Broast Sara is retained only for as long as necessary for the purpose for which it was collected. Once that purpose has been fulfilled and no legal obligation requires continued retention, the data is no longer held. Access to personal data is restricted to staff members who require it to carry out order fulfilment and customer service functions. We do not permit unauthorised access, disclosure, or use of personal data held in our systems. Our data handling practices are governed by Saudi Arabia's Personal Data Protection Law (Personal Data Protection Law, Saudi Arabia, Royal Decree M/19, 1443H), which sets the framework for lawful data storage, processing, and protection."
      },
      {
        h2: "Data Sharing with Delivery Partners",
        p: "To fulfil delivery orders placed through HungerStation, Broast Sara shares the minimum personal data required for that purpose — specifically, your name, phone number, and delivery address — with HungerStation as our delivery partner. This data is shared solely to enable the delivery of your order and for no other purpose. Broast Sara does not sell, rent, or transfer your personal data to any third party for commercial, marketing, or any other purpose. HungerStation does not receive permission to use your data for its own marketing activities as a result of this sharing. No other third parties receive your personal data from Broast Sara."
      },
      {
        h2: "Your Rights Under the PDPL",
        p: "Under Saudi Arabia's Personal Data Protection Law (Royal Decree M/19, 1443H), you have specific rights with respect to your personal data held by Broast Sara. You have the right to request access to the personal data we hold about you, to request that any inaccurate or incomplete data be corrected, and to request deletion of personal data that is no longer required for the purpose for which it was originally collected, subject to any applicable legal retention obligations. To exercise any of these rights, contact us at info@broastsara.com with your request. We will respond within a reasonable timeframe in accordance with the requirements of the PDPL."
      },
      {
        h2: "Contact for Privacy Enquiries",
        p: "If you have any question about how Broast Sara collects, uses, stores, or protects your personal data, or if you wish to exercise any of your rights under the PDPL, please contact us at info@broastsara.com. We are committed to responding to all privacy enquiries clearly and in accordance with our obligations under Saudi Arabia's Personal Data Protection Law. To learn more about Broast Sara as a business, visit the [About Broast Sara page](/en/about). For our full legal documentation, visit the [Legal Hub](/en/legal).",
        links: [
          { text: "About Broast Sara page", href: "/en/about" },
          { text: "Legal Hub", href: "/en/legal" }
        ]
      }
    ],
    footerLinks: {
      aboutText: "About Broast Sara",
      aboutHref: "/en/about",
      homeText: "Home",
      homeHref: "/en"
    }
  },
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "سياسة الخصوصية",
    sections: [
      {
        h2: "البيانات التي نجمعها ولماذا",
        p: "تجمع Broast Sara فقط البيانات الشخصية الضرورية لمعالجة طلبك وتوصيله: اسمك ورقم هاتفك وعنوان التوصيل. تُجمَع هذه البيانات حصريًا لأغراض تنفيذ الطلبات وإدارة التوصيل وتحسين جودة خدمة العملاء لدينا. لا نجمع بيانات شخصية تتجاوز ما هو مطلوب لهذه الأغراض المحددة. يتم تنفيذ جميع عمليات جمع البيانات ومعالجتها بما يتوافق مع نظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية، الصادر بالمرسوم الملكي م/19، بتاريخ 1443هـ."
      },
      {
        h2: "كيفية تخزين بياناتك وحمايتها",
        p: "تُحتفظ البيانات الشخصية التي تجمعها Broast Sara فقط للمدة اللازمة للغرض الذي جُمعت من أجله. بمجرد تحقق ذلك الغرض وعدم وجود التزام قانوني يستوجب الاحتفاظ المستمر بها، لا تُحتفظ البيانات بعد ذلك. يقتصر الوصول إلى البيانات الشخصية على أعضاء الموظفين الذين يحتاجون إليها لأداء وظائف تنفيذ الطلبات وخدمة العملاء. لا نسمح بالوصول غير المصرح به أو الكشف أو الاستخدام للبيانات الشخصية المحتفظ بها في أنظمتنا. ممارسات معالجة البيانات لدينا تخضع لنظام حماية البيانات الشخصية في المملكة العربية السعودية (نظام حماية البيانات الشخصية، المملكة العربية السعودية، المرسوم الملكي م/19، 1443هـ)، الذي يضع الإطار القانوني لتخزين البيانات ومعالجتها وحمايتها."
      },
      {
        h2: "مشاركة البيانات مع شركاء التوصيل",
        p: "لتنفيذ طلبات التوصيل المُقدَّمة عبر HungerStation، تشارك Broast Sara الحد الأدنى من البيانات الشخصية المطلوبة لذلك الغرض — تحديدًا اسمك ورقم هاتفك وعنوان التوصيل — مع HungerStation بوصفه شريك التوصيل لدينا. تُشارَك هذه البيانات حصريًا لتمكين توصيل طلبك ولا لغرض آخر. لا تبيع Broast Sara بياناتك الشخصية أو تؤجرها أو تنقلها إلى أي طرف ثالث لأغراض تجارية أو تسويقية أو أي غرض آخر. لا تحصل HungerStation على إذن باستخدام بياناتك لأنشطتها التسويقية الخاصة نتيجة هذه المشاركة. لا تتلقى أي أطراف ثالثة أخرى بياناتك الشخصية من Broast Sara."
      },
      {
        h2: "حقوقك بموجب نظام حماية البيانات الشخصية",
        p: "بموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية (المرسوم الملكي م/19، 1443هـ)، لديك حقوق محددة فيما يتعلق ببياناتك الشخصية المحتفظ بها لدى Broast Sara. لديك الحق في طلب الوصول إلى البيانات الشخصية التي نحتفظ بها عنك، وطلب تصحيح أي بيانات غير دقيقة أو غير مكتملة، وطلب حذف البيانات الشخصية التي لم تعد مطلوبة للغرض الذي جُمعت من أجله في الأصل، مع مراعاة أي التزامات قانونية بالاحتفاظ معمول بها. لممارسة أي من هذه الحقوق، تواصل معنا على info@broastsara.com بطلبك. سنرد في غضون إطار زمني معقول وفقًا لمتطلبات نظام حماية البيانات الشخصية."
      },
      {
        h2: "التواصل للاستفسارات المتعلقة بالخصوصية",
        p: "إذا كان لديك أي سؤال حول كيفية جمع Broast Sara لبياناتك الشخصية أو استخدامها أو تخزينها أو حمايتها، أو إذا كنت ترغب في ممارسة أي من حقوقك بموجب نظام حماية البيانات الشخصية، يُرجى التواصل معنا على info@broastsara.com. نلتزم بالرد على جميع استفسارات الخصوصية بوضوح ووفقًا لالتزاماتنا بموجب نظام حماية البيانات الشخصية في المملكة العربية السعودية. لمعرفة المزيد عن Broast Sara كعمل تجاري، زُر [صفحة عن Broast Sara](/ar/about). للاطلاع على وثائقنا القانونية الكاملة، زُر [المركز القانوني](/ar/legal).",
        links: [
          { text: "صفحة عن Broast Sara", href: "/ar/about" },
          { text: "المركز القانوني", href: "/ar/legal" }
        ]
      }
    ],
    footerLinks: {
      aboutText: "عن Broast Sara",
      aboutHref: "/ar/about",
      homeText: "الرئيسية",
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

export default async function PrivacyPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.title,
    "url": `https://broastsara.com/${lang}/legal/privacy`,
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
            </section>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-white text-start">
          <p className="text-lg font-helvetica tracking-[-0.05em]">
            {isEn ? "Learn more: " : "اعرف المزيد: "}
            <Link href={t.footerLinks.aboutHref} className="text-[#FFD700] hover:underline hover:text-white transition-colors">
              {t.footerLinks.aboutText}
            </Link>
            {isEn ? " — " : " — "}
            <Link href={t.footerLinks.homeHref} className="text-[#FFD700] hover:underline hover:text-white transition-colors">
              {t.footerLinks.homeText}
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}