"use client";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ArticleTwoPage() {
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
      title: "لماذا يختار أهل المدينة بروست سارة؟",
      author: "إدارة بروست سارة",
      intro: "في مدينة تعج بخيارات الطعام والمطاعم العالمية، يبرز سؤال مهم: لماذا يحافظ بروست سارة على مكانته كخيار أول لأهل المدينة المنورة لأكثر من عقد من الزمان؟ الجواب لا يكمن فقط في الطعم اللذيذ، بل في فلسفة كاملة من الجودة، الثقة، والانتماء للمجتمع المحلي.",
      sections: [
        {
          heading: "الجودة تبدأ من المزرعة — لا للمجمد",
          body: "السر الأول والأهم هو التزامنا الصارم باستخدام دجاج محلي طازج 100%. في حين تلجأ العديد من سلاسل الوجبات السريعة إلى الدجاج المجمد المستورد لخفض التكاليف، اختار بروست سارة الطريق الأصعب والأفضل. يُذبح دجاجنا يدوياً بالطريقة الإسلامية كل يوم ويُورد إلى فروعنا طازجاً. هذا الالتزام هو ما يضمن احتفاظ اللحم بعصارته الطبيعية، مما يمنحك قواماً طرياً من الداخل وقرمشة لا تقاوم من الخارج."
        },
        {
          heading: "خلطة سارة السرية — تتبيلة تصل إلى العظم",
          body: "البروست الحقيقي ليس مجرد دجاج مقلي في الزيت. خلطتنا السرية هي نتيجة سنوات من التجارب للوصول إلى التوازن المثالي بين البهارات الشرقية والغربية. نقوم بنقع الدجاج الطازج في التتبيلة لأكثر من 12 ساعة، مما يسمح للنكهات بالتغلغل عميقاً حتى تصل إلى العظم، فلا تتذوق البهارات في القشرة الخارجية فقط كما يحدث في المطاعم الأخرى."
        },
        {
          heading: "الخيار الأول للعائلات والجمعات",
          body: "أهل المدينة يقدرون الكرم والجمعات العائلية. لذلك، صممنا قوائم طعامنا لتناسب كافة الاحتياجات. من وجبات البروست العائلية الكبيرة، إلى وجبات الجمبري الذهبي الفاخر، وشاورما الصاروخ التي تُرضي جميع الأذواق. ومع وجود 8 فروع استراتيجية تغطي أحياء العزيزية، الهجرة، حي البحر، وحتى أبيار الماشي (مفتوح 24 ساعة)، نحن دائماً الأقرب إليك لضمان وصول وجبتك ساخنة في أسرع وقت."
        }
      ],
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        {
          q: "ما هو الفرق بين بروست سارة والمطاعم العالمية؟",
          a: "بروست سارة علامة تجارية محلية تفهم ذوق أهل المدينة. نستخدم دجاجاً محلياً طازجاً يُذبح يومياً، بدلاً من الدجاج المجمد المعتمد في السلاسل العالمية، مما يوفر جودة وطعماً متفوقين."
        },
        {
          q: "هل توفرون وجبات مناسبة للعائلات الكبيرة؟",
          a: "نعم، نوفر وجبات عائلية متنوعة تشمل خيارات البروست المتعددة، المسحب، ووجبات الجمبري (حتى 15 قطعة) لتناسب جميع أفراد العائلة."
        }
      ],
      backLink: "← العودة للمدونة"
    },
    en: {
      title: "Why Do Madinah Locals Choose Broast Sara?",
      author: "Broast Sara Management",
      intro: "In a city bustling with food options and global restaurants, an important question arises: Why has Broast Sara maintained its position as the first choice for Madinah locals for over a decade? The answer lies not just in delicious taste, but in a complete philosophy of quality, trust, and belonging to the local community.",
      sections: [
        {
          heading: "Quality Starts at the Farm — No Frozen Chicken",
          body: "Our first and most important secret is our strict commitment to using 100% fresh local chicken. While many fast-food chains resort to imported frozen chicken to cut costs, Broast Sara chose the harder, better path. Our chicken is manually slaughtered daily using the Islamic method and delivered fresh to our branches. This commitment ensures the meat retains its natural juices, giving you a tender inside and an irresistible crunch on the outside."
        },
        {
          heading: "Sara's Secret Blend — Flavor to the Bone",
          body: "True broast is not just chicken fried in oil. Our secret blend is the result of years of testing to reach the perfect balance of Eastern and Western spices. We marinate our fresh chicken for over 12 hours, allowing the flavors to penetrate deep into the bone. You won't just taste the spices on the outer crust like you do at other restaurants."
        },
        {
          heading: "The First Choice for Families and Gatherings",
          body: "Madinah locals value generosity and family gatherings. Therefore, we designed our menus to suit all needs. From large family broast meals to premium golden shrimp meals, and the Sarookh shawarma that satisfies all tastes. With 8 strategic branches covering Al Aziziyyah, Al Hijrah, Hil Bahr, and even Abiar Al Mashi (open 24/7), we are always closest to you to ensure your meal arrives hot and fast."
        }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "What is the difference between Broast Sara and global chains?",
          a: "Broast Sara is a local brand that understands the taste of Madinah. We use fresh, locally sourced chicken slaughtered daily, instead of the frozen chicken typical in global chains, providing superior quality and taste."
        },
        {
          q: "Do you offer meals suitable for large families?",
          a: "Yes, we offer various family meals including multiple broast options, nuggets, and shrimp meals (up to 15 pieces) to suit everyone in the family."
        }
      ],
      backLink: "← Back to Blog"
    }
  }[lang];

  return (
    <div className="w-full pt-40 pb-32 px-6">
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
