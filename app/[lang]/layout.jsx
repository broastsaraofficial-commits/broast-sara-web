import { Cairo, Instrument_Serif } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link"; // ADDED for the global sticky footer

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
   icons: {
     icon: [
      { url: '/favicon.ico', sizes: 'any' },
       { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
       { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
       { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
       { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
   },openGraph: {
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
  const isEn = lang === "en";

  return (
    <html lang={lang} dir={direction} suppressHydrationWarning>
      <head>
        {/* Intentionally left blank to protect the critical rendering path */}
        
        {/* Google Tag Manager - Script Tag added safely */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KQVFFFTQ');
          `}
        </Script>
      </head>
      <body className={`${cairo.variable} ${instrument.variable} bg-black antialiased text-white min-h-screen flex flex-col relative`}>

        {/* Google Tag Manager (noscript) - Placed immediately after body open */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQVFFFTQ"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
          
          {/* ADDED: Global Sticky Footer for Mobile. Z-index 100. Pointer-events-none on wrapper so it doesn't block clicks beneath it. */}
          <div className="fixed bottom-6 left-0 w-full z-[100] px-4 flex gap-3 md:hidden pointer-events-none" dir={isEn ? "ltr" : "rtl"}>
            <Link href={isEn ? "/en/order" : "/ar/order"} className="flex-1 bg-[#E31837] text-white py-4 rounded-full flex items-center justify-center gap-2 font-instrument text-lg shadow-[0_4px_20px_rgba(227,24,55,0.5)] pointer-events-auto no-underline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              {isEn ? "Order Now" : "اطلب الآن"}
            </Link>
            <Link href={isEn ? "/en/locations" : "/ar/locations"} className="flex-1 bg-black/40 border border-white/20 text-white py-4 rounded-full flex items-center justify-center gap-2 font-instrument text-lg backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] pointer-events-auto no-underline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {isEn ? "Branches" : "الفروع"}
            </Link>
          </div>

        </LanguageProvider>

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