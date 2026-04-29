"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function RefundPolicyPage() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "سياسة الاسترجاع والإلغاء",
      sections: [
        {
          heading: "1. ضمان دقة وجودة الطلب",
          body: "في بروست سارة، رضاكم هو أولويتنا. إذا استلمت طلباً غير صحيح، أو ناقصاً، أو لم يلبِ معايير الجودة المعتادة (مثل عدم وصول الطعام ساخناً أو طازجاً)، يُرجى التواصل مع إدارة الفرع فوراً، وسنقوم باستبدال الوجبة أو تعويضك بالكامل."
        },
        {
          heading: "2. إلغاء الطلبات المباشرة (الاستلام أو الاتصال)",
          body: "نظراً لطبيعة الوجبات الطازجة وسرعة التحضير، يمكن إلغاء الطلب فقط قبل بدء المطبخ في تحضيره (عادةً خلال دقيقتين من تأكيد الطلب). لا يمكن إلغاء أو استرجاع قيمة الطلب بعد بدء التحضير أو بعد خروجه من المطعم."
        },
        {
          heading: "3. طلبات تطبيقات التوصيل (هنقرستيشن ويانغو)",
          body: "بالنسبة للطلبات التي تتم عبر تطبيقات التوصيل الخارجية، تخضع سياسة الاسترجاع والإلغاء وتأخير المندوبين لشروط وأحكام التطبيق المستخدم. نوصي بالتواصل مع خدمة عملاء التطبيق المعني لرفع طلب الاسترجاع."
        }
      ]
    },
    en: {
      title: "Refund & Cancellation Policy",
      sections: [
        {
          heading: "1. Order Accuracy & Quality Guarantee",
          body: "At Broast Sara, your satisfaction is our priority. If you receive an incorrect or incomplete order, or if it does not meet our usual quality standards (e.g., food not hot or fresh), please contact the branch management immediately, and we will replace the meal or issue a full refund."
        },
        {
          heading: "2. Direct Order Cancellations (Pickup or Call)",
          body: "Due to the fresh nature of our meals and our express service, orders can only be cancelled before the kitchen begins preparation (usually within 2 minutes of confirmation). Orders cannot be cancelled or refunded once preparation has started or food has left the restaurant."
        },
        {
          heading: "3. Delivery App Orders (HungerStation & Yango)",
          body: "For orders placed through third-party delivery apps, cancellation, refund policies, and driver delays are subject to the terms and conditions of the respective app. We recommend contacting the customer service of the app used to process your refund request."
        }
      ]
    }
  }[lang];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto premium-card p-12 md:p-16">
        <h1 className={`text-4xl md:text-5xl mb-12 text-[#FFD700] border-b border-white/20 pb-8 text-center md:text-start ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {content.title}
        </h1>
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
