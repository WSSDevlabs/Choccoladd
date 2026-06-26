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

export const giftSets: GiftSet[] = [
  {
    id: 1,
    name: "Cocoa Products Grand Gifts Set",
    price: "From RM 80.00",
    description:
      "A grand curated set featuring all types of Choccoladd products. Fully customizable to suit any occasion or recipient.",
    includes: ["All Product Types", "Fully Customized", "Custom Packaging", "Premium Presentation"],
    image: "/images/gift-sets/cocoa-grand-gift-set.jpeg",
    icon: "Package",
    accent: "#C8A040",
    occasion: "All Occasions",
  },
  {
    id: 2,
    name: "Gifts For Her / His",
    price: "From RM 50.00",
    description:
      "A thoughtful gift set perfect for birthdays, anniversaries, and congratulations. Tailored with love for someone special.",
    includes: ["Birthday", "Anniversary", "Congratulations", "Custom Message"],
    image: "/images/gift-sets/gifts-for-her-his.jpeg",
    icon: "Heart",
    accent: "#c4504a",
    occasion: "Personal",
  },
  {
    id: 3,
    name: "Corporate / Business Gifts Set",
    price: "From RM 50.00",
    description:
      "Elegant corporate gift sets ideal for clients, partners, and business events. Bulk orders and branded packaging available.",
    includes: ["Bulk Orders Available", "Branded Packaging", "Custom Selection", "Business Occasions"],
    image: "/images/gift-sets/corporate-business-gift-set.jpeg",
    icon: "Star",
    accent: "#C8A040",
    occasion: "Corporate",
  },
  {
    id: 4,
    name: "Goodies (Praline Chocolates 80% Cocoa)",
    price: "RM 2.00 / pcs",
    description:
      "Individually priced 80% cocoa praline chocolates — perfect as event goodies, door gifts, or add-ons to any gift set.",
    includes: ["80% Cocoa Pralines", "Priced Per Piece", "Event & Door Gifts", "Minimum Order Applies"],
    image: "/images/gift-sets/goodies-praline-chocolates.jpeg",
    icon: "Gift",
    accent: "#C8A040",
    occasion: "Events",
  },
];
