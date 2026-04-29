"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleThreePage() {
  const { lang } = useLanguage();
  const [dateEn, setDateEn] = useState("");
  const [dateAr, setDateAr] = useState("");

  useEffect(() => {
    const d = new Date();
    setDateEn(d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase());
    setDateAr(d.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' }));
  }, []);

  const content = {
    ar: {
      title: "سلامة الغذاء في مطاعمنا — ما الذي يجب أن تعرفه؟",
      author: "إدارة بروست سارة",
      intro: "في بروست سارة، نعتقد أن تقديم طعام لذيذ هو نصف المعادلة فقط. النصف الآخر، والأكثر أهمية، هو تقديم طعام آمن ونظيف تماماً. التزامنا بسلامة الغذاء ليس مجرد إجراء روتيني، بل هو حجر الأساس في ثقة عملائنا بنا في المدينة المنورة.",
      sections: [
        {
          heading: "1. نظام تحليل المخاطر (HACCP)",
          body: "نحن من أوائل مطاعم البروست في المدينة المنورة التي تبنت بصرامة نظام HACCP العالمي. هذا النظام يعتمد على تتبع كل خطوة من خطوات تحضير الطعام، بدءاً من استلام الدجاج الطازج، مروراً بالتخزين والتبريد، وصولاً إلى القلي والتقديم. نقوم بقياس درجة حرارة الدجاج والزيت باستمرار لضمان القضاء على أي بكتيريا وتوفير بيئة طهي خالية من المخاطر."
        },
        {
          heading: "2. لا نساوم على جودة الزيت",
          body: "الزيت هو شريان الحياة للبروست المثالي. في مطابخ سارة، نستخدم زيوتاً نباتية عالية الجودة خالية من الدهون المتحولة. والأهم من ذلك، يتم فحص جودة الزيت وتغييره وفق جدول زمني صارم باستخدام أجهزة قياس دقيقة للتأكد من عدم وصوله لمرحلة الأكسدة. هذا ما يجعل دجاجنا مقرمشاً، خفيفاً على المعدة، وذهبي اللون في كل مرة."
        },
        {
          heading: "3. بروتوكولات النظافة الشخصية للموظفين",
          body: "التكنولوجيا والمعدات المتقدمة لا تكفي بدون فريق عمل مدرب ومسؤول. يخضع جميع موظفي المطبخ لدينا لتدريبات مستمرة على سلامة الغذاء. نطبق سياسات صارمة لغسيل الأيدي، ارتداء القفافات وأغطية الرأس، ونعقم محطات التحضير بشكل دوري طوال ساعات العمل للوقاية من التلوث المتبادل."
        }
      ],
      faqTitle: "أسئلة شائعة حول جودة الطعام",
      faqs: [
        {
          q: "هل الدجاج الذي تستخدمونه مجمد؟",
          a: "على الإطلاق. نحن نستخدم حصرياً دجاجاً محلياً طازجاً يتم توريده يومياً، مما يضمن نكهة وقواماً أفضل بكثير من الدجاج المجمد المستورد."
        },
        {
          q: "كيف تتعاملون مع شكاوى العملاء؟",
          a: "نأخذ كل ملاحظة على محمل الجد. إذا لم يكن طلبك مطابقاً لمعاييرنا، يقوم مدير الفرع بالتعامل مع الأمر فوراً لضمان رضاك التام وسلامتك."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Food Safety at Our Restaurants — What You Should Know",
      author: "Broast Sara Management",
      intro: "At Broast Sara, we believe that serving delicious food is only half the equation. The other, and more important half, is serving completely safe and clean food. Our commitment to food safety is not just a routine procedure; it is the cornerstone of our customers' trust in us across Madinah.",
      sections: [
        {
          heading: "1. The HACCP Protocol",
          body: "We are among the pioneer broast restaurants in Madinah to strictly adopt the global HACCP system. This system relies on tracking every step of food preparation, starting from receiving fresh chicken, to storage and refrigeration, all the way to frying and serving. We constantly measure the temperature of the chicken and oil to ensure all bacteria are eliminated, providing a risk-free cooking environment."
        },
        {
          heading: "2. Zero Compromise on Oil Quality",
          body: "Oil is the lifeblood of perfect broast. In Sara's kitchens, we use premium, trans-fat-free vegetable oils. More importantly, oil quality is tested and changed on a strict schedule using precise measurement devices to ensure it never reaches the oxidation stage. This is what makes our chicken crispy, light on the stomach, and perfectly golden every single time."
        },
        {
          heading: "3. Staff Personal Hygiene Protocols",
          body: "Advanced technology and equipment are not enough without a trained and responsible team. All our kitchen staff undergo continuous food safety training. We enforce strict policies for handwashing, wearing gloves and hairnets, and we sanitize prep stations periodically throughout working hours to prevent cross-contamination."
        }
      ],
      faqTitle: "Frequently Asked Questions about Food Quality",
      faqs: [
        {
          q: "Do you use frozen chicken?",
          a: "Absolutely not. We exclusively use fresh local chicken delivered daily, which ensures a much better flavor and texture than imported frozen chicken."
        },
        {
          q: "How do you handle customer complaints?",
          a: "We take every comment seriously. If your order does not meet our standards, the branch manager immediately addresses the issue to guarantee your complete satisfaction and safety."
        }
      ],
      backLink: "← Back to Blog"
    }
  }[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": content.title,
    "datePublished": new Date().toISOString(),
    "author": { "@type": "Organization", "name": content.author },
    "publisher": { "@type": "Organization", "name": "Broast Sara" },
    "description": content.intro.substring(0, 160) + "..."
  };

  return (
    <div className="w-full pt-40 pb-32 px-6 relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-[#FFD700] hover:text-white transition-colors mb-8 inline-block font-bold no-underline">
          {content.backLink}
        </Link>
        
        <article className="premium-card p-10 md:p-16 flex flex-col gap-10 text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
          
          <header className="flex flex-col gap-6 border-b border-white/20 pb-10">
            <div className="flex items-center gap-4 text-[#FFD700] text-sm font-bold tracking-widest uppercase justify-center md:justify-start">
              <span suppressHydrationWarning>{lang === 'ar' ? dateAr : dateEn}</span>
              <span>•</span>
              <span>{content.author}</span>
            </div>
            <h1 className={`text-4xl md:text-6xl leading-tight text-white ${lang === 'en' ? 'en-accent-heading' : ''}`}>
              {content.title}
            </h1>
          </header>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
            {content.intro}
          </p>

          <div className="flex flex-col gap-12 mt-4">
            {content.sections.map((section, idx) => (
              <section key={idx} className="flex flex-col gap-4">
                <h2 className={`text-3xl text-[#E31837] font-bold mb-2 ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                  {section.heading}
                </h2>
                <div className="text-lg text-white/80 leading-relaxed whitespace-pre-line">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 pt-12 border-t border-white/20 flex flex-col gap-8">
            <h2 className={`text-3xl text-[#FFD700] font-bold text-center md:text-start ${lang === 'en' ? 'en-accent-heading' : ''}`}>
              {content.faqTitle}
            </h2>
            <div className="flex flex-col gap-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-lg text-white/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </article>
      </div>
    </div>
  );
}
