import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const isEn = resolvedParams.lang === "en";
  return {
    title: isEn ? "Legal Hub — Broast Sara" : "المركز القانوني — بروست سارة | Legal Hub",
    description: isEn ? "Access all Broast Sara legal policies, including food safety, privacy, terms of service, and refund policies." : "الوصول إلى جميع السياسات القانونية لبروست سارة، بما في ذلك سلامة الغذاء، الخصوصية، وشروط الخدمة وسياسة الاسترجاع.",
    alternates: { canonical: `https://broastsara.com/${resolvedParams.lang}/legal` }
  };
}

const dict = {
  ar: {
    title: "المركز القانوني",
    subtitle: "نحن نؤمن بالشفافية المطلقة. هنا يمكنك العثور على جميع الوثائق التي تحكم علاقتنا بعملائنا وضمانات جودتنا.",
    readMore: "اقرأ المزيد ←",
    footerText: "هل لديك استفسار قانوني؟ تواصل معنا عبر صفحة ",
    aboutLink: "من نحن",
    orReturn: " أو عُد إلى ",
    homeLink: "الرئيسية",
    policies: [
      { title: "سياسة سلامة الغذاء", desc: "التزامنا بالذبح اليومي ومعايير HACCP.", href: "/legal/food-safety", icon: "🛡️" },
      { title: "سياسة الاسترجاع والإلغاء", desc: "قواعد إلغاء الطلبات والتعويضات.", href: "/legal/refund", icon: "💰" },
      { title: "الشروط والأحكام", desc: "اتفاقية استخدام الموقع وخدمات الطلب.", href: "/legal/terms", icon: "📋" },
      { title: "سياسة الخصوصية", desc: "كيفية حماية بياناتك وفقاً لنظام PDPL.", href: "/legal/privacy", icon: "🔒" }
    ]
  },
  en: {
    title: "Legal Hub",
    subtitle: "We believe in absolute transparency. Here you can find all the documents that govern our relationship with our customers and our quality guarantees.",
    readMore: "Read More →",
    footerText: "Have a legal inquiry? Contact us via the ",
    aboutLink: "About Us",
    orReturn: " page or return to ",
    homeLink: "Home",
    policies: [
      { title: "Food Safety Policy", desc: "Our commitment to daily slaughter and HACCP standards.", href: "/legal/food-safety", icon: "🛡️" },
      { title: "Refund & Cancellation Policy", desc: "Rules for order cancellations and compensation.", href: "/legal/refund", icon: "💰" },
      { title: "Terms & Conditions", desc: "Website usage agreement and ordering services.", href: "/legal/terms", icon: "📋" },
      { title: "Privacy Policy", desc: "How we protect your data according to PDPL.", href: "/legal/privacy", icon: "🔒" }
    ]
  }
};

export default async function LegalHubPage({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang || "ar";
  const isEn = lang === "en";
  const t = dict[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isEn ? "Legal Hub — Broast Sara" : "المركز القانوني — بروست سارة",
    "description": isEn ? "Index of legal policies and regulatory commitments for Broast Sara." : "فهرس السياسات القانونية والالتزامات التنظيمية لمطاعم بروست سارة.",
    "publisher": { "@type": "Organization", "name": "Broast Sara" }
  };

  return (
    <div className="w-full pt-40 pb-32 px-6 font-helvetica tracking-[-0.05em]" dir={isEn ? "ltr" : "rtl"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto text-center md:text-start">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-instrument">
            {t.title}
          </h1>
          {/* FIXED 1: Subtitle is now full white */}
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.policies.map((policy, i) => (
            <Link key={i} href={isEn ? `/en${policy.href}` : policy.href} className="liquid-glass p-10 flex flex-col gap-4 hover:scale-[1.02] transition-transform no-underline group text-center md:text-start">
              <span className="text-4xl">{policy.icon}</span>
              <h2 className="text-3xl font-bold text-white group-hover:text-[#FFD700] transition-colors font-instrument">
                {policy.title}
              </h2>
              {/* FIXED 2: Card body text is now full white */}
              <p className="text-lg text-white">
                {policy.desc}
              </p>
              {/* FIXED 3: Read More is now font-normal and font-instrument */}
              <span className="text-[#FFD700] font-normal mt-2 font-instrument">{t.readMore}</span>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center border-t border-white/10 pt-10">
          {/* FIXED 4: Footer text is now full white */}
          <p className="text-white">
            {t.footerText} <Link href={isEn ? "/en/about" : "/about"} className="text-[#FFD700] underline hover:text-white transition-colors">{t.aboutLink}</Link> {t.orReturn} <Link href={isEn ? "/en" : "/"} className="text-[#FFD700] underline hover:text-white transition-colors">{t.homeLink}</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}