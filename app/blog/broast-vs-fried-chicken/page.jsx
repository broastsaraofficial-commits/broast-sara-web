"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleFivePage() {
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
      title: "الفرق بين البروست والدجاج المقلي العادي",
      author: "إدارة بروست سارة",
      intro: "كثيراً ما يُستخدم مصطلحا 'البروست' و'الدجاج المقلي' بالتبادل، لكن الحقيقة هي أنهما يختلفان تماماً من حيث طريقة التحضير، الملمس، والطعم النهائي. إذا تساءلت يوماً عن سبب تفوق قرمشة البروست وطراوته على الدجاج المقلي المعتاد، فهذا المقال سيوضح لك الفروق الجوهرية.",
      sections: [
        {
          heading: "1. طريقة الطهي: القلي المفتوح مقابل القلي بالضغط",
          body: "الفرق التكنولوجي الأكبر يكمن في طريقة الطهي. الدجاج المقلي العادي يُطهى في مقالي مفتوحة عالية الحرارة، مما قد يؤدي أحياناً إلى احتراق القشرة الخارجية قبل نضج اللحم من الداخل بالكامل. أما البروست، فيُطهى باستخدام مقالي الضغط التجارية. هذه المقالي تحبس البخار المتصاعد من الدجاج، مما يرفع الضغط الداخلي ويسمح بطهي الدجاج بسرعة أكبر وبدرجات حرارة موزعة بشكل مثالي."
        },
        {
          heading: "2. امتصاص الزيت ومستوى الدهون",
          body: "لأن البروست يُطهى تحت الضغط، فإن بيئة الطهي تمنع الزيت من التغلغل بكثافة إلى داخل أنسجة الدجاج. النتيجة؟ وجبة أخف، أقل تشبعاً بالزيت، وأسهل في الهضم مقارنة بالدجاج المقلي العادي الذي غالباً ما يمتص كميات كبيرة من الزيت أثناء فترة القلي الطويلة في المقلاة المفتوحة."
        },
        {
          heading: "3. الطراوة والعصارة الداخلية",
          body: "بفضل الضغط الذي يحبس البخار داخل المقلاة، يتم الاحتفاظ بالعصارة الطبيعية للدجاج. بينما يميل الدجاج المقلي العادي إلى الجفاف (خاصة قطع الصدر)، يضمن لك البروست لحماً طرياً وغنياً بالعصارة يذوب في الفم، حتى في القطع الأكثر سمكاً."
        },
        {
          heading: "4. التتبيلة والتغليف",
          body: "في بروست سارة، لا نكتفي بتقنية الطهي فقط. نحن نعتمد على عملية نقع تستمر لأكثر من 12 ساعة لتتغلغل نكهة البهارات إلى العظم، تليها عملية تغليف دقيقة تحافظ على التصاق القشرة باللحم أثناء القلي بالضغط، مما ينتج عنه طبقة ذهبية لا تنفصل عن الدجاج عند قضمها."
        }
      ],
      faqTitle: "أسئلة شائعة حول البروست",
      faqs: [
        {
          q: "هل البروست صحي أكثر من الدجاج المقلي العادي؟",
          a: "نعم، نسبياً. لأن طريقة القلي بالضغط تمنع اللحم من امتصاص كميات كبيرة من الزيت، فإن البروست يُعتبر خياراً أخف وأقل دهوناً من الدجاج المقلي بالطريقة التقليدية."
        },
        {
          q: "لماذا لا توفر المطاعم العادية وجبات البروست؟",
          a: "لأن تحضير البروست يتطلب معدات قلي بالضغط تجارية باهظة الثمن ومعايير أمان صارمة جداً، بالإضافة إلى خبرة فنية دقيقة لضبط مستويات الضغط والحرارة."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "The Difference Between Broast and Regular Fried Chicken",
      author: "Broast Sara Management",
      intro: "The terms 'broast' and 'fried chicken' are often used interchangeably, but the truth is they are fundamentally different in preparation, texture, and final taste. If you've ever wondered why broast's crunch and tenderness outshine standard fried chicken, this article breaks down the core differences.",
      sections: [
        {
          heading: "1. Cooking Method: Open Frying vs. Pressure Frying",
          body: "The biggest technological difference lies in the cooking method. Regular fried chicken is cooked in high-heat open fryers, which can sometimes burn the crust before the meat is fully cooked inside. Broast, however, is cooked using commercial pressure fryers. These fryers trap the steam released from the chicken, raising internal pressure and allowing the chicken to cook faster and with perfectly distributed temperatures."
        },
        {
          heading: "2. Oil Absorption and Fat Levels",
          body: "Because broast is cooked under pressure, the cooking environment prevents the oil from heavily seeping into the chicken's tissues. The result? A meal that is lighter, less saturated with oil, and easier to digest compared to regular fried chicken, which often absorbs large amounts of oil during its prolonged time in an open fryer."
        },
        {
          heading: "3. Tenderness and Inner Juiciness",
          body: "Thanks to the pressure trapping steam inside the fryer, the chicken's natural juices are retained. While regular fried chicken tends to dry out (especially the breast pieces), broast guarantees tender, juicy meat that melts in your mouth, even in the thickest cuts."
        },
        {
          heading: "4. Marination and Breading",
          body: "At Broast Sara, we don't just rely on the cooking technique. We use a marination process lasting over 12 hours so the spice flavor penetrates to the bone. This is followed by a precise breading process that ensures the crust adheres to the meat during pressure frying, resulting in a golden layer that doesn't flake off when you take a bite."
        }
      ],
      faqTitle: "Frequently Asked Questions About Broast",
      faqs: [
        {
          q: "Is broast healthier than regular fried chicken?",
          a: "Yes, relatively. Because pressure frying prevents the meat from absorbing large quantities of oil, broast is considered a lighter and less greasy option than traditionally fried chicken."
        },
        {
          q: "Why don't regular restaurants offer broast?",
          a: "Because preparing broast requires expensive commercial pressure frying equipment and strict safety standards, along with precise technical expertise to manage pressure and temperature levels."
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
