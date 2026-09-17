import versatileImg from "@/assets/products/versatile.png";
import corrugatedImg from "@/assets/products/corrugated.png";
import elegantileImg from "@/assets/products/elegantile.png";
import boxProfileImg from "@/assets/products/box-profile.png";
import dumazazImg from "@/assets/products/dumuzaz.png";
import eurotileImg from "@/assets/products/eurotile.png";

export interface ProductVariant {
  gauge: string;
  pricePerMeter: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
  features: string[];
}

export const products: Product[] = [
  {
    id: "versatile",
    name: "Versatile Mabati",
    description: "High-quality corrugated roofing sheets with superior durability and weather resistance. Perfect for residential and commercial applications.",
    image: versatileImg,
    variants: [
      { gauge: "28g", pricePerMeter: 658 },
      { gauge: "30g", pricePerMeter: 590 },
    ],
    features: [
      "Superior weather resistance",
      "Long-lasting durability",
      "Easy installation",
      "Multiple color options",
    ],
  },
  {
    id: "corrugated",
    name: "Corrugated Mabati",
    description: "Classic corrugated design offering excellent strength and reliability. Ideal for both residential and industrial buildings.",
    image: corrugatedImg,
    variants: [
      { gauge: "28g", pricePerMeter: 500 },
      { gauge: "30g", pricePerMeter: 455 },
    ],
    features: [
      "Traditional design",
      "Strong and reliable",
      "Cost-effective solution",
      "Proven performance",
    ],
  },
  {
    id: "elegantile",
    name: "Elegantile Mabati",
    description: "Premium tile-effect roofing that combines aesthetic appeal with practical functionality. Adds elegance to any structure.",
    image: elegantileImg,
    variants: [
      { gauge: "28g", pricePerMeter: 690 },
      { gauge: "30g", pricePerMeter: 676 },
    ],
    features: [
      "Tile-effect design",
      "Elegant appearance",
      "Premium quality",
      "Enhanced aesthetics",
    ],
  },
  {
    id: "box-profile",
    name: "Box Profile",
    description: "Modern box profile design offering sleek aesthetics and exceptional structural integrity for contemporary buildings.",
    image: boxProfileImg,
    variants: [
      { gauge: "28g", pricePerMeter: 560 },
      { gauge: "30g", pricePerMeter: 511 },
    ],
    features: [
      "Modern design",
      "Structural strength",
      "Contemporary look",
      "Versatile application",
    ],
  },
  {
    id: "dumuzaz",
    name: "Dumuzaz Unpainted",
    description: "Economical unpainted roofing solution perfect for warehouses and industrial applications where cost-effectiveness is key.",
    image: dumazazImg,
    variants: [
      { gauge: "28g", pricePerMeter: 376 },
      { gauge: "30g", pricePerMeter: 388 },
    ],
    features: [
      "Budget-friendly",
      "Industrial strength",
      "Low maintenance",
      "Quick installation",
    ],
  },
  {
    id: "eurotile",
    name: "Eurotile Mabati",
    description: "European-style tile roofing with advanced technology providing superior protection and sophisticated appearance.",
    image: eurotileImg,
    variants: [
      { gauge: "28g", pricePerMeter: 643 },
      { gauge: "30g", pricePerMeter: 678 },
    ],
    features: [
      "European styling",
      "Advanced technology",
      "Superior protection",
      "Sophisticated finish",
    ],
  },
];
