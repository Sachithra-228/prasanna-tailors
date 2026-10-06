import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteButton } from "@/components/ui/SiteButton";
import { processSteps, tailoringServices } from "@/data/services";
import { visitInquiry } from "@/lib/whatsapp";

export default function TailoringPage() {
  return (
    <main className="pt-24">
      <section className="bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[#8a6d35]">Tailoring Services</p>
            <h1 className="font-serif text-5xl leading-tight sm:text-7xl">Tailored to Fit You</h1>
            <p className="mt-6 text-lg leading-8 text-[#756b5e]">Shirts, trousers, coats, suits and alterations prepared around your measurements, preferred fit and occasion.</p>
            <SiteButton href={visitInquiry()} variant="dark" className="mt-8">Book a Tailoring Visit</SiteButton>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/tailoring/tailoring-worktable.png" alt="Tailor measuring suiting fabric" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {tailoringServices.map(({ title, text, process, icon: Icon, id }) => (
              <article id={id} key={title} className="border border-[#ded5c6] p-7">
                <Icon className="h-8 w-8 text-[#8a6d35]" />
                <h2 className="mt-5 font-serif text-3xl">{title}</h2>
                <p className="mt-3 leading-7 text-[#756b5e]">{text}</p>
                <p className="mt-5 border-l-2 border-[#c9a766] pl-4 text-sm leading-7 text-[#15120f]">{process}</p>
                <SiteButton href={visitInquiry()} variant="dark" className="mt-6">Ask About {title}</SiteButton>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#15120f] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading invert eyebrow="Process" title="From First Discussion to Final Fitting" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map(([number, title, text]) => (
              <div key={number} className="border border-white/14 p-6">
                <p className="font-serif text-5xl text-[#c9a766]">{number}</p>
                <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-white/68">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
