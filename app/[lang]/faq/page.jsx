import Link from "next/link";

// 1. ADDED: Bilingual Metadata Generation
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Frequently Asked Questions | Broast Sara" : "الأسئلة الشائعة | بروست سارة",
    description: isEn ? "Your comprehensive guide to Broast Sara branches in Madinah, opening hours, menu, and food safety standards." : "دليلك الشامل لجميع الأسئلة حول فروع بروست سارة في المدينة المنورة، أوقات العمل، قائمة الطعام، ومعايير سلامة الغذاء.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/faq` }
  };
}

// 2. ADDED: Full Bilingual Dictionary
const dict = {
  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "دليلك الكامل لخدمات بروست سارة",
    categories: [
      {
        category: "الفروع والمواقع",
        questions: [
          { q: "ما هي فروع بروست سارة في المدينة المنورة؟", a: "تدير بروست سارة 8 فروع استراتيجية في المدينة المنورة وينبع. تشمل فروعنا: العزيزية (المقر الرئيسي)، الهجرة، الدفاع (الإمام البخاري)، الجمعة (حي البحر)، الروابي (الجوازات)، الزهراء (الجرف)، أبيار الماشي، وفرعنا الساحلي في ينبع." },
          { q: "أين يوجد أقرب فرع بروست سارة؟", a: "مع وجود 8 فروع موزعة في الأحياء الرئيسية بالمدينة المنورة، أنت لست بعيداً أبداً عن بروست سارة. يمكنك استخدام الخريطة التفاعلية في صفحة الفروع للعثور على أقرب فرع إليك والحصول على الاتجاهات المباشرة عبر خرائط جوجل." },
          { q: "ما هو عنوان فرع بروست سارة في العزيزية؟", a: "يقع فرعنا الرئيسي في حي العزيزية على طريق الأمير نايف، المدينة المنورة، 42376. يُعد هذا الفرع وجهتنا الرئيسية التي تقدم قائمتنا الكاملة من البروست الطازج والشاورما الأسطورية." },
          { q: "هل يوجد فرع بروست سارة مفتوح 24 ساعة؟", a: "نعم، فرع أبيار الماشي الواقع على طريق الهجرة السريع مفتوح على مدار 24 ساعة، 7 أيام في الأسبوع. تم اختياره استراتيجياً لخدمة المسافرين وعشاق الوجبات المتأخرة بوجبات طازجة وساخنة في أي وقت." },
          { q: "هل يوجد فرع لبروست سارة في ينبع؟", a: "نعم، لدينا فرع مخصص في ينبع يقع في حي العمارة. هذا الفرع ينقل الطعم الأصيل لبروست المدينة المنورة الشهير وصلصة الثوم الأسطورية إلى المدينة الساحلية." }
        ]
      },
      {
        category: "أوقات العمل",
        questions: [
          { q: "ما هي أوقات عمل بروست سارة؟", a: "تفتح معظم فروعنا في المدينة المنورة يومياً من الساعة 12:30 ظهراً وتغلق في الساعة 2:30 فجراً، مما يضمن لك الاستمتاع بدجاجنا الطازج في الغداء والعشاء وأوقات السهر. بينما يعمل فرع أبيار الماشي على مدار 24 ساعة يومياً." },
          { q: "هل بروست سارة مفتوح الآن؟", a: "إذا كان الوقت الحالي بين الساعة 12:30 ظهراً و 2:30 فجراً، فإن فروعنا الرئيسية في المدينة مفتوحة ومستعدة لخدمتك. ويمكنك دائماً زيارة فرع أبيار الماشي الذي لا يُغلق أبداً." },
          { q: "هل بروست سارة يعمل في رمضان؟", a: "نعم، يعمل بروست سارة خلال شهر رمضان المبارك بأوقات معدلة لتناسب مواعيد الإفطار والسحور بشكل مثالي. كما نقدم وجبات عائلية خاصة مصممة خصيصاً لتجمعات رمضان." }
        ]
      },
      {
        category: "الحلال وسلامة الغذاء",
        questions: [
          { q: "هل دجاج بروست سارة حلال؟", a: "بالتأكيد. دجاجنا معتمد كحلال بنسبة 100%. يتم ذبحه يدوياً وبشكل صارم وفقاً للشريعة الإسلامية كل يوم هنا في المدينة المنورة." },
          { q: "هل الدجاج طازج أم مجمد؟", a: "نحن نستخدم حصرياً دجاجاً محلياً طازجاً 100%. لا نستخدم الدجاج المجمد أبداً. هذا التوريد اليومي الطازج هو السر وراء الطراوة والعصارة التي لا تُضاهى في البروست الخاص بنا." },
          { q: "ما هي سياسة سلامة الغذاء في بروست سارة؟", a: "تلتزم بروست سارة بأعلى معايير سلامة الغذاء العالمية (HACCP). من الذبح المحلي اليومي إلى مطابخنا التي يتم التحكم في درجة حرارتها وبروتوكولات النظافة الصارمة للموظفين، نحن نضمن أقصى درجات النظافة والسلامة." },
          { q: "هل تستخدمون دجاجاً محلياً؟", a: "نعم، دعم الجودة المحلية هو من القيم الأساسية لعلامتنا التجارية. يتم توريد جميع دجاجنا من مزارع محلية ممتازة وموثوقة في المملكة العربية السعودية لضمان الطازجية اليومية ومراقبة الجودة." }
        ]
      },
      {
        category: "التوصيل والطلب",
        questions: [
          { q: "كيف أطلب من بروست سارة أون لاين؟", a: "يمكنك بسهولة طلب بروست سارة أون لاين لتوصيل سريع عبر شركائنا المعتمدين، هنقرستيشن ويانغو. ببساطة قم بتحميل تطبيقاتهم وابحث عن أقرب فرع لبروست سارة إليك." },
          { q: "هل بروست سارة موجود على هنقرستيشن ويانغو؟", a: "نعم، جميع فروعنا في المدينة المنورة متوفرة بالكامل على هنقرستيشن ويانغو. يمكنك العثور على روابط مباشرة للطلب من هذه المنصات في صفحة 'اطلب الآن' على موقعنا." },
          { q: "هل بروست سارة يوصل للمنازل؟", a: "نعم، نقوم بتوصيل وجبات ساخنة ومقرمشة مباشرة إلى باب منزلك في أي مكان في المدينة المنورة عبر شركاء التوصيل. يمكنك أيضاً الاتصال بفرعك المحلي مباشرة لترتيب طلبات الاستلام." },
          { q: "ما هو رقم هاتف بروست سارة الموحد؟", a: "للاستفسارات العامة، يمكنك الوصول إلى فرعنا الرئيسي في العزيزية على الرقم 0596624929. للطلبات المحددة، يُرجى زيارة صفحة الفروع للعثور على رقم الهاتف المباشر ورابط الواتساب للفرع الأقرب إليك." }
        ]
      },
      {
        category: "قائمة الطعام والمنتجات",
        questions: [
          { q: "ما هي أفضل وجبة في بروست سارة؟", a: "وجبتنا الأكثر شهرة هي وجبة البروست الأصلي 4 قطع، والتي تتميز بدجاج محلي طازج متبل بخلطتنا السرية. ومع ذلك، فإن شاورما الصاروخ الأسطورية مع صلصة الثوم المميزة تحظى بشعبية محلية هائلة." },
          { q: "هل يوجد بروست حراق في بروست سارة؟", a: "نعم! البروست الحراق لدينا متبل خصيصاً بمزيج فريد من الفلفل والبهارات التي توفر حرارة مثالية ومتوازنة دون أن تطغى على النكهة الطبيعية للدجاج الطازج." },
          { q: "ما هي شاورما الصاروخ؟", a: "الصاروخ هو الشاورما الأسطورية كبيرة الحجم لدينا. يتميز بدجاج مشوي ببطء ومثالية، ملفوف في خبز صاج كبير ورقيق، ومحشو بسخاء بالبطاطس وصلصة الثوم الشهيرة لدينا." },
          { q: "هل توجد وجبات عائلية في بروست سارة؟", a: "نعم، نحن نقدم قيمة ممتازة للمجموعات من خلال وجبات البروست 8 قطع (متوفرة عادي أو حراق) وصحون الشاورما العربي المزدوجة الكبيرة، وكلها تقدم مع حصص سخية من البطاطس العائلية والمقبلات." }
        ]
      }
    ]
  },
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Your Complete Guide to Broast Sara",
    categories: [
      {
        category: "Branches & Locations",
        questions: [
          { q: "What are Broast Sara's branches in Madinah?", a: "Broast Sara operates 8 strategic branches across Madinah and Yanbu. Our branches include: Al Aziziyyah (Main), Al Hijrah, Ad Difa (Imam Bukhari), Al Jumuah (Hil Bahr), Ar Rawabi (Aljwazat), Az Zahrah (Al Juruf), Abiar Al Mashi, and our coastal branch in Yanbu." },
          { q: "Where is the nearest Broast Sara branch?", a: "With 8 branches distributed across key neighborhoods in Madinah, you are never far from Broast Sara. You can use the interactive map on our Locations page to find the branch nearest to you and get direct Google Maps routing." },
          { q: "What is the address of Broast Sara in Al Aziziyyah?", a: "Our main branch is located in Al Aziziyyah district on Prince Naif Road, Madinah, 42376. This branch serves as our flagship destination offering our complete menu of fresh broast and legendary shawarma." },
          { q: "Is there a Broast Sara branch open 24 hours?", a: "Yes, the Abiar Al Mashi branch located on the Al Hijrah highway is open 24 hours a day, 7 days a week. It is strategically positioned to serve travelers and late-night diners with hot, fresh meals anytime." },
          { q: "Is there a Broast Sara branch in Yanbu?", a: "Yes, we have a dedicated branch in Yanbu located in the Al Amarah district. This branch brings the authentic taste of Madinah's famous broast and legendary garlic sauce to the coastal city." }
        ]
      },
      {
        category: "Hours & Availability",
        questions: [
          { q: "What are Broast Sara's opening hours?", a: "Most of our Madinah branches open daily from 12:30 PM and close at 2:30 AM, ensuring you can enjoy our fresh chicken for lunch, dinner, and late-night cravings. The Abiar Al Mashi branch operates 24 hours daily." },
          { q: "Is Broast Sara open now?", a: "If the current time is between 12:30 PM and 2:30 AM, our main city branches are open and ready to serve you. You can always visit the Abiar Al Mashi branch, which never closes." },
          { q: "Does Broast Sara operate during Ramadan?", a: "Yes, Broast Sara operates during the holy month of Ramadan with adjusted hours to perfectly align with Iftar and Suhoor times. We also offer special family meals tailored for Ramadan gatherings." }
        ]
      },
      {
        category: "Halal & Food Safety",
        questions: [
          { q: "Is Broast Sara's chicken halal?", a: "Absolutely. Our chicken is 100% certified halal. It is manually and strictly slaughtered according to Islamic Sharia every single day right here in Madinah." },
          { q: "Is the chicken fresh or frozen?", a: "We exclusively use 100% fresh local chicken. We never use frozen chicken. This daily fresh sourcing is the secret behind the unmatched tenderness and juiciness of our broast." },
          { q: "What is Broast Sara's food safety policy?", a: "Broast Sara adheres to the highest global food safety standards (HACCP). From daily local slaughtering to our temperature-controlled kitchens and strict staff hygiene protocols, we guarantee the utmost cleanliness and safety." },
          { q: "Do you use local chicken?", a: "Yes, supporting local quality is a core value of our brand. All our chicken is sourced from premium, trusted local farms in Saudi Arabia to ensure daily freshness and quality control." }
        ]
      },
      {
        category: "Delivery & Ordering",
        questions: [
          { q: "How do I order from Broast Sara online?", a: "You can easily order Broast Sara online for fast delivery through our official partners, HungerStation and Yango. Simply download their apps and search for your nearest Broast Sara branch." },
          { q: "Is Broast Sara on HungerStation and Yango?", a: "Yes, all our branches in Madinah are fully available on HungerStation and Yango. You can find direct order links to these platforms on the 'Order Now' page of our website." },
          { q: "Does Broast Sara deliver to homes?", a: "Yes, we deliver hot and crispy meals directly to your door anywhere in Madinah via our delivery partners. You can also call your local branch directly to arrange pickup orders." },
          { q: "What is Broast Sara's unified phone number?", a: "For general inquiries, you can reach our main branch in Al Aziziyyah at 0596624929. For specific orders, please visit our Locations page to find the direct phone number and WhatsApp link for the branch closest to you." }
        ]
      },
      {
        category: "Menu & Products",
        questions: [
          { q: "What is the best meal at Broast Sara?", a: "Our most famous meal is the 4-piece Original Broast, featuring fresh local chicken marinated in our secret blend. However, our legendary Sarookh Shawarma with signature garlic sauce is a massive local favorite." },
          { q: "Is there spicy broast at Broast Sara?", a: "Yes! Our spicy broast is specially marinated with a unique blend of peppers and spices that provides a perfect, balanced heat without overpowering the natural flavor of the fresh chicken." },
          { q: "What is the Sarookh Shawarma?", a: "The Sarookh is our legendary large-sized shawarma. It features perfectly slow-roasted chicken, wrapped in large, thin Saj bread, and generously stuffed with fries and our famous garlic sauce." },
          { q: "Are there family meals at Broast Sara?", a: "Yes, we offer excellent value for groups with our 8-piece Broast meals (available regular or spicy) and large double Arabic Shawarma platters, all served with generous portions of family fries and appetizers." }
        ]
      }
    ]
  }
};

export default async function FAQPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  // 3. ADDED: Server-Side Schema Generation mapped to current language
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
    // 4. FIXED: LTR/RTL Logic for Punctuation and Typography Stack
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
          <p className="text-xl md:text-3xl text-[#FFD700] font-normal uppercase tracking-tight">
            {t.subtitle}
          </p>
        </header>

        <div className="space-y-32">
          {t.categories.map((category, catIndex) => (
            <section key={catIndex}>
              {/* 5. FIXED: Border logic switches sides based on LTR/RTL */}
              <h2 className={`text-4xl md:text-5xl mb-16 border-[#E31837] text-white font-bold font-instrument ${isEn ? 'pl-8 border-l-4' : 'pr-8 border-r-4'}`}>
                {category.category}
              </h2>

              <div className="grid grid-cols-1 gap-12">
                {category.questions.map((faq, i) => (
                  // 6. FIXED: Replaced premium-card with liquid-glass
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