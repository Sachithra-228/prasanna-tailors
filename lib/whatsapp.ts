import type { Product } from "@/data/products";

const whatsappBase = "https://wa.me/94776120015";

export function whatsappLink(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function productInquiry(product: Product) {
  return whatsappLink(
    `Hello Prasanna Tailors, I am interested in the ${product.name}. Could you please let me know the availability, sizes and rental price?`,
  );
}

export function visitInquiry() {
  return whatsappLink(
    "Hello Prasanna Tailors, I would like to book a visit to discuss tailoring or wedding wear options.",
  );
}

export function availabilityInquiry(product: Product, size: string, date: string, requirement: string) {
  return whatsappLink(
    `Hello Prasanna Tailors,\n\nI would like to check the availability of:\n\nProduct: ${product.name}\nSize: ${size || "Not selected"}\nRequired Date: ${date || "Not selected"}\nRequirement: ${requirement}\n\nPlease let me know the availability and rental price.`,
  );
}
