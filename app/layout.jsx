import { Cairo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image"; // استيراد مكون الصورة لتحسين الأداء

const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700", "900"], variable: "--font-cairo", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: ["400"], style: ["italic", "normal"], variable: "--font-instrument", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://broastsara.com"),
  title: {
    default: "بروست سارة | أفضل بروست في المدينة المنورة - Broast Sara Madinah",
    template: "%s | بروست سارة"
  },
  description: "استمتع بأفضل بروست في المدينة المنورة من بروست سارة. دجاج محلي طازج 100٪ يذبح يومياً، متبل بخلطتنا السرية. فروعنا تخدمك في العزيزية، الهجرة، والمزيد.",
  keywords: ["بروست سارة", "أفضل بروست في المدينة المنورة", "مطاعم المدينة المنورة", "بروست طازج", "Broast Sara", "شاورما المدينة"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "بروست سارة | أفضل بروست في المدينة المنورة",
    description: "دجاج محلي طازج 100٪ يذبح يومياً، متبل بخلطتنا السرية.",
    url: "https://broastsara.com",
    siteName: "Broast Sara",
    locale: "ar_SA",
    type: "website",
  },
  // دمج أيقونات الموقع
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${cairo.variable} ${instrument.variable} bg-black antialiased text-white min-h-screen flex flex-col relative`}>
        {/* Background Layer: Priority removed from desktop to save mobile bandwidth */}
        <div className="fixed inset-0 w-full h-full z-[-2] pointer-events-none">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src="/images/Gemini_Generated_Image_6l0zje6l0zje6l0zzz.webp"
              alt="Madinah Background"
              fill
              className="object-cover"
            />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image
              src="/images/Gemini_Generated_Image_scxlx2scxlx2scxll (1).webp"
              alt="Madinah Mobile"
              fill
              priority
              className="object-cover"
            />
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