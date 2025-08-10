"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const MENU = [
  { href: "/#top",             label: "ANASAYFA" },
  { href: "/#hizmetler",       label: "HİZMETLER" },
  { href: "/#guvenlik-hijyen", label: "GÜVENLİK VE HİJYEN" },
  { href: "/#iletisim",        label: "İLETİŞİM" },
  { href: "/#randevu",         label: "RANDEVU AL" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const HEADER_H = 64; // h-16

  const goTo = (e, href) => {
    const parts = href.split("#");
    const id = parts[1];
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
      router.push(href); // hash ile ana sayfaya gidiyor
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto h-16 px-4 flex items-center gap-4">
        {/* Sol: Marka */}
        {/* Sol: Marka (sadece mobil) */}
        <Link
        href="/#top"
        onClick={(e) => goTo(e, "/#top")}
        className="md:hidden text-base font-bold tracking-wide text-zinc-900 hover:text-zinc-700 whitespace-nowrap"
        >
        DUKKAN ADI
        </Link>

        {/* Desktop menü */}
        <nav className="hidden md:flex flex-1 justify-evenly">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={(e) => goTo(e, m.href)}
              className={`text-lg hover:text-zinc-600 ${
                m.label === "RANDEVU AL" ? "text-[var(--brand)] font-bold" : ""
              }`}
            >
              {m.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger (sağda) */}
        <button
          className="md:hidden p-2 border rounded ml-auto"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900 mb-1" />
          <div className="w-5 h-0.5 bg-zinc-900" />
        </button>
      </div>

      {/* Mobile panel */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-white/20 backdrop-blur-sm ${open ? "max-h-80" : "max-h-0"}`}>
        <nav className="grid gap-2 py-3">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={(e) => goTo(e, m.href)}
              className={`py-2 text-center border-b last:border-0 ${
                m.label === "RANDEVU AL" ? "text-[var(--brand)] font-bold" : ""
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