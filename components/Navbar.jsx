"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isEn = pathname.startsWith('/en');
  const lang = isEn ? 'en' : 'ar';

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    const cleanPath = pathname.replace(/^\/(en|ar)/, '') || '';
    const newPath = isEn ? `/ar${cleanPath}` : `/en${cleanPath}`;
    router.push(newPath || '/');
  };

  const navLinks = [
    { nameAr: "الرئيسية", nameEn: "Home", href: "/" },
    { nameAr: "قائمة الطعام", nameEn: "Menu", href: "/menu" },
    { nameAr: "الفروع", nameEn: "Locations", href: "/locations" },
    { nameAr: "عن سارة", nameEn: "About", href: "/about" },
    { nameAr: "الأسئلة الشائعة", nameEn: "FAQ", href: "/faq" },
    { nameAr: "المركز القانوني", nameEn: "Legal", href: "/legal" },
    { nameAr: "المدونة", nameEn: "Blog", href: "/blog" },
  ];

  const fontOverrideClass = isEn ? "![font-family:var(--font-instrument),_serif] !tracking-normal !font-normal" : "!tracking-normal !font-normal";

  const isLinkActive = (linkHref) => {
    if (linkHref === (isEn ? "/en" : "/ar")) {
      return pathname === linkHref;
    }
    return pathname.startsWith(linkHref);
  };

  return (
    <>
      {/* Navbar Z-index is 100 */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[98%] max-w-7xl z-[100] py-3 px-4 lg:px-8 liquid-glass flex items-center justify-between" dir={isEn ? "ltr" : "rtl"}>
        <Link href={isEn ? "/en" : "/ar"} className="flex items-center gap-3 no-underline" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/broast-sara-logo.webp" alt="Broast Sara" width={108} height={135} priority sizes="40px" className="h-10 w-auto" />
          <span className={`text-xl md:text-3xl text-white ${fontOverrideClass}`}>
            {isEn ? "Broast Sara" : "بروست سارة"}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {
            const linkHref = isEn ? (link.href === "/" ? "/en" : `/en${link.href}`) : (link.href === "/" ? "/ar" : `/ar${link.href}`);
            const isActive = isLinkActive(linkHref);

            return (
              <Link
                key={link.href}
                href={linkHref}
                className={`text-lg no-underline transition-all ${fontOverrideClass} ${isActive ? '!text-[#FFD700]' : 'text-white hover:text-[#FFD700]'}`}
              >
                {isEn ? link.nameEn : link.nameAr}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 ml-2">
            <button onClick={toggleLanguage} aria-label={isEn ? "Switch to Arabic" : "التبديل للغة الإنجليزية"} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm text-white bg-white/10 border border-white/30 hover:bg-white/20 transition-colors ${fontOverrideClass}`}>
              {isEn ? 'AR' : 'EN'}
            </button>
            <Link href={isEn ? "/en/order" : "/ar/order"} className={`py-2 px-6 text-lg rounded-full text-white bg-[#971111] no-underline hover:bg-[#7a0d0d] transition-colors ${fontOverrideClass}`}>
              {isEn ? 'Order Now' : 'اطلب الآن'}
            </Link>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        /* FIXED: Changed z-[90] to z-[110] so the mobile menu dropdown sits above the global sticky footer (z-[100]) */
        <div className="fixed inset-0 z-[110] flex flex-col items-center pt-[110px] px-4 pb-4 overflow-y-auto" dir={isEn ? "ltr" : "rtl"}>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="liquid-glass w-full max-w-sm p-8 flex flex-col items-center gap-6 relative z-10 animate-in zoom-in duration-200 mt-2">
            {navLinks.map((link) => {
              const linkHref = isEn ? (link.href === "/" ? "/en" : `/en${link.href}`) : (link.href === "/" ? "/ar" : `/ar${link.href}`);
              const isActive = isLinkActive(linkHref);

              return (
                <Link
                  key={link.href}
                  href={linkHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl no-underline transition-all ${fontOverrideClass} ${isActive ? '!text-[#FFD700]' : 'text-white'}`}
                >
                  {isEn ? link.nameEn : link.nameAr}
                </Link>
              );
            })}

            <div className="flex items-center gap-4 mt-6">
              <button onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} className={`w-12 h-12 rounded-full flex items-center justify-center text-lg text-white bg-white/10 border border-white/30 ${fontOverrideClass}`}>
                {isEn ? 'AR' : 'EN'}
              </button>
              <Link href={isEn ? "/en/order" : "/ar/order"} onClick={() => setMobileMenuOpen(false)} className={`py-3 px-8 text-xl rounded-full text-white bg-[#971111] no-underline ${fontOverrideClass}`}>
                {isEn ? 'Order Now' : 'اطلب الآن'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}