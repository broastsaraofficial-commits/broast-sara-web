"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleEightPage() {
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
      title: "وجبات رمضان — أفضل خيارات الإفطار والسحور في المدينة",
      author: "إدارة بروست سارة",
      intro: "شهر رمضان في المدينة المنورة له روحانية خاصة وطابع فريد يجمع العائلات والأصدقاء على موائد الإفطار والسحور. بعد صيام يوم طويل، يبحث الكثيرون عن وجبات ساخنة، لذيذة، ومُشبعة. في بروست سارة، صممنا خياراتنا لتكون الرفيق المثالي لمائدتك الرمضانية.",
      sections: [
        {
          heading: "1. وجبات الإفطار العائلية (التوفير والمشاركة)",
          body: "رمضان هو شهر المشاركة. بدلاً من قضاء ساعات في المطبخ، نقدم لك وجبات التوفير العائلية التي تتضمن قطع البروست المقرمشة الذهبية، البطاطس المقلية الطازجة، الخبز، وصلصة الثوم الأسطورية. دجاجنا المحلي الطازج يضمن لك وجبة إفطار غنية بالبروتين تعوضك عن طاقة اليوم."
        },
        {
          heading: "2. خيارات السحور الخفيفة والسريعة",
          body: "لوجبة السحور، يفضل الكثيرون خيارات أسرع وأسهل في التناول. شاورما الصاروخ بخبز الصاج أو وجبات المسحب (بدون عظم) تعتبر خيارات مثالية لسحور شهي وسريع يمنحك الشبع الكافي لليوم التالي دون الشعور بالتخمة المفرطة."
        },
        {
          heading: "3. جاهزية الفروع قبل الإفطار وبعد التراويح",
          body: "نحن نتفهم أهمية الوقت في رمضان. تعمل فروعنا الثمانية في المدينة المنورة بطاقة قصوى لتجهيز طلبات الاستلام قبل أذان المغرب مباشرة لضمان وصول وجبتك ساخنة إلى مائدتك. كما تظل أبوابنا مفتوحة لاستقبالكم بعد صلاة التراويح وحتى ساعات الفجر الأولى لتلبية طلبات السحور."
        }
      ],
      faqTitle: "أسئلة شائعة حول طلبات رمضان",
      faqs: [
        {
          q: "متى تفتح فروع بروست سارة في رمضان؟",
          a: "تفتح الفروع أبوابها قبل أذان المغرب بوقت كافٍ لتجهيز طلبات الإفطار، وتستمر في العمل وتقديم الطلبات حتى وقت السحور."
        },
        {
          q: "هل يجب الطلب المسبق لوجبات الإفطار العائلية؟",
          a: "لضمان استلام طلبك ساخناً وفي الوقت المحدد قبل الأذان، نوصي دائماً بالطلب المسبق عبر الواتساب للفرع الأقرب إليك أو عبر تطبيقات التوصيل."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Ramadan Meals — Best Options for Iftar and Suhoor",
      author: "Broast Sara Management",
      intro: "Ramadan in Madinah has a special spirituality and a unique character that brings families and friends together around Iftar and Suhoor tables. After a long day of fasting, many look for hot, delicious, and fulfilling meals. At Broast Sara, we have tailored our options to be the perfect companion for your Ramadan table.",
      sections: [
        {
          heading: "1. Family Iftar Meals (Value and Sharing)",
          body: "Ramadan is the month of sharing. Instead of spending hours in the kitchen, we offer family value meals that include our golden crispy broast pieces, fresh french fries, bread, and our legendary garlic sauce. Our fresh local chicken guarantees a protein-rich Iftar meal to replenish your day's energy."
        },
        {
          heading: "2. Light and Quick Suhoor Options",
          body: "For Suhoor, many prefer faster, easy-to-eat options. Our Sarookh shawarma in Saj bread or boneless chicken nuggets meals are perfect choices for a delicious and quick Suhoor, keeping you fulfilled for the next day without feeling overly heavy."
        },
        {
          heading: "3. Branch Readiness Before Iftar and After Taraweeh",
          body: "We understand the importance of time in Ramadan. Our eight branches in Madinah operate at maximum capacity to prepare pickup orders right before the Maghrib call to prayer, ensuring your meal arrives hot at your table. Our doors also remain open after Taraweeh prayers until the early hours of dawn to serve Suhoor orders."
        }
      ],
      faqTitle: "Frequently Asked Questions About Ramadan Orders",
      faqs: [
        {
          q: "When do Broast Sara branches open in Ramadan?",
          a: "Branches open well before the Maghrib call to prayer to prepare Iftar orders, and continue operating and serving orders until Suhoor time."
        },
        {
          q: "Should I pre-order large family Iftar meals?",
          a: "To ensure you receive your order hot and exactly on time before the Adhan, we highly recommend pre-ordering via WhatsApp from your nearest branch or through delivery apps."
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
