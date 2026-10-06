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
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#100e0c]/90 text-white backdrop-blur-xl transition-all",
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
            className="grid h-11 w-11 place-items-center border border-white/18 bg-white/5 lg:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[100] min-h-dvh w-screen bg-[#100e0c] text-white transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#100e0c_0%,#18130f_58%,#0d0b09_100%)]" />
        <div className="relative flex min-h-dvh flex-col px-5 pb-8 pt-4">
          <div className="flex items-center justify-between border-b border-white/12 pb-4">
            <span className="font-serif text-xl tracking-[0.16em]">PRASANNA TAILORS</span>
            <button type="button" className="grid h-12 w-12 place-items-center border border-white/24 bg-white/5" aria-label="Close navigation" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 grid gap-1">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="border-b border-white/10 py-5 font-serif text-3xl text-white transition hover:text-[#c9a766]" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
          <SiteButton href={visitInquiry()} variant="gold" className="mt-auto w-full">
            <Phone className="h-4 w-4" />
            Check Availability
          </SiteButton>
        </div>
      </div>
    </>
  );
}
