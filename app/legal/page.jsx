"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function LegalHubPage() {
  const { lang } = useLanguage();

  const policies = [
    { ar: "سياسة سلامة الغذاء", en: "Food Safety Policy", href: "/legal/food-safety" },
    { ar: "سياسة الاسترجاع والإلغاء", en: "Refund & Cancellation Policy", href: "/legal/refund" },
    { ar: "الشروط والأحكام", en: "Terms & Conditions", href: "/legal/terms" },
    { ar: "سياسة الخصوصية", en: "Privacy Policy", href: "/legal/privacy" }
  ];

  return (
    <div className="w-full pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-5xl md:text-7xl mb-16 text-center ${lang === 'en' ? 'en-accent-heading' : ''}`}>
          {lang === 'ar' ? "المركز القانوني" : "Legal Hub"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, i) => (
            <Link key={i} href={policy.href} className="premium-card p-10 flex flex-col items-center justify-center text-center no-underline hover:scale-105 transition-transform">
              <h2 className={`text-2xl font-bold text-[#FFD700] ${lang === 'en' ? 'en-accent-heading' : ''}`}>
                {lang === 'ar' ? policy.ar : policy.en}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
