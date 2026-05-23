"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname.startsWith('/en');
  const lang = isEn ? 'en' : 'ar';

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  const branches = [
    { nameAr: "العزيزية", nameEn: "Al Aziziyyah", number: "966596624929" },
    { nameAr: "الهجرة", nameEn: "Al Hijrah", number: "966553793829" },
    { nameAr: "الإمام البخاري", nameEn: "Imam Bukhari", number: "966533107787" },
    { nameAr: "حي البحر", nameEn: "Hil Bahr", number: "966533002270" },
    { nameAr: "الجوازات", nameEn: "Aljwazat", number: "966540414841" },
    { nameAr: "الجرف", nameEn: "Al Juruf", number: "966551624234" },
    { nameAr: "ينبع", nameEn: "Yanbu", number: "966500978585" },
    { nameAr: "أبيار الماشي (٢٤ ساعة)", nameEn: "Abiar Al Mashi", number: "966530957742" }
  ];

  const WhatsAppIcon = ({ size = "32", color = "white" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
    </svg>
  );

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-[105] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} dir={isEn ? "ltr" : "rtl"}>
          <div className="liquid-glass p-6 w-full max-w-sm flex flex-col gap-4 animate-in zoom-in duration-200 max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            {/* FIXED: Added aria-label to close button */}
            <button aria-label={isEn ? "Close" : "إغلاق"} className={`absolute top-6 ${isEn ? 'right-6' : 'left-6'} text-white hover:text-[#FFD700] z-10`} onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h4 className="text-[#FFD700] text-xl font-bold font-instrument text-center pb-4 border-b border-white/30 mt-2">
              {isEn ? "Select Branch" : "اختر الفرع للطلب"}
            </h4>
            {/* FIXED: Changed font-helvetica to font-instrument on the main wrapper */}
            <div className="overflow-y-auto flex flex-col gap-3 pr-2 pb-4 font-instrument tracking-wide">
              {branches.map((branch, i) => (
                <a key={i} href={`https://wa.me/${branch.number}`} target="_blank" rel="noopener noreferrer" className="w-full py-4 px-5 bg-white/10 hover:bg-[#25D366] hover:border-[#25D366] text-white rounded-2xl transition-all no-underline flex items-center justify-between group border border-white/20 shadow-sm">
                  {/* FIXED: Changed font-bold to font-normal */}
                  <span className="text-xl font-normal">{isEn ? branch.nameEn : branch.nameAr}</span>
                  <div className="opacity-70 group-hover:opacity-100"><WhatsAppIcon size="24" /></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FIXED: Added aria-label to main floating button */}
      <button aria-label={isEn ? "Order via WhatsApp" : "اطلب عبر الواتساب"} onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 z-[104] bg-[#25D366] w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95">
        <WhatsAppIcon size="36" />
      </button>
    </>
  );
}