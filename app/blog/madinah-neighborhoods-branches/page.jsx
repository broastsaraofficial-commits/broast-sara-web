"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleSixPage() {
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
      title: "دليلك الشامل لفروع بروست سارة في أحياء المدينة المنورة",
      author: "إدارة بروست سارة",
      intro: "مع تزايد الطلب على الدجاج المقرمش الطازج، توسعت شبكة فروع بروست سارة لتغطي أهم أحياء المدينة المنورة ومحيطها. هدفنا هو أن نكون دائماً بالقرب منك، سواء كنت في استراحة غداء سريعة، أو تبحث عن عشاء عائلي متأخر، أو مسافراً على الطريق السريع. في هذا الدليل، نستعرض مواقع فروعنا الثمانية لتتعرف على الفرع الأقرب إليك.",
      sections: [
        {
          heading: "1. الفروع المركزية والجنوبية (العزيزية والهجرة)",
          body: "يُعتبر فرع العزيزية (طريق الأمير نايف بن عبدالعزيز) من أبرز محطاتنا، حيث يخدم سكان الحي بكفاءة عالية وسرعة استثنائية. أما في حي الهجرة (شارع الأمير سلطان)، فيوفر فرعنا نقطة التقاء مثالية للعائلات والشباب بفضل موقعه الاستراتيجي."
        },
        {
          heading: "2. فروع غرب وشمال المدينة (الإمام البخاري وحي البحر)",
          body: "لتغطية النطاق الغربي والشمالي، يعمل فرع الإمام البخاري في حي الضيافة على تلبية طلبات العملاء بأعلى معايير الجودة. كما يخدم فرع حي البحر (الجمعة) الكثافة السكانية في المنطقة المجاورة، مقدماً نفس الطعم الأسطوري الذي عُرفنا به."
        },
        {
          heading: "3. تغطية الروابي والزهراء (الجوازات والجرف)",
          body: "لا ننسى عملاءنا في مناطق الروابي والزهراء؛ حيث يلبي فرع الجوازات احتياجات السكان والموظفين في المنطقة، بينما يغطي فرع الجرف النطاق الشمالي الغربي، لضمان وصول وجباتنا ساخنة ومقرمشة للجميع."
        },
        {
          heading: "4. خدمات الطرق السريعة وينبع (أبيار الماشي وينبع)",
          body: "للمسافرين وللباحثين عن وجبة في أوقات متأخرة، فرع أبيار الماشي يعمل على مدار 24 ساعة، مما يجعله المحطة الأهم على الطريق السريع. كما نقلنا تجربة بروست سارة إلى مدينة ينبع (العمارة، شارع عمر بن الخطاب) لتوسيع نطاق خدماتنا خارج أسوار المدينة المنورة."
        }
      ],
      faqTitle: "أسئلة شائعة حول فروعنا",
      faqs: [
        {
          q: "أي من الفروع يعمل على مدار 24 ساعة؟",
          a: "فرع أبيار الماشي هو الفرع الذي يعمل على مدار 24 ساعة لخدمة المسافرين وسكان المنطقة في أي وقت."
        },
        {
          q: "هل يتوفر التوصيل في جميع الفروع؟",
          a: "نعم، جميع فروعنا الـ 8 تخدم خدمة التوصيل إما عبر تطبيقات التوصيل (هنقرستيشن ويانغو) أو بالطلب المباشر عبر الواتساب للفرع الأقرب إليك."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Your Complete Guide to Madinah Neighborhoods and Branches",
      author: "Broast Sara Management",
      intro: "With the growing demand for fresh crispy chicken, Broast Sara's branch network has expanded to cover the most important neighborhoods in and around Madinah. Our goal is to always be nearby, whether you're on a quick lunch break, looking for a late family dinner, or traveling on the highway. In this guide, we explore our eight branch locations so you can find the one closest to you.",
      sections: [
        {
          heading: "1. Central and Southern Branches (Al Aziziyyah & Al Hijrah)",
          body: "The Al Aziziyyah branch (Prince Nayef Bin Abdul Aziz Rd) is one of our most prominent spots, serving residents with high efficiency and exceptional speed. In Al Hijrah (Prince Sultan Street), our branch provides a perfect gathering point for families and youth thanks to its strategic location."
        },
        {
          heading: "2. West and North Branches (Imam Bukhari & Hil Bahr)",
          body: "To cover the western and northern scopes, the Imam Bukhari branch in Ad Difa meets customer orders with the highest quality standards. The Hil Bahr branch (Al Jumuah) serves the high population density in the surrounding area, offering the same legendary taste we are known for."
        },
        {
          heading: "3. Ar Rawabi and Az Zahrah Coverage (Aljwazat & Al Juruf)",
          body: "We haven't forgotten our customers in Ar Rawabi and Az Zahrah; the Aljwazat branch meets the needs of residents and employees in the area, while the Al Juruf branch covers the northwestern sector to ensure our meals arrive hot and crispy to everyone."
        },
        {
          heading: "4. Highway Services and Yanbu (Abiar Al Mashi & Yanbu)",
          body: "For travelers and those seeking a meal late at night, the Abiar Al Mashi branch operates 24/7, making it the most important stop on the highway. We also brought the Broast Sara experience to Yanbu (Al Amarah, Omar Bin Al Khattab St) to expand our services beyond the walls of Madinah."
        }
      ],
      faqTitle: "Frequently Asked Questions About Our Branches",
      faqs: [
        {
          q: "Which branch operates 24 hours?",
          a: "The Abiar Al Mashi branch operates 24/7 to serve travelers and local residents at any time of the day or night."
        },
        {
          q: "Is delivery available from all branches?",
          a: "Yes, all 8 of our branches offer delivery, either through delivery apps (HungerStation and Yango) or by ordering directly via WhatsApp from the branch closest to you."
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
