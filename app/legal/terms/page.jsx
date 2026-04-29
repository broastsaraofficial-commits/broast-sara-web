"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "الشروط والأحكام",
      sections: [
        {
          heading: "الأسعار وتوفر المنتجات",
          body: "جميع الأسعار المعروضة على موقعنا تشمل ضريبة القيمة المضافة. نحتفظ بالحق في تعديل الأسعار وتحديث قائمة الطعام في أي وقت. تعتمد تلبية الطلبات على توفر المنتجات الطازجة في الفرع المعني."
        },
        {
          heading: "مسؤولية الحساسية",
          body: "يقع على عاتق العميل إبلاغ موظفينا أو تسجيل ملاحظة واضحة في الطلب في حال وجود أي حساسية غذائية قبل إتمام الطلب، لضمان سلامتكم."
        },
        {
          heading: "الملكية الفكرية",
          body: "جميع العلامات التجارية، والشعارات، وصور المنتجات، والوصفات المعروضة على هذا الموقع هي ملكية حصرية لـ بروست سارة ولا يجوز استخدامها دون إذن."
        }
      ]
    },
    en: {
      title: "Terms & Conditions",
      sections: [
        {
          heading: "Pricing and Availability",
          body: "All prices listed on our website include VAT. We reserve the right to modify prices and update the menu at any time. Order fulfillment is subject to the availability of fresh products at the respective branch."
        },
        {
          heading: "Allergy Responsibility",
          body: "It is the customer's responsibility to inform our staff or leave a clear note regarding any food allergies before completing an order, to ensure your safety."
        },
        {
          heading: "Intellectual Property",
          body: "All trademarks, logos, product images, and recipes displayed on this website are the exclusive property of Broast Sara and may not be used without permission."
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
