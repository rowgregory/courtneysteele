"use client";

import Image from "next/image";

interface ImageMarqueeProps {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function KodakImageMarquee({
  images,
  direction = "left",
  speed = 30,
}: ImageMarqueeProps) {
  const track = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden py-6 bg-surface-dark max-w-245 lg:max-w-285 xl:max-w-350 mx-auto">
      <div
        className="flex gap-4 w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 w-44 h-52 sm:w-52 sm:h-64 group"
            style={{
              transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`,
              transition: "transform 0.3s ease",
            }}
          >
            <div
              className="w-full h-full flex flex-col"
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(201,162,39,0.12)",
                padding: "8px 8px 28px 8px",
                boxShadow:
                  "0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(201,162,39,0.08)",
              }}
            >
              {/* Image */}
              <div className="relative flex-1 overflow-hidden bg-[#080808]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-700"
                  sizes="208px"
                  style={{ filter: "brightness(0.85) contrast(1.1)" }}
                />
                {/* Dark vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
                  }}
                />
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 h-7 flex items-center justify-between px-2">
                <span
                  className="text-[9px] tracking-[0.2em] uppercase font-mono"
                  style={{ color: "rgba(201,162,39,0.35)" }}
                >
                  Kodak Gold
                </span>
                <span
                  className="text-[9px] tracking-[0.15em] font-mono"
                  style={{ color: "rgba(201,162,39,0.2)" }}
                >
                  {String((i % images.length) + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
