import { notFound } from "next/navigation";
import Link from "next/link";

// THE MASTER DATA OBJECT: Contains all 10 full articles in Arabic & English
const posts = {
  "best-broast-madinah": {
    img: "The Signature Broast.webp",
    ar: {
      title: "أفضل مطاعم البروست في المدينة المنورة 2026",
      intro: "البروست في المدينة المنورة ليس مجرد وجبة — إنه تجربة. من الأحياء الشعبية مثل العزيزية والهجرة، إلى مناطق الجوازات والزهراء، أصبح الدجاج المقرمش جزءاً أصيلاً من ثقافة الطعام في المدينة. في هذا الدليل، نستعرض خيارات البروست في المدينة المنورة لعام 2026، ونوضح لك لماذا يختار الآلاف من أهل المدينة بروست سارة يومياً.",
      sections: [
        { h2: "ما هو البروست؟ وما الفرق بينه وبين الدجاج المقلي؟", body: "قد يعتقد البعض أن البروست هو مجرد دجاج مقلي، لكن السر يكمن في طريقة التحضير. طريقة الطهي بالضغط تُعطي القرمشة الداخلية واللون الذهبي الخارجي. هذه التقنية تضمن نضج الدجاج بالكامل مع الاحتفاظ بالعصارة الطبيعية في الداخل، مما يمنع جفاف اللحم ويقلل من امتصاص الزيت مقارنة بالقلي التقليدي المفتوح." },
        { h2: "ما الذي يميز بروست سارة؟", body: "وسط العديد من الخيارات، يتميز بروست سارة بعدة ركائز أساسية:\n\n• الدجاج المحلي الطازج اليومي: نحن نرفض استخدام الدجاج المجمد. جودتنا تبدأ من المزرعة.\n• الخلطة السرية: تتبيلة غنية بالبهارات تُنقع لأكثر من 12 ساعة ليمنحك نكهة غنية من الداخل.\n• صلصة الثوم الأسطورية: الثومية الخاصة بنا هي الرفيق المثالي لكل وجبة بروست وشاورما.\n• 8 فروع في المدينة وينبع: نحن دائماً بالقرب منك لضمان وصول وجبتك ساخنة وسريعة." },
        { h2: "فروع بروست سارة في أحياء المدينة", body: "سواء كنت تبحث عن وجبة غداء سريعة أو عشاء عائلي متأخر، فروعنا تغطي أهم أحياء المدينة. من فرعنا الرئيسي في العزيزية، إلى فروع الهجرة، الإمام البخاري، وحي البحر. وإذا كنت على طريق السفر، فإن فرع أبيار الماشي يخدمك على مدار 24 ساعة لضمان عدم توقف رحلتك بدون وجبة مثالية." }
      ],
      faqTitle: "الأسئلة الشائعة حول البروست في المدينة",
      faqs: [
        { q: "هل البروست حلال في المدينة المنورة؟", a: "نعم، جميع مطاعم البروست المعتمدة في المدينة المنورة تلتزم بمعايير الذبح الحلال. في بروست سارة، يُذبح الدجاج يدوياً وبالطريقة الإسلامية يومياً." },
        { q: "ما هو سعر وجبة البروست في المدينة المنورة؟", a: "تتراوح أسعار وجبات البروست في المدينة المنورة عادةً بين 20 ريال و60 ريالاً حسب الحجم والإضافات. اطلع على قائمة بروست سارة للأسعار الكاملة." }
      ]
    },
    en: {
      title: "Best Broast Restaurants in Madinah 2026",
      intro: "Broast in Madinah is more than just a meal — it is an experience. From popular neighborhoods like Al Aziziyyah and Al Hijrah to Aljwazat and Az Zahrah, crispy chicken has become an authentic part of the city's food culture. In this guide, we review the best broast options in Madinah for 2026, and explain why thousands choose Broast Sara daily.",
      sections: [
        { h2: "What is Broast? And how is it different from fried chicken?", body: "Some might think broast is just fried chicken, but the secret lies in the preparation. Pressure cooking gives it the inner crunch and golden exterior. This technique ensures the chicken is fully cooked while retaining natural juices inside, preventing dry meat and reducing oil absorption compared to traditional open frying." },
        { h2: "What makes Broast Sara special?", body: "Amidst many options, Broast Sara stands out with several core pillars:\n\n• Daily Fresh Local Chicken: We refuse to use frozen chicken. Our quality starts at the farm.\n• Secret Blend: A rich spice marinade soaked for over 12 hours to give you deep flavor.\n• Legendary Garlic Sauce: Our signature Thoum is the perfect companion to every broast and shawarma meal.\n• 8 Branches in Madinah and Yanbu: We are always near you to ensure your meal arrives hot and fast." },
        { h2: "Broast Sara branches in Madinah neighborhoods", body: "Whether you are looking for a quick lunch or a late family dinner, our branches cover the most important neighborhoods of the city. From our main branch in Al Aziziyyah, to Al Hijrah, Imam Bukhari, and Hil Bahr. And if you are on the road, our Abiar Al Mashi branch serves you 24 hours a day to ensure your journey never stops without a perfect meal." }
      ],
      faqTitle: "Frequently Asked Questions about Broast in Madinah",
      faqs: [
        { q: "Is Broast halal in Madinah?", a: "Yes, all approved broast restaurants in Madinah adhere to halal slaughter standards. At Broast Sara, chicken is manually slaughtered according to Islamic methods every day." },
        { q: "What is the price of a broast meal in Madinah?", a: "Broast meal prices in Madinah typically range between 20 and 60 Riyals depending on size and additions. Check the Broast Sara menu for full prices." }
      ]
    }
  },
  "broast-vs-fried-chicken": {
    img: "4-Piece-Chicken-Meal.webp",
    ar: {
      title: "الفرق بين البروست والدجاج المقلي العادي",
      intro: "كثيراً ما يُستخدم مصطلحا 'البروست' و'الدجاج المقلي' بالتبادل، لكن الحقيقة هي أنهما يختلفان تماماً من حيث طريقة التحضير، الملمس، والطعم النهائي. إذا تساءلت يوماً عن سبب تفوق قرمشة البروست وطراوته على الدجاج المقلي المعتاد، فهذا المقال سيوضح لك الفروق الجوهرية.",
      sections: [
        { h2: "1. طريقة الطهي: القلي المفتوح مقابل القلي بالضغط", body: "الفرق التكنولوجي الأكبر يكمن في طريقة الطهي. الدجاج المقلي العادي يُطهى في مقالي مفتوحة عالية الحرارة، مما قد يؤدي أحياناً إلى احتراق القشرة الخارجية قبل نضج اللحم من الداخل بالكامل. أما البروست، فيُطهى باستخدام مقالي الضغط التجارية. هذه المقالي تحبس البخار المتصاعد من الدجاج، مما يرفع الضغط الداخلي ويسمح بطهي الدجاج بسرعة أكبر وبدرجات حرارة موزعة بشكل مثالي." },
        { h2: "2. امتصاص الزيت ومستوى الدهون", body: "لأن البروست يُطهى تحت الضغط، فإن بيئة الطهي تمنع الزيت من التغلغل بكثافة إلى داخل أنسجة الدجاج. النتيجة؟ وجبة أخف، أقل تشبعاً بالزيت، وأسهل في الهضم مقارنة بالدجاج المقلي العادي الذي غالباً ما يمتص كميات كبيرة من الزيت أثناء فترة القلي الطويلة في المقلاة المفتوحة." },
        { h2: "3. الطراوة والعصارة الداخلية", body: "بفضل الضغط الذي يحبس البخار داخل المقلاة، يتم الاحتفاظ بالعصارة الطبيعية للدجاج. بينما يميل الدجاج المقلي العادي إلى الجفاف (خاصة قطع الصدر)، يضمن لك البروست لحماً طرياً وغنياً بالعصارة يذوب في الفم، حتى في القطع الأكثر سمكاً." },
        { h2: "4. التتبيلة والتغليف", body: "في بروست سارة، لا نكتفي بتقنية الطهي فقط. نحن نعتمد على عملية نقع تستمر لأكثر من 12 ساعة لتتغلغل نكهة البهارات إلى العظم، تليها عملية تغليف دقيقة تحافظ على التصاق القشرة باللحم أثناء القلي بالضغط، مما ينتج عنه طبقة ذهبية لا تنفصل عن الدجاج عند قضمها." }
      ],
      faqTitle: "أسئلة شائعة حول البروست",
      faqs: [
        { q: "هل البروست صحي أكثر من الدجاج المقلي العادي؟", a: "نعم، نسبياً. لأن طريقة القلي بالضغط تمنع اللحم من امتصاص كميات كبيرة من الزيت، فإن البروست يُعتبر خياراً أخف وأقل دهوناً من الدجاج المقلي بالطريقة التقليدية." },
        { q: "لماذا لا توفر المطاعم العادية وجبات البروست؟", a: "لأن تحضير البروست يتطلب معدات قلي بالضغط تجارية باهظة الثمن ومعايير أمان صارمة جداً، بالإضافة إلى خبرة فنية دقيقة لضبط مستويات الضغط والحرارة." }
      ]
    },
    en: {
      title: "The Difference Between Broast and Regular Fried Chicken",
      intro: "The terms 'broast' and 'fried chicken' are often used interchangeably, but the truth is they are completely different in terms of preparation, texture, and final taste. If you've ever wondered why the crunch and tenderness of broast surpass regular fried chicken, this article will explain the core differences.",
      sections: [
        { h2: "1. Cooking Method: Open Frying vs. Pressure Frying", body: "The biggest technological difference lies in the cooking method. Regular fried chicken is cooked in open, high-heat fryers, which can sometimes burn the outer crust before the meat inside is fully cooked. Broast, however, is cooked using commercial pressure fryers. These fryers trap the steam rising from the chicken, raising internal pressure and allowing it to cook faster with perfectly distributed heat." },
        { h2: "2. Oil Absorption and Fat Levels", body: "Because broast is cooked under pressure, the cooking environment prevents oil from heavily penetrating the chicken's tissues. The result? A lighter meal, less saturated with oil, and easier to digest compared to regular fried chicken, which often absorbs large amounts of oil during the long frying time in an open pan." },
        { h2: "3. Tenderness and Internal Juiciness", body: "Thanks to the pressure trapping steam inside the fryer, the natural juices of the chicken are retained. While regular fried chicken tends to dry out (especially breast pieces), broast guarantees tender, juicy meat that melts in your mouth, even in the thickest cuts." },
        { h2: "4. Marination and Coating", body: "At Broast Sara, we don't just rely on cooking technology. We utilize a marination process lasting over 12 hours so the spice flavor reaches the bone, followed by a precise coating process that keeps the crust attached to the meat during pressure frying, resulting in a golden layer that never separates when bitten." }
      ],
      faqTitle: "Frequently Asked Questions about Broast",
      faqs: [
        { q: "Is broast healthier than regular fried chicken?", a: "Yes, relatively. Because pressure frying prevents the meat from absorbing large amounts of oil, broast is considered a lighter, less greasy option than traditionally fried chicken." },
        { q: "Why don't regular restaurants offer broast meals?", a: "Because preparing broast requires expensive commercial pressure frying equipment and very strict safety standards, alongside precise technical expertise to adjust pressure and heat levels." }
      ]
    }
  },
  "food-safety-haccp": {
    img: "raw-chicken.webp",
    ar: {
      title: "سلامة الغذاء في مطاعمنا — ما الذي يجب أن تعرفه؟",
      intro: "في بروست سارة، نعتقد أن تقديم طعام لذيذ هو نصف المعادلة فقط. النصف الآخر، والأكثر أهمية، هو تقديم طعام آمن ونظيف تماماً. التزامنا بسلامة الغذاء ليس مجرد إجراء روتيني، بل هو حجر الأساس في ثقة عملائنا بنا في المدينة المنورة.",
      sections: [
        { h2: "1. نظام تحليل المخاطر (HACCP)", body: "نحن من أوائل مطاعم البروست في المدينة المنورة التي تبنت بصرامة نظام HACCP العالمي. هذا النظام يعتمد على تتبع كل خطوة من خطوات تحضير الطعام، بدءاً من استلام الدجاج الطازج، مروراً بالتخزين والتبريد، وصولاً إلى القلي والتقديم. نقوم بقياس درجة حرارة الدجاج والزيت باستمرار لضمان القضاء على أي بكتيريا وتوفير بيئة طهي خالية من المخاطر." },
        { h2: "2. لا نساوم على جودة الزيت", body: "الزيت هو شريان الحياة للبروست المثالي. في مطابخ سارة، نستخدم زيوتاً نباتية عالية الجودة خالية من الدهون المتحولة. والأهم من ذلك، يتم فحص جودة الزيت وتغييره وفق جدول زمني صارم باستخدام أجهزة قياس دقيقة للتأكد من عدم وصوله لمرحلة الأكسدة. هذا ما يجعل دجاجنا مقرمشاً، خفيفاً على المعدة، وذهبي اللون في كل مرة." },
        { h2: "3. بروتوكولات النظافة الشخصية للموظفين", body: "التكنولوجيا والمعدات المتقدمة لا تكفي بدون فريق عمل مدرب ومسؤول. يخضع جميع موظفي المطبخ لدينا لتدريبات مستمرة على سلامة الغذاء. نطبق سياسات صارمة لغسيل الأيدي، ارتداء القفافات وأغطية الرأس، ونعقم محطات التحضير بشكل دوري طوال ساعات العمل للوقاية من التلوث المتبادل." }
      ],
      faqTitle: "أسئلة شائعة حول جودة الطعام",
      faqs: [
        { q: "هل الدجاج الذي تستخدمونه مجمد؟", a: "على الإطلاق. نحن نستخدم حصرياً دجاجاً محلياً طازجاً يتم توريده يومياً، مما يضمن نكهة وقواماً أفضل بكثير من الدجاج المجمد المستورد." },
        { q: "كيف تتعاملون مع شكاوى العملاء؟", a: "نأخذ كل ملاحظة على محمل الجد. إذا لم يكن طلبك مطابقاً لمعاييرنا، يقوم مدير الفرع بالتعامل مع الأمر فوراً لضمان رضاك التام وسلامتك." }
      ]
    },
    en: {
      title: "Food Safety at Our Restaurants — What You Should Know",
      intro: "At Broast Sara, we believe serving delicious food is only half the equation. The other, more important half, is serving completely safe and clean food. Our commitment to food safety is not just a routine procedure; it is the cornerstone of our customers' trust in Madinah.",
      sections: [
        { h2: "1. Hazard Analysis Critical Control Point (HACCP)", body: "We are among the first broast restaurants in Madinah to strictly adopt the global HACCP system. This system tracks every step of food preparation, starting from receiving fresh chicken, through storage and cooling, all the way to frying and serving. We constantly measure the temperature of the chicken and oil to ensure the elimination of any bacteria and provide a risk-free cooking environment." },
        { h2: "2. We Never Compromise on Oil Quality", body: "Oil is the lifeblood of perfect broast. In Sara's kitchens, we use high-quality vegetable oils free of trans fats. More importantly, oil quality is checked and changed on a strict schedule using precise measurement tools to ensure it never reaches the oxidation stage. This is what makes our chicken crispy, light on the stomach, and golden every time." },
        { h2: "3. Staff Personal Hygiene Protocols", body: "Advanced technology and equipment are not enough without a trained and responsible team. All our kitchen staff undergo continuous food safety training. We enforce strict policies for handwashing, wearing gloves and hairnets, and we sanitize preparation stations periodically throughout working hours to prevent cross-contamination." }
      ],
      faqTitle: "Frequently Asked Questions about Food Quality",
      faqs: [
        { q: "Is the chicken you use frozen?", a: "Not at all. We exclusively use fresh local chicken supplied daily, ensuring significantly better flavor and texture than imported frozen chicken." },
        { q: "How do you handle customer complaints?", a: "We take every comment seriously. If your order does not meet our standards, the branch manager handles the matter immediately to ensure your complete satisfaction and safety." }
      ]
    }
  },
  "fresh-vs-frozen-chicken": {
    img: "raw-chicken.webp",
    ar: {
      title: "الدجاج الطازج مقابل المجمد — لماذا يهم هذا الاختلاف؟",
      intro: "في عالم الوجبات السريعة، تلجأ العديد من المطاعم إلى حلول توفير التكاليف، وأبرزها استخدام الدجاج المجمد المستورد. في المقابل، نلتزم في بروست سارة بتقديم الدجاج المحلي الطازج 100%. قد يبدو الأمر تفصيلاً صغيراً، لكنه يصنع فارقاً جذرياً في المذاق، القوام، والقيمة الغذائية لوجبتك.",
      sections: [
        { h2: "1. الطعم والعصارة (تأثير التجميد على الخلايا)", body: "عندما يتم تجميد الدجاج، تتحول السوائل داخل أنسجة اللحم إلى بلورات ثلجية دقيقة تقوم بتمزيق جدران الخلايا. وعند الإذابة، تتسرب هذه العصارة الطبيعية خارج اللحم. النتيجة؟ دجاج جاف وقاسٍ بعد القلي. الدجاج الطازج يحتفظ بكامل عصارته الطبيعية، مما يمنحك طراوة تذوب في الفم مع كل قضمة." },
        { h2: "2. القيمة الغذائية والإضافات", body: "الدجاج المجمد تجارياً غالباً ما يُحقن بمحاليل ملحية أو مواد حافظة لزيادة وزنه وإطالة فترة صلاحيته، مما يرفع نسبة الصوديوم بشكل كبير. الدجاج الطازج الذي نستخدمه خالٍ تماماً من هذه الإضافات؛ إنه بروتين طبيعي ونظيف يأتي من المزرعة إلى مطبخنا مباشرة." },
        { h2: "3. كيف يتفاعل الدجاج الطازج مع القلي بالضغط؟", body: "سر البروست المثالي يكمن في تقنية القلي بالضغط. الدجاج الطازج يتفاعل بشكل أفضل بكثير مع هذه التقنية، حيث يمتص التتبيلة بعمق، وتلتصق القشرة الخارجية باللحم بشكل أقوى، مما يمنع انفصالها أثناء القلي ويوفر قرمشة ذهبية متساوية لا يمكن تحقيقها مع الدجاج المجمد." },
        { h2: "4. التزام بروست سارة", body: "نحن نؤمن بأن أهل المدينة يستحقون الأفضل. لذلك، نتعاقد مع مزارع محلية موثوقة لتوريد دجاج طازج يُذبح يدوياً بالطريقة الإسلامية كل يوم. نحن لا نستخدم الدجاج المجمد أبداً، ولا نساوم على هذا المبدأ تحت أي ظرف." }
      ],
      faqTitle: "أسئلة شائعة حول جودة الدجاج",
      faqs: [
        { q: "كيف يمكنني معرفة ما إذا كان الدجاج طازجاً أم مجمداً بعد القلي؟", a: "الدجاج الطازج يتميز بلحم أبيض ناصع من الداخل، ويكون طرياً جداً وغنياً بالعصارة. أما الدجاج المجمد فيميل لونه إلى الداكن قليلاً حول العظام ويكون لحمه أليافاً جافة." },
        { q: "هل الدجاج الطازج أغلى من المجمد؟", a: "نعم، تكلفة توريد الدجاج الطازج يومياً أعلى بكثير من تخزين الدجاج المجمد. لكننا في بروست سارة نتحمل هذه التكلفة لنضمن لك أعلى جودة ممكنة بأسعار تنافسية." }
      ]
    },
    en: {
      title: "Fresh vs Frozen Chicken — Why the Difference Matters?",
      intro: "In the fast-food world, many restaurants resort to cost-saving solutions, most notably imported frozen chicken. In contrast, at Broast Sara, we are committed to serving 100% fresh local chicken. It may seem like a small detail, but it makes a radical difference in the taste, texture, and nutritional value of your meal.",
      sections: [
        { h2: "1. Taste and Juiciness (Freezing's Effect on Cells)", body: "When chicken is frozen, the liquids inside the meat tissues turn into tiny ice crystals that tear the cell walls. Upon thawing, these natural juices leak out. The result? Dry, tough chicken after frying. Fresh chicken retains all its natural juices, giving you a melt-in-the-mouth tenderness with every bite." },
        { h2: "2. Nutritional Value and Additives", body: "Commercially frozen chicken is often injected with saline solutions or preservatives to increase its weight and extend its shelf life, significantly raising sodium levels. The fresh chicken we use is completely free of these additives; it is clean, natural protein delivered straight from the farm to our kitchen." },
        { h2: "3. How Fresh Chicken Reacts to Pressure Frying", body: "The secret to perfect broast lies in pressure frying technology. Fresh chicken reacts much better to this technique, deeply absorbing the marinade, and allowing the outer crust to adhere more strongly to the meat, preventing it from detaching during frying and providing an even, golden crunch impossible to achieve with frozen chicken." },
        { h2: "4. Broast Sara's Commitment", body: "We believe the people of Madinah deserve the best. Therefore, we contract with trusted local farms to supply fresh chicken manually slaughtered according to Islamic methods every day. We never use frozen chicken, and we do not compromise on this principle under any circumstance." }
      ],
      faqTitle: "Frequently Asked Questions about Chicken Quality",
      faqs: [
        { q: "How can I tell if chicken is fresh or frozen after frying?", a: "Fresh chicken features bright white meat inside and is very tender and juicy. Frozen chicken tends to be slightly darker around the bones and has dry, fibrous meat." },
        { q: "Is fresh chicken more expensive than frozen?", a: "Yes, the cost of sourcing daily fresh chicken is much higher than storing frozen chicken. But at Broast Sara, we absorb this cost to guarantee you the highest possible quality at competitive prices." }
      ]
    }
  },
  "madinah-foods-must-try": {
    img: "Shami-Shawarma.webp",
    ar: {
      title: "أشهر المأكولات التي يجب تجربتها في المدينة المنورة",
      intro: "المدينة المنورة ليست فقط وجهة روحانية يقصدها الملايين سنوياً، بل هي أيضاً عاصمة لتراث طهي غني يجمع بين الأصالة والمذاقات الحديثة. من الأسواق الشعبية إلى المطاعم الحديثة، تقدم المدينة تجربة طعام فريدة. إذا كنت تزور المدينة المنورة أو حتى من سكانها، فهذه قائمة بأبرز الأطباق التي يجب عليك تجربتها.",
      sections: [
        { h2: "1. تمر العجوة والقهوة العربية", body: "لا تكتمل زيارة المدينة المنورة دون تذوق تمر العجوة الفاخر، الذي يُزرع في مزارع المدينة ويعتبر من أجود أنواع التمور في العالم. يُقدم غالباً مع القهوة العربية الأصيلة الممزوجة بالهيل والزعفران، ليمثل رمزاً للضيافة المدينية الأصيلة." },
        { h2: "2. ثقافة البروست (الدجاج المقرمش الذهبي)", body: "قد تتفاجأ عندما تعلم أن 'البروست' يعتبر وجبة أساسية وجزءاً من ثقافة الطعام في المدينة المنورة. أهل المدينة يعشقون الدجاج المقرمش المحضر محلياً. وفي هذا المجال، يبرز 'بروست سارة' كوجهة لا غنى عنها. بفضل الدجاج المحلي الطازج (غير المجمد) والخلطة السرية التي تُنقع لـ 12 ساعة، يقدم بروست سارة التجربة المثالية للبروست المديني الأصيل الذي يجمع بين القرمشة الخارجية والطراوة الداخلية." },
        { h2: "3. الشاورما بخبز الصاج (الصاروخ)", body: "الشاورما في المدينة لها طابع خاص. خبز الصاج الرقيق المحمص مع الدجاج المشوي ببطء يشكلان مزيجاً مثالياً. شاورما 'الصاروخ' في بروست سارة، والمقدمة مع صلصة الثوم الأسطورية، تعتبر من الوجبات السريعة المفضلة التي يجب تجربتها بعد صلاة التراويح أو في التجمعات المسائية." },
        { h2: "4. المأكولات البحرية والجمبري المقلي", body: "لقربها النسبي من البحر الأحمر (ينبع)، تحظى المأكولات البحرية بشعبية متزايدة. وجبات الجمبري المقلي التي تُحضر بنفس تقنية القرمشة الخاصة بالبروست تقدم بديلاً بحرياً فاخراً ولذيذاً لمحبي التغيير." }
      ],
      faqTitle: "أسئلة شائعة للمطاعم في المدينة",
      faqs: [
        { q: "ما هو أفضل وقت لتناول الطعام في مطاعم المدينة المنورة؟", a: "تنشط معظم المطاعم، بما فيها فروع بروست سارة، بعد صلاة العصر وتستمر في تقديم وجباتها الساخنة حتى ساعات الفجر الأولى (2:30 صباحاً)." },
        { q: "أين يمكنني العثور على أفضل بروست في المدينة؟", a: "تتوزع فروع بروست سارة الـ 8 في أهم أحياء المدينة مثل العزيزية، الهجرة، الإمام البخاري، وحتى أبيار الماشي، لتكون دائماً بالقرب منك." }
      ]
    },
    en: {
      title: "Madinah Foods You Must Try",
      intro: "Madinah is not just a spiritual destination visited by millions annually; it is also the capital of a rich culinary heritage that blends authenticity with modern tastes. From traditional markets to modern restaurants, the city offers a unique dining experience. If you are visiting Madinah or even a resident, here is a list of the top dishes you must try.",
      sections: [
        { h2: "1. Ajwa Dates and Arabic Coffee", body: "A visit to Madinah is incomplete without tasting the premium Ajwa dates, grown in the city's farms and considered among the finest dates in the world. Often served with authentic Arabic coffee infused with cardamom and saffron, it represents the symbol of true Madinah hospitality." },
        { h2: "2. Broast Culture (Golden Crispy Chicken)", body: "You might be surprised to learn that 'Broast' is considered a staple meal and part of Madinah's food culture. Locals adore locally prepared crispy chicken. In this realm, 'Broast Sara' stands out as an indispensable destination. Thanks to fresh local chicken (never frozen) and a secret 12-hour marinade, Broast Sara delivers the perfect authentic Madinah broast experience that combines outer crunch with inner tenderness." },
        { h2: "3. Saj Bread Shawarma (The Sarookh)", body: "Shawarma in Madinah has a special character. Toasted thin Saj bread paired with slow-roasted chicken forms a perfect combination. The 'Sarookh' (Rocket) shawarma at Broast Sara, served with our legendary garlic sauce, is a favorite fast food that must be tried after Taraweeh prayers or during evening gatherings." },
        { h2: "4. Seafood and Fried Shrimp", body: "Due to its relative proximity to the Red Sea (Yanbu), seafood is increasingly popular. Fried shrimp meals, prepared with the same signature crunch technology as broast, offer a luxurious and delicious coastal alternative for those seeking variety." }
      ],
      faqTitle: "Frequently Asked Questions for Madinah Restaurants",
      faqs: [
        { q: "When is the best time to eat at Madinah restaurants?", a: "Most restaurants, including Broast Sara branches, become highly active after Asr prayers and continue serving hot meals until the early hours of dawn (2:30 AM)." },
        { q: "Where can I find the best broast in Madinah?", a: "Broast Sara's 8 branches are distributed across key Madinah neighborhoods like Al Aziziyyah, Al Hijrah, Imam Bukhari, and even Abiar Al Mashi, ensuring we are always near you." }
      ]
    }
  },
  "madinah-neighborhoods-branches": {
    img: "Arabic-Plate.webp",
    ar: {
      title: "دليلك الشامل لفروع بروست سارة في أحياء المدينة المنورة",
      intro: "مع تزايد الطلب على الدجاج المقرمش الطازج، توسعت شبكة فروع بروست سارة لتغطي أهم أحياء المدينة المنورة ومحيطها. هدفنا هو أن نكون دائماً بالقرب منك، سواء كنت في استراحة غداء سريعة، أو تبحث عن عشاء عائلي متأخر، أو مسافراً على الطريق السريع. في هذا الدليل، نستعرض مواقع فروعنا الثمانية لتتعرف على الفرع الأقرب إليك.",
      sections: [
        { h2: "1. الفروع المركزية والجنوبية (العزيزية والهجرة)", body: "يُعتبر فرع العزيزية (طريق الأمير نايف بن عبدالعزيز) من أبرز محطاتنا، حيث يخدم سكان الحي بكفاءة عالية وسرعة استثنائية. أما في حي الهجرة (شارع الأمير سلطان)، فيوفر فرعنا نقطة التقاء مثالية للعائلات والشباب بفضل موقعه الاستراتيجي." },
        { h2: "2. فروع غرب وشمال المدينة (الإمام البخاري وحي البحر)", body: "لتغطية النطاق الغربي والشمالي، يعمل فرع الإمام البخاري في حي الضيافة على تلبية طلبات العملاء بأعلى معايير الجودة. كما يخدم فرع حي البحر (الجمعة) الكثافة السكانية في المنطقة المجاورة، مقدماً نفس الطعم الأسطوري الذي عُرفنا به." },
        { h2: "3. تغطية الروابي والزهراء (الجوازات والجرف)", body: "لا ننسى عملاءنا في مناطق الروابي والزهراء؛ حيث يلبي فرع الجوازات احتياجات السكان والموظفين في المنطقة، بينما يغطي فرع الجرف النطاق الشمالي الغربي، لضمان وصول وجباتنا ساخنة ومقرمشة للجميع." },
        { h2: "4. خدمات الطرق السريعة وينبع (أبيار الماشي وينبع)", body: "للمسافرين وللباحثين عن وجبة في أوقات متأخرة، فرع أبيار الماشي يعمل على مدار 24 ساعة، مما يجعله المحطة الأهم على الطريق السريع. كما نقلنا تجربة بروست سارة إلى مدينة ينبع (العمارة، شارع عمر بن الخطاب) لتوسيع نطاق خدماتنا خارج أسوار المدينة المنورة." }
      ],
      faqTitle: "أسئلة شائعة حول فروعنا",
      faqs: [
        { q: "أي من الفروع يعمل على مدار 24 ساعة؟", a: "فرع أبيار الماشي هو الفرع الذي يعمل على مدار 24 ساعة لخدمة المسافرين وسكان المنطقة في أي وقت." },
        { q: "هل يتوفر التوصيل في جميع الفروع؟", a: "نعم، جميع فروعنا الـ 8 تخدم خدمة التوصيل إما عبر تطبيقات التوصيل (هنقرستيشن ويانغو) أو بالطلب المباشر عبر الواتساب للفرع الأقرب إليك." }
      ]
    },
    en: {
      title: "Your Complete Guide to Broast Sara Branches in Madinah",
      intro: "With the growing demand for fresh crispy chicken, Broast Sara's branch network has expanded to cover the most important neighborhoods in and around Madinah. Our goal is to always be near you, whether you're on a quick lunch break, looking for a late family dinner, or traveling on the highway. In this guide, we review our eight branch locations so you can find the one closest to you.",
      sections: [
        { h2: "1. Central and Southern Branches (Al Aziziyyah & Al Hijrah)", body: "The Al Aziziyyah branch (Prince Naif Bin Abdulaziz Road) is one of our prominent stops, serving the neighborhood's residents with high efficiency and exceptional speed. In the Al Hijrah district (Prince Sultan Street), our branch provides an ideal meeting point for families and youth thanks to its strategic location." },
        { h2: "2. West and North Branches (Imam Bukhari & Hil Bahr)", body: "To cover the western and northern scopes, the Imam Bukhari branch in the Ad Difa district fulfills customer orders with the highest quality standards. The Hil Bahr (Al Jumuah) branch serves the high population density in the surrounding area, offering the same legendary taste we are known for." },
        { h2: "3. Ar Rawabi and Az Zahrah Coverage (Aljwazat & Al Juruf)", body: "We haven't forgotten our customers in Ar Rawabi and Az Zahrah; the Aljwazat branch meets the needs of residents and employees in the area, while the Al Juruf branch covers the northwestern scope, ensuring our meals arrive hot and crispy for everyone." },
        { h2: "4. Highway and Yanbu Services (Abiar Al Mashi & Yanbu)", body: "For travelers and late-night diners, the Abiar Al Mashi branch operates 24 hours a day, making it the most important stop on the highway. We also brought the Broast Sara experience to Yanbu (Al Amarah, Omar Bin Al Khattab Street) to expand our services beyond the walls of Madinah." }
      ],
      faqTitle: "Frequently Asked Questions About Our Branches",
      faqs: [
        { q: "Which branch operates 24 hours a day?", a: "The Abiar Al Mashi branch is the one that operates 24/7 to serve travelers and local residents anytime." },
        { q: "Is delivery available at all branches?", a: "Yes, all 8 of our branches offer delivery services either through delivery apps (HungerStation and Yango) or via direct WhatsApp orders to the branch nearest you." }
      ]
    }
  },
  "ramadan-meals-iftar": {
    img: "Arabic-Plate.webp",
    ar: {
      title: "وجبات رمضان — أفضل خيارات الإفطار والسحور في المدينة",
      intro: "شهر رمضان في المدينة المنورة له روحانية خاصة وطابع فريد يجمع العائلات والأصدقاء على موائد الإفطار والسحور. بعد صيام يوم طويل، يبحث الكثيرون عن وجبات ساخنة، لذيذة، ومُشبعة. في بروست سارة، صممنا خياراتنا لتكون الرفيق المثالي لمائدتك الرمضانية.",
      sections: [
        { h2: "1. وجبات الإفطار العائلية (التوفير والمشاركة)", body: "رمضان هو شهر المشاركة. بدلاً من قضاء ساعات في المطبخ، نقدم لك وجبات التوفير العائلية التي تتضمن قطع البروست المقرمشة الذهبية، البطاطس المقلية الطازجة، الخبز، وصلصة الثوم الأسطورية. دجاجنا المحلي الطازج يضمن لك وجبة إفطار غنية بالبروتين تعوضك عن طاقة اليوم." },
        { h2: "2. خيارات السحور الخفيفة والسريعة", body: "لوجبة السحور، يفضل الكثيرون خيارات أسرع وأسهل في التناول. شاورما الصاروخ بخبز الصاج أو وجبات المسحب (بدون عظم) تعتبر خيارات مثالية لسحور شهي وسريع يمنحك الشبع الكافي لليوم التالي دون الشعور بالتخمة المفرطة." },
        { h2: "3. جاهزية الفروع قبل الإفطار وبعد التراويح", body: "نحن نتفهم أهمية الوقت في رمضان. تعمل فروعنا الثمانية في المدينة المنورة بطاقة قصوى لتجهيز طلبات الاستلام قبل أذان المغرب مباشرة لضمان وصول وجبتك ساخنة إلى مائدتك. كما تظل أبوابنا مفتوحة لاستقبالكم بعد صلاة التراويح وحتى ساعات الفجر الأولى لتلبية طلبات السحور." }
      ],
      faqTitle: "أسئلة شائعة حول طلبات رمضان",
      faqs: [
        { q: "متى تفتح فروع بروست سارة في رمضان؟", a: "تفتح الفروع أبوابها قبل أذان المغرب بوقت كافٍ لتجهيز طلبات الإفطار، وتستمر في العمل وتقديم الطلبات حتى وقت السحور." },
        { q: "هل يجب الطلب المسبق لوجبات الإفطار العائلية؟", a: "لضمان استلام طلبك ساخناً وفي الوقت المحدد قبل الأذان، نوصي دائماً بالطلب المسبق عبر الواتساب للفرع الأقرب إليك أو عبر تطبيقات التوصيل." }
      ]
    },
    en: {
      title: "Ramadan Meals — Best Iftar and Suhoor Options in Madinah",
      intro: "Ramadan in Madinah holds a special spirituality and a unique character that brings families and friends together around Iftar and Suhoor tables. After a long day of fasting, many look for hot, delicious, and filling meals. At Broast Sara, we've tailored our options to be the perfect companion for your Ramadan spread.",
      sections: [
        { h2: "1. Family Iftar Meals (Value and Sharing)", body: "Ramadan is the month of sharing. Instead of spending hours in the kitchen, we offer family value meals that include golden crispy broast pieces, fresh fries, bread, and our legendary garlic sauce. Our fresh local chicken guarantees a protein-rich Iftar that restores your energy for the day." },
        { h2: "2. Light and Quick Suhoor Options", body: "For Suhoor, many prefer faster, easier-to-eat options. The Saj bread Sarookh Shawarma or our boneless nuggets are perfect choices for a delicious and quick Suhoor, keeping you full for the next day without feeling overly stuffed." },
        { h2: "3. Branch Readiness Before Iftar and After Taraweeh", body: "We understand the importance of time in Ramadan. Our eight branches in Madinah operate at maximum capacity to prepare pickup orders right before the Maghrib call to prayer, ensuring your meal arrives hot at your table. Our doors also remain open to welcome you after Taraweeh prayers until the early hours of dawn to fulfill Suhoor orders." }
      ],
      faqTitle: "Frequently Asked Questions about Ramadan Orders",
      faqs: [
        { q: "When do Broast Sara branches open in Ramadan?", a: "Branches open well before the Maghrib call to prayer to prepare Iftar orders, and continue operating and serving until Suhoor time." },
        { q: "Should I pre-order family Iftar meals?", a: "To ensure you receive your order hot and on time before the call to prayer, we always recommend pre-ordering via WhatsApp from your nearest branch or through delivery apps." }
      ]
    }
  },
  "sarookh-shawarma-story": {
    img: "Sarookh-Shawarma.webp",
    ar: {
      title: "شاورما الصاروخ — قصة طبق أسطوري من بروست سارة",
      intro: "رغم أن اسمنا يقترن دائماً بالبروست المقرمش، إلا أن هناك نجماً آخر في قائمة طعامنا يمتلك قاعدة جماهيرية ضخمة في المدينة المنورة: شاورما الصاروخ. لم يعد هذا الساندوتش مجرد وجبة سريعة، بل أصبح طقساً يومياً للكثيرين. في هذا المقال، نكشف لك ما الذي يجعل شاورما الصاروخ من بروست سارة تجربة لا تُنسى.",
      sections: [
        { h2: "1. سر خبز الصاج الرقيق", body: "يبدأ سحر شاورما الصاروخ من الغلاف الخارجي. نحن نستخدم خبز الصاج الرقيق والطازج بدلاً من الخبز العادي. هذا الخبز يتميز بقدرته على التحميص بشكل مثالي ليمنحك قرمشة خفيفة مع كل قضمة، دون أن يكون سميكاً لدرجة تطغى على حشوة الداخلية." },
        { h2: "2. دجاج طازج مشوي ببطء", body: "تماماً كما نفعل في البروست، لا نساوم أبداً على جودة الدجاج. نستخدم صدور وأفخاذ الدجاج المحلي الطازج، نتبلها بخلطتنا الخاصة من البهارات الشرقية، ونتركها تدور ببطء على السيخ. هذه العملية تضمن احتفاظ الدجاج بعصارته ونكهته مع اكتساب تلك الحواف المحمرة والمقرمشة التي يعشقها الجميع." },
        { h2: "3. ثوم سارة الأسطوري — حلقة الوصل", body: "الشاورما الجيدة تحتاج إلى صلصة استثنائية. 'الثومية' الخاصة بنا ليست مجرد إضافة؛ إنها حلقة الوصل التي تجمع نكهة الدجاج المشوي مع خبز الصاج المحمص. قوامها الكريمي وطعمها الغني المحسوب بدقة يجعلها الرفيق المثالي الذي يرفع مستوى الساندوتش بالكامل." },
        { h2: "4. لماذا سميت بـ 'الصاروخ'؟", body: "جاءت التسمية من حجمها الاستثنائي وشكلها الطويل الذي يرضي الجوع الحقيقي، بالإضافة إلى 'الانفجار' السريع للنكهات في الفم. إنها الوجبة المثالية لأوقات العمل المزدحمة، أو لرحلات الطريق، أو لجلسات الشباب المسائية." }
      ],
      faqTitle: "أسئلة شائعة حول شاورما بروست سارة",
      faqs: [
        { q: "هل يتوفر خيار الشاورما الحراقة؟", a: "نعم، يمكنك طلب شاورما الصاروخ بنكهة حارة، حيث نضيف صلصة الثوم الحارة المميزة الخاصة بنا لتجربة مليئة بالحرارة والنكهة." },
        { q: "هل تقدمون الشاورما في أطباق (صحن عربي) بدلاً من الساندوتش؟", a: "بالتأكيد. نوفر 'الصحن العربي' حيث تُقطع شاورما الصاروخ إلى قطع صغيرة وتُقدم مع البطاطس المقلية الذهبية، المخلل، وصلصة الثوم الأسطورية." }
      ]
    },
    en: {
      title: "Sarookh Shawarma — The Story of a Legendary Dish",
      intro: "Although our name is always associated with crispy broast, there is another star on our menu with a massive fanbase in Madinah: the Sarookh Shawarma. This sandwich is no longer just fast food; it has become a daily ritual for many. In this article, we reveal what makes the Broast Sara Sarookh Shawarma an unforgettable experience.",
      sections: [
        { h2: "1. The Secret of Thin Saj Bread", body: "The magic of the Sarookh shawarma begins with its outer layer. We use fresh, thin Saj bread instead of regular bread. This bread toasts perfectly to give you a light crunch with every bite, without being so thick that it overpowers the filling inside." },
        { h2: "2. Slow-Roasted Fresh Chicken", body: "Just as we do with broast, we never compromise on chicken quality. We use fresh local chicken breasts and thighs, marinate them in our special blend of oriental spices, and let them rotate slowly on the spit. This process ensures the chicken retains its juices and flavor while gaining those caramelized, crispy edges everyone loves." },
        { h2: "3. Legendary Sara Garlic — The Missing Link", body: "A good shawarma needs an exceptional sauce. Our 'Thoum' is not just an addition; it is the missing link that brings the flavor of roasted chicken and toasted Saj bread together. Its creamy texture and perfectly calculated rich taste make it the ideal companion that elevates the entire sandwich." },
        { h2: "4. Why is it called 'Sarookh' (Rocket)?", body: "The name comes from its exceptional size and long shape that satisfies real hunger, as well as the quick 'explosion' of flavors in the mouth. It is the perfect meal for busy work hours, road trips, or evening youth gatherings." }
      ],
      faqTitle: "Frequently Asked Questions about Broast Sara Shawarma",
      faqs: [
        { q: "Is a spicy shawarma option available?", a: "Yes, you can order a spicy Sarookh shawarma. We add our signature spicy garlic sauce for an experience full of heat and flavor." },
        { q: "Do you serve shawarma on plates (Arabi Plate) instead of sandwiches?", a: "Absolutely. We offer the 'Arabi Plate' where the Sarookh shawarma is cut into bite-sized pieces and served with golden fries, pickles, and our legendary garlic sauce." }
      ]
    }
  },
  "secrets-of-crispy-broast": {
    img: "Golden Chicken Nuggets.webp",
    ar: {
      title: "أسرار البروست المقرمش — كيف تحضره في المنزل؟",
      intro: "الكثير من محبي الدجاج المقرمش يحاولون تقليد طعم البروست المثالي في المنزل، لكن النتيجة غالباً ما تكون دجاجاً مقلياً عادياً يفتقر إلى تلك القرمشة الذهبية والطراوة الداخلية. السر لا يكمن فقط في المكونات، بل في التقنية. في هذا المقال، نكشف لك بعض أسرار تحضير البروست.",
      sections: [
        { h2: "1. النقع والتتبيل (السر الأساسي)", body: "الخطوة الأولى والأهم هي نقع الدجاج. لا يمكنك رش البهارات على السطح وتوقع نكهة عميقة. يجب نقع قطع الدجاج الطازج في خليط من اللبن الرائب (الذي يساعد على تطرية اللحم) ومزيج من البهارات مثل الثوم البودرة، البابريكا، والفلفل الأبيض لمدة لا تقل عن 8 إلى 12 ساعة في الثلاجة." },
        { h2: "2. التغليف المزدوج للقرمشة", body: "للحصول على قشرة سميكة ومقرمشة، يجب استخدام تقنية التغليف المزدوج. يتم غمس الدجاج في خليط الدقيق المتبل، ثم في سائل (مثل الماء البارد أو البيض المخفوق)، ثم إعادته إلى الدقيق مرة أخرى مع الضغط الخفيف لتكوين تموجات القشرة التي تصبح مقرمشة عند القلي." },
        { h2: "3. تقنية القلي — لماذا يصعب تقليد البروست؟", body: "البروست الحقيقي لا يُقلى في مقلاة مفتوحة عادية. السر التكنولوجي للبروست هو 'القلي بالضغط' (Pressure Frying). هذه المعدات التجارية تحبس البخار المتصاعد من الدجاج، مما يقلل من وقت القلي ويمنع الزيت من التغلغل داخل اللحم. نتيجة لذلك، ينضج الدجاج بسرعة من الداخل ويبقى رطباً، بينما تتحمر القشرة الخارجية بشكل مثالي. وبما أن مقالي الضغط التجارية غير متوفرة أو آمنة للاستخدام المنزلي، فإن تحقيق نفس النتيجة تماماً في المنزل يُعد تحدياً كبيراً." },
        { h2: "الحل الأسهل والمضمون", body: "بدلاً من قضاء ساعات في التتبيل والتعامل مع فوضى الزيت والمقالي، بروست سارة يقدم لك التجربة المثالية جاهزة. نحن نستخدم دجاجاً محلياً طازجاً، نتبله بخلطتنا السرية، ونقليه باستخدام أحدث مقالي الضغط التجارية لنضمن لك ولعائلتك القرمشة الذهبية في كل مرة." }
      ],
      faqTitle: "أسئلة شائعة حول تحضير البروست",
      faqs: [
        { q: "هل يمكنني استخدام مقلاة الضغط العادية (قدر الضغط) لقلي الدجاج؟", a: "لا، هذا خطير جداً. قدور الضغط المنزلية مصممة للماء والسوائل، وليس للزيت الساخن. استخدامها للقلي قد يؤدي إلى انفجار وحروق خطيرة. البروست يتطلب مقالي ضغط تجارية مخصصة للزيت." },
        { q: "ما هو أفضل نوع دجاج للبروست؟", a: "الدجاج الطازج المبرد (غير المجمد) بوزن يتراوح بين 800 إلى 900 جرام هو الأفضل لضمان نضج سريع وطراوة عالية، وهو بالضبط ما نستخدمه في بروست سارة." }
      ]
    },
    en: {
      title: "Secrets of Crispy Broast — How to Make It at Home?",
      intro: "Many crispy chicken lovers try to replicate the perfect broast taste at home, but the result is often just regular fried chicken lacking that golden crunch and internal tenderness. The secret lies not just in the ingredients, but in the technique. In this article, we reveal some secrets to preparing broast.",
      sections: [
        { h2: "1. Marination and Soaking (The Core Secret)", body: "The first and most important step is soaking the chicken. You cannot sprinkle spices on the surface and expect a deep flavor. Fresh chicken pieces must be soaked in a mixture of buttermilk (which helps tenderize the meat) and a blend of spices like garlic powder, paprika, and white pepper for at least 8 to 12 hours in the refrigerator." },
        { h2: "2. Double Coating for Crunch", body: "To achieve a thick, crispy crust, the double coating technique must be used. The chicken is dipped in seasoned flour mixture, then in a liquid (like cold water or beaten eggs), and then returned to the flour again with light pressing to create the crust ripples that become crispy when fried." },
        { h2: "3. Frying Technique — Why is Broast hard to replicate?", body: "Real broast is not fried in a regular open pan. The technological secret of broast is 'Pressure Frying'. This commercial equipment traps the steam rising from the chicken, reducing frying time and preventing oil from soaking into the meat. As a result, the chicken cooks quickly from the inside and stays moist, while the outer crust browns perfectly. Since commercial pressure fryers are neither available nor safe for home use, achieving the exact same result at home is a huge challenge." },
        { h2: "The Easiest and Guaranteed Solution", body: "Instead of spending hours marinating and dealing with oil mess and fryers, Broast Sara offers you the perfect ready-made experience. We use fresh local chicken, marinate it in our secret blend, and fry it using state-of-the-art commercial pressure fryers to guarantee you and your family the golden crunch every time." }
      ],
      faqTitle: "Frequently Asked Questions about Preparing Broast",
      faqs: [
        { q: "Can I use a regular pressure cooker to fry chicken?", a: "No, this is highly dangerous. Home pressure cookers are designed for water and liquids, not hot oil. Using them for frying can lead to explosions and severe burns. Broast requires commercial pressure fryers specifically designed for oil." },
        { q: "What is the best type of chicken for broast?", a: "Fresh chilled chicken (not frozen) weighing between 800 to 900 grams is best to ensure quick cooking and high tenderness, which is exactly what we use at Broast Sara." }
      ]
    }
  },
  "why-choose-broast-sara": {
    img: "fried-chicken.webp",
    ar: {
      title: "لماذا يختار أهل المدينة بروست سارة؟",
      intro: "في مدينة تعج بخيارات الطعام والمطاعم العالمية، يبرز سؤال مهم: لماذا يحافظ بروست سارة على مكانته كخيار أول لأهل المدينة المنورة لأكثر من عقد من الزمان؟ الجواب لا يكمن فقط في الطعم اللذيذ، بل في فلسفة كاملة من الجودة، الثقة، والانتماء للمجتمع المحلي.",
      sections: [
        { h2: "الجودة تبدأ من المزرعة — لا للمجمد", body: "السر الأول والأهم هو التزامنا الصارم باستخدام دجاج محلي طازج 100%. في حين تلجأ العديد من سلاسل الوجبات السريعة إلى الدجاج المجمد المستورد لخفض التكاليف، اختار بروست سارة الطريق الأصعب والأفضل. يُذبح دجاجنا يدوياً بالطريقة الإسلامية كل يوم ويُورد إلى فروعنا طازجاً. هذا الالتزام هو ما يضمن احتفاظ اللحم بعصارته الطبيعية، مما يمنحك قواماً طرياً من الداخل وقرمشة لا تقاوم من الخارج." },
        { h2: "خلطة سارة السرية — تتبيلة تصل إلى العظم", body: "البروست الحقيقي ليس مجرد دجاج مقلي في الزيت. خلطتنا السرية هي نتيجة سنوات من التجارب للوصول إلى التوازن المثالي بين البهارات الشرقية والغربية. نقوم بنقع الدجاج الطازج في التتبيلة لأكثر من 12 ساعة، مما يسمح للنكهات بالتغلغل عميقاً حتى تصل إلى العظم، فلا تتذوق البهارات في القشرة الخارجية فقط كما يحدث في المطاعم الأخرى." },
        { h2: "الخيار الأول للعائلات والجمعات", body: "أهل المدينة يقدرون الكرم والجمعات العائلية. لذلك، صممنا قوائم طعامنا لتناسب كافة الاحتياجات. من وجبات البروست العائلية الكبيرة، إلى وجبات الجمبري الذهبي الفاخر، وشاورما الصاروخ التي تُرضي جميع الأذواق. ومع وجود 8 فروع استراتيجية تغطي أحياء العزيزية، الهجرة، حي البحر، وحتى أبيار الماشي (مفتوح 24 ساعة)، نحن دائماً الأقرب إليك لضمان وصول وجبتك ساخنة في أسرع وقت." }
      ],
      faqTitle: "الأسئلة الشائعة",
      faqs: [
        { q: "ما هو الفرق بين بروست سارة والمطاعم العالمية؟", a: "بروست سارة علامة تجارية محلية تفهم ذوق أهل المدينة. نستخدم دجاجاً محلياً طازجاً يُذبح يومياً، بدلاً من الدجاج المجمد المعتمد في السلاسل العالمية، مما يوفر جودة وطعماً متفوقين." },
        { q: "هل توفرون وجبات مناسبة للعائلات الكبيرة؟", a: "نعم، نوفر وجبات عائلية متنوعة تشمل خيارات البروست المتعددة، المسحب، ووجبات الجمبري (حتى 15 قطعة) لتناسب جميع أفراد العائلة." }
      ]
    },
    en: {
      title: "Why Do Madinah Locals Choose Broast Sara?",
      intro: "In a city bustling with food options and global restaurants, an important question arises: why has Broast Sara maintained its position as the first choice for the people of Madinah for over a decade? The answer lies not just in the delicious taste, but in a complete philosophy of quality, trust, and belonging to the local community.",
      sections: [
        { h2: "Quality Starts at the Farm — No to Frozen", body: "The first and most important secret is our strict commitment to using 100% fresh local chicken. While many fast-food chains resort to imported frozen chicken to cut costs, Broast Sara chose the harder and better path. Our chicken is manually slaughtered according to Islamic methods every day and supplied fresh to our branches. This commitment ensures the meat retains its natural juices, giving you a tender interior and an irresistible crunch on the outside." },
        { h2: "Sara's Secret Blend — Marinade to the Bone", body: "Real broast is not just chicken fried in oil. Our secret blend is the result of years of experimentation to reach the perfect balance between oriental and western spices. We soak fresh chicken in the marinade for over 12 hours, allowing the flavors to penetrate deeply to the bone, so you don't just taste the spices in the outer crust like in other restaurants." },
        { h2: "The First Choice for Families and Gatherings", body: "The people of Madinah value generosity and family gatherings. Therefore, we designed our menus to suit all needs. From large family broast meals to premium golden shrimp meals, and Sarookh shawarma that satisfies all tastes. With 8 strategic branches covering Al Aziziyyah, Al Hijrah, Hil Bahr, and even Abiar Al Mashi (open 24/7), we are always closest to you to ensure your meal arrives hot and fast." }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "What is the difference between Broast Sara and global restaurants?", a: "Broast Sara is a local brand that understands the taste of Madinah locals. We use fresh local chicken slaughtered daily, instead of the frozen chicken relied upon by global chains, providing superior quality and taste." },
        { q: "Do you offer meals suitable for large families?", a: "Yes, we offer various family meals including multiple broast options, nuggets, and shrimp meals (up to 15 pieces) to suit all family members." }
      ]
    }
  }
};

