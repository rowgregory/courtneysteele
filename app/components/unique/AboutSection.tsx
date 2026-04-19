"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Picture from "../common/Picture";
import { ONLYFANS_URL } from "@/app/lib/constants/urls";

const GOLD = "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227)";
const GOLD_TEXT = {
  background: "linear-gradient(135deg, #a07d1c 0%, #c9a227 40%, #b8922a 100%)",
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

export function AboutSection() {
  return (
    <section className="w-full overflow-hidden relative min-h-auto lg:min-h-150">
      {/* BG sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Picture
          src="/images/g-sparkles-2.png"
          alt=""
          className="absolute top-0 right-0 w-full lg:w-3/4 h-full object-cover opacity-30 sm:opacity-40"
          priority={false}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />

      {/* Gold ambient glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(180,140,30,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-245 lg:max-w-285 xl:max-w-350 mx-auto px-3 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-0">
        {/* Left — collage */}
        <div className="relative py-10 sm:py-14 lg:py-16 px-0 sm:px-2 md:px-4">
          <div className="grid grid-cols-2 gap-0 max-w-sm mx-auto lg:max-w-none">
            {/* Top left — feature card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-black flex flex-col items-center text-center justify-center gap-2 sm:gap-4 p-3 sm:p-6"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="sm:w-11 sm:h-11"
                style={{ color: "#b8922a" }}
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <div>
                <h3
                  className="font-merriweather font-bold text-xs sm:text-base mb-0.5 sm:mb-1"
                  style={GOLD_TEXT}
                >
                  Meet Courtney
                </h3>
                <p className="text-white/30 text-[10px] sm:text-xs leading-relaxed hidden sm:block">
                  One creator, endless content
                </p>
              </div>
            </motion.div>

            {/* Top right — image blurred */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-square relative overflow-hidden group"
            >
              <Picture
                src="/images/levels/_2/img-10.JPG"
                alt="Courtney Steele"
                priority={false}
                className="object-cover w-full h-full grayscale transition-all duration-700"
              />
              {/* Lock overlay */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-2xl">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(180,140,30,0.4)",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    style={{ color: "#b8922a" }}
                  >
                    <rect x="3" y="11" width="18" height="11" rx="1" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Bottom left — image blurred */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="aspect-square relative overflow-hidden group"
            >
              <Picture
                priority={false}
                src="/images/levels/_2/img-10.JPG"
                alt="Creator"
                className="object-cover w-full h-full transition-all duration-700"
              />
              {/* Lock overlay */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-2xl">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(180,140,30,0.4)",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    style={{ color: "#b8922a" }}
                  >
                    <rect x="3" y="11" width="18" height="11" rx="1" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Bottom right — feature card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-square bg-black flex flex-col items-center text-center justify-center gap-2 sm:gap-4 p-3 sm:p-6"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="sm:w-11 sm:h-11"
                style={{ color: "#b8922a" }}
              >
                <rect x="2" y="6" width="14" height="12" rx="1" />
                <path d="m22 8-6 4 6 4V8z" />
              </svg>
              <div>
                <h3
                  className="font-merriweather font-bold text-xs sm:text-base mb-0.5 sm:mb-1"
                  style={GOLD_TEXT}
                >
                  Exclusive Content
                </h3>
                <p className="text-white/30 text-[10px] sm:text-xs leading-relaxed hidden sm:block">
                  Photos, videos &amp; exclusives updated weekly
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right — about content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col justify-center px-0 sm:px-6 md:px-12 py-10 sm:py-14 lg:py-16"
        >
          <div className="relative z-10">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span
                className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold px-3 py-1.5 shrink-0"
                style={{ background: GOLD, color: "#0a0a0a" }}
              >
                Who Is She
              </span>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(180,140,30,0.4), transparent)",
                }}
              />
            </div>

            <h2
              className="font-merriweather font-bold leading-[1.05] mb-4"
              style={{ fontSize: "clamp(28px, 6vw, 60px)" }}
            >
              <span className="text-white/90">Connect With</span>
              <br />
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
                Courtney Steele
              </span>
            </h2>

            {/* Kodak detail */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <div
                className="h-px w-16"
                style={{
                  background: "linear-gradient(to right, #b8922a, transparent)",
                }}
              />
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#b8922a", opacity: 0.6 }}
              />
              <div
                className="h-px w-8"
                style={{
                  background:
                    "linear-gradient(to right, rgba(180,140,30,0.3), transparent)",
                }}
              />
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-8 sm:mb-10 max-w-md">
              Get closer than ever. Courtney shares exclusive photos, personal
              videos, and behind-the-scenes moments you won&apos;t find anywhere
              else — only on her subscription page. Join thousands of fans that
              are already inside.
            </p>

            <Link
              href={ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-[11px] tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:scale-[1.02] w-fit"
              style={{
                background: GOLD,
                color: "#0a0a0a",
                boxShadow:
                  "0 0 30px rgba(180,140,30,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Subscribe
            </Link>

            <p
              className="mt-8 sm:mt-10 text-[9px] tracking-[0.3em] uppercase font-mono"
              style={{ color: "rgba(180,140,30,0.25)" }}
            >
              ✦ Courtney Steele ✦ Exclusive Content
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
