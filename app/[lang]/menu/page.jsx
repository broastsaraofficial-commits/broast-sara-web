import MenuClient from "./MenuClient";

// 1. BILINGUAL METADATA (Section D2 & G2)[cite: 5]
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const isEn = resolvedParams.lang === "en";

    return {
        title: isEn ? "Menu & Prices — Broast Sara | Madinah" : "قائمة الطعام والأسعار — بروست سارة | Broast Sara Menu",
        description: isEn ? "Discover Broast Sara's full menu in Madinah. Fresh crispy broast, legendary shawarma, and burgers starting from 5 SAR. 100% fresh local chicken." : "اكتشف قائمة طعام بروست سارة الكاملة في المدينة المنورة. وجبات البروست الطازج، الشاورما الأسطورية، والبرجر بأسعار تبدأ من 5 ريال. دجاج محلي طازج 100%.",
        keywords: isEn ? "Broast Sara menu, Broast prices, Madinah fried chicken, Sarookh shawarma" : "منيو بروست سارة, أسعار بروست سارة, وجبات بروست, شاورما صاروخ, برجر دجاج المدينة",
        alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/menu` },
           openGraph: {
     title: isEn ? "Menu & Prices — Broast Sara | Madinah" : "قائمة الطعام والأسعار — بروست سارة",
     description: isEn ? "Discover Broast Sara's full menu in Madinah. Fresh crispy broast, legendary shawarma, and burgers starting from 5 SAR. 100% fresh local chicken." : "اكتشف قائمة طعام بروست سارة الكاملة في المدينة المنورة. وجبات البروست الطازج، الشاورما الأسطورية، والبرجر بأسعار تبدأ من 5 ريال.",
     url: `https://broastsara.com/${resolvedParams.lang}/menu`,
     type: 'website',
     images: [{ url: '/broast-sara-logo.webp', width: 1080, height: 1350, alt: isEn ? 'Broast Sara Menu Madinah' : 'قائمة بروست سارة المدينة المنورة' }],
   },
    };
}

export default async function MenuPage({ params }) {
    const resolvedParams = await params;
    const lang = resolvedParams.lang || "ar";
    const isEn = lang === "en";

    // 2. BILINGUAL MENU SCHEMA FOR AI & AEO (Task 12)[cite: 5]
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": isEn ? "Broast Sara Menu" : "قائمة طعام بروست سارة",
        "url": `https://broastsara.com/${lang}/menu`,
        "inLanguage": lang,
        "hasMenuSection": [
            {
                "@type": "MenuSection",
                "name": isEn ? "Main Meals" : "الوجبات الرئيسية",
                "hasMenuItem": [
                    { "@type": "MenuItem", "name": isEn ? "10 Piece Broast Meal" : "وجبة بروست 10 قطع", "offers": { "@type": "Offer", "price": "50.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "4710 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "4 Piece Broast Meal" : "وجبة بروست 4 قطع (نص بروست)", "offers": { "@type": "Offer", "price": "19.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1378 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "2 Piece Broast Meal" : "وجبة بروست قطعتين (ربع بروست)", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1018 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "5 Piece Chicken Fillet" : "فيليه دجاج 5 قطع", "offers": { "@type": "Offer", "price": "19.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1360 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "8 Piece Nuggets" : "مسحب 8 قطع (عادي/حراق)", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1006 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "7 Piece Fish Fillet" : "فيليه سمك 7 قطع", "offers": { "@type": "Offer", "price": "20.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1600 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "15 Piece Shrimp Meal" : "وجبة جمبري 15 قطعة", "offers": { "@type": "Offer", "price": "25.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1620 kcal" } }
                ]
            },
            {
                "@type": "MenuSection",
                "name": isEn ? "Shawarma & Plates" : "الشاورما والصحون",
                "hasMenuItem": [
                    { "@type": "MenuItem", "name": isEn ? "Sarookh Shawarma" : "شاورما صاروخ", "offers": { "@type": "Offer", "price": "9.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "670 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Large Arabic Plate" : "صحن عربي كبير", "offers": { "@type": "Offer", "price": "33.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "790 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Medium Arabic Plate" : "صحن عربي وسط", "offers": { "@type": "Offer", "price": "25.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "680 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Small Arabic Plate" : "صحن عربي صغير", "offers": { "@type": "Offer", "price": "17.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "640 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Samoli Shawarma" : "شاورما صامولي", "offers": { "@type": "Offer", "price": "5.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "523 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Shami Shawarma" : "شاورما شامي", "offers": { "@type": "Offer", "price": "5.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "273 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Fateer Shawarma" : "شاورما فطير", "offers": { "@type": "Offer", "price": "6.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "528 kcal" } }
                ]
            },
            {
                "@type": "MenuSection",
                "name": isEn ? "Burgers" : "البرجر",
                "hasMenuItem": [
                    { "@type": "MenuItem", "name": isEn ? "Double Zinger Cheese Burger" : "دبل برجر زنجر جبن", "offers": { "@type": "Offer", "price": "16.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1160 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Zinger Cheese Burger" : "برجر زنجر جبن", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "870 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Double Meat Cheese Burger" : "دبل برجر لحم جبن", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "2210 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Double Chicken Burger" : "دبل برجر دجاج", "offers": { "@type": "Offer", "price": "12.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "1180 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Meat Burger" : "برجر لحم", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "870 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Chicken Burger" : "برجر دجاج", "offers": { "@type": "Offer", "price": "7.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "770 kcal" } }
                ]
            },
            {
                "@type": "MenuSection",
                "name": isEn ? "Sides & Appetizers" : "المقبلات والطلبات الجانبية",
                "hasMenuItem": [
                    { "@type": "MenuItem", "name": isEn ? "Cheese Sticks 9 pcs" : "أصابع الجبن 9 قطع", "offers": { "@type": "Offer", "price": "17.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "565 kcal" } },
                    { "@type": "MenuItem", "name": isEn ? "Large Fries" : "بطاطس كبير", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "SAR" } },
                    { "@type": "MenuItem", "name": isEn ? "Small Fries" : "بطاطس صغير", "offers": { "@type": "Offer", "price": "5.00", "priceCurrency": "SAR" } },
                    { "@type": "MenuItem", "name": isEn ? "Garlic Sauce (Regular/Spicy)" : "ثوم (عادي/حراق)", "offers": { "@type": "Offer", "price": "1.00", "priceCurrency": "SAR" }, "nutrition": { "@type": "NutritionInformation", "calories": "200 kcal" } }
                ]
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <MenuClient lang={lang} />
        </>
    );
}