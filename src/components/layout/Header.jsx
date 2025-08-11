"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const MENU = [
  { href: "/#top",             label: "ANASAYFA" },
  { href: "/#guvenlik-hijyen", label: "GÜVENLİK VE HİJYEN" },
  { href: "/#iletisim",        label: "İLETİŞİM" },
  { href: "/#randevu",         label: "RANDEVU AL" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const HEADER_H = 64; 

  const goTo = (e, href) => {
    const id = href.split("#")[1];
    if (!id) return;

    if (pathname === "/") {
      e.preventDefault();
      setOpen(false);
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_H - 8;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      setOpen(false);
      router.push(href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto h-16 px-4 flex items-center justify-between">
        {/* Sol: Başlık */}
        <Link
          href="/#top"
          onClick={(e) => goTo(e, "/#top")}
          className="text-2xl md:text-3xl tracking-wide text-sky-600 hover:text-sky-800 whitespace-nowrap font-ntf focus:outline-none focus:ring-2 focus:ring-sky-300/60 rounded"
        >
          HASTA TIRAŞI <span className="text-sky-400">|</span> EVDE TIRAŞ
        </Link>

        {/* Desktop menü */}
        <nav className="hidden md:flex flex-1 justify-evenly" aria-label="Ana menü">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={(e) => goTo(e, m.href)}
              className={`font-ntf text-3xl tracking-wide hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-sky-300/60 rounded ${
                m.label === "RANDEVU AL" ? "text-[var(--brand)] font-bold" : ""
              }`}
              aria-current={typeof window !== "undefined" && window.location.hash === m.href.split("#")[1] ? "page" : undefined}
            >
              {m.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          className="md:hidden p-2 border rounded ml-2 focus:outline-none focus:ring-2 focus:ring-sky-300/60"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900" />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        role="navigation"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-white/20 backdrop-blur-sm ${
          open ? "max-h-80" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="grid gap-2 py-3" aria-label="Mobil menü">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={(e) => goTo(e, m.href)}
              className={`py-2 text-center text-xl border-b last:border-0 focus:outline-none focus:ring-2 focus:ring-sky-300/60 rounded font-ntf${
                m.label === "RANDEVU AL" ? "font-ntf font-bold" : ""
              }`}
            >
              {m.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}