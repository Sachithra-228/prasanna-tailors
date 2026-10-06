"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import type { Product } from "@/data/products";
import { availabilityInquiry } from "@/lib/whatsapp";
import { SiteButton } from "@/components/ui/SiteButton";

export function AvailabilityForm({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [date, setDate] = useState("");
  const [requirement, setRequirement] = useState(product.rental ? "Rental" : "Tailoring");
  const href = useMemo(() => availabilityInquiry(product, size, date, requirement), [product, size, date, requirement]);

  return (
    <form className="grid gap-4 border border-[#ded5c6] bg-[#fbf7ef] p-5" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#15120f]" htmlFor="size">Preferred size</label>
        <select id="size" value={size} onChange={(event) => setSize(event.target.value)} className="h-12 w-full border border-[#d8cdbc] bg-white px-3 text-[#15120f]">
          {(product.sizes ?? ["Ask in store"]).map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#15120f]" htmlFor="date">Required date</label>
        <input id="date" type="date" value={date} onChange={(event) => setDate(event.target.value)} className="h-12 w-full border border-[#d8cdbc] bg-white px-3 text-[#15120f]" />
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#15120f]" htmlFor="requirement">Requirement</label>
        <select id="requirement" value={requirement} onChange={(event) => setRequirement(event.target.value)} className="h-12 w-full border border-[#d8cdbc] bg-white px-3 text-[#15120f]">
          <option>Rental</option>
          <option>Tailoring</option>
          <option>Purchase inquiry</option>
          <option>Fitting appointment</option>
        </select>
      </div>
      <SiteButton href={href} variant="gold" className="w-full">
        <MessageCircle className="h-4 w-4" />
        Check Availability on WhatsApp
      </SiteButton>
      <SiteButton href="tel:+94776120015" variant="dark" className="w-full">
        <Phone className="h-4 w-4" />
        Call Prasanna Tailors
      </SiteButton>
    </form>
  );
}
