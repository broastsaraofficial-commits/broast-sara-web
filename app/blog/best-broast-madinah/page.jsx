"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogPostPage() {
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
      title: "أفضل مطاعم البروست في المدينة المنورة 2026",
      author: "إدارة بروست سارة",
      intro: "البروست في المدينة المنورة ليس مجرد وجبة — إنه تجربة. من الأحياء الشعبية مثل العزيزية والهجرة، إلى مناطق الجوازات والزهراء، أصبح الدجاج المقرمش جزءاً أصيلاً من ثقافة الطعام في المدينة. في هذا الدليل، نستعرض خيارات البروست في المدينة المنورة لعام 2026، ونوضح لك لماذا يختار الآلاف من أهل المدينة بروست سارة يومياً.",
      sections: [
        {
          heading: "ما هو البروست؟ وما الفرق بينه وبين الدجاج المقلي؟",
          body: "قد يعتقد البعض أن البروست هو مجرد دجاج مقلي، لكن السر يكمن في طريقة التحضير. طريقة الطهي بالضغط تُعطي القرمشة الداخلية واللون الذهبي الخارجي. هذه التقنية تضمن نضج الدجاج بالكامل مع الاحتفاظ بالعصارة الطبيعية في الداخل، مما يمنع جفاف اللحم ويقلل من امتصاص الزيت مقارنة بالقلي التقليدي المفتوح."
        },
        {
          heading: "ما الذي يميز بروست سارة؟",
          body: "وسط العديد من الخيارات، يتميز بروست سارة بعدة ركائز أساسية:\n\n• الدجاج المحلي الطازج اليومي: نحن نرفض استخدام الدجاج المجمد. جودتنا تبدأ من المزرعة.\n• الخلطة السرية: تتبيلة غنية بالبهارات تُنقع لأكثر من 12 ساعة ليمنحك نكهة غنية من الداخل.\n• صلصة الثوم الأسطورية: 'الثومية' الخاصة بنا هي الرفيق المثالي لكل وجبة بروست وشاورما.\n• 8 فروع في المدينة وينبع: نحن دائماً بالقرب منك لضمان وصول وجبتك ساخنة وسريعة."
        },
        {
          heading: "فروع بروست سارة في أحياء المدينة",
          body: "سواء كنت تبحث عن وجبة غداء سريعة أو عشاء عائلي متأخر، فروعنا تغطي أهم أحياء المدينة. من فرعنا الرئيسي في العزيزية، إلى فروع الهجرة، الإمام البخاري، وحي البحر. وإذا كنت على طريق السفر، فإن فرع أبيار الماشي يخدمك على مدار 24 ساعة لضمان عدم توقف رحلتك بدون وجبة مثالية."
        }
      ],
      faqTitle: "الأسئلة الشائعة حول البروست في المدينة",
      faqs: [
        {
          q: "هل البروست حلال في المدينة المنورة؟",
          a: "نعم، جميع مطاعم البروست المعتمدة في المدينة المنورة تلتزم بمعايير الذبح الحلال. في بروست سارة، يُذبح الدجاج يدوياً وبالطريقة الإسلامية يومياً."
        },
        {
          q: "ما هو سعر وجبة البروست في المدينة المنورة؟",
          a: "تتراوح أسعار وجبات البروست في المدينة المنورة عادةً بين 20 ريال و60 ريالاً حسب الحجم والإضافات. اطلع على قائمة بروست سارة للأسعار الكاملة."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Best Broast Restaurants in Madinah 2026",
      author: "Broast Sara Management",
      intro: "Broast in Madinah is more than just a meal — it is an experience. From popular neighborhoods like Al Aziziyyah and Al Hijrah to Aljwazat and Az Zahrah districts, crispy chicken has become an authentic part of Madinah's food culture. In this guide, we review the broast options in Madinah for 2026, and explain why thousands of Madinah locals choose Broast Sara every day.",
      sections: [
        {
          heading: "What is Broast? And How is it Different from Fried Chicken?",
          body: "Some might think broast is just regular fried chicken, but the secret lies in the preparation. Pressure cooking gives inner crunch and golden exterior color. This technique ensures the chicken is fully cooked while retaining its natural juices inside, preventing the meat from drying out and reducing oil absorption compared to traditional open frying."
        },
        {
          heading: "What Makes Broast Sara Special?",
          body: "Amidst many options, Broast Sara stands out through several core pillars:\n\n• Fresh local chicken daily: We refuse to use frozen chicken. Our quality starts at the farm.\n• Secret marinade blend: A rich spice blend marinated for over 12 hours so the flavor reaches the bone.\n• Legendary garlic sauce: Our signature 'Thoum' is the perfect companion to every broast and shawarma meal.\n• 8 branches in Madinah and Yanbu: We are always nearby to ensure your meal arrives hot and fast."
        },
        {
          heading: "Broast Sara Branches by Madinah Neighborhood",
          body: "Whether you're looking for a quick lunch or a late family dinner, our branches cover Madinah's most important neighborhoods. From our main branch in Al Aziziyyah, to Al Hijrah, Imam Bukhari, and Hil Bahr. And if you're on a road trip, our Abiar Al Mashi branch serves you 24/7 to ensure your journey doesn't stop without the perfect meal."
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "Is broast halal in Madinah?",
          a: "Yes, all certified broast restaurants in Madinah adhere to halal slaughter standards. At Broast Sara, chicken is manually slaughtered the Islamic way daily."
        },
        {
          q: "What is the price of a broast meal in Madinah?",
          a: "Prices for broast meals in Madinah typically range between 20 SAR and 60 SAR depending on size and sides. Check the Broast Sara menu for full pricing details."
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
