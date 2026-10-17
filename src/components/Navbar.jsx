import { useState } from "react";
import useActiveSection from "../hooks/useActiveSection";

const links = [
  { label: "Home", href: "#", id: "" },
  { label: "Menu", href: "#menu", id: "menu" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Visit Us", href: "#visit", id: "visit" },
];
const sectionIds = links.map((l) => l.id).filter(Boolean);

const pill = (isActive) =>
  `font-label-lg text-label-lg px-4 py-2 rounded-full transition-colors ${
    isActive
      ? "bg-surface-container-high text-primary"
      : "text-on-surface-variant hover:text-primary"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/40 shadow-[0_4px_16px_-2px_rgba(43,30,22,0.05)]">
      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo.png" alt="Amber & Oak logo" className="h-9 lg:h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">
              Amber &amp; Oak
            </span>
            <span className="hidden sm:block font-label-sm text-label-sm text-on-surface-variant font-medium tracking-wider uppercase">
              Neighborhood Café &amp; Roastery
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-space-md">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={active === link.id ? "location" : undefined}
              className={pill(active === link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm shrink-0">
          <a
            href="#menu"
            aria-label="Order Ahead"
            className="inline-flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 font-label-lg text-label-lg rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all shadow-[0_4px_16px_-2px_rgba(43,30,22,0.12)]"
          >
            <span className="material-symbols-outlined text-[18px] sm:mr-1.5">shopping_bag</span>
            <span className="hidden sm:inline">Order Ahead</span>
          </a>
          <div className="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-on-surface hover:bg-surface-container-high transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-outline-variant/40 px-margin-mobile py-space-md flex flex-col gap-space-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={pill(active === link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}