"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Picture from "../common/Picture";

const tiers = [
  {
    image: "/images/levels/_4/img-9.JPG",
    title: "The Subscription",
    description: "OnlyFans Monthly",
    detail: "Exclusive photos & videos updated weekly",
    price: "$6.66/mo",
    cta: "Subscribe Now",
    href: "https://onlyfans.com/courtney.steele",
    featured: true,
  },
  {
    image: "/images/levels/_4/img-6.JPG",
    title: "3 Month Bundle",
    description: "5% off — OnlyFans",
    detail: "Lock in 3 months of exclusive content",
    price: "$18.98 total",
    cta: "Get the Bundle",
    href: "https://onlyfans.com/courtney.steele",
  },
  {
    image: "/images/levels/_4/img-11.JPG",
    title: "6 Month Bundle",
    description: "10% off — OnlyFans",
    detail: "Half a year of exclusive content",
    price: "$35.96 total",
    cta: "Get the Bundle",
    href: "https://onlyfans.com/courtney.steele",
  },
  {
    image: "/images/levels/_4/img-16.JPG",
    title: "12 Month Bundle",
    description: "20% off — OnlyFans",
    detail: "Best value — a full year of exclusive content",
    price: "$63.94 total",
    cta: "Best Value →",
    href: "https://onlyfans.com/courtney.steele",
  },
];

export function TiersSection() {
  return (
    <section className="w-full bg-black py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-245 lg:max-w-285 xl:max-w-350 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold px-4 py-1.5 mb-6"
            style={{
              background: "linear-gradient(135deg, #a07d1c, #c9a227, #e8c84a)",
              color: "#0a0a0a",
            }}
          >
            How To Access Courtney
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-merriweather leading-tight">
            <span className="text-white/90">How It </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a07d1c 0%, #c9a227 30%, #e8c84a 50%, #c9a227 70%, #7a5c10 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(201,162,39,0.2))",
              }}
            >
              Works
            </span>
          </h2>

          <Link
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-sm font-mono tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "rgba(201,162,39,0.6)" }}
          >
            View All Options
            <span>→</span>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              {/* Image */}
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{
                  border: tier.featured
                    ? "1px solid rgba(201,162,39,0.4)"
                    : "1px solid rgba(201,162,39,0.08)",
                  boxShadow: tier.featured
                    ? "0 0 40px rgba(201,162,39,0.15)"
                    : "none",
                }}
              >
                <Picture
                  priority={false}
                  src={tier.image}
                  alt={tier.title}
                  className="object-cover transition-all duration-700 w-full h-full"
                />

                {/* Grain overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.75) 100%)",
                  }}
                />

                {/* Orange-red tint */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "rgba(180,40,10,0.2)",
                    mixBlendMode: "color",
                  }}
                />

                {/* Light leak top left */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 0%, rgba(220,100,30,0.15) 0%, transparent 60%)",
                  }}
                />

                {/* Featured badge */}
                {tier.featured && (
                  <div
                    className="absolute top-3 right-3 text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-1 font-mono"
                    style={{
                      background:
                        "linear-gradient(135deg, #a07d1c, #c9a227, #e8c84a)",
                      color: "#0a0a0a",
                    }}
                  >
                    Start Here
                  </div>
                )}

                {/* Kodak label */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-between px-2"
                  style={{
                    background: "rgba(0,0,0,0.9)",
                    borderTop: "1px solid rgba(201,162,39,0.15)",
                  }}
                >
                  <span
                    className="text-[8px] tracking-[0.2em] uppercase font-mono"
                    style={{ color: "rgba(201,162,39,0.4)" }}
                  >
                    400TX ✦ 35mm
                  </span>
                  <span
                    className="text-[8px] font-mono"
                    style={{ color: "rgba(201,162,39,0.2)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="pt-5 pb-6 px-1 flex flex-col gap-1 bg-black">
                <h3 className="text-white font-merriweather font-bold text-xl">
                  {tier.title}
                </h3>
                <p className="text-white/30 text-xs tracking-wide">
                  {tier.description}
                </p>
                <p className="text-white/20 text-xs italic">{tier.detail}</p>
                <p
                  className="text-lg font-bold font-mono mt-2 tracking-wide"
                  style={{
                    background:
                      "linear-gradient(135deg, #a07d1c, #c9a227, #e8c84a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {tier.price}
                </p>
                <Link
                  href={tier.href}
                  className="mt-3 text-[10px] tracking-[0.25em] uppercase font-bold font-mono transition-opacity hover:opacity-70 w-fit"
                  style={{
                    color: tier.featured ? "#c9a227" : "rgba(201,162,39,0.4)",
                  }}
                >
                  {tier.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
