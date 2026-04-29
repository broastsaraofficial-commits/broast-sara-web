"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleFourPage() {
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
      title: "أسرار البروست المقرمش — كيف تحضره في المنزل؟",
      author: "إدارة بروست سارة",
      intro: "الكثير من محبي الدجاج المقرمش يحاولون تقليد طعم البروست المثالي في المنزل، لكن النتيجة غالباً ما تكون دجاجاً مقلياً عادياً يفتقر إلى تلك القرمشة الذهبية والطراوة الداخلية. السر لا يكمن فقط في المكونات، بل في التقنية. في هذا المقال، نكشف لك بعض أسرار تحضير البروست.",
      sections: [
        {
          heading: "1. النقع والتتبيل (السر الأساسي)",
          body: "الخطوة الأولى والأهم هي نقع الدجاج. لا يمكنك رش البهارات على السطح وتوقع نكهة عميقة. يجب نقع قطع الدجاج الطازج في خليط من اللبن الرائب (الذي يساعد على تطرية اللحم) ومزيج من البهارات مثل الثوم البودرة، البابريكا، والفلفل الأبيض لمدة لا تقل عن 8 إلى 12 ساعة في الثلاجة."
        },
        {
          heading: "2. التغليف المزدوج للقرمشة",
          body: "للحصول على قشرة سميكة ومقرمشة، يجب استخدام تقنية التغليف المزدوج. يتم غمس الدجاج في خليط الدقيق المتبل، ثم في سائل (مثل الماء البارد أو البيض المخفوق)، ثم إعادته إلى الدقيق مرة أخرى مع الضغط الخفيف لتكوين تموجات القشرة التي تصبح مقرمشة عند القلي."
        },
        {
          heading: "3. تقنية القلي — لماذا يصعب تقليد البروست؟",
          body: "البروست الحقيقي لا يُقلى في مقلاة مفتوحة عادية. السر التكنولوجي للبروست هو 'القلي بالضغط' (Pressure Frying). هذه المعدات التجارية تحبس البخار المتصاعد من الدجاج، مما يقلل من وقت القلي ويمنع الزيت من التغلغل داخل اللحم. نتيجة لذلك، ينضج الدجاج بسرعة من الداخل ويبقى رطباً، بينما تتحمر القشرة الخارجية بشكل مثالي. وبما أن مقالي الضغط التجارية غير متوفرة أو آمنة للاستخدام المنزلي، فإن تحقيق نفس النتيجة تماماً في المنزل يُعد تحدياً كبيراً."
        },
        {
          heading: "الحل الأسهل والمضمون",
          body: "بدلاً من قضاء ساعات في التتبيل والتعامل مع فوضى الزيت والمقالي، بروست سارة يقدم لك التجربة المثالية جاهزة. نحن نستخدم دجاجاً محلياً طازجاً، نتبله بخلطتنا السرية، ونقليه باستخدام أحدث مقالي الضغط التجارية لنضمن لك ولعائلتك القرمشة الذهبية في كل مرة."
        }
      ],
      faqTitle: "أسئلة شائعة حول تحضير البروست",
      faqs: [
        {
          q: "هل يمكنني استخدام مقلاة الضغط العادية (قدر الضغط) لقلي الدجاج؟",
          a: "لا، هذا خطير جداً. قدور الضغط المنزلية مصممة للماء والسوائل، وليس للزيت الساخن. استخدامها للقلي قد يؤدي إلى انفجار وحروق خطيرة. البروست يتطلب مقالي ضغط تجارية مخصصة للزيت."
        },
        {
          q: "ما هو أفضل نوع دجاج للبروست؟",
          a: "الدجاج الطازج المبرد (غير المجمد) بوزن يتراوح بين 800 إلى 900 جرام هو الأفضل لضمان نضج سريع وطراوة عالية، وهو بالضبط ما نستخدمه في بروست سارة."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Secrets of Crispy Broast — How to Make It at Home?",
      author: "Broast Sara Management",
      intro: "Many crispy chicken lovers try to replicate the perfect broast taste at home, but the result is often just regular fried chicken lacking that golden crunch and inner tenderness. The secret lies not just in the ingredients, but in the technique. In this article, we reveal some of the secrets behind preparing broast.",
      sections: [
        {
          heading: "1. Marination (The Core Secret)",
          body: "The first and most crucial step is marinating the chicken. You cannot just sprinkle spices on the surface and expect deep flavor. Fresh chicken pieces must be marinated in buttermilk (which tenderizes the meat) and a blend of spices like garlic powder, paprika, and white pepper for at least 8 to 12 hours in the refrigerator."
        },
        {
          heading: "2. The Double Breading Technique",
          body: "To get a thick, crispy crust, use the double breading technique. Dip the chicken in seasoned flour, then into a liquid (like cold water or beaten eggs), and back into the flour again, pressing lightly to create the ripples that turn into crispy flakes when fried."
        },
        {
          heading: "3. The Frying Technique — Why is Broast Hard to Replicate?",
          body: "True broast is not fried in a regular open pan. The technological secret of broast is 'Pressure Frying'. This commercial equipment traps the steam released from the chicken, reducing frying time and preventing oil from seeping into the meat. As a result, the chicken cooks quickly on the inside staying juicy, while the outer crust crisps perfectly. Because commercial pressure fryers are unavailable and unsafe for home use, achieving the exact same result at home is a massive challenge."
        },
        {
          heading: "The Easiest & Guaranteed Solution",
          body: "Instead of spending hours marinating and dealing with oil splatters, Broast Sara offers you the perfect experience, ready to eat. We use fresh local chicken, marinate it in our secret blend, and fry it using state-of-the-art commercial pressure fryers to guarantee you and your family the golden crunch every single time."
        }
      ],
      faqTitle: "Frequently Asked Questions About Making Broast",
      faqs: [
        {
          q: "Can I use a regular pressure cooker to fry chicken at home?",
          a: "No, this is extremely dangerous. Home pressure cookers are designed for water and broths, not hot oil. Using them for frying can cause explosions and severe burns. Broasting requires commercial pressure fryers specifically built for oil."
        },
        {
          q: "What is the best type of chicken for broast?",
          a: "Fresh, chilled (never frozen) chicken weighing between 800 to 900 grams is best to ensure fast cooking and high tenderness, which is exactly what we use at Broast Sara."
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
