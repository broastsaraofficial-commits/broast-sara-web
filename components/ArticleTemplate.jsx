import Link from "next/link";

export default function ArticleTemplate({ articleData, lang, children }) {
    const isEn = lang === 'en';

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": articleData.title,
        "image": `https://broastsara.com/products/${articleData.img}`,
        "author": { "@type": "Organization", "name": "Broast Sara" },
        "publisher": {
            "@type": "Organization",
            "name": "Broast Sara",
            "logo": { "@type": "ImageObject", "url": "https://broastsara.com/broast-sara-logo.webp" }
        },
        "datePublished": articleData.datePublished || new Date().toISOString(),
        "description": articleData.description
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {/* 1. FIXED: Added 'dir' logic for punctuation & reading flow */}
            <article className="pt-40 pb-32 px-6 max-w-4xl mx-auto text-white font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
                <Link href={isEn ? "/en/blog" : "/blog"} className={`text-[#FFD700] hover:text-white transition-colors mb-8 inline-block font-bold no-underline ${isEn ? 'text-left' : 'text-right'}`}>
                    {isEn ? "← Back to Blog" : "← العودة للمدونة"}
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white border-b border-white/20 pb-10 font-instrument text-center md:text-start">
                    {articleData.title}
                </h1>
                {children}
            </article>
        </>
    );
}