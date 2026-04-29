"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { nameAr: "الرئيسية", nameEn: "Home", href: "/" },
    { nameAr: "قائمة الطعام", nameEn: "Menu", href: "/menu" },
    { nameAr: "الفروع", nameEn: "Locations", href: "/locations" },
    { nameAr: "عن سارة", nameEn: "About", href: "/about" },
    { nameAr: "الأسئلة الشائعة", nameEn: "FAQ", href: "/faq" },
    { nameAr: "المركز القانوني", nameEn: "Legal", href: "/legal" },
    { nameAr: "المدونة", nameEn: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[85%] max-w-6xl z-[100] transition-all duration-500 py-3 px-6 md:px-8 bg-black/20 backdrop-blur-xl rounded-full border border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <img src="/broast-sara-logo.webp" alt="Broast Sara" className="h-10 w-auto" />
          <span className={`text-xl md:text-2xl font-bold ${lang === 'en' ? 'en-accent-heading' : ''}`}>
            {lang === 'ar' ? "بروست سارة" : "Broast Sara"}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-lg md:text-xl no-underline transition-all ${pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700]'}`}
              style={{ fontFamily: lang === 'en' ? 'var(--font-instrument)' : 'var(--font-cairo)' }}
            >
              {lang === 'ar' ? link.nameAr : link.nameEn}
            </Link>
          ))}
          <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-xs hover:bg-white hover:text-black transition-all font-bold">
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <Link href="/order" className="btn-primary py-2 px-6 text-lg" style={{ fontFamily: lang === 'en' ? 'var(--font-instrument)' : 'var(--font-cairo)' }}>
            {lang === 'ar' ? 'اطلب الآن' : 'Order Now'}
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div className="bg-black/40 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl w-full max-w-sm shadow-[0_15px_50px_rgba(0,0,0,0.6)] flex flex-col items-center gap-6 animate-in zoom-in duration-200 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-6 right-6 text-white hover:text-[#FFD700]" onClick={() => setMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            
            <div className="w-full flex flex-col gap-4 mt-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-2xl text-center w-full py-2 border-b border-white/20 ${pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? 'text-[#FFD700]' : 'text-white'}`}
                  style={{ fontFamily: lang === 'en' ? 'var(--font-instrument)' : 'var(--font-cairo)' }}
                >
                  {lang === 'ar' ? link.nameAr : link.nameEn}
                </Link>
              ))}
            </div>

            <button onClick={() => { setLang(lang === 'en' ? 'ar' : 'en'); setMobileMenuOpen(false); }} className="w-full text-center py-4 border border-[#FFD700] text-[#FFD700] rounded-full mt-4 text-lg font-bold hover:bg-[#FFD700] hover:text-black transition-colors" style={{ fontFamily: lang === 'en' ? 'var(--font-instrument)' : 'var(--font-cairo)' }}>
              {lang === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
