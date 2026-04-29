"use client";
import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden pb-safe">
      <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 px-4 py-4 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {/* Call Now Button (Left) */}
        <a 
          href="tel:0533002270"
          className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold py-4 rounded-2xl hover:bg-white/10 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbdb17" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>اتصل بنا</span>
        </a>

        {/* Order Now Button (Right) */}
        <Link 
          href="/order" 
          className="flex-1 flex items-center justify-center gap-2 bg-brand-red text-white font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(230,52,49,0.4)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          <span>اطلب الآن</span>
        </Link>
      </div>
    </div>
  );
}
