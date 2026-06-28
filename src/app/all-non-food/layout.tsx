import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocoa Wellness & Skincare",
  description:
    "Discover Choccoladd's cocoa-based wellness and skincare products — harnessing the natural power of Malaysian cacao for your health and beauty routine.",
  alternates: {
    canonical: "https://choccoladd.com/all-non-food",
  },
  openGraph: {
    title: "Cocoa Wellness & Skincare | Choccoladd",
    description:
      "Cocoa-based wellness and skincare products harnessing the natural power of authentic Malaysian cacao.",
    url: "https://choccoladd.com/all-non-food",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
