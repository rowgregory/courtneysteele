"use client";

import { INSTAGRAM_URL, ONLYFANS_URL } from "@/app/lib/constants/urls";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Subscribe", href: "/subscribe" },
];

const socials = [
  {
    href: ONLYFANS_URL,
    handle: "onlyfans.com/courtney.steele",
    label: "OnlyFans",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      </svg>
    ),
  },
  {
    href: INSTAGRAM_URL,
    handle: "instagram.com/__courtneysteele/",
    label: "Instagram",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

// Rich gold — no neon yellow at the light end
const GOLD = "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227)";
const GOLD_TEXT = {
  background: GOLD,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-black overflow-hidden">
      {/* Top bar — back to top + pattern */}
      <div
        className="relative w-full h-24 flex items-center px-6 md:px-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(180,140,30,0.04) 10px,
            rgba(180,140,30,0.04) 20px
          )`,
          borderBottom: "1px solid rgba(180,140,30,0.1)",
        }}
      >
        <button onClick={scrollToTop} className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: GOLD }}
          >
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="#0a0a0a"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </div>
          <span
            className="text-[11px] tracking-[0.3em] uppercase font-bold font-mono transition-opacity group-hover:opacity-70"
            style={{ color: "rgba(180,140,30,0.8)" }}
          >
            Back To Top
          </span>
        </button>
      </div>

      {/* Main footer content */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(180,140,30,0.03) 10px,
            rgba(180,140,30,0.03) 20px
          )`,
        }}
      >
        <div className="max-w-245 lg:max-w-285 xl:max-w-350 mx-auto px-6 md:px-10 py-16 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — logo + nav */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div>
                <p
                  className="font-merriweather font-bold text-lg leading-none"
                  style={GOLD_TEXT}
                >
                  Courtney Steele
                </p>
                <p
                  className="text-[10px] tracking-[0.2em] uppercase font-mono mt-0.5"
                  style={{ color: "rgba(180,140,30,0.45)" }}
                >
                  Exclusive Access
                </p>
              </div>
            </motion.div>

            {/* Nav */}
            <nav className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span style={{ color: "rgba(180,140,30,0.7)" }}>✦</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Right — OnlyFans */}
          <div className="grid sm:grid-cols-2 gap-8">
            {socials.map((s) => (
              <motion.button
                key={s.label}
                onClick={() => window.open(s.href, "_blank")}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-4 sm:col-span-2"
              >
                <div
                  className="w-10 h-10 shrink-0 flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(180,140,30,0.25)",
                    color: "#b8922a",
                  }}
                >
                  {s.icon}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm mb-1">{s.label}</p>
                  <span
                    className="text-xs font-mono transition-opacity hover:opacity-70"
                    style={{ color: "rgba(180,140,30,0.55)" }}
                  >
                    {s.handle}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="w-full px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(180,140,30,0.1)" }}
      >
        <p
          className="text-xs font-mono"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          © {new Date().getFullYear()} Courtney Steele. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/terms"
            className="text-xs font-mono transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs font-mono transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
