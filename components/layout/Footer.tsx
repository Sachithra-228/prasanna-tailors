import Link from "next/link";
import { ExternalLink, MapPin, Phone } from "lucide-react";
import { SiteButton } from "@/components/ui/SiteButton";
import { visitInquiry } from "@/lib/whatsapp";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Tailoring", "/tailoring"],
  ["Wedding", "/wedding"],
  ["Rentals", "/rentals"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="bg-[#100e0c] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl tracking-[0.16em]">PRASANNA TAILORS</p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#c9a766]">Tailoring • Wedding Wear • Rentals</p>
          <p className="mt-6 max-w-md text-white/68">Custom tailoring, formalwear and wedding suit rental support from Pannipitiya.</p>
          <SiteButton href={visitInquiry()} variant="gold" className="mt-7">
            Book a Visit
          </SiteButton>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#c9a766]">Navigation</p>
          <div className="grid grid-cols-2 gap-3 text-white/72">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-[#c9a766]">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#c9a766]">Contact</p>
          <p className="flex gap-3 text-white/72"><MapPin className="mt-1 h-4 w-4 text-[#c9a766]" />298B Old Road, Pannipitiya 10230</p>
          <p className="mt-3 flex gap-3 text-white/72"><Phone className="mt-1 h-4 w-4 text-[#c9a766]" />077 612 0015</p>
          <a className="mt-4 inline-flex items-center gap-2 text-white/72 hover:text-[#c9a766]" href="https://www.facebook.com/p/Prasanna-Tailors-100063952546464/">
            <ExternalLink className="h-4 w-4" /> Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/48">© 2026 Prasanna Tailors. All rights reserved.</div>
    </footer>
  );
}
