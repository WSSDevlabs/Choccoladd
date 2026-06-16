export type GiftSet = {
  id: number;
  name: string;
  price: string;
  description: string;
  includes: string[];
  image: string;
  icon: "Gift" | "Heart" | "Star" | "Package" | "Sparkles";
  accent: string;
  occasion: string;
};

const placeholderImage = "/images/placeholder.svg";

export const giftSets: GiftSet[] = [
  {
    id: 1,
    name: "XXXX XXXXXX",
    price: "RM XX.XX",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX.",
    includes: ["XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX"],
    image: placeholderImage,
    icon: "Gift",
    accent: "#C8A040",
    occasion: "Birthday",
  },
  {
    id: 2,
    name: "XXXX XXXXXX",
    price: "RM XX.XX",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX.",
    includes: ["XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX"],
    image: placeholderImage,
    icon: "Heart",
    accent: "#c4504a",
    occasion: "Romance",
  },
  {
    id: 3,
    name: "XXXX XXXXXX",
    price: "RM XX.XX",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX.",
    includes: ["XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX"],
    image: placeholderImage,
    icon: "Star",
    accent: "#C8A040",
    occasion: "Corporate",
  },
  {
    id: 4,
    name: "XXXX XXXXXX",
    price: "RM XX.XX",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX.",
    includes: ["XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX"],
    image: placeholderImage,
    icon: "Sparkles",
    accent: "#C8A040",
    occasion: "Wedding",
  },
  {
    id: 5,
    name: "XXXX XXXXXX",
    price: "RM XX.XX",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX.",
    includes: ["XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX"],
    image: placeholderImage,
    icon: "Package",
    accent: "#C8A040",
    occasion: "Corporate",
  },
  {
    id: 6,
    name: "XXXX XXXXXX",
    price: "RM XX.XX",
    description: "XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX XXXXXX.",
    includes: ["XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX", "XXXXXX XXXXXX"],
    image: placeholderImage,
    icon: "Gift",
    accent: "#c4504a",
    occasion: "Birthday",
  },
];
