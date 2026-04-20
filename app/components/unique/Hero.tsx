"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Picture from "../common/Picture";
import { useEffect, useState } from "react";
import { ONLYFANS_URL } from "@/app/lib/constants/urls";

const images = ["/images/levels/_1/img-3.jpg", "/images/levels/_1/img-4.png"];

export function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((photo) => (photo + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-3 sm:px-6 md:px-10 pt-8 sm:pt-12">
      <div className="max-w-245 lg:max-w-285 xl:max-w-350 w-full gap-8 sm:gap-10 mx-auto grid sm:grid-cols-2 items-center">
        {/* Content */}
        <div className="relative z-20 py-10 sm:py-24 w-full text-center sm:text-left">
          {/* Film strip accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center sm:justify-start gap-2 mb-6 sm:mb-8"
          >
            <div className="h-px w-8 sm:w-12 bg-brand-primary/60" />
            <span className="text-[9px] tracking-[0.3em] uppercase text-brand-primary/40 font-mono">
              400TX ✦ 35mm
            </span>
            <div className="h-px w-8 sm:w-12 bg-brand-primary/20" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-primary/50 text-[9px] sm:text-xs tracking-[0.35em] uppercase font-mono mb-4 sm:mb-6"
          >
            ✦ Your favorite plaything ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-bold leading-[1.05] mb-2 font-merriweather"
            style={{
              fontSize: "clamp(48px, 12vw, 110px)",
              background:
                "linear-gradient(135deg, #7a5c10 0%, #b8922a 30%, #c9a227 50%, #b8922a 70%, #7a5c10 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(180,140,30,0.15))",
            }}
          >
            Courtney
            <br />
            <span
              style={{
                background: `
                  repeating-linear-gradient(
                    90deg,
                    rgba(255,255,255,0.03) 0px,
                    rgba(255,255,255,0.06) 1px,
                    rgba(255,255,255,0.03) 2px,
                    transparent 3px,
                    transparent 6px
                  ),
                  linear-gradient(
                    180deg,
                    #6b6b6b 0%,
                    #c8c8c8 20%,
                    #e8e8e8 35%,
                    #ffffff 50%,
                    #e0e0e0 65%,
                    #a0a0a0 80%,
                    #6b6b6b 100%
                  )
                `,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
              }}
            >
              Steele
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center sm:justify-start gap-3 mb-6 sm:mb-8"
          >
            <div
              className="h-px w-16 sm:w-20"
              style={{
                background: "linear-gradient(to right, #b8922a, transparent)",
              }}
            />
            <div className="w-1 h-1 rounded-full bg-brand-primary/60 shrink-0" />
            <div
              className="h-px w-6 sm:w-8"
              style={{
                background: "linear-gradient(to right, #b8922a, transparent)",
                opacity: 0.3,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white/25 text-sm sm:text-base max-w-xs mx-auto sm:mx-0 mb-8 sm:mb-12 italic font-merriweather leading-relaxed"
          >
            Cheap thrills, but not that cheap
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center sm:justify-start"
          >
            <Link
              href={ONLYFANS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-surface-dark font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227, #b8922a, #7a5c10)",
                boxShadow:
                  "0 0 30px rgba(180,140,30,0.2), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Subscribe Now
            </Link>
          </motion.div>

          {/* Frame counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 sm:mt-12 text-[9px] tracking-[0.3em] uppercase text-brand-primary/20 font-mono"
          >
            {String(currentPhoto + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </motion.p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-square max-h-[80vw] sm:max-h-150 overflow-hidden outline-1 outline-brand-primary/15 outline-offset-8">
          {[
            "top-0 left-0",
            "top-0 right-0",
            "bottom-0 left-0",
            "bottom-0 right-0",
          ].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} w-3 h-3 sm:w-4 sm:h-4 z-10 border border-brand-primary/40`}
            />
          ))}

          <Picture
            src={images[0]}
            priority
            alt="Courtney Steele"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentPhoto === 0 ? "opacity-100" : "opacity-0"
            }`}
          />
          <Picture
            src={images[1]}
            alt="Courtney Steele"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentPhoto === 1 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Bottom film label */}
          <div className="absolute bottom-0 left-0 right-0 h-6 sm:h-7 flex items-center justify-between px-3 z-10 bg-surface-dark/85 border-t border-brand-primary/15">
            <span className="text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-brand-primary/60 font-mono">
              Kodak Gold 200
            </span>
            <span className="text-[9px] text-brand-primary/30 font-mono">
              ✦
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
