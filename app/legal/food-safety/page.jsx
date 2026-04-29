"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function FoodSafetyPage() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "سياسة سلامة الغذاء — بروست سارة",
      sections: [
        {
          heading: "التزامنا بسلامة الغذاء",
          body: "تؤمن بروست سارة بأن سلامة الغذاء ليست مجرد متطلب قانوني، بل هي ركيزة الثقة التي نبني عليها علاقتنا مع عملائنا في المدينة المنورة وما حولها."
        },
        {
          heading: "ضمان الطازجية اليومية",
          body: "يُذبح الدجاج يدوياً بالطريقة الإسلامية كل يوم. لا نستخدم الدجاج المجمد أبداً. يُحضَّر الدجاج في نفس يوم الذبح."
        },
        {
          heading: "بروتوكولات HACCP",
          body: "نطبق نظام تحليل المخاطر ونقاط التحكم الحرجة (HACCP) في جميع مراحل تحضير الطعام لضمان أعلى معايير الجودة العالمية."
        },
        {
          heading: "نظافة الموظفين",
          body: "يخضع جميع موظفينا لتدريب دوري على سلامة الغذاء ويلتزمون ببروتوكولات النظافة الشخصية الصارمة في المطبخ."
        },
        {
          heading: "إدارة المواد المُسبِّبة للحساسية",
          body: "يحتوي بعض منتجاتنا على مكونات قد تُسبب حساسية مثل الجلوتين والصدف. يُرجى إخبار موظفينا في حال وجود أي حساسية غذائية."
        },
        {
          heading: "شكاوى سلامة الغذاء",
          body: "في حال واجهت أي مشكلة تتعلق بجودة الطعام، يُرجى التواصل معنا فوراً عبر البريد الإلكتروني: broastsaraofficial@gmail.com أو الاتصال على 0540230888، أو التحدث مع إدارة الفرع مباشرة."
        }
      ]
    },
    en: {
      title: "Food Safety Policy — Broast Sara",
      sections: [
        {
          heading: "Our Food Safety Commitment",
          body: "Broast Sara believes that food safety is not just a legal requirement, but the pillar of trust on which we build our relationship with customers in Madinah and beyond."
        },
        {
          heading: "Daily Freshness Guarantee",
          body: "Chicken is manually slaughtered by the Islamic method every day. We never use frozen chicken. Chicken is prepared on the same day as slaughter."
        },
        {
          heading: "HACCP Protocols",
          body: "We apply Hazard Analysis and Critical Control Points (HACCP) across all food preparation stages to ensure the highest global quality standards."
        },
        {
          heading: "Staff Hygiene",
          body: "All our staff undergo regular food safety training and strictly comply with personal hygiene protocols in the kitchen."
        },
        {
          heading: "Allergen Management",
          body: "Some of our products contain allergens such as gluten and shellfish. Please inform our staff of any food allergies before ordering."
        },
        {
          heading: "Food Safety Complaints",
          body: "In the event of any food quality issue, please contact us immediately via email: broastsaraofficial@gmail.com, or phone: +966 54 023 0888, or speak directly with the branch management."
        }
      ]
    }
  }[lang];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto premium-card p-12 md:p-16">
        <h1 className={`text-4xl md:text-5xl mb-12 text-[#FFD700] border-b border-white/20 pb-8 ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {content.title}
        </h1>
        
        <div className="flex flex-col gap-10">
          {content.sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h2 className={`text-2xl font-bold ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                {section.heading}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
