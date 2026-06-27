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
  // ── CHOCOLATE ───────────────────────────────────────────────────────────
  {
    id: 1,
    name: "80% Cocoa Chocolate Praline",
    price: "RM 10.00",
    description:
      "Handcrafted pralines made from premium 80% Malaysian cocoa. Rich, velvety and bold in every bite. 4 units per box, 40g each.",
    image: "/images/products/Praline-chocolate-80.jpg",
    tag: "Bestseller",
    category: "Chocolate",
  },
  {
    id: 2,
    name: "Panning Chocolates Almond, 40g",
    price: "RM 9.50",
    description:
      "Whole roasted almonds enrobed in smooth Choccoladd panning chocolate. A satisfying crunch wrapped in rich cocoa. 8 units per pack, 40g each.",
    image: "/images/products/panning-almond-chocolates.jpg",
    tag: "Popular",
    category: "Chocolate",
  },
  {
    id: 3,
    name: "Keto Coffee Chocolates, 80% Cocoa",
    price: "RM 18.00",
    description:
      "Bold 80% cocoa chocolates infused with real coffee — a keto-friendly indulgence for dark chocolate and coffee lovers alike.",
    image: "/images/products/keto-coffee-chocolates.jpg",
    tag: "Keto",
    category: "Chocolate",
  },
  {
    id: 4,
    name: "Keto Chocolates Seasalt, 80% Cocoa",
    price: "RM 18.00",
    description:
      "Rich 80% cocoa dark chocolates finished with a delicate touch of sea salt. Keto-friendly and intensely satisfying.",
    image: "/images/products/keto-seasalt-chocolates.jpg",
    tag: "Keto",
    category: "Chocolate",
  },
  {
    id: 5,
    name: "Keto Prebiotic Chocolates",
    price: "RM 18.00",
    description:
      "Premium dark chocolates enriched with prebiotic fibre — crafted for gut health without compromising on flavour.",
    image: "/images/products/keto-prebiotic-chocolates.jpg",
    tag: "Keto",
    category: "Chocolate",
  },

  // ── BEVERAGES ────────────────────────────────────────────────────────────
  {
    id: 6,
    name: "Cocoa Milk Chocolate Drink",
    price: "RM 30.00",
    description:
      "A creamy, comforting cocoa milk drink made from real Malaysian cocoa. Simply add hot water and enjoy. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-milk-chocolate-drink.jpg",
    tag: null,
    category: "Beverages",
  },
  {
    id: 7,
    name: "Nafiyya Cocoa Leaf Tea",
    price: "RM 18.90",
    description:
      "A distinctive tea crafted from sun-dried Malaysian cocoa leaves. Light, earthy and smooth with natural antioxidants. 12 sachets per pack, 38g each.",
    image: "/images/products/nafiyya-cocoa-leaf-tea.jpg",
    tag: "New",
    category: "Beverages",
  },
  {
    id: 8,
    name: "Cocoa With Coconut Sugar Drinks Powder, 8 Sachet",
    price: "RM 35.00",
    description:
      "Naturally sweetened cocoa chocolate drink made with coconut sugar for a wholesome, lower-GI indulgence with deep cocoa flavour. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-coconut-sugar-drink.jpg",
    tag: null,
    category: "Beverages",
  },
  {
    id: 9,
    name: "Cocoa With Tongkat Ali Drinks Powder, 8 Sachet",
    price: "RM 35.00",
    description:
      "Premium cocoa drink enriched with Tongkat Ali, a celebrated Malaysian herb known for natural energy and vitality. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-tongkat-ali-drink.jpg",
    tag: "Wellness",
    category: "Beverages",
  },
  {
    id: 10,
    name: "Cocoa With Kacip Fatimah Drinks Powder, 8 Sachet",
    price: "RM 35.00",
    description:
      "Nourishing cocoa drink blended with Kacip Fatimah, a traditional Malaysian herb prized for women's wellness. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-kacip-fatimah-drink.jpg",
    tag: "Wellness",
    category: "Beverages",
  },
];
