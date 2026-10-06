import { Ruler, Scissors, Shirt, Sparkles } from "lucide-react";

export const serviceCategories = [
  {
    title: "Wedding Wear",
    text: "Elegant suits and formal outfits for grooms and wedding parties.",
    href: "/wedding",
    image: "/images/wedding/formal-collection.png",
    cta: "Explore Wedding Wear",
  },
  {
    title: "Custom Tailoring",
    text: "Shirts, trousers, coats and suits made according to your measurements.",
    href: "/tailoring",
    image: "/images/tailoring/tailoring-worktable.png",
    cta: "View Tailoring",
  },
  {
    title: "Suit Rentals",
    text: "Choose from available wedding and formal outfits for your special event.",
    href: "/rentals",
    image: "/images/hero/studio-hero.png",
    cta: "View Rentals",
  },
  {
    title: "Alterations",
    text: "Professional fitting and alteration services for a better fit.",
    href: "/tailoring#alterations",
    image: "/images/tailoring/tailoring-worktable.png",
    cta: "Learn More",
  },
];

export const tailoringServices = [
  {
    title: "Shirt Tailoring",
    text: "Custom-made shirts designed according to your preferred fit and style.",
    process: "Choose your preferred style, confirm measurements and visit for fitting guidance.",
    icon: Shirt,
  },
  {
    title: "Trouser Tailoring",
    text: "Formal and wedding trousers tailored to your measurements.",
    process: "Measurements are taken in store and the final fit is reviewed before collection.",
    icon: Ruler,
  },
  {
    title: "Coat & Suit Tailoring",
    text: "Professional formalwear for weddings, office events and special occasions.",
    process: "Discuss the occasion, select the look and complete a fitting before finishing.",
    icon: Sparkles,
  },
  {
    title: "Alterations",
    text: "Adjust existing clothing for improved fit and comfort.",
    process: "Bring the garment to the shop so the required adjustment can be checked.",
    icon: Scissors,
    id: "alterations",
  },
];

export const processSteps = [
  ["01", "Consultation", "Discuss your requirements and preferred style."],
  ["02", "Measurements", "Professional measurements are taken for the correct fit."],
  ["03", "Tailoring", "Your outfit is prepared according to the selected design."],
  ["04", "Final Fitting", "Final adjustments are made to achieve the desired fit."],
];
