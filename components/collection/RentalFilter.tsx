"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/collection/ProductCard";
import { cn } from "@/lib/utils";

const filters = ["All", "Wedding Suit", "Coat", "Waistcoat", "Trouser", "Complete Set"];

export function RentalFilter() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => products.filter((product) => product.rental && (active === "All" || product.category === active)),
    [active],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "min-h-11 border px-4 text-sm font-semibold transition",
              active === filter ? "border-[#15120f] bg-[#15120f] text-white" : "border-[#ded5c6] bg-white text-[#15120f] hover:border-[#c9a766]",
            )}
          >
            {filter === "All" ? "All" : `${filter}s`}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}
