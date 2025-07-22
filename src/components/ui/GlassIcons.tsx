import React from "react";
import Link from "next/link";


export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  href: string; // ✅ Ajouté ici
  customClass?: string;
}


export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
}

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`flex flex-col items-center gap-6 ${className || ""}`}>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-12 h-12 [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${item.customClass || ""}`}
        >
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-4 h-4 flex items-center justify-center"
              aria-hidden="true"
            >
              {item.icon}
            </span>
          </span>

          <span className="absolute top-full left-1/2 -translate-x-1/2 text-center text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-all">
            {item.label}
          </span>
        </Link>
      ))}
    </div>

  );
};

export default GlassIcons;
