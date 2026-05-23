"use client";
import { useState } from "react";
import Link from "next/link";
import { menuCategories, menuItems } from "../../../constants/menuData";

export default function MenuClient({ lang }) {
  const isEn = lang === "en";
  const [activeCategory, setActiveCategory] = useState("broast");
  const [favorites, setFavorites] = useState({});

  const fontOverrideClass = isEn
    ? "![font-family:var(--font-instrument),_serif] !tracking-normal !font-normal"
    : "![font-family:var(--font-cairo),_sans-serif] !tracking-normal !font-normal";

  const getRating = (idString) => {
    const val = (4.2 + (idString.length % 8) * 0.1).toFixed(1);
    return val > 5 ? 5.0 : val;
  };

  const scrollToCategory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -180;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveCategory(id);
    }
  };

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full pt-40 pb-32 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>

      <div className="px-6 mb-8">
        <h1 className="text-5xl md:text-7xl text-center text-white font-bold font-instrument">
          {isEn ? "Our Menu" : "قائمة الطعام"}
        </h1>
      </div>

      {/* CATEGORY BAR:
          - Outside max-w-7xl so its own w-[98%] max-w-7xl matches navbar viewport width
          - overflow-x-auto for mobile/tablet scroll, scrollbar always hidden via [&::-webkit-scrollbar]:hidden
          - md:justify-center centers items on desktop/tablet; no mask-image (was causing left-side tablet clip)
      */}
      <div className="sticky top-[100px] z-[40] w-[98%] max-w-7xl mx-auto mb-16 py-3 px-4 lg:px-8 liquid-glass overflow-x-auto flex items-center gap-3 shadow-2xl border border-white/20 md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => scrollToCategory(cat.id)}
            className={`px-5 py-1 rounded-full whitespace-nowrap transition-all text-lg border ${fontOverrideClass} ${activeCategory === cat.id ? 'bg-[#971111] text-white border-transparent' : 'text-white border-transparent hover:border-white/30'}`}
          >
            {isEn ? cat.enTitle : cat.arTitle}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-24">
          {menuCategories.map((cat) => {
            const categoryItems = menuItems.filter(item => item.category === cat.id);
            if (categoryItems.length === 0) return null;

            return (
              <div key={cat.id} id={cat.id} className="w-full scroll-mt-[200px]">
                <h2 className="text-3xl md:text-5xl mb-12 text-white font-bold font-instrument inline-block">
                  {isEn ? cat.enTitle : cat.arTitle}
                </h2>

                <div className="flex flex-col gap-8">
                  {categoryItems.map((item) => (
                    <div key={item.id} className="liquid-glass p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 w-full text-center md:text-start relative">

                      {/* HEART / FAVORITE: top-right in LTR, top-left in RTL */}
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className={`absolute top-6 ${isEn ? 'right-6' : 'left-6'} p-2 rounded-full transition-transform hover:scale-110 z-10 bg-white/5 border border-white/10 backdrop-blur-md`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={favorites[item.id] ? "#E31837" : "none"} stroke={favorites[item.id] ? "#E31837" : "white"} strokeWidth="2" className="w-6 h-6 transition-colors">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                      </button>

                      {/* SPICY INDICATOR: 🔥 emoji, top-left in LTR, top-right in RTL */}
                      {item.isSpicy && (
                        <div className={`absolute top-6 ${isEn ? 'left-6' : 'right-6'} p-2 rounded-full z-10 bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center`}>
                          <span className="text-xl leading-none">🔥</span>
                        </div>
                      )}

                      <div className="w-full md:w-80 h-72 md:h-64 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={`/products/${item.img}`}
                          alt={isEn ? item.en.title : item.ar.title}
                          className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-110"
                          onError={(e) => { e.target.onerror = null; e.target.src = '/broast-sara-logo.webp'; }}
                        />
                      </div>

                      <div className="flex flex-col items-center md:items-start justify-center w-full">
                        <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                          <h3 className="text-3xl font-bold text-white font-instrument">
                            {isEn ? item.en.title : item.ar.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-normal text-xl font-helvetica tracking-[-0.05em]">{getRating(item.id)}</span>
                            <div className="flex gap-0.5">
                              {[...Array(4)].map((_, i) => (
                                <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" className="w-5 h-5">
                                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21 12,17.77 5.82,21 7,14.14 2,9.27 8.91,8.26" />
                                </svg>
                              ))}
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="1.5" className="w-5 h-5">
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21 12,17.77 5.82,21 7,14.14 2,9.27 8.91,8.26" />
                              </svg>
                            </div>
                          </div>

                          {item.kcal > 0 && (
                            <div className="flex items-center gap-1.5 opacity-90 border-l border-white/20 pl-4" dir="ltr">
                              <span className="text-lg">🔥</span>
                              <span className="text-white text-sm font-medium font-helvetica tracking-[-0.05em]">{item.kcal} kcal</span>
                            </div>
                          )}
                        </div>

                        <p className="text-white text-lg leading-relaxed mb-6 max-w-2xl font-helvetica tracking-[-0.05em]">
                          {isEn ? item.en.description : item.ar.description}
                        </p>

                        <div className="flex justify-center md:justify-start w-full mt-auto">
                          <Link href={isEn ? "/en/order" : "/ar/order"} className="bg-[#971111] text-white font-normal text-xl py-3 px-10 rounded-full shadow-[0_0_20px_rgba(151,17,17,0.5)] transition-transform hover:scale-105 active:scale-95 no-underline inline-block font-helvetica tracking-[-0.05em]">
                            {item.price} {isEn ? "SAR" : "ر.س"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}