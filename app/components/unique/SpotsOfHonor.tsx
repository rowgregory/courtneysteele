"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Picture from "../common/Picture";
import { X } from "lucide-react";

const images = [
  { src: "/images/levels/_4/img-25.jpg", label: "I" },
  { src: "/images/levels/_4/img-26.jpg", label: "II" },
  { src: "/images/levels/_4/img-27.jpg", label: "III" },
];

function Sparkle({
  x,
  y,
  size,
  delay,
  duration,
  repeatDelay,
  color,
  dx,
  dy,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  repeatDelay: number;
  color: string;
  dx: number;
  dy: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
      }}
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: [0, 1, 0.6, 1, 0],
        scale: [0, 1, 0.7, 1.1, 0],
        x: [0, dx, -dx * 0.5, dx * 0.3, 0],
        y: [0, dy, -dy * 0.5, dy * 0.3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: "easeInOut",
      }}
    />
  );
}

const SPARKLES = Array.from({ length: 800 }, (_, i) => {
  const isGold = Math.random() > 0.4;
  const r = 180 + Math.floor(Math.random() * 40);
  const g = 130 + Math.floor(Math.random() * 30);
  const b = 20 + Math.floor(Math.random() * 20);
  const goldAlpha = 0.6 + Math.random() * 0.4;
  const whiteAlpha = 0.4 + Math.random() * 0.6;
  return {
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2,
    delay: Math.random() * 3,
    duration: Math.random() * 1.5 + 1,
    repeatDelay: Math.random() * 4 + 1, // was 0–2.5s, now 1–5s
    color: isGold
      ? `rgba(${r},${g},${b},${goldAlpha})`
      : `rgba(255,255,255,${whiteAlpha})`,
    dx: (Math.random() - 0.5) * 8, // -4 to +4px horizontal drift
    dy: (Math.random() - 0.5) * 8, // -4 to +4px vertical drift
  };
});

function GlitterOverlay({ revealed }: { revealed: boolean }) {
  const [sparkles, setSparkles] = useState<typeof SPARKLES>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSparkles(SPARKLES), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!revealed && (
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeOut" } }}
          style={{ background: "#000" }}
        >
          {/* All sparkles */}
          {mounted && sparkles.map((s) => <Sparkle key={s.id} {...s} />)}

          {/* Tap to reveal hint */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="relative w-14 h-14 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(180,140,30,0.7)" }}
                />
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(180,140,30,0.5)",
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(180,140,30,0.9)"
                    strokeWidth="1.5"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
              <span
                className="text-[9px] tracking-[0.3em] uppercase font-mono"
                style={{ color: "rgba(180,140,30,0.7)" }}
              >
                Tap to Reveal
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(8px)" }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-2xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} w-5 h-5 z-10`}
            style={{ border: "1px solid rgba(180,140,30,0.6)" }}
          />
        ))}
        <Picture
          src={src}
          alt="Spots of Honor"
          className="w-full max-h-[90vh] object-contain"
          priority={false}
        />
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-2 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
            Close
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}

function HonorCard({
  src,
  label,
  index,
}: {
  src: string;
  label: string;
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleClick = () => {
    if (!revealed) {
      setRevealed(true);
      setTimeout(() => setRevealed(false), 3500);
    } else {
      setLightboxOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="flex flex-col gap-3"
      >
        <div
          className="relative overflow-hidden cursor-pointer group"
          style={{
            aspectRatio: "3/4",
            border: "1px solid rgba(180,140,30,0.15)",
          }}
          onClick={handleClick}
        >
          {/* Image — always rendered but hidden by overlay until reveal */}
          <Picture
            src={src}
            alt={`Spots of Honor ${label}`}
            priority={false}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{
              filter: revealed
                ? "sepia(0.2) contrast(1.1) brightness(0.85)"
                : undefined,
            }}
          />

          {/* Glitter overlay */}
          <GlitterOverlay revealed={revealed} />

          {/* Revealed — hover to open lightbox */}
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(0,0,0,0.3)" }}
              >
                <span
                  className="text-[9px] tracking-[0.3em] uppercase font-mono"
                  style={{ color: "rgba(180,140,30,0.8)" }}
                >
                  View Full
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Film label */}
          <div
            className="absolute bottom-0 left-0 right-0 h-6 flex items-center justify-between px-3 z-20"
            style={{
              background: "rgba(0,0,0,0.85)",
              borderTop: "1px solid rgba(180,140,30,0.1)",
            }}
          >
            <span
              className="text-[8px] tracking-[0.2em] uppercase font-mono"
              style={{ color: "rgba(180,140,30,0.5)" }}
            >
              Honor {label}
            </span>
            <span
              className="text-[8px] font-mono"
              style={{ color: "rgba(180,140,30,0.2)" }}
            >
              ✦
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox src={src} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export function SpotsOfHonorSection() {
  return (
    <section className="w-full bg-black overflow-hidden py-16 sm:py-24 px-3 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16"
      >
        <span
          className="inline-block text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-bold px-3 sm:px-4 py-1.5 mb-5 sm:mb-6"
          style={{
            background: "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227)",
            color: "#0a0a0a",
          }}
        >
          Exclusive Gallery
        </span>

        <h2
          className="font-merriweather font-bold leading-tight"
          style={{ fontSize: "clamp(32px, 7vw, 64px)" }}
        >
          <span className="text-white/90">Spots of </span>
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
            Honor
          </span>
        </h2>

        <p
          className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-mono mt-4"
          style={{ color: "rgba(180,140,30,0.35)" }}
        >
          ✦ Tap each to reveal ✦
        </p>
      </motion.div>

      <div className="max-w-245 lg:max-w-285 xl:max-w-350 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <HonorCard
              key={img.src}
              src={img.src}
              label={img.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
