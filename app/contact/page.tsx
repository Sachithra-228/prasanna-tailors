import { MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteButton } from "@/components/ui/SiteButton";
import { visitInquiry } from "@/lib/whatsapp";

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="bg-[#15120f] px-4 py-20 text-white sm:px-6 lg:px-8">
        <SectionHeading invert eyebrow="Contact" title="Visit Prasanna Tailors" text="Contact the shop to check rental availability, discuss tailoring requirements or get directions to the Pannipitiya location." />
      </section>
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="border border-[#ded5c6] bg-white p-8">
            <h1 className="font-serif text-4xl">Prasanna Tailors</h1>
            <p className="mt-6 flex gap-3 leading-7 text-[#756b5e]"><MapPin className="mt-1 h-5 w-5 text-[#8a6d35]" />298B Old Road<br />Pannipitiya 10230<br />Sri Lanka</p>
            <p className="mt-5 flex gap-3 text-[#756b5e]"><Phone className="h-5 w-5 text-[#8a6d35]" />077 612 0015</p>
            <p className="mt-5 font-semibold text-[#15120f]">Open until 8:00 PM</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <SiteButton href="tel:+94776120015" variant="dark"><Phone className="h-4 w-4" />Call Now</SiteButton>
            <SiteButton href={visitInquiry()} variant="gold"><MessageCircle className="h-4 w-4" />WhatsApp Us</SiteButton>
            <SiteButton href="https://www.google.com/maps/search/?api=1&query=Prasanna+Tailors+298B+Old+Road+Pannipitiya+10230+Sri+Lanka" variant="dark"><MapPin className="h-4 w-4" />Get Directions</SiteButton>
          </div>
        </div>
      </section>
    </main>
  );
}
