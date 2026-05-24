import Link from "next/link";
import { notFound } from "next/navigation";

// Your EXACT branch data with the new hsLink property added
const branches = {
    "al-aziziyyah": { ar: "العزيزية", en: "Al Aziziyyah", phone: "0596624929", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-aziziah/112370", addressAr: "حي العزيزية، المدينة المنورة", addressEn: "Al Aziziyyah, Madinah 42376", lat: "24.4686", lng: "39.6142" },
    "al-hijrah": { ar: "الهجرة", en: "Al Hijrah", phone: "0553793829", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-jabirah/112366", addressAr: "شارع الأمير سلطان، الهجرة، حي الشيبية", addressEn: "Prince Sultan Street, Al Hijrah, Madinah 42392", lat: "24.4321", lng: "39.5987" },
    "imam-bukhari": { ar: "الإمام البخاري", en: "Imam Bukhari", phone: "0533107787", hsLink: "https://hungerstation.com/sa-en/restaurant/al-madinah-al-munawwarah/al-defaa/112370", addressAr: "الضيافة، المدينة المنورة", addressEn: "Al Imam Al Boukhari, Ad Difa, Madinah 42374", lat: "24.4812", lng: "39.5634" },
    "hil-bahr": { ar: "حي البحر", en: "Hil Bahr", phone: "0533002270", hsLink: null, addressAr: "الجمعة، المدينة المنورة", addressEn: "Jaber Ibn Atik, Al Jumuah, Madinah 42316", lat: "24.4501", lng: "39.6200" },
    "aljwazat": { ar: "الجوازات", en: "Aljwazat", phone: "0540414841", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~ar-rawabi~112364", addressAr: "الروابي، المدينة المنورة", addressEn: "Ar Rawabi, Madinah 42381", lat: "24.4600", lng: "39.6300" },
    "al-juruf": { ar: "الجرف", en: "Al Juruf", phone: "0551624234", hsLink: "https://hungerstation.com/sa-en/qc/64212/Broast-Sara/branch/al-madinah-al-munawwarah~al-zahra~112366", addressAr: "الزهراء، المدينة المنورة", addressEn: "Az Zahrah, Madinah 42334", lat: "24.4900", lng: "39.5800" },
    "yanbu": { ar: "ينبع", en: "Yanbu", phone: "0500978585", hsLink: "https://hungerstation.com/sa-en/restaurant/yanbu/al-hawra/112657", addressAr: "عمر بن الخطاب، العمارة، ينبع", addressEn: "Omar Bin Al Khattab, Al Amarah, Yanbu 46421", lat: "24.0891", lng: "38.0622" },
    "abiar-al-mashi": { ar: "أبيار الماشي", en: "Abiar Al Mashi", phone: "0530957742", hsLink: null, addressAr: "حي أبيار الماشي، المدينة المنورة", addressEn: "Abiar Al Mashi, Madinah 42542", lat: "24.3100", lng: "39.5100" }
};

export function generateStaticParams() {
    const slugs = Object.keys(branches);
    const params = [];
    slugs.forEach(slug => {
        params.push({ lang: 'ar', slug });
        params.push({ lang: 'en', slug });
    });
    return params;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const branch = branches[resolvedParams.slug];
    const lang = resolvedParams.lang || "ar";
    const isEn = lang === "en";

    if (!branch) return { title: 'Branch Not Found' };

    const title = isEn ? `Broast Sara ${branch.en} | Location & Hours` : `بروست سارة فرع ${branch.ar} | العنوان وأوقات العمل`;

    const description = isEn
        ? `Find the phone number, exact address, and opening hours for the Broast Sara ${branch.en} branch. Visit us today to enjoy the best fresh, crispy broast chicken in Madinah. Located at ${branch.addressEn}.`
        : `اكتشف رقم الهاتف، العنوان الدقيق، وأوقات العمل لفرع بروست سارة في ${branch.ar}. تفضل بزيارتنا اليوم لتستمتع بأفضل وجبات دجاج البروست الطازج والمقرمش في المدينة المنورة. يقع فرعنا في ${branch.addressAr}.`;

    const canonicalUrl = `https://broastsara.com/${lang}/locations/${resolvedParams.slug}`;

    return {
        title,
        description,
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            images: ['/broast-sara-logo.webp'],
            type: "website",
        }
    };
}

export default async function BranchPage({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const lang = resolvedParams.lang || "ar";
    const isEn = lang === "en";

    const branch = branches[slug];
    if (!branch) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": isEn ? `Broast Sara ${branch.en}` : `بروست سارة ${branch.ar}`,
        "telephone": `+966${branch.phone.substring(1)}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": isEn ? branch.addressEn : branch.addressAr,
            "addressLocality": "Madinah",
            "addressCountry": "SA"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": branch.lat, "longitude": branch.lng },
        "url": `https://broastsara.com/${lang}/locations/${slug}`
    };

    return (
        <div className="w-full pt-40 pb-32 px-6" dir={isEn ? "ltr" : "rtl"}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="max-w-5xl mx-auto liquid-glass overflow-hidden flex flex-col text-center md:text-start">

                <div className="p-12 md:p-16 flex flex-col">
                    {/* MODIFIED: Adjusted Title Format and added mobile line break */}
                    <h1 className="text-4xl md:text-6xl mb-12 text-[#FFD700] font-instrument font-bold text-center">
                        {isEn ? (
                            <>Broast Sara <br className="md:hidden" /> {branch.en}</>
                        ) : (
                            <>بروست سارة <br className="md:hidden" /> {branch.ar}</>
                        )}
                    </h1>

                    <div className="flex flex-col gap-6 text-xl mb-12 text-white/90">
                        {/* MODIFIED: Forced left alignment for all screen sizes */}
                        <div className="flex items-center gap-4 justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 flex-shrink-0">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-helvetica tracking-[-0.05em] leading-relaxed text-left">
                                {isEn ? branch.addressEn : branch.addressAr}
                            </span>
                        </div>

                        {/* MODIFIED: Forced left alignment for all screen sizes */}
                        <div className="flex items-center gap-4 justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 flex-shrink-0">
                                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                            </svg>
                            <span dir="ltr" className="text-left font-helvetica tracking-[-0.05em]">+966 {branch.phone.substring(1)}</span>
                        </div>

                        {/* MODIFIED: Forced left alignment for all screen sizes */}
                        <div className="flex items-center gap-4 justify-start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 flex-shrink-0">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                            </svg>
                            <span className="text-left font-helvetica tracking-[-0.05em]">{isEn ? 'Daily: 12:30 PM - 2:30 AM' : 'يومياً: 12:30 م - 2:30 ص'}</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center pb-6">
                        {/* 1. ORDER VIA WHATSAPP (MODIFIED: Green Background) */}
                        <a href={`https://wa.me/966${branch.phone.substring(1)}`} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-[#25D366] hover:!bg-[#1DA851] shadow-[0_10px_30px_rgba(37,211,102,0.4)] border-none px-8 py-4 font-helvetica tracking-[-0.05em] font-normal text-white no-underline text-lg text-center flex-1">
                            {isEn ? 'Order via WhatsApp' : 'طلب عبر الواتساب'}
                        </a>

                        {/* 2. HUNGERSTATION (Conditional) (MODIFIED: Normal Font Weight) */}
                        {branch.hsLink && (
                            <a href={branch.hsLink} target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] hover:bg-[#FFC000] text-black px-8 py-4 rounded-full text-lg font-normal flex items-center justify-center no-underline font-helvetica tracking-[-0.05em] transition-all flex-1 text-center">
                                {isEn ? 'HungerStation' : 'هنقرستيشن'}
                            </a>
                        )}

                        {/* 3. VIEW MENU */}
                        <Link href={isEn ? "/en/menu" : "/ar/menu"} className="btn-secondary px-8 py-4 font-helvetica tracking-[-0.05em] font-normal text-white no-underline text-lg text-center flex-1">
                            {isEn ? 'View Menu' : 'قائمة الطعام'}
                        </Link>
                    </div>
                </div>

                <div className="w-full h-80 md:h-[450px] border-t border-white/20 relative">
                    <iframe
                        title={isEn ? `Broast Sara ${branch.en} Map` : `خريطة فرع بروست سارة ${branch.ar}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0, display: 'block' }}
                        src={`https://maps.google.com/maps?q=$${encodeURIComponent('Broast Sara ' + branch.addressEn)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}