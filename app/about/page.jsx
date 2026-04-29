"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();

  const content = {
    ar: {
      title: "قصتنا — بروست سارة",
      cards: [
        {
          heading: "من قلب المدينة",
          body: "بدأت رحلتنا في قلب المدينة المنورة، حاملين سراً واحداً: تقديم البروست كما يجب أن يكون. لم نكن نبحث فقط عن وجبة سريعة؛ بل أردنا تأسيس ثقافة طعام تجمع بين الجودة المحلية الفائقة والطعم الأسطوري الذي يربط الأجيال. اليوم، بروست سارة ليس مجرد مطعم؛ إنه جزء من تراث المدينة، يخدم الزوار والمقيمين بضيافة لا تنتهي."
        },
        {
          heading: "معايير الجودة",
          body: "التزامنا بالجودة يبدأ من المزرعة. نرفض رفضاً قاطعاً استخدام الدجاج المجمد؛ فكل قطعة دجاج في فروعنا الثمانية هي دجاج محلي طازج، يُورد ويُذبح يدوياً كل يوم وفقاً للشريعة الإسلامية. هذا الالتزام هو ما يمنح دجاجنا طراوته المميزة وقشرته الذهبية المقرمشة التي لا تجدها إلا في سارة."
        },
        {
          heading: "نظرتنا للمستقبل",
          body: "في بروست سارة، نؤمن بأن الحفاظ على القمة يتطلب تطوراً مستمراً. نسعى لتوسيع فروعنا لخدمة عدد أكبر من محبي الدجاج المقرمش، مع الحفاظ الصارم على خلطتنا السرية ومعاييرنا العالية التي بنينا عليها اسمنا."
        }
      ]
    },
    en: {
      title: "Our Story — Broast Sara",
      cards: [
        {
          heading: "From the Heart of Madinah",
          body: "Our journey began in the heart of Madinah, carrying a single secret: serving broast exactly as it should be. We weren't just looking for a fast-food meal; we wanted to establish a food culture that combines superior local quality with the legendary taste that connects generations. Today, Broast Sara is not just a restaurant; it's part of Madinah's heritage, serving visitors and residents with endless hospitality."
        },
        {
          heading: "Quality Standards",
          body: "Our commitment to quality starts at the farm. We strictly refuse the use of frozen chicken; every piece of chicken in our eight branches is fresh local chicken, supplied and manually slaughtered daily according to Islamic Sharia. This commitment is what gives our chicken its signature tenderness and golden crispy crust that you can only find at Sara."
        },
        {
          heading: "Our Vision for the Future",
          body: "At Broast Sara, we believe that maintaining the top position requires continuous evolution. We aim to expand our branches to serve more crispy chicken lovers, while strictly preserving our secret recipe and the high standards upon which we built our name."
        }
      ]
    }
  }[lang];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
        <h1 className={`text-5xl md:text-7xl mb-16 text-center ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {content.title}
        </h1>
        
        {/* STRICT 1-COLUMN LAYOUT: Using flex-col instead of grid to prevent side-by-side wrapping */}
        <div className="flex flex-col gap-12">
          {content.cards.map((card, i) => (
            <div key={i} className="premium-card p-10 md:p-16 flex flex-col gap-6">
              <h2 className={`text-3xl md:text-4xl text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                {card.heading}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
