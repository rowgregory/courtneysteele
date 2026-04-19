"use client";

import Link from "next/link";
import { ONLYFANS_URL } from "@/app/lib/constants/urls";

export function Header() {
  return (
    <div className="relative overflow-hidden">
      {/* Top utility bar */}
      <div className="px-3 sm:px-4 py-1.5 flex items-center justify-between text-[10px] sm:text-xs text-white/50 bg-black/60 backdrop-blur-sm">
        <span className="shrink-0">
          Exclusive{" "}
          <a
            href={ONLYFANS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            Access
          </a>
        </span>

        <div className="flex items-center gap-1.5 text-green-400 text-[10px] tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          <span className="hidden sm:inline uppercase font-mono">
            Chat Live Now
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header className="px-3 sm:px-6 backdrop-blur-sm sticky top-0 z-50 border-b border-white/5">
        <div className="max-w-350 mx-auto h-12 sm:h-16 flex items-center justify-between gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 min-w-0 flex items-center font-metalmania text-white"
            style={{ fontSize: "clamp(18px, 5vw, 36px)" }}
          >
            Courtney Steele
          </Link>

          {/* Right actions */}
          <div className="flex items-center shrink-0">
            {/* sm+ — full label */}
            <Link
              href="/subscribe"
              className="hidden sm:flex items-center px-4 h-9 text-[10px] tracking-[0.2em] uppercase font-mono font-bold text-surface-dark transition-opacity hover:opacity-80"
              style={{
                background:
                  "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227)",
              }}
            >
              Subscribe
            </Link>

            {/* mobile — compact */}
            <Link
              href="/subscribe"
              className="flex sm:hidden items-center px-3 h-8 text-[9px] tracking-[0.12em] uppercase font-mono font-bold text-surface-dark transition-opacity hover:opacity-80"
              style={{
                background:
                  "linear-gradient(135deg, #7a5c10, #b8922a, #c9a227)",
              }}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
