import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { productInquiry } from "@/lib/whatsapp";
import { SiteButton } from "@/components/ui/SiteButton";

const status = {
  available: "Available",
  limited: "Limited availability",
  unavailable: "Ask in store",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden border border-[#e4ded2] bg-white">
      <Link href={`/collection/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-[#eee7db]">
        <Image
          src={product.image}
          alt={`${product.name} at Prasanna Tailors`}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-[#15120f]/86 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f3dfaa]">
          {product.category}
        </span>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-[#15120f]">{product.name}</h3>
            <p className="mt-2 text-sm text-[#756b5e]">{status[product.availability]}</p>
          </div>
          <p className="shrink-0 text-right text-sm font-semibold text-[#8a6d35]">
            {product.rental ? "Contact for Rental Price" : "Price on Request"}
          </p>
        </div>
        {product.sizes ? <p className="mt-4 text-sm text-[#756b5e]">Sizes: {product.sizes.join(" / ")}</p> : null}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <SiteButton href={`/collection/${product.slug}`} variant="dark" className="w-full px-3">
            View Details
          </SiteButton>
          <SiteButton href={productInquiry(product)} variant="gold" className="w-full px-3">
            <MessageCircle className="h-4 w-4" />
            Check
          </SiteButton>
        </div>
      </div>
    </article>
  );
}
