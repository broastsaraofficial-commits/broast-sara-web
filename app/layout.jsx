import { Cairo, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${cairo.variable} ${instrument.variable} bg-black antialiased text-white min-h-screen flex flex-col relative`}>
        <div className="fixed inset-0 w-full h-full z-[-2] pointer-events-none">
          <img src="/images/Gemini_Generated_Image_6l0zje6l0zje6l0zzz.webp" className="w-full h-full object-cover hidden md:block" alt="Madinah Background" />
          <img src="/images/Gemini_Generated_Image_scxlx2scxlx2scxll (1).webp" className="w-full h-full object-cover block md:hidden" alt="Madinah Mobile" />
        </div>
        <div className="fixed inset-0 bg-black/10 z-[-1] pointer-events-none" />

        <LanguageProvider>
          <Navbar />
          <main className="relative z-10 flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
