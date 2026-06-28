import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Sets",
  description:
    "Shop Choccoladd's curated chocolate gift sets — perfect for birthdays, weddings, corporate events and celebrations. Handcrafted from premium Malaysian cacao. Order via WhatsApp.",
  alternates: {
    canonical: "https://choccoladd.com/all-gift-sets",
  },
  openGraph: {
    title: "Chocolate Gift Sets | Choccoladd",
    description:
      "Curated chocolate gift sets for every occasion — birthdays, weddings, corporate events. Handcrafted from premium Malaysian cacao.",
    url: "https://choccoladd.com/all-gift-sets",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
