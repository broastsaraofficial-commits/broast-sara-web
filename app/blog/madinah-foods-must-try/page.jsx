"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleSevenPage() {
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
      title: "أشهر المأكولات التي يجب تجربتها في المدينة المنورة",
      author: "إدارة بروست سارة",
      intro: "المدينة المنورة ليست فقط وجهة روحانية يقصدها الملايين سنوياً، بل هي أيضاً عاصمة لتراث طهي غني يجمع بين الأصالة والمذاقات الحديثة. من الأسواق الشعبية إلى المطاعم الحديثة، تقدم المدينة تجربة طعام فريدة. إذا كنت تزور المدينة المنورة أو حتى من سكانها، فهذه قائمة بأبرز الأطباق التي يجب عليك تجربتها.",
      sections: [
        {
          heading: "1. تمر العجوة والقهوة العربية",
          body: "لا تكتمل زيارة المدينة المنورة دون تذوق تمر العجوة الفاخر، الذي يُزرع في مزارع المدينة ويعتبر من أجود أنواع التمور في العالم. يُقدم غالباً مع القهوة العربية الأصيلة الممزوجة بالهيل والزعفران، ليمثل رمزاً للضيافة المدينية الأصيلة."
        },
        {
          heading: "2. ثقافة البروست (الدجاج المقرمش الذهبي)",
          body: "قد تتفاجأ عندما تعلم أن 'البروست' يعتبر وجبة أساسية وجزءاً من ثقافة الطعام في المدينة المنورة. أهل المدينة يعشقون الدجاج المقرمش المحضر محلياً. وفي هذا المجال، يبرز 'بروست سارة' كوجهة لا غنى عنها. بفضل الدجاج المحلي الطازج (غير المجمد) والخلطة السرية التي تُنقع لـ 12 ساعة، يقدم بروست سارة التجربة المثالية للبروست المديني الأصيل الذي يجمع بين القرمشة الخارجية والطراوة الداخلية."
        },
        {
          heading: "3. الشاورما بخبز الصاج (الصاروخ)",
          body: "الشاورما في المدينة لها طابع خاص. خبز الصاج الرقيق المحمص مع الدجاج المشوي ببطء يشكلان مزيجاً مثالياً. شاورما 'الصاروخ' في بروست سارة، والمقدمة مع صلصة الثوم الأسطورية، تعتبر من الوجبات السريعة المفضلة التي يجب تجربتها بعد صلاة التراويح أو في التجمعات المسائية."
        },
        {
          heading: "4. المأكولات البحرية والجمبري المقلي",
          body: "لقربها النسبي من البحر الأحمر (ينبع)، تحظى المأكولات البحرية بشعبية متزايدة. وجبات الجمبري المقلي التي تُحضر بنفس تقنية القرمشة الخاصة بالبروست تقدم بديلاً بحرياً فاخراً ولذيذاً لمحبي التغيير."
        }
      ],
      faqTitle: "أسئلة شائعة للمطاعم في المدينة",
      faqs: [
        {
          q: "ما هو أفضل وقت لتناول الطعام في مطاعم المدينة المنورة؟",
          a: "تنشط معظم المطاعم، بما فيها فروع بروست سارة، بعد صلاة العصر وتستمر في تقديم وجباتها الساخنة حتى ساعات الفجر الأولى (2:30 صباحاً)."
        },
        {
          q: "أين يمكنني العثور على أفضل بروست في المدينة؟",
          a: "تتوزع فروع بروست سارة الـ 8 في أهم أحياء المدينة مثل العزيزية، الهجرة، الإمام البخاري، وحتى أبيار الماشي، لتكون دائماً بالقرب منك."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Madinah Foods You Must Try",
      author: "Broast Sara Management",
      intro: "Madinah is not just a spiritual destination visited by millions annually; it is also a capital of rich culinary heritage that blends authenticity with modern flavors. From traditional markets to modern restaurants, the city offers a unique dining experience. Whether you are visiting Madinah or are a local resident, here is a list of the top dishes you must try.",
      sections: [
        {
          heading: "1. Ajwa Dates and Arabic Coffee",
          body: "A visit to Madinah is incomplete without tasting premium Ajwa dates, grown in the city's farms and considered among the finest dates in the world. They are often served with authentic Arabic coffee blended with cardamom and saffron, representing a symbol of genuine Madinah hospitality."
        },
        {
          heading: "2. The Broast Culture (Golden Crispy Chicken)",
          body: "You might be surprised to learn that 'Broast' is a staple meal and part of Madinah's food culture. Locals love locally prepared crispy chicken. In this arena, 'Broast Sara' stands out as an essential destination. With fresh local chicken (never frozen) and a secret blend marinated for 12 hours, Broast Sara offers the ultimate authentic Madinah broast experience, combining an outer crunch with inner tenderness."
        },
        {
          heading: "3. Saj Bread Shawarma (The Sarookh)",
          body: "Shawarma in Madinah has a special character. Thin, toasted Saj bread with slow-roasted chicken forms the perfect combination. The 'Sarookh' shawarma at Broast Sara, served with our legendary garlic sauce, is a favorite fast-food meal that must be tried after Taraweeh prayers or during evening gatherings."
        },
        {
          heading: "4. Seafood and Fried Shrimp",
          body: "Due to its relative proximity to the Red Sea (Yanbu), seafood is increasingly popular. Fried shrimp meals prepared with the same crispy technique as broast offer a premium, delicious seafood alternative for those looking for a change."
        }
      ],
      faqTitle: "Frequently Asked Questions About Dining in Madinah",
      faqs: [
        {
          q: "When is the best time to eat at restaurants in Madinah?",
          a: "Most restaurants, including Broast Sara branches, become highly active after Asr prayers and continue serving hot meals until the early hours of the morning (2:30 AM)."
        },
        {
          q: "Where can I find the best broast in Madinah?",
          a: "Broast Sara's 8 branches are distributed across Madinah's major neighborhoods like Al Aziziyyah, Al Hijrah, Imam Bukhari, and even Abiar Al Mashi, ensuring we are always near you."
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
