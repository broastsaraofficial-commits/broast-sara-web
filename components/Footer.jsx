"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="relative w-full py-16 px-6 bg-black/20 backdrop-blur-xl border-t border-white/10 z-[50] mt-32">
      {/* Tightened vertical gap from 12 to 8 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start">
        
        {/* Brand & NAP: Reset to base font size, tight line height */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <img src="/broast-sara-logo.webp" alt="Logo" className="h-16 w-auto mb-1" />
          <div>
            <h2 className="text-xl font-bold mb-1">
              {lang === 'ar' ? "بروست سارة — المدينة المنورة" : "Broast Sara — Madinah"}
            </h2>
            <p className="text-white/80 text-base leading-snug">
              {lang === 'ar' ? "أفضل بروست في المدينة المنورة." : "The best broast in Madinah."}
            </p>
          </div>
          <div className="text-white/70 flex flex-col gap-1 mt-1">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#E31837]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.215-3.88-6.812-6.774l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              <span dir="ltr" className="text-base font-medium">+966 54 023 0888</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#E31837]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              <span className="text-base font-medium">broastsaraofficial@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Link Columns: Font size text-base, vertical gap reduced to 1 */}
        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-[#FFD700] font-bold mb-2">{lang === 'ar' ? 'دليل الفروع' : 'Our Branches'}</h3>
          <Link href="/locations/al-aziziyyah" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'العزيزية' : 'Al Aziziyyah'}</Link>
          <Link href="/locations/al-hijrah" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'الهجرة' : 'Al Hijrah'}</Link>
          <Link href="/locations/imam-bukhari" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'الإمام البخاري' : 'Imam Bukhari'}</Link>
          <Link href="/locations/hil-bahr" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'حي البحر' : 'Hil Bahr'}</Link>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-[#FFD700] font-bold mb-2">{lang === 'ar' ? 'اطلب الآن' : 'Order Now'}</h3>
          <a href="#" className="hover:text-[#E31837] transition-colors text-base">HungerStation</a>
          <a href="#" className="hover:text-[#E31837] transition-colors text-base">Yango Delivery</a>
          <h3 className="text-lg text-[#FFD700] mt-4 mb-2">{lang === 'ar' ? 'تابعنا' : 'Follow Us'}</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="hover:text-[#E31837] text-base">Instagram</a>
            <a href="#" className="hover:text-[#E31837] text-base">Snapchat</a>
            <a href="#" className="hover:text-[#E31837] text-base">TikTok</a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-lg text-[#FFD700] font-bold mb-2">{lang === 'ar' ? 'المركز القانوني' : 'Legal Hub'}</h3>
          <Link href="/legal/food-safety" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'سياسة سلامة الغذاء' : 'Food Safety Policy'}</Link>
          <Link href="/legal/privacy" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
          <Link href="/legal/terms" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link>
          <Link href="/legal/refund" className="hover:text-[#E31837] transition-colors text-base">{lang === 'ar' ? 'سياسة الاسترجاع' : 'Refund Policy'}</Link>
        </div>

      </div>
      <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-6 mt-12 text-center">
        <p className="text-sm text-white/50">
          {lang === 'ar' ? '© 2026 بروست سارة. جميع الحقوق محفوظة.' : '© 2026 BROAST SARA. ALL RIGHTS RESERVED.'}
        </p>
      </div>
    </footer>
  );
}
