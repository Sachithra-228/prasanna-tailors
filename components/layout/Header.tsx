"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteButton } from "@/components/ui/SiteButton";
import { visitInquiry } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Tailoring", "/tailoring"],
  ["Wedding", "/wedding"],
  ["Rentals", "/rentals"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#100e0c]/80 text-white backdrop-blur-xl transition-all",
        scrolled ? "py-2 shadow-2xl shadow-black/10" : "py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center border border-[#c9a766] font-serif text-lg text-[#c9a766]">PT</span>
          <span className="leading-none">
            <span className="block font-serif text-lg tracking-[0.16em]">PRASANNA</span>
            <span className="block text-[11px] font-semibold tracking-[0.38em] text-[#c9a766]">TAILORS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-white/78 transition hover:text-[#c9a766]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SiteButton href={visitInquiry()} variant="gold">
            <Phone className="h-4 w-4" />
            Check Availability
          </SiteButton>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-white/18 lg:hidden"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className={cn("fixed inset-0 z-50 bg-[#100e0c] p-5 transition lg:hidden", open ? "translate-x-0" : "translate-x-full")}>
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl tracking-[0.16em]">PRASANNA TAILORS</span>
          <button type="button" className="grid h-11 w-11 place-items-center border border-white/20" aria-label="Close navigation" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-12 grid gap-5">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="border-b border-white/10 pb-4 font-serif text-3xl" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <SiteButton href={visitInquiry()} variant="gold" className="mt-10 w-full">
          <Phone className="h-4 w-4" />
          Check Availability
        </SiteButton>
      </div>
    </header>
  );
}
