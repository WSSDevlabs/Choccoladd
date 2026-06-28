import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse Choccoladd's full collection of handcrafted Malaysian cocoa chocolates — pralines, panning chocolates, keto chocolates, wellness cocoa drinks and more. Order via WhatsApp.",
  alternates: {
    canonical: "https://choccoladd.com/all-products",
  },
  openGraph: {
    title: "All Products | Choccoladd",
    description:
      "Browse our full collection of handcrafted Malaysian cocoa chocolates — pralines, keto chocolates, wellness drinks and more.",
    url: "https://choccoladd.com/all-products",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
