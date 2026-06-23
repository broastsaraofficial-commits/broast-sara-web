import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  return {
    title: isEn ? "Terms and Conditions — Broast Sara" : "الشروط والأحكام — بروست سارة",
    description: isEn
      ? "Broast Sara's terms and conditions covering VAT, menu availability, allergens, and intellectual property, governed by the laws of Saudi Arabia."
      : "تغطي شروط وأحكام Broast Sara ضريبة القيمة المضافة وتوفر القائمة والمواد المسببة للحساسية والملكية الفكرية، وتخضع لقوانين المملكة العربية السعودية.",
    alternates: { canonical: `https://broastsara.com/${lang}/legal/terms` },
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
    title: "Terms and Conditions",
    sections: [
      {
        h2: "Pricing, VAT, and Menu Availability",
        p: "All prices displayed on this website include VAT in accordance with Saudi VAT regulations. Broast Sara reserves the right to modify prices and update the menu at any time without prior notice. Order fulfilment is subject to the availability of fresh products at the relevant branch on the day of the order. Because Broast Sara operates on a daily fresh chicken supply with no frozen stockpile, certain items may be unavailable at specific branches if the day's supply has been exhausted. Current pricing for all available menu items is always displayed on HungerStation before order confirmation, allowing customers to review their full order cost prior to completing the transaction."
      },
      {
        h2: "Allergen Responsibility",
        p: "Broast Sara's menu contains products with gluten and shellfish allergens. The Golden Shrimp and fish fillet items contain shellfish and fish proteins respectively, and breaded items contain gluten. It is the customer's responsibility to inform branch staff of any allergy or dietary requirement before placing an order, or to include a clear allergen note on any order placed through HungerStation or WhatsApp before the order is confirmed. Branch staff will advise on the allergen content of specific menu items on request. Broast Sara cannot be held responsible for allergic reactions resulting from a failure to disclose an allergy or dietary requirement prior to completing an order."
      },
      {
        h2: "Intellectual Property",
        p: "All trademarks, logos, product images, recipes, menu content, written materials, and other intellectual property displayed on broastsara.com are the exclusive property of Broast Sara. No part of this website, including menu descriptions, food photography, brand assets, or written content, may be reproduced, distributed, republished, modified, or used for any commercial purpose without prior written permission from Broast Sara. Unauthorised use of Broast Sara's intellectual property may constitute an infringement of applicable intellectual property laws of the Kingdom of Saudi Arabia."
      },
      {
        h2: "Governing Law",
        p: "These Terms and Conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any dispute arising from the use of this website, the placement of an order, the fulfilment of a delivery, or any other matter related to Broast Sara's products and services will be subject to the exclusive jurisdiction of the competent courts of the Kingdom of Saudi Arabia. By using this website or placing an order with Broast Sara, customers agree that Saudi law governs their relationship with Broast Sara in all respects."
      },
      {
        h2: "Contact and Further Information",
        p: "For any question about these Terms and Conditions, or for any matter related to your rights as a customer of Broast Sara, please contact us at broastsaraofficial@gmail.com. For our full legal documentation, including the Privacy Policy and Food Safety Policy, visit the [Legal Hub](/en/legal). To learn more about Broast Sara as a business, visit the [About Broast Sara page](/en/about). For details on our kitchen standards and HACCP food safety protocols, visit the [Food Safety Policy page](/en/legal/food-safety).",
        links: [
          { text: "Legal Hub", href: "/en/legal" },
          { text: "About Broast Sara page", href: "/en/about" },
          { text: "Food Safety Policy page", href: "/en/legal/food-safety" }
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
    title: "الشروط والأحكام",
    sections: [
      {
        h2: "الأسعار وضريبة القيمة المضافة وتوفر القائمة",
        p: "جميع الأسعار المعروضة على هذا الموقع تشمل ضريبة القيمة المضافة وفقًا للوائح ضريبة القيمة المضافة السعودية. تحتفظ Broast Sara بالحق في تعديل الأسعار وتحديث القائمة في أي وقت دون إشعار مسبق. يخضع تنفيذ الطلبات لتوفر المنتجات الطازجة في الفرع المعني في يوم الطلب. لأن Broast Sara تعمل على إمداد يومي من الدجاج الطازج دون أي مخزون مجمد، قد تكون بعض الأصناف غير متاحة في فروع معينة إذا نفد إمداد اليوم. الأسعار الحالية لجميع أصناف القائمة المتاحة تُعرض دائمًا على HungerStation قبل تأكيد الطلب، مما يتيح للزبائن مراجعة التكلفة الإجمالية للطلب قبل إتمام المعاملة."
      },
      {
        h2: "مسؤولية المواد المسببة للحساسية",
        p: "تحتوي قائمة Broast Sara على منتجات بمواد مسببة للحساسية من الجلوتين والمحار. يحتوي Golden Shrimp وفيليه السمك على بروتينات المحار والسمك على التوالي، والأصناف المجبّسة تحتوي على الجلوتين. تقع على عاتق الزبون مسؤولية إبلاغ موظفي الفرع بأي حساسية أو متطلب غذائي قبل تقديم الطلب، أو إدراج ملاحظة واضحة بشأن الحساسية في أي طلب مُقدَّم عبر HungerStation أو WhatsApp قبل تأكيد الطلب. سيقدم موظفو الفرع المشورة بشأن محتوى المواد المسببة للحساسية لأصناف قائمة محددة عند الطلب. لا يمكن مساءلة Broast Sara عن ردود الفعل التحسسية الناجمة عن الإخفاق في الإفصاح عن حساسية أو متطلب غذائي قبل إتمام الطلب."
      },
      {
        h2: "الملكية الفكرية",
        p: "جميع العلامات التجارية والشعارات وصور المنتجات والوصفات ومحتوى القائمة والمواد المكتوبة وغيرها من الملكية الفكرية المعروضة على broastsara.com هي الملك الحصري لـBroast Sara. لا يجوز استنساخ أي جزء من هذا الموقع، بما في ذلك أوصاف القائمة والتصوير الفوتوغرافي للطعام وأصول العلامة التجارية أو المحتوى المكتوب، أو توزيعه أو إعادة نشره أو تعديله أو استخدامه لأي غرض تجاري دون إذن كتابي مسبق من Broast Sara. قد يُشكّل الاستخدام غير المصرح به للملكية الفكرية لـBroast Sara انتهاكًا لقوانين الملكية الفكرية المعمول بها في المملكة العربية السعودية."
      },
      {
        h2: "القانون الحاكم",
        p: "تخضع هذه الشروط والأحكام وتُفسَّر وفقًا لقوانين المملكة العربية السعودية. أي نزاع ينشأ عن استخدام هذا الموقع أو تقديم طلب أو تنفيذ توصيل أو أي مسألة أخرى تتعلق بمنتجات وخدمات Broast Sara سيخضع للاختصاص القضائي الحصري للمحاكم المختصة في المملكة العربية السعودية. باستخدام هذا الموقع أو تقديم طلب لدى Broast Sara، يوافق الزبائن على أن القانون السعودي يحكم علاقتهم بـBroast Sara في جميع الجوانب."
      },
      {
        h2: "التواصل والمعلومات الإضافية",
        p: "لأي سؤال حول هذه الشروط والأحكام، أو لأي مسألة تتعلق بحقوقك كزبون لدى Broast Sara، يُرجى التواصل معنا على broastsaraofficial@gmail.com. للاطلاع على وثائقنا القانونية الكاملة، بما في ذلك سياسة الخصوصية وسياسة سلامة الغذاء، زُر [المركز القانوني](/ar/legal). لمعرفة المزيد عن Broast Sara كعمل تجاري، زُر [صفحة عن Broast Sara](/ar/about). للاطلاع على تفاصيل معايير مطبخنا وبروتوكولات HACCP لسلامة الغذاء، زُر [صفحة سياسة سلامة الغذاء](/ar/legal/food-safety).",
        links: [
          { text: "المركز القانوني", href: "/ar/legal" },
          { text: "صفحة عن Broast Sara", href: "/ar/about" },
          { text: "صفحة سياسة سلامة الغذاء", href: "/ar/legal/food-safety" }
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

export default async function TermsPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.title,
    "url": `https://broastsara.com/${lang}/legal/terms`,
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