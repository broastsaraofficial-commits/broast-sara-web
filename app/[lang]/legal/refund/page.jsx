import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Refund & Cancellation Policy — Broast Sara" : "سياسة الاسترجاع والإلغاء — بروست سارة | Refund Policy",
    description: isEn ? "Learn about the refund and cancellation policy at Broast Sara. We guarantee order accuracy and quality for direct and delivery app orders in Madinah." : "تعرّف على سياسة الاسترجاع والإلغاء في بروست سارة. نضمن دقة وجودة الطلبات المباشرة وطلبات تطبيقات التوصيل في المدينة المنورة.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/legal/refund` }
  };
}

const dict = {
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "سياسة الاسترجاع والإلغاء",
    sections: [
      { h2: "1. ضمان دقة وجودة الطلب", p: "في بروست سارة، رضاكم هو أولويتنا. إذا استلمت طلباً غير صحيح، أو ناقصاً، أو لم يلبِ معايير الجودة المعتادة (مثل عدم وصول الطعام ساخناً أو طازجاً)، يُرجى التواصل مع إدارة الفرع فوراً، وسنقوم باستبدال الوجبة أو تعويضك بالكامل." },
      { h2: "2. إلغاء الطلبات المباشرة (الاستلام أو الاتصال)", p: "نظراً لطبيعة الوجبات الطازجة وسرعة التحضير، يمكن إلغاء الطلب فقط قبل بدء المطبخ في تحضيره (عادةً خلال دقيقتين من تأكيد الطلب). لا يمكن إلغاء أو استرجاع قيمة الطلب بعد بدء التحضير أو بعد خروجه من المطعم." },
      { h2: "3. طلبات تطبيقات التوصيل (هنقرستيشن ويانغو)", p: "بالنسبة للطلبات التي تتم عبر تطبيقات التوصيل الخارجية، تخضع سياسة الاسترجاع والإلغاء وتأخير المندوبين لشروط وأحكام التطبيق المستخدم. نوصي بالتواصل مع خدمة عملاء التطبيق المعني لرفع طلب الاسترجاع." }
    ],
    footerText: "هل لديك أسئلة أخرى؟ تفضل بزيارة صفحة ",
    faqLink: "الأسئلة الشائعة",
    orReturn: "، أو تعرف على ",
    aboutLink: "قصتنا"
  },
  en: {
    backBtn: "← Back to Home",
    title: "Refund & Cancellation Policy",
    sections: [
      { h2: "1. Order Accuracy & Quality Guarantee", p: "At Broast Sara, your satisfaction is our priority. If you receive an incorrect or incomplete order, or if it does not meet our usual quality standards (e.g., food not arriving hot or fresh), please contact the branch management immediately, and we will replace the meal or fully compensate you." },
      { h2: "2. Canceling Direct Orders (Pickup or Call)", p: "Due to the nature of fresh meals and fast preparation, an order can only be canceled before the kitchen starts preparing it (usually within two minutes of order confirmation). Orders cannot be canceled or refunded once preparation has started or after leaving the restaurant." },
      { h2: "3. Delivery App Orders (HungerStation & Yango)", p: "For orders placed through third-party delivery apps, the refund and cancellation policy, as well as driver delays, are subject to the terms and conditions of the respective app. We recommend contacting the relevant app's customer service to submit a refund request." }
    ],
    footerText: "Do you have other questions? Visit the ",
    faqLink: "FAQ",
    orReturn: " page, or learn about ",
    aboutLink: "Our Story"
  }
};

export default async function RefundPolicyPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  return (
    <div className="w-full pt-40 pb-32 px-6 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <div className="max-w-4xl mx-auto liquid-glass p-12 md:p-16">
        <Link href={isEn ? "/en" : "/"} className={`text-[#FFD700] hover:text-white transition-colors mb-8 inline-block font-bold no-underline ${isEn ? 'text-left' : 'text-right'}`}>
          {t.backBtn}
        </Link>
        <h1 className="text-4xl md:text-5xl mb-12 text-[#FFD700] border-b border-white/20 pb-8 font-instrument text-center md:text-start">
          {t.title}
        </h1>
        <div className="flex flex-col gap-10 text-center md:text-start">
          {t.sections.map((section, i) => (
            <section key={i} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-white font-instrument">{section.h2}</h2>
              <p className="text-lg text-white/80 leading-relaxed font-helvetica tracking-[-0.05em]">{section.p}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-white/70 text-center">
          <p>
            {t.footerText} <Link href={isEn ? "/en/faq" : "/faq"} className="text-[#FFD700] hover:underline hover:text-white transition-colors">{t.faqLink}</Link>{t.orReturn} <Link href={isEn ? "/en/about" : "/about"} className="text-[#FFD700] hover:underline hover:text-white transition-colors">{t.aboutLink}</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}