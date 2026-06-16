"use client";

import { usePathname, useRouter } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleLink = (href: string) => {
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  };

  return (
    <footer className="bg-[#0A0402] text-[#fdf6ee]/60 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/images/logo/LogoChoccoladd.png"
                alt="Choccoladd"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p
              className="text-sm max-w-xs"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}
            >
              Premium praline chocolates, panning treats, and herbal cocoa sachet drinks by Newbox Greens Ventures, crafted from the finest Malaysian cacao.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Quick Links
            </p>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              {[
                ["#home", "Home"],
                ["#products", "Our Products"],
                ["#gift-sets", "Gift Sets"],
                ["#story", "Our Story"],
                ["#contact", "Contact Us"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleLink(href); }}
                    className="hover:text-[#C8A040] transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Contact
            </p>
            <ul className="space-y-2 text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              <li>sufeilnewboxgreens@gmail.com</li>
              <li>+60 19-631 9373</li>
              <li>Desa Pandan, Kuala Lumpur</li>
            </ul>
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
