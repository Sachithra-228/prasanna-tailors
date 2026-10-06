import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteButton } from "@/components/ui/SiteButton";
import { visitInquiry } from "@/lib/whatsapp";

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="bg-[#15120f] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#c9a766]">About Prasanna Tailors</p>
            <h1 className="font-serif text-5xl leading-tight sm:text-7xl">Crafted With Care. Tailored For You.</h1>
            <p className="mt-7 text-lg leading-8 text-white/74">Prasanna Tailors focuses on custom fit, formal clothing, wedding outfits and personal service for customers who want clothing prepared around their requirements.</p>
            <SiteButton href={visitInquiry()} variant="gold" className="mt-8">Discuss Your Outfit</SiteButton>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/tailoring/tailoring-worktable.png" alt="Tailoring worktable with suiting fabric and measuring tools" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title="A Practical, Personal Approach to Formalwear" text="The shop helps customers choose an appropriate look, confirm measurements and prepare clothing for weddings, office events and special occasions. The focus is on understanding the requirement clearly before tailoring, renting or adjusting an outfit." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {["Custom fit", "Formal clothing", "Wedding outfits"].map((item) => (
              <div key={item} className="border border-[#ded5c6] bg-white p-7">
                <h2 className="font-serif text-2xl">{item}</h2>
                <p className="mt-3 leading-7 text-[#756b5e]">Visit the shop to discuss sizes, preferred style and fitting requirements before confirming the final outfit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
