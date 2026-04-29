"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleTenPage() {
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
      title: "الدجاج الطازج مقابل المجمد — لماذا يهم هذا الاختلاف؟",
      author: "إدارة بروست سارة",
      intro: "في عالم الوجبات السريعة، تلجأ العديد من المطاعم إلى حلول توفير التكاليف، وأبرزها استخدام الدجاج المجمد المستورد. في المقابل، نلتزم في بروست سارة بتقديم الدجاج المحلي الطازج 100%. قد يبدو الأمر تفصيلاً صغيراً، لكنه يصنع فارقاً جذرياً في المذاق، القوام، والقيمة الغذائية لوجبتك.",
      sections: [
        {
          heading: "1. الطعم والعصارة (تأثير التجميد على الخلايا)",
          body: "عندما يتم تجميد الدجاج، تتحول السوائل داخل أنسجة اللحم إلى بلورات ثلجية دقيقة تقوم بتمزيق جدران الخلايا. وعند الإذابة، تتسرب هذه العصارة الطبيعية خارج اللحم. النتيجة؟ دجاج جاف وقاسٍ بعد القلي. الدجاج الطازج يحتفظ بكامل عصارته الطبيعية، مما يمنحك طراوة تذوب في الفم مع كل قضمة."
        },
        {
          heading: "2. القيمة الغذائية والإضافات",
          body: "الدجاج المجمد تجارياً غالباً ما يُحقن بمحاليل ملحية أو مواد حافظة لزيادة وزنه وإطالة فترة صلاحيته، مما يرفع نسبة الصوديوم بشكل كبير. الدجاج الطازج الذي نستخدمه خالٍ تماماً من هذه الإضافات؛ إنه بروتين طبيعي ونظيف يأتي من المزرعة إلى مطبخنا مباشرة."
        },
        {
          heading: "3. كيف يتفاعل الدجاج الطازج مع القلي بالضغط؟",
          body: "سر البروست المثالي يكمن في تقنية القلي بالضغط. الدجاج الطازج يتفاعل بشكل أفضل بكثير مع هذه التقنية، حيث يمتص التتبيلة بعمق، وتلتصق القشرة الخارجية باللحم بشكل أقوى، مما يمنع انفصالها أثناء القلي ويوفر قرمشة ذهبية متساوية لا يمكن تحقيقها مع الدجاج المجمد."
        },
        {
          heading: "4. التزام بروست سارة",
          body: "نحن نؤمن بأن أهل المدينة يستحقون الأفضل. لذلك، نتعاقد مع مزارع محلية موثوقة لتوريد دجاج طازج يُذبح يدوياً بالطريقة الإسلامية كل يوم. نحن لا نستخدم الدجاج المجمد أبداً، ولا نساوم على هذا المبدأ تحت أي ظرف."
        }
      ],
      faqTitle: "أسئلة شائعة حول جودة الدجاج",
      faqs: [
        {
          q: "كيف يمكنني معرفة ما إذا كان الدجاج طازجاً أم مجمداً بعد القلي؟",
          a: "الدجاج الطازج يتميز بلحم أبيض ناصع من الداخل، ويكون طرياً جداً وغنياً بالعصارة. أما الدجاج المجمد فيميل لونه إلى الداكن قليلاً حول العظام ويكون لحمه أليافاً جافة."
        },
        {
          q: "هل الدجاج الطازج أغلى من المجمد؟",
          a: "نعم، تكلفة توريد الدجاج الطازج يومياً أعلى بكثير من تخزين الدجاج المجمد. لكننا في بروست سارة نتحمل هذه التكلفة لنضمن لك أعلى جودة ممكنة بأسعار تنافسية."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Fresh vs Frozen Chicken — Why the Difference Matters?",
      author: "Broast Sara Management",
      intro: "In the fast-food world, many restaurants resort to cost-saving solutions, most notably the use of imported frozen chicken. In contrast, Broast Sara strictly commits to serving 100% fresh local chicken. It may seem like a small detail, but it makes a radical difference in the taste, texture, and nutritional value of your meal.",
      sections: [
        {
          heading: "1. Taste and Juiciness (The Cellular Impact of Freezing)",
          body: "When chicken is frozen, the liquids inside the meat tissues turn into sharp ice crystals that rupture the cell walls. Upon thawing, these natural juices leak out. The result? Dry, tough chicken after frying. Fresh chicken retains all its natural juices, giving you mouth-watering tenderness with every bite."
        },
        {
          heading: "2. Nutritional Value and Additives",
          body: "Commercially frozen chicken is often injected with saline solutions or preservatives to increase its weight and extend its shelf life, significantly raising its sodium content. The fresh chicken we use is completely free of these additives; it is pure, clean protein straight from the farm to our kitchens."
        },
        {
          heading: "3. How Fresh Chicken Reacts to Pressure Frying",
          body: "The secret to perfect broast lies in the pressure-frying technique. Fresh chicken reacts far better to this method. It absorbs the marinade deeply, and the outer breading adheres to the meat much stronger, preventing it from flaking off during frying and providing an even, golden crunch that simply cannot be achieved with frozen chicken."
        },
        {
          heading: "4. The Broast Sara Commitment",
          body: "We believe the people of Madinah deserve the best. Therefore, we partner with reliable local farms to supply fresh chicken that is manually slaughtered the Islamic way every single day. We never use frozen chicken, and we never compromise on this principle under any circumstance."
        }
      ],
      faqTitle: "Frequently Asked Questions About Chicken Quality",
      faqs: [
        {
          q: "How can I tell if chicken is fresh or frozen after it's fried?",
          a: "Fresh chicken features bright white meat inside, and is incredibly tender and juicy. Frozen chicken tends to be slightly darker near the bones and has dry, stringy meat fibers."
        },
        {
          q: "Is fresh chicken more expensive than frozen?",
          a: "Yes, the cost of sourcing fresh chicken daily is much higher than storing frozen chicken. However, at Broast Sara, we absorb this cost to guarantee you the highest possible quality at competitive prices."
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
