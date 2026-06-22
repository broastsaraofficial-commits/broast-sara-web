import Link from "next/link";

export function renderInline(text) {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <Link key={i} href={linkMatch[2]} className="text-[#FFD700] underline hover:text-white transition-colors">
          {linkMatch[1]}
        </Link>
      );
    }
    const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
    if (boldMatch) {
      return <strong key={i} className="text-white font-bold">{boldMatch[1]}</strong>;
    }
    return part;
  });
}

export function renderContentBlock(block, index) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith('### ')) {
    return (
      <h3 key={index} className="text-xl md:text-2xl text-[#FFD700] mt-6 font-instrument tracking-normal">
        {renderInline(trimmed.replace('### ', ''))}
      </h3>
    );
  }

  if (trimmed.startsWith('## ')) {
    return (
      <h2 key={index} className="text-2xl md:text-3xl text-[#FFD700] mt-8 font-instrument tracking-normal">
        {renderInline(trimmed.replace('## ', ''))}
      </h2>
    );
  }

  const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);
  const isBulletList = lines.length > 0 && lines.every(l => l.startsWith('- '));
  if (isBulletList) {
    return (
      <ul key={index} className="list-disc pl-6 rtl:pr-6 rtl:pl-0 flex flex-col gap-2 text-lg md:text-xl text-white font-helvetica tracking-[-0.05em] leading-relaxed">
        {lines.map((line, li) => (
          <li key={li}>{renderInline(line.replace(/^- /, ''))}</li>
        ))}
      </ul>
    );
  }

  const isOldHeading = trimmed.length < 90 && !trimmed.endsWith('.') && !trimmed.startsWith('•') && !trimmed.includes('[');
  if (isOldHeading) {
    return (
      <h2 key={index} className="text-2xl md:text-3xl text-[#FFD700] mt-6 font-instrument tracking-normal">
        {trimmed}
      </h2>
    );
  }

  return (
    <p key={index} className="text-lg md:text-xl text-white font-helvetica tracking-[-0.05em] leading-relaxed whitespace-pre-line">
      {renderInline(trimmed)}
    </p>
  );
}