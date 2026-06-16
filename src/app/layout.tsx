import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Choccoladd",
  description: "Premium Malaysian cocoa chocolates and herbal cocoa drinks by Newbox Greens Ventures.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
