"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleNinePage() {
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
      title: "شاورما الصاروخ — قصة طبق أسطوري من بروست سارة",
      author: "إدارة بروست سارة",
      intro: "رغم أن اسمنا يقترن دائماً بالبروست المقرمش، إلا أن هناك نجماً آخر في قائمة طعامنا يمتلك قاعدة جماهيرية ضخمة في المدينة المنورة: شاورما الصاروخ. لم يعد هذا الساندوتش مجرد وجبة سريعة، بل أصبح طقساً يومياً للكثيرين. في هذا المقال، نكشف لك ما الذي يجعل شاورما الصاروخ من بروست سارة تجربة لا تُنسى.",
      sections: [
        {
          heading: "1. سر خبز الصاج الرقيق",
          body: "يبدأ سحر شاورما الصاروخ من الغلاف الخارجي. نحن نستخدم خبز الصاج الرقيق والطازج بدلاً من الخبز العادي. هذا الخبز يتميز بقدرته على التحميص بشكل مثالي ليمنحك قرمشة خفيفة مع كل قضمة، دون أن يكون سميكاً لدرجة تطغى على حشوة الداخلية."
        },
        {
          heading: "2. دجاج طازج مشوي ببطء",
          body: "تماماً كما نفعل في البروست، لا نساوم أبداً على جودة الدجاج. نستخدم صدور وأفخاذ الدجاج المحلي الطازج، نتبلها بخلطتنا الخاصة من البهارات الشرقية، ونتركها تدور ببطء على السيخ. هذه العملية تضمن احتفاظ الدجاج بعصارته ونكهته مع اكتساب تلك الحواف المحمرة والمقرمشة التي يعشقها الجميع."
        },
        {
          heading: "3. ثوم سارة الأسطوري — حلقة الوصل",
          body: "الشاورما الجيدة تحتاج إلى صلصة استثنائية. 'الثومية' الخاصة بنا ليست مجرد إضافة؛ إنها حلقة الوصل التي تجمع نكهة الدجاج المشوي مع خبز الصاج المحمص. قوامها الكريمي وطعمها الغني المحسوب بدقة يجعلها الرفيق المثالي الذي يرفع مستوى الساندوتش بالكامل."
        },
        {
          heading: "4. لماذا سميت بـ 'الصاروخ'؟",
          body: "جاءت التسمية من حجمها الاستثنائي وشكلها الطويل الذي يرضي الجوع الحقيقي، بالإضافة إلى 'الانفجار' السريع للنكهات في الفم. إنها الوجبة المثالية لأوقات العمل المزدحمة، أو لرحلات الطريق، أو لجلسات الشباب المسائية."
        }
      ],
      faqTitle: "أسئلة شائعة حول شاورما بروست سارة",
      faqs: [
        {
          q: "هل يتوفر خيار الشاورما الحراقة؟",
          a: "نعم، يمكنك طلب شاورما الصاروخ بنكهة حارة، حيث نضيف صلصة الثوم الحارة المميزة الخاصة بنا لتجربة مليئة بالحرارة والنكهة."
        },
        {
          q: "هل تقدمون الشاورما في أطباق (صحن عربي) بدلاً من الساندوتش؟",
          a: "بالتأكيد. نوفر 'الصحن العربي' حيث تُقطع شاورما الصاروخ إلى قطع صغيرة وتُقدم مع البطاطس المقلية الذهبية، المخلل، وصلصة الثوم الأسطورية."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Sarookh Shawarma — The Story of a Legendary Dish",
      author: "Broast Sara Management",
      intro: "While our name is permanently associated with crispy broast, there is another star on our menu that commands a massive fanbase in Madinah: The Sarookh Shawarma. This sandwich is no longer just fast food; it has become a daily ritual for many. In this article, we reveal what makes Broast Sara's Sarookh Shawarma an unforgettable experience.",
      sections: [
        {
          heading: "1. The Secret of Thin Saj Bread",
          body: "The magic of the Sarookh Shawarma begins with its exterior. We use fresh, thin Saj bread instead of regular buns. This bread toasts perfectly, giving you a light crunch with every bite, without being so thick that it overpowers the taste of the filling."
        },
        {
          heading: "2. Slow-Roasted Fresh Chicken",
          body: "Just like with our broast, we never compromise on chicken quality. We use fresh local chicken breasts and thighs, marinate them in our special blend of Eastern spices, and let them slowly spin on the spit. This process ensures the chicken retains its juices and flavor while gaining those crispy, caramelized edges everyone loves."
        },
        {
          heading: "3. Sara's Legendary Garlic Sauce — The Binding Agent",
          body: "A good shawarma needs an exceptional sauce. Our signature 'Thoum' is not just an add-on; it is the binding agent that unites the roasted chicken flavor with the toasted Saj bread. Its creamy texture and perfectly balanced rich taste make it the ultimate companion that elevates the entire sandwich."
        },
        {
          heading: "4. Why is it Called 'Sarookh' (The Rocket)?",
          body: "The name comes from its exceptional size and elongated shape that satisfies true hunger, along with the rapid 'explosion' of flavors in your mouth. It is the perfect meal for busy workdays, road trips, or late-night gatherings."
        }
      ],
      faqTitle: "Frequently Asked Questions About Broast Sara's Shawarma",
      faqs: [
        {
          q: "Is there a spicy shawarma option available?",
          a: "Yes, you can order the Sarookh Shawarma with a spicy kick. We add our signature spicy garlic sauce for an experience full of heat and flavor."
        },
        {
          q: "Do you serve shawarma as a plate (Arabic Plate) instead of a sandwich?",
          a: "Absolutely. We offer the 'Arabic Plate' where the Sarookh Shawarma is cut into bite-sized pieces and served with golden fries, pickles, and our legendary garlic sauce."
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
