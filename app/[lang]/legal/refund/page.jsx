import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  return {
    title: isEn ? "Refund and Cancellation Policy — Broast Sara" : "سياسة الاسترداد والإلغاء — بروست سارة",
    description: isEn
      ? "Broast Sara Madinah's refund and cancellation policy for direct orders, HungerStation orders, and quality complaints."
      : "سياسة الاسترداد والإلغاء لـBroast Sara في المدينة المنورة للطلبات المباشرة وطلبات HungerStation وشكاوى الجودة.",
    alternates: { canonical: `https://broastsara.com/${lang}/legal/refund` },
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
    title: "Refund and Cancellation Policy",
    sections: [
      {
        h2: "Order Accuracy and Quality Guarantee",
        p: "If your order from Broast Sara is incorrect, incomplete, or does not meet our quality standard, including food that does not arrive hot or fresh on direct delivery, contact branch management immediately. Broast Sara will replace the meal or provide full compensation. This guarantee applies to all direct orders placed by phone, WhatsApp, or walk-in at any of our 8 branches. To raise a quality concern, contact the branch where you placed your order or reach our team at broastsaraofficial@gmail.com or 0540230888."
      },
      {
        h2: "Cancelling a Direct Order (Phone, WhatsApp, or Walk-In)",
        p: "Because every Broast Sara order is prepared fresh from locally sourced, daily-slaughtered chicken, cancellation is only possible within approximately 2 minutes of order confirmation and before kitchen preparation begins. Once the kitchen has started preparing your order, or once the order has left the restaurant for delivery, cancellation and refund are not possible. This applies to all direct orders across all branches, including late-night and Ramadan suhoor orders placed with the Abiar Al Mashi branch at 0530957742. If you need to cancel, contact the branch as soon as possible after placing the order."
      },
      {
        h2: "Orders Placed Through HungerStation",
        p: "Refund, cancellation, and delivery delay claims for orders placed through the HungerStation platform are governed by HungerStation's own terms and conditions. To submit a refund request for a HungerStation order, contact HungerStation customer support directly through the app or their support channels. Broast Sara's food quality guarantee still applies to the meal itself regardless of the ordering channel. If the food you received does not meet our quality standard, contact broastsaraofficial@gmail.com or 0540230888 in addition to raising the matter with HungerStation support."
      },
      {
        h2: "How to Contact Us About an Order Issue",
        p: "To report an issue with any order, contact branch management directly at the Broast Sara location where your order was placed. Staff at every branch are the first point of contact for incorrect, incomplete, or quality-related concerns. For general complaints or escalations, email broastsaraofficial@gmail.com or call 0540230888. For late-night orders or Ramadan suhoor orders, contact the Abiar Al Mashi branch directly at 0530957742 at any hour. Branch addresses and contact numbers for all 8 locations are listed on the [Broast Sara Locations page](/en/locations). Our kitchen food safety standards and quality commitments are documented on the [Food Safety Policy page](/en/legal/food-safety).",
        links: [
          { text: "Broast Sara Locations page", href: "/en/locations" },
          { text: "Food Safety Policy page", href: "/en/legal/food-safety" }
        ]
      }
    ],
    footerLinks: {
      aboutText: "About Broast Sara",
      aboutHref: "/en/about",
      homeText: "Back to Home",
      homeHref: "/en"
    }
  },
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "سياسة الاسترداد والإلغاء",
    sections: [
      {
        h2: "ضمان دقة الطلب والجودة",
        p: "إذا كان طلبك من Broast Sara غير صحيح أو غير مكتمل أو لا يستوفي معيار الجودة لدينا، بما في ذلك الطعام الذي لا يصل ساخنًا أو طازجًا في التوصيل المباشر، تواصل مع إدارة الفرع فورًا. ستقوم Broast Sara باستبدال الوجبة أو تقديم تعويض كامل. ينطبق هذا الضمان على جميع الطلبات المباشرة المُقدَّمة بالهاتف أو WhatsApp أو الحضور الشخصي في أي من فروعنا الثمانية. للإبلاغ عن مشكلة جودة، تواصل مع الفرع الذي قدمت منه طلبك أو تواصل مع فريقنا على broastsaraofficial@gmail.com أو 0540230888."
      },
      {
        h2: "إلغاء طلب مباشر (هاتف، WhatsApp، أو حضور شخصي)",
        p: "لأن كل طلب من Broast Sara يُحضَّر طازجًا من دجاج محلي مذبوح يوميًا، يكون الإلغاء ممكنًا فقط في غضون دقيقتين تقريبًا من تأكيد الطلب وقبل بدء التحضير في المطبخ. بمجرد أن يبدأ المطبخ في تحضير طلبك، أو بمجرد مغادرة الطلب للمطعم للتوصيل، يصبح الإلغاء والاسترداد غير ممكنين. ينطبق هذا على جميع الطلبات المباشرة عبر جميع الفروع، بما في ذلك طلبات الليل المتأخر والسحور في رمضان المُقدَّمة لفرع أبيار الماشي على 0530957742. إذا احتجت إلى الإلغاء، تواصل مع الفرع في أقرب وقت ممكن بعد تقديم الطلب."
      },
      {
        h2: "الطلبات المُقدَّمة عبر HungerStation",
        p: "تخضع مطالبات الاسترداد والإلغاء والتأخير في التوصيل للطلبات المُقدَّمة عبر منصة HungerStation لشروط وأحكام HungerStation الخاصة. لتقديم طلب استرداد لطلب HungerStation، تواصل مع دعم عملاء HungerStation مباشرة عبر التطبيق أو قنوات الدعم الخاصة بهم. لا يزال ضمان جودة طعام Broast Sara ينطبق على الوجبة نفسها بصرف النظر عن قناة الطلب. إذا كان الطعام الذي تلقيته لا يستوفي معيار جودتنا، تواصل مع broastsaraofficial@gmail.com أو 0540230888 بالإضافة إلى رفع المسألة مع دعم HungerStation."
      },
      {
        h2: "كيفية التواصل معنا بشأن مشكلة في الطلب",
        p: "للإبلاغ عن مشكلة في أي طلب، تواصل مع إدارة الفرع مباشرة في موقع Broast Sara الذي قدمت منه طلبك. موظفو كل فرع هم نقطة الاتصال الأولى للمخاوف المتعلقة بالطلبات غير الصحيحة أو غير المكتملة أو ذات الصلة بالجودة. للشكاوى العامة أو التصعيد، أرسل بريدًا إلكترونيًا إلى broastsaraofficial@gmail.com أو اتصل على 0540230888. لطلبات الليل المتأخر أو سحور رمضان، تواصل مع فرع أبيار الماشي مباشرة على 0530957742 في أي ساعة. عناوين الفروع وأرقام الاتصال لجميع المواقع الثمانية مُدرجة في [صفحة فروع Broast Sara](/ar/locations). معايير سلامة مطبخنا والتزامات الجودة لدينا موثقة في [صفحة سياسة سلامة الغذاء](/ar/legal/food-safety).",
        links: [
          { text: "صفحة فروع Broast Sara", href: "/ar/locations" },
          { text: "صفحة سياسة سلامة الغذاء", href: "/ar/legal/food-safety" }
        ]
      }
    ],
    footerLinks: {
      aboutText: "عن Broast Sara",
      aboutHref: "/ar/about",
      homeText: "العودة للرئيسية",
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

export default async function RefundPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": t.title,
    "url": `https://broastsara.com/${lang}/legal/refund`,
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