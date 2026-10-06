import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AvailabilityForm } from "@/components/collection/AvailabilityForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} | Prasanna Tailors`,
    description: `${product.description} Contact Prasanna Tailors to check availability, sizes and rental price.`,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  const gallery = product.gallery?.length ? product.gallery : [product.image];

  return (
    <main className="pt-24">
      <section className="bg-[#fbf7ef] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#efe6d7]">
              <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {gallery.slice(0, 3).map((image) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden bg-[#efe6d7]">
                  <Image src={image} alt={`${product.name} gallery image`} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6d35]">{product.category}</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#15120f]">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-[#756b5e]">{product.description}</p>
            <dl className="mt-7 grid gap-4 border-y border-[#ded5c6] py-6 text-sm sm:grid-cols-2">
              <div><dt className="font-semibold">Available sizes</dt><dd className="mt-1 text-[#756b5e]">{product.sizes?.join(" / ")}</dd></div>
              <div><dt className="font-semibold">Availability</dt><dd className="mt-1 text-[#756b5e]">{product.availability}</dd></div>
              <div><dt className="font-semibold">Rental / tailoring</dt><dd className="mt-1 text-[#756b5e]">{product.rental ? "Rental inquiry available" : "Tailoring inquiry"}</dd></div>
              <div><dt className="font-semibold">Price</dt><dd className="mt-1 text-[#756b5e]">Contact for Rental Price</dd></div>
            </dl>
            <div className="mt-7">
              <AvailabilityForm product={product} />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="Product Details" text="Exact specifications can be confirmed at the shop based on current stock, size and fitting requirements." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Style", product.style],
              ["Fit", product.fit],
              ["Available sizes", product.sizes?.join(" / ") ?? "Confirm in store"],
              ["Suitable occasion", product.occasion],
              ["Rental/purchase availability", "Confirm availability and price by WhatsApp or phone."],
            ].map(([label, value]) => (
              <div key={label} className="border border-[#ded5c6] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a6d35]">{label}</p>
                <p className="mt-3 text-[#15120f]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
