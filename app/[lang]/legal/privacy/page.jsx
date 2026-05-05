import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Privacy Policy — Broast Sara" : "سياسة الخصوصية — بروست سارة | Privacy Policy",
    description: isEn ? "Read Broast Sara's Privacy Policy. We are committed to protecting your personal data according to the PDPL in Saudi Arabia." : "اقرأ سياسة الخصوصية الخاصة ببروست سارة. نحن ملتزمون بحماية بياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/legal/privacy` }
  };
}

const dict = {
  ar: {
    backBtn: "← العودة للرئيسية",
    title: "سياسة الخصوصية",
    sections: [
      { h2: "جمع البيانات واستخدامها", p: "نحن في بروست سارة نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية. قد نقوم بجمع اسمك، ورقم هاتفك، وعنوانك فقط لغرض تلبية طلباتك، وإدارة التوصيل، وتحسين خدمة العملاء." },
      { h2: "مشاركة البيانات", p: "لا نقوم ببيع أو تأجير بياناتك لأي جهة خارجية. قد نشارك تفاصيل التوصيل الأساسية فقط مع شركاء التوصيل المعتمدين لدينا لضمان وصول طلبك بأمان." }
    ],
    footerText: "لمعرفة المزيد عن بروست سارة، تفضل بزيارة صفحة ",
    aboutLink: "من نحن",
    orReturn: "، أو عُد إلى ",
    homeLink: "الصفحة الرئيسية"
  },
  en: {
    backBtn: "← Back to Home",
    title: "Privacy Policy",
    sections: [
      { h2: "Data Collection and Usage", p: "At Broast Sara, we respect your privacy and are committed to protecting your personal data in accordance with the Personal Data Protection Law (PDPL) in Saudi Arabia. We may collect your name, phone number, and address solely for the purpose of fulfilling your orders, managing delivery, and improving customer service." },
      { h2: "Data Sharing", p: "We do not sell or rent your data to any third party. We may only share basic delivery details with our authorized delivery partners to ensure your order arrives safely." }
    ],
    footerText: "To learn more about Broast Sara, please visit the ",
    aboutLink: "About Us",
    orReturn: " page, or return to the ",
    homeLink: "Home Page"
  }
};

export default async function PrivacyPolicyPage({ params }) {
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