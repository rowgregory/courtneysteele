"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { ONLYFANS_URL } from "@/app/lib/constants/urls";
import Picture from "../common/Picture";

const GOLD = "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227)";

const categories = [
  {
    image: "/images/levels/_4/img-6.JPG",
    title: "Cheap Thrills",
    count: "48 posts",
  },
  {
    image: "/images/levels/_4/img-9.JPG",
    title: "Kinky",
    count: "63 posts",
  },
  {
    image: "/images/levels/_4/img-11.JPG",
    title: "Trash",
    count: "31 posts",
  },
  {
    image: "/images/levels/_4/img-16.JPG",
    title: "Brat",
    count: "57 posts",
  },
];

export function CategoriesSection() {
  return (
    <section className="w-full bg-black overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-10 sm:py-14 lg:py-16 px-3 sm:px-6"
      >
        <span
          className="inline-block text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-bold px-3 sm:px-4 py-1.5 mb-5 sm:mb-6"
          style={{ background: GOLD, color: "#0a0a0a" }}
        >
          Exclusive Content
        </span>

        <h2
          className="font-bold font-merriweather leading-tight"
          style={{ fontSize: "clamp(32px, 8vw, 72px)" }}
        >
          <span className="text-white/90">Unlock </span>
          <span
            style={{
              background:
                "linear-gradient(135deg, #7a5c10 0%, #b8922a 30%, #c9a227 50%, #b8922a 70%, #7a5c10 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(180,140,30,0.2))",
            }}
          >
            Everything
          </span>
        </h2>

        <p className="text-white/30 text-xs sm:text-sm tracking-wide mt-3 sm:mt-4 font-mono">
          Subscribe to access all categories
        </p>
      </motion.div>

      {/* Image strip — 2 cols mobile, 4 cols lg */}
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group cursor-pointer overflow-hidden"
            style={{ height: "clamp(200px, 45vw, 480px)" }}
            onClick={() => window.open(ONLYFANS_URL, "_blank")}
          >
            {/* Image */}
            <Picture
              priority={false}
              src={cat.image}
              alt="Locked content"
              className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
            />

            {/* Blur + dark overlay */}
            <div
              className="absolute inset-0 backdrop-blur-xl sm:backdrop-blur-2xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 100%)",
              }}
            />

            {/* Gold tint */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                background: "rgba(180,140,30,0.3)",
                mixBlendMode: "color",
              }}
            />

            {/* Grain */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                mixBlendMode: "overlay",
              }}
            />

            {/* Divider right */}
            {i < categories.length - 1 && (
              <div
                className="absolute top-0 right-0 w-px h-full z-10"
                style={{ background: "rgba(180,140,30,0.15)" }}
              />
            )}

            {/* Center lock */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 sm:gap-3 z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "clamp(40px, 8vw, 56px)",
                  height: "clamp(40px, 8vw, 56px)",
                  border: "1px solid rgba(180,140,30,0.5)",
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <Lock
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  style={{ color: "rgba(180,140,30,0.9)" }}
                />
              </motion.div>

              <span
                className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-mono font-bold px-2 sm:px-3 py-1"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(180,140,30,0.2)",
                  color: "rgba(180,140,30,0.6)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Subscribers Only
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Titles bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full bg-black pt-10 sm:pt-14 pb-8 sm:pb-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center text-center px-2 sm:px-4"
          >
            <div
              className="h-3 sm:h-4 w-16 sm:w-24 mb-2 rounded-sm"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <span
              className="text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-mono"
              style={{ color: "rgba(180,140,30,0.3)" }}
            >
              {cat.count}
            </span>
            <div
              className="h-px w-6 sm:w-8 mt-2 sm:mt-3"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(180,140,30,0.3), transparent)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Unlock CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-3 sm:gap-4 pb-16 sm:pb-20 px-4"
      >
        <p className="text-white/20 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-mono text-center">
          199+ exclusive posts waiting
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(ONLYFANS_URL, "_blank")}
          className="flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-bold font-mono text-[#0a0a0a] cursor-pointer w-full sm:w-auto justify-center max-w-xs sm:max-w-none"
          style={{ background: GOLD }}
        >
          <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          Unlock All Content
        </motion.button>
      </motion.div>
    </section>
  );
}
