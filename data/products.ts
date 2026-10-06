export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "Wedding Suit" | "Coat" | "Waistcoat" | "Trouser" | "Complete Set";
  description: string;
  image: string;
  gallery?: string[];
  sizes?: string[];
  availability: "available" | "limited" | "unavailable";
  rental: boolean;
  featured?: boolean;
  style: string;
  fit: string;
  occasion: string;
};

const studio = "/images/wedding/formal-collection.png";
const hero = "/images/hero/studio-hero.png";
const tailoring = "/images/tailoring/tailoring-worktable.png";

export const products: Product[] = [
  {
    id: "classic-black-groom-suit",
    slug: "classic-black-groom-suit",
    name: "Classic Black Groom Suit",
    category: "Wedding Suit",
    description:
      "A timeless black formal suit option for grooms, receptions and evening celebrations.",
    image: studio,
    gallery: [studio, hero, tailoring],
    sizes: ["S", "M", "L", "XL"],
    availability: "available",
    rental: true,
    featured: true,
    style: "Classic black formalwear",
    fit: "Fitting confirmed in store",
    occasion: "Wedding, reception, formal event",
  },
  {
    id: "navy-groom-suit",
    slug: "navy-groom-suit",
    name: "Navy Groom Suit",
    category: "Wedding Suit",
    description:
      "A refined navy suit choice for wedding ceremonies and formal photographs.",
    image: hero,
    gallery: [hero, studio, tailoring],
    sizes: ["M", "L", "XL"],
    availability: "limited",
    rental: true,
    featured: true,
    style: "Navy formal suit",
    fit: "Available fit depends on size",
    occasion: "Wedding, engagement, reception",
  },
  {
    id: "charcoal-formal-suit",
    slug: "charcoal-formal-suit",
    name: "Charcoal Formal Suit",
    category: "Complete Set",
    description:
      "A versatile charcoal formal outfit for weddings, office functions and special occasions.",
    image: studio,
    gallery: [studio, tailoring, hero],
    sizes: ["S", "M", "L"],
    availability: "available",
    rental: true,
    featured: true,
    style: "Charcoal suit set",
    fit: "Final fitting recommended",
    occasion: "Formal celebration, office event, wedding guest",
  },
  {
    id: "wedding-waistcoat-set",
    slug: "wedding-waistcoat-set",
    name: "Wedding Waistcoat Set",
    category: "Waistcoat",
    description:
      "A polished waistcoat option to complete a groom or wedding party outfit.",
    image: hero,
    gallery: [hero, studio],
    sizes: ["S", "M", "L", "XL"],
    availability: "available",
    rental: true,
    featured: true,
    style: "Formal waistcoat pairing",
    fit: "Checked during fitting",
    occasion: "Groom outfit, wedding party, reception",
  },
  {
    id: "classic-formal-coat",
    slug: "classic-formal-coat",
    name: "Classic Formal Coat",
    category: "Coat",
    description:
      "A clean formal coat option for customers who need a polished jacket for an event.",
    image: tailoring,
    gallery: [tailoring, studio],
    sizes: ["M", "L", "XL"],
    availability: "limited",
    rental: true,
    featured: true,
    style: "Single formal coat",
    fit: "Try-on required",
    occasion: "Formal wear, reception, ceremony",
  },
  {
    id: "premium-groom-package",
    slug: "premium-groom-package",
    name: "Premium Groom Package",
    category: "Complete Set",
    description:
      "A coordinated groom outfit combination arranged after discussing size, style and event needs.",
    image: studio,
    gallery: [studio, hero, tailoring],
    sizes: ["S", "M", "L", "XL"],
    availability: "available",
    rental: true,
    featured: true,
    style: "Complete formal combination",
    fit: "Planned by appointment or shop visit",
    occasion: "Wedding ceremony and reception",
  },
  {
    id: "formal-trouser-rental",
    slug: "formal-trouser-rental",
    name: "Formal Trouser Rental",
    category: "Trouser",
    description:
      "Formal trouser options to pair with coats, shirts and wedding waistcoats.",
    image: tailoring,
    gallery: [tailoring, studio],
    sizes: ["S", "M", "L", "XL"],
    availability: "available",
    rental: true,
    style: "Formal trouser",
    fit: "Hem and waist fit checked in store",
    occasion: "Wedding, office event, formal occasion",
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
