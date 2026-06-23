import Link from "next/link";
// IMPORT EXTERNAL DATA
import { faqDict } from "../../../constants/faqData";

// 1. ADDED: Bilingual Metadata Generation
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Frequently Asked Questions | Broast Sara" : "الأسئلة الشائعة | بروست سارة",
    description: isEn ? "Your comprehensive guide to Broast Sara branches in Madinah, opening hours, menu, and food safety standards." : "دليلك الشامل لجميع الأسئلة حول فروع بروست سارة في المدينة المنورة، أوقات العمل، قائمة الطعام، ومعايير سلامة الغذاء.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/faq` },
    openGraph: {
     title: isEn ? "Frequently Asked Questions | Broast Sara" : "الأسئلة الشائعة | بروست سارة",
     description: isEn ? "Your comprehensive guide to Broast Sara branches in Madinah, opening hours, menu, and food safety standards." : "دليلك الشامل لجميع الأسئلة حول فروع بروست سارة في المدينة المنورة، أوقات العمل، قائمة الطعام، ومعايير سلامة الغذاء.",
     url: `https://broastsara.com/${resolvedParams.lang}/faq`,
     type: 'website',
     images: [{ url: '/broast-sara-logo.webp', width: 1080, height: 1350, alt: isEn ? 'Broast Sara' : 'بروست سارة' }],
   },
  };
}

export default async function FAQPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = faqDict[lang]; // Pulling from external database

  // 3. Server-Side Schema Generation mapped to current language
  const allQuestions = t.categories.flatMap(cat => cat.questions);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    // 4. LTR/RTL Logic for Punctuation and Typography Stack
    <main className="min-h-screen pt-40 pb-24 px-6 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-32">
          <h1 className="mb-6 text-6xl md:text-8xl text-white font-bold font-instrument">
            {t.title}
          </h1>
          {/* FIXED: Removed uppercase, changed text-[#FFD700] to text-white */}
          <p className="text-xl md:text-3xl text-white font-normal tracking-tight">
            {t.subtitle}
          </p>
        </header>

        <div className="space-y-32">
          {t.categories.map((category, catIndex) => (
            <section key={catIndex}>
              {/* 5. Border logic switches sides based on LTR/RTL */}
              <h2 className={`text-4xl md:text-5xl mb-16 border-[#E31837] text-white font-bold font-instrument ${isEn ? 'pl-8 border-l-4' : 'pr-8 border-r-4'}`}>
                {category.category}
              </h2>

              <div className="grid grid-cols-1 gap-12">
                {category.questions.map((faq, i) => (
                  // 6. liquid-glass styling maintained
                  <div key={i} className="liquid-glass p-10 md:p-16 border-white/10 hover:bg-white/5 transition-all text-center md:text-start">
                    <h3 className="text-2xl md:text-3xl text-[#FFD700] mb-6 font-bold font-instrument">
                      {faq.q}
                    </h3>
                    <p className="text-white text-lg md:text-xl leading-relaxed max-w-full font-normal font-helvetica tracking-[-0.05em]">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}