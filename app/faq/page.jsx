"use client";
import { useLanguage } from "@/context/LanguageContext";

const faqData = [
  // Category 1: Branches & Locations
  {
    categoryAr: "الفروع والمواقع",
    categoryEn: "Branches & Locations",
    questions: [
      {
        qEn: "What are Broast Sara's branches in Madinah?",
        qAr: "ما هي فروع بروست سارة في المدينة المنورة؟",
        aEn: "Broast Sara operates 8 strategic branches across Madinah and Yanbu. Our locations include Al Aziziyyah (Head Office), Al Hijrah, Ad Difa (Al Imam Al Boukhari), Al Jumuah (Hil Bahr), Ar Rawabi (Aljwazat), Az Zahrah (Al Juruf), Abiar Al Mashi, and our coastal branch in Yanbu.",
        aAr: "تدير بروست سارة 8 فروع استراتيجية في المدينة المنورة وينبع. تشمل فروعنا: العزيزية (المقر الرئيسي)، الهجرة، الدفاع (الإمام البخاري)، الجمعة (حي البحر)، الروابي (الجوازات)، الزهراء (الجرف)، أبيار الماشي، وفرعنا الساحلي في ينبع."
      },
      {
        qEn: "Where is the nearest Broast Sara branch?",
        qAr: "أين يوجد أقرب فرع بروست سارة؟",
        aEn: "With 8 branches distributed across key neighborhoods in Madinah, you are never far from Broast Sara. You can use the interactive map on our Locations page to find the branch closest to you and get direct Google Maps routing.",
        aAr: "مع وجود 8 فروع موزعة في الأحياء الرئيسية بالمدينة المنورة، أنت لست بعيداً أبداً عن بروست سارة. يمكنك استخدام الخريطة التفاعلية في صفحة الفروع للعثور على أقرب فرع إليك والحصول على الاتجاهات المباشرة عبر خرائط جوجل."
      },
      {
        qEn: "What is the address of Broast Sara Al Aziziyyah?",
        qAr: "ما هو عنوان فرع بروست سارة في العزيزية؟",
        aEn: "Our main Al Aziziyyah branch is located in the Al Aziziyyah District on Prince Nayef Road, Madinah, 42376. It serves as our flagship location offering our complete menu of fresh broast and legendary shawarma.",
        aAr: "يقع فرعنا الرئيسي في حي العزيزية على طريق الأمير نايف، المدينة المنورة، 42376. يُعد هذا الفرع وجهتنا الرئيسية التي تقدم قائمتنا الكاملة من البروست الطازج والشاورما الأسطورية."
      },
      {
        qEn: "Is there a Broast Sara branch open 24 hours?",
        qAr: "هل يوجد فرع بروست سارة مفتوح 24 ساعة؟",
        aEn: "Yes, our Abiar Al Mashi branch, located on the Hijrah Highway, is open 24 hours a day, 7 days a week. It is strategically placed to serve travelers and late-night diners with fresh, hot meals at any hour.",
        aAr: "نعم، فرع أبيار الماشي الواقع على طريق الهجرة السريع مفتوح على مدار 24 ساعة، 7 أيام في الأسبوع. تم اختياره استراتيجياً لخدمة المسافرين وعشاق الوجبات المتأخرة بوجبات طازجة وساخنة في أي وقت."
      },
      {
        qEn: "Do you have a branch in Yanbu?",
        qAr: "هل يوجد فرع لبروست سارة في ينبع؟",
        aEn: "Yes, we have a dedicated branch in Yanbu located in the Al Amarah district. It brings the authentic taste of Madinah's famous broast and signature garlic sauce to the coastal city.",
        aAr: "نعم، لدينا فرع مخصص في ينبع يقع في حي العمارة. هذا الفرع ينقل الطعم الأصيل لبروست المدينة المنورة الشهير وصلصة الثوم الأسطورية إلى المدينة الساحلية."
      }
    ]
  },
  // Category 2: Hours & Availability
  {
    categoryAr: "أوقات العمل",
    categoryEn: "Hours & Availability",
    questions: [
      {
        qEn: "What are Broast Sara's opening hours?",
        qAr: "ما هي أوقات عمل بروست سارة؟",
        aEn: "Most of our Madinah branches open daily at 12:30 PM and close at 2:30 AM, ensuring you can enjoy our fresh chicken for lunch, dinner, and late-night cravings. Our Abiar Al Mashi branch operates 24 hours daily.",
        aAr: "تفتح معظم فروعنا في المدينة المنورة يومياً من الساعة 12:30 ظهراً وتغلق في الساعة 2:30 فجراً، مما يضمن لك الاستمتاع بدجاجنا الطازج في الغداء والعشاء وأوقات السهر. بينما يعمل فرع أبيار الماشي على مدار 24 ساعة يومياً."
      },
      {
        qEn: "Is Broast Sara open now?",
        qAr: "هل بروست سارة مفتوح الآن؟",
        aEn: "If the current time is between 12:30 PM and 2:30 AM, our main city branches are open and ready to serve you. You can always visit our Abiar Al Mashi branch, which never closes.",
        aAr: "إذا كان الوقت الحالي بين الساعة 12:30 ظهراً و 2:30 فجراً، فإن فروعنا الرئيسية في المدينة مفتوحة ومستعدة لخدمتك. ويمكنك دائماً زيارة فرع أبيار الماشي الذي لا يُغلق أبداً."
      },
      {
        qEn: "Does Broast Sara operate during Ramadan?",
        qAr: "هل بروست سارة يعمل في رمضان؟",
        aEn: "Yes, Broast Sara operates during the holy month of Ramadan with adjusted timings to perfectly accommodate Iftar and Suhoor schedules. We offer special family meals specifically designed for Ramadan gatherings.",
        aAr: "نعم، يعمل بروست سارة خلال شهر رمضان المبارك بأوقات معدلة لتناسب مواعيد الإفطار والسحور بشكل مثالي. كما نقدم وجبات عائلية خاصة مصممة خصيصاً لتجمعات رمضان."
      }
    ]
  },
  // Category 3: Halal & Food Safety
  {
    categoryAr: "الحلال وسلامة الغذاء",
    categoryEn: "Halal & Food Safety",
    questions: [
      {
        qEn: "Is Broast Sara's chicken halal?",
        qAr: "هل دجاج بروست سارة حلال؟",
        aEn: "Absolutely. 100% of our chicken is certified halal. It is manually slaughtered strictly according to Islamic Sharia law every single day right here in Madinah.",
        aAr: "بالتأكيد. دجاجنا معتمد كحلال بنسبة 100%. يتم ذبحه يدوياً وبشكل صارم وفقاً للشريعة الإسلامية كل يوم هنا في المدينة المنورة."
      },
      {
        qEn: "Is the chicken fresh or frozen?",
        qAr: "هل الدجاج طازج أم مجمد؟",
        aEn: "We exclusively use 100% fresh, locally sourced chicken. We never use frozen chicken. This daily fresh supply is the secret behind the unmatched juiciness and tender texture of our broast.",
        aAr: "نحن نستخدم حصرياً دجاجاً محلياً طازجاً 100%. لا نستخدم الدجاج المجمد أبداً. هذا التوريد اليومي الطازج هو السر وراء الطراوة والعصارة التي لا تُضاهى في البروست الخاص بنا."
      },
      {
        qEn: "What is Broast Sara's food safety policy?",
        qAr: "ما هي سياسة سلامة الغذاء في بروست سارة؟",
        aEn: "Broast Sara adheres to the highest global HACCP food safety standards. From the daily local slaughter to our temperature-controlled kitchens and strict staff hygiene protocols, we guarantee the utmost cleanliness and safety.",
        aAr: "تلتزم بروست سارة بأعلى معايير سلامة الغذاء العالمية (HACCP). من الذبح المحلي اليومي إلى مطابخنا التي يتم التحكم في درجة حرارتها وبروتوكولات النظافة الصارمة للموظفين، نحن نضمن أقصى درجات النظافة والسلامة."
      },
      {
        qEn: "Do you use local chicken?",
        qAr: "هل تستخدمون دجاجاً محلياً؟",
        aEn: "Yes, supporting local quality is a core brand value. All our chicken is sourced from premium, trusted local farms in Saudi Arabia to guarantee daily freshness and quality control.",
        aAr: "نعم، دعم الجودة المحلية هو من القيم الأساسية لعلامتنا التجارية. يتم توريد جميع دجاجنا من مزارع محلية ممتازة وموثوقة في المملكة العربية السعودية لضمان الطازجية اليومية ومراقبة الجودة."
      }
    ]
  },
  // Category 4: Delivery & Ordering
  {
    categoryAr: "التوصيل والطلب",
    categoryEn: "Delivery & Ordering",
    questions: [
      {
        qEn: "How do I order from Broast Sara online?",
        qAr: "كيف أطلب من بروست سارة أون لاين؟",
        aEn: "You can easily order Broast Sara online for rapid delivery through our certified partners, HungerStation and Yango. Simply download their apps and search for your nearest Broast Sara branch.",
        aAr: "يمكنك بسهولة طلب بروست سارة أون لاين لتوصيل سريع عبر شركائنا المعتمدين، هنقرستيشن ويانغو. ببساطة قم بتحميل تطبيقاتهم وابحث عن أقرب فرع لبروست سارة إليك."
      },
      {
        qEn: "Is Broast Sara on HungerStation and Yango?",
        qAr: "هل بروست سارة موجود على هنقرستيشن ويانغو؟",
        aEn: "Yes, all our Madinah branches are fully integrated with HungerStation and Yango. You can find direct links to order from these platforms on our website's Order Now page.",
        aAr: "نعم، جميع فروعنا في المدينة المنورة متوفرة بالكامل على هنقرستيشن ويانغو. يمكنك العثور على روابط مباشرة للطلب من هذه المنصات في صفحة \"اطلب الآن\" على موقعنا."
      },
      {
        qEn: "Does Broast Sara deliver to homes?",
        qAr: "هل بروست سارة يوصل للمنازل؟",
        aEn: "Yes, we deliver hot, crispy meals directly to your doorstep anywhere in Madinah through our delivery partners. You can also call your local branch directly to arrange pickup orders.",
        aAr: "نعم، نقوم بتوصيل وجبات ساخنة ومقرمشة مباشرة إلى باب منزلك في أي مكان في المدينة المنورة عبر شركاء التوصيل. يمكنك أيضاً الاتصال بفرعك المحلي مباشرة لترتيب طلبات الاستلام."
      },
      {
        qEn: "What is Broast Sara's general phone number?",
        qAr: "ما هو رقم هاتف بروست سارة الموحد؟",
        aEn: "For general inquiries, you can reach our main Al Aziziyyah branch at 0596624929. For specific orders, please visit our Locations page to find the direct phone number and WhatsApp link for your nearest branch.",
        aAr: "للاستفسارات العامة، يمكنك الوصول إلى فرعنا الرئيسي في العزيزية على الرقم 0596624929. للطلبات المحددة، يُرجى زيارة صفحة الفروع للعثور على رقم الهاتف المباشر ورابط الواتساب للفرع الأقرب إليك."
      }
    ]
  },
  // Category 5: Menu & Products
  {
    categoryAr: "قائمة الطعام والمنتجات",
    categoryEn: "Menu & Products",
    questions: [
      {
        qEn: "What is the best meal at Broast Sara?",
        qAr: "ما هي أفضل وجبة في بروست سارة؟",
        aEn: "Our most famous item is the 4-Piece Original Broast Meal, featuring fresh local chicken marinated in our secret blend. However, our Legendary Sarookh Shawarma with signature garlic sauce is a massive local favorite.",
        aAr: "وجبتنا الأكثر شهرة هي وجبة البروست الأصلي 4 قطع، والتي تتميز بدجاج محلي طازج متبل بخلطتنا السرية. ومع ذلك، فإن شاورما الصاروخ الأسطورية مع صلصة الثوم المميزة تحظى بشعبية محلية هائلة."
      },
      {
        qEn: "Does Broast Sara have spicy broast?",
        qAr: "هل يوجد بروست حراق في بروست سارة؟",
        aEn: "Yes! Our Spicy Broast is specially marinated with a unique blend of chili and spices that provides a perfect, balanced heat without overwhelming the natural flavor of the fresh chicken.",
        aAr: "نعم! البروست الحراق لدينا متبل خصيصاً بمزيج فريد من الفلفل والبهارات التي توفر حرارة مثالية ومتوازنة دون أن تطغى على النكهة الطبيعية للدجاج الطازج."
      },
      {
        qEn: "What is the Sarookh shawarma?",
        qAr: "ما هي شاورما الصاروخ؟",
        aEn: "The Sarookh is our legendary large shawarma. It features perfectly slow-roasted chicken, wrapped in a large, thin saj bread, and generously layered with fries and our famous signature garlic sauce.",
        aAr: "الصاروخ هو الشاورما الأسطورية كبيرة الحجم لدينا. يتميز بدجاج مشوي ببطء ومثالية، ملفوف في خبز صاج كبير ورقيق، ومحشو بسخاء بالبطاطس وصلصة الثوم الشهيرة لدينا."
      },
      {
        qEn: "Does Broast Sara have family meals?",
        qAr: "هل توجد وجبات عائلية في بروست سارة؟",
        aEn: "Yes, we offer excellent value for groups with our 8-Piece Broast Meals (available in Original or Spicy) and our large Double Arabi Shawarma Plates, all served with generous portions of family-sized fries and sides.",
        aAr: "نعم، نحن نقدم قيمة ممتازة للمجموعات من خلال وجبات البروست 8 قطع (متوفرة عادي أو حراق) وصحون الشاورما العربي المزدوجة الكبيرة، وكلها تقدم مع حصص سخية من البطاطس العائلية والمقبلات."
      }
    ]
  }
];

