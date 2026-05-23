export const menuCategories = [
  { id: "broast", enTitle: "Broast Chicken", arTitle: "بروست الدجاج" },
  { id: "nuggets", enTitle: "Nuggets & Fillets", arTitle: "مسحب وفيليه" },
  { id: "seafood", enTitle: "Seafood", arTitle: "المأكولات البحرية" },
  { id: "burgers", enTitle: "Burgers & Sandwiches", arTitle: "برجر وساندويتشات" },
  { id: "shawarma", enTitle: "Shawarma", arTitle: "شاورما" },
  { id: "sides", enTitle: "Sides & Sauces", arTitle: "إضافات وصوصات" },
  { id: "drinks", enTitle: "Beverages", arTitle: "مشروبات" }
];

export const menuItems = [
  // --- BROAST CHICKEN ---
  {
    id: "4-piece-original-broast",
    category: "broast",
    price: 19,
    kcal: 1120,
    isSpicy: false,
    img: "4-piece-original-broast-meal.webp",
    en: {
      title: "4 Piece Original Broast Meal",
      description: "Our classic crispy signature broast, perfectly golden. Made with 100% fresh, locally sourced halal chicken. A true Madinah favorite for the whole family!"
    },
    ar: {
      title: "وجبة بروست 4 قطع (أصلي)",
      description: "البروست الكلاسيكي المقرمش باللون الذهبي المثالي. محضر من دجاج محلي طازج وحلال 100٪. وجبة أهل المدينة المفضلة بامتياز!"
    }
  },
  {
    id: "4-piece-spicy-broast",
    category: "broast",
    price: 19,
    kcal: 1150,
    isSpicy: true,
    img: "4-piece-spicy-broast-meal.webp",
    en: {
      title: "4 Piece Spicy Broast Meal",
      description: "For those who love a strong, bold flavor with every bite. Our 100% fresh halal chicken with a secret spicy marinade. Perfectly crispy on the outside, juicy and fiery inside."
    },
    ar: {
      title: "وجبة بروست 4 قطع (حراق)",
      description: "لمحبي النكهة القوية والجريئة مع كل قضمة. دجاجنا الطازج والحلال 100٪ بتتبيلتنا الحارة السرية. مقرمش من الخارج وطري ومليء بالنكهة من الداخل."
    }
  },
  {
    id: "2-piece-original-broast",
    category: "broast",
    price: 10,
    kcal: 650,
    isSpicy: false,
    img: "2-piece-original-broast-meal.webp",
    en: {
      title: "2 Piece Original Broast Meal",
      description: "A quick and satisfying bite of our legendary golden broast. Always fresh, never frozen, and 100% halal. Served piping hot and perfectly crispy."
    },
    ar: {
      title: "وجبة بروست قطعتين (أصلي)",
      description: "وجبة سريعة ومشبعة من البروست الذهبي الأسطوري. طازج دائماً، غير مجمد أبداً، وحلال 100٪. يُقدم ساخناً ومقرمشاً لتجربة لا تُنسى."
    }
  },
  {
    id: "2-piece-spicy-broast",
    category: "broast",
    price: 10,
    kcal: 670,
    isSpicy: true,
    img: "2-piece-spicy-broast-meal.webp",
    en: {
      title: "2 Piece Spicy Broast Meal",
      description: "The perfect spicy kick in a convenient 2-piece size. Prepared daily with our signature hot seasoning. Crispy, fresh, and guaranteed to satisfy your cravings."
    },
    ar: {
      title: "وجبة بروست قطعتين (حراق)",
      description: "النكهة الحارة المثالية في وجبة خفيفة من قطعتين. يُحضر يومياً ببهاراتنا الحارة المميزة. مقرمش وطازج ومضمون لإرضاء ذوقك."
    }
  },

  // --- NUGGETS & FILLETS ---
  {
    id: "8-piece-original-nuggets",
    category: "nuggets",
    price: 16,
    kcal: 410,
    isSpicy: false,
    img: "8-piece-original-chicken-nuggets.webp",
    en: {
      title: "8 Piece Original Chicken Nuggets",
      description: "Bite-sized perfection made from pure, fresh halal chicken. Golden and crispy outside, tender and juicy inside. The ultimate sharing meal for friends and family."
    },
    ar: {
      title: "مسحب دجاج 8 قطعة (عادي)",
      description: "قطع ذهبية مثالية محضرة من دجاج حلال وطازج. مقرمشة من الخارج وطرية وغنية من الداخل. وجبة المشاركة الأروع للأصدقاء والعائلة."
    }
  },
  {
    id: "8-piece-spicy-nuggets",
    category: "nuggets",
    price: 16,
    kcal: 430,
    isSpicy: true,
    img: "8-piece-spicy-chicken-nuggets.webp",
    en: {
      title: "8 Piece Spicy Chicken Nuggets",
      description: "Our famous nuggets turned up a notch with fiery spices. 100% fresh daily chicken, deep-fried to golden perfection. A must-try for spice lovers in Madinah!"
    },
    ar: {
      title: "مسحب دجاج 8 قطعة (حراق)",
      description: "مسحب دجاجنا الشهير بنكهة حارة ومميزة. دجاج طازج 100٪ مقلي ليصبح ذهبياً ومقرمشاً. الخيار الأول لعشاق النكهة الحارة في المدينة!"
    }
  },
  {
    id: "8-piece-original-nuggets-cheese",
    category: "nuggets",
    price: 17,
    kcal: 560,
    isSpicy: false,
    img: "8-piece-original-chicken-nuggets-with-cheese.webp",
    en: {
      title: "8 Piece Original Chicken Nuggets with Cheese",
      description: "Premium fresh chicken nuggets stuffed with rich, melted cheese. A delightful burst of flavor in every crispy bite. A kid-friendly and universally loved classic."
    },
    ar: {
      title: "مسحب دجاج بالجبنة 8 قطعة (عادي)",
      description: "قطع مسحب الدجاج الفاخرة المحشوة بالجبن الذائب. انفجار مذهل للنكهات مع كل قضمة مقرمشة. وجبة محببة للجميع وللأطفال بشكل خاص."
    }
  },
  {
    id: "8-piece-spicy-nuggets-cheese",
    category: "nuggets",
    price: 17,
    kcal: 580,
    isSpicy: true,
    img: "8-piece-spicy-chicken-nuggets-with-cheese.webp",
    en: {
      title: "8 Piece Spicy Chicken Nuggets with Cheese",
      description: "The perfect balance of creamy melted cheese and spicy heat. Golden, crispy, and made with 100% halal fresh chicken. An unforgettable taste experience you will crave."
    },
    ar: {
      title: "مسحب دجاج بالجبنة 8 قطعة (حراق)",
      description: "التوازن المثالي بين الجبن الذائب والحرارة اللذيذة. ذهبي ومقرمش ومحضر من دجاج طازج وحلال 100٪. تجربة تذوق لا تُنسى ستجعلك تطلب المزيد."
    }
  },
  {
    id: "5-piece-original-fillet",
    category: "nuggets",
    price: 19,
    kcal: 720,
    isSpicy: false,
    img: "5-piece-original-chicken-fillet.webp",
    en: {
      title: "5 Piece Original Chicken Fillet",
      description: "Thick, juicy cuts of fresh halal chicken breast. Coated in our signature seasoned breading for maximum crunch. A premium dining experience for chicken lovers."
    },
    ar: {
      title: "فيليه دجاج 5 قطع (عادي)",
      description: "قطع سميكة وطرية من صدر الدجاج الطازج والحلال. مغطاة بخلطتنا السرية للحصول على أقصى درجات القرمشة. تجربة فاخرة لعشاق الدجاج الحقيقي."
    }
  },
  {
    id: "5-piece-spicy-fillet",
    category: "nuggets",
    price: 19,
    kcal: 740,
    isSpicy: true,
    img: "5-piece-spicy-chicken-fillet.webp",
    en: {
      title: "5 Piece Spicy Chicken Fillet",
      description: "Premium chicken breast fillets with a bold, spicy kick. Crunchy, tender, and intensely flavorful. Freshly prepared to bring the heat!"
    },
    ar: {
      title: "فيليه دجاج 5 قطع (حراق)",
      description: "شرائح صدور الدجاج الفاخرة بنكهة حارة وجريئة. مقرمشة وطرية ومليئة بالنكهات القوية. مُحضرة طازجة خصيصاً لتشعل حواسك!"
    }
  },

  // --- SEAFOOD ---
  {
    id: "15-piece-original-shrimp",
    category: "seafood",
    price: 25,
    kcal: 480,
    isSpicy: false,
    img: "15-piece-original-golden-shrimp.webp",
    en: {
      title: "15 Piece Original Golden Shrimp",
      description: "Premium shrimp coated in our light, crispy golden batter. Perfectly fried to lock in the succulent seafood flavors, offering a highly satisfying treat for any time of day."
    },
    ar: {
      title: "جمبري ذهبي 15 قطعة (أصلي)",
      description: "جمبري فاخر مغطى بطبقة ذهبية خفيفة ومقرمشة. مقلي بعناية للحفاظ على النكهات البحرية الغنية، ليوفر وجبة رائعة ومشبعة في أي وقت من اليوم."
    }
  },
  {
    id: "15-piece-spicy-shrimp",
    category: "seafood",
    price: 25,
    kcal: 500,
    isSpicy: true,
    img: "15-piece-spicy-golden-shrimp.webp",
    en: {
      title: "15 Piece Spicy Golden Shrimp",
      description: "Spicy golden shrimp with a bold and savory flavor. Prepared with our signature hot seasoning to be perfectly crispy on the outside and juicy on the inside."
    },
    ar: {
      title: "جمبري ذهبي 15 قطعة (حراق)",
      description: "جمبري ذهبي حراق بنكهة جريئة ولذيذة. مُحضر بتتبيلتنا الحارة المميزة ليكون مقرمشاً من الخارج وطرياً ومليئاً بالنكهة من الداخل."
    }
  },
  {
    id: "8-piece-original-fish",
    category: "seafood",
    price: 20,
    kcal: 520,
    isSpicy: false,
    img: "8-piece-original-fish-fillet.webp",
    en: {
      title: "8 Piece Original Fish Fillet",
      description: "Golden crispy fish fillets that are fresh, light, and flaky. Seasoned to absolute perfection and served hot for a fulfilling seafood feast in Madinah."
    },
    ar: {
      title: "سمك فيليه 8 قطع (أصلي)",
      description: "فيليه سمك ذهبي ومقرمش يتميز بخفته وطعمه الطازج. متبل بعناية فائقة ويُقدم ساخناً لوجبة بحرية مشبعة في المدينة المنورة"
    }
  },
  {
    id: "8-piece-spicy-fish",
    category: "seafood",
    price: 20,
    kcal: 540,
    isSpicy: true,
    img: "8-piece-spicy-fish-fillet.webp",
    en: {
      title: "8 Piece Spicy Fish Fillet",
      description: "Zesty spicy fish fillets with a crunchy golden coating. 100% fresh fish prepared daily with an intense flavor that seafood lovers will crave."
    },
    ar: {
      title: "سمك فيليه 8 قطع (حراق)",
      description: "فيليه سمك حراق ومنعش بطبقة مقرمشة وذهبية. سمك طازج 100٪ يُحضر يومياً بنكهة قوية سيعشقها محبو المأكولات البحرية."
    }
  },

  // --- BURGERS & SANDWICHES ---
  {
    id: "nuggets-sandwich",
    category: "burgers",
    price: 6,
    kcal: 460,
    isSpicy: false,
    img: "nuggets-sandwich.webp",
    en: {
      title: "Nuggets Sandwich",
      description: "Crispy, 100% fresh chicken nuggets packed into a soft bun. Topped with fresh lettuce and our signature sauces. A quick, satisfying, and affordable classic."
    },
    ar: {
      title: "ساندويتش مسحب (عادي)",
      description: "قطع مسحب الدجاج المقرمشة والطازجة داخل خبز طري. مغطاة بالخس الطازج وصلصاتنا المميزة. خيار كلاسيكي سريع ومشبع وبسعر رائع."
    }
  },
  {
    id: "chicken-tortilla",
    category: "burgers",
    price: 12,
    kcal: 580,
    isSpicy: false,
    img: "chicken-tortilla-sandwich.webp",
    en: {
      title: "Chicken Tortilla Sandwich",
      description: "Tender, fresh halal chicken wrapped in a soft, warm tortilla. Comes with our legendary garlic sauce and fresh veggies. A flavorful wrap that is incredibly easy to eat on the move."
    },
    ar: {
      title: "ساندويتش تورتيلا",
      description: "دجاج طازج وحلال ملفوف في خبز تورتيلا دافئ وطري. يُقدم مع صلصة الثوم الأسطورية والخضروات الطازجة. لفافة مليئة بالنكهات وسهلة التناول في أي وقت."
    }
  },
  {
    id: "golden-shrimp-sandwich",
    category: "burgers",
    price: 7,
    kcal: 420,
    isSpicy: false,
    img: "golden-shrimp-sandwich.webp",
    en: {
      title: "Golden Shrimp Sandwich",
      description: "Crispy golden fried shrimp generously loaded into a fresh sandwich. Complemented by a tangy, flavorful sauce. A premium seafood sandwich experience."
    },
    ar: {
      title: "ساندويتش جمبري",
      description: "جمبري ذهبي مقرمش محشو بسخاء في ساندويتش طازج. يُقدم مع صلصة غنية ونكهة لا تُقاوم. تجربة ساندويتش بحرية فاخرة ومميزة."
    }
  },
  {
    id: "fish-fillet-sandwich",
    category: "burgers",
    price: 7,
    kcal: 440,
    isSpicy: false,
    img: "fish-fillet-sandwich.webp",
    en: {
      title: "Fish Fillet Sandwich",
      description: "A perfectly fried flaky fish fillet in a soft, toasted bun. Topped with creamy sauce for a smooth, rich flavor profile. A light yet deeply satisfying meal choice."
    },
    ar: {
      title: "ساندويتش سمك فيليه",
      description: "فيليه سمك مقلي ومثالي داخل خبز طري ومحمص. مغطى بصلصة كريمية لنكهة سلسة وغنية. خيار وجبة خفيفة ولكنها مشبعة للغاية."
    }
  },
  {
    id: "original-chicken-burger",
    category: "burgers",
    price: 7,
    kcal: 450,
    isSpicy: false,
    img: "original-chicken-burger.webp",
    en: {
      title: "Original Chicken Burger",
      description: "A juicy, 100% fresh halal chicken patty cooked to perfection. Served in a soft bun with crisp lettuce and classic toppings. The standard for a great chicken burger in Madinah."
    },
    ar: {
      title: "برجر دجاج",
      description: "شريحة دجاج طازجة وحلال 100٪ مطهوة بامتياز. تُقدم في خبز طري مع خس مقرمش وإضافات كلاسيكية. المعيار الحقيقي لبرجر الدجاج الرائع في المدينة."
    }
  },
  {
    id: "chicken-burger-cheese",
    category: "burgers",
    price: 8,
    kcal: 520,
    isSpicy: false,
    img: "chicken-burger-with-cheese.webp",
    en: {
      title: "Chicken Burger with Cheese",
      description: "Our classic fresh chicken burger elevated with a slice of melted cheese. A rich and creamy addition that enhances every single bite. A guaranteed crowd-pleaser!"
    },
    ar: {
      title: "برجر دجاج بالجبن",
      description: "برجر الدجاج الكلاسيكي الطازج مع شريحة من الجبن الذائب. إضافة غنية وكريمية تعزز النكهة في كل قضمة. وجبة مضمونة لإسعاد جميع الأذواق!"
    }
  },
  {
    id: "double-chicken-burger-cheese",
    category: "burgers",
    price: 12,
    kcal: 780,
    isSpicy: false,
    img: "double-chicken-burger-with-cheese.webp",
    en: {
      title: "Double Chicken Burger with Cheese",
      description: "For the serious appetite: two juicy fresh halal chicken patties topped with rich melted cheese. Stacked high with double the flavor and creamy, savory satisfaction. A truly massive burger experience perfected with a cheesy touch."
    },
    ar: {
      title: "دبل برجر دجاج بالجبن",
      description: "للشهية الكبيرة: شريحتان من الدجاج الطازج والحلال مع طبقة غنية من الجبن الذائب. طبقات مليئة بالمذاق المضاعف والرضا التام مع لمسة كريمية لا تُقاوم. تجربة برجر ضخمة ولذيذة ومثالية لكل عشاق الجبن"
    }
  },
  {
    id: "classic-beef-burger",
    category: "burgers",
    price: 7,
    kcal: 540,
    isSpicy: false,
    img: "classic-beef-burger.webp",
    en: {
      title: "Classic Beef Burger",
      description: "A rich, savory beef patty grilled to bring out its natural juices. Served on a fresh bun with premium toppings and sauce. A hearty and traditional favorite."
    },
    ar: {
      title: "برجر لحم",
      description: "شريحة لحم غنية ولذيذة مشوية لتبرز عصارتها الطبيعية. تُقدم في خبز طازج مع إضافات وصلصة فاخرة. الخيار المفضل والتقليدي لعشاق اللحوم."
    }
  },
  {
    id: "double-beef-burger-cheese",
    category: "burgers",
    price: 12,
    kcal: 860,
    isSpicy: false,
    img: "double-beef-burger-with-cheese.webp",
    en: {
      title: "Double Beef Burger with Cheese",
      description: "Two savory grilled beef patties topped with rich melted cheese. Twice the flavor and double the satisfaction for true meat lovers. A massive, cheesy burger experience designed to conquer your deepest hunger."
    },
    ar: {
      title: "دبل برجر لحم بالجبن",
      description: "شريحتان من اللحم المشوي اللذيذ مع طبقة غنية من الجبن الذائب. ضعف النكهة والمذاق المذهل لعشاق اللحوم الحقيقيين. برجر ضخم ومثالي للقضاء على أشد درجات الجوع"
    }
  },
  {
    id: "zinger-chicken-burger",
    category: "burgers",
    price: 9,
    kcal: 590,
    isSpicy: true,
    img: "zinger-chicken-burger.webp",
    en: {
      title: "Zinger Chicken Burger",
      description: "Signature spicy Zinger chicken breast, fried to crispy perfection. Served with fresh lettuce and sauce in a soft, fresh bun."
    },
    ar: {
      title: "برجر زنجر دجاج",
      description: "صدر دجاج زنجر حراق مقرمش ومحضر بإتقان. يُقدم مع الخس الطازج والصلصة المميزة داخل خبز طري"
    }
  },
  {
    id: "zinger-chicken-burger-cheese",
    category: "burgers",
    price: 10,
    kcal: 660,
    isSpicy: true,
    img: "zinger-chicken-burger-with-cheese.webp",
    en: {
      title: "Zinger Chicken Burger with Cheese",
      description: "Our classic Zinger chicken burger topped with rich, melted cheese. A perfect blend of bold spice and creamy, savory satisfaction."
    },
    ar: {
      title: "برجر زنجر دجاج بالجبن",
      description: "برجر زنجر الدجاج الكلاسيكي مغطى بطبقة من الجبن الذائب. مزيج مثالي من النكهة الحارة والقوام الكريمي الغني."
    }
  },
  {
    id: "double-zinger-cheese",
    category: "burgers",
    price: 16,
    kcal: 980,
    isSpicy: true,
    img: "double-zinger-chicken-burger-with-cheese.webp",
    en: {
      title: "Double Zinger Chicken Burger with Cheese",
      description: "Double the spicy Zinger heat with two crispy, fresh chicken patties and melted cheese. Massive flavor for the ultimate chicken lover."
    },
    ar: {
      title: "دبل برجر زنجر دجاج بالجبن",
      description: "ضعف النكهة الحارة مع قطعتين زنجر مقرمشتين وجبن ذائب. تجربة زنجر ضخمة ومثالية لعشاق الدجاج الحقيقي."
    }
  },

  // --- SHAWARMA ---
  {
    id: "small-grated-shawarma-plate",
    category: "shawarma",
    price: 17,
    kcal: 620,
    isSpicy: false,
    img: "small-grated-shawarma-plate.webp",
    en: {
      title: "Small Grated Shawarma Plate",
      description: "Tender shredded shawarma chicken served with crispy fries, fresh cabbage, and our signature sauces. A perfect, quick, and satisfying meal portion."
    },
    ar: {
      title: "صحن مبشور (صغير)",
      description: "قطع شاورما دجاج طرية ومبشورة تُقدم مع بطاطس مقرمشة، ملفوف طازج، وصلصاتنا المميزة. وجبة مثالية وسريعة ومشبعة."
    }
  },
  {
    id: "medium-grated-shawarma-plate",
    category: "shawarma",
    price: 25,
    kcal: 920,
    isSpicy: false,
    img: "medium-grated-shawarma-plate.webp",
    en: {
      title: "Medium Grated Shawarma Plate",
      description: "A generous portion of our slow-roasted shredded shawarma. Served alongside crispy golden fries and refreshing sides for a fuller appetite."
    },
    ar: {
      title: "صحن مبشور (وسط)",
      description: "حصة سخية من شاورما الدجاج المبشورة والمشوية ببطء. تُقدم مع البطاطس الذهبية المقرمشة وإضافات منعشة للشهية الأكبر."
    }
  },
  {
    id: "large-grated-shawarma-plate",
    category: "shawarma",
    price: 33,
    kcal: 1220,
    isSpicy: false,
    img: "large-grated-shawarma-plate.webp",
    en: {
      title: "Large Grated Shawarma Plate",
      description: "The ultimate feast! A massive platter of succulent shredded shawarma, crispy fries, and fresh sides. Perfect for sharing or conquering big hunger."
    },
    ar: {
      title: "صحن مبشور (كبير)",
      description: "وليمة حقيقية! طبق ضخم من شاورما الدجاج الشهية، البطاطس المقرمشة، وإضافات طازجة. مثالي للمشاركة أو للقضاء على الجوع الشديد."
    }
  },
  {
    id: "shawarma-samoli",
    category: "shawarma",
    price: 5,
    kcal: 380,
    isSpicy: false,
    img: "shawarma-samoli.webp",
    en: {
      title: "Shawarma Samoli",
      description: "Our legendary slow-roasted shawarma wrapped in traditional Samoli bread. Juicy, perfectly spiced, and bursting with authentic flavor. The ultimate local Madinah street food experience."
    },
    ar: {
      title: "شاورما صامولي",
      description: "شاورما أسطورية مشوية ببطء ومحشوة في خبز الصامولي التقليدي. طرية ومتبلة بامتياز ومليئة بالنكهة الأصيلة. أروع تجربة لأكل الشوارع المحلي في المدينة المنورة."
    }
  },
  {
    id: "shami-shawarma",
    category: "shawarma",
    price: 5,
    kcal: 410,
    isSpicy: false,
    img: "shami-shawarma.webp",
    en: {
      title: "Shami Shawarma",
      description: "Authentic Shami-style shawarma wrapped in flatbread. Loaded with our signature garlic sauce and tender chicken. A classic recipe executed with absolute mastery."
    },
    ar: {
      title: "شاورما شامي",
      description: "شاورما على الطريقة الشامية الأصيلة ملفوفة في الخبز المفرود. مليئة بصلصة الثوم المميزة والدجاج الطري. وصفة كلاسيكية تُحضر بإتقان مطلق."
    }
  },
  {
    id: "shawarma-fatir",
    category: "shawarma",
    price: 6,
    kcal: 520,
    isSpicy: false,
    img: "shawarma-fatir.webp",
    en: {
      title: "Shawarma Fatir",
      description: "Our juicy legendary shawarma meat wrapped in rich, flaky Fatir bread. A beautiful contrast of textures: crispy bread and tender filling. A heavy, deeply satisfying twist on a classic."
    },
    ar: {
      title: "شاورما فطير",
      description: "لحم الشاورما الأسطوري الطري ملفوف في خبز الفطير الغني والمقرمش. تباين رائع في القوام: خبز مقرمش وحشوة طرية. لمسة غنية ومشبعة جداً على الوجبة الكلاسيكية."
    }
  },
  {
    id: "saroukh-shawarma",
    category: "shawarma",
    price: 9,
    kcal: 680,
    isSpicy: false,
    img: "saroukh-shawarma.webp",
    en: {
      title: "Saroukh Shawarma",
      description: "The legendary giant! An extra-large, flavor-packed shawarma wrap. Loaded heavily with fresh chicken, fries, and our garlic sauce. A massive meal for an unbeatable price."
    },
    ar: {
      title: "شاورما صاروخ",
      description: "العملاق الأسطوري! ساندويتش شاورما كبير الحجم ومليء بالنكهات. محشو بسخاء بالدجاج الطازج والبطاطس وصلصة الثوم. وجبة ضخمة بسعر لا يُقهر."
    }
  },
  {
    id: "small-arabic-shawarma-plate",
    category: "shawarma",
    price: 17,
    kcal: 750,
    isSpicy: false,
    img: "small-arabic-shawarma-plate.webp",
    en: {
      title: "Small Arabic Shawarma Plate",
      description: "Perfectly cut bites of our Arabic shawarma roll. Served with crispy fries and our legendary garlic dipping sauce. A beautiful, neat presentation of a beloved dish."
    },
    ar: {
      title: "شاورما عربي صغير",
      description: "قطع مثالية من لفافة الشاورما العربية الخاصة بنا. تُقدم مع البطاطس المقرمشة وصلصة الثوم الأسطورية للتغميس. تقديم جميل ومرتب لطبق محبوب جداً."
    }
  },
  {
    id: "medium-arabic-shawarma-plate",
    category: "shawarma",
    price: 25,
    kcal: 1050,
    isSpicy: false,
    img: "medium-arabic-shawarma-plate.webp",
    en: {
      title: "Medium Arabic Shawarma Plate",
      description: "A generous spread of sliced Arabic shawarma, fries, and pickles. Ideal for a hearty lunch or a light dinner to share. Made with the freshest ingredients daily."
    },
    ar: {
      title: "شاورما عربي وسط",
      description: "توزيعة سخية من قطع الشاورما العربية، البطاطس، والمخللات. مثالية لغداء مشبع أو عشاء خفيف للمشاركة. محضرة يومياً من أطازج المكونات."
    }
  },
  {
    id: "large-arabic-shawarma-plate",
    category: "shawarma",
    price: 33,
    kcal: 1350,
    isSpicy: false,
    img: "large-arabic-shawarma-plate.webp",
    en: {
      title: "Large Arabic Shawarma Plate",
      description: "The ultimate shawarma feast! A huge platter of sliced Arabic wraps. Comes loaded with all the sides: fries, pickles, and plenty of sauce. Perfect for gathering around with friends and family."
    },
    ar: {
      title: "شاورما عربي كبير",
      description: "وليمة الشاورما الكبرى! طبق ضخم من لفائف الشاورما المقطعة. مصحوب بجميع الإضافات: بطاطس، مخلل، والكثير من الصلصة. مثالي للتجمعات مع الأصدقاء والعائلة."
    }
  },

  // --- SIDES & SAUCES ---
  {
    id: "9-piece-normal-cheese-sticks",
    category: "sides",
    price: 17,
    kcal: 490,
    isSpicy: false,
    img: "9-piece-normal-cheese-sticks.webp",
    en: {
      title: "9 Piece Normal Cheese Sticks",
      description: "Golden, crispy sticks filled with rich, melted cheese. A satisfying, gooey treat that’s perfect for sharing with family and friends."
    },
    ar: {
      title: "أصابع الجبن (عادي) 9 قطع",
      description: "أصابع جبن ذهبية ومقرمشة محشوة بالجبن الغني والذائب. وجبة خفيفة ومثالية للمشاركة مع العائلة والأصدقاء."
    }
  },
  {
    id: "9-piece-spicy-cheese-sticks",
    category: "sides",
    price: 17,
    kcal: 510,
    isSpicy: true,
    img: "9-piece-spicy-cheese-sticks.webp",
    en: {
      title: "9 Piece Spicy Cheese Sticks",
      description: "Crispy golden cheese sticks with a bold, spicy kick. The perfect combination of gooey melted cheese and fiery flavor in every bite."
    },
    ar: {
      title: "أصابع الجبن (حرّاق) 9 قطع",
      description: "أصابع الجبن الذهبية والمقرمشة مع لمسة حارة وجريئة. التوازن المثالي بين الجبن الذائب والنكهة الحارة في كل قضمة."
    }
  },
  {
    id: "regular-french-fries",
    category: "sides",
    price: 5,
    kcal: 320,
    isSpicy: false,
    img: "regular-french-fries.webp",
    en: {
      title: "Regular French Fries",
      description: "Crispy, golden, and perfectly salted french fries. The essential sidekick to our broast and shawarma. Cooked fresh to order for maximum crunch."
    },
    ar: {
      title: "بطاطس (حجم عادي)",
      description: "بطاطس مقلية مقرمشة وذهبية ومملحة بامتياز. الرفيق الأساسي لوجبات البروست والشاورما. تُقلى طازجة عند الطلب لضمان أقصى درجات القرمشة."
    }
  },
  {
    id: "large-french-fries",
    category: "sides",
    price: 10,
    kcal: 550,
    isSpicy: false,
    img: "large-french-fries.webp",
    en: {
      title: "Large French Fries",
      description: "A massive portion of our golden, crispy fries. Perfect for sharing or for those who simply can't get enough. Hot, salty, and utterly irresistible."
    },
    ar: {
      title: "بطاطس (حجم كبير)",
      description: "حصة ضخمة من بطاطسنا الذهبية والمقرمشة. مثالية للمشاركة أو لمن لا يكتفي بالحجم العادي. ساخنة ولذيذة ولا يمكن مقاومتها أبداً."
    }
  },
  {
    id: "legendary-garlic-sauce",
    category: "sides",
    price: 1,
    kcal: 95,
    isSpicy: false,
    img: "legendary-garlic-sauce.webp",
    en: {
      title: "Legendary Garlic Sauce",
      description: "Our famous, creamy garlic Thoum sauce. The unforgettable taste that makes every bite of chicken magical. A true Broast Sara signature recipe"
    },
    ar: {
      title: "صلصة الثوم الأسطورية",
      description: "صلصة الثوم (الثومية) الكريمية الشهيرة الخاصة بنا. الطعم الذي لا يُنسى والذي يجعل كل قضمة دجاج ساحرة. وصفة بروست سارة المميزة والأسطورية حقاً"
    }
  },
  {
    id: "cocktail-sauce",
    category: "sides",
    price: 1,
    kcal: 75,
    isSpicy: false,
    img: "cocktail-sauce.webp",
    en: {
      title: "Cocktail Sauce",
      description: "Our sweet and tangy cocktail sauce, the perfect pairing for shrimp and fish dishes."
    },
    ar: {
      title: "صوص كوكتيل",
      description: "صلصة الكوكتيل الحلوة والمنعشة، المزيج المثالي لأطباق الجمبري والسمك."
    }
  },
  {
    id: "tomato-ketchup",
    category: "sides",
    price: 1,
    kcal: 20,
    isSpicy: false,
    img: "tomato-ketchup.webp",
    en: {
      title: "Tomato Ketchup",
      description: "Classic sweet tomato ketchup, a must-have for dipping your golden fries."
    },
    ar: {
      title: "كاتشب",
      description: "كاتشب الطماطم الكلاسيكي الحلو، ضروري لتغميس البطاطس الذهبية."
    }
  },

  // --- DRINKS ---
  {
    id: "mirinda-citrus-small",
    category: "drinks",
    price: 2.5,
    kcal: 140,
    isSpicy: false,
    img: "mirinda-citrus-small.webp",
    en: {
      title: "Mirinda Citrus (Small)",
      description: "A refreshing burst of zesty citrus flavor with a vibrant kick. The perfect chilled companion to balance the heat of your spicy broast meal."
    },
    ar: {
      title: "ميرندا حمضيات (صغير)",
      description: "انفجار منعش من نكهة الحمضيات بلمسة حيوية. الرفيق البارد المثالي ليوازن حرارة وجبة البروست الحراق الخاصة بك"
    }
  },
  {
    id: "7up-small",
    category: "drinks",
    price: 2.5,
    kcal: 130,
    isSpicy: false,
    img: "7up-small.webp",
    en: {
      title: "7UP (Small)",
      description: "Crisp, clear, and bubbly lemon-lime refreshment. Light and perfectly chilled to cleanse your palate between every delicious bite of chicken."
    },
    ar: {
      title: "سيفن أب (صغير)",
      description: "انتعاش الليمون واللايم الصافي والفوار. خفيف وبارد تماماً ليطهر حواسك بين كل قضمة لذيذة من الدجاج."
    }
  },
  {
    id: "pepsi-small",
    category: "drinks",
    price: 2.5,
    kcal: 140,
    isSpicy: false,
    img: "pepsi-small.webp",
    en: {
      title: "Pepsi (Small)",
      description: "The classic bold cola taste served ice-cold for maximum satisfaction. A timeless refreshing choice that pairs brilliantly with our legendary shawarma."
    },
    ar: {
      title: "بيبسي (صغير)",
      description: "طعم الكولا الأصلي والقوي يُقدم مثلجاً لتحقيق أقصى درجات الرضا. خيار منعش كلاسيكي يتناسب بامتياز مع شاورما سارة الأسطورية"
    }
  },
  {
    id: "mountain-dew-small",
    category: "drinks",
    price: 2.5,
    kcal: 160,
    isSpicy: false,
    img: "mountain-dew-small.webp",
    en: {
      title: "Mountain Dew (Small)",
      description: "An intense citrus charge designed to fuel your energy. A refreshing kick that adds a bold layer of flavor to our golden chicken nuggets."
    },
    ar: {
      title: "ماونتن ديو (صغير)",
      description: "دفعة قوية من الحمضيات مصممة لتشحن طاقتك. انتعاش رائع يضيف طبقة من النكهة الجريئة لقطع مسحب الدجاج الذهبية."
    }
  },
  {
    id: "pepsi-family-size",
    category: "drinks",
    price: 9,
    kcal: 560,
    isSpicy: false,
    img: "pepsi-family-size.webp",
    en: {
      title: "Pepsi (Family Size)",
      description: "Our classic bold cola in a generous large size made for sharing. The essential choice for family gatherings and group broast feasts in Madinah."
    },
    ar: {
      title: "بيبسي (حجم عائلي)",
      description: "طعم بيبسي القوي بحجم كبير وسخي مخصص للمشاركة. الخيار الأساسي للتجمعات العائلية وولائم البروست الجماعية في المدينة المنورة"
    }
  },
  {
    id: "mirinda-citrus-regular",
    category: "drinks",
    price: 5,
    kcal: 210,
    isSpicy: false,
    img: "mirinda-citrus-regular.webp",
    en: {
      title: "Mirinda Citrus (Regular)",
      description: "A larger refreshing serving of your favorite zesty citrus flavor. Chilled to perfection to keep you cool while enjoying our spicy signature dishes."
    },
    ar: {
      title: "ميرندا حمضيات (وسط)",
      description: "حصة منعشة أكبر من نكهة الحمضيات المفضلة لديك. باردة بامتياز لتبقيك منتعشاً أثناء الاستمتاع بأطباقنا الحارة المميزة."
    }
  },
  {
    id: "small-water",
    category: "drinks",
    price: 0.5,
    kcal: 0,
    isSpicy: false,
    img: "small-water.webp",
    en: {
      title: "Small Water",
      description: "Refreshing, chilled drinking water. The perfect, simple choice to keep you hydrated and comfortable while enjoying your delicious meal."
    },
    ar: {
      title: "ماء (صغير)",
      description: "مياه شرب منعشة ومبردة. الخيار البسيط والمثالي للحفاظ على انتعاشك وراحتك أثناء الاستمتاع بوجبتك اللذيذة."
    }
  },
  {
    id: "large-water",
    category: "drinks",
    price: 1,
    kcal: 0,
    isSpicy: false,
    img: "large-water.webp",
    en: {
      title: "Large Water",
      description: "A generous bottle of refreshing water. Essential for sharing or for those who need a bit more hydration to complement their Broast Sara feast."
    },
    ar: {
      title: "ماء (كبير)",
      description: "زجاجة مياه كبيرة ومنعشة. خيار أساسي للمشاركة أو لمن يحتاج إلى القليل من الانتعاش الإضافي لتكمل وليمة بروست سارة الخاصة بك"
    }
  }
];