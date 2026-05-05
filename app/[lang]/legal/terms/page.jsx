import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Terms & Conditions — Broast Sara" : "الشروط والأحكام — بروست سارة | Terms & Conditions",
    description: isEn ? "Read the Terms & Conditions for Broast Sara. Information regarding pricing, intellectual property, and allergy responsibility." : "اقرأ الشروط والأحكام الخاصة ببروست سارة. معلومات حول الأسعار، الملكية الفكرية، ومسؤولية الحساسية.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/legal/terms` }
  };
}

const dict = {
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "الشروط والأحكام",
    sections: [
      { h2: "الأسعار وتوفر المنتجات", p: "جميع الأسعار المعروضة على موقعنا تشمل ضريبة القيمة المضافة. نحتفظ بالحق في تعديل الأسعار وتحديث قائمة الطعام في أي وقت. تعتمد تلبية الطلبات على توفر المنتجات الطازجة في الفرع المعني." },
      { h2: "مسؤولية الحساسية", p: "يقع على عاتق العميل إبلاغ موظفينا أو تسجيل ملاحظة واضحة في الطلب في حال وجود أي حساسية غذائية قبل إتمام الطلب، لضمان سلامتكم." },
      { h2: "الملكية الفكرية", p: "جميع العلامات التجارية، والشعارات، وصور المنتجات، والوصفات المعروضة على هذا الموقع هي ملكية حصرية لـ بروست سارة ولا يجوز استخدامها دون إذن." }
    ],
    footerText: "لأية أسئلة إضافية، يرجى زيارة ",
    faqLink: "المركز القانوني",
    orReturn: " أو ",
    homeLink: "الصفحة الرئيسية"
  },
  en: {
    backBtn: "← Back to Home",
    title: "Terms & Conditions",
    sections: [
      { h2: "Pricing and Availability", p: "All prices listed on our website include VAT. We reserve the right to modify prices and update the menu at any time. Order fulfillment is subject to the availability of fresh products at the respective branch." },
      { h2: "Allergy Responsibility", p: "It is the customer's responsibility to inform our staff or leave a clear note regarding any food allergies before completing an order, to ensure your safety." },
      { h2: "Intellectual Property", p: "All trademarks, logos, product images, and recipes displayed on this website are the exclusive property of Broast Sara and may not be used without permission." }
    ],
    footerText: "For any additional questions, please visit the ",
    faqLink: "Legal Hub",
    orReturn: " or the ",
    homeLink: "Home Page"
  }
};

export default async function TermsPage({ params }) {
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
            {t.footerText} <Link href={isEn ? "/en/legal" : "/legal"} className="text-[#FFD700] hover:underline hover:text-white transition-colors">{t.faqLink}</Link>{t.orReturn} <Link href={isEn ? "/en" : "/"} className="text-[#FFD700] hover:underline hover:text-white transition-colors">{t.homeLink}</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}