export default function FAQPage() {
  const { lang } = useLanguage();

  // Generate FAQPage JSON-LD
  const allQuestions = faqData.flatMap(cat => cat.questions);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map(item => ({
      "@type": "Question",
      "name": lang === 'ar' ? item.qAr : item.qEn,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": lang === 'ar' ? item.aAr : item.aEn
      }
    }))
  };

  return (
    <main className="min-h-screen pt-40 pb-24 px-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-32 animate-premium-in">
          <h1 className={`mb-6 tracking-tighter ${lang === 'en' ? 'text-6xl md:text-9xl' : 'text-6xl md:text-9xl'}`}>
            {lang === 'ar' ? "الأسئلة الشائعة" : "Frequent Questions"}
          </h1>
          <p className="text-xl md:text-3xl text-brand-yellow font-normal uppercase tracking-tight">
            {lang === 'ar' ? "دليلك الكامل لخدمات بروست سارة (AEO Optimized)" : "Your Complete Guide to Broast Sara Services"}
          </p>
        </header>

        <div className="space-y-32">
          {faqData.map((category, catIndex) => (
            <section key={catIndex} className="animate-premium-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
              <h2 className={`text-4xl md:text-6xl mb-16 border-brand-red pr-8 ${lang === 'en' ? 'border-l-4 pl-8 en-accent-heading' : 'border-r-4'}`}>
                {lang === 'ar' ? category.categoryAr : category.categoryEn}
              </h2>
              <div className="grid grid-cols-1 gap-12">
                {category.questions.map((faq, i) => (
                  <div key={i} className="premium-card p-12 md:p-20 border-white/10 hover:bg-black/40 transition-all">
                    <h3 className={`text-3xl md:text-4xl text-brand-yellow mb-10 ${lang === 'en' ? 'font-helvetica tracking-tighter' : ''}`}>
                      {lang === 'ar' ? faq.qAr : faq.qEn}
                    </h3>
                    <p className="text-white text-2xl leading-relaxed max-w-full font-normal">
                      {lang === 'ar' ? faq.aAr : faq.aEn}
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
