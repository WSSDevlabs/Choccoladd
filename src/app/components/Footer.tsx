"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z"/>
  </svg>
);

const pageLinks = ["/all-products", "/all-gift-sets", "/all-non-food"];

const navItems = [
  { label: "Home",         href: "#home" },
  { label: "Our Story",    href: "#story" },
  { label: "Our Products", href: "/all-products" },
  { label: "Gift Sets",    href: "/all-gift-sets" },
  { label: "Non-Food",     href: "/all-non-food" },
  { label: "Contact Us",   href: "#contact" },
];

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleLink = (href: string) => {
    if (pageLinks.includes(href)) {
      router.push(href);
    } else if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  };

  return (
    <footer className="bg-[#0A0402] text-[#fdf6ee]/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="text-sm max-w-xs mb-6"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}
            >
              Premium praline chocolates, panning treats, and herbal cocoa sachet drinks by Newbox Greens Ventures, crafted from the finest Malaysian cacao.
            </p>
            <img
              src="/images/logo/LogoChoccoladd.png"
              alt="Choccoladd"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Nav links */}
          <div>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => handleLink(href)}
                    className="hover:text-[#C8A040] transition-colors cursor-pointer text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <ul className="space-y-2 text-sm mb-6" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              <li>sufeilnewboxgreens@gmail.com</li>
              <li>+60 19-631 9373</li>
              <li>Desa Pandan, Kuala Lumpur</li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/choccoladd/" },
                { icon: Facebook,  href: "https://www.facebook.com/choccoladd" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#C8A040]/30 flex items-center justify-center text-[#fdf6ee]/50 hover:border-[#C8A040] hover:text-[#C8A040] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@choccoladd?_r=1&_t=ZS-97YoQtSh5b2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C8A040]/30 flex items-center justify-center text-[#fdf6ee]/50 hover:border-[#C8A040] hover:text-[#C8A040] transition-colors duration-200"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#fdf6ee]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            © 2026 Newbox Greens Ventures. All rights reserved.
          </p>
          <p className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            Made with ♥ in Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
