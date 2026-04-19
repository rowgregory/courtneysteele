"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const perks = [
  { icon: "✦", label: "Exclusive Content" },
  { icon: "◈", label: "Early Access" },
  { icon: "❋", label: "Weekly Drops" },
  { icon: "◉", label: "Live Sessions" },
];

export default function CourtneySubscribePage() {
  return (
    <div className="flex flex-col text-[#f0ece4] font-sans">
      {/* HERO */}
      <section className="px-3 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 max-w-170 mx-auto w-full text-center">
        <motion.p
          {...fadeUp(0.2)}
          className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-brand-primary mb-4 sm:mb-5"
        >
          Courtney Steele — Official Channel
        </motion.p>

        <motion.h1
          {...fadeUp(0.3)}
          className="font-playfair font-black leading-[1.08] text-[#f0ece4] mb-4 sm:mb-5"
          style={{ fontSize: "clamp(30px, 8vw, 62px)" }}
        >
          Life, Style &amp;
          <br />
          <em className="italic text-brand-primary">Everything Between</em>
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="text-[13px] sm:text-[15px] leading-[1.7] text-[#6b6560] font-light max-w-120 mx-auto mb-7 sm:mb-9 px-2 sm:px-0"
        >
          Behind-the-scenes content, early access drops, and the moments that
          don&apos;t make the feed — all in one place.
        </motion.p>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex items-center gap-3 max-w-[200px] sm:max-w-70 mx-auto mb-8 sm:mb-10"
        >
          <div className="flex-1 h-px bg-brand-primary/15" />
          <div className="w-1.5 h-1.5 bg-brand-primary rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-brand-primary/15" />
        </motion.div>

        {/* Perks strip */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex border border-brand-primary/15 mb-10 sm:mb-14"
        >
          {perks.map((perk, i) => (
            <div
              key={perk.label}
              className={`flex-1 py-3 sm:py-5 px-1 sm:px-3 text-center ${
                i < perks.length - 1 ? "border-r border-brand-primary/15" : ""
              }`}
            >
              <div className="text-[14px] sm:text-[18px] mb-1 sm:mb-2">
                {perk.icon}
              </div>
              <div className="text-[8px] sm:text-[10px] tracking-[0.06em] sm:tracking-[0.08em] uppercase text-[#6b6560] leading-normal">
                {perk.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* SUBSCRIBE CARD */}
      <section className="px-3 sm:px-6 pb-16 sm:pb-20">
        <motion.div
          {...fadeUp(0.6)}
          className="max-w-130 mx-auto bg-[#111] border border-brand-primary/15 p-6 sm:p-10 relative overflow-hidden text-center"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-brand-primary to-transparent" />

          <h2
            className="font-playfair font-bold text-[#f0ece4] mb-2"
            style={{ fontSize: "clamp(18px, 5vw, 24px)" }}
          >
            Join the Inner Circle
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#6b6560] leading-normal mb-6 sm:mb-8">
            Exclusive content, early drops &amp; more. Free — always.
          </p>

          <Link
            href="https://onlyfans.com/courtney.steele"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brand-primary hover:bg-[#d4b87a] text-surface-dark text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase py-4 sm:py-4.5 cursor-pointer transition-colors"
          >
            Subscribe Now →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
