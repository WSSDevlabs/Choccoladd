const placeholderImage = "/images/placeholder.svg";

export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  tag: string | null;
  category: string;
};

export const products: Product[] = [
  // ── COKLAT ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Praline Coklat 80% Koko",
    price: "RM 10.00",
    description:
      "Handcrafted pralines made from premium 80% Malaysian cocoa. Rich, velvety and bold in every bite. 4 units per box, 40g each.",
    image: placeholderImage,
    tag: "Bestseller",
    category: "Coklat",
  },
  {
    id: 2,
    name: "Panning Coklat Almond",
    price: "RM 9.50",
    description:
      "Whole roasted almonds enrobed in smooth Choccoladd panning chocolate. A satisfying crunch wrapped in rich cocoa. 8 units per pack, 40g each.",
    image: placeholderImage,
    tag: "Popular",
    category: "Coklat",
  },
  // ── MINUMAN SACHET ────────────────────────────────────────────────────
  {
    id: 3,
    name: "Minuman Koko Coklat Susu",
    price: "RM 30.00",
    description:
      "A creamy, comforting cocoa milk drink made from real Malaysian cocoa. Simply add hot water and enjoy. 8 sachets per pack, 50g each.",
    image: placeholderImage,
    tag: null,
    category: "Minuman Sachet",
  },
  {
    id: 4,
    name: "Minuman Teh Daun Koko",
    price: "RM 18.50",
    description:
      "A distinctive tea crafted from sun-dried Malaysian cocoa leaves. Light, earthy and smooth with natural antioxidants. 12 sachets per pack, 38g each.",
    image: placeholderImage,
    tag: "New",
    category: "Minuman Sachet",
  },
  {
    id: 5,
    name: "Praline Coklat 80% Koko (Gift Set)",
    price: "RM 8.00",
    description:
      "Our signature 80% cocoa pralines, specially priced for gift set bundles. Same rich flavour, perfect for sharing and gifting. 4 units per box, 40g each.",
    image: placeholderImage,
    tag: "Gift Set",
    category: "Coklat",
  },
  {
    id: 6,
    name: "Panning Coklat (Gift Set)",
    price: "RM 8.00",
    description:
      "Smooth panning chocolates specially priced for gift set pairings. A crowd-pleasing treat ideal for any occasion. 8 units per pack, 40g each.",
    image: placeholderImage,
    tag: "Gift Set",
    category: "Coklat",
  },
  {
    id: 7,
    name: "Minuman Koko Coklat Dgn Tongkat Ali",
    price: "RM 35.00",
    description:
      "Premium cocoa chocolate drink enriched with Tongkat Ali, a celebrated Malaysian herb known for natural energy and vitality. 8 sachets per pack, 50g each.",
    image: placeholderImage,
    tag: "Wellness",
    category: "Minuman Sachet",
  },
  {
    id: 8,
    name: "Minuman Koko Coklat Dgn Kacip Fatimah",
    price: "RM 35.00",
    description:
      "Nourishing cocoa chocolate drink blended with Kacip Fatimah, a traditional Malaysian herb prized for women's wellness. 8 sachets per pack, 50g each.",
    image: placeholderImage,
    tag: "Wellness",
    category: "Minuman Sachet",
  },
  {
    id: 9,
    name: "Minuman Koko Coklat Dgn Gula Kelapa",
    price: "RM 35.00",
    description:
      "Naturally sweetened cocoa chocolate drink made with coconut sugar for a wholesome, lower-GI indulgence with deep cocoa flavour. 8 sachets per pack, 50g each.",
    image: placeholderImage,
    tag: null,
    category: "Minuman Sachet",
  },
];
