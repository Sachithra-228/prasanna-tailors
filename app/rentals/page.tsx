import { RentalFilter } from "@/components/collection/RentalFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function RentalsPage() {
  return (
    <main className="pt-24">
      <section className="bg-[#fbf7ef] px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Rentals" title="Wedding & Formal Wear Rentals" text="Find the right look for your special occasion without the commitment of purchasing a complete outfit." />
      </section>
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RentalFilter />
        </div>
      </section>
    </main>
  );
}
