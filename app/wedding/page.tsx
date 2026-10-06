import Image from "next/image";
import { ProductCard } from "@/components/collection/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteButton } from "@/components/ui/SiteButton";
import { featuredProducts } from "@/data/products";
import { visitInquiry } from "@/lib/whatsapp";

export default function WeddingPage() {
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-[#15120f] px-4 py-24 text-white sm:px-6 lg:px-8">
        <Image src="/images/wedding/formal-collection.png" alt="Wedding and formal suit collection" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-[#15120f]/50" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#c9a766]">Wedding Collection</p>
          <h1 className="font-serif text-5xl leading-tight sm:text-7xl">Your Wedding. Your Style.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/76">Groom suits, wedding coats, shirts, trousers, waistcoats, complete outfit combinations and rental options for the day you need to look your best.</p>
          <SiteButton href={visitInquiry()} variant="gold" className="mt-8">Plan Your Wedding Outfit</SiteButton>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Wedding & Groom Outfit Options" text="Browse example outfits, then contact the shop to confirm size, rental price and availability for your date." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
