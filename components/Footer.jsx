"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const lang = isEn ? 'en' : 'ar';

  return (
    <footer className="relative w-full py-16 px-6 bg-black/20 backdrop-blur-xl border-t border-white/10 z-[50] mt-32 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-start">

        <div className="flex flex-col gap-4 items-center md:items-start">
          <Image src="/broast-sara-logo.webp" alt="Broast Sara Logo" width={216} height={270} className="h-24 w-auto mb-2" />
          <div>
            <h2 className="text-3xl font-bold font-instrument mb-2 text-white">
              {isEn ? "Broast Sara — Madinah" : "بروست سارة — المدينة المنورة"}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              {isEn ? "The best broast in Madinah." : "أفضل بروست في المدينة المنورة."}
            </p>
          </div>
          <div className="text-white/70 flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.215-3.88-6.812-6.774l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
              <span dir="ltr" className="text-lg font-medium">+966 54 023 0888</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              <span className="text-lg font-medium">broastsaraofficial@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-[#FFD700] font-bold font-instrument mb-3">{isEn ? 'Our Branches' : 'دليل الفروع'}</h3>
          <Link href={isEn ? "/en/locations/al-aziziyyah" : "/ar/locations/al-aziziyyah"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Al Aziziyyah' : 'العزيزية'}</Link>
          <Link href={isEn ? "/en/locations/al-hijrah" : "/ar/locations/al-hijrah"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Al Hijrah' : 'الهجرة'}</Link>
          <Link href={isEn ? "/en/locations/imam-bukhari" : "/ar/locations/imam-bukhari"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Imam Bukhari' : 'الإمام البخاري'}</Link>
          <Link href={isEn ? "/en/locations/hil-bahr" : "/ar/locations/hil-bahr"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Hil Bahr' : 'حي البحر'}</Link>
          {/* ADDED: 4 Missing Branches */}
          <Link href={isEn ? "/en/locations/al-juruf" : "/ar/locations/al-juruf"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Al Juruf' : 'الجرف'}</Link>
          <Link href={isEn ? "/en/locations/abiar-al-mashi" : "/ar/locations/abiar-al-mashi"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Abiar Al Mashi' : 'أبيار الماشي'}</Link>
          <Link href={isEn ? "/en/locations/yanbu" : "/ar/locations/yanbu"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Yanbu' : 'ينبع'}</Link>
          <Link href={isEn ? "/en/locations/aljwazat" : "/ar/locations/aljwazat"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Aljwazat' : 'الجوازات'}</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-[#FFD700] font-bold font-instrument mb-3">{isEn ? 'Order Now' : 'اطلب الآن'}</h3>
          {/* UPDATED: Linked HungerStation to Order page, removed Yango */}
          <Link href={isEn ? "/en/order" : "/ar/order"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">HungerStation</Link>
          <h3 className="text-2xl text-[#FFD700] font-bold font-instrument mt-6 mb-3">{isEn ? 'Follow Us' : 'تابعنا'}</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* UPDATED: Attached social media links with target="_blank" for safe external opening */}
            <a href="https://www.instagram.com/broastsara_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 text-lg text-white no-underline">Instagram</a>
            <a href="https://www.snapchat.com/add/broast_sara" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 text-lg text-white no-underline">Snapchat</a>
            <a href="https://www.tiktok.com/@broastsara?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 text-lg text-white no-underline">TikTok</a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl text-[#FFD700] font-bold font-instrument mb-3">{isEn ? 'Legal Hub' : 'المركز القانوني'}</h3>
          <Link href={isEn ? "/en/legal/food-safety" : "/ar/legal/food-safety"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Food Safety Policy' : 'سياسة سلامة الغذاء'}</Link>
          <Link href={isEn ? "/en/legal/privacy" : "/ar/legal/privacy"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Privacy Policy' : 'سياسة الخصوصية'}</Link>
          <Link href={isEn ? "/en/legal/terms" : "/ar/legal/terms"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Terms & Conditions' : 'الشروط والأحكام'}</Link>
          <Link href={isEn ? "/en/legal/refund" : "/ar/legal/refund"} className="hover:text-white/80 transition-colors text-lg text-white no-underline">{isEn ? 'Refund Policy' : 'سياسة الاسترجاع'}</Link>
        </div>

      </div>
      <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-6 mt-12 text-center">
        <p className="text-base text-white/50">
          {isEn ? '© 2026 BROAST SARA. ALL RIGHTS RESERVED.' : '© 2026 بروست سارة. جميع الحقوق محفوظة.'}
        </p>
      </div>
    </footer>
  );
}