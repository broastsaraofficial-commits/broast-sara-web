"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "سياسة الخصوصية",
      sections: [
        {
          heading: "جمع البيانات واستخدامها",
          body: "نحن في بروست سارة نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية وفقاً لنظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية. قد نقوم بجمع اسمك، ورقم هاتفك، وعنوانك فقط لغرض تلبية طلباتك، وإدارة التوصيل، وتحسين خدمة العملاء."
        },
        {
          heading: "مشاركة البيانات",
          body: "لا نقوم ببيع أو تأجير بياناتك لأي جهة خارجية. قد نشارك تفاصيل التوصيل الأساسية فقط مع شركاء التوصيل المعتمدين لدينا لضمان وصول طلبك بأمان."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Data Collection and Usage",
          body: "At Broast Sara, we respect your privacy and are committed to protecting your personal data in compliance with the Saudi Personal Data Protection Law (PDPL). We may collect your name, phone number, and address solely for the purpose of fulfilling your orders, managing delivery, and improving customer service."
        },
        {
          heading: "Data Sharing",
          body: "We do not sell or rent your data to any third parties. We may only share basic delivery details with our authorized delivery partners to ensure your order arrives safely."
        }
      ]
    }
  }[lang];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto premium-card p-12 md:p-16">
        <h1 className={`text-4xl md:text-5xl mb-12 text-[#FFD700] border-b border-white/20 pb-8 text-center md:text-start ${lang === 'en' ? 'en-accent-heading' : ''}`}>{content.title}</h1>
        <div className="flex flex-col gap-10" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
          {content.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h2 className={`text-2xl font-bold ${lang === 'en' ? 'en-accent-heading' : ''}`}>{section.heading}</h2>
              <p className="text-lg text-white/80 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
