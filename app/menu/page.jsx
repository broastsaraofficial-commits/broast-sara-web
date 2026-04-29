"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MenuPage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("meals");

  const getRating = (id) => (4.2 + (id % 8) * 0.1).toFixed(1);

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -180;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveCategory(id);
    }
  };

  const menuData = [
    {
      id: "meals",
      categoryAr: "الوجبات",
      categoryEn: "Meals",
      items: [
        { id: 1, img: "2-Piece-Chicken-Meal.webp", nameEn: "2 Piece Chicken Meal", nameAr: "وجبة دجاج قطعتين", priceEn: "10 SAR", priceAr: "١٠ ر.س", descEn: "Two pieces of our signature fresh local chicken, pressure-fried to a perfect golden crunch. Served with fries and bread.", descAr: "قطعتين من الدجاج المحلي الطازج المقلي بالضغط للحصول على قرمشة ذهبية مثالية. يُقدم مع البطاطس والخبز." },
        { id: 2, img: "4-Piece-Chicken-Meal.webp", nameEn: "4 Piece Chicken Meal", nameAr: "وجبة دجاج 4 قطع", priceEn: "19 SAR", priceAr: "١٩ ر.س", descEn: "A full meal of 4 fresh chicken pieces, marinated for 12 hours in our secret blend. Crispy outside, juicy inside.", descAr: "وجبة كاملة من 4 قطع دجاج طازجة، متبلة لمدة 12 ساعة بخلطتنا السرية. مقرمشة من الخارج وطرية من الداخل." },
        { id: 3, img: "5-Piece-Chicken-Fillet-Meal.webp", nameEn: "5 Piece Chicken Fillet Meal", nameAr: "وجبة فيليه دجاج 5 قطع", priceEn: "19 SAR", priceAr: "١٩ ر.س", descEn: "Five pieces of premium, tender boneless chicken fillet, golden-fried and served with crispy fries and our legendary garlic sauce.", descAr: "خمس قطع من فيليه الدجاج الفاخر بدون عظم، مقلية ولونها ذهبي وتُقدم مع البطاطس المقرمشة وصلصة الثوم الأسطورية." },
        { id: 4, img: "7-Piece-Fish-Fillet-Meal.webp", nameEn: "7 Piece Fish Fillet Meal", nameAr: "وجبة فيليه سمك 7 قطع", priceEn: "20 SAR", priceAr: "٢٠ ر.س", descEn: "Seven pieces of delicate, flaky fish fillet coated in our special breading and fried to perfection.", descAr: "سبع قطع من فيليه السمك الطري، مغطاة بتتبيلتنا الخاصة ومقلية بإتقان. وجبة مثالية لعشاق المأكولات البحرية." },
        { id: 5, img: "8-Piece-Chicken-Nuggets-Meal.webp", nameEn: "8 Piece Chicken Nuggets Meal", nameAr: "وجبة مسحب دجاج 8 قطع", priceEn: "16 SAR", priceAr: "١٦ ر.س", descEn: "Eight bite-sized pieces of fresh chicken breast, perfect for dipping and sharing. Comes with our signature sides.", descAr: "ثماني قطع من صدر الدجاج الطازج، مثالية للتغميس والمشاركة. تُقدم مع أطباقنا الجانبية المميزة." },
        { id: 6, img: "15-Piece-Shrimp-Meal.webp", nameEn: "15 Piece Shrimp Meal", nameAr: "وجبة جمبري 15 قطعة", priceEn: "25 SAR", priceAr: "٢٥ ر.س", descEn: "A generous serving of 15 premium shrimp, seasoned and golden-fried for a satisfying crunch.", descAr: "وجبة غنية بـ 15 قطعة من الجمبري الفاخر، متبلة ومقلية لقرمشة ذهبية لا تُقاوم. مثالية للمشاركة العائلية." }
      ]
    },
    {
      id: "shawarma",
      categoryAr: "شاورما وصحون",
      categoryEn: "Shawarma & Plates",
      items: [
        { id: 7, img: "Arabic-Plate.webp", nameEn: "Arabic Plate", nameAr: "صحن عربي", priceEn: "25 SAR", priceAr: "٢٥ ر.س", descEn: "Our famous shawarma cut into bite-sized pieces, served alongside golden fries, pickles, and our signature garlic sauce.", descAr: "الشاورما الشهيرة لدينا مقطعة إلى قطع صغيرة، تُقدم مع البطاطس الذهبية والمخللات وصلصة الثوم الخاصة." },
        { id: 8, img: "Grated-Plate.webp", nameEn: "Grated Plate", nameAr: "صحن مبشور", priceEn: "25 SAR", priceAr: "٢٥ ر.س", descEn: "A hearty plate featuring perfectly spiced and grated chicken shawarma, offering a unique texture.", descAr: "طبق غني بشاورما الدجاج المبشورة والمتبلة بعناية، يقدم قواماً فريداً ونكهة مركزة لا تُنسى." },
        { id: 9, img: "Samoli-Shawarma.webp", nameEn: "Samoli Shawarma", nameAr: "شاورما صامولي", priceEn: "5 SAR", priceAr: "٥ ر.س", descEn: "Classic roasted chicken shawarma packed into fresh Samoli bread, creating the perfect quick snack.", descAr: "شاورما الدجاج المشوية الكلاسيكية داخل خبز الصامولي الطازج، لتجربة طعام سريعة ومشبعة." },
        { id: 10, img: "sarookh-shawarma.webp", nameEn: "Sarookh Shawarma", nameAr: "شاورما صاروخ", priceEn: "9 SAR", priceAr: "٩ ر.س", descEn: "The legendary Sarookh: slow-roasted chicken wrapped tightly in thin Saj bread and toasted.", descAr: "الصاروخ الأسطوري: دجاج مشوي ببطء ملفوف بإحكام في خبز الصاج الرقيق ومحمص لقرمشة لا تُنسى." },
        { id: 11, img: "Shami-Shawarma.webp", nameEn: "Shami Shawarma", nameAr: "شاورما شامي", priceEn: "5 SAR", priceAr: "٥ ر.س", descEn: "Authentic Shami-style shawarma featuring perfectly marinated chicken and traditional spices.", descAr: "شاورما على الطريقة الشامية الأصيلة، تتميز بدجاج متبل بعناية ونكهات تقليدية في كل قضمة." }
      ]
    },
    {
      id: "burgers",
      categoryAr: "البرجر",
      categoryEn: "Burgers",
      items: [
        { id: 12, img: "meat-burger.webp", nameEn: "Meat Burger", nameAr: "برجر لحم", priceEn: "7 SAR", priceAr: "٧ ر.س", descEn: "A juicy, perfectly grilled meat patty served on a soft bun with fresh lettuce and our house sauce.", descAr: "شريحة لحم طرية ومشوية بشكل مثالي، تُقدم في خبز طري مع الخس الطازج والطماطم وصوص المطعم." },
        { id: 13, img: "meat-cheese-burger.webp", nameEn: "Meat Cheese Burger", nameAr: "برجر لحم بالجبن", priceEn: "8 SAR", priceAr: "٨ ر.س", descEn: "Our classic meat burger upgraded with a slice of melted premium cheese for an extra rich bite.", descAr: "برجر اللحم الكلاسيكي مطور بشريحة من الجبن الفاخر المذاب لقضمة غنية وكريمية." },
        { id: 14, img: "chicken-burger.webp", nameEn: "Chicken Burger", nameAr: "برجر دجاج", priceEn: "7 SAR", priceAr: "٧ ر.س", descEn: "A golden-fried, crispy chicken patty topped with fresh greens and mayo in a soft toasted bun.", descAr: "شريحة دجاج مقلية ذهبية ومقرمشة، مغطاة بالخضار الطازج والمايونيز، لتقديم قرمشة مشبعة." },
        { id: 15, img: "chicken-cheese-burger.webp", nameEn: "Chicken Cheese Burger", nameAr: "برجر دجاج بالجبن", priceEn: "8 SAR", priceAr: "٨ ر.س", descEn: "Crispy chicken burger topped with a layer of melted cheese, combining crunch and creaminess.", descAr: "برجر دجاج مقرمش مغطى بطبقة من الجبن المذاب، يجمع بين القرمشة والقوام الكريمي بشكل مثالي." },
        { id: 16, img: "Double-Cheese-Meat-Burger.webp", nameEn: "Double Cheese Meat Burger", nameAr: "دبل برجر لحم بالجبن", priceEn: "12 SAR", priceAr: "١٢ ر.س", descEn: "For serious appetites: two juicy meat patties and double the melted cheese stacked high.", descAr: "لأصحاب الشهية الكبيرة: شريحتان من اللحم الطري وضعف كمية الجبن المذاب في خبز طازج." },
        { id: 17, img: "Double-Chicken-Burger.webp", nameEn: "Double Chicken Burger", nameAr: "دبل برجر دجاج", priceEn: "12 SAR", priceAr: "١٢ ر.س", descEn: "Twice the crunch with two perfectly fried chicken patties, layered with fresh lettuce and mayo.", descAr: "قرمشة مضاعفة مع شريحتين من الدجاج المقلي بشكل مثالي، مع طبقات من الخس الطازج والمايونيز." },
        { id: 18, img: "Double-Zinger-Cheese-Burger.webp", nameEn: "Double Zinger Cheese Burger", nameAr: "دبل زنجر بالجبن", priceEn: "16 SAR", priceAr: "١٦ ر.س", descEn: "Spicy, crunchy, and massive. Two zinger chicken fillets loaded with cheese and spicy mayo.", descAr: "حار ومقرمش وضخم. شريحتان من دجاج الزنجر المليئة بالجبن والمايونيز الحار لتجربة لا تُقاوم." },
        { id: 19, img: "Zinger-Cheese-Burger.webp", nameEn: "Zinger Cheese Burger", nameAr: "زنجر بالجبن", priceEn: "10 SAR", priceAr: "١٠ ر.س", descEn: "Our famous spicy zinger fillet topped with melted cheese, designed for heat lovers.", descAr: "فيليه الزنجر الحار الشهير مغطى بالجبن المذاب، مصمم لعشاق الجمع بين الحرارة والنكهة الغنية." }
      ]
    },
    {
      id: "sides",
      categoryAr: "ساندوتشات ومقبلات",
      categoryEn: "Sandwiches & Sides",
      items: [
        { id: 20, img: "Nuggets.webp", nameEn: "Nuggets Sandwich", nameAr: "ساندوتش مسحب", priceEn: "6 SAR", priceAr: "٦ ر.س", descEn: "A quick, satisfying sandwich filled with our golden chicken nuggets and fresh sauce.", descAr: "ساندوتش سريع ومشبع محشو بمسحب الدجاج الذهبي والصلصة الطازجة في خبز طري." },
        { id: 21, img: "Fish-Fillet.webp", nameEn: "Fish Fillet Sandwich", nameAr: "ساندوتش فيليه سمك", priceEn: "7 SAR", priceAr: "٧ ر.س", descEn: "A light and flaky fish fillet sandwich, breaded to golden perfection and topped with sauce.", descAr: "ساندوتش فيليه سمك خفيف وطري، مقلي حتى اللون الذهبي ومغطى بصلصة التارتار." },
        { id: 22, img: "Cheese-Stick.webp", nameEn: "Cheese Stick", nameAr: "أصابع الجبن", priceEn: "17 SAR", priceAr: "١٧ ر.س", descEn: "Premium mozzarella cheese coated in seasoned breadcrumbs and fried until gooey.", descAr: "جبنة الموزاريلا الفاخرة مغطاة بفتات الخبز المتبل ومقلية حتى تذوب من الداخل." },
        { id: 23, img: "French-Fries.webp", nameEn: "French Fries", nameAr: "بطاطس مقلية", priceEn: "5 SAR", priceAr: "٥ ر.س", descEn: "Crispy, golden, and salted to perfection. The ultimate side dish for any meal.", descAr: "بطاطس مقرمشة وذهبية ومملحة بإتقان. الطبق الجانبي الأفضل لأي بروست أو برجر أو شاورما." }
      ]
    },
    {
      id: "drinks",
      categoryAr: "صوصات ومشروبات",
      categoryEn: "Sauces & Drinks",
      items: [
        { id: 24, img: "Mayonnaise.webp", nameEn: "Mayonnaise", nameAr: "مايونيز", priceEn: "1 SAR", priceAr: "١ ر.س", descEn: "Creamy, rich mayonnaise to complement your fries and sandwiches perfectly.", descAr: "مايونيز كريمي وغني ليُكمل البطاطس المقلية والساندوتشات الخاصة بك." },
        { id: 25, img: "Cocktail-Sauce.webp", nameEn: "Cocktail Sauce", nameAr: "صوص كوكتيل", priceEn: "1 SAR", priceAr: "١ ر.س", descEn: "Our sweet and tangy cocktail sauce, the perfect pairing for shrimp and fish dishes.", descAr: "صلصة الكوكتيل الحلوة والمنعشة، المزيج المثالي لأطباق الجمبري والسمك." },
        { id: 26, img: "tomato-ketchup.webp", nameEn: "Tomato Ketchup", nameAr: "كاتشب", priceEn: "1 SAR", priceAr: "١ ر.س", descEn: "Classic sweet tomato ketchup, a must-have for dipping your golden fries.", descAr: "كاتشب الطماطم الكلاسيكي الحلو، ضروري لتغميس البطاطس الذهبية." },
        { id: 27, img: "7up.webp", nameEn: "7-Up", nameAr: "سفن أب", priceEn: "3 SAR", priceAr: "٣ ر.س", descEn: "Crisp and refreshing lemon-lime soda to wash down your delicious meal.", descAr: "مشروب غازي منعش بنكهة الليمون لتستمتع به مع وجبتك اللذيذة." },
        { id: 28, img: "mirinda.webp", nameEn: "Mirinda", nameAr: "ميرندا", priceEn: "3 SAR", priceAr: "٣ ر.س", descEn: "Sweet, citrusy orange soda bursting with refreshing fruit flavor.", descAr: "مشروب غازي حلو بنكهة البرتقال مليء بنكهة الفواكه المنعشة." },
        { id: 29, img: "Pepsi.webp", nameEn: "Pepsi", nameAr: "بيبسي", priceEn: "3 SAR", priceAr: "٣ ر.س", descEn: "Ice-cold classic Pepsi cola, the perfect companion for crispy fried chicken.", descAr: "بيبسي كولا كلاسيكي مثلج، الرفيق المثالي للدجاج المقلي المقرمش." }
      ]
    }
  ];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-5xl md:text-7xl mb-8 text-center text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {lang === 'ar' ? "قائمة الطعام" : "Our Menu"}
        </h1>

        <div className="sticky top-[100px] z-[90] w-full max-w-4xl mx-auto mb-16 py-3 px-4 liquid-glass rounded-full overflow-x-auto flex gap-3 styled-scrollbar shadow-2xl border border-white/20">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all font-bold text-sm md:text-base border border-transparent ${activeCategory === cat.id ? 'bg-[#FFD700] text-black' : 'text-white hover:border-white/30'}`}
            >
              {lang === 'ar' ? cat.categoryAr : cat.categoryEn}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-24">
          {menuData.map((cat) => (
            <div key={cat.id} id={cat.id} className="w-full scroll-mt-[200px]">
              <h2 className={`text-3xl md:text-5xl mb-12 text-white border-b border-[#E31837] pb-4 inline-block ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                {lang === 'ar' ? cat.categoryAr : cat.categoryEn}
              </h2>

              <div className="flex flex-col gap-8">
                {cat.items.map((item) => (
                  <div key={item.id} className="premium-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 w-full">

                    <div className="w-full md:w-80 h-72 md:h-64 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={`/menu/${item.img}`}
                        alt={item.nameEn}
                        className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110"
                        onError={(e) => { e.target.onerror = null; e.target.src = '/broast-sara-logo.webp'; }}
                      />
                    </div>

                    <div className="flex flex-col items-center md:items-start justify-center w-full text-center md:text-start" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
                      <h3 className={`text-3xl font-bold text-white mb-2 ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                        {lang === 'ar' ? item.nameAr : item.nameEn}
                      </h3>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-white font-bold text-xl">{getRating(item.id)}</span>
                        <span className="text-[#FFD700] text-2xl">★★★★☆</span>
                      </div>

                      <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">
                        {lang === 'ar' ? item.descAr : item.descEn}
                      </p>

                      <div className="flex justify-center md:justify-start w-full">
                        <span className="bg-[#E31837] text-white font-black text-2xl py-3 px-10 rounded-full shadow-[0_0_20px_rgba(227,24,55,0.5)] transition-transform hover:scale-105 active:scale-95 cursor-default">
                          {lang === 'ar' ? item.priceAr : item.priceEn}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
