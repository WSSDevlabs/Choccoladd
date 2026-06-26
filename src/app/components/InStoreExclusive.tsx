"use client";

import { motion } from "motion/react";

const exclusiveItems = [
  {
    id: 1,
    name: "Chocolate Shakes",
    subtitle: null,
    variants: [] as string[],
    image: "/images/InStore/chocolate-shakes.jpeg",
    description: "Rich, indulgent chocolate milkshakes blended with our premium house chocolate.",
  },
  {
    id: 2,
    name: "Sandwiches",
    subtitle: "24pcs / Box",
    variants: ["Tuna", "Egg Mayo"],
    image: "/images/InStore/sandwiches.jpeg",
    description: "",
  },
];

export function InStoreExclusive() {
  return (
    <section className="py-24" style={{ background: "#fdf6ee" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Only Here
          </p>
          <h2
            className="text-[#2C1206]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            Our In-Store Exclusive
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A040] mx-auto mt-4" />
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-2xl mx-auto">
          {exclusiveItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-square overflow-hidden rounded-xl border border-[#C8A040]/30 group-hover:border-[#C8A040]/70 transition-all duration-300 mb-5 bg-[#3D1A07]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <h3
                className="text-[#2C1206] uppercase tracking-widest text-sm mb-1"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                {item.name}
              </h3>

              {item.subtitle && (
                <p
                  className="text-[#C8A040] text-xs mb-3"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {item.subtitle}
                </p>
              )}

              {item.variants.length > 0 && (
                <ul className="space-y-1 mb-2">
                  {item.variants.map((v) => (
                    <li
                      key={v}
                      className="flex items-center justify-center gap-1.5 text-[#2C1206]/60 text-xs"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#C8A040] flex-shrink-0" />
                      {v}
                    </li>
                  ))}
                </ul>
              )}

              {item.description && (
                <p
                  className="text-[#2C1206]/50 text-xs leading-relaxed"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
