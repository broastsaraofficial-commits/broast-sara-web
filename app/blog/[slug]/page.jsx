"use client";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const posts = {
  "why-broast-sara-is-best-in-madinah": {
    ar: { 
      title: "لماذا دجاج بروست سارة هو الأفضل في المدينة المنورة؟", 
      content: "عندما يتعلق الأمر بالبحث عن أفضل بروست في المدينة المنورة، يبحث السكان والزوار عن ثلاثة أشياء: القرمشة، النكهة، والطزاجة. لأكثر من عقد من الزمان، أتقنت بروست سارة هذه المعادلة. سرنا ليس فقط في المطبخ؛ بل يبدأ من المزارع المحلية. باستخدام دجاج طازج 100% وغير مجمد أبداً، نضمن أن تكون كل قضمة طرية من الداخل وذهبية من الخارج. ومع ثوم سارة الأسطوري وخلطتنا السرية المكونة من 14 نوعاً من التوابل، ليس من المستغرب أن نكون الخيار الأول في المدينة."
    },
    en: { 
      title: "Why Broast Sara is the best in Madinah?", 
      content: "When it comes to finding the best broast in Madinah, locals and visitors alike look for three things: crunch, flavor, and freshness. For over a decade, Broast Sara has mastered this triad. Our secret isn't just in the kitchen; it starts at the local farms. By using 100% fresh, never-frozen chicken, we ensure every bite is juicy on the inside and perfectly golden on the outside. Combined with our legendary garlic sauce (Thoum) and 14-spice secret blend, it's no wonder we are the city's top choice."
    }
  },
  "haccp-standards-broast-sara": {
    ar: { 
      title: "معايير الـ HACCP وجودة الغذاء في مطابخنا", 
      content: "سلامة الغذاء هي أعلى أولوياتنا. تلتزم بروست سارة بصرامة بمعايير HACCP العالمية. هذا يعني أن كل خطوة في عمليتنا - من استلام الدجاج الطازج يومياً إلى التتبيل والقلي بالضغط والتقديم - تتم مراقبتها بدقة. مطابخنا يتم التحكم في درجة حرارتها، وزيوت القلي تُصفى يومياً، ويخضع موظفونا لتدريب مستمر على النظافة. نحن لا نقدم طعاماً لذيذاً فحسب؛ بل نقدم راحة البال لكل عائلة في المدينة المنورة."
    },
    en: { 
      title: "HACCP Standards and Food Quality in our Kitchens", 
      content: "Food safety is our highest priority. Broast Sara strictly adheres to global HACCP (Hazard Analysis Critical Control Point) standards. This means every step of our process—from receiving daily fresh chicken to marinating, pressure-frying, and serving—is rigorously monitored. Our kitchens are temperature-controlled, our cooking oils are filtered daily, and our staff undergo continuous hygiene training. We don't just serve delicious food; we serve peace of mind to every family in Madinah."
    }
  },
  "fresh-vs-frozen-chicken": {
    ar: { 
      title: "الدجاج الطازج مقابل المجمد: لماذا نصرّ على المحلي يومياً؟", 
      content: "هناك فرق شاسع بين الدجاج الذي يتم تجميده لشهور وبين الدجاج الذي يُذبح اليوم ويُقدم اليوم. تجميد الدجاج يوسع الماء داخل اللحم، مما يمزق الألياف العضلية ويجعل الدجاج جافاً عند الطهي. في بروست سارة، نصر على الدجاج المحلي المذبوح يومياً. هذا يضمن احتفاظ اللحم بعصارته الطبيعية، وامتصاصه لتتبيلتنا السرية بالكامل، وتقديم طراوة لا مثيل لها تحت تلك القشرة الذهبية."
    },
    en: { 
      title: "Fresh vs Frozen Chicken: Why we insist on local daily?", 
      content: "There is a vast difference between chicken that has been frozen for months and chicken that is slaughtered and served today. Freezing chicken expands the water inside the meat, which tears the muscle fibers and leaves the chicken dry when cooked. At Broast Sara, we insist on local, daily-slaughtered chicken. This ensures the meat retains its natural juices, absorbs our secret 14-spice marinade completely, and delivers an unmatched tender texture under that golden crust."
    }
  },
  "secret-broast-recipe-history": {
    ar: { 
      title: "تاريخ الخلطة السرية: كيف بدأت نكهة سارة؟", 
      content: "هل تساءلت يوماً عما يمنح بروست سارة نكهته المميزة؟ الإجابة تكمن في خلطتنا السرية. تم تطوير تتبيلتنا خصيصاً لتناسب ذائقة أهل المدينة، وتتكون من 14 نوعاً من التوابل الطبيعية الفاخرة. نحن لا نغطي الدجاج بالتوابل فحسب؛ بل نتبله طوال الليل تحت درجات حرارة محددة لتصل النكهة إلى العظم. استغرق الأمر سنوات لإتقان هذا التوازن بين النكهة الغنية والحرارة الخفيفة التي تجعل عملائنا يعودون دائماً."
    },
    en: { 
      title: "History of the Secret Blend: How Sara's flavor started?", 
      content: "Have you ever wondered what gives Broast Sara its distinct flavor? The answer lies in our signature secret blend. Developed specifically for the Madinah palate, our marinade uses 14 natural, premium spices. We don't just coat the chicken; we marinate it overnight under specific temperatures so the flavor reaches the bone. It took years to perfect this balance of savory notes, slight heat, and deep aromatics that keep our customers coming back."
    }
  },
  "best-branches-for-family": {
    ar: { 
      title: "أفضل فروعنا للعائلات في المدينة المنورة", 
      content: "هل تخطط لتجمع عائلي؟ بروست سارة هي وجهتك المثالية. بينما تقدم جميع فروعنا الثمانية خدمة ممتازة، فقد تم تصميم فرعي العزيزية والهجرة بشكل خاص لتلبية احتياجات العائلات. توفر هذه الفروع جلسات واسعة، وأجواء ترحيبية، ووجباتنا العائلية المميزة، مما يجعلها المكان المثالي لعشاء نهاية الأسبوع. ولا تنسَ، صحون الشاورما العربي المزدوجة لدينا مثالية للمشاركة!"
    },
    en: { 
      title: "Our best branches for families in Madinah", 
      content: "Planning a family gathering? Broast Sara has you covered. While all our 8 branches offer premium service, our Al Aziziyyah and Al Hijrah branches are particularly designed with families in mind. Offering spacious seating, a welcoming atmosphere, and our signature Family Meals, these locations provide the perfect setting for weekend dinners. Don't forget, our Double Arabi Shawarma plates are perfect for sharing!"
    }
  },
  "shawarma-sarookh-secrets": {
    ar: { 
      title: "شاورما السروخ: لماذا أصبحت الوجبة الأسطورية؟", 
      content: "شاورما الصاروخ ليست مجرد ساندوتش؛ إنها أسطورة في المدينة. ما الذي يميزها؟ أولاً، الحجم - ملفوفة في خبز صاج كبير ورقيق. ثانياً، الحشوة. نحن نستخدم دجاجاً مشوياً ببطء ومثالية، مع البطاطس المقرمشة والمخلل وطبقة سخية من صلصة الثوم الشهيرة لدينا. يتم تحميصها حتى تصبح مقرمشة من الخارج، مما يخلق نكهة جعلتها الشاورما الأكثر طلباً في المدينة."
    },
    en: { 
      title: "Sarookh Shawarma: Why it became the legendary meal?", 
      content: "The Sarookh Shawarma isn't just a sandwich; it's a Madinah legend. What sets it apart? First, the size—wrapped in a massive, thin saj bread. Second, the filling. We use chicken that has been slow-roasted to perfection, combined with crispy fries, pickles, and a generous layer of our famous garlic sauce. It is toasted until crispy on the outside, creating a flavor profile that has made it the city's most requested shawarma."
    }
  },
  "shrimp-golden-crunch": {
    ar: { 
      title: "أسرار القرمشة الذهبية للجمبري", 
      content: "يعرف عشاق المأكولات البحرية مدى صعوبة قلي الجمبري بشكل مثالي. في بروست سارة، تُحضر وجبات الجمبري الذهبي بعجينة متخصصة تختلف عن دجاجنا. تم تصميم هذه التغطية الفريدة لتُقلى بسرعة، مما يحافظ على لحم الجمبري الطري والحلو مع خلق قشرة ذهبية سميكة لا تقاوم. يُقدم مع صوص الكوكتيل الخاص بنا، وهو بديل فاخر لمن يشتهون قرمشة المأكولات البحرية."
    },
    en: { 
      title: "Secrets of the Golden Crunch for Shrimp", 
      content: "Seafood lovers know how tricky it is to fry shrimp perfectly. At Broast Sara, our Golden Shrimp Meals are crafted with a specialized batter different from our chicken. This unique seafood coating is designed to fry rapidly, locking in the shrimp's tender, sweet meat while creating an irresistible, thick golden crust. Served with our signature cocktail sauce, it’s a premium alternative for those craving a seafood crunch."
    }
  },
  "madinah-food-guide-2026": {
    ar: { 
      title: "دليل مطاعم المدينة المنورة لعام 2026", 
      content: "المدينة المنورة هي مدينة ذات تاريخ عميق وتنوع مذهل في الطهي. بالنسبة للسكان المحليين والحجاج، يظل الدجاج المقلي الأصيل وجبة أساسية. عند استكشاف مناطق مثل الجمعة أو الدفاع، يعد العثور على طعام عالي الجودة وحلال ومحلي أمراً ضرورياً. تفخر بروست سارة بتصنيفها باستمرار كأفضل وجهة في خريطة طعام المدينة المتطورة، لتقدم المذاق الأصيل للمدينة."
    },
    en: { 
      title: "Madinah Food Guide 2026", 
      content: "Madinah Al Munawwarah is a city of deep history and incredible culinary diversity. For locals and pilgrims, authentic fried chicken remains a staple. When exploring areas like Al Jumu'ah or Ad Difa, finding high-quality, halal, and locally sourced food is essential. Broast Sara is proud to be ranked consistently as a top destination in Madinah's evolving food map, offering the authentic taste of the city."
    }
  },
  "healthy-fried-chicken-tips": {
    ar: { 
      title: "نصائح لتناول البروست بطريقة متوازنة", 
      content: "يمكنك الاستمتاع بالبروست المقرمش المفضل لديك مع الحفاظ على أسلوب حياة متوازن! السر يكمن في التحكم في الحصص. دجاجنا الطازج مليء بالبروتين عالي الجودة. للحفاظ على توازن وجبتك، شارك البطاطس العائلية بدلاً من تناول حصة كبيرة وحدك، وحافظ على رطوبة جسمك بشرب الماء بدلاً من المشروبات الغازية، وتناول الطعام ببطء للاستمتاع بنكهات خلطتنا السرية دون الإفرط في الأكل."
    },
    en: { 
      title: "Tips for eating Broast in a balanced way", 
      content: "You can enjoy your favorite crispy broast while maintaining a balanced lifestyle! The key is portion control. Our fresh chicken is packed with high-quality protein. To keep your meal balanced, share family-sized fries rather than eating a large portion alone, stay hydrated with water instead of sugary sodas, and eat slowly to enjoy the complex flavors of our secret blend without overeating."
    }
  },
  "new-branch-yanbu-opening": {
    ar: { 
      title: "افتتاح فرعنا الجديد في مدينة ينبع", 
      content: "الطعم الأسطوري للمدينة وصل رسمياً إلى الساحل! تفخر بروست سارة بالإعلان عن افتتاح أحدث فروعها في مدينة ينبع. يقع فرعنا في موقع مناسب على كورنيش ينبع، لنقدم دجاجنا الطازج 100%، والبروست الحراق السري، وصلصة الثوم الشهيرة لسكان ينبع وزوارها. القرمشة المثالية أصبحت الآن قريبة منك."
    },
    en: { 
      title: "Opening our new branch in Yanbu City", 
      content: "The legendary taste of Madinah has officially reached the coast! Broast Sara is proud to announce the opening of our newest branch in Yanbu City. Located conveniently on the Yanbu Corniche, we are bringing our 100% fresh, locally slaughtered chicken, our secret spicy broast, and our famous garlic sauce to Yanbu's residents and visitors. The perfect crunch is now nearby."
    }
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const post = posts[slug];

  if (!post) notFound();

  const t = post[lang];

  // Dynamic Date Logic: Month YYYY (e.g. April 2026)
  const now = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  
  const displayDate = lang === 'ar' 
    ? `${arabicMonths[now.getMonth()]} ${now.getFullYear()}`
    : `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

  // Article JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "datePublished": now.toISOString(),
    "author": { "@type": "Organization", "name": "Broast Sara" },
    "publisher": { "@type": "Organization", "name": "Broast Sara" },
    "description": t.content.substring(0, 160) + "..."
  };

  return (
    <main className="min-h-screen pt-40 pb-24 px-6 relative z-10 flex flex-col items-center" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <article className="animate-premium-in flex flex-col items-center">
          <header className="mb-20 flex flex-col items-center">
            <div className="text-brand-yellow text-sm uppercase tracking-widest mb-6">{displayDate}</div>
            <h1 className={`text-white leading-tight mb-12 ${lang === 'en' ? 'text-6xl md:text-8xl en-accent-heading' : 'text-5xl md:text-8xl font-normal'}`}>
              {t.title}
            </h1>
          </header>
          
          <div className={`text-white text-2xl md:text-3xl leading-relaxed space-y-12 font-normal text-center ${lang === 'en' ? 'font-helvetica' : ''}`}>
             <p className="whitespace-pre-line">{t.content}</p>
          </div>
        </article>
        
        <div className="mt-32 pt-16 border-t border-white/10 text-center w-full">
          <Link href="/blog" className="text-brand-yellow text-xl hover:underline">
            {lang === 'ar' ? "← العودة للمدونة" : "Back to Blog →"}
          </Link>
        </div>
      </div>
    </main>
  );
}