export function generateStaticParams() {
  const slugs = Object.keys(posts);
  const params = [];
  slugs.forEach(slug => {
    params.push({ lang: 'ar', slug });
    params.push({ lang: 'en', slug });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = posts[resolvedParams.slug];
  const isEn = resolvedParams.lang === "en";
  if (!post) return { title: 'Post Not Found' };

  return {
    title: isEn ? `${post.en.title} | Broast Sara Blog` : `${post.ar.title} | مدونة بروست سارة`,
    description: isEn ? post.en.intro.substring(0, 150) : post.ar.intro.substring(0, 150),
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/blog/${resolvedParams.slug}` }
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const post = posts[slug];

  if (!post) notFound();
  const t = isEn ? post.en : post.ar;

  const now = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const displayDate = isEn ? `${monthNames[now.getMonth()]} ${now.getFullYear()}` : `${arabicMonths[now.getMonth()]} ${now.getFullYear()}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t.title,
    "datePublished": now.toISOString(),
    "author": { "@type": "Organization", "name": "Broast Sara" },
    "description": t.intro
  };

  return (
    <main className="min-h-screen pt-40 pb-24 px-6 relative z-10 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto liquid-glass p-10 md:p-16 flex flex-col">
        <article className="animate-premium-in flex flex-col w-full text-center md:text-start">

          <header className="mb-12 border-b border-white/20 pb-8">
            <div className="text-[#FFD700] text-sm uppercase tracking-widest mb-4 font-bold font-helvetica">
              {displayDate}
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-bold font-instrument leading-tight">
              {t.title}
            </h1>
          </header>

          <div className="w-full flex flex-col gap-10">
            {/* Intro Paragraph */}
            <p className="text-xl md:text-2xl text-white leading-relaxed font-helvetica tracking-[-0.05em]">
              {t.intro}
            </p>

            {/* Render Rich Sections */}
            {t.sections.map((section, index) => (
              <section key={index} className="flex flex-col gap-4">
                <h2 className="text-3xl text-[#FFD700] font-bold mb-2 font-instrument">
                  {section.h2}
                </h2>
                <div className="text-lg text-white/90 leading-relaxed font-helvetica tracking-[-0.05em] whitespace-pre-line">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {/* Internal Links Restored */}
          <div className="mt-12 text-lg text-white italic border-t border-white/10 pt-8">
            {isEn ? (
              <p>Discover your nearest branch via the <Link href="/en/locations" className="text-[#FFD700] underline hover:text-white">Locations Guide</Link>, or browse our <Link href="/en/menu" className="text-[#FFD700] underline hover:text-white">Menu</Link> to order now.</p>
            ) : (
              <p>اكتشف أقرب فرع لك عبر <Link href="/locations" className="text-[#FFD700] underline hover:text-white">دليل الفروع</Link>، أو استعرض <Link href="/menu" className="text-[#FFD700] underline hover:text-white">قائمة الطعام</Link> لطلب وجبتك الآن.</p>
            )}
          </div>

          {/* FAQ Section Restored */}
          {t.faqs && t.faqs.length > 0 && (
            <section className="mt-12 pt-12 border-t border-white/20 flex flex-col gap-8">
              <h2 className="text-3xl text-[#FFD700] font-bold font-instrument text-center md:text-start">
                {t.faqTitle}
              </h2>
              <div className="flex flex-col gap-6">
                {t.faqs.map((faq, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-3 font-instrument">{faq.q}</h3>
                    <p className="text-lg text-white/70 leading-relaxed font-helvetica tracking-[-0.05em]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </article>

        <div className="mt-16 pt-8 border-t border-white/10 text-center w-full">
          <Link href={isEn ? "/en/blog" : "/blog"} className="text-[#FFD700] text-xl hover:underline hover:text-white transition-colors font-bold font-helvetica">
            {isEn ? "← Back to Blog" : "← العودة للمدونة"}
          </Link>
        </div>
      </div>
    </main>
  );
}