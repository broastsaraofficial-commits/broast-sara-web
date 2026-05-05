import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Food Safety Policy — Broast Sara" : "سياسة سلامة الغذاء — بروست سارة | Food Safety Policy",
    description: isEn ? "Learn about Broast Sara's commitment to the highest food safety standards—daily fresh chicken, HACCP protocols, and full halal guarantee." : "تعرّف على التزام بروست سارة بأعلى معايير سلامة الغذاء في المملكة العربية السعودية — دجاج طازج يومياً، بروتوكولات HACCP، وضمان الحلال الكامل.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/legal/food-safety` }
  };
}

const dict = {
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "سياسة سلامة الغذاء — بروست سارة",
    sections: [
      { h2: "التزامنا بسلامة الغذاء", p: "تؤمن بروست سارة بأن سلامة الغذاء ليست مجرد متطلب قانوني، بل هي ركيزة الثقة التي نبني عليها علاقتنا مع عملائنا في المدينة المنورة وما حولها." },
      { h2: "ضمان الطازجية اليومية", p: "يُذبح الدجاج يدوياً بالطريقة الإسلامية كل يوم. لا نستخدم الدجاج المجمد أبداً. يُحضَّر الدجاج في نفس يوم الذبح." },
      { h2: "بروتوكولات HACCP", p: "نطبق نظام تحليل المخاطر ونقاط التحكم الحرجة (HACCP) في جميع مراحل تحضير الطعام لضمان أعلى معايير الجودة العالمية." },
      { h2: "نظافة الموظفين", p: "يخضع جميع موظفينا لتدريب دوري على سلامة الغذاء ويلتزمون ببروتوكولات النظافة الشخصية الصارمة في المطبخ." },
      { h2: "إدارة المواد المُسبِّبة للحساسية", p: "يحتوي بعض منتجاتنا على مكونات قد تُسبب حساسية مثل الجلوتين والصدف. يُرجى إخبار موظفينا في حال وجود أي حساسية غذائية." },
      { h2: "شكاوى سلامة الغذاء", p: "في حال واجهت أي مشكلة تتعلق بجودة الطعام، يُرجى التواصل معنا فوراً عبر البريد الإلكتروني: broastsaraofficial@gmail.com أو الاتصال على 0540230888، أو التحدث مع إدارة الفرع مباشرة." }
    ],
    footerText: "لمعرفة المزيد عن قيمنا، تفضل بزيارة صفحة ",
    aboutLink: "من نحن",
    orReturn: "، أو عُد إلى ",
    homeLink: "الصفحة الرئيسية"
  },
  en: {
    backBtn: "← Back to Home",
    title: "Food Safety Policy — Broast Sara",
    sections: [
      { h2: "Our Commitment to Food Safety", p: "Broast Sara believes that food safety is not just a legal requirement, but the pillar of trust upon which we build our relationship with our customers in Madinah and beyond." },
      { h2: "Daily Freshness Guarantee", p: "Chicken is manually slaughtered according to Islamic methods every day. We never use frozen chicken. The chicken is prepared on the same day it is slaughtered." },
      { h2: "HACCP Protocols", p: "We apply the Hazard Analysis and Critical Control Points (HACCP) system in all stages of food preparation to ensure the highest global quality standards." },
      { h2: "Staff Hygiene", p: "All our staff undergo regular food safety training and adhere to strict personal hygiene protocols in the kitchen." },
      { h2: "Allergen Management", p: "Some of our products contain ingredients that may cause allergies, such as gluten and shellfish. Please inform our staff if you have any food allergies." },
      { h2: "Food Safety Complaints", p: "If you encounter any issue related to food quality, please contact us immediately via email: broastsaraofficial@gmail.com, or call 0540230888, or speak directly with the branch management." }
    ],
    footerText: "To learn more about our values, please visit the ",
    aboutLink: "About Us",
    orReturn: " page, or return to the ",
    homeLink: "Home Page"
  }
};

export default async function FoodSafetyPage({ params }) {
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
            {t.footerText} <Link href={isEn ? "/en/about" : "/about"} className="text-[#FFD700] hover:underline hover:text-white transition-colors">{t.aboutLink}</Link>{t.orReturn} <Link href={isEn ? "/en" : "/"} className="text-[#FFD700] hover:underline hover:text-white transition-colors">{t.homeLink}</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}