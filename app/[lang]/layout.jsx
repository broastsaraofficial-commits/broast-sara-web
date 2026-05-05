import { Cairo, Instrument_Serif } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700", "900"], variable: "--font-cairo", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["italic", "normal"], variable: "--font-instrument", display: "swap" });

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isAr = lang === "ar";

  return {
    title: isAr ? "بروست سارة | أفضل بروست في المدينة المنورة" : "Broast Sara | Best Broast in Madinah",
    description: isAr ? "دجاج محلي طازج 100% يومياً في 8 فروع" : "100% fresh local chicken daily across 8 branches",
    alternates: {
      canonical: `https://broastsara.com/${lang}`,
      languages: { 'ar-SA': '/ar', 'en-US': '/en' },
    },
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const direction = lang === "en" ? "ltr" : "rtl";

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <body className={`${cairo.variable} ${instrument.variable} bg-black antialiased text-white min-h-screen flex flex-col relative`}>

        <div className="fixed inset-0 w-full h-full z-[-2] pointer-events-none">
          <div className="hidden md:block w-full h-full relative">
            <Image src="/images/Gemini_Generated_Image_6l0zje6l0zje6l0zzz.webp" alt="Background" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image src="/images/Gemini_Generated_Image_scxlx2scxlx2scxll (1).webp" alt="Mobile Background" fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>
        <div className="fixed inset-0 bg-black/10 z-[-1] pointer-events-none" />

        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}