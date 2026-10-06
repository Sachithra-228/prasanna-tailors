import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Ruler, Shirt, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/collection/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteButton } from "@/components/ui/SiteButton";
import { featuredProducts } from "@/data/products";
import { serviceCategories } from "@/data/services";
import { visitInquiry } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#100e0c] text-white">
      <Image src="/images/hero/studio-hero.png" alt="Premium formal suit in a tailoring studio" fill priority sizes="100vw" className="object-cover opacity-68 motion-safe:animate-[heroZoom_16s_ease-out_forwards]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#100e0c]/92 via-[#100e0c]/55 to-transparent" />
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl motion-safe:animate-[fadeUp_.8s_ease-out_both]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a766]">Bespoke Tailoring & Wedding Wear</p>
          <h1 className="font-serif text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">Tailored for Your Moments That Matter.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">Custom tailoring, elegant formal wear and wedding suit rentals crafted to help you look your best for every special occasion.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <SiteButton href="/wedding" variant="gold">Explore Wedding Collection</SiteButton>
            <SiteButton href="/contact" variant="outline">Contact Us</SiteButton>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-white/72"><MapPin className="h-4 w-4 text-[#c9a766]" />Pannipitiya, Sri Lanka</p>
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  const highlights = [
    ["Custom Fit", "Clothing tailored according to your measurements.", Ruler],
    ["Wedding Ready", "Formal and wedding outfits for your special day.", Sparkles],
    ["Personal Service", "Visit the shop and discuss your style, size and requirements.", Shirt],
  ];
  return (
    <section className="bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Tailoring With Attention to Every Detail" text="Prasanna Tailors provides custom tailoring and formal wedding clothing for customers looking for a proper fit, polished appearance and personal guidance before their event." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map(([title, text, Icon]) => (
            <div key={title as string} className="border border-[#e1d8ca] bg-white p-7">
              <Icon className="h-7 w-7 text-[#8a6d35]" />
              <h3 className="mt-5 font-serif text-2xl text-[#15120f]">{title as string}</h3>
              <p className="mt-3 leading-7 text-[#756b5e]">{text as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCategories() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services" title="What We Create" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((card) => (
            <Link key={card.title} href={card.href} className="group relative min-h-[360px] overflow-hidden bg-[#100e0c] text-white">
              <Image src={card.image} alt={card.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-72 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c]/92 via-[#100e0c]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-serif text-3xl">{card.title}</h3>
                <p className="mt-3 max-w-lg text-white/72">{card.text}</p>
                <span className="mt-6 inline-flex min-h-11 items-center bg-white px-4 text-sm font-semibold text-[#15120f] transition group-hover:bg-[#c9a766]">{card.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedWedding() {
  return (
    <section className="bg-[#15120f] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading invert eyebrow="Wedding Collection" title="Make Your Wedding Look Unforgettable" text="From classic suits to complete groom outfits, explore styles suitable for weddings, receptions and formal celebrations." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.slice(0, 6).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}

export function ReviewsAndCta() {
  return (
    <section className="bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.9fr]">
        <div className="border border-[#e1d8ca] bg-white p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d35]">Customer Reviews</p>
          <h2 className="mt-4 font-serif text-4xl text-[#15120f]">8 Google Reviews</h2>
          <p className="mt-4 leading-8 text-[#756b5e]">Review text is not shown here because individual reviews have not been provided. Visitors can open the Google listing to view current feedback.</p>
          <SiteButton href="https://www.google.com/search?q=Prasanna+Tailors+298B+Old+Road+Pannipitiya" variant="dark" className="mt-7">View Google Reviews</SiteButton>
        </div>
        <div className="border border-[#c9a766]/35 bg-[#15120f] p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a766]">Visit the shop</p>
          <h2 className="mt-4 font-serif text-4xl">Ready to plan your outfit?</h2>
          <p className="mt-4 leading-8 text-white/72">Send the outfit name, size and date on WhatsApp, or visit the Pannipitiya shop to discuss measurements and fitting.</p>
          <SiteButton href={visitInquiry()} variant="gold" className="mt-7"><MessageCircle className="h-4 w-4" />Book a Visit</SiteButton>
        </div>
      </div>
    </section>
  );
}
