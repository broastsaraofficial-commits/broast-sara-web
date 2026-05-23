import { Cairo, Instrument_Serif } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import Script from "next/script";

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700", "900"], variable: "--font-cairo", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["italic", "normal"], variable: "--font-instrument", display: "swap" });

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isAr = lang === "ar";

  return {
    title: isAr ? "بروست سارة | أفضل بروست في المدينة المنورة" : "Broast Sara | Best Broast in Madinah",
    description: isAr ? "دجاج محلي طازج 100% يومياً في 8 فروع" : "100% fresh local chicken daily across 8 branches",
    metadataBase: new URL('https://broastsara.com'),
    alternates: {
      canonical: `https://broastsara.com/${lang}`,
      languages: { 'ar-SA': '/ar', 'en-US': '/en' },
    },
    openGraph: {
      type: 'website',
      siteName: isAr ? 'بروست سارة' : 'Broast Sara',
      images: [
        {
          url: '/broast-sara-logo.webp',
          width: 1080,
          height: 1350,
          alt: isAr ? 'شعار بروست سارة' : 'Broast Sara Logo',
        }
      ]
    }
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const direction = lang === "en" ? "ltr" : "rtl";

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <head>
        {/* Intentionally left blank to protect the critical rendering path */}
      </head>
      <body className={`${cairo.variable} ${instrument.variable} bg-black antialiased text-white min-h-screen flex flex-col relative`}>

        <div className="fixed top-0 left-0 w-full h-[100vh] h-[100dvh] z-[-2] pointer-events-none bg-black">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/images/Gemini_Generated_Image_6l0zje6l0zje6l0zzz.webp"
              alt="Background"
              fill
              priority
              sizes="(min-width: 768px) 100vw, 0vw"
              className="object-cover"
            />
          </div>

          <div className="block md:hidden w-full h-full relative">
            <Image
              src="/images/Gemini_Generated_Image_scxlx2scxlx2scxll (1).webp"
              alt="Mobile Background"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 0vw"
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="fixed top-0 left-0 w-full h-[100vh] h-[100dvh] bg-black/10 z-[-1] pointer-events-none" />

        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>

        {/* FIXED: Moved 3rd-party scripts to the absolute bottom of the body to prevent render-blocking */}
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M8Z6PPBCLC"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8Z6PPBCLC');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "weisc4utr3");
          `}
        </Script>
      </body>
    </html>
  );
}