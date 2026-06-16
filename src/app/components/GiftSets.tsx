"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Gift, Heart, Star, Package, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { giftSets } from "./gift-sets-data";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Gift, Heart, Star, Package, Sparkles };

const PREVIEW_COUNT = 4;

type GiftSet = (typeof giftSets)[0];

function GiftSetCard({ set, index }: { set: GiftSet; index: number }) {
  const Icon = iconMap[set.icon];
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 25 });

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I'm interested in the ${set.name} gift set (${set.price}). Please provide more details.`);
    window.open(`https://wa.me/60196319373?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, zIndex: 5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 900, rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="group flex flex-col bg-[#2C1206]/70 rounded-2xl border border-[#C8A040]/20 overflow-hidden hover:border-[#C8A040]/50 hover:shadow-2xl hover:shadow-[#C8A040]/10 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-[#2c1810]">
        <img
          src={set.image}
          alt={set.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/60 to-transparent" />
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: set.accent }}
        >
          <Icon size={18} className="text-[#fdf6ee]" />
        </div>
      </div>
      <div className="p-3 sm:p-6 flex flex-col flex-1">
        <h3 className="text-[#fdf6ee] mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.25rem" }}>
          {set.name}
        </h3>
        <p className="text-[#fdf6ee]/60 text-sm mb-5 flex-1" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>
          {set.description}
        </p>
        <ul className="mb-6 space-y-1.5">
          {set.includes.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[#C8A040] text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
              <span className="w-1 h-1 rounded-full bg-[#C8A040] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="text-[#C8A040]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem" }}>
            {set.price}
          </span>
          <button
            onClick={handleWhatsApp}
            className="px-5 py-2.5 text-xs uppercase tracking-widest text-[#2c1810] hover:opacity-90 transition-opacity"
            style={{ background: set.accent, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Order Gift
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function GiftSets() {
  const router = useRouter();

  return (
    <section id="gift-sets" className="py-24" style={{ background: "#1A0802", borderRadius: "3rem" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Curated with Care
          </p>
          <h2
            className="text-[#fdf6ee] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Gift Sets
          </h2>
          <p
            className="text-[#fdf6ee]/60 max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.75 }}
          >
            The perfect gift for every occasion: birthdays, weddings, corporate events, or simply to show someone you care.
          </p>
          <div className="w-16 h-0.5 bg-[#C8A040] mx-auto mt-4" />
        </div>

        {/* Cards — show first 3 only */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {giftSets.slice(0, PREVIEW_COUNT).map((set, i) => (
            <GiftSetCard key={set.id} set={set} index={i} />
          ))}
        </div>

        {/* View All button */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/all-gift-sets")}
            className="inline-block px-10 py-3.5 border border-[#C8A040] text-[#C8A040] text-xs uppercase tracking-widest hover:bg-[#C8A040] hover:text-[#2c1810] transition-all duration-200"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            View All Gift Sets
          </button>
        </div>
      </div>
    </section>
  );
}
